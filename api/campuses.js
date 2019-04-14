const router = require('express').Router();
const { Campus } = require('../db');

// GET /api/campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// POST /api/campuses
router.post('/', (req, res, next) => {
  const { name, imageUrl, address, description } = req.body;
  Campus.create({ name, imageUrl, address, description })
    .then(campus => res.json(campus))
    .catch(next);
});

// DESTROY /api/campuses
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Campus.destroy({ where: { id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
