//1. Melakukan Looping Menggunakan While
var i = 2
console.log("Looping Pertama");

while (i <= 20) {
    console.log(i + " " + "I Love Coding")
    i += 2
}

var j = 20
console.log("Looping Kedua");
while (j >= 2) {
    console.log(j + " " + "I will become fullstack developer")
    j += -2
}

//2. Melakukan Looping Menggunakan For
console.log("Looping Pertama");
for (var i = 1; i <= 20; i++) {
    console.log(i + " " + "I Love Coding")
}
console.log("Looping Kedua");
for (var j = 20; j >= 1; j--) {
    console.log(j + " " + "I will become fullstack developer")
}

//3.Angka Ganjil dan Genap
console.log("Looping Ganjil Genap")
for (var k = 1; k <= 100; k++) {
    if (k % 2 === 0) {
        console.log("genap")
    } else {
        console.log("ganjil")

    }
}

console.log("Looping  Kelipatan 3")
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i + " " + "Kelipatan 3")
    }
}
console.log("Looping Kelipatan 6")
for (var i = 1; i <= 100; i++) {
    if (i % 6 === 0) {
        console.log(i + " " + "Kelipatan 6")
    }
}
console.log("Looping Kelipatan 10")
for (var i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log(i + " " + "Kelipatan 10")
    }
}