const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const noBerkas = document.getElementById("noBerkas").value;
  const uraian = document.getElementById("uraian").value;
  const keterangan = document.getElementById("keterangan").value;

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${noBerkas}</td>
    <td>${uraian}</td>
    <td>${keterangan}</td>
  `;

  tabel.appendChild(tr);
  form.reset();
});
