// Función para incrementar el contador de visitas en localStorage
function incrementarContador() {
    if (localStorage.getItem("contadorVisitas")) {
        // Si el contador ya existe en el almacenamiento local, se incrementa su valor
        var contador = parseInt(localStorage.getItem("contadorVisitas")) + 1;
        localStorage.setItem("contadorVisitas", contador);
    } else {
        // Si el contador no existe, se crea con un valor inicial de 1
        localStorage.setItem("contadorVisitas", 1);
    }
}

// Función para obtener el total de visitas desde localStorage
function obtenerTotalVisitas() {
    var totalVisitas = localStorage.getItem("contadorVisitas") || 0;
    return parseInt(totalVisitas);
}

// Llamar a la función correspondiente según la página actual
if (document.title === "Dashboard") {
    window.onload = function() {
        document.getElementById("total-visitas").innerText = "Total de visitas: " + obtenerTotalVisitas();
    };
} else if (document.title === "Pagina Principal") {
    incrementarContador();
}