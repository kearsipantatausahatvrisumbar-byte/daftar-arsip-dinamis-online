const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

const inputNoBerkas = document.getElementById("noBerkas");
const inputKodeKlasifikasi = document. getElementById("KodeKlasifikasi"?;
const inputUraian = document.getElementById("uraian");
const inputIndeks1 = document.getElementById("indeks1");
const inputindeks2 = document.getElementById("indeks2");
const inputKeterangan = document.getElementById("keterangan");

// nomor berkas otomatis
let nomorBerkas = 1;
inputNoBerkas.value = nomorBerkas;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const noBerkas = inputNoBerkas.value;
  const noBerkas = KodeKlasifikasi.value;
  const uraian = inputUraian.value;
  const indeks1 = inputIndeks1.value;
  const indeks2 = inputIndeks2.value;
  const keterangan = inputKeterangan.value;

  const tr = document.createElement("tr");

const tdNo = document.createElement("td");
tdNo.textContent = noBerkas;

const tdUraian = document.createElement("td");
tdUraian.textContent = KodeKlasifikasi;

const tdUraian = document.createElement("td");
tdUraian.textContent = uraian;

const tdIndeks1 = document.createElement("td");
tdIndeks1.textContent = indeks1;

const tdIndeks2 = document.createElement("td");
tdIndeks2.textContent = indeks2;
  
const tdKet = document.createElement("td");
tdKet.textContent = keterangan;

tr.appendChild(tdNo);
tr.appendChild(tdKodeKlasifikasi);
tr.appendChild(tdUraian);
tr.appendChild(tdIndeks1);
tr.appendChild(tdIndeks2);
tr.appendChild(tdKet);


  tabel.appendChild(tr);

  // reset input
  inputUraian.value = "";
  inputKodeKlasifikasi.value = "";
  inputIndeks1.value = "";
  inputIndeks2.value = "";
  inputKeterangan.value = "";

  // naikkan nomor berkas
  nomorBerkas++;
  inputNoBerkas.value = nomorBerkas;
});



