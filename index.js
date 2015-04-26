var builtins = require('builtins')
var relative = require('relative-require-regex')()
var stats = require('npm-stats')()

module.exports = function(str, cb) {
  if (relative.test(str))
    return done(false, cb)
  if (builtins.indexOf(str) >= 0)
    return done(true, cb)

  stats.module(str).info(function(err, data) {
    if (err) {
      cb(false)
    } else {
      cb(true)
      // May fail with scoped packages
      // cb(data.name === str)
    }
  })
}

function done(b, cb) {
  process.nextTick(function() {
    cb(b)
  })
}