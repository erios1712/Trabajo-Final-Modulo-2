//Funciones para llamar API y rellenar la galeria de imagenes de index.html

var contenido = document.querySelector("#contenedor-ppal");

fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(datos => {
    rellenarGaleria(datos);
})

function rellenarGaleria(datos){

contenido.innerHTML = "";

for (let temp of datos){

    contenido.innerHTML +=

    `    
        <div class="col text-center">
            <img src="${temp.img}">
            <h6>Nombre: ${temp.name}</h6><br>
            <p>Nivel: ${temp.level}</p>
        </div>    
    `
}
}

//Las siguientes 3 funciones permiten buscar un digimon por su nombre en el buscador del nav de index.html, luego muestra el modal con informacion


//Toma el valor ingresado en la barra de busqueda del nav, y se lo pasa a la funcion getDigimonByName()
function pasardato(){
    let buscarNombre = document.querySelector("#buscador").value;
    //console.log(buscarNombre);
    getDigimonByName(buscarNombre)
   }

//Toma el valor de la funcion anterior y llama a la API que permite buscar el Digimon por nombre, luego se pasan los datos a la funcion agregarModal
function getDigimonByName(x){
    //console.log("https://digimon-api.vercel.app/api/digimon/name/"+x)
  
    fetch("https://digimon-api.vercel.app/api/digimon/name/"+x)
    .then(response => response.json() )
    .then(datos => agregarModal(datos))
  }

  //Toma los datos de la API, y muestra un modal con informacion del Digimon buscado
  function agregarModal(datos){
     
    var puntero = document.querySelector("#contenedorModal");
    //console.log(datos[0].img)
    puntero.innerHTML =
    `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${datos[0].name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${datos[0].img}" style="width: 250px;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>            
          </div>
        </div>
      </div>    
    `
    $("#contenedorModal").modal("show");
  } 

  


    

