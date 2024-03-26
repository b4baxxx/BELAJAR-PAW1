document.getElementById("welcome").innerHTML="Selamat datang";
document.getElementById("nama").innerHTML = "<b>Ahmad</b>";
document.getElementById("email").innerHTML = "ahmad@test.com";

console.log("hanya bisa dilihat di console");


//variabel
let nama = "";
let email = "";
let data = []; //array / larik
// function

function tampil() {
    console.log("button ditekan");
    //simpan value txtNama ke dalam variabel "nama"
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtemail").value;
    console.log(nama);
    // ubah konten i id="nama">
    document.getElementById("nama").innerHTML = nama;
    document.getElementById ("email").innerHTML = email;
    // simpan ke dalam darray data
    data.push(nama);
    console.log(data);
}