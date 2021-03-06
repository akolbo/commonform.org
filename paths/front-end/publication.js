module.exports = function () {
  var firstArgument = arguments[0]
  var publisher, project, edition
  if (typeof firstArgument === 'string') {
    publisher = arguments[0]
    project = arguments[1]
    edition = arguments[2]
  } else {
    publisher = firstArgument.publisher
    project = firstArgument.project
    edition = firstArgument.edition
  }
  return (
    '/' + encodeURIComponent(publisher) +
    '/' + encodeURIComponent(project) +
    '/' + encodeURIComponent(edition)
  )
}
