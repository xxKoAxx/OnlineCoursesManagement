const courseModel = require('../models/course')
const { mongooseArray_toObjects, mongooseObject_toObject} = require('../../utils/mongoose')


class meController {
    //GET /me/myCourses
    showMyCourses(req, res, next) {
        Promise.all([courseModel.countWithDeleted({deleted:true}), courseModel.find()])
            .then(([count, courses]) => {
                console.log(count)
                courses = mongooseArray_toObjects(courses)
                res.render('me/myCourses', {courses: courses, deletedCount: count})
            })
            .catch((err) => {
                next(err)
                res.status(400).json({error: 'EROOOR'})
            })
            .catch(err => console.log(err))
        
    }
    
    showTrashBin(req, res, next){
        courseModel
            .findWithDeleted({deleted: true}) // will get all courses
            .then(courses => { 
                courses = mongooseArray_toObjects(courses)
                res.render('me/trashCourses', {courses: courses})
            })
            .catch((err) => {
                next(err)
                res.status(400).json({error: 'EROOOR'})
            })
    }
}

module.exports = new meController();