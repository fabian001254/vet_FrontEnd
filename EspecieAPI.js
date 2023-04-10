class EspecieAPI{
    async guardarEspecie(){
         
        const datos = {
           nombre: document.getElementById("nombre").value,
           clasificacion: document.getElementById("clasificacion").value,
           esperanza_vida: parseInt(document.getElementById("esperanza").value),
           peso_promedio: parseFloat(document.getElementById("peso").value)
        }
        
        await fetch(
            'http://localhost:3000/CrearEspecie',
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(datos)
            }
        ); 
    }
    async listarEspecies(){
        let especies = await fetch('http://localhost:3000/ListarEspecies');
        especies = await especies.json();
        return especies;
    }
}
export default EspecieAPI; 