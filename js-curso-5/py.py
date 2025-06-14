import numpy as np
import matplotlib.pyplot as plt

Q = np.array([0, 114, 182, 227, 250, 273, 318, 341])
H = np.array([41.62, 36.62, 32.13, 28.05, 26.11, 23.56, 17.64, 13.56])

X = np.vstack([Q**2, Q, np.ones(len(Q))]).T

beta = np.linalg.inv(X.T @ X) @ X.T @ H

a, b, c = beta

print(f"Coeficientes ajustados:\na = {a:.6f}\nb = {b:.6f}\nc = {c:.6f}")

H_fit = a * Q**2 + b * Q + c

plt.figure(figsize=(10, 6))
plt.scatter(Q, H, label='Dados originais H(m)', color='red')
Q_smooth = np.linspace(0, 350, 100)
H_smooth = a * Q_smooth**2 + b * Q_smooth + c
plt.plot(Q_smooth, H_smooth, label=f"$H(m) = {c:.6f} + {b:.6f} Q + {a:.6f} Q^2$", color='blue')
plt.xlabel('Vazão Q (m³/h)')
plt.ylabel('Altura H (m)')
plt.title('Ajuste da curva característica da bomba')
plt.legend()
plt.grid(True)
plt.show()