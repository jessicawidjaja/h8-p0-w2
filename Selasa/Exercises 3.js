var nama = "Jessica";

var peran = "Putri";




if (nama === "") {
      console.log("Nama harus di isi!");
} else if (peran === "") {
    	console.log("Hallo " + nama + " pilih peranmu untuk memulai game!");
} else if (peran === "Putri") {
	    console.log("Selamat datang di Dunia Proxytia " + nama);
    	console.log("Hallo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka");
} else if (peran === "Ksatria") {
	    console.log("Selamat datang di Dunia Proxytia " + nama);
    	console.log("Hallo " + peran + " " + nama + ", kkamu dapat menyerang dengan senjatamu");
} else if (peran === "Penyihir") {
	    console.log("Selamat datang di Dunia Proxytia " + nama);
    	console.log("Hallo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu");
    	
}
else {
}