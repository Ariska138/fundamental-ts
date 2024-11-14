"use strict";
const santriRajin = "gaza";
const pengajar = ["day", "arm", "azz", "MrDan", "MrHeri"];
const ustadzs = ["Duta", "Alwi", "Akbar"];
const teachers = ["MrYuda"];
const sensei = undefined;
const satri1 = ["hafiz", "akrom"];
// cara deklarasi
let add;
add = (a, b) => {
    return (a + b) - ((a + b) * 10 / 100); // potongan 10%
};
console.log("total uang gaza: ", add(600000, 300000));
function perkalian(a, b, c) {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
console.log("perkalian: ", perkalian(100, 1000));
