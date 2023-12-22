const errorHandlers = ((err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({ title:"not found", message: err.message, stackTrace: err.stackTrace })
})

module.exports = errorHandlers;