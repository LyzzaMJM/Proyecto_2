document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const firstNameInput = document.getElementById('firstName');

    if (localStorage.getItem('rememberMe') === 'true') {
        firstNameInput.value = localStorage.getItem('firstName') || '';
        rememberMeCheckbox.checked = true;
    }

    function handleFormSubmit(event) {
        event.preventDefault(); 

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('firstName', firstNameInput.value);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('firstName');
        }

        window.location.href = loginForm.action; 
    }

});
