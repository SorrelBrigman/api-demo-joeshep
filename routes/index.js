'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./shows'));
router.use(require('./directors'));

router.get('/', (res, req)=> {
  res.json({
    "title": "The TV Faves API",
    "shows": "http://api-demo-sorrel.herokuapp.com/api/v1/shows",
    "favorites": "http://api-demo-sorrel.herokuapp.com/api/v1/shows/favorites?showId=<showId>",
    "directors": "http://api-demo-sorrel.herokuapp.com/api/v1/directors",
    "directors_by_show": "http://api-demo-sorrel.herokuapp.com/api/v1/shows/directors?showId=<showId>"
  })
})

module.exports = router;
