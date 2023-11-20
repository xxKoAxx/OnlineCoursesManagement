const express = require('express');
var router = express.Router();

const coursesController = require('../app/controllers/coursesController');

// [GET] /courses/createNewCourse
router.get('/createNewCourse', coursesController.createNewCourse);

// [POST] /course/storeNewCourse
router.post('/storeNewCourse', coursesController.storeNewCourse);

// defined path name 'slug', which can be used in query params (req.params.slug)
// [GET] /courses/:slug
router.get('/:slug', coursesController.showDetail);

// [GET] /courses/:id/edit
router.get('/:id/edit', coursesController.edit);


// [DELETE] /courses/delete-selected-courses
router.delete('/delete-selected-courses', coursesController.deleteSelectedCourses)

// [DELETE] /courses/:id/force
router.delete('/:id/force', coursesController.forceDestroy)

// [DELETE] /courses/:id
router.delete('/:id', coursesController.destroy)


// [PUT] /courses/:id/update
router.put('/:id', coursesController.update);

// [PATCH] /courses/:id/restore
router.patch('/:id/restore', coursesController.restore);


module.exports = router;
