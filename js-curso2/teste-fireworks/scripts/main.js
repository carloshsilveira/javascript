// scripts/main.js
import { initFireworks, startFireworks, stopFireworks } from './fireworks.js';

// Inicializa a instância do Fireworks
initFireworks();

// Exemplo de condição para iniciar os fogos
const shouldStartFireworks = true; // Altere conforme sua lógica

if (shouldStartFireworks) {
  startFireworks();
} else {
  stopFireworks();
}
