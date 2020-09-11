// VARIABLES
let cad1 = 4
let cad2 = 55
sexo = 'Mujer'

// PUNTO 1
console.log('Mi edad es de:',cad1 + cad2);

// PUNTO 2
suma = cad1 + cad2;
resta = cad2 - cad1;
multi = cad1 * cad2;
div = cad2/cad1;

console.log('La suma de los dos es de:', suma)
console.log('La resta de los dos es de:', resta)
console.log('La maultiplicacion de los dos es de:', multi)
console.log('La division de los dos es de:',div)

// PUNTO 3
    if (((cad1+cad2) >= 65) && (sexo == 'Varon'))  {
        console.log('Esta listo para jubilarse')
    }else if ((cad1+cad2 >= 60) && (sexo == 'Mujer')) {
        console.log('Esta listo para jubilarse')
    }else{
        console.log('No cumple los requisitos para jubilarse')
    }

// FUNCIONES
function rojo() {
    document.bgColor = 'red';
}
function verde() {
    document.bgColor = 'green';
}
function azul() {
    document.bgColor = 'blue';
}
function amarillo() {
    document.bgColor = 'yellow';
}

//Area de un triangulo
base = 2;
altura = 4;
console.log(('area de un triangulo', base*altura)/2)

