// main.js
import { processCommand, printOutput, commands } from './terminal_core.js';
import { playSound } from './sound.js';
import { glitchPrint } from './glitch_effects.js';
import { bootSequence } from './boot.js';

bootSequence();
playSound("boot");

const terminal = document.getElementById("terminal");
const inputLine = document.getElementById("input-line");
const terminalInput = document.getElementById("terminal-input");

window.addEventListener("load", () => {
  setTimeout(() => {
    const boot = document.getElementById("boot-screen");
    boot.style.transition = "opacity 1s ease-out";
    boot.style.opacity = 0;
    setTimeout(() => boot.remove(), 1000);
  }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
  terminalInput.focus();

  terminalInput.addEventListener("keydown", function (e) {
    if (e.key.length === 1) playSound("type");

    if (e.key === "Enter") {
      const input = terminalInput.value.trim();
      if (input === "") return;

      printOutput(`> ${input}`, terminal, inputLine);
      const output = processCommand(input);
      if (output){
          if (output.startsWith("Commande inconnue")) {
          glitchPrint(output, terminal, inputLine); // effet visuel spécial
          } else {
          printOutput(output, terminal, inputLine);
  }
}

      terminalInput.value = "";
    }
  });
});
