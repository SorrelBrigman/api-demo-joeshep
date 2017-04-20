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

module.exports.getSingleDirector = ({params: {id}}, res, next) => {
  Director.getDirector(id)
  .then((dir)=> {
    res.status(200).json(dir)
  })
  .catch((err) => {
    next(err);
  })
}


module.exports.getShowsByDirector = ({query: {directorId}}, res, next) => {
  console.log('get all shows for a director');
  Director.where({id: directorId})
  .fetch({withRelated: ['shows'], require: true})
  .then((rw)=> {
    console.log("rw", rw);
    res.status(200).json(rw)
  })
  .catch((err) => {
    next(err);
  })
}
