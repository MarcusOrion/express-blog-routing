function handleErrors (err, req, res, next) {
res.status(500)
res.json({
    status: 500,
    error: err.message
})
console.log(err.message)
}

module.exports = handleErrors;