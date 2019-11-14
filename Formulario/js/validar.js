var banCed = false;
var banNomb = false;
var banApe = false;
var banTelf = false;
var banDir = false;
var banFecha = false;
var banCorreo = false;
var banPassword = false;

/*Validar Cedula*/
  function validarCedula() {
    banCed = false;
    var elemento = document.getElementById("cedula");
    var vect = [];
    if (elemento.value.length == 10) {
      for (var i = 0; i < elemento.value.length; i++) {
        vect[i] = parseInt(elemento.value.charAt(i));
      }
      if (vect[2] <= 6 && vect[2] >= 0) {
        var comprobar = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        var suma = 0;
        for (i = 0; i < comprobar.length; i++) {
          vect[i] *= comprobar[i];
          if (vect[i] >= 10) {
            vect[i] -= 9;
          }
          suma += vect[i];
        }
        suma += vect[i];
        suma %= 10;
        if (suma == 0) {
          banCed = true;
          document.getElementById("mensajeCedula").innerHTML = "";
          activarBtn();
          return true;
        } else {
          banCed = false;
          activarBtn();
          document.getElementById("mensajeCedula").innerHTML =
            "<br>Numero de cedula invalida";
        }
      }
    } else {
      banCed = false;
      activarBtn();
      document.getElementById("mensajeCedula").innerHTML =
        "<br>Numero de cedula invalida";
    }
    return false;
  }
  
/*Validar nombre*/
function validarNombre() {
  banNomb = false;
  var elemento = document.getElementById("nombre");
  if (elemento.value.length > 2) {
    banNomb = true;
    document.getElementById("mensajeNombre").innerHTML = "";
    activarBtn();
    return true;
  } else {
    activarBtn();
    document.getElementById("mensajeNombre").innerHTML =
      "<br>Ingrese nombre valido";
  }
  return false;
}

/*Validar Apellido*/

function validarApellido() {
  banApe = false;
  var elemento = document.getElementById("apellido");
  if (elemento.value.length > 2) {
    banApe = true;
    document.getElementById("mensajeApellido").innerHTML = "";
    activarBtn();
    return true;
  } else {
    activarBtn();
    document.getElementById("mensajeApellido").innerHTML =
      "<br>Ingrese apellido valido";
  }
  return false;
}


 /*Validar que solo se ingresen numeros*/
  function validarNumero(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (!(charCode >= 48 && charCode <= 57)) {
      alert("Ingrese solo numeros.");
      return false;
    }
    return true;
  }

  /*Validar que solo se ingrese texto*/
  function validarTexto(evt) {
    evt = evt ? evt : event;
    var charCode = evt.charCode
      ? evt.charCode
      : evt.keyCode
      ? evt.keyCode
      : evt.which
      ? evt.which
      : 0;
    if (
      charCode > 32 &&
      (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)
    ) {
      alert("Ingrese solo letras.");
      return false;
    }
    return true;
  }
  
  
  function activarBtn() {
    if (
      banCed &&
      banNomb &&
      banApe &&
      banPassword &&
      banCorreo &&
      banFecha
    ) {
      document.getElementById("btn").disabled = false;
      document.getElementById("btn").style.color = "rgb(255, 255, 255)";
      document.getElementById("btn").style.background = "#1883ba";
      document.getElementById("btn").style.border = "2px solid #0016b0";
      return false;
    } else {
      document.getElementById("btn").disabled = true;
      document.getElementById("btn").style.color = "rgb(83, 81, 81)";
      document.getElementById("btn").style.background = " rgb(170, 165, 165)";
      document.getElementById("btn").style.border = "2px solid #ffffff";
    }
  }
  
  function limpiar() {
    location.reload();
  }




  