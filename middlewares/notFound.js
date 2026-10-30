function notFound (req, res, next) {
    res.status(404).json({
        status: 'Not Found',
        error: 'EEROR: The route is not existing'
    })
}

module.exports = notFound;