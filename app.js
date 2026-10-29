const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts')
const logger = require('./middlewares/logger')
const handleErrors = require('./middlewares/handleErrors')
//Asset Statico
app.use(express.static('public'));
app.use('/posts', postsRouter);

// Middleware locali
app.use(logger);
// Middleware gestione errori
app.use(handleErrors)

app.get("/posts", (req, res) => {
    const search = req.query.search
    console.log(search)
res.send('Hello World!')
})

app.listen(port, () => {
    console.log('This is a feedback')
})
