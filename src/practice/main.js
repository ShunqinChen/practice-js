let User = require('../models/User')
const traversal = require('./Traversal')

const objs = [new User('Kent', 12), new User('Bob', 30), new User('Rose', 24)]

function forIn () {
  traversal.forIn(objs)
}

module.exports = {
  forIn,
}