let noBerkas = 1;

function simpan() {
  const tbody = document.querySelector("#tabelData tbody");
  const row = tbody.insertRow();

  row.insertCell().innerText = noBerkas++;
  row.insertCell().innerText = ""; // Kode Klasifikasi Master
  row.insertCell().innerText = ""; // Kode Klasifikasi

  row.insertCell().innerText = document.getElementById("indeks1").value;
  row.insertCell().innerText = document.getElementById("indeks2").value;
  row.insertCell().innerText = document.getElementById("noItem").value;
  row.insertCell().innerText = document.getElementById("noSurat").value;
  row.insertCell().innerText = document.getElementById("kepada").value;
  row.insertCell().innerText = document.getElementById("tglSurat").value;
  row.insertCell().innerText = document.getElementById("tgl").value;
  row.insertCell().innerText = document.getElementById("tingkat").value;
  row.insertCell().innerText = document.getElementById("jumlah").value;
  row.insertCell().innerText = document.getElementById("unit").value;
  row.insertCell().innerText = document.getElementById("retensiAktif").value;
  row.insertCell().innerText = document.getElementById("retensiInaktif").value;
  row.insertCell().innerText = document.getElementById("statusAkhir").value;
  row.insertCell().innerText = document.getElementById("sistem").value;
  row.insertCell().innerText = document.getElementById("rak").value;
  row.insertCell().innerText = document.getElementById("box").value;
  row.insertCell().innerText = document.getElementById("folder").value;
  row.insertCell().innerText = document.getElementById("keterangan").value;

  // kosongkan input
  document.querySelectorAll("input").forEach(i => i.value = "");
}

function exportCSV() {
  const table = document.getElementById("tabelData");
  let csv = [];

  for (let row of table.rows) {
    let data = [];
    for (let cell of row.cells) {
      data.push('"' + cell.innerText.replace(/"/g, '""') + '"');
    }
    csv.push(data.join(","));
  }

  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "arsip_dinamis.csv";
  a.click();

  URL.revokeObjectURL(url);
}
