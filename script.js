function simpanData() {
  const fields = [
    "noBerkas","kodeMaster","kodeKlasifikasi","indeks1","indeks2",
    "nomorSurat","diberikanKepada","tanggalSurat","tingkatPerkembangan",
    "jumlah","unitPengolah","retensiAktif","retensiInaktif","statusAkhir",
    "noRak","noBox","noFolder","keterangan"
  ];

  const values = fields.map(id => document.getElementById(id).value);
  const tabel = document.getElementById("tabelData");
  const row = tabel.insertRow();

  values.forEach((val, i) => {
    row.insertCell(i).innerText = val;
    document.getElementById(fields[i]).value = "";
  });
}
