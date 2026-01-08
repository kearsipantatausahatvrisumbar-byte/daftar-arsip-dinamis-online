// ambil elemen form dan tabel
const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

// ketika tombol simpan ditekan
form.addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah refresh halaman

  // ambil nilai input
  const noBerkas = document.getElementById("noBerkas").value;
  const uraian = document.getElementById("uraian").value;
  const keterangan = document.getElementById("keterangan").value;

  // buat baris baru
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${noBerkas}</td>
    <td>${uraian}</td>
    <td>${keterangan}</td>
  `;

  // masukkan ke tabel
  tabel.appendChild(tr);

  // kosongkan form setelah simpan
  form.reset();
});
