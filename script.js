let nomorBerkas = 1;
// isi nomor berkas otomatis saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
  const inputNoBerkas = document.getElementById("noBerkas");
  inputNoBerkas.value = 1;
});
// ambil elemen input No Berkas
const inputNoBerkas = document.getElementById("noBerkas");

// cek data lama di localStorage
let dataTersimpan = JSON.parse(localStorage.getItem("dataArsip")) || [];

// tentukan nomor berikutnya
let nomorBerikutnya = dataTersimpan.length + 1;

// isi otomatis ke input
inputNoBerkas.value = nomorBerikutnya;
const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const noBerkas = nomorBerkas;
  const uraian = document.getElementById("uraian").value;
  const keterangan = document.getElementById("keterangan").value;

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${noBerkas}</td>
    <td>${uraian}</td>
    <td>${keterangan}</td>
  `;

  tabel.appendChild(tr);
  nomorBerkas++;
  document.getElementById("noBerkas").value = nomorBerkas;
  form.reset();
});



