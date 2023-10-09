var a = 0;
var b = 1;
var c = "Diego";

var resultado = a + b;

let d = 5;

function sumar(a,b,d) {
    var resultado =  a + b + d;
    console.log(resultado);
}

function displaySection(sectionId){
    console.log()
    document.querySelectorAll('.section').forEach(s=> s.style.display = 'none')
    document.getElementById(sectionId).style.display = 'block'

}