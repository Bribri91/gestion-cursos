const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

/* obtener página de inicio y mostrar cursos*/
router.get('/', courseController.showCoursesOnIndex);

module.exports = router;
