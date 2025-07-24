// static/js/sound.js

// Préchargement des sons
const sounds = {
  type: new Audio("static/sounds/type.mp3"),
  boot: new Audio("static/sounds/boot.wav"),
  error: new Audio("static/sounds/error.mp3")
};

// Réglage du volume
sounds.type.volume = 0.3;
sounds.boot.volume = 0.6;
if (sounds.error) sounds.error.volume = 0.4;

/**
 * Joue un son donné par son nom ('type', 'boot', 'error'…)
 * @param {string} name - Nom du son à jouer
 */
function playSound(name) {
  if (sounds[name]) {
    sounds[name].currentTime = 0;
    sounds[name].play();
  }
}

export { playSound };
