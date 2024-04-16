let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("Testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function() {
    if (localStorage.getItem("testimoni")) {
        // ada localStorange dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
        console.log(data);
        
    } else {
        // belum ada localStorage dengan key testimoni
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,

        });
        console.log(data);
    }
    // simpan ke dalam localStorage
    localStorage.setItem("testimoni", JSON.stringify(data));
    getData();

});

//tampilkan data localStorage
function getData() {
if (localStorage.getItem("testimoni")) {
    // ada localStorage dengan key testimoni
    data = JSON.parse(localStorage.getItem("testimoni"));
    for (const[index, row] of data.entries()) {
        list.innerHTML += `<li>${row.nama} ${row.testimoni}</li>`;
        }
    }
}


