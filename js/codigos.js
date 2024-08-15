document.addEventListener('DOMContentLoaded', () => {
    // Variables para los elementos HTML
    const morseImage = document.getElementById('morseImage');
    const infoLink = document.querySelector('.info-link');
    const customCursor = document.querySelector('.custom-cursor');
  
    // Cambiar la imagen de Código Morse cuando el mouse está sobre ella
    morseImage.addEventListener('mouseover', () => {
      morseImage.style.opacity = '0.8';
    });
  
    morseImage.addEventListener('mouseout', () => {
      morseImage.style.opacity = '1';
    });
  
    // Funcionalidad del cursor personalizado
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.pageX}px`;
      customCursor.style.top = `${e.pageY}px`;
    });
  
    // Cambio de cursor al pasar sobre enlaces
    infoLink.addEventListener('mouseover', () => {
      customCursor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      customCursor.style.border = '2px solid #fff';
    });
  
    infoLink.addEventListener('mouseout', () => {
      customCursor.style.backgroundColor = 'transparent';
      customCursor.style.border = 'none';
    });
  });
  