
let listaNombres = [];   //Arreglo de nombres ingresados

// Función limpia el nombre ingresado y posiciona el cursor en el input
function limpiarNombre() {
    let input = document.getElementById('amigo');
    input.value = '';
    input.focus();
}

// Función para insertar html con forma de lista para los campos ingresados
function mostarListadoNombres(listaNombres) {
    let html = '';
    listaNombres.forEach(element => {
        html += `<li>${element}</li>`
    });
    document.getElementById('listaAmigos').innerHTML = html;
}

// Funcion Agregar el input a una lista para luego mostrarla en el front
function agregarAmigo() {

    nombreIngresado = document.getElementById('amigo').value;

    // Validar si el campo ingresado no esta vacío o repetido
    if (!nombreIngresado) {
        alert('Por favor, ingrese un nombre válido');

    } else if (listaNombres.includes(nombreIngresado)) {
        alert(`${nombreIngresado}, ya esta en tu lista de amigos`);

    } else {
        listaNombres.push(nombreIngresado);
        mostarListadoNombres(listaNombres);
    }
    limpiarNombre();
}