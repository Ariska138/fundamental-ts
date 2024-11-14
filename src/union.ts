//study kasusnya absensi. bisa 1 orang bisa lebih dari 1
const absensi1: string[] = ["gaza", "hafiz"];

const absensi2: string = "gaza"

const absensi3: string | string[] = "gaza";

const ob: {} = { names: ["gaza", "hafiz"] };

if (Array.isArray(absensi3)) {
  console.log(absensi3.join("; "));
} else {
  console.log(absensi3);
}


