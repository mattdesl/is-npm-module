var isModule = require('./')
var test = require('tape')

test('test whether a string is a public npm module', function(t) {
  var count = 0
  is(t, 'url', true, 'core module')
  is(t, 'zlib', true, 'core module')

  is(t, './foo/bar', false, 'relative requires return false')
  is(t, '/proj/foo/bar', false, 'relative requires return false')
  
  is(t, 'eases', true, 'gets npm module')
  is(t, 'xtend', true, 'gets npm module')
  is(t, 'object-assign', true, 'gets npm module')
  is(t, 'css-to-mat4', true, 'gets deprecated npm module')
  is(t, 'some-module-that-hopefully-does-not-exist-in-registry', false, 'no module')
  is(t, '!@#&GD)*', false, 'no module')
  is(t, '@mattdesl/does-not-exist', false, 'no module')

  count++
  t.throws(isModule.bind(null, 'foo'), 'throws error without callback')
  
  //this test currently fails
  //see npm-stats#8 - https://github.com/hughsk/npm-stats/issues/8
  // is(t, '@mattdesl/test-scope-module', true, 'should find a module')

  t.plan(count)
  
  function is(t, name, expected, msg) {
    count++
    isModule(name, function(err, bool) {
      if (err)
        return t.fail(err)
      t.equal(bool, expected, msg)
    })
  }
})
