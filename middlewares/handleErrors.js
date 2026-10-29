function handleErrors (err, req, res, next) {
res.status(500)
req.json({
    error: err.message
})
console.log(err.message)
}

module.exports = handleErrors;