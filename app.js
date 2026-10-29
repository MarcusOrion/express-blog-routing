const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts')
const logger = require('./middlewares/logger')
//Asset Statico
app.use(express.static('public'));
app.use('/posts', postsRouter);

// Middleware locali
app.use(logger);

app.get("/posts", (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
    console.log('This is a feedback')
})
