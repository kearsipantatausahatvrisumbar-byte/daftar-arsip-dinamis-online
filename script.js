const form = document.getElementById("formArsip");
const kodeSelect = document.getElementById("kodeKlasifikasi");

// isi dropdown dari data.js
for (const kode in masterKlasifikasi) {
  const opt = document.createElement("option");
  opt.value = kode;
  opt.textContent = kode + " - " + masterKlasifikasi[kode].uraian;
  kodeSelect.appendChild(opt);
}
kodeSelect.addEventListener("change", function () {
  const data = masterKlasifikasi[this.value];
  if (!data) return;

  retensiAktif.value = data.aktif;
  retensiInaktif.value = data.inaktif;
  statusAkhir.value = data.nasib;
  keamanan.value = data.keamanan;
});

const tabel = document.getElementById("tabelData");
const noBerkasInput = document.getElementById("noBerkas");
const resetBtn = document.getElementById("resetBtn");

const kodeKlasifikasi = document.getElementById("kodeKlasifikasi");
const indeks1 = document.getElementById("indeks1");
const indeks2 = document.getElementById("indeks2");
const noItem = document.getElementById("noItem");
const uraian = document.getElementById("uraian");
const tanggal = document.getElementById("tanggal");
const tingkat = document.getElementById("tingkat");
const jumlah = document.getElementById("jumlah");
const unitPengolah = document.getElementById("unitPengolah");
const retensiAktif = document.getElementById("retensiAktif");
const retensiInaktif = document.getElementById("retensiInaktif");
const statusAkhir = document.getElementById("statusAkhir");
const keamanan = document.getElementById("keamanan");
const rak = document.getElementById("rak");
const box = document.getElementById("box");
const ruangSimpan = document.getElementById("ruangSimpan");
const keterangan = document.getElementById("keterangan");

let data = [];
let editIndex = -1;

// Nomor berkas otomatis
function updateNoBerkas() {
  noBerkasInput.value = data.length + 1;
}
updateNoBerkas();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const item = {
    no: noBerkasInput.value,
    kode: kodeKlasifikasi.value,
    i1: indeks1.value,
    i2: indeks2.value,
    item: noItem.value,
    uraian: uraian.value,
    tanggal: tanggal.value,
    tingkat: tingkat.value,
    jumlah: jumlah.value,
    unit: unitPengolah.value,
    aktif: retensiAktif.value,
    inaktif: retensiInaktif.value,
    status: statusAkhir.value,
    keamanan: keamanan.value,
    rak: rak.value,
    box: box.value,
    ruang: ruangSimpan.value,
    ket: keterangan.value
  };

  if (editIndex === -1) {
    data.push(item);
  } else {
    data[editIndex] = item;
    editIndex = -1;
  }

  renderTabel();
  form.reset();
  updateNoBerkas();
});

resetBtn.addEventListener("click", () => {
  form.reset();
  editIndex = -1;
});

function renderTabel() {
  tabel.innerHTML = "";

  data.forEach((d, i) => {
    const tr = document.createElement("tr");

    function td(v) {
      const c = document.createElement("td");
      c.textContent = v;
      return c;
    }

    tr.append(
      td(d.no),
      td(d.kode),
      td(d.i1),
      td(d.i2),
      td(d.item),
      td(d.uraian),
      td(d.tanggal),
      td(d.tingkat),
      td(d.jumlah),
      td(d.unit),
      td(d.aktif),
      td(d.inaktif),
      td(d.status),
      td(d.keamanan),
      td(d.rak),
      td(d.box),
      td(d.ruang),
      td(d.ket)
    );

    // Aksi
    const aksi = document.createElement("td");

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.onclick = () => editData(i);

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = () => {
      data.splice(i, 1);
      renderTabel();
      updateNoBerkas();
    };

    aksi.append(btnEdit, document.createTextNode(" "), btnHapus);
    tr.appendChild(aksi);

    tabel.appendChild(tr);
  });
}

function editData(i) {
  const d = data[i];
  editIndex = i;

  noBerkasInput.value = d.no;
  kodeKlasifikasi.value = d.kode;
  indeks1.value = d.i1;
  indeks2.value = d.i2;
  noItem.value = d.item;
  uraian.value = d.uraian;
  tanggal.value = d.tanggal;
  tingkat.value = d.tingkat;
  jumlah.value = d.jumlah;
  unitPengolah.value = d.unit;
  retensiAktif.value = d.aktif;
  retensiInaktif.value = d.inaktif;
  statusAkhir.value = d.status;
  keamanan.value = d.keamanan;
  rak.value = d.rak;
  box.value = d.box;
  ruangSimpan.value = d.ruang;
  keterangan.value = d.ket;
}
const kodeInput = document.getElementById("kodeKlasifikasi");

kodeInput.addEventListener("change", function () {
  const kode = kodeInput.value.trim();

  if (masterKlasifikasi[kode]) {
    retensiAktif.value   = masterKlasifikasi[kode].aktif || "";
    retensiInaktif.value = masterKlasifikasi[kode].inaktif || "";
    statusAkhir.value    = masterKlasifikasi[kode].akhir || "";
    keamanan.value       = masterKlasifikasi[kode].keamanan || "";
  } else {
    retensiAktif.value = "";
    retensiInaktif.value = "";
    statusAkhir.value = "";
    keamanan.value = "";
  }
});



