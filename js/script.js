document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario para propósitos de demostración

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        console.log('Formulario enviado:');
        console.log('Nombres:', firstName);
        console.log('Apellidos:', lastName);
        console.log('Número de Teléfono:', phoneNumber);
        console.log('Recordar Nombre:', rememberMe);

        // Si deseas enviar el formulario de verdad después de mostrar el mensaje, descomenta la siguiente línea
        loginForm.submit();
    });
});
