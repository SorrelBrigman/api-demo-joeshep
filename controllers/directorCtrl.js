'use strict';

const { bookshelf } = require('../db/database');
const Director = require('../models/director');



module.exports.getAllDirectors = (req, res, next) => {
  console.log('get all the directors');
  Director.getAll()
  .then((directors)=> {
    res.status(200).json(directors)
  })
  .catch((err) => {
    next(err);
  })
}

module.exports.getShowsByDirector = ({query: {directorId}}, res, next) => {
  console.log('get all shows for a director');
  Director.forge({id: directorId})
  .fetch({withrelated: ['shows'], require: true})
  .then((shows)=> {
    res.status(200).json(shows)
  })
  .catch((err) => {
    next(err);
  })
}
