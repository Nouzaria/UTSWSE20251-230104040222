 // src/routes/courses.routes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courses.controller');

// Definisikan rute untuk CRUD
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;