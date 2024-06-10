//! EJEMPLO: EJERCICIO QUE MUESTRA LOS NOMBRES QUE EMPIEZAN CON "R"

// Array de nombres
const nombres = ["Ricardo", "Ana", "Roberto", "Juan", "María", "Rut", "Mariela", "rodolfo"];

// Array para almacenar los nombres que empiezan con 'r'
const nombresConR = [];

// Bucle para recorrer el array de nombres
for (let i = 0; i < nombres.length; i++) {
    // Comprueba si el nombre actual comienza con 'r' (o 'R')
    if (nombres[i].toLowerCase().startsWith('r')) {
        // Si sí, añádelo al array nombresConR
        nombresConR.push(nombres[i]);
    }
}

// Imprime los nombres que empiezan con 'r'
console.log("Nombres que empiezan con 'r':", nombresConR);