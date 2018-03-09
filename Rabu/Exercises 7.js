1. Menyusun Barisan Bintang


var rows1;


for (rows1= 1;rows1 <= 3;rows1++)
{
console.log('*');
}



2. Menyusun Barisan Bintang Dengan Nested Looping


var str = '';
  for (var a=1; a<=3; a++) {
  for (var b=1; b<=3; b++) {
    str += '*';
}
  str += '\n';
}
console.log(str)

3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


var str = '';
  for (var a=1; a<=3; a++) {
  for (var b=1; b<=a; b++) {
    str += '*';
}
  str += '\n';
}
console.log(str)
