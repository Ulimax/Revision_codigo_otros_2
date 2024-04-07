var formulario = document.querySelector("#formulario")
formulario.onsubmit = function(e) {
      // DE prevent a preventDefault
      e.preventDefault();
      // Cambiamos nombres a variables
      var name = formulario.elements[0] 
      var age = formulario.elements[1]
      var nationality = formulario.elements[2]
      
      var nombre = name.value
      var edad = age.value

      var i = nationality.selectedIndex
      var nacionalidad = nationality.options[i].value
      console.log(nombre, edad)
      console.log(nacionalidad)

      name.classList.remove("error") 
      age.classList.remove("error")
      nationality.classList.remove("error")
      var regName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

      if (!regName.test(nombre.trim())) { // Modificamos para que no acepte espacios
        name.classList.add("error") // cambiamos a los nuevos nombres de variables
      }
      if (edad < 18 || edad > 120) {
        age.classList.add("error") // cambiamos a los nuevos nombres de variables
      }
      if(nacionalidad === ""){
        nationality.classList.add("error")
      }

   
    // Mejoramos la legilibilidad de la sentencia if
    if (regName.test(nombre.trim()) && nombre.trim().length > 0 && (edad > 18  && edad < 120 && nacionalidad !=0) ) {
      agregarInvitado(nombre, edad, nacionalidad)
      }
}

/** Esta de más este boton */
// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
// var corteLinea = document.createElement("br");
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

/** Evitamos que se cree un segundo  nombre  en la lista
 * Lo que esta comentado abajo no debe de ir en el codigo
*/
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("p")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.innerText = valor 
inputNombre.style.display = "inline";
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}