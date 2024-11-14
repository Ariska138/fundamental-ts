"use strict";
//study kasusnya absensi. bisa 1 orang bisa lebih dari 1
const absensi1 = ["gaza", "hafiz"];
const absensi2 = "gaza";
const absensi3 = "gaza";
const ob = { names: ["gaza", "hafiz"] };
if (Array.isArray(absensi3)) {
    console.log(absensi3.join("; "));
}
else {
    console.log(absensi3);
}
