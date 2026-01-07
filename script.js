function simpanData() {
  const noBerkas = document.getElementById("noBerkas").value;
  const kodeMaster = document.getElementById("kodeMaster").value;
  const kodeKlasifikasi = document.getElementById("kodeKlasifikasi").value;
  const indeks1 = document.getElementById("indeks1").value;
  const indeks2 = document.getElementById("indeks2").value;

  if (
    noBerkas === "" ||
    kodeMaster === "" ||
    kodeKlasifikasi === ""
  ) {
    alert("No Berkas dan Kode wajib diisi");
    return;
  }

  const table = document.getElementById("dataTable");
  const row = table.insertRow(-1);

  row.insertCell(0).innerText = noBerkas;
  row.insertCell(1).innerText = kodeMaster;
  row.insertCell(2).innerText = kodeKlasifikasi;
  row.insertCell(3).innerText = indeks1;
  row.insertCell(4).innerText = indeks2;

  document.querySelector("form").reset();
}
