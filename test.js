var isModule = require('./')
var test = require('tape')

test('test whether a string is a public npm module', function(t) {
  var count = 0
  // is(t, 'url', true, 'core module')
  // is(t, 'zlib', true, 'core module')

  // is(t, './foo/bar', false, 'relative requires return false')
  // is(t, '/proj/foo/bar', false, 'relative requires return false')
  
  is(t, 'eases', true, 'gets npm module')
  is(t, 'some-module-that-hopefully-does-not-exist-in-registry', false, 'no module')
  is(t, '!@#&GD)*', false, 'no module')
  t.plan(count)
  
  // t.equal(isModule('eases', { cache: cache }, true, 'gets cached')

  function is(t, name, expected, msg) {
    count++
    isModule(name, function(bool) {
      t.equal(bool, expected, msg)
    })
  }
})
