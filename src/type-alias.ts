

const santriRajin: string | string[] | undefined = "gaza";
const pengajar: string | string[] | undefined = ["day", "arm", "azz", "MrDan", "MrHeri"];
const ustadzs: string | string[] | undefined = ["Duta", "Alwi", "Akbar"];
const teachers: string | string[] | undefined = ["MrYuda"];
const sensei: string | string[] | undefined = undefined;

type person = string | string[] | undefined;


const satri1: person = ["hafiz", "akrom"];

type reponse = {
  error: boolean,
  message: string,
  data?: any
}

// cara deklarasi
let add: (nilaiA: number, nilaiB: number) => number;

add = (a, b) => {
  return (a + b) - ((a + b) * 10 / 100);// potongan 10%

}

console.log("total uang gaza: ", add(600000, 300000));


function perkalian(a: number, b: number, c?: number): number {
  if (c !== undefined) {
    return a * b * c;
  }

  return a * b;
}

console.log("perkalian: ", perkalian(100, 1000));
