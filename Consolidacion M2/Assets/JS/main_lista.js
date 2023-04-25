//Funciones para llamar API y rellenar la lista de digimon de lista.html


var contenido2 = document.querySelector("#listado_digimon");
    
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(datos => {
    rellenarListado(datos);
})


function rellenarListado(datos){

contenido2.innerHTML = "";

let contador = 0; //Esta variable sirve para poner el numero de cada fila de la tabla

for (let temp of datos){ //se recorre el json y se manipula el dom para crear la tabla de lista.html con los datos de la API
 
    contenido2.innerHTML +=

    `   
    <tr>
    <th scope="row">${contador}</th>
    <td>${temp.name}</td>
    <td>${temp.level}</td>
    <td style="display: none;">${temp.img}</td>  
    <td><div class="btn btn-warning" onclick="mostrarModal(${contador})">Ver Digimon</div></td> 
    </tr>

    `
    contador = contador + 1;
//nota: la fila de la tabla con las url de la foto del digimon esta oculta con un display:none, para efectos de orden.

}
}

//Funciones para mostrar Modal con nombre y foto del Digimon API


function mostrarModal(x){  //Esta funcion, cuando es llamada en el evento onclick de boton VER DIGIMON, recibe el valor
  //de la variable contador (o numero de fila), con esto hace una busqueda del nombre y la url del Digimon en la tabla, para luego mostrar el Modal.
  var p1Tabla = document.getElementById("tabla1").rows[(x+1)].cells[1].innerHTML;
  var p2Tabla = document.getElementById("tabla1").rows[(x+1)].cells[3].innerHTML;
  console.log(p1Tabla);
 
     
    var puntero = document.querySelector("#contenedorModal");
    puntero.innerHTML =
    `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${p1Tabla}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${p2Tabla}" style="width: 250px;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>            
          </div>
        </div>
      </div>    
    `
    $("#contenedorModal").modal("show");
  } 

   




    
 



    