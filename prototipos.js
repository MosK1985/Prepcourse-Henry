Array.prototype.mayoresQueTres = function () {
    var arregloModificado = [];

    for (let i = 0; i < this.length; i++) {
        if(this[i] > 3) {
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayoresQueTres();

// segundo ejemplo

class Latinoamerica {
    constructor () {
        this.paises = [];
       }
}
Latinoamerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarPais('Argentina');
console.log(continente.pais);