document.addEventListener("DOMContentLoaded", function () {

  // ===== AMBIL ELEMEN FORM =====
  const kodeKlasifikasi = document.getElementById("kodeKlasifikasi");
  const retensiAktif = document.getElementById("retensiAktif");
  const retensiInaktif = document.getElementById("retensiInaktif");
  const nasibAkhir = document.getElementById("nasibAkhir");
  const keamananAkses = document.getElementById("keamananAkses");

  // ===== CEK MASTER DATA =====
  if (typeof masterKlasifikasi === "undefined") {
    console.error("masterKlasifikasi TIDAK ditemukan. data.js belum kebaca.");
    return;
  }

  // ===== ISI DROPDOWN KODE KLASIFIKASI =====
  kodeKlasifikasi.innerHTML = '<option value="">-- Pilih Kode Klasifikasi --</option>';

  Object.keys(masterKlasifikasi).forEach(function (kode) {
    const option = document.createElement("option");
    option.value = kode;
    option.textContent = kode;
    kodeKlasifikasi.appendChild(option);
  });

  // ===== SAAT KODE DIPILIH =====
  kodeKlasifikasi.addEventListener("change", function () {
    const kode = this.value;

    if (!kode || !masterKlasifikasi[kode]) {
      retensiAktif.value = "";
      retensiInaktif.value = "";
      nasibAkhir.value = "";
      keamananAkses.value = "";
      return;
    }

    const data = masterKlasifikasi[kode];

    retensiAktif.value = data.aktif || "";
    retensiInaktif.value = data.inaktif || "";
    nasibAkhir.value = data.akhir || "";
    keamananAkses.value = data.keamanan || "";
  });

});
