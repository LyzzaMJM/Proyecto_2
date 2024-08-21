document.addEventListener('DOMContentLoaded', () => {
    const morseMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
        'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.',
        ' ': '/',
    };

    const textMap = {};
    for (const [key, value] of Object.entries(morseMap)) {
        textMap[value] = key;
    }

    const inputTextArea = document.getElementById('entrada-texto');
    const outputTextArea = document.getElementById('texto-resultado');
    const convertButton = document.getElementById('boton-convertir');

    function textToMorse(text) {
        return text.toUpperCase().split('').map(char => morseMap[char] || '').join(' ');
    }

    function morseToText(morse) {
        return morse.split(' ').map(code => textMap[code] || '').join('');
    }

    convertButton.addEventListener('click', () => {
        const inputText = inputTextArea.value.trim();

        if (inputText.includes('.') || inputText.includes('-')) {
            outputTextArea.value = morseToText(inputText);
        } else {
            outputTextArea.value = textToMorse(inputText);
        }
    });
});
