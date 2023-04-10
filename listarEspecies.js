import EspecieAPI from "./EspecieAPI.js";

const especie = new EspecieAPI();
let datos = await especie.listarEspecies();
const tabla = document.getElementById("tabla"); 
const fila = tabla.insertRow();
fila.className = "text-center"; 
fila.insertCell().innerHTML = "ID";
fila.insertCell().innerHTML = "Nombre";
fila.insertCell().innerHTML = "Clasificacion";
fila.insertCell().innerHTML = "Esperanza de vida";
fila.insertCell().innerHTML = "Peso Promedio";
datos.forEach((element) => {               
    const fila = tabla.insertRow();
    fila.className = "text-center"; 
    fila.insertCell().innerHTML = element.id_especie;
    fila.insertCell().innerHTML = element.nombre;
    fila.insertCell().innerHTML = element.clasificacion;
    fila.insertCell().innerHTML = element.esperanza_vida + " años";
    fila.insertCell().innerHTML = element.peso_promedio + "kg";
});



