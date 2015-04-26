# is-npm-module

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Test whether the given name is a public npm module.

```js
var isModule = require('is-npm-module')

isModule('object-assign', function(err, exists) {
  if (err) {
    console.error("Could not connect to database")
    return
  }
  
  console.log(exists) // -> true
})
```

Builtins like `"url"` will not query the database.

## Usage

[![NPM](https://nodei.co/npm/is-npm-module.png)](https://www.npmjs.com/package/is-npm-module)

#### `isModule(name, cb)`

Tests whether `name` exists in the public npm database. The callback is provided with `(err, exists)` parameters; where `err` is an Error if there was a problem connecting to the database, otherwise `exists` is a boolean for whether the module was found in the database. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/is-npm-module/blob/master/LICENSE.md) for details.
