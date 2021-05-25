
function opcion(){
let libros = ["accion", "Comedia", "romanticismo", "misterio", "documental"]
let libro_si = document.getElementById("libro_ok")
libros.forEach(function(element){
libro_si.innerHTML += "<h1 onclick='libros()'>"+element+"</h1>"
})
}
function libros(){
console.log("Hola libro")
}


//let dias = ['lunes', 'martes', 'mieroles', 'jueves', 'viernes']
//console.log(dias);
//dias.shift();
//console.log(dias);
//dias.splice(1, 1);
//console.log(dias);
//dias.splice(1,0 ,'martes');
//console.log(dias);
//dias.splice(5,0, 'sabado');
//console.log(dias);

//let colores = ['rojo', 'verde', 'blanco', 'azul']
//colores.push('morado');
//console.log(colores.indexOf('morado'));
//console.log(colores);
//funtion borrarElementoarray(elemento, array){
    //let indice = array.indexof(elemento);

    //if (indice > -1) {
        //el elemento si existe
        //array.splice(indice, 1);
    //} else {
        //el elemento no existe
        //alert('no se ha encontrado el elemento')

   // }

//}

//borrarElementoarray('negro', colores);
let array =[1,500,230,40,4,65,28,32,45,1002]

let orden1 =[1,500,230,40,4,65,28,32,45,1002]
console.log(orden1.sort(function(a,b){
    return a-b;
}));

let orden2 =[1,500,230,40,4,65,28,32,45,1002]
orden2.reverse();
console.log(orden2)









