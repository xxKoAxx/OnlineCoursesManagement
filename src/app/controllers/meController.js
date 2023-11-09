const courseModel = require('../models/course')
const { mongooseArray_toObjects, mongooseObject_toObject} = require('../../utils/mongoose')

class meController {
    //GET /me/myCourses
    showMyCourses(req, res, next) {
        courseModel
            .find({}) // will get all courses
            .then(courses => { 
                courses = mongooseArray_toObjects(courses)
                res.render('me/myCourses', {courses: courses})
            })
            .catch((err) => {
                next(err)
                res.status(400).json({error: 'EROOOR'})
            })
    }
    
}

module.exports = new meController();