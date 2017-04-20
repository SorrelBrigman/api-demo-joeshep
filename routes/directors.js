const { Router } = require('express');
const router = Router();

const { getAllDirectors } = require('../controllers/directorCtrl.js');

router.get('/directors', getAllDirectors);

module.exports = router;
