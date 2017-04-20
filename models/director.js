'use strict'

const {bookshelf} = require('../db/database');
require('./show.js');
require('./show_director.js');

const Director = bookshelf.Model.extend({
  tableName: 'directors',
  shows: function() {return this.belongsToMany('Show').through('Show_Director')}
}, {
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then((rows)=> {
      return rows;
    })
    .catch((err)=> {
      return err;
    })
  },
  getDirector: function (id) {
    return this.forge({id})
    .fetch()
    .then((rows)=> {
      return rows;
    })
    .catch((err)=> {
      return err;
    })
  }
});

module.exports = bookshelf.model('Director', Director);
