function Coche(marca, modelo,precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
}

var coche1 = new Coche('Renault', 'Laguna', 1000);
var coche2 = new Coche('Ford', 'Mondeo', 2300);
var coche3 = new Coche('Mercedes', '600', 8500);
var coche4 = new Coche('Seat', 'Cordoba', 3000);
var cadena;

function iva(precio) {
    var iva = 0.21;
    var preciofinal = precio * iva;
    return preciofinal;
}


var cadena = 'El coche ' + coche1.marca + ' ' + coche1.modelo + ' vale ' + coche1.precio + ' dolares ' + 'mas un iva de ' + iva(coche1.precio) ;
document.write(cadena + "<br>");
var cadena = 'El coche ' + coche2.marca + ' ' + coche2.modelo + ' vale ' + coche2.precio + ' dolares ' + 'mas un iva de ' + iva(coche2.precio);
document.write(cadena + "<br>");
var cadena = 'El coche ' + coche3.marca + ' ' + coche3.modelo + ' vale ' + coche3.precio + ' dolares ' + 'mas un iva de ' + iva(coche3.precio);
document.write(cadena + "<br>");
var cadena = 'El coche ' + coche4.marca + ' ' + coche4.modelo + ' vale ' + coche4.precio + ' dolares ' + 'mas un iva de ' + iva(coche4.precio);
document.write(cadena + "<br>");

