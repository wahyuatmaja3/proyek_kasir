var i = 1;
function kesempatan(){
  var x = document.getElementById("text1").value;
  var y = document.getElementById("text2").value;
  if (i<=3) {
    if (x==y) {
      alert("Silahkan tekan tombol masuk")
      document.getElementById('masuk').disabled=false;
    } else {
      alert("Password yang anda masukan salah ("+(3-i)+"x)");
      i++
    }
  }else {
    alert("Akun anda telah terblokir")
  }
}

function save(){
  alert("Data berhasil disimpan");
}

function cek(){
  var x = document.getElementById("id_barang").value;
  if (x=="1") {
    var barang = "Coca-cola";
    var harga = "5000";
    var stok = "23";
    document.getElementById("nama_barang").value=barang;
    document.getElementById("harga_barang").value=harga;
    document.getElementById("stok").value=stok;
  }else if (x=="2") {
    var barang = "Aqua";
    var harga = "3000";
    var stok = "54";
    document.getElementById("nama_barang").value=barang;
    document.getElementById("harga_barang").value=harga;
    document.getElementById("stok").value=stok;
  }else {
    alert("ID Barang tidak tersedia");
    var barang = "";
    var harga = "";
    var stok = "";
    document.getElementById("nama_barang").value=barang;
    document.getElementById("harga_barang").value=harga;
    document.getElementById("stok").value=stok;
  }
}
