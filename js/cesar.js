function encriptar() {
    const mensaje = document.getElementById('msg').value;
    const password = document.getElementById('passEncrypt').value;
    const desplazamiento = calcularDesplazamiento(password);
    const mensajeEncriptado = cifrarCesar(mensaje, desplazamiento);
    document.getElementById('demo1').textContent = mensajeEncriptado;
  }
  
  function desencriptar() {
    const password = document.getElementById('passDecrypt').value;
    const mensajeCodificado = document.getElementById('msgCodigo').value;
    const desplazamiento = calcularDesplazamiento(password);
    const mensajeReal = cifrarCesar(mensajeCodificado, -desplazamiento);
    document.getElementById('demo2').textContent = mensajeReal;
  }
  
  function calcularDesplazamiento(password) {
    let desplazamiento = 0;
    for (let i = 0; i < password.length; i++) {
      desplazamiento += password.charCodeAt(i);
    }
    return desplazamiento % 26; // Asegura que esté entre 0 y 25
  }
  
  function cifrarCesar(texto, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      if (char.match(/[a-z]/i)) {
        const codigo = char.charCodeAt(0);
        const base = codigo >= 65 && codigo <= 90 ? 65 : 97; // Mayúsculas o minúsculas
        const nuevoChar = String.fromCharCode(((codigo - base + desplazamiento) % 26 + 26) % 26 + base);
        resultado += nuevoChar;
      } else {
        resultado += char; 
      }
    }
    return resultado;
  }
  