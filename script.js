function simpanData() {
  const fields = [
    "noBerkas","kodeMaster","kodeKlasifikasi","indeks1","indeks2",
    "nomorSurat","diberikanKepada","tanggalSurat","tingkatPerkembangan",
    "jumlah","unitPengolah","retensiAktif","retensiInaktif","statusAkhir",
    "noRak","noBox","noFolder","keterangan"
  ];

  const tabel = document.getElementById("tabelData");
  const row = tabel.insertRow();

  fields.forEach((id, i) => {
    const val = document.getElementById(id).value;
    row.insertCell(i).innerText = val;
    document.getElementById(id).value = "";
  });
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

  const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.download = "arsip_dinamis.csv";
  link.href = URL.createObjectURL(csvFile);
  link.click();
}
