const input1 = document.querySelector('#nombre');
const input2 =document.querySelector('#nacimiento');
const boton =document.querySelector('#enviar');
const result =document.querySelector('#resultado');
const form=document.querySelector('#formulario');

boton.addEventListener('click',enviarFormulario)

function enviarFormulario(){
    result.innerHTML="Hola   " + input1.value + " tu fecha de nacimiento es: "+ input2.value;

}