const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/auth'); // Importa el middleware de autenticación

// Obtener todos los cursos, requiere autentificación
router.get('/', auth, courseController.getCourses);

// Crear un nuevo curso
router.post('/', courseController.createCourse);

// Actualizar un curso
router.put('/:id', courseController.updateCourse);

// Eliminar un curso
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
