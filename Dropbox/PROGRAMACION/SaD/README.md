![Logo del proyecto](assets/logo.png)

# Seguimiento de Pedidos a Domicilio 📦

Este es un proyecto simple para gestionar pedidos a domicilio desde una distribuidora. Permite registrar pedidos desde un formulario web y guardarlos en un archivo JSON en el servidor.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- HTML, CSS y JavaScript (básico)
- JSON para almacenamiento local

## ⚙️ Funcionalidades actuales

- Registrar pedidos con cliente y producto
- Guardar pedidos en archivo `pedidos.json`
- Servidor Express funcionando en `http://localhost:3000`
- Envío de pedidos desde formulario en `index.html`

## 📁 Estructura del proyecto

SaD/ ├── data/ # Base de datos JSON simulada 
     ├── public/ # Archivos del frontend (HTML, JS) 
     ├── src/ # Lógica del servidor (Express) 
        ├── .gitignore ├── package.json 
     └── README.md

## 🔧 Cómo usar

1. Clona el repositorio:
git clone https://github.com/javierpl85/SaD.git

2. Instala las dependencias:
npm install

3. Ejecuta el servidor:
node src/app.js

4. Abre en el navegador:
http://localhost:3000


## 🧠 Ideas futuras

- Ver pedidos registrados desde el navegador
- Actualizar estado (en camino, entregado)
- Login para usuarios y repartidores
- Envío de notificaciones por correo o WhatsApp

---

Proyecto creado como parte del aprendizaje en ingeniería de software y redes. 🙌




