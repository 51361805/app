

// 
// if (true) {
// console.log("este mensaje se deberia ver");
// }






//ejemplo dos calculamos el descuento para un producto

/*let porcentaje = parseFloat (prompt ("que porcentaje de descuento queires aplicar "));

console.log(" prcentaje ingresado", porcentaje);

let precio =  parseFloat (prompt ("cuanto cuesta tu producto" ));

let descuento = 0;

let total = precio;

if (porcentaje > 0 ) {
   
   descuento = precio * (porcentaje/100)
   
}

total = precio -  descuento;

console.log (alert("el importe que vamos a descontar es de " + descuento));
(alert("el valor final del producto es de " + total)); */





//uso de estructura if else 
/*
let edad =parseInt (prompt("que edad tienes?"))

if (edad >= 18) {
    //se ejecuta si la condicon es verdadera
    alert("puedes entrar al sitio")

} else {
        //se ejecuta si la condicon es falsa

    alert(" no puedes entrar al sitio")
}

*/
/*
const COLOR_VACIO = ""

const COLOR_PREFERIDO = "AZUL"

let color = prompt("sabes que color me gusta a mi ?")


if (color == COLOR_VACIO) {
    alert("debes ingresar un color")
    let color = prompt("sabes que color me gusta a mi ?")
        (alert("si ese color me gusta a mi"))
}0                                                                                                                                             

if (color.toUpperCase() == COLOR_PREFERIDO) {
    (alert("si ese color me gusta a mi"))

} 
else {
    alert("lastima ese color no me gusta a mi")
    color = prompt("sabes que color me gusta a mi ?")
}

*/
const historia = document.querySelector('.historia');
const botonSiguiente = document.querySelector('.boton-siguiente');
const botonAnterior = document.querySelector('.boton-anterior');
const ventanaModal = document.querySelector('.ventana-modal');
const imagenGrande = document.querySelector('.imagen-grande');

let posicion = 0;

botonSiguiente.addEventListener('click', function () {
    posicion += historia.offsetWidth;
    historia.scrollTo(posicion, 0);
});

botonAnterior.addEventListener('click', function () {
    posicion -= historia.offsetWidth;
    historia.scrollTo(posicion, 0);
});

function abrirImagen(elemento) {
    ventanaModal.style.display = 'block';
    imagenGrande.src = elemento.src;
}

function cerrarImagen() {
    ventanaModal.style.display = 'none';
}







