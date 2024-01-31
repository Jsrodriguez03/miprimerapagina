//Menú Responsive
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};


//Formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});




// alert("Hola este es mi Javascript");

// let nombre = "Marta";
// nombre = "Maria";

// var nombre1 = "Marta";

// const nombre2 = "Marta";
// //nombre2 = "María" ;

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);


// // SELECCIONAR ELEMENTOS
// //Seleccionar Titulo del Header y Cambiarlo
// let contenidoTitulo = "Nombre";

// let titulo = document.querySelector(".logo");

// titulo.innerHTML = contenidoTitulo;

// let textoTitulo = titulo.innerText;
// console.log(textoTitulo);

// //CONDICIONALES
// if (textoTitulo == "Nombre") {
//     titulo.innerHTML = "Otro";
// } else {
//     console.log("no se cumple");
// }


// //Seleccionar Elemento "Acerca de Mí" y Cambiarlo
// let titulo = document.querySelector(".acerca-de-mi");
// console.log(titulo.textContent);

// if (titulo.textContent == "Acerca de Mí") {
//     titulo.innerHTML = "Logrado";
// } else {
//     console.log("Nub");
// }



// //FUNCIONEScontenido
// //Cambiar Parrafo 2
// let nombre = "Santiago";
// let ciudad = "Colombia";
// let gusto = "Chocolate";

// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto(nombre, ciudad, gusto) {
//     let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

//     return contenido;
// }

// parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);


// //Cambiar Elemento Acerca de Mí;
// let texto = "Santiago!";

// let elemento = document.querySelector(".acerca-de-mi");


// console.log(elemento.textContent);

// function cambioElemento(texto) {
//     let elemCam = elemento.innerHTML = texto;

//     return elemCam;
// };

// elemento.innerText = cambioElemento(texto);

