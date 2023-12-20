// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Define tus rutas aquí, por ejemplo:
app.get('/api/data', (req, res) => {
    res.json({ mensaje: 'Datos de ejemplo' });
});

app.get('/', (req, res) => {
    res.json({ message: 'We are working for you!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
