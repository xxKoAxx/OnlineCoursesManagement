const courseModel = require('../models/course')
const { mongooseArray_toObjects, mongooseObject_toObject} = require('../../utils/mongoose')

class siteController {
    //GET /
    index(req, res, next) {
        courseModel
            .find({}) // will get all courses
            .then(courses => { 
                courses = mongooseArray_toObjects(courses)
                res.render('home', {courses: courses})
            })
            .catch((err) => {
                next(err)
                res.status(400).json({error: 'EROOOR'})
            })
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
