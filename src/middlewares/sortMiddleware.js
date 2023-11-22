module.exports = function sortMiddleware(req, res, next){
    res.locals.sort = {
        sortType: 'default'
    }

    if (['asc', 'desc'].includes(req.query.sortType) && ['name', 'createdAt', 'level'].includes(req.query.column)){
        Object.assign(res.locals.sort, {
            sortType: req.query.sortType,
            column: req.query.column
        })
    }
    next()
}