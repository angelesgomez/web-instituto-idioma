const regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
const regexNumero=/[0-9]{4,5}-[0-9]{4}$/;
const MAX_CARACTER=1000;
 
$(document).ready(function(){

$("#tel").keyup(function(e){
    validar(e);
});
 
$("#nombre, #apellido").keyup(function(e){
    validar(e);
});

$("#consulta").keyup(function(e){
    validar(e);
  
});

$("#form").submit(function(e){
    validar(e);
});
});

function validar(e){
    let error=false;
     $("#mensajeNombre,#mensajeApellido,#mensajeTel,#mensajeEmail,#mensajeTex").empty(); 
      $("#form input, #form textarea").removeClass();
  
    if($("#nombre").val()==""){
        error=true;
        $("#mensajeNombre").append("<p>Ingrese su nombre</p>")
  
    }
    if($("#apellido").val()==""){
     error=true;
     $("#mensajeApellido").append("<p>Ingrese su apellido</p>")
    }
 
    if(!$("#email").val().match(regexEmail)){
     error =true;
     $("#mensajeEmail").append("<p>Ingrese un email válido</p>");
    }
  
    if(!$("#tel").val().match(regexNumero)){
     error =true;
     $("#mensajeTel").append("<p>Ingrese un teléfono válido.Ej.:4444-0000</p>");
    }
 
    var cantidadCaracteres = $("#consulta").val().length;
    if(cantidadCaracteres <= MAX_CARACTER){
     $("#mensajeTex").removeClass("error");
     $("#mensajeTex").append("<p>"+cantidadCaracteres+"/1000</p>"); 
 
    }else{
     error= true;
     $("#mensajeTex").addClass("error"); 
     $("#mensajeTex").append("<p>La cantidad máxima de caracteres es 1000</p>")
    }
 
    if(error){
     e.preventDefault();
    }
 
 }
