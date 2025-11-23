
# 💳 Alke Wallet
Aplicación Front-End que simula una billetera digital (wallet) permitiendo gestionar saldo, realizar depósitos, retiros, transferencias y visualizar un historial completo de transacciones.  
Desarrollado como evaluación integradora del módulo **Fundamentos del Desarrollo Front-end**.

---

## 🚀 Tecnologías utilizadas
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**
- **jQuery**
- **LocalStorage** para persistencia de datos
- Arquitectura Front-End modular en carpetas

---

## 📁 Estructura del proyecto

/assets
/css
estilo.css
/js
app.js
login.js
register.js
menu.js
deposit.js
withdraw.js
transfer.js
transactions.js

login.html
register.html
menu.html
deposit.html
withdraw.html
sendmoney.html
transactions.html

yaml
Copiar código

---

## 🔐 Usuario de prueba (login)
La aplicación incluye un usuario por defecto:

Usuario: admin
Contraseña: adm123

yaml
Copiar código

Además, se pueden crear nuevos usuarios desde **register.html** y quedan almacenados en LocalStorage.

---

## 🧠 Lógica general de la aplicación

La aplicación funciona totalmente en el navegador sin backend, utilizando **LocalStorage** para almacenar:

- Usuario autenticado  
- Lista de usuarios registrados  
- Saldo actual  
- Historial completo de transacciones  

Toda la lógica central se encuentra en `assets/js/app.js`.

---

## 🧩 Explicación del código y su sintaxis

### 1. Manejo de sesión (`app.js`)
```javascript
localStorage.setItem("currentUser", username);
localStorage.getItem("currentUser");
localStorage.removeItem("currentUser");
Funciones principales:

handleSuccessfulLogin() → guarda usuario y redirige al menú.

getCurrentUser() → obtiene usuario activo.

protectRoute() → impide acceder a páginas sin login.

logoutUser() → cierra sesión.

2. Manejo del saldo
Se guarda bajo la clave "userBalance".

Funciones:

getSaldo() → devuelve el saldo; si no existe crea uno inicial (150.000 CLP).

setSaldo() → actualiza el saldo.

3. Manejo de transacciones
Se guarda en la clave "transactions".

Cada transacción se guarda como objeto:

javascript
Copiar código
{
  type: "Depósito" | "Retiro" | "Transferencia",
  amount: 50000,
  recipient: "Nombre destinatario",
  date: "12-03-2025 14:30",
  status: "Completado"
}
4. Flujo de las pantallas
➤ Login (login.js)
Valida credenciales.

Soporta usuarios registrados o usuario por defecto.

Muestra error si no coinciden.

➤ Registro (register.js)
Permite crear usuarios nuevos.

Valida contraseñas.

Evita duplicados.

➤ Menú principal (menu.js)
Muestra nombre del usuario.

Muestra saldo actualizado.

Enlaces hacia depósito, retiro, transferencia e historial.

➤ Depósito (deposit.js)
Suma dinero al saldo.

Guarda transacción tipo "Depósito".

➤ Retiro (withdraw.js)
Resta dinero del saldo.

Valida fondos suficientes.

Guarda transacción "Retiro".

➤ Transferencia (transfer.js)
Resta dinero del saldo.

Valida destinatario y monto.

Guarda transacción "Transferencia".

➤ Historial (transactions.js)
Renderiza todas las transacciones en una lista ordenada (de más reciente a más antigua).

Usa clases de color:

Verde → Depósitos

Amarillo → Retiros

Azul → Transferencias

📦 Cómo ejecutar el proyecto
✔ Opción 1: Usar extensión Live Server en VS Code
Instala Live Server.

Clic derecho → Open with Live Server sobre login.html.

¡Listo! Probarás la app con rutas correctas.

✔ Opción 2: Abrir manualmente
Abre login.html haciendo doble clic.

⚠ IMPORTANTE:
El "Open with Live Server" debe hacerse desde login.html, porque esa es la entrada principal del proyecto.

📝 Recomendaciones de uso
Borrar localStorage si deseas reiniciar datos

javascript
Copiar código
localStorage.clear()
Mantener nombres de archivos y rutas tal como están en el README.

No cambiar IDs de elementos HTML, ya que los JS dependen de ellos.




