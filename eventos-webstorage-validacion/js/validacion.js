window.addEventListener('load', function(){

//Validar el form de búsqueda.
let formulario = document.querySelector('form');
let campoBuscar = document.querySelector('[name=busqueda]');
let mensaje = document.querySelector('.alerta');

formulario.addEventListener('submit', function(event){
    //Paso 1: evitar que el form se envíe
    event.preventDefault();
    if(campoBuscar.value == ""){    //Chequeamos que no esté vacío
        mensaje.innerText = 'Busqueda vacía';
    } else if (campoBuscar.value.length < 3){  //Chequeamos que tenga al menos 3 caracteres
        mensaje.innerText = 'Ingrese al menos 3 caracteres';
    } else { //Enviamos el formulario
        this.submit();
    }
    
})

//Limpiamos el contenido del campo error en cuanto cambia el contenido del campo buscar.
campoBuscar.addEventListener('input', function(){
    mensaje.innerText = "";
})

})
