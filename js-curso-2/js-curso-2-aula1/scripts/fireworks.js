// scripts/fireworks.js
import { Fireworks } from 'https://cdn.jsdelivr.net/npm/fireworks-js@2.10.8/dist/index.es.min.js';

let fireworksInstance = null;

/**
 * Inicializa a instância do Fireworks.
 */
export function initFireworks() {
  const container = document.getElementById('fireworks-container');
  fireworksInstance = new Fireworks(container, {
    hue: { min: 0, max: 360 },
    acceleration: 1.05,
    brightness: { min: 50, max: 80 },
    decay: { min: 0.015, max: 0.03 },
    mouse: { click: true, move: false, max: 1 }
  });
}

/**
 * Inicia a animação de fogos de artifício.
 */
export function startFireworks() {
  if (fireworksInstance) {
    fireworksInstance.start();
  } else {
    console.warn('Fireworks não inicializado. Chame initFireworks() primeiro.');
  }
}

/**
 * Para a animação de fogos de artifício.
 */
export function stopFireworks() {
  if (fireworksInstance) {
    fireworksInstance.stop();
  }
}
