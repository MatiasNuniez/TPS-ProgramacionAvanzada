//Funcion para crear jugadores o personajes
function jugador(Nombre) {
    this.nombre = Nombre,
    this.pv = 100,
    this.sp = 100
}


//Funcion para atacar a otro personaje
function attack(me,ennemy ) {
    if ((me.sp >= 5) && (ennemy.pv >9) &&(me.pv > 0)) { // EVALUAMOS QUE TENGA LA MAGIA NECESARIA PARA PODER ATACAR
        me.sp = me.sp - 5; //decrementamos la magia del atacante
        ennemy.pv = ennemy.pv - 10; //Decrementamos la vida del enemigo
        alert( me.nombre + " Ha atacado correctamente a " + ennemy.nombre );
    }else if (me.sp < 5) {
        me.sp = 100;
        alert("Magia recargada correctamente")
    }else
    alert("NO PUEDE SER ATACADO");
}



//Funcion para curar al enemigo
function heal(me, ennemy) {
    if ((me.pv > 0) && (me.sp >5) &&(ennemy.pv < 91)){
        ennemy.pv = ennemy.pv + 10;     
        me.sp = me.sp - 5;
        alert("Curado correctamente")
    }else
    alert("No puede ser curado")
}


//Cuerpo de la applicacion
const Orco = new jugador("Orco");
const Legolas= new jugador("Legolas");

attack(Orco, Legolas);
heal(Orco,Legolas);

console.log(Orco);
console.log(Legolas);