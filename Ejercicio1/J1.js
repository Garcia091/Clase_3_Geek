/*Elaborar un algoritmo que permita implementar la siguiente función matemática:
resultado = π+ x/(2+x)
Tenga en cuenta que el número π es una constante 
 */

let pi;
let x;
let resultado;

pi = 3.1416;
x = Number(prompt('Ingrese un número'));

resultado = pi + x / (2 + x);

document.write('El resultado es: ' + resultado)