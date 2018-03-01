1. Menyusun Barisan Bintang


var rows1;


for (rows1= 1;rows1 <= 3;rows1++)
{
console.log('*');
}



2. Menyusun Barisan Bintang Dengan Nested Looping


var rows2 ;


for (rows2 = 1; rows2 <= 3; rows2++) 
{
console.log('***');

for (rows2 = 1; rows2 <= 2; rows2++) 
{
console.log('***');

for (rows2 = 1; rows2 <= 1; rows2++) 
{
console.log('***'); 
}
 } 
}


3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


var rows3 ;



for (rows3 = 1; rows3 <= 3; rows3++) 

{
console.log('*');


for (rows3 = 1; rows3 <= 2; rows3++) 

{
console.log('**');


for (rows3 = 1; rows3 <= 1; rows3++) 

{
console.log('***'); 
}
 } 
}
