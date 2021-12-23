 /* Hacer un algoritmo que calcule el sueldo de un empleado dados 
como datos de entrada: el nombre, horas trabajadas y el valor de la hora.
 */

let nombre = prompt('Digite el nombre del empleado');
let horasTrabajadas = Number(prompt('Digite el número de horas trabajadas'));
let valorHora = Number(prompt('Digite la tarifa por hora pagada al empleado'));

let sueldo = horasTrabajadas * valorHora;

alert(`El empleado ${nombre} tiene un sueldo de $${sueldo}`);
