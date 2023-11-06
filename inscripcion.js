function validarTelefono(telefono) {
    const regex = /^[0-9]{10}$/;
    return regex.test(telefono);
  }
  
  function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;
    const categoria = document.getElementById('categoria').value;
    const kilometros = document.getElementById('kilometros').value;
    const tipoSangre = document.getElementById('tipoSangre').value;
    const obraSocial = document.getElementById('obraSocial').value;
    const telefono = document.getElementById('telefono').value;
    const telefonoEmergencia = document.getElementById('telefonoEmergencia').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || edad.trim() === '' || sexo.trim() === '' || categoria.trim() === '' || kilometros.trim() === '' || tipoSangre.trim() === '' || obraSocial.trim() === '' || telefono.trim() === '' || telefonoEmergencia.trim() === '') {
      alert('Por favor, complete todos los campos del formulario.');
      return false;
    }
  
    if (!validarTelefono(telefono) || !validarTelefono(telefonoEmergencia)) {
      alert('Por favor, ingrese un número de teléfono válido (10 dígitos).');
      return false;
    }
  
    return true;
  }
  
  function enviarDatos() {
    if (validarFormulario()) {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const edad = document.getElementById('edad').value;
      const sexo = document.getElementById('sexo').value;
      const categoria = document.getElementById('categoria').value;
      const kilometros = document.getElementById('kilometros').value;
      const tipoSangre = document.getElementById('tipoSangre').value;
      const obraSocial = document.getElementById('obraSocial').value;
      const telefono = document.getElementById('telefono').value;
      const telefonoEmergencia = document.getElementById('telefonoEmergencia').value;
  
      const datosInscripcion = `
        <span style="color: blue;">Nombre:</span> ${nombre} ${apellido}<br>
        <span style="color: blue;">Edad:</span> ${edad}<br>
        <span style="color: blue;">Sexo:</span> ${sexo}<br>
        <span style="color: blue;">Categoría:</span> ${categoria}<br>
        <span style="color: blue;">Kilómetros:</span> ${kilometros}<br>
        <span style="color: blue;">Tipo de Sangre:</span> ${tipoSangre}<br>
        <span style="color: blue;">Obra Social:</span> ${obraSocial}<br>
        <span style="color: blue;">Teléfono:</span> ${telefono}<br>
        <span style="color: blue;">Teléfono de Emergencia:</span> ${telefonoEmergencia}
      `;
  
      document.getElementById('formulario').style.display = 'none';
      document.getElementById('confirmacion').style.display = 'block';
      document.getElementById('datosInscripcion').innerHTML = datosInscripcion;
    }
  }
  
  function enviarEmail() {
    const datosInscripcion = document.getElementById('datosInscripcion').innerHTML;
  
    enviarDatosPorEmail(datosInscripcion)
      .then(() => {
        alert('Datos enviados por email correctamente.');
      })
      .catch((error) => {
        console.error(error);
        alert('Error al enviar los datos por email.');
      });
  }
  
  function enviarDatosPorEmail(datos) {
    return new Promise((resolve, reject) => {
      // Aquí debes agregar tu código para enviar los datos por email
      // Puedes utilizar una librería como Nodemailer o una API de envío de email
    
      // Ejemplo de envío de datos por email utilizando el servicio EmailJS
      emailjs.send('yanetinsfran@hotmail.com', 'yanetinsfran@hotmail.com', { 
        message: datos 
      }, 'yanetinsfran@hotmail.com')
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  