const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");
const noBerkasInput = document.getElementById("noBerkas");
const resetBtn = document.getElementById("resetBtn");

let data = [];
let editIndex = -1;

// nomor otomatis
function updateNoBerkas() {
  noBerkasInput.value = data.length + 1;
}
updateNoBerkas();

form.addEventListener("submit", function(e) {
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
    unit: unit.value,
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

    // AKSI
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

  noBerkas.value = d.no;
  kodeKlasifikasi.value = d.kode;
  indeks1.value = d.i1;
  indeks2.value = d.i2;
  noItem.value = d.item;
  uraian.value = d.uraian;
  tanggal.value = d.tanggal;
  tingkat.value = d.tingkat;
  jumlah.value = d.jumlah;
  unit.value = d.unit;
  retensiAktif.value = d.aktif;
  retensiInaktif.value = d.inaktif;
  statusAkhir.value = d.status;
  keamanan.value = d.keamanan;
  rak.value = d.rak;
  box.value = d.box;
  ruangSimpan.value = d.ruang; 
  keterangan.value = d.ket;
}
