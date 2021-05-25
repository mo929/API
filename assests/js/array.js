function capturar() {
    function Usuarios(nombres, edad, genero, correo) {
        this.nombres = nombres;
        this.edad = edad;
        this.genero = genero;
        this.correo = correo;
    }
    var nombres_capturar = document.getElementById("nombres").value;
    var edad_capturar = document.getElementById("edad").value;
    var genero_capturar = document.getElementById("genero").value;
    var correo_capturar = document.getElementById("correo").value;
    nuevo_usuario = new Usuarios(nombres_capturar, edad_capturar, genero_capturar, correo_capturar);
    agregar();
}
var registro = [];
function agregar() {
    registro.push(nuevo_usuario);
    console.log(registro)
}

