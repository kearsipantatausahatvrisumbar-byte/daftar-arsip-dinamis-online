let editIndex = null;

function storageKey() {
  return "arsip_" + document.getElementById("unit").value;
}

function ambilData() {
  const key = storageKey();
  return JSON.parse(localStorage.getItem(key)) || [];
}

function simpanData(data) {
  localStorage.setItem(storageKey(), JSON.stringify(data));
}

function render() {
  const data = ambilData();
  document.getElementById("noBerkas").value = data.length + 1;

  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  data.forEach((d, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${d.no}</td>
        <td>${d.indeks1}</td>
        <td>${d.indeks2}</td>
        <td>${d.kode}</td>
        <td>${d.tingkat}</td>
        <td>${d.uraian}</td>
        <td>${d.keterangan}</td>
        <td><span class="edit" onclick="edit(${i})">Edit</span></td>
      </tr>
    `;
  });
}

function simpan() {
  const unit = document.getElementById("unit").value;
  if (!unit) return alert("Pilih unit dulu");

  const data = ambilData();

  const obj = {
    no: editIndex !== null ? data[editIndex].no : data.length + 1,
    indeks1: document.getElementById("indeks1").value,
    indeks2: document.getElementById("indeks2").value,
    kode: document.getElementById("kode").value,
    tingkat: "Asli / Copy",
    uraian: document.getElementById("uraian").value,
    keterangan: document.getElementById("keterangan").value
  };

  if (editIndex !== null) {
    data[editIndex] = obj;
    editIndex = null;
  } else {
    data.push(obj);
  }

  simpanData(data);
  render();
}

function edit(i) {
  const d = ambilData()[i];
  editIndex = i;

  document.getElementById("indeks1").value = d.indeks1;
  document.getElementById("indeks2").value = d.indeks2;
  document.getElementById("kode").value = d.kode;
  document.getElementById("uraian").value = d.uraian;
  document.getElementById("keterangan").value = d.keterangan;
}

function exportCSV() {
  const data = ambilData();
  if (!data.length) return alert("Data kosong");

  let csv = "No,Indeks1,Indeks2,Kode,Tingkat,Uraian,Keterangan\n";
  data.forEach(d => {
    csv += `${d.no},"${d.indeks1}","${d.indeks2}","${d.kode}","${d.tingkat}","${d.uraian}","${d.keterangan}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = storageKey() + ".csv";
  a.click();
}

document.getElementById("unit").addEventListener("change", render);
