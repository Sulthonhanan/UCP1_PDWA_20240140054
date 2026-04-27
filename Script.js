let dataAnggota = [
    { nama: "Isna Habibah", usia: 21, minat: "Cyber Security" }
];

function tampilkanData() {
    const tabel = document.getElementById("isiTabel");
    if (tabel) {
        tabel.innerHTML = ""; 
        dataAnggota.forEach((anggota) => {
            let row = `<tr>
                <td>${anggota.nama}</td>
                <td>${anggota.usia}</td>
                <td>${anggota.minat}</td>
            </tr>`;
            tabel.innerHTML += row;
        });
    }
}

const formDaftar = document.getElementById("formDaftar");
if (formDaftar) {
    formDaftar.addEventListener("submit", function (event) {
        event.preventDefault();
        
    });
}