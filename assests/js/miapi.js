function api(page) {
  let personajes = document.getElementById("contenido")
  personajes.innerHTML = ""
  let api_url = "https://rickandmortyapi.com/api/character?page=" + page
  console.log(api_url)
  let api_rick = fetch(api_url)
  api_rick.then(foca => foca.json())
    .then(rick_d => {
      console.log(rick_d)
      for (const dato of rick_d.results) {
        personajes.innerHTML += `
<div class="col md-4" >
<div class="card"style="width: 14rem;height:100% ">
<img src="${dato.image}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${dato.name}</h5>
<p>Genero:${dato.gender}</p>
<p> Estado:${dato.status}</p>
`
      }
    }).catch(error => console.log(error))
}

function busqueda (){
  
}