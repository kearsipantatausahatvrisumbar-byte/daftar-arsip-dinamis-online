let nomor = 1;

document.addEventListener("DOMContentLoaded", () => {
  const selectKode = document.getElementById("kodeKlasifikasi");

  // isi dropdown kode klasifikasi
  Object.keys(masterKlasifikasi).forEach(kode => {
    const opt = document.createElement("option");
    opt.value = kode;
    opt.textContent = kode;
    selectKode.appendChild(opt);
  });

  // auto isi retensi & keamanan
  selectKode.addEventListener("change", function () {
    const data = masterKlasifikasi[this.value];
    if (!data) return;

    document.getElementById("retensiAktif").value = data.aktif;
    document.getElementById("retensiInaktif").value = data.inaktif;
    document.getElementById("nasibAkhir").value = data.akhir;
    document.getElementById("keamananAkses").value = data.keamanan;
  });
});

function simpanData() {
  const tbody = document.getElementById("tabelData");

  const row = tbody.insertRow();
  row.insertCell().innerText = nomor++;
  row.insertCell().innerText = unitPengolah.value;
  row.insertCell().innerText = noBerkas.value;
  row.insertCell().innerText = kodeKlasifikasi.value;
  row.insertCell().innerText = uraian.value;
  row.insertCell().innerText = retensiAktif.value;
  row.insertCell().innerText = retensiInaktif.value;
  row.insertCell().innerText = nasibAkhir.value;
  row.insertCell().innerText = keamananAkses.value;
  row.insertCell().innerText = keterangan.value;

  // reset form sebagian
  noBerkas.value = "";
  uraian.value = "";
}
