// ambil elemen
const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");
const inputNoBerkas = document.getElementById("noBerkas");
const inputUraian = document.getElementById("uraian");
const inputKeterangan = document.getElementById("keterangan");

// nomor berkas awal
let nomorBerkas = 1;
inputNoBerkas.value = nomorBerkas;

// event simpan
form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload

  const noBerkas = inputNoBerkas.value;
  const uraian = inputUraian.value;
  const keterangan = inputKeterangan.value;

  // VALIDASI SEDERHANA
  if (uraian === "") {
    alert("Uraian Informasi wajib diisi");
    return;
  }

  // buat baris tabel
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${noBerkas}</td>
    <td>${uraian}</td>
    <td>${keterangan}</td>
  `;

  // masukkan ke tabel
  tabel.appendChild(tr);

  // reset input kecuali nomor
  inputUraian.value = "";
  inputKeterangan.value = "";

  // naikkan nomor berkas
  nomorBerkas++;
  inputNoBerkas.value = nomorBerkas;
});
