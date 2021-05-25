
let clientes = ["Mariano", "Paulina", "Lazaro", "Jose", "Luis", "Belinda", "Helena", "Vanessa", "Luciano", "Amaranta"]
let clientes_nuevos = ["Manuela", "Alex", "Norma", "Robert",]
console.log(clientes.concat(clientes_nuevos))

function agregar_cliente() {
    clientes_nuevos.push()
    Swal.fire({
        icon: 'success',
        title: 'Nuevos clientes',
        text: '¡' + clientes_nuevos[0] + '  ' + clientes_nuevos[1] + '  ' + clientes_nuevos[2] + ' Y ' + clientes_nuevos[3] + '!',
    })

}


let cambio_nombre = ["Mariano", "Paulina", "Lazaro", "Jose", "Luis", "Belinda", "Helena", "Vanessa", "Luciano", "Amaranta", "Manuela", "Alex", "Norma", "Robert"]
cambio_nombre[8] = "Paco"
console.log(cambio_nombre)

function cliente_uno() {
    let tarjetas = document.getElementById('nombre')
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[4] + '<p class="card-text">pan,carne,huevos</p>'
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[7] + '<p class="card-text">carro,bicicleta,moto</p>'
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[8] + '<p class="card-text">esferos,cuaderno.borrador</p>'
    tarjetas.innerHTML += '<div class="card"> <div class="card-body"> ' + clientes[2] + '<p class="card-text">televisor,cama,licuadora</p>'
    Swal.fire({
        icon: 'success',
        title: 'FELICITACIONES ¡ SON LOS MEJORES !',
        text: '¡' + clientes[8] + ' Y '+ clientes[7] +' !',
    })
}



function cliente_dos() {
    let betados = ["Max", "Rosa", "Clara"]
    Swal.fire({
        icon: 'error',
        title: 'BETADOS',
        text: '¡' + betados[0] + '  ' + betados[1] + ' Y ' + betados[2] + '!',
    })

}

function orden_clientes() {
    let todos = ["Mariano", "Paulina", "Lazaro", "Jose", "Luis", "Belinda", "Helena", "Vanessa", "Paco", "Amaranta", "Manuela", "Alex", "Norma", "Robert"]
    todos.sort()
    console.log(todos)

}