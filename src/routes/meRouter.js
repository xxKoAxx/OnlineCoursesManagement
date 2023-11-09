const express = require('express');
var router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/myCourses', meController.showMyCourses);
// router.get('/', meController.index);

module.exports = router;
