var genero1;
var genero0;



function buscarMatch() {





    let minimum = 1
    let maximum = 826;
    let characNum1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
    
    fetch('https://rickandmortyapi.com/api/character/'+characNum1)
    .then(function(response){
        return response.json()
        }
    )
    .then(function(data){

        let element = document.getElementById("personaje") 

        element.innerHTML = `
        
            <li><label>Nombre: ${data.name}</label></li>
            <li><label>Estado: ${data.status}</label></li>
            <li><label>Especie: ${data.species}</label></li>
            <li><label>Localidad: ${data.location.name}</label></li>
            <li><label>Genero: ${data.gender}</label></li>
            <img src =${data.image}>
            
            `
        
           
            return(genero1 = data.gender);         
        }
          
    )
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
        }
    )
    .then(function(data){

            let infoPersona = document.getElementById("persona")
            genero0=data.results[0].gender;
            infoPersona.innerHTML = `
        
                <img src = ${data.results[0].picture.large} >
                <li><label>Nombre: ${data.results[0].name.first} </label></li>
                <li><label>Apellido: ${data.results[0].name.last} </label></li>
                <li><label>Genero: ${data.results[0].gender} </label></li>
                <li><label>Nacimiento: ${data.results[0].dob.date} </label></li>
                <li><label>Coordenadas: </label></li>
                <li><label>Latitud: ${data.results[0].location.coordinates.latitude} </label></li>
                <li><label>Longitud: ${data.results[0].location.coordinates.longitude} </label></li>` 
            
                return(genero0 = data.results[0].gender);
              
        }

    )
    .then(function(){
        

        let genero1True = genero1.toLowerCase();
        
        console.log(genero0)
        console.log(genero1True)

        if (genero1True===genero0){
            let match = document.getElementById("matcheo")
            match.innerHTML = `
        
            <li> HAY MATCH </li>
            <img src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png' height=200 >
            
        ` }
            else{ 
                let match = document.getElementById("matcheo")
                match.innerHTML = `
            
                <li>NO HAY MATCH </li>
                <img src='https://img.freepik.com/vector-premium/icono-signo-incorrecto_188544-4739.jpg' height=200 >
            ` 
        
            }

    })

}

   

 
    
  


    