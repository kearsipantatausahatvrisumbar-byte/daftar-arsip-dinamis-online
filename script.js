let nomorBerkas = 1;

const noBerkasInput = document.getElementById("noBerkas");
const form = document.getElementById("formArsip");
const tabel = document.getElementById("tabelData");

noBerkasInput.value = nomorBerkas;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tr = document.createElement("tr");

  function td(val) {
    const cell = document.createElement("td");
    cell.textContent = val;
    return cell;
  }

  tr.appendChild(td(noBerkasInput.value));
  tr.appendChild(td(document.getElementById("kodeKlasifikasi").value));
  tr.appendChild(td(document.getElementById("indeks1").value));
  tr.appendChild(td(document.getElementById("indeks2").value));
  tr.appendChild(td(document.getElementById("noItem").value));
  tr.appendChild(td(document.getElementById("uraian").value));
  tr.appendChild(td(document.getElementById("tanggal").value));
  tr.appendChild(td(document.getElementById("tingkat").value));
  tr.appendChild(td(document.getElementById("jumlah").value));
  tr.appendChild(td(document.getElementById("unit").value));
  tr.appendChild(td(document.getElementById("retensiAktif").value));
  tr.appendChild(td(document.getElementById("retensiInaktif").value));
  tr.appendChild(td(document.getElementById("statusAkhir").value));
  tr.appendChild(td(document.getElementById("keamanan").value));
  tr.appendChild(td(document.getElementById("rak").value));
  tr.appendChild(td(document.getElementById("box").value));
  tr.appendChild(td(document.getElementById("folder").value));
  tr.appendChild(td(document.getElementById("keterangan").value));

  tabel.appendChild(tr);

  nomorBerkas++;
  noBerkasInput.value = nomorBerkas;

  form.reset();
  noBerkasInput.value = nomorBerkas;
});
