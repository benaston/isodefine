# isodefine

An isomorphic wrapper for defining exports in Node.js and browsers.

File size: 194 bytes.<br/>
Supported platforms: server and browser.<br/>
Supported language versions: ES3 and above.

Note: this library adds a single property named `isodefine` to the global object by necessity.

## Example

```
isodefine(function(require) {
	var foo = require('foo');
	// etc...
});
```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.