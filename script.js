let dataArsip = JSON.parse(localStorage.getItem("dataArsip")) || [];
let nomorBerkas = dataArsip.length + 1;


const noBerkasInput = document.getElementById("noBerkas");
const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

noBerkasInput.value = nomorBerkas;
function tambahKeTabel(item) {
  const tr = document.createElement("tr");

  function td(val) {
    const cell = document.createElement("td");
    cell.textContent = val;
    return cell;
  }

  tr.appendChild(td(item.noBerkas));
  tr.appendChild(td(item.kodeKlasifikasi));
  tr.appendChild(td(item.indeks1));
  tr.appendChild(td(item.indeks2));
  tr.appendChild(td(item.noItem));
  tr.appendChild(td(item.uraian));
  tr.appendChild(td(item.tanggal));
  tr.appendChild(td(item.tingkat));
  tr.appendChild(td(item.jumlah));
  tr.appendChild(td(item.unit));
  tr.appendChild(td(item.retensiAktif));
  tr.appendChild(td(item.retensiInaktif));
  tr.appendChild(td(item.statusAkhir));
  tr.appendChild(td(item.keamanan));
  tr.appendChild(td(item.rak));
  tr.appendChild(td(item.box));
  tr.appendChild(td(item.folder));
  tr.appendChild(td(item.keterangan));

  tabel.appendChild(tr);
}
dataArsip.forEach(item => tambahKeTabel(item));


form.addEventListener("submit", function (e) {
  e.preventDefault();
const item = {
  noBerkas: noBerkasInput.value,
  kodeKlasifikasi: document.getElementById("kodeKlasifikasi").value,
  indeks1: document.getElementById("indeks1").value,
  indeks2: document.getElementById("indeks2").value,
  noItem: document.getElementById("noItem").value,
  uraian: document.getElementById("uraian").value,
  tanggal: document.getElementById("tanggal").value,
  tingkat: document.getElementById("tingkat").value,
  jumlah: document.getElementById("jumlah").value,
  unit: document.getElementById("unit").value,
  retensiAktif: document.getElementById("retensiAktif").value,
  retensiInaktif: document.getElementById("retensiInaktif").value,
  statusAkhir: document.getElementById("statusAkhir").value,
  keamanan: document.getElementById("keamanan").value,
  rak: document.getElementById("rak").value,
  box: document.getElementById("box").value,
  folder: document.getElementById("folder").value,
  keterangan: document.getElementById("keterangan").value
};

dataArsip.push(item);
localStorage.setItem("dataArsip", JSON.stringify(dataArsip));

tambahKeTabel(item);
function td(val) {
  const cell = document.createElement("td");
  cell.textContent = val;
  return cell;
}


  tr.appendChild(td(noBerkasInput.value));
  tr.appendChild(td(document.getElementById("kodeKlasifikasi").value));
  tr.appendChild(td(document.getElementById("indeks1").value));
  tr.appendChild(td(document.getElementById("indeks2").value));
  tr.appendChild(td(document.getElementById("noItem").value));
  tr.appendChild(td(document.getElementById("uraian").value));
  tr.appendChild(td(document.getElementById("tanggal").value));
  tr.appendChild(td(document.getElementById("tingkat").value));
  tr.appendChild(td(document.getElementById("jumlah").value));
  tr.appendChild(td(document.getElementById("unit").value));
  tr.appendChild(td(document.getElementById("retensiAktif").value));
  tr.appendChild(td(document.getElementById("retensiInaktif").value));
  tr.appendChild(td(document.getElementById("statusAkhir").value));
  tr.appendChild(td(document.getElementById("keamanan").value));
  tr.appendChild(td(document.getElementById("rak").value));
  tr.appendChild(td(document.getElementById("box").value));
  tr.appendChild(td(document.getElementById("folder").value));
  tr.appendChild(td(document.getElementById("keterangan").value));
// kolom aksi
const aksiTd = document.createElement("td");

// tombol edit
const btnEdit = document.createElement("button");
btnEdit.textContent = "Edit";
btnEdit.onclick = function () {
  const cells = tr.querySelectorAll("td");

  document.getElementById("noItem").value = cells[0].textContent;
  document.getElementById("kodeKlasifikasi").value = cells[1].textContent;
  document.getElementById("indeks1").value = cells[2].textContent;
  document.getElementById("indeks2").value = cells[3].textContent;
  document.getElementById("uraian").value = cells[4].textContent;
  document.getElementById("tanggal").value = cells[5].textContent;
  document.getElementById("tingkat").value = cells[6].textContent;
  document.getElementById("jumlah").value = cells[7].textContent;
  document.getElementById("unit").value = cells[8].textContent;
  document.getElementById("retensiAktif").value = cells[9].textContent;
  document.getElementById("retensiInaktif").value = cells[10].textContent;
  document.getElementById("statusAkhir").value = cells[11].textContent;
  document.getElementById("keamanan").value = cells[12].textContent;
  document.getElementById("rak").value = cells[13].textContent;
  document.getElementById("box").value = cells[14].textContent;
  document.getElementById("folder").value = cells[15].textContent;
  document.getElementById("keterangan").value = cells[16].textContent;

  // hapus baris lama
  tr.remove();
};

// tombol hapus
const btnHapus = document.createElement("button");
btnHapus.textContent = "Hapus";
btnHapus.onclick = function () {
  tr.remove();
};

// masukkan tombol ke kolom aksi
aksiTd.appendChild(btnEdit);
aksiTd.appendChild(btnHapus);

// masukkan kolom aksi ke baris
tr.appendChild(aksiTd);

  

  nomorBerkas++;
  noBerkasInput.value = nomorBerkas;

  form.reset();
  noBerkasInput.value = nomorBerkas;
});



