function capturar(){
var Nnombres =document.getElementById("nombres").value
var Nedad =document.getElementById("edad").value
var Ngenero =document.getElementById("genero").value
var Ncorreo =document.getElementById("correo").value
let verificar=localStorage.getItem('nuevo_registro')
let array
let arrayauxiliar
if (verificar==null){
    array =[Nnombres,Nedad,Ngenero,Ncorreo]
    localStorage.setItem('nuevo_registro',array)
}else {
    arrayauxiliar=[Nnombres,Nedad,Ngenero,Ncorreo]
    array=[localStorage.getItem('nuevo_registro')]
    array = array.concat(arrayauxiliar)
    localStorage.setItem('nuevo_registro',array)
}

}