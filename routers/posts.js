const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger')
router.use(logger);
const connection = require('../data/db')

// Index (READ)
router.get('/', (req, res, next) => {

    try {
        const error = false;
    if (error) {
        throw new Error('Error quering on Database. Please, try later!')
    }
    // res.send('Lista dei post')
    } catch (err) {
        next(err)
    }

    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) return next(err);
        res.json(results[0])
    })
})

// Show (READ)
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM posts WHERE id=?'
    connection.query(sql, [id], (err, results) => {
        if (err) next(err);
        if (results.affectedRows === 0) {
            res.status(404).json({
                error: 'Post not found'
            })
            return;
        }
        res.json(results[0]);
    })
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
router.delete('/:id', (req, res, next) => {
    const {id} = req.params;

    const sql = `SELECT FROM posts WHERE id=?`;
    connection.query(sql, [id], (err, results) => {
        if (err) return next(err);
        // Gestione errore 404
        if (results.affectedRows === 0) {
            res.status(404).json({
                error: 'Post not found'
            })
            return;
        }
    })

    res.sendStatus(204)
})

module.exports = router;
