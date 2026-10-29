const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger')
router.use(logger);

// Index (READ)
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

// Show (READ)
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Dettagli post con id: ${id}`)
})

// Store (CREATE)
router.post('/', (req, res) => {
    res.send('Creazione nuovo post')
})

// Update (UPDATE) - Modifica integrale della risorsa
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica integrale del post con id: ${id}`)
})

// Update (UPDATE) - Modifica parziale della risorsa
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica parziale del post con id: ${id}`)
})

// Destroy (DELETE)
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Eliminazione del post con id: ${id}`)
})

module.exports = router;
