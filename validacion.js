const nombre =document.getElementById('nombre');
const email =document.getElementById('email');
const telefono =document.getElementById('telefono');
const asunto =document.getElementById('asunto');

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let enviar = false
    let registroEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if(!registroEmail.test(email.value)){
        enviar = true;
    }
    if(telefono.value.lenght < 10 || telefono.value.lenght > 10){
        enviar = true;
    }
})