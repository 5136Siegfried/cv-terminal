// terminal_core.js
export const commands = {
  help: () => `Commandes disponibles :
  - help     : affiche cette aide
  - about    : à propos de moi
  - projects : liste mes projets
  - contact  : infos de contact
  - clear    : efface l'écran
  - cv       : mon CV résumé`,

  about: () => `Siegfried Sekkai – DevOps, SRE, humanitaire & hacker éthique.`,

  cv: () => `
Siegfried Sekkai – Ingénieur DevOps | SRE | Secouriste

Skills     : AWS, GCP, Terraform, K8s, Docker, Ansible, Python, Go
Expérience : Scalephive, Deloitte, CSOR
Projets    : JobTracker, Infra-SRE-Good-Practices`.trim(),

  projects: () => `
Projets GitHub :
- JobTracker        → Suivi de candidatures (Flask + Chart.js)
- Good Practices    → Guide DevOps & SRE
- TerminalCV        → Ce terminal comme portfolio
Lien : https://github.com/5136Siegfried`.trim(),

  contact: () => `
📧 siegfried.sekkai@gmail.com
🔗 https://linkedin.com/in/siegfried-sekkai
🐙 https://github.com/5136Siegfried`.trim(),

  clear: (terminal, inputLine) => {
    terminal.innerHTML = '';
    terminal.appendChild(inputLine);
    return '';
  }
};

export function processCommand(input) {
  const command = input.trim().toLowerCase();
  const action = commands[command];

  if (action) return typeof action === 'function' ? action() : action;
  return `Commande inconnue : ${command}`;
}

export function printOutput(text, terminal, inputLine) {
  const line = document.createElement("div");
  line.className = "terminal-line";
  line.innerText = text;
  terminal.insertBefore(line, inputLine);
  terminal.scrollTop = terminal.scrollHeight;
}
