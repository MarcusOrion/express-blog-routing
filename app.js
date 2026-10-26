const express = require('express');
const app = express();
const port = 3000;
//Asset Statico
app.use(express.static('public'));

app.get ("/", (req, res) => {
    console.log('Ecco, ci sono riuscito!')
    res.send('Ecco, ci sono riuscito!')
})
app.listen (port, () => {
    console.log(`Questo è il port del mio server: ${port}`)
})