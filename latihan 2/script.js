let data = ["marwab", "wani", "ikoe"];
let listMhs = document.getElementById ("listMhs")

data.forEach(showMahasiswa);

function showMahasiswa(value, index) {
        console.log(value);
    //    listMhs.innerHTML = "<li>" + value +"</li";
    //      atau
    listMhs.innerHTML += `<li> ${value}</li>`;
    }
    
    let npm = document.getElementById("npm");
    // tampilkan data localStorange ke dalam elemen <p id='npm'>
    npm.innerHTML = localStorage.getItem("npm");
     
    let nama = document.getElementById("nama");
    // tampilkan data localStorange ke dalam elemen <p id='npm'>
    nama.innerHTML = localStorage.getItem("nama");
    

    // simpen data ke localStorage
    localStorage.setItem("email", "ahmad@test.com");
    // data array
    let  hobi = ["baca", "game", "code"];
    localStorage.setItem("hobi", hobi);
    localStorage.setItem("myhobi", JSON.stringify(hobi));

    //data object
    let mhs = {npm: 2226240126, nama: "Andri" };
    // cara akses
    console.log(mhs.npm);
    console.log(mhs.nama);

    //kombinasi array dan object
    let nilai = [
        {"kode_mk" : "SI0001", "nama_mk": "pemrograman web"},
       {"kode_mk" : "SI0002", "nama_mk": "PAB"}
    ];
    //
    console.log(nilai[0].nama_mk);
    console.log(nilai[1].nama_mk);

    // simpan nilai ke dalam localstorage
    localStorage.setItem("nilai", JSON.stringify(nilai));


    //tampilkan menggunakan for atau forEach
    let lsNilai = JSON.parse(localStorage.getItem("nilai"));
    for(const[index, data] of lsNilai.entries()) {
        console.log(data.kode_mk);
        console.log(data.nama_mk);
        //tampilkan data mk ke dalam <ul id="listMk">
        document.getElementById("listMk").innerHTML +=`<li>${data.kode_mk} ${data.nama_mk}</li>`;       



    }