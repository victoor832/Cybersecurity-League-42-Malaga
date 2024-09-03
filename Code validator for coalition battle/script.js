/* APARECE FORM */

document.getElementById('boton').addEventListener('click', function() {
    document.querySelector('.container-first').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
  });

  /* GUIONES FORM */

  function agregarGuiones(elemento) {
    let valor = elemento.value; // Obtener el valor actual del campo de entrada
    valor = valor.replace(/-/g, ''); // Eliminar todos los guiones existentes

    // Dividir el valor en grupos de hasta 3 caracteres y unirlos con guiones
    let formato = valor.match(/.{1,3}/g).join('-');

    // Asignar el nuevo valor formateado al campo de entrada
    elemento.value = formato;
}

  /* BORRAR FORMULARIO */
    let formularioEnviado = false;

    function manejarEnvio(evento) {
      evento.preventDefault();
  
      formularioEnviado = true;
  
      console.log("Formulario enviado");
    }
  
    function limpiarFormulario() {
      if (!formularioEnviado) {
        document.getElementById("form").reset();
      }
    }
      setTimeout(limpiarFormulario, 20000);
  
/*   document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const codigoIngresado = document.getElementById('codigo').value.toUpperCase().trim();

    // Códigos válidos
    const codigosValidos = [
        "1FB-H7V-P5D-C3J-42M",
        "8VF-H1X-W3D-E3G-21N"
    ];

    let redireccionar = false;

    // Verifica si el código ingresado está entre los códigos válidos
    for (let codigoValido of codigosValidos) {
        if (codigoIngresado === codigoValido) {
            redireccionar = true;
            break;
        }
    }

    if (redireccionar) {
        // Redirecciona según el código ingresado
        if (codigoIngresado === "1FB-H7V-P5D-C3J-42M") {
            window.location.href = "mario/index2.html";
        } else if (codigoIngresado === "8VF-H1X-W3D-E3G-21N") {
            window.location.href = "sonic/index3.html";
        }
    } else {
        // Muestra alerta de error
        document.getElementById('alertaError').style.display = 'block';
    }
}); */


/* VALIDACION FORM */

// Event listener para el formulario
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const codigoIngresado = document.getElementById('codigo').value.toUpperCase().trim();

  // Códigos válidos
  const codigosValidos = [
    "1FB-H7V-P5D-C3J-42M",
    "8VF-H1X-W3D-E3G-21N"
  ];

  let redireccionar = false;

  // Verifica si el código ingresado está entre los códigos válidos
  for (let codigoValido of codigosValidos) {
    if (codigoIngresado === codigoValido) {
      redireccionar = true;
      break;
    }
  }

  if (redireccionar) {
    // Redirecciona según el código ingresado
    if (codigoIngresado === "1FB-H7V-P5D-C3J-42M") {
      window.location.href = "mario/index2.html";
    } else if (codigoIngresado === "8VF-H1X-W3D-E3G-21N") {
      window.location.href = "sonic/index3.html";
    }
  } else {
    // Usa una alerta nativa del navegador
    alert("Tu código es erróneo. Pasa el turno a la siguiente coalicion.");
  }
});


