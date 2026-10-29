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
function addOnlyNums(...numeros) {
    return numeros
        .filter(numero => typeof numero === "number")
        .reduce((suma, numero) => {
            return suma + numero;
        }, 0);
}

console.log(addOnlyNums(1, "perro", 2, 4)); 

//7
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); 

function countTheArgs (...animals){
  return animals.length;
}

//8    
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

//9 
function onlyUniques(...animals) {
    return [...new Set(animals)];
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

//10
function combineAllArrays(...arrays) {
    return arrays.flat();
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])

//11
function sumAndSquare(...numeros) {
    return numeros.reduce((suma, numero) => {
        return suma + numero ** 2;
    }, 0);
}

console.log(sumAndSquare(2, 3, 4)); 
