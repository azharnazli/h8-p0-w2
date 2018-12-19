//1. Menyusun Barisan Bintang

var rows1 = 5;
var stars1 = "*";

for (var i = 0; i < rows1; i++) {
    console.log(stars1)
}

//2.Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
for (var i = 0; i < rows2; i++) {
    var stars2 = "";
    for (var j = 0; j < rows2; j++) {
        stars2 += "*"
    }
    console.log(stars2)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
for (var i = 1; i <= rows3; i++) {
    var stars3 = ''
    for (j = 1; j <= i; j++) {
        stars3 += '*'
    }
    console.log(stars3);
}