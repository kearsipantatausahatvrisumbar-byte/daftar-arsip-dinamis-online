let editIndex = null;

function getKey() {
  const unit = document.getElementById("unitSelect").value;
  return "arsip_" + unit;
}

function loadData() {
  const key = getKey();
  if (!key || key === "arsip_") return;
  const data = JSON.parse(localStorage.getItem(key)) || [];
  document.getElementById("noBerkas").value = data.length + 1;
  renderTable(data);
}

function renderTable(data) {
  const tbody = document.getElementById("tabelData");
  tbody.innerHTML = "";
  data.forEach((d, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${d.no}</td>
      <td>${d.indeks1}</td>
      <td>${d.indeks2}</td>
      <td>${d.kode}</td>
      <td>${d.tingkat}</td>
      <td>${d.uraian}</td>
      <td>${d.keterangan}</td>
      <td><span class="edit-btn" onclick="editData(${i})">Edit</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function simpan() {
  const unit = document.getElementById("unitSelect").value;
  if (!unit) return alert("Pilih unit dulu");

  const key = getKey();
  const data = JSON.parse(localStorage.getItem(key)) || [];

  const obj = {
    no: editIndex !== null ? data[editIndex].no : data.length + 1,
    indeks1: indeks1.value,
    indeks2: indeks2.value,
    kode: kodeKlasifikasi.value,
    tingkat: "Asli / Copy",
    uraian: uraian.value,
    keterangan: keterangan.value
  };

  if (editIndex !== null) {
    data[editIndex] = obj;
    editIndex = null;
  } else {
    data.push(obj);
  }

  localStorage.setItem(key, JSON.stringify(data));
  loadData();
}

function editData(i) {
  const data = JSON.parse(localStorage.getItem(getKey()));
  const d = data[i];
  editIndex = i;

  indeks1.value = d.indeks1;
  indeks2.value = d.indeks2;
  kodeKlasifikasi.value = d.kode;
  uraian.value = d.uraian;
  keterangan.value = d.keterangan;
}

function exportCSV() {
  const key = getKey();
  const data = JSON.parse(localStorage.getItem(key)) || [];
  if (!data.length) return alert("Data kosong");

  let csv = "No,Indeks1,Indeks2,Kode Klasifikasi,Tingkat,Uraian,Keterangan\n";
  data.forEach(d => {
    csv += `${d.no},"${d.indeks1}","${d.indeks2}","${d.kode}","${d.tingkat}","${d.uraian}","${d.keterangan}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = key + ".csv";
  a.click();
}

document.getElementById("unitSelect").addEventListener("change", loadData);
