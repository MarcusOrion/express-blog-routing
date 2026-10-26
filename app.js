const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts')
//Asset Statico
app.use(express.static('public'));

app.use('/posts', postsRouter);