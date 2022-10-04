const modelo = document.querySelector(".modelo");
const card = document.getElementsByClassName("card");

const anadir = document.getElementById("anadir");

anadir.addEventListener("click", anadirTarjetas);
function anadirTarjetas() {
  let tarjeta = document.getElementById("contenedor-card");
  console.log(tarjeta);
  tarjeta.innerHTML += `<div class="card">
    <div class="modelo" id="modelo">m</div>
    <p>
      En muchas ocasiones nos interesará buscar elementos en un array para,
      o bien, encontrar el elemento y trabajar con él, o para saber la
      posición del elemento en el array.
    </p>
    <div class="btn" id="btn-delete">Delete</div>
</div>`;
function deletedCard() {
    
}
}

// let elemento=document.getElementById('papa')
// let parrafo1 = document.getElementById("parrafo1");
// let elemento2 = document.getElementById("parrafo2");
// let parrafo0 = document.createElement("p");
// crea elemento
// document.body.appendChild(parrafo0);
// parrafo0.innerHTML='Hola, soy nuevo en este parrafo.'
// papa.insertBefore(parrafo1,parrafo0)
// papa.insertAdjacentHTML('beforebegin',parrafo1)
// papa.replaceChild(parrafo0,parrafo1)

// const elemento= document.getElementById('parrafo1')
// const elemento1= document.getElementsByClassName("parrafo")
// const elemento2= document.getElementsByTagName("p")
// const papa=document.querySelector('.papa')

// let elemento4= document.querySelector('.parrafo')

// // Crear elementos o dentro html
// // let parrafo4= document.createElement('p')
// // document.body.appendChild(parrafo4 )

// papa.innerHTML='<p class="papa2" id="papa2">Papa igual 5</p>'
// papa.innerText='<p>Papa igual 5</p>'
// papa.innerHTML='<button id="eliminar">delete</button>'
// papa.removeChild('')
