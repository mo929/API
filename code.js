let bebidas_bar = ["Cerveza", "Cocteles", "Agua", "Jugas", "Alitas", "Ron", "Whiskey", "Aguardiente", "Tequila", "Reds"]
let ciudad = ['Bogota', 'Pereira', 'Cali', 'Medellin']
let select_productos = document.getElementById('lista_productos')
let select_ciudad = document.getElementById("ciudad_user")
console.log(select_productos)

bebidas_bar.forEach(function(element, index) {
    select_productos.innerHTML += "<option value='" + index + "'>" + element + "</option>"
})

ciudad.forEach(function(element) {
    select_ciudad.innerHTML += '<option>' + element + '</option>'
})


function mensaje(opcion_bebida) {
    if (opcion_bebida == 2) {
        console.log('2 X 1')
    }
}