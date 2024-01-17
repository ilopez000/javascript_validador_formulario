document.getElementById('miFormulario').onsubmit = function(evento) {
    evento.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    var mensajeError = '';

    if (!nombre) {
        mensajeError += 'Ingresa un nombre. ';
    }
    if (!email.includes('@')) {
        mensajeError += 'Ingresa un email válido. ';
    }
    if (contraseña.length < 8) {
        mensajeError += 'La contraseña debe tener al menos 8 caracteres.';
    }

    if (mensajeError) {
        document.getElementById('mensajeError').textContent = mensajeError;
    } else {
        // Aquí puedes procesar el formulario, por ejemplo, enviarlo a un servidor
        alert('Formulario enviado con éxito');
    }
};

<script src="ruta/del/archivo.js"></script>
