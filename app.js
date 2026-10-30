const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts')
const logger = require('./middlewares/logger')
const handleErrors = require('./middlewares/handleErrors')
const notFound = require('./middlewares/notFound')

//Asset Statico
app.use(express.static('public'));
// Middleware locali
app.use(logger);
// Routes
app.use('/posts', postsRouter);

// Middleware gestione 404
app.use(notFound)
// Middleware gestione errori
app.use(handleErrors)
app.get("/posts", (req, res) => {
    const search = req.query.search
    console.log(search)
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});