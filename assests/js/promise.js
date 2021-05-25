let w = 34;

//let promesa = new Promise((resolve,reject)=> {
//  if ( w==35){
//    resolve('la variable es igual a 10');
//}else {
//  reject('la variable no coincide');
//}
//});

//promesa
//.then(res => {
//console.log('super:' + res)
//})
//.catch(error=>{
//console.log ('error:' + error)
//}); 
//console.log('1.iniciando');

//setTimeout(()=>{
//  w=w*3+2;
//console.log('2.en proceso');
//}, 2000);


//console.log('3.el resultado es:' + w);

//let promesa = new Promise((resolve, reject) => {

  //  setTimeout(() => {
    //    w = w * 3 + 2;
      //  console.log('2.en proceso');
        //resolve(w);
    //}, 2000);
//});
//console.log('1.iniciando');

//promesa.then(res =>{
  //  console.log('3.el resultado es:' + res)
//})

let usuarios =[{
    id:1,
    nombre:'willian'
},
{
    id:2,
    nombre:'alexandra'
}];


let telefonos=[{
    id:1,
    telefono:123345
},
{
    id:2,
    telefono:567890
}];

var obtenerusuario= id =>{
return new promise((resolve,reject)=>{
    if (usuarios.find(usuarios=>usuarios.id===id)){
        resolve('el usuario si esta jejejej');
    }else{
        reject ('el usario no esta jajajaj');
    }
}); 
}



var obtenertelefonos =id =>{
    return new promise((resolve,reject)=>{
        if (telefonos.find(telefonos=>telefonos.id===id)){
            resolve('el teefono si esta jejejej');
        }else{
            reject ('el telefono no esta jajajaj');
        }
    }); 
}

obtenerusuarios(3)
.then(res =>{
    console.log(res)
})
.catch(error =>{
console.error(error);
});
