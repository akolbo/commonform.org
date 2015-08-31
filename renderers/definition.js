var h = require('virtual-dom/h')
var nameID = require('../name-id')

function definition(state) {
  var term = state.data.definition
  return h('dfn.definition',
    { attributes: { 'data-definition': term } },
    term) }

module.exports = definition
