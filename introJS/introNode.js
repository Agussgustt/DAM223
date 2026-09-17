console.log("Hola Mindo NODE")


let edad1=20;
let edad2=8;

console.log("Edad promedio: ");
console.log((edad1+edad2)/2);

console.log("Medidor de Procesos");
console.time("miProceso");
    for (let i=0; i<1000000000; i++){}
console.timeEnd("miProceso");