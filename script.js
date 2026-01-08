const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

const inputNoBerkas = document.getElementById("noBerkas");
const inputUraian = document.getElementById("uraian");
const inputIndeks1 = document.getElementById("indeks1");
const inputKeterangan = document.getElementById("keterangan");

// nomor berkas otomatis
let nomorBerkas = 1;
inputNoBerkas.value = nomorBerkas;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const noBerkas = inputNoBerkas.value;
  const uraian = inputUraian.value;
  const indeks1 = inputIndeks1.value;
  const keterangan = inputKeterangan.value;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${noBerkas}</td>
    <td>${uraian}</td>
    <td>${indeks1}</td>
    <td>${keterangan}</td>
  `;

  tabel.appendChild(tr);

  // reset input
  inputUraian.value = "";
  inputIndeks1.value = "";
  inputKeterangan.value = "";

  // naikkan nomor berkas
  nomorBerkas++;
  inputNoBerkas.value = nomorBerkas;
});
