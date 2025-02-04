// Declaración 

let listaNombres = [];   // Arreglo de nombres ingresados
const listaAmigos = document.getElementById('listaAmigos')      // Elemento para mostrar el listado de amigos ingresado
const resultado = document.getElementById('resultado')          // Elemento para mostrar el resultado del sorteo
const nuevoAmigo = document.getElementById('amigo')             // Input en donde se ingresan los nombres de los amigos
const btnSorteo = document.querySelector('.button-draw')        // boton del sorteo

// Función para limpiar cualquier contenido dentro de un elemento
function limpiarElemento(elemento) {
    elemento.innerHTML = '';
}

// Función para insertar html con forma de lista para los campos ingresados
function mostarListadoNombres(listaNombres) {
    let html = '';
    listaNombres.forEach(element => {
        html += `<li>${element}</li>`
    });
    listaAmigos.innerHTML = html;
}

// Función para insertar html con el amigo sorteado
function mostrarSorteado(amigoSecreto){
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
}

// Función para agregar un nuevo amigo a la lista y actualizar la vista
function agregarAmigo() {
    nombreIngresado = nuevoAmigo.value.trim();

    // Validación: comprobar si el nombre es válido y no repetido
    if (!nombreIngresado) {
        alert('Por favor, ingrese un nombre válido');

    } else if (listaNombres.includes(nombreIngresado)) {
        alert(`${nombreIngresado}, ya esta en tu lista de amigos`);

    } else {
        limpiarElemento(resultado);             // Limpiar el resultado anterior

        listaNombres.push(nombreIngresado);     // Agregar el nombre a la lista
        mostarListadoNombres(listaNombres);     // Mostrar la lista actualizada

        // Habilitar el botón de sorteo si hay al menos dos amigos
        if (listaNombres.length > 1) {
            btnSorteo.removeAttribute('disabled');
        }
    }
    nuevoAmigo.value = '';
    nuevoAmigo.focus();
}

// Función para sortear un amigo secreto de la lista
function sortearAmigo() {
    numeroAleatorio = Math.floor(Math.random() * listaNombres.length);
    
    // Limpiar la lista de amigos y mostrar el amigo sorteado
    limpiarElemento(listaAmigos);
    mostrarSorteado(listaNombres[numeroAleatorio]);

    // Reiniciar la lista de amigos
    listaNombres.length = 0; 

    // Deshabilitar el botón de sorteo
    btnSorteo.setAttribute('disabled', 'true');

}

// Evento para agregar un amigo cuando se presiona la tecla Enter
nuevoAmigo.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        agregarAmigo();
    }});
    
// EEvento para inicializar la página y deshabilitar el botón al cargar
document.addEventListener('DOMContentLoaded', () => {
    btnSorteo.setAttribute('disabled','true');
    });