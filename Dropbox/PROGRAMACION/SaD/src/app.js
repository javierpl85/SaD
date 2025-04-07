const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Servir frontend desde "public"
app.use(express.static('public'));

// Ruta de prueba
app.get('/api/ping', (req, res) => {
  res.json({ mensaje: '¡Servidor funcionando!' });
});

// Ruta para guardar pedidos
app.post('/api/pedidos', (req, res) => {
  const nuevoPedido = req.body;
  const filePath = path.join(__dirname, '../data/pedidos.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let pedidos = [];

    if (!err && data) {
      try {
        pedidos = JSON.parse(data);
      } catch {}
    }

    pedidos.push(nuevoPedido);

    fs.writeFile(filePath, JSON.stringify(pedidos, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Error al guardar' });
      res.status(201).json({ mensaje: 'Pedido guardado correctamente' });
    });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

