var builtins = require('builtins')
var stats = require('npm-stats')()

module.exports = function(str, cb) {
  if (typeof cb !== 'function')
    throw new TypeError('callback must be a function')
  
  if (builtins.indexOf(str) >= 0) {
    return process.nextTick(function() {
      cb(null, true)
    })
  }

  stats.module(str).info(function(err, data) {
    if (err) {
      if (err.message === 'missing')
        cb(null, false)
      else
        cb(err)
    } else {
      cb(null, true)
    }
  })
}