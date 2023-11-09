const siteRouter = require('./siteRouter')
const courseRouter = require('./coursesRouter')
const meRouter = require('./meRouter')
// import { router as meRouter }  from '/meRouter.js';

function route(app) {
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    
    app.use('/', siteRouter)

}

module.exports = route;
