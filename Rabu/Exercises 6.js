
1. Melakukan Looping Menggunakan While

var coding = 0;

	console.log('LOOPING PERTAMA')
while(coding < 20) { 
  
	coding += 2; 
 
 	console.log(coding + ' - I love coding');
}


var developer = 22;

	console.log('LOOPING KEDUA')
while(developer > 2){
 
	developer -= 2;
 
	console.log(developer + ' I will become fullstack developer');
}

---------------------------------------------------------------------------------------------------

2. Melakukan Looping Menggunakan For

var coding = 0;


	console.log('LOOPING PERTAMA')

for(var a=1;a<= 20; a++) { 
  
	
	coding += 1; 
 
 	
	console.log(coding + ' - I love coding');

}



var developer = 21;


	console.log('LOOPING KEDUA')

for(var a=20; a>=1; a--){
 
	
	developer -= 1;
 
	
	console.log(developer + ' I will become fullstack developer');
}

------------------------------------------------------------------------------------------------------

3. Angka Ganjil dan Genap
-------- 1. GANJIL GENAP

var a;

for (a=1; a<=100; a++)
{
 
if (a % 2 === 0){
   
console.log(a + ' - GENAP')

} 
else{
    
console.log(a + ' - GANJIL')
}

}

-------- 2. KELIPATAN 3

for (a=1; a<=100; a+=2) {
 if (a % 3 === 0){
    console.log(a + ' = Kelipatan 3')
}else{
    console.log(a + ' = ')}
}

-------- 3. KELIPATAN 5


for (a=1; a<=100; a+=5) {
 if (a % 6 === 0){
    console.log(a + ' = Kelipatan 5')
}else{
    console.log(a + ' = ')}
}

-------- 4. KELIPATAN 10

for (a=1; a<=100; a+=9) {
 if (a % 10 === 0){
    console.log(a + ' = Kelipatan 10')
}else{
    console.log(a + ' = ')}
}
