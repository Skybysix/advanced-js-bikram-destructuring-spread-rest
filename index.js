//1
const [, ana] = empleados;

console.log(ana);

//2
const [luis] = empleados;
const { email } = luis;

console.log(email);

//3
let a = 5;
let b = 3;

[a, b] = [b, a];

//4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy } = HIGH_TEMPERATURES;
const { tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

//5
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

function sumEveryOther(...numeros) {
    return numeros.reduce((suma, numero) => {
       return suma + numero
    }, 0);
}

//6
//7
//8    
//9 
//10 
//11
