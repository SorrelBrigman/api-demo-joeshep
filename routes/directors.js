const { Router } = require('express');
const router = Router();

const { getAllDirectors, getShowsByDirector } = require('../controllers/directorCtrl.js');

router.get('/directors', getAllDirectors);
router.get('/directors/:id', getShowsByDirector);

module.exports = router;
