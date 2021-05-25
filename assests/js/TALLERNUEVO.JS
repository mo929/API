
let clientes = ["Mariano", "paulina", "lázaro", "josé", "Luis", "Belinda", "Helena", "Vanessa", "Luciano", "Amaranta"]
let clientes_nuevos = ["Manuela", "Alex", "Norma", "Robert",]
let clientes_betados=["Max", "Rosa", "Clara"]
console.log(clientes.concat(clientes_nuevos, clientes_betados))

function capturar() {
    function Usuario(nombres) {
        this.nombres = nombres;
    }
    var nombres_capturar = document.getElementById("nombres").value;
    nuevo_usuario = new Usuario(nombres_capturar);
    agregar();
}
var base = [];
function agregar() {
    base.push(nuevo_usuario);
    console.log(base)
document.getElementById("datos").innerHTML += '<tbody><td>' +  nuevo_usuario.nombres + '</td></tbody>';
};

let cambio_nombre = ["Mariano", "paulina", "lázaro", "josé", "Luis", "Belinda", "Helena", "Vanessa", "Luciano", "Amaranta", "Manuela", "Alex", "Norma", "Robert"]
cambio_nombre.splice(cambio_nombre.indexOf('Luciano'), 1, "paco");
console.log(cambio_nombre)

function maximo() {
    let tarjetas = document.getElementById('nombre')
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[4] + '<p class="card-text">Libros, Carpa, Asador</p>'
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[7] + '<p class="card-text">Carro, Viveres, Sliping</p>'
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[2] + '<p class="card-text">Bicileta, Tenis, Sudadera</p>'
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[6] + '<p class="card-text">Patines, Casco, Maleta</p>'
    Swal.fire({
        icon: 'success',
        title: 'FELICITACIONES',
        text: '¡' + clientes[7] + ' Y '+ clientes[4] +' !',
    })
}

let betados =["MAX", "ROSA", "CLARA"];
function minimo() {
    Swal.fire({
        icon: 'error',
        title: 'ESTAN BETADOS',
        text:'¡' + betados[0] + '  '+ betados[1] +' Y ' + betados[2] + '!',

    })
}

let total_clientes =[];
function total() {
    Swal.fire({
        icon: 'success',
        text: '¡17 CLIENTES!',
    })
}

function organizar_clientes(){
    let todos = ["Mariano", "Paulina", "Lazaro", "Jose", "Luis", "Belinda", "Helena", "Vanessa", "Paco", "Amaranta", "Manuela", "Alex", "Norma", "Robert"]
    todos.sort()
    console.log(todos)
    
}