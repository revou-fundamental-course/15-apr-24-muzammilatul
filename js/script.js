document.getElementById("konvert").addEventListener("click", tampilkan_nilai_form);
function tampilkan_nilai_form(){
    var nilai_form=document.getElementById("celci").value;
    document.getElementById("hasil").innerHTML=nilai_form*(9/5) + 32;
    document.getElementById("demo").innerHTML ="perhitungan celcius ke fahrenheit yaitu "+ nilai_form + " *9/5 + 32" + " hasilnya adalah " + (nilai_form*(9/5)+32);
}