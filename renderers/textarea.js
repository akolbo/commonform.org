var h  = require('virtual-dom/h')
var markup = require('commonform-markup')
var resizeTextarea = require('../resize-textarea')

function resizeTarget(event) {
  // Delay a tiny amount so the new character, if any, will be added to the
  // <texarea> value by the time the resize routine runs.
  setTimeout(function() { resizeTextarea(event.target) }, 1) }

function textarea(state) {
  return h('textarea',
    { value: markup.stringify(state.data),
      onkeydown: resizeTarget,
      onpaste: resizeTarget,
      onchange: resizeTarget }) }

module.exports = textarea