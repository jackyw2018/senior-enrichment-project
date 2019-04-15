const router = require('express').Router();
const { Student } = require('../db');

// GET /api/students
router.get('/', (req, res, next) => {
  Student.findAll({ order: ['createdAt'] })
    .then(students => res.json(students))
    .catch(next);
});

// POST /api/students
router.post('/', (req, res, next) => {
  const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;

  Student.create({
    firstName,
    lastName,
    email,
    imageUrl,
    gpa: Number(gpa),
    campusId: Number(campusId),
  })
    .then(student => res.json(student))
    .catch(next);
});

// DELETE /api/students/:id
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Student.destroy({ where: { id } })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

// PUT /api/students/:id
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
  Student.update(
    { firstName, lastName, email, imageUrl, gpa, campusId },
    { where: { id } }
  )
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
