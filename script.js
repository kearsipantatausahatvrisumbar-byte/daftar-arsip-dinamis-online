let editRow = null;
let noBerkasCounter = 1;

const fields = [
  "noBerkas",
  "kodeMaster",
  "kodeKlasifikasi",
  "indeks1",
  "indeks2",
  "uraianInformasi",
  "tanggalSurat",
  "tingkatPerkembangan",
  "jumlah",
  "unitPengolah",
  "retensiAktif",
  "retensiInaktif",
  "statusAkhir",
  "sistemKeamanan",
  "noRak",
  "noBox",
  "noFolder",
  "keterangan"
];

window.onload = () => {
  document.getElementById("noBerkas").value = noBerkasCounter;
};

function simpanData() {
  if (editRow) return updateData();

  const tbody = document.getElementById("tabelData");
  const row = tbody.insertRow();

  fields.forEach((id, i) => {
    row.insertCell(i).innerText = document.getElementById(id).value;
  });

  row.insertCell(fields.length).innerHTML =
    `<button onclick="editData(this)">Edit</button>`;

  noBerkasCounter++;
  resetForm();
  document.getElementById("noBerkas").value = noBerkasCounter;
}

function editData(btn) {
  editRow = btn.parentNode.parentNode;
  fields.forEach((id, i) => {
    document.getElementById(id).value = editRow.cells[i].innerText;
  });
  document.getElementById("btnSimpan").innerText = "Update Data";
}

function updateData() {
  fields.forEach((id, i) => {
    editRow.cells[i].innerText = document.getElementById(id).value;
  });
  editRow = null;
  document.getElementById("btnSimpan").innerText = "Simpan Data";
  resetForm();
}

function resetForm() {
  fields.forEach(id => {
    if (!["noBerkas","tingkatPerkembangan"].includes(id)) {
      document.getElementById(id).value = "";
    }
  });
}

function exportCSV() {
  const rows = document.querySelectorAll("table tr");
  let csv = [];

  rows.forEach(row => {
    let cols = [...row.children].map(col =>
      `"${col.innerText.replace(/"/g, '""')}"`
    );
    csv.push(cols.join(","));
  });

  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "daftar_isi_arsip.csv";
  a.click();
}
