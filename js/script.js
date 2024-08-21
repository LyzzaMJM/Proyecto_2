document.addEventListener('DOMContentLoaded', function() {
    const nombreDisplay = document.getElementById('nombre');
    const savedName = localStorage.getItem('firstName');
    if (nombreDisplay && savedName) {
        nombreDisplay.textContent = savedName;
    }
});

let botonAutoridades = document.getElementById('autoridades');

if (botonAutoridades) {
    let popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
            <p>En breve recibirás ayuda 🫶</p>
            <button id="cerrar-popup">Cerrar</button>
        `;

    let overlay = document.createElement('div');
    overlay.id = 'overlay';

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    botonAutoridades.addEventListener('click', function() {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    let botonCerrarPopup = document.getElementById('cerrar-popup');
    botonCerrarPopup.addEventListener('click', function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
}

let botonConvertir = document.getElementById('boton-convertir');

if (botonConvertir) {
    botonConvertir.addEventListener('click', function() {
        let texto = document.getElementById('entrada-texto').value;

        if (texto === '') {
            alert('Por favor, llene el cuadro de texto antes de convertir.');
        } else {

            let letras = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
                'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
                'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
                'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
                'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
                '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
                '9': '----.', '0': '-----', ' ': '/'
            };

            let resultado = '';
            for (let i = 0; i < texto.length; i++) {
                let a = texto[i].toUpperCase();
                if (letras[a]) {
                    resultado += letras[a] + ' ';
                }
            }

            document.getElementById('texto-resultado').value = resultado;
        }
    });
}
