// ########## user yang menetukan luping luping frofer
var ulang = true;
while(ulang){
	console.log('Helo World!');
	ulang = confirm('lagi');
}
// ########## program yang menghentikan lupingnya
var nillaiAwal = 1;
while(nillaiAwal <= 10){
	console.log('Helo World');
	nillaiAwal = nillaiAwal + 1;
	nillaiAwal++;
}
// ########## menampilkan hellow world sebanyak sepuluh kali
var nillaiAwal = 1;
while(nillaiAwal <= 10){
	console.log('Helo World ' + nillaiAwal + 'x');
	// nillaiAwal = nillaiAwal + 1;
	nillaiAwal++;
}
// ########## latihan mengunakan perulangan while
var nillaiAwal = 1;
while(nillaiAwal <= 7){
	console.log('Siswa dengan no id ' + nillaiAwal + ' sedang mengikuti ujian');
	nillaiAwal++;
}

//########## latihan perulangan for
for(var nillaiAwal = 1; nillaiAwal <=10; nillaiAwal++){
	console.log('hellow World' + nillaiAwal + 'x')
}

// ########## latihan perulangan while dan for
var jumSiswa = 10;
var sedangMengikutiUjian = 4;
var no = 1;
while(no <=sedangMengikutiUjian){
	console.log('siswa dengan no id ' + no + ' sedang Mengikuti Ujian');
	no++;
}
for (var no = sedangMengikutiUjian +1; no <= jumSiswa; no++) {
	console.log('Siswa dengan no id ' + no + ' tidak sedang Mengikuti Ujian');
}

// ######## latihan perulangan for dan pengkondisisan mengunakan if else
var jumSiswa =10;
var sedangMengikutiUjian = 6;
 for(var noIdSiswa = 1; noIdSiswa <= jumSiswa; noIdSiswa++){
 	if (noIdSiswa <= 6) {
 		console.log('siswa no ' + noIdSiswa + ' sedang Mengikuti Ujian');
 	}else{
 		console.log('siswa no ' + noIdSiswa + ' sedang tidak mengikuti ujian');
 	}
 }
// ########## peng kondisian if else dan else if
var jumSiswa = 10;
var sedangMengikutiUjian =6;
for(var noIdSiswa = 1; noIdSiswa <= jumSiswa; noIdSiswa++){
	if (noIdSiswa <= 6) {
		console.log('siswa no' + noIdSiswa + 'sedang Mengikuti Ujian');
	}else if(noIdSiswa ===8){
console.log('siswa no ' + noIdSiswa + 'sedang di hukum')
	}else{
		console.log('siswa no' + noIdSiswa + 'sedang tidak mengikuti ujian');
	}
}

// ########## peng kondisian if else dan else if menambahkan oprator ------logika or----- tanda five baris 74
var jumSiswa = 10;
var sedangMengikutiUjian =6;
for(var noIdSiswa = 1; noIdSiswa <= jumSiswa; noIdSiswa++){
	if (noIdSiswa <= 6) {
		console.log('siswa no' + noIdSiswa + 'sedang Mengikuti Ujian');
	}else if(noIdSiswa ===8 || noIdSiswa ===10){
console.log('siswa no ' + noIdSiswa + 'sedang di hukum')
	}else{
		console.log('siswa no' + noIdSiswa + 'sedang tidak mengikuti ujian');
	}
}

// ########## peng kondisian if else dan else if menambahkan oprator ------logika dan----- tanda five baris 85 dan 87
var jumSiswa = 10;
var sedangMengikutiUjian =6;
for(var noIdSiswa = 1; noIdSiswa <= jumSiswa; noIdSiswa++){
	if (noIdSiswa <= 6 && noIdSiswa !== 5) {
		console.log('siswa no' + noIdSiswa + 'sedang Mengikuti Ujian');
	}else if(noIdSiswa ===8 || noIdSiswa ===10 || noIdSiswa ===5){
console.log('siswa no ' + noIdSiswa + 'sedang di hukum')
	}else{
		console.log('siswa no' + noIdSiswa + 'sedang tidak mengikuti ujian');
	}
}

var jumSiswa = 10;
var sedangMengikutiUjian =6;
for(var noIdSiswa = 1; noIdSiswa <= jumSiswa; noIdSiswa++){
	if (noIdSiswa <= 6 && noIdSiswa !== 5) {
		console.log('siswa no' + noIdSiswa + 'sedang Mengikuti Ujian');
	}else if(noIdSiswa ===8 || noIdSiswa ===10 || noIdSiswa ===5){
console.log('siswa no ' + noIdSiswa + 'sedang di hukum')
	}else{
		console.log('siswa no' + noIdSiswa + 'sedang tidak mengikuti ujian');
	}
}





var s = '';
for(var i = 0; i<10; i++){
	for(var j = 0; j<i; j++){
		s += '*';		
	}
	s +='\n';
}
console.log(s);

var s = '';

	for(var j = 0; j<i; j++){
		s += '*';
	}
	s +='\n';
}
console.log(s);



var s = '';
for(var i = 10; i>0; i--){
	for(var j = 0; j<i; j++){		
		s +='\n';	
	}
	s +='\n';
}
console.log(s);


















