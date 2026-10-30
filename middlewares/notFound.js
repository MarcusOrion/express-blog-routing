function notFound (req, res, next) {
    res.status(404)
    req.json({
        status: 'Not Found',
        error: 'EEROR: The route is not existing'
    })
    console.log(err.message)
}

module.exports = notFound;