// ###########alert di gunakan untuk menampilkan popup
// alert("Nama!");
// alert("Saya!");
// alert("Partono!");
// alert("Ok!");


// ############prompt di gunakan untuk meminta inputan
// var nama = prompt("masukan nama:");
// alert(nama);

// ############confirm di gunakan untuk meminta konfirmasi dari user
// var tes = confirm('kamu yakin??');
// alert(tes)

// ************contoh confirm pada luping while
// alert("selamat datang");
// var lagi = true;
// while(lagi === true){
// 	var nama = prompt('masukan nama:');
// 	alert("halo" + nama)
// 	lagi = confirm('coba lagi');
// }
// alert("trimakasih");

// ########## peng kondisian if else dan else if
// var angka = prompt('masukan angka');
// if (angka % 2 == 0) {
// 	alert(angka + 'adalah bilangan genap');
// }else if(angka % 2 ==1){
// 	alert(angka + 'adalah bilangan ganjil');
// 	}else{
// 		alert('yang ada masukan bukan angka');
// 	}

// ######## sintak swite

// switch(ekspresi){
// 	case "nilai 1":
// 	aksi 1
// 	[break;]
// 	case "nilai 2":
// 	aksi 2
// 	[break;]
// 	case "nilai n":
// 	aksi n
// 	[break;]
// 	default:
// 	aksi default
// 	[break;]
// }


var item = prompt('masukan nama makanan/minuman:\n (ontoh:nasi,daging,susu,hamburger,sofdrink)');

switch(item){
	case 'nasi':
	alert('makanan/minuman SEHAT');
	break;
	case 'daging':
	alert('makanan/minuman SEHAT');
	break;
	case 'susu':
	alert('makanan/minuman SEHAT');
	break;
	case 'hamburger':
	alert('makanan/minuman TIDAK SEHAT');
	break;
	case 'sofdrink':
	alert('makanan/minuman TIDAK SEHAT');
	break;
	default:
	alert('bukan makanan/atau minuman yang salah');
	break;
}








