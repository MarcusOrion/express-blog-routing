const express = require('express');
const router = express.Router();

// REST
router.get ("/", (req, res) => {
    console.log('Ecco, ci sono riuscito!')
    res.send('Ecco, ci sono riuscito!')
})
router.listen (port, () => {
    console.log(`Questo è il port del mio server: ${port}`)
})
// Index (READ)
router.get('/posts', (req, res) => {
    res.send('Lista dei post')
})
// Show (READ)
router.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Dettagli post con id: ${id}`)
})
// Store (CREATE)
router.post('/posts', (req, res) => {
    res.send('Creazione nuovo post')
})
// Update (UPDATE) - Modifica integrale della risorsa
router.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica integrale del post con id: ${id}`)
})
// Update (UPDATE) - Modifica parziale della risorsa
router.patch('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica parziale del post con id: ${id}`)
})
// Destroy (DELETE)
router.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Eliminazione della pizza con id: ${id}`)
})
module.exports = router;