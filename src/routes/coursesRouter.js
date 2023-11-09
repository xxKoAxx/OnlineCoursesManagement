const express = require('express');
var router = express.Router();

const coursesController = require('../app/controllers/coursesController');

// [GET] /courses/create
router.get('/createNewCourse', coursesController.createNewCourse);

// [POST] /course/storeNewCourse
router.post('/storeNewCourse', coursesController.storeNewCourse);

// defined path name 'slug', which can be used in query params (req.params.slug)
// [GET] /courses/:slug
router.get('/:slug', coursesController.showDetail);

// [GET] /courses/:id/edit
router.get('/:id/edit', coursesController.edit);

// [PUT] /courses/:id/update
router.put('/:id', coursesController.update);


module.exports = router;
