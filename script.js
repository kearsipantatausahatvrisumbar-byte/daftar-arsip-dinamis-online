let rowEdit = null;

const fields = [
  "noBerkas","kodeMaster","kodeKlasifikasi","indeks1","indeks2",
  "nomorSurat","diberikanKepada","tanggalSurat","tingkatPerkembangan",
  "jumlah","unitPengolah","retensiAktif","retensiInaktif","statusAkhir",
  "noRak","noBox","noFolder","keterangan"
];

function simpanData() {
  if (rowEdit) {
    updateData();
    return;
  }

  const tabel = document.getElementById("tabelData");
  const row = tabel.insertRow();

  fields.forEach((id, i) => {
    row.insertCell(i).innerText = document.getElementById(id).value;
  });

  const aksi = row.insertCell(fields.length);
  aksi.innerHTML = `<button onclick="editData(this)">Edit</button>`;

  resetForm();
}

function editData(btn) {
  rowEdit = btn.parentNode.parentNode;

  fields.forEach((id, i) => {
    document.getElementById(id).value = rowEdit.cells[i].innerText;
  });

  document.getElementById("btnSimpan").innerText = "Update Data";
}

function updateData() {
  fields.forEach((id, i) => {
    rowEdit.cells[i].innerText = document.getElementById(id).value;
  });

  rowEdit = null;
  document.getElementById("btnSimpan").innerText = "Simpan Data";
  resetForm();
}

function resetForm() {
  fields.forEach(id => document.getElementById(id).value = "");
}

function exportCSV() {
  const table = document.getElementById("tabel");
  let csv = [];

  for (let row of table.rows) {
    let cols = [];
    for (let cell of row.cells) {
      cols.push(`"${cell.innerText.replace(/"/g, '""')}"`);
    }
    csv.push(cols.join(","));
  }

  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.download = "arsip_dinamis.csv";
  link.href = URL.createObjectURL(blob);
  link.click();
}
