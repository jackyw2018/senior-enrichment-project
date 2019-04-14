const router = require('express').Router();
const { Student } = require('../db');

// GET /api/students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

module.exports = router;
