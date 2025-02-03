
let listaNombres = [];   //Arreglo de nombres ingresados

// Función limpia el nombre ingresado y posiciona el cursor en el input
function limpiarNombre() {
    let input = document.getElementById('amigo');
    input.value = '';
    input.focus();
}

// Función limpia el nombre sorteado en el DOM
function limpiarAmigoSecreto() {
    document.getElementById('resultado').innerHTML = '';
}

// Función limpia el nombre ingresado y posicion el cursor en el input
function limpiarListado(){
    document.getElementById('listaAmigos').innerHTML = '';
    listaNombres = [];
}

// Función para insertar html con forma de lista para los campos ingresados
function mostarListadoNombres(listaNombres) {
    let html = '';
    listaNombres.forEach(element => {
        html += `<li>${element}</li>`
    });
    document.getElementById('listaAmigos').innerHTML = html;
}

// Función para insertar html con el amigo sorteado
function mostrarSorteado(amigoSecreto){
    limpiarListado();
    let contenedor = document.getElementById('resultado');
    contenedor.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`
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
        limpiarAmigoSecreto()
        listaNombres.push(nombreIngresado);
        mostarListadoNombres(listaNombres);
        
        // Habilita el boton de sorteo cuando al menos 2 amigos han sido ingresados
        if (listaNombres.length > 1) {
            document.getElementById('sorteo').removeAttribute('disabled');
        }
    }
    limpiarNombre();
}

// Funcion para sortear amigo desde la lista ingresada
function sortearAmigo() {
    numeroAleatorio = Math.floor(Math.random() * listaNombres.length);
    mostrarSorteado(listaNombres[numeroAleatorio]);
    
    //deshabilita boton al realizar sorteo
    document.getElementById('sorteo').setAttribute('disabled','true')
}