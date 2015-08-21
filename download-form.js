var xhr = require('xhr')

function downloadForm(digest, callback) {
  xhr(
    { url: 'https://api.commonform.org/forms/' + digest },
    function(error, response, body) {
      if (error) {
        callback(error) }
      else {
        var response
        try {
          response = JSON.parse(body) }
        catch (e) {
          return callback(e) }
        callback(null, response) } }) }

module.exports = downloadForm