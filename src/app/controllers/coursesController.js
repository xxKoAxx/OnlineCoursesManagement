const courseModel = require('../models/course')
const { mongooseArray_toObjects, mongooseObject_toObject} = require('../../utils/mongoose')

class coursesController {
    // [GET] /courses/:slug
    showDetail(req, res, next) {
        courseModel
            .findOne({slug: req.params.slug})
            .then(course => { 
                course = mongooseObject_toObject(course)
                res.render('courses/showDetail', {course})
            })
            .catch((err) => {
                next(err)
                res.status(400).json({error: 'EROOOR'})
            })
    }
    
    // [GET] /courses/createNewCourse
    createNewCourse(req, res, next) {
        res.render('courses/createNewCourse')
    }

    // [POST] /courses/storeNewCourse
    storeNewCourse(req, res, next) {
        let newCourse = new courseModel(req.body)
        newCourse.save()
            .then(() => res.redirect('/'))
            .catch(err => res.send('erooor!'))
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        courseModel
        .findOne({_id: req.params.id})
        .then(course => { 
            course = mongooseObject_toObject(course)
            res.render('courses/editCourse', {course})
        })
        .catch((err) => {
            next(err)
            res.status(400).json({error: 'EROOOR'})
        })
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        courseModel
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(course => {
                course = mongooseObject_toObject(course)
                res.render('courses/showDetail', {course})
            })
            .catch((err) => {
                next(err)
                res.status(400).json({error: 'EROOOR'})
            })
    }
}

module.exports = new coursesController();
