// Charger les sons
const typeSound = new Audio("static/sounds/type.mp3");
typeSound.volume = 0.3;

const bootSound = new Audio("static/sounds/boot.wav");
bootSound.volume = 0.6;
bootSound.play();

// Boot screen
window.addEventListener("load", () => {
  setTimeout(() => {
    const boot = document.getElementById("boot-screen");
    boot.style.transition = "opacity 1s ease-out";
    boot.style.opacity = 0;
    setTimeout(() => boot.remove(), 1000);
  }, 4000);
});

// Terminal
document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const inputLine = document.getElementById("input-line");
  const terminalInput = document.getElementById("terminal-input");

  const commands = {
    help: () => {
      return `Commandes disponibles :
  - help     : affiche cette aide
  - about    : à propos de moi
  - projects : liste mes projets
  - cv       : mon CV résumé
  - contact  : infos de contact
  - clear    : efface l'écran`;
    },

    cv: () => {
      return `
Siegfried Sekkai – Ingénieur DevOps | SRE | Secouriste

Skills : AWS, GCP, Terraform, K8s, Docker, Ansible, Python, Go, GitHub Actions
Expérience : Scalephive, Deloitte, CSOR
Projet notable : JobTracker, Infra-SRE-Good-Practices

Tapez 'projects' pour en voir plus.`.trim();
    },

    projects: () => {
      return `
Projets GitHub :
- JobTracker       → Suivi de candidatures (Flask + Chart.js)
- Good Practices   → Guide DevOps & SRE
- TerminalCV       → Ce terminal comme portfolio
Lien : https://github.com/5136Siegfried`.trim();
    },

    contact: () => {
      return `
📧 siegfried.sekkai@gmail.com
🔗 https://linkedin.com/in/siegfried-sekkai
🐙 https://github.com/5136Siegfried`.trim();
    },

    clear: () => {
      terminal.innerHTML = '';
      terminal.appendChild(inputLine);
      return '';
    }
  };

  function appendOutput(text) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerText = text;
    terminal.insertBefore(line, inputLine);
    terminal.scrollTop = terminal.scrollHeight;
  }

  function processCommand(input) {
    const command = input.trim().toLowerCase();
    const action = commands[command];
    if (action) {
      return typeof action === 'function' ? action() : action;
    } else {
      return `Commande inconnue : ${command}`;
    }
  }

  terminalInput.addEventListener("keydown", function (e) {
    if (e.key.length === 1) {
      // On joue le son à chaque frappe visible
      typeSound.currentTime = 0;
      typeSound.play();
    }

    if (e.key === "Enter") {
      const inputValue = terminalInput.value;
      appendOutput(`> ${inputValue}`);
      const result = processCommand(inputValue);
      if (result) appendOutput(result);
      terminalInput.value = "";
    }
  });

  terminalInput.focus();
});
