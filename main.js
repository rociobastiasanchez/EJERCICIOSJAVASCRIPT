'use strict';

alert('Mi mensaje en el alert');
const rectangulo={
    lado1: 16,
    lado2: 23,
    altura: 13,
}
console.log("El volumen es:", (rectangulo.lado1 * rectangulo.lado2 * rectangulo.altura));

const alto= prompt("Indica un lado del rectangulo");
const ancho= prompt("Indica el siguiente lado del rectangulo");
const altura= prompt("Indica el siguiente lado del rectangulo");
const volum= alto*ancho*altura;

console.log(`el volumen es de ${volum}`);

const volumen= 16*23*13;
console.log('Volumen ejemplo', volumen);

const age= prompt("¿Que edad tienes?")
console.log(age)

const usuario={
    nombre: "Rocio",
    edad: 31,
    ciudad: "Madrid",
    diacumpleaños: 11,
    mescumpleaños:10,
    añocumpleaños: 1989,
};
console.log("Mi cumpleaños es el:", usuario.diacumpleaños, "del", usuario.mescumpleaños, "del", usuario.añocumpleaños);
console.log(`Mi cumpleaños es el: ${usuario.diacumpleaños} del ${usuario.mescumpleaños} del ${usuario.añocumpleaños}`);

const array=["Rocio", "Madrid"];
console.log(array[0]);

const data =["hola", 2, 5, "adios"];
const numero1 = data[1];
const numero2 = data[2];
const menor = numero1<numero2;
const mayor = numero1>numero2;
const igual = numero1==numero2;
const igualigual = numero1===numero2;
const diferente = numero1!=numero2;
const diferentediferente = numero1!==numero2;
const multiplicacion = numero1*numero2;
const suma = numero1+numero2;
const resta =numero1-numero2;
const division = numero1/numero2;
console.log(menor);
console.log(mayor);
console.log(igual);
console.log(igualigual);
console.log(diferente);
console.log(diferentediferente);
console.log(multiplicacion);
console.log(suma);
console.log(resta);
console.log(division);
console.log(numero1%numero2);
const A = 5;
const B = 3;
const C =-12;
console.log(B<C);
console.log((A+B==8) && (A-B==2));
console.log(B!=C);
console.log((A+B==8)||(A+B==6));
console.log(A>3 && B>=3 && C<-3);

let user={
    edad: 20,
    ciudad: "León",
    direccion:{
        calle: "C/Gran Vía",
        numero: 32,
    },
    perfil:{
        altura: 1.70,
        pelo: "rubio",
        tez: "morena",
    },
    nombre: "Lorena",
}

console.log(user.nombre);
console.log(user.direccion.calle);

user.nombre= "Ana";
user.direccion.calle = "C/Sol";
console.log(user.nombre);
console.log(user.direccion.calle);

let user2={
    edad: 30,
    nombre: "Adrian",
    direccion:{
        calle2: "C/Rascafria",
        number2: 78,
    },
}

let user3={
    edad: 40,
    nombre: "Maria",
    direccion:{
        calle3: "C/Mostoles",
        number3: 56,
    },
}

const array1 = [user, user2, user3];

console.log(array1);
array1[1].nombre = "Pablo";
console.log(array1);
array1[2].direccion.calle3 = "C/Ramon";
console.log(array1);

