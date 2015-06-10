;(function(namespace) {

	'use strict';

	var DEFAULT_ROOT_OBJECT_NAME = 'isodefine';

	/**
	 * isodefine stands for isomorphic define.
	 */

	/**
	 * isodefine stands for isomorphic define.
	 * @param  {Function} fn           Constructor function for the dependency definition.
	 * @param  {String}   [modulePath] Optional path for use in browsers without RequireJS.
	 * @return {undefined}             
	 */
	function isodefine(fn, modulePath) {
		if ((typeof exports === 'object') && module) {
			module.exports = fn(require); // CommonJS
		} else if ((typeof define === 'function') && define.amd) {
			define(fn); // AMD
		} else {
			self[isodefine.rootObjectName] = self[isodefine.rootObjectName] || {};
			self[isodefine.rootObjectName][modulePath] = fn(requirePolyfil);
		}
	}

	function requirePolyfil(modulePath) {
		return self[isodefine.rootObjectName][modulePath];
	}

	/**
	 * The property
	 * @type {[type]}
	 */
	isodefine.rootObjectName = DEFAULT_ROOT_OBJECT_NAME;

	namespace.isodefine = isodefine;

}(namespace));