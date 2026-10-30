const fs = require('fs')
function logger (req, res, next) {
    const log = `${new Date().toLocaleString()} /n [${req.method}] /n ${req.originalUrl}`
    console.log(log)
    next();
    // Salvare i log in un file dedicato
    fs.appendFile('access.log', log, err => {
        if (err) console.log("Couldn't write log:", err)
    })
}
module.exports = logger