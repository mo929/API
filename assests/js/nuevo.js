/*function libros_leidos(){
    let lee_libros=document.getElementById("que_genero").value
    localStorage.setItem("que_genero", lee_libros)
    let respuesta = localStorage.getItem("que_genero")
    console.log(respuesta)
}

*/

//let nombres = ["miguel", "lulu","lili","lolo", "miguel"]


//que son los objetos es un element que creamos y tiene diferentes atributos

//objetos con diferentes atributos
//var perro = {nombre:"rex", edad:5,vivo:true};
//console.log(perro);
//var perro2 = {nombre:"tomy", edad:8,vivo:false};
//console.log(perro2);

//constructores de objetos

function Animal(nombre,edad,vivo){
this.nombre=nombre;
this.edad=edad;
this.vivo=vivo;
};
var Animal1= new Animal("ita","5años",true);
console.log(Animal1)
var Animal2= new Animal("zaku","1año",true);
console.log(Animal2)



//table class="base" id="datos">
//<tr>
    //<th></th>
//</tr>
//<tr>
//</tr>
//</table>