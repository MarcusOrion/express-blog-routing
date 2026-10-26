const express = require('express');
const app = express();
const port = 3000;
//Asset Statico
app.use(express.static('public'));

// REST
app.get ("/", (req, res) => {
    console.log('Ecco, ci sono riuscito!')
    res.send('Ecco, ci sono riuscito!')
})
app.listen (port, () => {
    console.log(`Questo è il port del mio server: ${port}`)
})
// Index (READ)
app.get('/posts', (req, res) => {
    res.send('Lista dei post')
})
// Show (READ)
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Dettagli post con id: ${id}`)
})
// Store (CREATE)
app.post('/posts', (req, res) => {
    res.send('Creazione nuovo post')
})
// Update (UPDATE) - Modifica integrale della risorsa
app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica integrale del post con id: ${id}`)
})
// Update (UPDATE) - Modifica parziale della risorsa
app.patch('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica parziale del post con id: ${id}`)
})
// Destroy (DELETE)
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Eliminazione della pizza con id: ${id}`)
})