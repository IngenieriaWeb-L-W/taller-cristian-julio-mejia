let display = document.getElementById('display');

// Función que me muestra en pantalla el botón seleccionado
function appendToDisplay(value) {
    display.value += value;
}

// Función para limpiar la pantalla
function clearDisplay() {
    display.value = '';
}

// Función que muestra los resultados de las operaciones
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

localStorage.setItem('nombre', 'Camilo Mejía');
    const nombre = localStorage.getItem('nombre');
    console.log('nombre: ', nombre);
