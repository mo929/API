function guardar_nota() {
    let nota = document.getElementById("nota_ok").value
    let contador = 0
    let contenido = ''
    let var_nombre = ''
    if (localStorage.getItem('contadorNotas') == null) {
        localStorage.setItem('contadorNotas', 1)
        localStorage.setItem('nota', nota)
        var_nombre="nota 1"
        cotenido= localStorage.getItem('nota')
    } else {
        contador = localStorage.getItem('contadorNotas')
        contador = parseInt(contador) + 1
        localStorage.setItem('contadorNotas', contador)
        localStorage.setItem('nota' + contador, nota)
        var_nombre='nota' + contador
        contenido = localStorage.getItem(var_nombre)
    }
    let notas_nuevas=document.getElementById('notas_guardadas')
    notas_nuevas.innerHTML += "<p>" + contenido + "</p>"

}
