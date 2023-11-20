const express = require('express');
var router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/myCourses', meController.showMyCourses);
// router.get('/', meController.index);

router.get('/trash/courses', meController.showTrashBin);

module.exports = router;
