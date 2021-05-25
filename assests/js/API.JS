let api_url = "https://rickandmortyapi.com/api/character"

function api_rick(page) {
    localStorage.setItem("pagina_actual", page)
    let personajes = document.getElementById("contenido")
    personajes.innerHTML = ""

    data_api = api_url + "?page=" + page
    console.log(data_api)


    let api_rickmoni = fetch(data_api)
    api_rickmoni.then(morty => morty.json())
        .then(rick => {
            // console.log(rick)
            for (const elefante of rick.results) {
                personajes.innerHTML += `
          <div class="col md-4" >
          <div class="card"style="width: 14rem;height:90% ">
          <img src="${elefante.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${elefante.name}</h5>
          <p>Genero:${elefante.gender}</p>
          <p> Estado:${elefante.status}</p>
          <p> Origen:${elefante.origin.name}</p>
          <p> Locación:${elefante.location.name}</p>
          </div>
          <br>
          <div class="card-footer">
          <h4class="text">Especie:${elefante.species}</h4>
          </div>
          `
            }
        }).catch(error => console.log(error))
}


//api_rickmoni.then(morty => morty.json())
//.then(rick => {
//  console.log(rick)
//for (const elefante of rick.results) {
//  personajes.innerHTML += `
//<div class="row-cols-1 row-cols-md-3">
//<div class="col mb-4">
//<div class="card h-100">
//<img src="${elefante.image}" class="card-img-top" alt="...">
//<div class="card-body">
// <h5 class="card-title">${elefante.name}</h5>
//<p class="card-text"></p>Genero:${elefante.gender} </p> <p> Estado:${elefante.status}</p>
//</div>
//</div>
//</div>
//`
//}
//}).catch(error => console.log(error))


//api_rickmoni.then(morty => morty.json())
//.then(rick => {
//console.log(rick)
//for (const elefante of rick.results) {
//personajes.innerHTML += `
//<div class="card mb-3" style="max-width: 800px;">
//<div class="row no-gutters">
//<div class="col-md-4">
//<img src="${elefante.image}" alt="...">
//</div>
//<div class="col-md-4">
//<div class="card-body">
//<h5 class="card-title">${elefante.name}</h5>
//<p class="card-text"><small class="text-muted"></p>
//<p class="card-text"></p>Genero:${elefante.gender} </p> <p> Estado:${elefante.status}</p>
//</div>
///<div>
//</div>
// </div>
//`
// }
//}).catch(error => console.log(error))

// class rickListContainer extends component {

//   state={
//     rickdata:[],
//     next:"",
//     previous:""
//   }

//   componentDidMount(){
//     axios.get('https://rickandmortyapi.com/api/character?page=2')
//     .then (res => {
//       const {results,next,previous}= res.data;

// this.setState({
//   rickdata:results,
//   next,
//   previous
// })

//     })  
//     .catch( error =>{
//       console.log(error);
//     })
//   }

//   nextpage= ()=>{
//     const{ next }= this.state;
//     axios.get(next)
//     .then ( r =>{
//       const { results,next,previous} = r.data;
//       this.setState({
//         rickdata: results,
//         next,
//         previous
//       })
//     })
//   }

//   previouspage= ()=>{
//     const{ previous }= this.state;
//     axios.get(previous)
//     .then ( r =>{
//       const { results,next,previous} = r.data;
//       this.setState({
//         rickdata: results,
//         next,
//         previous
//       })
//     })
//   }



// render (){
//   const { rickdata} = this.state;


//   return (
//     `< >
//     <AppNav />
//     <button onclick =${this.previouspage}>Anterior</button>
//     <button onclick =${this.nextpage}>Siguiente</button>  
//     <List rickdata = ${rickdata}/>
//     </>`
//   );
// }


// }
// export default rickListContainer;
//let page = (morty) => {
//let preDisable = morty.prev == null ? 'disabled' : ''
//let nextDisable = morty.next == null ? 'disabled' : ''

//let html = `<li class="page-item"${preDisable}"><a class ="page-link"onclick="api_rick('${morty.prev}')
//">Anterior</a></li>`
//html += `<li class ="page-item"><a class = "page-item"><a class = "page-link" href="#">1</a></li><li class ="page-item">
//<a class = "page-link"href="#">2</a></li><li class = "page -item"><a class ="page-link"href="#">3</a></li><li 
//class ="page -item"> `

//html += `<li class ="page-item ${nextDisable}"><a class ="page-link" onclick="api_rick('${morty.next})">Siguiente</a></li>`

//document.getElementById("paginations").innerHTML = html

//}

function morty(data_consulta) {
    let episodios_lista_btn = ''
    let pagina_actual_user = localStorage.getItem("pagina_actual")
    let busqueda_personaje = document.getElementById("busqueda_personaje_user").value

   if(data_consulta == 'episodios'){
    url = fetch(api_url + "?page=" + pagina_actual_user)
   }else if(data_consulta == 'buscar'){
    url = fetch(api_url + "/?name=" + busqueda_personaje)
   }
    let personajes = document.getElementById("contenido")
    contenido.innerHTML = ''
    url.then(morty => morty.json())
        .then(rick => {
            console.log(rick)
            for (const elefante of rick.results) {
                if (data_consulta == 'episodios') {
                    elefante.episode.forEach(function (element, index) {
                        element = element.substring(40, 45);
                        episodios_lista_btn += `${element}, `
                    });
                }

                personajes.innerHTML += `
                <div class="col mb-4">
                <div class="card"style="width:14rem;height:100% ">
                        <img src="${elefante.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${elefante.name}</h5>
                            <p class="card-text">${episodios_lista_btn}</p>
                        </div>
                    </div>
                </div>
                    `
            }
        }).catch(error => console.log(error))
}

