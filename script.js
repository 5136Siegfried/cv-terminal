document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const inputLine = document.getElementById("input-line");
  const input = document.getElementById("terminal-input");

  const commands = {
    help: () => {
      return `
Commandes disponibles :
- help       → Affiche cette aide
- cv         → Affiche le CV de Siegfried Sekkai
- projects   → Liste des projets GitHub
- contact    → Infos de contact
- clear      → Efface l'écran
      `.trim();
    },

    cv: () => {
      return `
Siegfried Sekkai – Ingénieur DevOps | SRE | Secouriste

Skills : AWS, GCP, Terraform, K8s, Docker, Ansible, Python, Go, GitHub Actions
Expérience : Scalephive, Deloitte, CSOR
Projet notable : JobTracker, Infra-SRE-Good-Practices

Tapez 'projects' pour en voir plus.
      `.trim();
    },

    projects: () => {
      return `
Projets GitHub :
- JobTracker       → Suivi de candidatures (Flask + Chart.js)
- Good Practices   → Guide DevOps & SRE
- TerminalCV       → Ce terminal comme portfolio
Lien : https://github.com/5136Siegfried
      `.trim();
    },

    contact: () => {
      return `
📧 siegfried.sekkai@gmail.com
🔗 https://linkedin.com/in/siegfried-sekkai
🐙 https://github.com/5136Siegfried
      `.trim();
    },

    clear: () => {
      terminal.innerHTML = '';
      terminal.appendChild(inputLine);
      return '';
    }
  };

  function printOutput(text) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerText = text;
    terminal.insertBefore(line, inputLine);
    terminal.scrollTop = terminal.scrollHeight;
  }

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = input.value.trim();
      if (command === "") return;

      printOutput(`> ${command}`);
      input.value = "";

      const action = commands[command.toLowerCase()];
      if (action) {
        const output = action();
        if (output) printOutput(output);
      } else {
        printOutput("Commande inconnue. Tapez 'help' pour la liste.");
      }
    }
  });

  input.focus();
});
