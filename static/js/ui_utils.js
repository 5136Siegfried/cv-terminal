// ui_utils.js

/**
 * Crée un élément DOM avec du texte
 */
export function createLine(text, className = 'terminal-line') {
  const line = document.createElement('div');
  line.className = className;
  line.innerText = text;
  return line;
}

/**
 * Affiche du texte dans le terminal
 */
export function printOutput(text, terminal, inputLine) {
  const line = createLine(text);
  terminal.insertBefore(line, inputLine);
  terminal.scrollTop = terminal.scrollHeight;
}

/**
 * Simule une pause (asynchrone)
 */
export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Ajoute un effet "glitch" au terminal
 */
export function glitchEffect(element, intensity = 100, duration = 500) {
  const originalText = element.innerText;
  const chars = '!@#$%^&*()_+-=[]{};:<>?,./';

  let interval = setInterval(() => {
    let glitched = originalText
      .split('')
      .map(c => (Math.random() < 0.2 ? chars[Math.floor(Math.random() * chars.length)] : c))
      .join('');
    element.innerText = glitched;
  }, intensity);

  setTimeout(() => {
    clearInterval(interval);
    element.innerText = originalText;
  }, duration);
}

/**
 * Fait clignoter un curseur (à appeler une fois sur un span.cursor)
 */
export function startBlinkingCursor() {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;
  setInterval(() => {
    cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }, 500);
}
