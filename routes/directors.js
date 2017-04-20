const { Router } = require('express');
const router = Router();

const { getAllDirectors, getShowsByDirector, getSingleDirector } = require('../controllers/directorCtrl.js');

router.get('/directors', getAllDirectors);
router.get('/directors/shows', getShowsByDirector);
router.get('/directors/:id', getSingleDirector)

module.exports = router;
