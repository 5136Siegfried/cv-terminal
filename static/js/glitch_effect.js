// glitch_effects.js

/**
 * Ajoute un effet de glitch progressif sur une ligne du terminal.
 * Exemple : texte apparaissant lettre par lettre avec un effet visuel "buggy"
 */
export async function glitchPrint(text, terminal, inputLine, delay = 50) {
  const line = document.createElement("div");
  line.className = "terminal-line glitching";
  terminal.insertBefore(line, inputLine);

  for (let i = 0; i < text.length; i++) {
    line.textContent += text[i];
    await new Promise(r => setTimeout(r, delay));
  }
  line.classList.remove("glitching");
  terminal.scrollTop = terminal.scrollHeight;
}

/**
 * Simule un texte glitché (type Matrix ou TV défaillante)
 */
export function generateGlitchedText(original, intensity = 0.3) {
  const chars = "@#$%&*!?<>+-";
  return original.split('').map(c => {
    if (Math.random() < intensity && c !== ' ') {
      return chars[Math.floor(Math.random() * chars.length)];
    }
    return c;
  }).join('');
}
