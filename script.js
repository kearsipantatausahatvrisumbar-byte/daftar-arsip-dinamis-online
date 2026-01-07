let tabel = document.querySelector("#tabelArsip tbody");

function simpanData() {
  let data = [
    noBerkas.value,
    kodeMaster.value,
    kodeKlasifikasi.value,
    indeks1.value,
    indeks2.value,
    noItem.value,
    nomorSurat.value,
    diberikanKepada.value,
    tanggalSurat.value,
    tanggal.value,
    tingkat.value,
    jumlah.value,
    unit.value,
    retensiAktif.value,
    retensiInaktif.value,
    statusAkhir.value,
    sistem.value,
    rak.value,
    box.value,
    folder.value,
    keterangan.value
  ];

  let tr = document.createElement("tr");

  data.forEach(d => {
    let td = document.createElement("td");
    td.textContent = d;
    tr.appendChild(td);
  });

  tabel.appendChild(tr);
  document.querySelectorAll("input").forEach(i => i.value = "");
}

function exportCSV() {
  let csv = [];
  document.querySelectorAll("table tr").forEach(row => {
    let cols = row.querySelectorAll("td, th");
    let data = [];
    cols.forEach(col => data.push(`"${col.innerText}"`));
    csv.push(data.join(","));
  });

  let blob = new Blob([csv.join("\n")], { type: "text/csv" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = "arsip-dinamis.csv";
  a.click();
}
