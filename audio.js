// Seleccionamos el botón "Abrir" y el audio
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const song = document.getElementById('song');

// Función para reproducir la canción
openButton.addEventListener('click', () => {
  song.play(); // Reproducir la canción
});

// Función para detener la canción
closeButton.addEventListener('click', () => {
  song.pause(); // Pausar la canción
  song.currentTime = 0; // Reiniciar el tiempo
});