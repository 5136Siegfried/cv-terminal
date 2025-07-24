// boot.js
import { playSound } from './sound.js';

export function launchBootScreen(duration = 4000) {
  // Lancer le son de boot
  playSound("boot");

  // Transition d'opacité et suppression du boot screen
  window.addEventListener("load", () => {
    const boot = document.getElementById("boot-screen");
    if (!boot) return;

    setTimeout(() => {
      boot.style.transition = "opacity 1s ease-out";
      boot.style.opacity = 0;
      setTimeout(() => boot.remove(), 1000);
    }, duration);
  });
}
