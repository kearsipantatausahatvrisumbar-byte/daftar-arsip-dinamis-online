function simpanData() {
  const noBerkas = document.getElementById("noBerkas").value;
  const kodeMaster = document.getElementById("kodeMaster").value;
  const kodeKlasifikasi = document.getElementById("kodeKlasifikasi").value;
  const indeks1 = document.getElementById("indeks1").value;
  const indeks2 = document.getElementById("indeks2").value;

  if (!noBerkas || !kodeMaster) {
    alert("No Berkas dan Kode Master wajib diisi");
    return;
  }

  const tabel = document.getElementById("tabelData");
  const row = tabel.insertRow();

  row.insertCell(0).innerText = noBerkas;
  row.insertCell(1).innerText = kodeMaster;
  row.insertCell(2).innerText = kodeKlasifikasi;
  row.insertCell(3).innerText = indeks1;
  row.insertCell(4).innerText = indeks2;

  document.getElementById("noBerkas").value = "";
  document.getElementById("kodeMaster").value = "";
  document.getElementById("kodeKlasifikasi").value = "";
  document.getElementById("indeks1").value = "";
  document.getElementById("indeks2").value = "";
}
