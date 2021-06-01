(function () {
  //VARIABLES
  var button = document.getElementById("button");
  var email= document.getElementById("email");
  var password= document.getElementById("password"); 

  //FUNCIONES
  var iniciarSesionConClick= function(){
    if(email.value!="" && password.value!=""){
      alert("Inición de sesión exitosa");
      }else if(email.value=="" && password.value!=""){
        email.style.cssText="border: 2px solid red;";
      }else if(email.value!="" && password.value==""){
        password.style.cssText="border: 2px solid red;";
      }else if(email.value=="" && password.value==""){
        email.style.cssText="border: 2px solid red;";
        password.style.cssText="border: 2px solid red;";
    }
  }
  var emailEnter= function(){
    var tecla=event.keyCode;

    /*if(tecla==13 && email.value!="" && password.value!=""){
    alert("Inición de sesión exitosa");
    }else if(tecla==13 && email.value=="" && password.value!=""){
      email.style.cssText="border: 2px solid red;";
    }else if(tecla==13 && email.value!="" && password.value==""){
      password.style.cssText="border: 2px solid red;";
    }else if(tecla==13 && email.value=="" && password.value==""){
      email.style.cssText="border: 2px solid red;";
      password.style.cssText="border: 2px solid red;";
    }*/
    if(tecla==13 && password.value==""){
      
    }
  }
  var borrarBorder= function(){
    email.style.cssText="border: none;";
    password.style.cssText="border: none;";
  }


  //EVENTOS  
  /*iniciar sesion*/
  button.addEventListener("click", iniciarSesionConClick);
  email.addEventListener("keypress", emailEnter);
  /*borrar border de inputs*/
  email.addEventListener("click",borrarBorder);
  password.addEventListener("click",borrarBorder);


}());