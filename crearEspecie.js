import EspecieAPI from "./EspecieAPI.js";

const especie = new EspecieAPI();
const boton = document.getElementById("boton");

boton.addEventListener("click",
    async (event)=>{
        event.preventDefault();
        await especie.guardarEspecie(); 
        Swal.fire({
            title: 'Guardado!',
            text: 'Guardado con exito!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    });