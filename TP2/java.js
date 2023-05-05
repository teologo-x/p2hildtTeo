
function getCharacter() {

    let characNum = document.getElementById("characterNumber").value;
    

    fetch('https://rickandmortyapi.com/api/character/'+characNum)
    .then(function(response){
        return response.json()
        }
    )
    .then(function(data){

        let element = document.getElementById("elem")

        function getImage() {   
            var imagen = new Image
            imagen.src = data.image
            document.body.appendChild(imagen)
        }    

        element.innerHTML = `
        
            <li><label>Nombre: ${data.name}</label></li>
            <li><label>Estado: ${data.status}</label></li>
            <li><label>Especie: ${data.species}</label></li>
            <li><label>Localidad: ${data.location.name}</label></li>
                   
        `
        //preguntar: hay que refrescar sino se acumulan las imagenes

        getImage();
        console.log(data)

        }

    )

}