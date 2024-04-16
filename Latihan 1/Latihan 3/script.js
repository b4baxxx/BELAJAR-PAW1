let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let inputnama = document.getElementById("btnSimpan");
let inputnama = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", founction() {
    if (localStorange.getItem("testimoni")) {
        // ada localStorange dengan key testimoni
        data = JSON.parsel(localStorange.getItem("testimoni"));
        data.push({
            nama: inputnama.ariaValueMax,
            testimoni: inputtestimoni.ariaValueMax,
        });

    }else {
        data.push({
            nama: inputnama.ariaValueMax,
            testimoni: inputtestimoni.value,
        });
        
    }
})
