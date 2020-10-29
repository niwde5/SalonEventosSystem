
function comenzar(){
    var registrarse = document.getElementById("register");
    var iniciarsesion = document.getElementById("iniciar");
    iniciarsesion.addEventListener( "click", validauser, false );
    registrarse.addEventListener( "click", newUser, false );    
}

function validauser(){

  
        var correo = document.getElementById("init-correo").value;
        var password = document.getElementById("init-pass").value;

        if (sessionStorage.getItem(correo)) {
            let u = JSON.parse(sessionStorage.getItem(correo)); //obtenemos el usuario
            if (password == u.pass) {
                document.getElementById("closes").click();  
                alert("Bienvenido al sistema de reservaciones");              
            } else {
                alert("usuario y/o contraseña incorrecta");
            }
        } else {
            alert("usuario y/o contraseña incorrecta");
        }
        correo = document.getElementById("init-correo").value = "";
        password = document.getElementById("init-pass").value="";
    
}

function newUser(){        

    var correo = document.getElementById("email-registro").value;
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("tel-number").value;
    var pwd = document.getElementById("pwd-1").value;
    var pwd2 = document.getElementById("pwd-2").value;    

    var correcto = 1;

    //comenzamos a validar
    if( nombre == "" ){
        document.getElementById("a1").style.display="block";
        setTimeout(function() {
        $("#a1").fadeOut(1500);
        },3000);
        correcto = 0;
    }
    var regular = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    if( correo == "" ){
        document.getElementById("a2").innerHTML="Campo requerido";
        document.getElementById("a2").style.display="block";
        setTimeout(function() {
        $("#a2").fadeOut(1500);
        },3000);
        correcto = 0;
    }else{
        if( !regular.test(correo) ){
            document.getElementById("a2").innerHTML="Correo no válido";
            document.getElementById("a2").style.display="block";            
            setTimeout(function() {
            $("#a2").fadeOut(1500);
            },3000);
            correcto = 0;
        }
    }

    var numeros = /[1-9]{2}\d{8}/;
    if( telefono == "" ){
        document.getElementById("a3").innerHTML="Campo requerido";
        document.getElementById("a3").style.display="block";
        setTimeout(function() {
        $("#a3").fadeOut(1500);
        },3000);
        correcto = 0;
    }else{
        if( !numeros.test(telefono) ){
            document.getElementById("a3").innerHTML="Ingrese los 10 números";
            document.getElementById("a3").style.display="block";
            setTimeout(function() {
            $("#a3").fadeOut(1500);
            },3000);
            correcto = 0;
        }
    }
    if( pwd == "" ){
        document.getElementById("a4").style.display="block";
        setTimeout(function() {
        $("#a4").fadeOut(1500);
        },3000);
        correcto = 0;
    }
    if( pwd2 == "" ){
        document.getElementById("a5").style.display="block";
        setTimeout(function() {
        $("#a5").fadeOut(1500);
        },3000);
        correcto = 0;
    }

    if( pwd != pwd2 ){
        document.getElementById("a5").innerHTML="Las contraseñas no coinciden";
        document.getElementById("a5").style.display="block";
        setTimeout(function() {
        $("#a5").fadeOut(1500);
        },3000);
        correcto = 0;
    }
    //fin validaciones básicas
    //$( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
    
    if( correcto == 1 ){
        let usuario = {
            id: correo,
            name: nombre,
            tel: telefono,
            pass: pwd
        };
        
        sessionStorage.setItem(correo, JSON.stringify(usuario));
        console.log( sessionStorage.getItem(correo) );    
    
        document.getElementById("reg-exitoso").style.display="block";
        setTimeout(function() {
            $("#reg-exitoso").fadeOut(1500);
        },3000);
        
        document.getElementById("closer").click();        

        correo = document.getElementById("email-registro").value = "";
        nombre = document.getElementById("nombre").value = "";
        telefono = document.getElementById("tel-number").value = "";
        pwd = document.getElementById("pwd-1").value = "";
        pwd2 = document.getElementById("pwd-2").value = "";
    }    
}


window.addEventListener("load", comenzar, false);