webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.11.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-05-01T17:42Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//
	
	var deletedIds = [];
	
	var slice = deletedIds.slice;
	
	var concat = deletedIds.concat;
	
	var push = deletedIds.push;
	
	var indexOf = deletedIds.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "1.11.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		},
	
		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},
	
		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			try {
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
	
			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( support.ownLast ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data );
				} )( data );
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );
	
			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				}
	
			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			var len;
	
			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}
	
				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
	
				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}
	
			return -1;
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}
	
			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: function() {
			return +( new Date() );
		},
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		if ( obj.nodeType === 1 && length ) {
			return true;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v1.10.19
	 * http://sizzlejs.com/
	 *
	 * Copyright 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-04-18
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + -(new Date()),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		strundefined = typeof undefined,
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
	
		if ( !selector || typeof selector !== "string" ) {
			return results;
		}
	
		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}
	
		if ( documentIsHTML && !seed ) {
	
			// Shortcuts
			if ( (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType === 9 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== strundefined && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare,
			doc = node ? node.ownerDocument || node : preferredDoc,
			parent = doc.defaultView;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
	
		// Support tests
		documentIsHTML = !isXML( doc );
	
		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", function() {
					setDocument();
				}, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", function() {
					setDocument();
				});
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Check if getElementsByClassName can be trusted
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
			div.innerHTML = "<div class='a'></div><div class='a i'></div>";
	
			// Support: Safari<4
			// Catch class over-caching
			div.firstChild.className = "i";
			// Support: Opera<10
			// Catch gEBCN failure to find non-leading classes
			return div.getElementsByClassName("i").length === 2;
		});
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowclip^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return doc;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch(e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context !== document && context;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {
	
			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome<14
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[2] ) {
								return rootjQuery.find( selector );
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				cur = elem[ dir ];
	
			while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
				if ( cur.nodeType === 1 ) {
					matched.push( cur );
				}
				cur = cur[dir];
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var r = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					r.push( n );
				}
			}
	
			return r;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;
	
			return this.filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},
	
		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[0], jQuery( elem ) );
			}
	
			// Locate the position of the desired element
			return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this );
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );
	
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.unique( ret );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}
	
			return this.pushStack( ret );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
			// Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
	
						} else if ( !(--remaining) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready );
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});
	
	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );
	
		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
	
			// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );
	
				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );
	
				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;
	
				try {
					top = window.frameElement == null && document.documentElement;
				} catch(e) {}
	
				if ( top && top.doScroll ) {
					(function doScrollCheck() {
						if ( !jQuery.isReady ) {
	
							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch(e) {
								return setTimeout( doScrollCheck, 50 );
							}
	
							// detach all dom ready events
							detach();
	
							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise( obj );
	};
	
	
	var strundefined = typeof undefined;
	
	
	
	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownLast = i !== "0";
	
	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;
	
	// Execute ASAP in case we need to set body.style.zoom
	jQuery(function() {
		// Minified: var a,b,c,d
		var val, div, body, container;
	
		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Return for frameset docs that don't have a body
			return;
		}
	
		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );
	
		if ( typeof div.style.zoom !== strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}
	
		body.removeChild( container );
	});
	
	
	
	
	(function() {
		var div = document.createElement( "div" );
	
		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	})();
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( elem ) {
		var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
			nodeType = +elem.nodeType || 1;
	
		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
	};
	
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
	
			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
	
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );
	
			} else {
				data = undefined;
			}
		}
	
		return data;
	}
	
	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {
	
			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}
	
		return true;
	}
	
	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}
	
		var ret, thisCache,
			internalKey = jQuery.expando,
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
	
		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
			return;
		}
	
		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
	
		if ( !cache[ id ] ) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}
	
		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}
	
		thisCache = cache[ id ];
	
		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}
	
			thisCache = thisCache.data;
		}
	
		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}
	
		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {
	
			// First Try to find as-is property data
			ret = thisCache[ name ];
	
			// Test for null|undefined property data
			if ( ret == null ) {
	
				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}
	
		return ret;
	}
	
	function internalRemoveData( elem, name, pvt ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}
	
		var thisCache, i,
			isNode = elem.nodeType,
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
	
		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}
	
		if ( name ) {
	
			thisCache = pvt ? cache[ id ] : cache[ id ].data;
	
			if ( thisCache ) {
	
				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {
	
					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {
	
						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}
	
				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[i] ];
				}
	
				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
					return;
				}
			}
		}
	
		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;
	
			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}
	
		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );
	
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];
	
		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	}
	
	jQuery.extend({
		cache: {},
	
		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
	
		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},
	
		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},
	
		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},
	
		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[0],
				attrs = elem && elem.attributes;
	
			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );
	
					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					jQuery.data( this, key );
				});
			}
	
			return arguments.length > 1 ?
	
				// Sets one value
				this.each(function() {
					jQuery.data( this, key, value );
				}) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},
	
		removeData: function( key ) {
			return this.each(function() {
				jQuery.removeData( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray(data) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	};
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	
	
	(function() {
		// Minified: var a,b,c
		var input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			fragment = document.createDocumentFragment();
	
		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;
	
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;
	
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;
	
		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;
	
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
		div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
	
		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		support.noCloneEvent = true;
		if ( div.attachEvent ) {
			div.attachEvent( "onclick", function() {
				support.noCloneEvent = false;
			});
	
			div.cloneNode( true ).click();
		}
	
		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}
		}
	})();
	
	
	(function() {
		var i, eventName,
			div = document.createElement( "div" );
	
		// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
		for ( i in { submit: true, change: true, focusin: true }) {
			eventName = "on" + i;
	
			if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	})();
	
	
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
	
						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
	
				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, ret, handleObj, matched, j,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var sel, handleObj, matches, i,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}
	
			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle, false );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;
	
			if ( elem.detachEvent ) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if ( typeof elem[ name ] === strundefined ) {
					elem[ name ] = null;
				}
	
				elem.detachEvent( name, handle );
			}
		};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}
	
			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();
	
			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
			if ( !e ) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}
	
			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// IE submit delegation
	if ( !support.submitBubbles ) {
	
		jQuery.event.special.submit = {
			setup: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
					if ( form && !jQuery._data( form, "submitBubbles" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submit_bubble = true;
						});
						jQuery._data( form, "submitBubbles", true );
					}
				});
				// return undefined since we don't need an event listener
			},
	
			postDispatch: function( event ) {
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submit_bubble ) {
					delete event._submit_bubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event, true );
					}
				}
			},
	
			teardown: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}
	
	// IE change delegation and checkbox/radio fix
	if ( !support.changeBubbles ) {
	
		jQuery.event.special.change = {
	
			setup: function() {
	
				if ( rformElems.test( this.nodeName ) ) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._just_changed = true;
							}
						});
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._just_changed && !event.isTrigger ) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event, true );
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;
	
					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event, true );
							}
						});
						jQuery._data( elem, "changeBubbles", true );
					}
				});
			},
	
			handle: function( event ) {
				var elem = event.target;
	
				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
					return event.handleObj.handler.apply( this, arguments );
				}
			},
	
			teardown: function() {
				jQuery.event.remove( this, "._change" );
	
				return !rformElems.test( this.nodeName );
			}
		};
	}
	
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var type, origFn;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();
	
		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}
	
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
			"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
			legend: [ 1, "<fieldset>", "</fieldset>" ],
			area: [ 1, "<map>", "</map>" ],
			param: [ 1, "<object>", "</object>" ],
			thead: [ 1, "<table>", "</table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
		},
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement("div") );
	
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
				undefined;
	
		if ( !found ) {
			for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}
	
	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}
	
	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
		}
	}
	
	function cloneCopyEvent( src, dest ) {
	
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}
	
		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;
	
		if ( events ) {
			delete curData.handle;
			curData.events = {};
	
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	
		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}
	
	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;
	
		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		nodeName = dest.nodeName.toLowerCase();
	
		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );
	
			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}
	
			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}
	
		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );
	
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}
	
			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
				dest.innerHTML = src.innerHTML;
			}
	
		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set
	
			dest.defaultChecked = dest.checked = src.checked;
	
			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}
	
		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;
	
		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
				clone = elem.cloneNode( true );
	
			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}
	
			if ( (!support.noCloneEvent || !support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				// Fix all IE cloning issues
				for ( i = 0; (node = srcElements[i]) != null; ++i ) {
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[i] ) {
						fixCloneNodeIssues( node, destElements[i] );
					}
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0; (node = srcElements[i]) != null; i++ ) {
						cloneCopyEvent( node, destElements[i] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			destElements = srcElements = node = null;
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var j, elem, contains,
				tmp, tag, tbody, wrap,
				l = elems.length,
	
				// Ensure a safe fragment
				safe = createSafeFragment( context ),
	
				nodes = [],
				i = 0;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
	
						tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];
	
						// Descend through wrappers to the right content
						j = wrap[0];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Manually add leading whitespace removed by IE
						if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
							nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
						}
	
						// Remove IE's autoinserted <tbody> from table fragments
						if ( !support.tbody ) {
	
							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test( elem ) ?
								tmp.firstChild :
	
								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test( elem ) ?
									tmp :
									0;
	
							j = elem && elem.childNodes.length;
							while ( j-- ) {
								if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
									elem.removeChild( tbody );
								}
							}
						}
	
						jQuery.merge( nodes, tmp.childNodes );
	
						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";
	
						// Fix #12392 for oldIE
						while ( tmp.firstChild ) {
							tmp.removeChild( tmp.firstChild );
						}
	
						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}
	
			// Fix #11356: Clear elements from fragment
			if ( tmp ) {
				safe.removeChild( tmp );
			}
	
			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if ( !support.appendChecked ) {
				jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
			}
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( safe.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			tmp = null;
	
			return safe;
		},
	
		cleanData: function( elems, /* internal */ acceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = support.deleteExpando,
				special = jQuery.event.special;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( acceptData || jQuery.acceptData( elem ) ) {
	
					id = elem[ internalKey ];
					data = id && cache[ id ];
	
					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {
	
							delete cache[ id ];
	
							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if ( deleteExpando ) {
								delete elem[ internalKey ];
	
							} else if ( typeof elem.removeAttribute !== strundefined ) {
								elem.removeAttribute( internalKey );
	
							} else {
								elem[ internalKey ] = null;
							}
	
							deletedIds.push( id );
						}
					}
				}
			}
		}
	});
	
	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
	
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}
	
				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}
	
				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}
	
				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for (; i < l; i++ ) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch(e) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var arg = arguments[ 0 ];
	
			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;
	
				jQuery.cleanData( getAll( this ) );
	
				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});
	
			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, callback ) {
	
			// Flatten any nested arrays
			args = concat.apply( [], args );
	
			var first, node, hasScripts,
				scripts, doc, fragment,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[0] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call( this[i], node, i );
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
								}
							}
						}
					}
	
					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}
	
			return this;
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone(true);
				jQuery( insert[i] )[ original ]( elems );
	
				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	
	var iframe,
		elemdisplay = {};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
	
				// Use of this method is a temporary fix (more like optmization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	
	
	(function() {
		var shrinkWrapBlocksVal;
	
		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}
	
			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;
	
			// Minified: var b,c,d
			var div, body, container;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== strundefined ) {
				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}
	
			body.removeChild( container );
	
			return shrinkWrapBlocksVal;
		};
	
	})();
	var rmargin = (/^margin/);
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	
	
	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;
	
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		};
	
		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
	
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
			if ( computed ) {
	
				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( document.documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};
	
		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;
	
			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}
	
			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
	
				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
	
				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
	
				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}
	
	
	
	
	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				var condition = conditionFn();
	
				if ( condition == null ) {
					// The test was not ready at this point; screw the hook this time
					// but check again when needed next time.
					return;
				}
	
				if ( condition ) {
					// Hook not needed (or it's not possible to use it due to missing dependency),
					// remove it.
					// Since there are no other hooks for marginRight, remove the whole object.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
	
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}
	
	
	(function() {
		// Minified: var b,c,d,e,f,g, h,i
		var div, style, a, pixelPositionVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal;
	
		// Setup
		div = document.createElement( "div" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];
		style = a && a.style;
	
		// Finish early in limited (non-browser) environments
		if ( !style ) {
			return;
		}
	
		style.cssText = "float:left;opacity:.5";
	
		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = style.opacity === "0.5";
	
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!style.cssFloat;
	
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
			style.WebkitBoxSizing === "";
	
		jQuery.extend(support, {
			reliableHiddenOffsets: function() {
				if ( reliableHiddenOffsetsVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},
	
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
	
			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},
	
			// Support: Android 2.3
			reliableMarginRight: function() {
				if ( reliableMarginRightVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			}
		});
	
		function computeStyleTests() {
			// Minified: var b,c,d,j
			var div, body, container, contents;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
	
			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = false;
			reliableMarginRightVal = true;
	
			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				boxSizingReliableVal =
					( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
	
				// Support: Android 2.3
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";
	
				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );
			}
	
			// Support: IE8
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
	
			body.removeChild( container );
		}
	
	})();
	
	
	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,
	
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	
	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
	
					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch(e) {}
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
				// IE uses filters for opacity
				return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
			},
	
			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
	
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;
	
				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {
	
					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );
	
					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}
	
				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}
	
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes
	
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;
	
				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );
	
					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}
	
				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}
	
				return tween;
			} ]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;
	
		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {
	
				// we're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );
	
		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
	
				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always(function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				});
			}
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}
	
			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// enable finishing flag on private data
				data.finish = true;
	
				// empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		// Minified: var a,b,c,d,e
		var input, div, select, a, opt;
	
		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[ 0 ];
	
		// First batch of tests.
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];
	
		a.style.cssText = "top:1px";
	
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";
	
		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute("style") );
	
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";
	
		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;
	
		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;
	
		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";
	
		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	})();
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {
	
							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;
	
							} catch ( _ ) {
	
								// Will be executed only in IE6
								option.scrollHeight;
							}
	
						} else {
							option.selected = false;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
	
					return options;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
				ret = jQuery.find.attr( elem, name );
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}
	
					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}
	
					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	
	// Hook for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
	
			// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
	
			return name;
		}
	};
	
	// Retrieve booleans specially
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
			function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			} :
			function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
	});
	
	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}
	
	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {
	
		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute( name ))
					);
				}
	
				ret.value = value += "";
	
				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};
	
		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
						ret.value :
						null;
				}
			};
	
		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};
	
		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};
	
		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each([ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		});
	}
	
	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each(function() {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch( e ) {}
			});
		}
	});
	
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );
	
			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
				}
			}
		}
	});
	
	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each([ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		});
	}
	
	// Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
	
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						jQuery._data( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
	jQuery.parseJSON = function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}
	
		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );
	
		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {
	
			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}
	
			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}
	
			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;
	
			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;
	
			// Remove this token
			return "";
		}) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		// Document location
		ajaxLocParts,
		ajaxLocation,
	
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");
	
	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}
	
	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var // Cross-domain detection vars
				parts,
				// Loop variable
				i,
				// URL without anti-cache param
				cacheURL,
				// Response headers as string
				responseHeadersString,
				// timeout handle
				timeoutTimer,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				transport,
				// Response headers
				responseHeaders,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			fireGlobals = s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	jQuery.fn.extend({
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[0] ) {
				// The elements to wrap the target around
				var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);
	
				if ( this[0].parentNode ) {
					wrap.insertBefore( this[0] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function(i) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!support.reliableHiddenOffsets() &&
				((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};
	
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
		// Support: IE6+
		function() {
	
			// XHR cannot access local files, always use ActiveX for that case
			return !this.isLocal &&
	
				// Support: IE7-8
				// oldIE XHR does not support non-RFC2616 methods (#13240)
				// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
				// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
				// Although this check for six methods instead of eight
				// since IE also does not support "trace" and "connect"
				/^(get|post|head|put|delete|options)$/i.test( this.type ) &&
	
				createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	if ( window.ActiveXObject ) {
		jQuery( window ).on( "unload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		});
	}
	
	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;
	
	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {
	
		jQuery.ajaxTransport(function( options ) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {
	
				var callback;
	
				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;
	
						// Open the socket
						xhr.open( options.type, options.url, options.async, options.username, options.password );
	
						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}
	
						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers["X-Requested-With"] ) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}
	
						// Set headers
						for ( i in headers ) {
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}
	
						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );
	
						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;
	
							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;
	
								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
	
									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}
	
									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}
	
									// Filter status for non standard behaviors
	
									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
	
							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};
	
						if ( !options.async ) {
							// if we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout( callback );
						} else {
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},
	
					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		});
	}
	
	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	}
	
	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch( e ) {}
	}
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function(s) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
	
			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;
	
			return {
	
				send: function( _, callback ) {
	
					script = document.createElement("script");
	
					script.async = true;
	
					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}
	
					script.src = s.url;
	
					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {
	
						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
	
							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}
	
							// Dereference the script
							script = null;
	
							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};
	
					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},
	
				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = jQuery.buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, response, type,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
	
	
	
	
	
	var docElem = window.document.documentElement;
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;
	
			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}
	
			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];
	
			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? (prop in win) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by Administrator on 2016/10/31.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		console.log('hello main2.js');
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by Administrator on 2016/10/31.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		console.log('hello main3.js');
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2VudHJ5L2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi4vZW50cnkvanF1ZXJ5LmpzIiwid2VicGFjazovLy9hcHAvZW50cnkvaW5uZXIvbWFpbjIuanMiLCJ3ZWJwYWNrOi8vLy4uL2VudHJ5L2lubmVyL21haW4yLmpzIiwid2VicGFjazovLy9hcHAvZW50cnkvbWFpbjMuanMiLCJ3ZWJwYWNrOi8vLy4uL2VudHJ5L21haW4zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUVDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUSxZQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUYscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTs7QUFFRixpQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQSxZQUFXLFlBQVk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVMsWUFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVSxZQUFZO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQSxpQkFBZ0IsSUFBSTs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUNBQXdDLElBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNELFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLFFBQVE7QUFDbkIsWUFBVyxRQUFRO0FBQ25CLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxnQkFBZ0I7QUFDM0IsY0FBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxlQUFlO0FBQzFCLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxlQUFlO0FBQzFCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGlDQUFnQyxNQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGdCQUFlOztBQUVmLFVBQVM7O0FBRVQ7QUFDQSxTQUFRLGlDQUFpQztBQUN6QyxTQUFRLG9CQUFvQjtBQUM1QixTQUFRLHNDQUFzQztBQUM5QyxTQUFRO0FBQ1IsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGFBQWEsRUFBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFPLHlFQUF5RTtBQUNoRjs7QUFFQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLFVBQVU7QUFDM0UsdUNBQXNDLDJCQUEyQjtBQUNqRTtBQUNBLGlDQUFnQyxNQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsV0FBVSxVQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQVksdUVBQXVFO0FBQ25GO0FBQ0E7QUFDQSxhQUFZLDRCQUE0QjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUEsb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsU0FBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUSxTQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVILFNBQVEsU0FBUztBQUNqQjtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsaURBQWlEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQ7QUFDakQsV0FBVSx3Q0FBd0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFlBQVcsUUFBUTtBQUNuQixZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBOztBQUVBLEVBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBLGVBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7OztBQUdEOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBLFVBQVMsR0FBRztBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLE9BQU87QUFDaEIsd0JBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaURBQWdEO0FBQ2hELEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxvQ0FBb0M7QUFDOUM7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxTQUFRO0FBQ1IsUUFBTztBQUNQO0FBQ0EsT0FBTTtBQUNOLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUE4QztBQUM5QyxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKOztBQUVBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMsU0FBUyxRQUFRLFNBQVMsTUFBTTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLFNBQVMsU0FBUyxZQUFZLFVBQVU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOzs7OztBQUtEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBa0Q7QUFDbEQ7QUFDQTs7O0FBR0EscUJBQW9CLFNBQVM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLElBQUk7QUFDL0I7O0FBRUEsd0VBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWEsNENBQTRDO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVUsYUFBYTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixtQkFBbUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFzQix3REFBd0Q7QUFDOUU7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBLGNBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBc0MsY0FBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMkRBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFjLHFDQUFxQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTBELDJCQUEyQjtBQUNyRjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsMkJBQTJCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxpQ0FBaUM7QUFDaEQscURBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBZ0IsaUNBQWlDO0FBQ2pEO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVMsT0FBTztBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVMsMkJBQTJCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTztBQUNQOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLDJCQUEyQjs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUEsVUFBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLFdBQVc7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsU0FBUyxRQUFRLFNBQVMsTUFBTTtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsU0FBUyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyw0QkFBNEI7QUFDaEUsNkJBQTRCLGNBQWMsU0FBUyxTQUFTO0FBQzVELGtCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQyxTQUFTLFFBQVEsU0FBUyxNQUFNO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQywyQkFBMkI7QUFDN0QsMkJBQTBCLGNBQWMsY0FBYyxPQUFPO0FBQzdELGdCQUFlLFlBQVksVUFBVTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1FQUFrRTtBQUNsRTtBQUNBLGdEQUErQyxlQUFlOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE0QixTQUFTLFFBQVEsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsNEJBQTRCO0FBQ2hFLDZCQUE0QixjQUFjLFNBQVMsU0FBUztBQUM1RDtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0EsMkNBQTBDLFNBQVMsVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQVksK0RBQStEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFRLGdCQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUSxPQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLDRCQUE0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTs7QUFFQSxXQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxlQUFlO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsUUFBUTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsZ0JBQWdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsK0NBQThDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVSxpQkFBaUI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCLGdDQUErQixrQkFBa0IsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLGlCQUFpQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOztBQUVBLFNBQVEsaUJBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUyxpQkFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0Esa0VBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLGNBQWM7QUFDakMsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVLGtCQUFrQjtBQUM1QixZQUFXLGtCQUFrQjtBQUM3QixlQUFjO0FBQ2QsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFRLG1CQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUEsa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQSxPQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxLQUFJO0FBQ0o7O0FBRUEsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7O0FBRUEsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSix3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsV0FBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7Ozs7O0FBS0Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7O0FBRUE7Ozs7QUFJQSw4QkFBNkIsSUFBSSxnREFBZ0QsRUFBRTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQSxrQ0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxJQUFHLE9BQU87QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7O0FBRWhCLGlEQUFnRDtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLFFBQU87QUFDUCxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQSx1QkFBc0I7QUFDdEIsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBbUY7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjLG9DQUFvQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVILEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLE9BQU07QUFDTixPQUFNO0FBQ04sSUFBRztBQUNIO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQSxtQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsV0FBVSxrQkFBa0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQSw2REFBNEQsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxFQUFDOztBQUVEO0FBQ0EsZUFBYyxzREFBc0Q7QUFDcEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7QUFHRDtBQUNBLGVBQWMsbUNBQW1DO0FBQ2pELGdCQUFlLDZEQUE2RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEdBQUU7QUFDRixFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNREFBLElDQUE7QUFDQSxFREFBLGlDQ0FBLEVEQUEsa0NDQUE7QUFDQTtBQUNBLEdEQUUsK0lDQUE7QUFDRjs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUEsRUFBQzs7Ozs7OztBQ25rVUQsbUNDQUE7QUFDQTtBQUNBO0FEQ0EsbUNDQUE7QUFDQTtBQUNBLEVEQUMsc0pDQUE7Ozs7Ozs7QUNMRCxtQ0NBQTtBQUNBO0FBQ0E7QURDQSxtQ0NBQTtBQUNBO0FBQ0EsRURBQyxzSkNBQSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2VudHJ5L2pxdWVyeS5qcyIsIi8qIVxyXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYxLjExLjFcclxuICogaHR0cDovL2pxdWVyeS5jb20vXHJcbiAqXHJcbiAqIEluY2x1ZGVzIFNpenpsZS5qc1xyXG4gKiBodHRwOi8vc2l6emxlanMuY29tL1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAwNSwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXHJcbiAqXHJcbiAqIERhdGU6IDIwMTQtMDUtMDFUMTc6NDJaXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XHJcblxyXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XHJcblx0XHQvLyBGb3IgQ29tbW9uSlMgYW5kIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIHdpbmRvdyBpcyBwcmVzZW50LFxyXG5cdFx0Ly8gZXhlY3V0ZSB0aGUgZmFjdG9yeSBhbmQgZ2V0IGpRdWVyeVxyXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBpbmhlcmVudGx5IHBvc3NlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcclxuXHRcdC8vIChzdWNoIGFzIE5vZGUuanMpLCBleHBvc2UgYSBqUXVlcnktbWFraW5nIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHNcclxuXHRcdC8vIFRoaXMgYWNjZW50dWF0ZXMgdGhlIG5lZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhIHJlYWwgd2luZG93XHJcblx0XHQvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XHJcblx0XHQvLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XHJcblx0XHRcdGZhY3RvcnkoIGdsb2JhbCwgdHJ1ZSApIDpcclxuXHRcdFx0ZnVuY3Rpb24oIHcgKSB7XHJcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcclxuXHRcdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XHJcblx0fVxyXG5cclxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcclxufSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oIHdpbmRvdywgbm9HbG9iYWwgKSB7XHJcblxyXG4vLyBDYW4ndCBkbyB0aGlzIGJlY2F1c2Ugc2V2ZXJhbCBhcHBzIGluY2x1ZGluZyBBU1AuTkVUIHRyYWNlXHJcbi8vIHRoZSBzdGFjayB2aWEgYXJndW1lbnRzLmNhbGxlci5jYWxsZWUgYW5kIEZpcmVmb3ggZGllcyBpZlxyXG4vLyB5b3UgdHJ5IHRvIHRyYWNlIHRocm91Z2ggXCJ1c2Ugc3RyaWN0XCIgY2FsbCBjaGFpbnMuICgjMTMzMzUpXHJcbi8vIFN1cHBvcnQ6IEZpcmVmb3ggMTgrXHJcbi8vXHJcblxyXG52YXIgZGVsZXRlZElkcyA9IFtdO1xyXG5cclxudmFyIHNsaWNlID0gZGVsZXRlZElkcy5zbGljZTtcclxuXHJcbnZhciBjb25jYXQgPSBkZWxldGVkSWRzLmNvbmNhdDtcclxuXHJcbnZhciBwdXNoID0gZGVsZXRlZElkcy5wdXNoO1xyXG5cclxudmFyIGluZGV4T2YgPSBkZWxldGVkSWRzLmluZGV4T2Y7XHJcblxyXG52YXIgY2xhc3MydHlwZSA9IHt9O1xyXG5cclxudmFyIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcclxuXHJcbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xyXG5cclxudmFyIHN1cHBvcnQgPSB7fTtcclxuXHJcblxyXG5cclxudmFyXHJcblx0dmVyc2lvbiA9IFwiMS4xMS4xXCIsXHJcblxyXG5cdC8vIERlZmluZSBhIGxvY2FsIGNvcHkgb2YgalF1ZXJ5XHJcblx0alF1ZXJ5ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xyXG5cdFx0Ly8gVGhlIGpRdWVyeSBvYmplY3QgaXMgYWN0dWFsbHkganVzdCB0aGUgaW5pdCBjb25zdHJ1Y3RvciAnZW5oYW5jZWQnXHJcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxyXG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuZm4uaW5pdCggc2VsZWN0b3IsIGNvbnRleHQgKTtcclxuXHR9LFxyXG5cclxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMSwgSUU8OVxyXG5cdC8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxyXG5cdHJ0cmltID0gL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFxyXG5cclxuXHQvLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcclxuXHRybXNQcmVmaXggPSAvXi1tcy0vLFxyXG5cdHJkYXNoQWxwaGEgPSAvLShbXFxkYS16XSkvZ2ksXHJcblxyXG5cdC8vIFVzZWQgYnkgalF1ZXJ5LmNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcclxuXHRmY2FtZWxDYXNlID0gZnVuY3Rpb24oIGFsbCwgbGV0dGVyICkge1xyXG5cdFx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG5cdH07XHJcblxyXG5qUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xyXG5cdC8vIFRoZSBjdXJyZW50IHZlcnNpb24gb2YgalF1ZXJ5IGJlaW5nIHVzZWRcclxuXHRqcXVlcnk6IHZlcnNpb24sXHJcblxyXG5cdGNvbnN0cnVjdG9yOiBqUXVlcnksXHJcblxyXG5cdC8vIFN0YXJ0IHdpdGggYW4gZW1wdHkgc2VsZWN0b3JcclxuXHRzZWxlY3RvcjogXCJcIixcclxuXHJcblx0Ly8gVGhlIGRlZmF1bHQgbGVuZ3RoIG9mIGEgalF1ZXJ5IG9iamVjdCBpcyAwXHJcblx0bGVuZ3RoOiAwLFxyXG5cclxuXHR0b0FycmF5OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XHJcblx0fSxcclxuXHJcblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxyXG5cdC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XHJcblx0Z2V0OiBmdW5jdGlvbiggbnVtICkge1xyXG5cdFx0cmV0dXJuIG51bSAhPSBudWxsID9cclxuXHJcblx0XHRcdC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcclxuXHRcdFx0KCBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdICkgOlxyXG5cclxuXHRcdFx0Ly8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxyXG5cdFx0XHRzbGljZS5jYWxsKCB0aGlzICk7XHJcblx0fSxcclxuXHJcblx0Ly8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xyXG5cdC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxyXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xyXG5cclxuXHRcdC8vIEJ1aWxkIGEgbmV3IGpRdWVyeSBtYXRjaGVkIGVsZW1lbnQgc2V0XHJcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XHJcblxyXG5cdFx0Ly8gQWRkIHRoZSBvbGQgb2JqZWN0IG9udG8gdGhlIHN0YWNrIChhcyBhIHJlZmVyZW5jZSlcclxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcclxuXHRcdHJldC5jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH0sXHJcblxyXG5cdC8vIEV4ZWN1dGUgYSBjYWxsYmFjayBmb3IgZXZlcnkgZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBzZXQuXHJcblx0Ly8gKFlvdSBjYW4gc2VlZCB0aGUgYXJndW1lbnRzIHdpdGggYW4gYXJyYXkgb2YgYXJncywgYnV0IHRoaXMgaXNcclxuXHQvLyBvbmx5IHVzZWQgaW50ZXJuYWxseS4pXHJcblx0ZWFjaDogZnVuY3Rpb24oIGNhbGxiYWNrLCBhcmdzICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjaywgYXJncyApO1xyXG5cdH0sXHJcblxyXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkubWFwKHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xyXG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xyXG5cdFx0fSkpO1xyXG5cdH0sXHJcblxyXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggc2xpY2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApICk7XHJcblx0fSxcclxuXHJcblx0Zmlyc3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXEoIDAgKTtcclxuXHR9LFxyXG5cclxuXHRsYXN0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xyXG5cdH0sXHJcblxyXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcclxuXHRcdHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcclxuXHRcdFx0aiA9ICtpICsgKCBpIDwgMCA/IGxlbiA6IDAgKTtcclxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbal0gXSA6IFtdICk7XHJcblx0fSxcclxuXHJcblx0ZW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcihudWxsKTtcclxuXHR9LFxyXG5cclxuXHQvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXHJcblx0cHVzaDogcHVzaCxcclxuXHRzb3J0OiBkZWxldGVkSWRzLnNvcnQsXHJcblx0c3BsaWNlOiBkZWxldGVkSWRzLnNwbGljZVxyXG59O1xyXG5cclxualF1ZXJ5LmV4dGVuZCA9IGpRdWVyeS5mbi5leHRlbmQgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgc3JjLCBjb3B5SXNBcnJheSwgY29weSwgbmFtZSwgb3B0aW9ucywgY2xvbmUsXHJcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXHJcblx0XHRpID0gMSxcclxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXHJcblx0XHRkZWVwID0gZmFsc2U7XHJcblxyXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cclxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiICkge1xyXG5cdFx0ZGVlcCA9IHRhcmdldDtcclxuXHJcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XHJcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcclxuXHRcdGkrKztcclxuXHR9XHJcblxyXG5cdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxyXG5cdGlmICggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhalF1ZXJ5LmlzRnVuY3Rpb24odGFyZ2V0KSApIHtcclxuXHRcdHRhcmdldCA9IHt9O1xyXG5cdH1cclxuXHJcblx0Ly8gZXh0ZW5kIGpRdWVyeSBpdHNlbGYgaWYgb25seSBvbmUgYXJndW1lbnQgaXMgcGFzc2VkXHJcblx0aWYgKCBpID09PSBsZW5ndGggKSB7XHJcblx0XHR0YXJnZXQgPSB0aGlzO1xyXG5cdFx0aS0tO1xyXG5cdH1cclxuXHJcblx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXHJcblx0XHRpZiAoIChvcHRpb25zID0gYXJndW1lbnRzWyBpIF0pICE9IG51bGwgKSB7XHJcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3RcclxuXHRcdFx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xyXG5cdFx0XHRcdHNyYyA9IHRhcmdldFsgbmFtZSBdO1xyXG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XHJcblxyXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3BcclxuXHRcdFx0XHRpZiAoIHRhcmdldCA9PT0gY29weSApIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXHJcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBqUXVlcnkuaXNBcnJheShjb3B5KSkgKSApIHtcclxuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgKSB7XHJcblx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGpRdWVyeS5pc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXHJcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGpRdWVyeS5leHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XHJcblxyXG5cdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxyXG5cdHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5qUXVlcnkuZXh0ZW5kKHtcclxuXHQvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2VcclxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxyXG5cclxuXHQvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxyXG5cdGlzUmVhZHk6IHRydWUsXHJcblxyXG5cdGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcclxuXHR9LFxyXG5cclxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuXHQvLyBTZWUgdGVzdC91bml0L2NvcmUuanMgZm9yIGRldGFpbHMgY29uY2VybmluZyBpc0Z1bmN0aW9uLlxyXG5cdC8vIFNpbmNlIHZlcnNpb24gMS4zLCBET00gbWV0aG9kcyBhbmQgZnVuY3Rpb25zIGxpa2UgYWxlcnRcclxuXHQvLyBhcmVuJ3Qgc3VwcG9ydGVkLiBUaGV5IHJldHVybiBmYWxzZSBvbiBJRSAoIzI5NjgpLlxyXG5cdGlzRnVuY3Rpb246IGZ1bmN0aW9uKCBvYmogKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5LnR5cGUob2JqKSA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdH0sXHJcblxyXG5cdGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oIG9iaiApIHtcclxuXHRcdHJldHVybiBqUXVlcnkudHlwZShvYmopID09PSBcImFycmF5XCI7XHJcblx0fSxcclxuXHJcblx0aXNXaW5kb3c6IGZ1bmN0aW9uKCBvYmogKSB7XHJcblx0XHQvKiBqc2hpbnQgZXFlcWVxOiBmYWxzZSAqL1xyXG5cdFx0cmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93O1xyXG5cdH0sXHJcblxyXG5cdGlzTnVtZXJpYzogZnVuY3Rpb24oIG9iaiApIHtcclxuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChudWxsfHRydWV8ZmFsc2V8XCJcIilcclxuXHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcclxuXHRcdC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxyXG5cdFx0cmV0dXJuICFqUXVlcnkuaXNBcnJheSggb2JqICkgJiYgb2JqIC0gcGFyc2VGbG9hdCggb2JqICkgPj0gMDtcclxuXHR9LFxyXG5cclxuXHRpc0VtcHR5T2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xyXG5cdFx0dmFyIG5hbWU7XHJcblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHJcblx0aXNQbGFpbk9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcclxuXHRcdHZhciBrZXk7XHJcblxyXG5cdFx0Ly8gTXVzdCBiZSBhbiBPYmplY3QuXHJcblx0XHQvLyBCZWNhdXNlIG9mIElFLCB3ZSBhbHNvIGhhdmUgdG8gY2hlY2sgdGhlIHByZXNlbmNlIG9mIHRoZSBjb25zdHJ1Y3RvciBwcm9wZXJ0eS5cclxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IERPTSBub2RlcyBhbmQgd2luZG93IG9iamVjdHMgZG9uJ3QgcGFzcyB0aHJvdWdoLCBhcyB3ZWxsXHJcblx0XHRpZiAoICFvYmogfHwgalF1ZXJ5LnR5cGUob2JqKSAhPT0gXCJvYmplY3RcIiB8fCBvYmoubm9kZVR5cGUgfHwgalF1ZXJ5LmlzV2luZG93KCBvYmogKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3RcclxuXHRcdFx0aWYgKCBvYmouY29uc3RydWN0b3IgJiZcclxuXHRcdFx0XHQhaGFzT3duLmNhbGwob2JqLCBcImNvbnN0cnVjdG9yXCIpICYmXHJcblx0XHRcdFx0IWhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIFwiaXNQcm90b3R5cGVPZlwiKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKCBlICkge1xyXG5cdFx0XHQvLyBJRTgsOSBXaWxsIHRocm93IGV4Y2VwdGlvbnMgb24gY2VydGFpbiBob3N0IG9iamVjdHMgIzk4OTdcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcclxuXHRcdC8vIEhhbmRsZSBpdGVyYXRpb24gb3ZlciBpbmhlcml0ZWQgcHJvcGVydGllcyBiZWZvcmUgb3duIHByb3BlcnRpZXMuXHJcblx0XHRpZiAoIHN1cHBvcnQub3duTGFzdCApIHtcclxuXHRcdFx0Zm9yICgga2V5IGluIG9iaiApIHtcclxuXHRcdFx0XHRyZXR1cm4gaGFzT3duLmNhbGwoIG9iaiwga2V5ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcclxuXHRcdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxyXG5cdFx0Zm9yICgga2V5IGluIG9iaiApIHt9XHJcblxyXG5cdFx0cmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkIHx8IGhhc093bi5jYWxsKCBvYmosIGtleSApO1xyXG5cdH0sXHJcblxyXG5cdHR5cGU6IGZ1bmN0aW9uKCBvYmogKSB7XHJcblx0XHRpZiAoIG9iaiA9PSBudWxsICkge1xyXG5cdFx0XHRyZXR1cm4gb2JqICsgXCJcIjtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XHJcblx0XHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwob2JqKSBdIHx8IFwib2JqZWN0XCIgOlxyXG5cdFx0XHR0eXBlb2Ygb2JqO1xyXG5cdH0sXHJcblxyXG5cdC8vIEV2YWx1YXRlcyBhIHNjcmlwdCBpbiBhIGdsb2JhbCBjb250ZXh0XHJcblx0Ly8gV29ya2Fyb3VuZHMgYmFzZWQgb24gZmluZGluZ3MgYnkgSmltIERyaXNjb2xsXHJcblx0Ly8gaHR0cDovL3dlYmxvZ3MuamF2YS5uZXQvYmxvZy9kcmlzY29sbC9hcmNoaXZlLzIwMDkvMDkvMDgvZXZhbC1qYXZhc2NyaXB0LWdsb2JhbC1jb250ZXh0XHJcblx0Z2xvYmFsRXZhbDogZnVuY3Rpb24oIGRhdGEgKSB7XHJcblx0XHRpZiAoIGRhdGEgJiYgalF1ZXJ5LnRyaW0oIGRhdGEgKSApIHtcclxuXHRcdFx0Ly8gV2UgdXNlIGV4ZWNTY3JpcHQgb24gSW50ZXJuZXQgRXhwbG9yZXJcclxuXHRcdFx0Ly8gV2UgdXNlIGFuIGFub255bW91cyBmdW5jdGlvbiBzbyB0aGF0IGNvbnRleHQgaXMgd2luZG93XHJcblx0XHRcdC8vIHJhdGhlciB0aGFuIGpRdWVyeSBpbiBGaXJlZm94XHJcblx0XHRcdCggd2luZG93LmV4ZWNTY3JpcHQgfHwgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblx0XHRcdFx0d2luZG93WyBcImV2YWxcIiBdLmNhbGwoIHdpbmRvdywgZGF0YSApO1xyXG5cdFx0XHR9ICkoIGRhdGEgKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXHJcblx0Ly8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKCM5NTcyKVxyXG5cdGNhbWVsQ2FzZTogZnVuY3Rpb24oIHN0cmluZyApIHtcclxuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xyXG5cdH0sXHJcblxyXG5cdG5vZGVOYW1lOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdH0sXHJcblxyXG5cdC8vIGFyZ3MgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcclxuXHRlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjaywgYXJncyApIHtcclxuXHRcdHZhciB2YWx1ZSxcclxuXHRcdFx0aSA9IDAsXHJcblx0XHRcdGxlbmd0aCA9IG9iai5sZW5ndGgsXHJcblx0XHRcdGlzQXJyYXkgPSBpc0FycmF5bGlrZSggb2JqICk7XHJcblxyXG5cdFx0aWYgKCBhcmdzICkge1xyXG5cdFx0XHRpZiAoIGlzQXJyYXkgKSB7XHJcblx0XHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmFwcGx5KCBvYmpbIGkgXSwgYXJncyApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yICggaSBpbiBvYmogKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmFwcGx5KCBvYmpbIGkgXSwgYXJncyApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyBBIHNwZWNpYWwsIGZhc3QsIGNhc2UgZm9yIHRoZSBtb3N0IGNvbW1vbiB1c2Ugb2YgZWFjaFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCBpc0FycmF5ICkge1xyXG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9LFxyXG5cclxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMSwgSUU8OVxyXG5cdHRyaW06IGZ1bmN0aW9uKCB0ZXh0ICkge1xyXG5cdFx0cmV0dXJuIHRleHQgPT0gbnVsbCA/XHJcblx0XHRcdFwiXCIgOlxyXG5cdFx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiXCIgKTtcclxuXHR9LFxyXG5cclxuXHQvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XHJcblx0bWFrZUFycmF5OiBmdW5jdGlvbiggYXJyLCByZXN1bHRzICkge1xyXG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XHJcblxyXG5cdFx0aWYgKCBhcnIgIT0gbnVsbCApIHtcclxuXHRcdFx0aWYgKCBpc0FycmF5bGlrZSggT2JqZWN0KGFycikgKSApIHtcclxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcclxuXHRcdFx0XHRcdHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgP1xyXG5cdFx0XHRcdFx0WyBhcnIgXSA6IGFyclxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHVzaC5jYWxsKCByZXQsIGFyciApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9LFxyXG5cclxuXHRpbkFycmF5OiBmdW5jdGlvbiggZWxlbSwgYXJyLCBpICkge1xyXG5cdFx0dmFyIGxlbjtcclxuXHJcblx0XHRpZiAoIGFyciApIHtcclxuXHRcdFx0aWYgKCBpbmRleE9mICkge1xyXG5cdFx0XHRcdHJldHVybiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZW4gPSBhcnIubGVuZ3RoO1xyXG5cdFx0XHRpID0gaSA/IGkgPCAwID8gTWF0aC5tYXgoIDAsIGxlbiArIGkgKSA6IGkgOiAwO1xyXG5cclxuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XHJcblx0XHRcdFx0Ly8gU2tpcCBhY2Nlc3NpbmcgaW4gc3BhcnNlIGFycmF5c1xyXG5cdFx0XHRcdGlmICggaSBpbiBhcnIgJiYgYXJyWyBpIF0gPT09IGVsZW0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fSxcclxuXHJcblx0bWVyZ2U6IGZ1bmN0aW9uKCBmaXJzdCwgc2Vjb25kICkge1xyXG5cdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxyXG5cdFx0XHRqID0gMCxcclxuXHRcdFx0aSA9IGZpcnN0Lmxlbmd0aDtcclxuXHJcblx0XHR3aGlsZSAoIGogPCBsZW4gKSB7XHJcblx0XHRcdGZpcnN0WyBpKysgXSA9IHNlY29uZFsgaisrIF07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogSUU8OVxyXG5cdFx0Ly8gV29ya2Fyb3VuZCBjYXN0aW5nIG9mIC5sZW5ndGggdG8gTmFOIG9uIG90aGVyd2lzZSBhcnJheWxpa2Ugb2JqZWN0cyAoZS5nLiwgTm9kZUxpc3RzKVxyXG5cdFx0aWYgKCBsZW4gIT09IGxlbiApIHtcclxuXHRcdFx0d2hpbGUgKCBzZWNvbmRbal0gIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGorKyBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zmlyc3QubGVuZ3RoID0gaTtcclxuXHJcblx0XHRyZXR1cm4gZmlyc3Q7XHJcblx0fSxcclxuXHJcblx0Z3JlcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0ICkge1xyXG5cdFx0dmFyIGNhbGxiYWNrSW52ZXJzZSxcclxuXHRcdFx0bWF0Y2hlcyA9IFtdLFxyXG5cdFx0XHRpID0gMCxcclxuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxyXG5cdFx0XHRjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XHJcblxyXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xyXG5cdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cclxuXHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soIGVsZW1zWyBpIF0sIGkgKTtcclxuXHRcdFx0aWYgKCBjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0ICkge1xyXG5cdFx0XHRcdG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hdGNoZXM7XHJcblx0fSxcclxuXHJcblx0Ly8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XHJcblx0bWFwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBhcmcgKSB7XHJcblx0XHR2YXIgdmFsdWUsXHJcblx0XHRcdGkgPSAwLFxyXG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXHJcblx0XHRcdGlzQXJyYXkgPSBpc0FycmF5bGlrZSggZWxlbXMgKSxcclxuXHRcdFx0cmV0ID0gW107XHJcblxyXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcclxuXHRcdGlmICggaXNBcnJheSApIHtcclxuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XHJcblxyXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IgKCBpIGluIGVsZW1zICkge1xyXG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XHJcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXHJcblx0XHRyZXR1cm4gY29uY2F0LmFwcGx5KCBbXSwgcmV0ICk7XHJcblx0fSxcclxuXHJcblx0Ly8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXHJcblx0Z3VpZDogMSxcclxuXHJcblx0Ly8gQmluZCBhIGZ1bmN0aW9uIHRvIGEgY29udGV4dCwgb3B0aW9uYWxseSBwYXJ0aWFsbHkgYXBwbHlpbmcgYW55XHJcblx0Ly8gYXJndW1lbnRzLlxyXG5cdHByb3h5OiBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XHJcblx0XHR2YXIgYXJncywgcHJveHksIHRtcDtcclxuXHJcblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xyXG5cdFx0XHR0bXAgPSBmblsgY29udGV4dCBdO1xyXG5cdFx0XHRjb250ZXh0ID0gZm47XHJcblx0XHRcdGZuID0gdG1wO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFF1aWNrIGNoZWNrIHRvIGRldGVybWluZSBpZiB0YXJnZXQgaXMgY2FsbGFibGUsIGluIHRoZSBzcGVjXHJcblx0XHQvLyB0aGlzIHRocm93cyBhIFR5cGVFcnJvciwgYnV0IHdlIHdpbGwganVzdCByZXR1cm4gdW5kZWZpbmVkLlxyXG5cdFx0aWYgKCAhalF1ZXJ5LmlzRnVuY3Rpb24oIGZuICkgKSB7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU2ltdWxhdGVkIGJpbmRcclxuXHRcdGFyZ3MgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMsIDIgKTtcclxuXHRcdHByb3h5ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBTZXQgdGhlIGd1aWQgb2YgdW5pcXVlIGhhbmRsZXIgdG8gdGhlIHNhbWUgb2Ygb3JpZ2luYWwgaGFuZGxlciwgc28gaXQgY2FuIGJlIHJlbW92ZWRcclxuXHRcdHByb3h5Lmd1aWQgPSBmbi5ndWlkID0gZm4uZ3VpZCB8fCBqUXVlcnkuZ3VpZCsrO1xyXG5cclxuXHRcdHJldHVybiBwcm94eTtcclxuXHR9LFxyXG5cclxuXHRub3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICsoIG5ldyBEYXRlKCkgKTtcclxuXHR9LFxyXG5cclxuXHQvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcclxuXHQvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxyXG5cdHN1cHBvcnQ6IHN1cHBvcnRcclxufSk7XHJcblxyXG4vLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcclxualF1ZXJ5LmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbihpLCBuYW1lKSB7XHJcblx0Y2xhc3MydHlwZVsgXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiIF0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaXNBcnJheWxpa2UoIG9iaiApIHtcclxuXHR2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aCxcclxuXHRcdHR5cGUgPSBqUXVlcnkudHlwZSggb2JqICk7XHJcblxyXG5cdGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGpRdWVyeS5pc1dpbmRvdyggb2JqICkgKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoIG9iai5ub2RlVHlwZSA9PT0gMSAmJiBsZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0eXBlID09PSBcImFycmF5XCIgfHwgbGVuZ3RoID09PSAwIHx8XHJcblx0XHR0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKCBsZW5ndGggLSAxICkgaW4gb2JqO1xyXG59XHJcbnZhciBTaXp6bGUgPVxyXG4vKiFcclxuICogU2l6emxlIENTUyBTZWxlY3RvciBFbmdpbmUgdjEuMTAuMTlcclxuICogaHR0cDovL3NpenpsZWpzLmNvbS9cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTMgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxyXG4gKlxyXG4gKiBEYXRlOiAyMDE0LTA0LTE4XHJcbiAqL1xyXG4oZnVuY3Rpb24oIHdpbmRvdyApIHtcclxuXHJcbnZhciBpLFxyXG5cdHN1cHBvcnQsXHJcblx0RXhwcixcclxuXHRnZXRUZXh0LFxyXG5cdGlzWE1MLFxyXG5cdHRva2VuaXplLFxyXG5cdGNvbXBpbGUsXHJcblx0c2VsZWN0LFxyXG5cdG91dGVybW9zdENvbnRleHQsXHJcblx0c29ydElucHV0LFxyXG5cdGhhc0R1cGxpY2F0ZSxcclxuXHJcblx0Ly8gTG9jYWwgZG9jdW1lbnQgdmFyc1xyXG5cdHNldERvY3VtZW50LFxyXG5cdGRvY3VtZW50LFxyXG5cdGRvY0VsZW0sXHJcblx0ZG9jdW1lbnRJc0hUTUwsXHJcblx0cmJ1Z2d5UVNBLFxyXG5cdHJidWdneU1hdGNoZXMsXHJcblx0bWF0Y2hlcyxcclxuXHRjb250YWlucyxcclxuXHJcblx0Ly8gSW5zdGFuY2Utc3BlY2lmaWMgZGF0YVxyXG5cdGV4cGFuZG8gPSBcInNpenpsZVwiICsgLShuZXcgRGF0ZSgpKSxcclxuXHRwcmVmZXJyZWREb2MgPSB3aW5kb3cuZG9jdW1lbnQsXHJcblx0ZGlycnVucyA9IDAsXHJcblx0ZG9uZSA9IDAsXHJcblx0Y2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXHJcblx0dG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXHJcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXHJcblx0c29ydE9yZGVyID0gZnVuY3Rpb24oIGEsIGIgKSB7XHJcblx0XHRpZiAoIGEgPT09IGIgKSB7XHJcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9LFxyXG5cclxuXHQvLyBHZW5lcmFsLXB1cnBvc2UgY29uc3RhbnRzXHJcblx0c3RydW5kZWZpbmVkID0gdHlwZW9mIHVuZGVmaW5lZCxcclxuXHRNQVhfTkVHQVRJVkUgPSAxIDw8IDMxLFxyXG5cclxuXHQvLyBJbnN0YW5jZSBtZXRob2RzXHJcblx0aGFzT3duID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSxcclxuXHRhcnIgPSBbXSxcclxuXHRwb3AgPSBhcnIucG9wLFxyXG5cdHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXHJcblx0cHVzaCA9IGFyci5wdXNoLFxyXG5cdHNsaWNlID0gYXJyLnNsaWNlLFxyXG5cdC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBpZiB3ZSBjYW4ndCB1c2UgYSBuYXRpdmUgb25lXHJcblx0aW5kZXhPZiA9IGFyci5pbmRleE9mIHx8IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0dmFyIGkgPSAwLFxyXG5cdFx0XHRsZW4gPSB0aGlzLmxlbmd0aDtcclxuXHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0XHRpZiAoIHRoaXNbaV0gPT09IGVsZW0gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAtMTtcclxuXHR9LFxyXG5cclxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcclxuXHJcblx0Ly8gUmVndWxhciBleHByZXNzaW9uc1xyXG5cclxuXHQvLyBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2VcclxuXHR3aGl0ZXNwYWNlID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxyXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc3ludGF4LyNjaGFyYWN0ZXJzXHJcblx0Y2hhcmFjdGVyRW5jb2RpbmcgPSBcIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLFxyXG5cclxuXHQvLyBMb29zZWx5IG1vZGVsZWQgb24gQ1NTIGlkZW50aWZpZXIgY2hhcmFjdGVyc1xyXG5cdC8vIEFuIHVucXVvdGVkIHZhbHVlIHNob3VsZCBiZSBhIENTUyBpZGVudGlmaWVyIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXHJcblx0Ly8gUHJvcGVyIHN5bnRheDogaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXHJcblx0aWRlbnRpZmllciA9IGNoYXJhY3RlckVuY29kaW5nLnJlcGxhY2UoIFwid1wiLCBcIncjXCIgKSxcclxuXHJcblx0Ly8gQXR0cmlidXRlIHNlbGVjdG9yczogaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXHJcblx0YXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBjaGFyYWN0ZXJFbmNvZGluZyArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXHJcblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxyXG5cdFx0XCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICtcclxuXHRcdC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XSBvciBzdHJpbmdzIFtjYXB0dXJlIDMgb3IgY2FwdHVyZSA0XVwiXHJcblx0XHRcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArXHJcblx0XHRcIipcXFxcXVwiLFxyXG5cclxuXHRwc2V1ZG9zID0gXCI6KFwiICsgY2hhcmFjdGVyRW5jb2RpbmcgKyBcIikoPzpcXFxcKChcIiArXHJcblx0XHQvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxyXG5cdFx0Ly8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXHJcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcclxuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxyXG5cdFx0XCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIgKyBhdHRyaWJ1dGVzICsgXCIpKil8XCIgK1xyXG5cdFx0Ly8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxyXG5cdFx0XCIuKlwiICtcclxuXHRcdFwiKVxcXFwpfClcIixcclxuXHJcblx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxyXG5cdHJ0cmltID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIiwgXCJnXCIgKSxcclxuXHJcblx0cmNvbW1hID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXHJcblx0cmNvbWJpbmF0b3JzID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXHJcblxyXG5cdHJhdHRyaWJ1dGVRdW90ZXMgPSBuZXcgUmVnRXhwKCBcIj1cIiArIHdoaXRlc3BhY2UgKyBcIiooW15cXFxcXSdcXFwiXSo/KVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFxdXCIsIFwiZ1wiICksXHJcblxyXG5cdHJwc2V1ZG8gPSBuZXcgUmVnRXhwKCBwc2V1ZG9zICksXHJcblx0cmlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKCBcIl5cIiArIGlkZW50aWZpZXIgKyBcIiRcIiApLFxyXG5cclxuXHRtYXRjaEV4cHIgPSB7XHJcblx0XHRcIklEXCI6IG5ldyBSZWdFeHAoIFwiXiMoXCIgKyBjaGFyYWN0ZXJFbmNvZGluZyArIFwiKVwiICksXHJcblx0XHRcIkNMQVNTXCI6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgY2hhcmFjdGVyRW5jb2RpbmcgKyBcIilcIiApLFxyXG5cdFx0XCJUQUdcIjogbmV3IFJlZ0V4cCggXCJeKFwiICsgY2hhcmFjdGVyRW5jb2RpbmcucmVwbGFjZSggXCJ3XCIsIFwidypcIiApICsgXCIpXCIgKSxcclxuXHRcdFwiQVRUUlwiOiBuZXcgUmVnRXhwKCBcIl5cIiArIGF0dHJpYnV0ZXMgKSxcclxuXHRcdFwiUFNFVURPXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxyXG5cdFx0XCJDSElMRFwiOiBuZXcgUmVnRXhwKCBcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICtcclxuXHRcdFx0XCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIiArIHdoaXRlc3BhY2UgKyBcIiooPzooWystXXwpXCIgKyB3aGl0ZXNwYWNlICtcclxuXHRcdFx0XCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiICksXHJcblx0XHRcImJvb2xcIjogbmV3IFJlZ0V4cCggXCJeKD86XCIgKyBib29sZWFucyArIFwiKSRcIiwgXCJpXCIgKSxcclxuXHRcdC8vIEZvciB1c2UgaW4gbGlicmFyaWVzIGltcGxlbWVudGluZyAuaXMoKVxyXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxyXG5cdFx0XCJuZWVkc0NvbnRleHRcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICtcclxuXHRcdFx0d2hpdGVzcGFjZSArIFwiKigoPzotXFxcXGQpP1xcXFxkKilcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpKD89W14tXXwkKVwiLCBcImlcIiApXHJcblx0fSxcclxuXHJcblx0cmlucHV0cyA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXHJcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcclxuXHJcblx0cm5hdGl2ZSA9IC9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sXHJcblxyXG5cdC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xyXG5cdHJxdWlja0V4cHIgPSAvXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxcclxuXHJcblx0cnNpYmxpbmcgPSAvWyt+XS8sXHJcblx0cmVzY2FwZSA9IC8nfFxcXFwvZyxcclxuXHJcblx0Ly8gQ1NTIGVzY2FwZXMgaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI2VzY2FwZWQtY2hhcmFjdGVyc1xyXG5cdHJ1bmVzY2FwZSA9IG5ldyBSZWdFeHAoIFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIgKyB3aGl0ZXNwYWNlICsgXCI/fChcIiArIHdoaXRlc3BhY2UgKyBcIil8LilcIiwgXCJpZ1wiICksXHJcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlICkge1xyXG5cdFx0dmFyIGhpZ2ggPSBcIjB4XCIgKyBlc2NhcGVkIC0gMHgxMDAwMDtcclxuXHRcdC8vIE5hTiBtZWFucyBub24tY29kZXBvaW50XHJcblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI0XHJcblx0XHQvLyBXb3JrYXJvdW5kIGVycm9uZW91cyBudW1lcmljIGludGVycHJldGF0aW9uIG9mICtcIjB4XCJcclxuXHRcdHJldHVybiBoaWdoICE9PSBoaWdoIHx8IGVzY2FwZWRXaGl0ZXNwYWNlID9cclxuXHRcdFx0ZXNjYXBlZCA6XHJcblx0XHRcdGhpZ2ggPCAwID9cclxuXHRcdFx0XHQvLyBCTVAgY29kZXBvaW50XHJcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XHJcblx0XHRcdFx0Ly8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXHJcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCA+PiAxMCB8IDB4RDgwMCwgaGlnaCAmIDB4M0ZGIHwgMHhEQzAwICk7XHJcblx0fTtcclxuXHJcbi8vIE9wdGltaXplIGZvciBwdXNoLmFwcGx5KCBfLCBOb2RlTGlzdCApXHJcbnRyeSB7XHJcblx0cHVzaC5hcHBseShcclxuXHRcdChhcnIgPSBzbGljZS5jYWxsKCBwcmVmZXJyZWREb2MuY2hpbGROb2RlcyApKSxcclxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXHJcblx0KTtcclxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMFxyXG5cdC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcclxuXHRhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xyXG59IGNhdGNoICggZSApIHtcclxuXHRwdXNoID0geyBhcHBseTogYXJyLmxlbmd0aCA/XHJcblxyXG5cdFx0Ly8gTGV2ZXJhZ2Ugc2xpY2UgaWYgcG9zc2libGVcclxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcclxuXHRcdFx0cHVzaF9uYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbChlbHMpICk7XHJcblx0XHR9IDpcclxuXHJcblx0XHQvLyBTdXBwb3J0OiBJRTw5XHJcblx0XHQvLyBPdGhlcndpc2UgYXBwZW5kIGRpcmVjdGx5XHJcblx0XHRmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XHJcblx0XHRcdHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHRcdFx0Ly8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXHJcblx0XHRcdHdoaWxlICggKHRhcmdldFtqKytdID0gZWxzW2krK10pICkge31cclxuXHRcdFx0dGFyZ2V0Lmxlbmd0aCA9IGogLSAxO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XHJcblx0dmFyIG1hdGNoLCBlbGVtLCBtLCBub2RlVHlwZSxcclxuXHRcdC8vIFFTQSB2YXJzXHJcblx0XHRpLCBncm91cHMsIG9sZCwgbmlkLCBuZXdDb250ZXh0LCBuZXdTZWxlY3RvcjtcclxuXHJcblx0aWYgKCAoIGNvbnRleHQgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IHByZWZlcnJlZERvYyApICE9PSBkb2N1bWVudCApIHtcclxuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XHJcblx0fVxyXG5cclxuXHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcclxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcclxuXHJcblx0aWYgKCAhc2VsZWN0b3IgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0fVxyXG5cclxuXHRpZiAoIChub2RlVHlwZSA9IGNvbnRleHQubm9kZVR5cGUpICE9PSAxICYmIG5vZGVUeXBlICE9PSA5ICkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0aWYgKCBkb2N1bWVudElzSFRNTCAmJiAhc2VlZCApIHtcclxuXHJcblx0XHQvLyBTaG9ydGN1dHNcclxuXHRcdGlmICggKG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApKSApIHtcclxuXHRcdFx0Ly8gU3BlZWQtdXA6IFNpenpsZShcIiNJRFwiKVxyXG5cdFx0XHRpZiAoIChtID0gbWF0Y2hbMV0pICkge1xyXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDkgKSB7XHJcblx0XHRcdFx0XHRlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApO1xyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgcGFyZW50Tm9kZSB0byBjYXRjaCB3aGVuIEJsYWNrYmVycnkgNC42IHJldHVybnNcclxuXHRcdFx0XHRcdC8vIG5vZGVzIHRoYXQgYXJlIG5vIGxvbmdlciBpbiB0aGUgZG9jdW1lbnQgKGpRdWVyeSAjNjk2MylcclxuXHRcdFx0XHRcdGlmICggZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdFx0XHRcdC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBJRSwgT3BlcmEsIGFuZCBXZWJraXQgcmV0dXJuIGl0ZW1zXHJcblx0XHRcdFx0XHRcdC8vIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxyXG5cdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBDb250ZXh0IGlzIG5vdCBhIGRvY3VtZW50XHJcblx0XHRcdFx0XHRpZiAoIGNvbnRleHQub3duZXJEb2N1bWVudCAmJiAoZWxlbSA9IGNvbnRleHQub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbSApKSAmJlxyXG5cdFx0XHRcdFx0XHRjb250YWlucyggY29udGV4dCwgZWxlbSApICYmIGVsZW0uaWQgPT09IG0gKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBTcGVlZC11cDogU2l6emxlKFwiVEFHXCIpXHJcblx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWzJdICkge1xyXG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcclxuXHJcblx0XHRcdC8vIFNwZWVkLXVwOiBTaXp6bGUoXCIuQ0xBU1NcIilcclxuXHRcdFx0fSBlbHNlIGlmICggKG0gPSBtYXRjaFszXSkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApIHtcclxuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHRzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gUVNBIHBhdGhcclxuXHRcdGlmICggc3VwcG9ydC5xc2EgJiYgKCFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBzZWxlY3RvciApKSApIHtcclxuXHRcdFx0bmlkID0gb2xkID0gZXhwYW5kbztcclxuXHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XHJcblx0XHRcdG5ld1NlbGVjdG9yID0gbm9kZVR5cGUgPT09IDkgJiYgc2VsZWN0b3I7XHJcblxyXG5cdFx0XHQvLyBxU0Egd29ya3Mgc3RyYW5nZWx5IG9uIEVsZW1lbnQtcm9vdGVkIHF1ZXJpZXNcclxuXHRcdFx0Ly8gV2UgY2FuIHdvcmsgYXJvdW5kIHRoaXMgYnkgc3BlY2lmeWluZyBhbiBleHRyYSBJRCBvbiB0aGUgcm9vdFxyXG5cdFx0XHQvLyBhbmQgd29ya2luZyB1cCBmcm9tIHRoZXJlIChUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhlIHRlY2huaXF1ZSlcclxuXHRcdFx0Ly8gSUUgOCBkb2Vzbid0IHdvcmsgb24gb2JqZWN0IGVsZW1lbnRzXHJcblx0XHRcdGlmICggbm9kZVR5cGUgPT09IDEgJiYgY29udGV4dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcIm9iamVjdFwiICkge1xyXG5cdFx0XHRcdGdyb3VwcyA9IHRva2VuaXplKCBzZWxlY3RvciApO1xyXG5cclxuXHRcdFx0XHRpZiAoIChvbGQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZShcImlkXCIpKSApIHtcclxuXHRcdFx0XHRcdG5pZCA9IG9sZC5yZXBsYWNlKCByZXNjYXBlLCBcIlxcXFwkJlwiICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsIG5pZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuaWQgPSBcIltpZD0nXCIgKyBuaWQgKyBcIiddIFwiO1xyXG5cclxuXHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcclxuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0XHRcdGdyb3Vwc1tpXSA9IG5pZCArIHRvU2VsZWN0b3IoIGdyb3Vwc1tpXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuZXdDb250ZXh0ID0gcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dDtcclxuXHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKFwiLFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBuZXdTZWxlY3RvciApIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcclxuXHRcdFx0XHRcdFx0bmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCBuZXdTZWxlY3RvciApXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0XHRcdFx0fSBjYXRjaChxc2FFcnJvcikge1xyXG5cdFx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0XHRpZiAoICFvbGQgKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBBbGwgb3RoZXJzXHJcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUga2V5LXZhbHVlIGNhY2hlcyBvZiBsaW1pdGVkIHNpemVcclxuICogQHJldHVybnMge0Z1bmN0aW9uKHN0cmluZywgT2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxyXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcclxuICpcdGRlbGV0aW5nIHRoZSBvbGRlc3QgZW50cnlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xyXG5cdHZhciBrZXlzID0gW107XHJcblxyXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xyXG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1NylcclxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcclxuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXHJcblx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5cy5zaGlmdCgpIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUpO1xyXG5cdH1cclxuXHRyZXR1cm4gY2FjaGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGEgZnVuY3Rpb24gZm9yIHNwZWNpYWwgdXNlIGJ5IFNpenpsZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFya1xyXG4gKi9cclxuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcclxuXHRmblsgZXhwYW5kbyBdID0gdHJ1ZTtcclxuXHRyZXR1cm4gZm47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZGl2IGFuZCBleHBlY3RzIGEgYm9vbGVhbiByZXN1bHRcclxuICovXHJcbmZ1bmN0aW9uIGFzc2VydCggZm4gKSB7XHJcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gISFmbiggZGl2ICk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcclxuXHRcdGlmICggZGl2LnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBkaXYgKTtcclxuXHRcdH1cclxuXHRcdC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXHJcblx0XHRkaXYgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcclxuICogQHBhcmFtIHtTdHJpbmd9IGF0dHJzIFBpcGUtc2VwYXJhdGVkIGxpc3Qgb2YgYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcclxuICovXHJcbmZ1bmN0aW9uIGFkZEhhbmRsZSggYXR0cnMsIGhhbmRsZXIgKSB7XHJcblx0dmFyIGFyciA9IGF0dHJzLnNwbGl0KFwifFwiKSxcclxuXHRcdGkgPSBhdHRycy5sZW5ndGg7XHJcblxyXG5cdHdoaWxlICggaS0tICkge1xyXG5cdFx0RXhwci5hdHRySGFuZGxlWyBhcnJbaV0gXSA9IGhhbmRsZXI7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcclxuICogQHBhcmFtIHtFbGVtZW50fSBiXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxyXG4gKi9cclxuZnVuY3Rpb24gc2libGluZ0NoZWNrKCBhLCBiICkge1xyXG5cdHZhciBjdXIgPSBiICYmIGEsXHJcblx0XHRkaWZmID0gY3VyICYmIGEubm9kZVR5cGUgPT09IDEgJiYgYi5ub2RlVHlwZSA9PT0gMSAmJlxyXG5cdFx0XHQoIH5iLnNvdXJjZUluZGV4IHx8IE1BWF9ORUdBVElWRSApIC1cclxuXHRcdFx0KCB+YS5zb3VyY2VJbmRleCB8fCBNQVhfTkVHQVRJVkUgKTtcclxuXHJcblx0Ly8gVXNlIElFIHNvdXJjZUluZGV4IGlmIGF2YWlsYWJsZSBvbiBib3RoIG5vZGVzXHJcblx0aWYgKCBkaWZmICkge1xyXG5cdFx0cmV0dXJuIGRpZmY7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayBpZiBiIGZvbGxvd3MgYVxyXG5cdGlmICggY3VyICkge1xyXG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLm5leHRTaWJsaW5nKSApIHtcclxuXHRcdFx0aWYgKCBjdXIgPT09IGIgKSB7XHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYSA/IDEgOiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgaW5wdXQgdHlwZXNcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UHNldWRvKCB0eXBlICkge1xyXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0cmV0dXJuIG5hbWUgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKCB0eXBlICkge1xyXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0cmV0dXJuIChuYW1lID09PSBcImlucHV0XCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIikgJiYgZWxlbS50eXBlID09PSB0eXBlO1xyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIHBvc2l0aW9uYWxzXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmbiApIHtcclxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBhcmd1bWVudCApIHtcclxuXHRcdGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xyXG5cdFx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcclxuXHRcdFx0dmFyIGosXHJcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcclxuXHRcdFx0XHRpID0gbWF0Y2hJbmRleGVzLmxlbmd0aDtcclxuXHJcblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xyXG5cdFx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0XHRpZiAoIHNlZWRbIChqID0gbWF0Y2hJbmRleGVzW2ldKSBdICkge1xyXG5cdFx0XHRcdFx0c2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XHJcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gdGVzdENvbnRleHQoIGNvbnRleHQgKSB7XHJcblx0cmV0dXJuIGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IHN0cnVuZGVmaW5lZCAmJiBjb250ZXh0O1xyXG59XHJcblxyXG4vLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxyXG5zdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xyXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBlbGVtIEFuIGVsZW1lbnQgb3IgYSBkb2N1bWVudFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZmYgZWxlbSBpcyBhIG5vbi1IVE1MIFhNTCBub2RlXHJcbiAqL1xyXG5pc1hNTCA9IFNpenpsZS5pc1hNTCA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdC8vIGRvY3VtZW50RWxlbWVudCBpcyB2ZXJpZmllZCBmb3IgY2FzZXMgd2hlcmUgaXQgZG9lc24ndCB5ZXQgZXhpc3RcclxuXHQvLyAoc3VjaCBhcyBsb2FkaW5nIGlmcmFtZXMgaW4gSUUgLSAjNDgzMylcclxuXHR2YXIgZG9jdW1lbnRFbGVtZW50ID0gZWxlbSAmJiAoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pLmRvY3VtZW50RWxlbWVudDtcclxuXHRyZXR1cm4gZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIiA6IGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbZG9jXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XHJcbiAqL1xyXG5zZXREb2N1bWVudCA9IFNpenpsZS5zZXREb2N1bWVudCA9IGZ1bmN0aW9uKCBub2RlICkge1xyXG5cdHZhciBoYXNDb21wYXJlLFxyXG5cdFx0ZG9jID0gbm9kZSA/IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlIDogcHJlZmVycmVkRG9jLFxyXG5cdFx0cGFyZW50ID0gZG9jLmRlZmF1bHRWaWV3O1xyXG5cclxuXHQvLyBJZiBubyBkb2N1bWVudCBhbmQgZG9jdW1lbnRFbGVtZW50IGlzIGF2YWlsYWJsZSwgcmV0dXJuXHJcblx0aWYgKCBkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCApIHtcclxuXHRcdHJldHVybiBkb2N1bWVudDtcclxuXHR9XHJcblxyXG5cdC8vIFNldCBvdXIgZG9jdW1lbnRcclxuXHRkb2N1bWVudCA9IGRvYztcclxuXHRkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0Ly8gU3VwcG9ydCB0ZXN0c1xyXG5cdGRvY3VtZW50SXNIVE1MID0gIWlzWE1MKCBkb2MgKTtcclxuXHJcblx0Ly8gU3VwcG9ydDogSUU+OFxyXG5cdC8vIElmIGlmcmFtZSBkb2N1bWVudCBpcyBhc3NpZ25lZCB0byBcImRvY3VtZW50XCIgdmFyaWFibGUgYW5kIGlmIGlmcmFtZSBoYXMgYmVlbiByZWxvYWRlZCxcclxuXHQvLyBJRSB3aWxsIHRocm93IFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIGFjY2Vzc2luZyBcImRvY3VtZW50XCIgdmFyaWFibGUsIHNlZSBqUXVlcnkgIzEzOTM2XHJcblx0Ly8gSUU2LTggZG8gbm90IHN1cHBvcnQgdGhlIGRlZmF1bHRWaWV3IHByb3BlcnR5IHNvIHBhcmVudCB3aWxsIGJlIHVuZGVmaW5lZFxyXG5cdGlmICggcGFyZW50ICYmIHBhcmVudCAhPT0gcGFyZW50LnRvcCApIHtcclxuXHRcdC8vIElFMTEgZG9lcyBub3QgaGF2ZSBhdHRhY2hFdmVudCwgc28gYWxsIG11c3Qgc3VmZmVyXHJcblx0XHRpZiAoIHBhcmVudC5hZGRFdmVudExpc3RlbmVyICkge1xyXG5cdFx0XHRwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJ1bmxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2V0RG9jdW1lbnQoKTtcclxuXHRcdFx0fSwgZmFsc2UgKTtcclxuXHRcdH0gZWxzZSBpZiAoIHBhcmVudC5hdHRhY2hFdmVudCApIHtcclxuXHRcdFx0cGFyZW50LmF0dGFjaEV2ZW50KCBcIm9udW5sb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNldERvY3VtZW50KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogQXR0cmlidXRlc1xyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0Ly8gU3VwcG9ydDogSUU8OFxyXG5cdC8vIFZlcmlmeSB0aGF0IGdldEF0dHJpYnV0ZSByZWFsbHkgcmV0dXJucyBhdHRyaWJ1dGVzIGFuZCBub3QgcHJvcGVydGllcyAoZXhjZXB0aW5nIElFOCBib29sZWFucylcclxuXHRzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcclxuXHRcdGRpdi5jbGFzc05hbWUgPSBcImlcIjtcclxuXHRcdHJldHVybiAhZGl2LmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKTtcclxuXHR9KTtcclxuXHJcblx0LyogZ2V0RWxlbWVudChzKUJ5KlxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xyXG5cdHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCggZG9jLmNyZWF0ZUNvbW1lbnQoXCJcIikgKTtcclxuXHRcdHJldHVybiAhZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XHJcblx0fSk7XHJcblxyXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRzQnlDbGFzc05hbWUgY2FuIGJlIHRydXN0ZWRcclxuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoIGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICkgJiYgYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdhJz48L2Rpdj48ZGl2IGNsYXNzPSdhIGknPjwvZGl2PlwiO1xyXG5cclxuXHRcdC8vIFN1cHBvcnQ6IFNhZmFyaTw0XHJcblx0XHQvLyBDYXRjaCBjbGFzcyBvdmVyLWNhY2hpbmdcclxuXHRcdGRpdi5maXJzdENoaWxkLmNsYXNzTmFtZSA9IFwiaVwiO1xyXG5cdFx0Ly8gU3VwcG9ydDogT3BlcmE8MTBcclxuXHRcdC8vIENhdGNoIGdFQkNOIGZhaWx1cmUgdG8gZmluZCBub24tbGVhZGluZyBjbGFzc2VzXHJcblx0XHRyZXR1cm4gZGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpXCIpLmxlbmd0aCA9PT0gMjtcclxuXHR9KTtcclxuXHJcblx0Ly8gU3VwcG9ydDogSUU8MTBcclxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcclxuXHQvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtYXRpY2FsbHktc2V0IG5hbWVzLFxyXG5cdC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxyXG5cdHN1cHBvcnQuZ2V0QnlJZCA9IGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xyXG5cdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZGl2ICkuaWQgPSBleHBhbmRvO1xyXG5cdFx0cmV0dXJuICFkb2MuZ2V0RWxlbWVudHNCeU5hbWUgfHwgIWRvYy5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcclxuXHR9KTtcclxuXHJcblx0Ly8gSUQgZmluZCBhbmQgZmlsdGVyXHJcblx0aWYgKCBzdXBwb3J0LmdldEJ5SWQgKSB7XHJcblx0XHRFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcclxuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gc3RydW5kZWZpbmVkICYmIGRvY3VtZW50SXNIVE1MICkge1xyXG5cdFx0XHRcdHZhciBtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcclxuXHRcdFx0XHQvLyBDaGVjayBwYXJlbnROb2RlIHRvIGNhdGNoIHdoZW4gQmxhY2tiZXJyeSA0LjYgcmV0dXJuc1xyXG5cdFx0XHRcdC8vIG5vZGVzIHRoYXQgYXJlIG5vIGxvbmdlciBpbiB0aGUgZG9jdW1lbnQgIzY5NjNcclxuXHRcdFx0XHRyZXR1cm4gbSAmJiBtLnBhcmVudE5vZGUgPyBbIG0gXSA6IFtdO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCApIHtcclxuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gYXR0cklkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gU3VwcG9ydDogSUU2LzdcclxuXHRcdC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcclxuXHRcdGRlbGV0ZSBFeHByLmZpbmRbXCJJRFwiXTtcclxuXHJcblx0XHRFeHByLmZpbHRlcltcIklEXCJdID0gIGZ1bmN0aW9uKCBpZCApIHtcclxuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0XHR2YXIgbm9kZSA9IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUgIT09IHN0cnVuZGVmaW5lZCAmJiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlID09PSBhdHRySWQ7XHJcblx0XHRcdH07XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Ly8gVGFnXHJcblx0RXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/XHJcblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xyXG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBzdHJ1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xyXG5cdFx0XHR9XHJcblx0XHR9IDpcclxuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XHJcblx0XHRcdHZhciBlbGVtLFxyXG5cdFx0XHRcdHRtcCA9IFtdLFxyXG5cdFx0XHRcdGkgPSAwLFxyXG5cdFx0XHRcdHJlc3VsdHMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcclxuXHJcblx0XHRcdC8vIEZpbHRlciBvdXQgcG9zc2libGUgY29tbWVudHNcclxuXHRcdFx0aWYgKCB0YWcgPT09IFwiKlwiICkge1xyXG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSByZXN1bHRzW2krK10pICkge1xyXG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xyXG5cdFx0XHRcdFx0XHR0bXAucHVzaCggZWxlbSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHRtcDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcclxuXHRcdH07XHJcblxyXG5cdC8vIENsYXNzXHJcblx0RXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24oIGNsYXNzTmFtZSwgY29udGV4dCApIHtcclxuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gc3RydW5kZWZpbmVkICYmIGRvY3VtZW50SXNIVE1MICkge1xyXG5cdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBjbGFzc05hbWUgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XHJcblxyXG5cdC8vIG1hdGNoZXNTZWxlY3Rvcig6YWN0aXZlKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoSUU5L09wZXJhIDExLjUpXHJcblx0cmJ1Z2d5TWF0Y2hlcyA9IFtdO1xyXG5cclxuXHQvLyBxU2EoOmZvY3VzKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoQ2hyb21lIDIxKVxyXG5cdC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxyXG5cdC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcclxuXHQvLyBTbywgd2UgYWxsb3cgOmZvY3VzIHRvIHBhc3MgdGhyb3VnaCBRU0EgYWxsIHRoZSB0aW1lIHRvIGF2b2lkIHRoZSBJRSBlcnJvclxyXG5cdC8vIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxyXG5cdHJidWdneVFTQSA9IFtdO1xyXG5cclxuXHRpZiAoIChzdXBwb3J0LnFzYSA9IHJuYXRpdmUudGVzdCggZG9jLnF1ZXJ5U2VsZWN0b3JBbGwgKSkgKSB7XHJcblx0XHQvLyBCdWlsZCBRU0EgcmVnZXhcclxuXHRcdC8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcclxuXHRcdGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xyXG5cdFx0XHQvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXHJcblx0XHRcdC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxyXG5cdFx0XHQvLyBzZXR0aW5nIGEgYm9vbGVhbiBjb250ZW50IGF0dHJpYnV0ZSxcclxuXHRcdFx0Ly8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcclxuXHRcdFx0Ly8gaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzNTlcclxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IFwiPHNlbGVjdCBtc2FsbG93Y2xpcD0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xyXG5cclxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4LCBPcGVyYSAxMS0xMi4xNlxyXG5cdFx0XHQvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XHJcblx0XHRcdC8vIFRoZSB0ZXN0IGF0dHJpYnV0ZSBtdXN0IGJlIHVua25vd24gaW4gT3BlcmEgYnV0IFwic2FmZVwiIGZvciBXaW5SVFxyXG5cdFx0XHQvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxyXG5cdFx0XHRpZiAoIGRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djbGlwXj0nJ11cIikubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlsqXiRdPVwiICsgd2hpdGVzcGFjZSArIFwiKig/OicnfFxcXCJcXFwiKVwiICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxyXG5cdFx0XHQvLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5XHJcblx0XHRcdGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGggKSB7XHJcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooPzp2YWx1ZXxcIiArIGJvb2xlYW5zICsgXCIpXCIgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gV2Via2l0L09wZXJhIC0gOmNoZWNrZWQgc2hvdWxkIHJldHVybiBzZWxlY3RlZCBvcHRpb24gZWxlbWVudHNcclxuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcclxuXHRcdFx0Ly8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcclxuXHRcdFx0aWYgKCAhZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGggKSB7XHJcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCI6Y2hlY2tlZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XHJcblx0XHRcdC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xyXG5cdFx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcclxuXHRcdFx0dmFyIGlucHV0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJoaWRkZW5cIiApO1xyXG5cdFx0XHRkaXYuYXBwZW5kQ2hpbGQoIGlucHV0ICkuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJEXCIgKTtcclxuXHJcblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxyXG5cdFx0XHQvLyBFbmZvcmNlIGNhc2Utc2Vuc2l0aXZpdHkgb2YgbmFtZSBhdHRyaWJ1dGVcclxuXHRcdFx0aWYgKCBkaXYucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCApIHtcclxuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXHJcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXHJcblx0XHRcdGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3NcclxuXHRcdFx0ZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpO1xyXG5cdFx0XHRyYnVnZ3lRU0EucHVzaChcIiwuKjpcIik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICggKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yID0gcm5hdGl2ZS50ZXN0KCAobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fFxyXG5cdFx0ZG9jRWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdGRvY0VsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XHJcblx0XHRkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdGRvY0VsZW0ubXNNYXRjaGVzU2VsZWN0b3IpICkpICkge1xyXG5cclxuXHRcdGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xyXG5cdFx0XHQvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3JcclxuXHRcdFx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcclxuXHRcdFx0c3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCA9IG1hdGNoZXMuY2FsbCggZGl2LCBcImRpdlwiICk7XHJcblxyXG5cdFx0XHQvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXHJcblx0XHRcdC8vIEdlY2tvIGRvZXMgbm90IGVycm9yLCByZXR1cm5zIGZhbHNlIGluc3RlYWRcclxuXHRcdFx0bWF0Y2hlcy5jYWxsKCBkaXYsIFwiW3MhPScnXTp4XCIgKTtcclxuXHRcdFx0cmJ1Z2d5TWF0Y2hlcy5wdXNoKCBcIiE9XCIsIHBzZXVkb3MgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbihcInxcIikgKTtcclxuXHRyYnVnZ3lNYXRjaGVzID0gcmJ1Z2d5TWF0Y2hlcy5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5TWF0Y2hlcy5qb2luKFwifFwiKSApO1xyXG5cclxuXHQvKiBDb250YWluc1xyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHRoYXNDb21wYXJlID0gcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICk7XHJcblxyXG5cdC8vIEVsZW1lbnQgY29udGFpbnMgYW5vdGhlclxyXG5cdC8vIFB1cnBvc2VmdWxseSBkb2VzIG5vdCBpbXBsZW1lbnQgaW5jbHVzaXZlIGRlc2NlbmRlbnRcclxuXHQvLyBBcyBpbiwgYW4gZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGl0c2VsZlxyXG5cdGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29udGFpbnMgKSA/XHJcblx0XHRmdW5jdGlvbiggYSwgYiApIHtcclxuXHRcdFx0dmFyIGFkb3duID0gYS5ub2RlVHlwZSA9PT0gOSA/IGEuZG9jdW1lbnRFbGVtZW50IDogYSxcclxuXHRcdFx0XHRidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcclxuXHRcdFx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXHJcblx0XHRcdFx0YWRvd24uY29udGFpbnMgP1xyXG5cdFx0XHRcdFx0YWRvd24uY29udGFpbnMoIGJ1cCApIDpcclxuXHRcdFx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYnVwICkgJiAxNlxyXG5cdFx0XHQpKTtcclxuXHRcdH0gOlxyXG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XHJcblx0XHRcdGlmICggYiApIHtcclxuXHRcdFx0XHR3aGlsZSAoIChiID0gYi5wYXJlbnROb2RlKSApIHtcclxuXHRcdFx0XHRcdGlmICggYiA9PT0gYSApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdC8qIFNvcnRpbmdcclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcclxuXHRzb3J0T3JkZXIgPSBoYXNDb21wYXJlID9cclxuXHRmdW5jdGlvbiggYSwgYiApIHtcclxuXHJcblx0XHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxyXG5cdFx0aWYgKCBhID09PSBiICkge1xyXG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXHJcblx0XHR2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XHJcblx0XHRpZiAoIGNvbXBhcmUgKSB7XHJcblx0XHRcdHJldHVybiBjb21wYXJlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBpZiBib3RoIGlucHV0cyBiZWxvbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnRcclxuXHRcdGNvbXBhcmUgPSAoIGEub3duZXJEb2N1bWVudCB8fCBhICkgPT09ICggYi5vd25lckRvY3VtZW50IHx8IGIgKSA/XHJcblx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XHJcblxyXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcclxuXHRcdFx0MTtcclxuXHJcblx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcclxuXHRcdGlmICggY29tcGFyZSAmIDEgfHxcclxuXHRcdFx0KCFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBhICkgPT09IGNvbXBhcmUpICkge1xyXG5cclxuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XHJcblx0XHRcdGlmICggYSA9PT0gZG9jIHx8IGEub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYSkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggYiA9PT0gZG9jIHx8IGIub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYikgKSB7XHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXHJcblx0XHRcdHJldHVybiBzb3J0SW5wdXQgP1xyXG5cdFx0XHRcdCggaW5kZXhPZi5jYWxsKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YuY2FsbCggc29ydElucHV0LCBiICkgKSA6XHJcblx0XHRcdFx0MDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XHJcblx0fSA6XHJcblx0ZnVuY3Rpb24oIGEsIGIgKSB7XHJcblx0XHQvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXHJcblx0XHRpZiAoIGEgPT09IGIgKSB7XHJcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjdXIsXHJcblx0XHRcdGkgPSAwLFxyXG5cdFx0XHRhdXAgPSBhLnBhcmVudE5vZGUsXHJcblx0XHRcdGJ1cCA9IGIucGFyZW50Tm9kZSxcclxuXHRcdFx0YXAgPSBbIGEgXSxcclxuXHRcdFx0YnAgPSBbIGIgXTtcclxuXHJcblx0XHQvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxyXG5cdFx0aWYgKCAhYXVwIHx8ICFidXAgKSB7XHJcblx0XHRcdHJldHVybiBhID09PSBkb2MgPyAtMSA6XHJcblx0XHRcdFx0YiA9PT0gZG9jID8gMSA6XHJcblx0XHRcdFx0YXVwID8gLTEgOlxyXG5cdFx0XHRcdGJ1cCA/IDEgOlxyXG5cdFx0XHRcdHNvcnRJbnB1dCA/XHJcblx0XHRcdFx0KCBpbmRleE9mLmNhbGwoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZi5jYWxsKCBzb3J0SW5wdXQsIGIgKSApIDpcclxuXHRcdFx0XHQwO1xyXG5cclxuXHRcdC8vIElmIHRoZSBub2RlcyBhcmUgc2libGluZ3MsIHdlIGNhbiBkbyBhIHF1aWNrIGNoZWNrXHJcblx0XHR9IGVsc2UgaWYgKCBhdXAgPT09IGJ1cCApIHtcclxuXHRcdFx0cmV0dXJuIHNpYmxpbmdDaGVjayggYSwgYiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXHJcblx0XHRjdXIgPSBhO1xyXG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLnBhcmVudE5vZGUpICkge1xyXG5cdFx0XHRhcC51bnNoaWZ0KCBjdXIgKTtcclxuXHRcdH1cclxuXHRcdGN1ciA9IGI7XHJcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XHJcblx0XHRcdGJwLnVuc2hpZnQoIGN1ciApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XHJcblx0XHR3aGlsZSAoIGFwW2ldID09PSBicFtpXSApIHtcclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpID9cclxuXHRcdFx0Ly8gRG8gYSBzaWJsaW5nIGNoZWNrIGlmIHRoZSBub2RlcyBoYXZlIGEgY29tbW9uIGFuY2VzdG9yXHJcblx0XHRcdHNpYmxpbmdDaGVjayggYXBbaV0sIGJwW2ldICkgOlxyXG5cclxuXHRcdFx0Ly8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XHJcblx0XHRcdGFwW2ldID09PSBwcmVmZXJyZWREb2MgPyAtMSA6XHJcblx0XHRcdGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDpcclxuXHRcdFx0MDtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gZG9jO1xyXG59O1xyXG5cclxuU2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XHJcblx0cmV0dXJuIFNpenpsZSggZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMgKTtcclxufTtcclxuXHJcblNpenpsZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiggZWxlbSwgZXhwciApIHtcclxuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcclxuXHRpZiAoICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKSAhPT0gZG9jdW1lbnQgKSB7XHJcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xyXG5cdH1cclxuXHJcblx0Ly8gTWFrZSBzdXJlIHRoYXQgYXR0cmlidXRlIHNlbGVjdG9ycyBhcmUgcXVvdGVkXHJcblx0ZXhwciA9IGV4cHIucmVwbGFjZSggcmF0dHJpYnV0ZVF1b3RlcywgXCI9JyQxJ11cIiApO1xyXG5cclxuXHRpZiAoIHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yICYmIGRvY3VtZW50SXNIVE1MICYmXHJcblx0XHQoICFyYnVnZ3lNYXRjaGVzIHx8ICFyYnVnZ3lNYXRjaGVzLnRlc3QoIGV4cHIgKSApICYmXHJcblx0XHQoICFyYnVnZ3lRU0EgICAgIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xyXG5cclxuXHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xyXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XHJcblx0XHRcdFx0XHQvLyBBcyB3ZWxsLCBkaXNjb25uZWN0ZWQgbm9kZXMgYXJlIHNhaWQgdG8gYmUgaW4gYSBkb2N1bWVudFxyXG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxyXG5cdFx0XHRcdFx0ZWxlbS5kb2N1bWVudCAmJiBlbGVtLmRvY3VtZW50Lm5vZGVUeXBlICE9PSAxMSApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoKGUpIHt9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gU2l6emxlKCBleHByLCBkb2N1bWVudCwgbnVsbCwgWyBlbGVtIF0gKS5sZW5ndGggPiAwO1xyXG59O1xyXG5cclxuU2l6emxlLmNvbnRhaW5zID0gZnVuY3Rpb24oIGNvbnRleHQsIGVsZW0gKSB7XHJcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXHJcblx0aWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT09IGRvY3VtZW50ICkge1xyXG5cdFx0c2V0RG9jdW1lbnQoIGNvbnRleHQgKTtcclxuXHR9XHJcblx0cmV0dXJuIGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICk7XHJcbn07XHJcblxyXG5TaXp6bGUuYXR0ciA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xyXG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxyXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9PSBkb2N1bWVudCApIHtcclxuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XHJcblx0fVxyXG5cclxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxyXG5cdFx0Ly8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKGpRdWVyeSAjMTM4MDcpXHJcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XHJcblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XHJcblx0XHRcdHVuZGVmaW5lZDtcclxuXHJcblx0cmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID9cclxuXHRcdHZhbCA6XHJcblx0XHRzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cclxuXHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKSA6XHJcblx0XHRcdCh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpICYmIHZhbC5zcGVjaWZpZWQgP1xyXG5cdFx0XHRcdHZhbC52YWx1ZSA6XHJcblx0XHRcdFx0bnVsbDtcclxufTtcclxuXHJcblNpenpsZS5lcnJvciA9IGZ1bmN0aW9uKCBtc2cgKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKCBcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiICsgbXNnICk7XHJcbn07XHJcblxyXG4vKipcclxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xyXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xyXG4gKi9cclxuU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcclxuXHR2YXIgZWxlbSxcclxuXHRcdGR1cGxpY2F0ZXMgPSBbXSxcclxuXHRcdGogPSAwLFxyXG5cdFx0aSA9IDA7XHJcblxyXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2VcclxuXHRoYXNEdXBsaWNhdGUgPSAhc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzO1xyXG5cdHNvcnRJbnB1dCA9ICFzdXBwb3J0LnNvcnRTdGFibGUgJiYgcmVzdWx0cy5zbGljZSggMCApO1xyXG5cdHJlc3VsdHMuc29ydCggc29ydE9yZGVyICk7XHJcblxyXG5cdGlmICggaGFzRHVwbGljYXRlICkge1xyXG5cdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XHJcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xyXG5cdFx0XHRcdGogPSBkdXBsaWNhdGVzLnB1c2goIGkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0d2hpbGUgKCBqLS0gKSB7XHJcblx0XHRcdHJlc3VsdHMuc3BsaWNlKCBkdXBsaWNhdGVzWyBqIF0sIDEgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXHJcblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XHJcblx0c29ydElucHV0ID0gbnVsbDtcclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcclxuICogQHBhcmFtIHtBcnJheXxFbGVtZW50fSBlbGVtXHJcbiAqL1xyXG5nZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiggZWxlbSApIHtcclxuXHR2YXIgbm9kZSxcclxuXHRcdHJldCA9IFwiXCIsXHJcblx0XHRpID0gMCxcclxuXHRcdG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcclxuXHJcblx0aWYgKCAhbm9kZVR5cGUgKSB7XHJcblx0XHQvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxyXG5cdFx0d2hpbGUgKCAobm9kZSA9IGVsZW1baSsrXSkgKSB7XHJcblx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXHJcblx0XHRcdHJldCArPSBnZXRUZXh0KCBub2RlICk7XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExICkge1xyXG5cdFx0Ly8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xyXG5cdFx0Ly8gaW5uZXJUZXh0IHVzYWdlIHJlbW92ZWQgZm9yIGNvbnNpc3RlbmN5IG9mIG5ldyBsaW5lcyAoalF1ZXJ5ICMxMTE1MylcclxuXHRcdGlmICggdHlwZW9mIGVsZW0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gVHJhdmVyc2UgaXRzIGNoaWxkcmVuXHJcblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xyXG5cdFx0XHRcdHJldCArPSBnZXRUZXh0KCBlbGVtICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCApIHtcclxuXHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcclxuXHR9XHJcblx0Ly8gRG8gbm90IGluY2x1ZGUgY29tbWVudCBvciBwcm9jZXNzaW5nIGluc3RydWN0aW9uIG5vZGVzXHJcblxyXG5cdHJldHVybiByZXQ7XHJcbn07XHJcblxyXG5FeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcclxuXHJcblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXHJcblx0Y2FjaGVMZW5ndGg6IDUwLFxyXG5cclxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcclxuXHJcblx0bWF0Y2g6IG1hdGNoRXhwcixcclxuXHJcblx0YXR0ckhhbmRsZToge30sXHJcblxyXG5cdGZpbmQ6IHt9LFxyXG5cclxuXHRyZWxhdGl2ZToge1xyXG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcclxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcclxuXHRcdFwiK1wiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiwgZmlyc3Q6IHRydWUgfSxcclxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XHJcblx0fSxcclxuXHJcblx0cHJlRmlsdGVyOiB7XHJcblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG1hdGNoICkge1xyXG5cdFx0XHRtYXRjaFsxXSA9IG1hdGNoWzFdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XHJcblxyXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxyXG5cdFx0XHRtYXRjaFszXSA9ICggbWF0Y2hbM10gfHwgbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIiApLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGNoWzJdID09PSBcIn49XCIgKSB7XHJcblx0XHRcdFx0bWF0Y2hbM10gPSBcIiBcIiArIG1hdGNoWzNdICsgXCIgXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBtYXRjaC5zbGljZSggMCwgNCApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcclxuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXHJcblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXHJcblx0XHRcdFx0MiB3aGF0IChjaGlsZHxvZi10eXBlKVxyXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXHJcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXHJcblx0XHRcdFx0NSBzaWduIG9mIHhuLWNvbXBvbmVudFxyXG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcclxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcclxuXHRcdFx0XHQ4IHkgb2YgeS1jb21wb25lbnRcclxuXHRcdFx0Ki9cclxuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRjaFsxXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xyXG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XHJcblx0XHRcdFx0aWYgKCAhbWF0Y2hbM10gKSB7XHJcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcclxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXHJcblx0XHRcdFx0bWF0Y2hbNF0gPSArKCBtYXRjaFs0XSA/IG1hdGNoWzVdICsgKG1hdGNoWzZdIHx8IDEpIDogMiAqICggbWF0Y2hbM10gPT09IFwiZXZlblwiIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiICkgKTtcclxuXHRcdFx0XHRtYXRjaFs1XSA9ICsoICggbWF0Y2hbN10gKyBtYXRjaFs4XSApIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiICk7XHJcblxyXG5cdFx0XHQvLyBvdGhlciB0eXBlcyBwcm9oaWJpdCBhcmd1bWVudHNcclxuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbM10gKSB7XHJcblx0XHRcdFx0U2l6emxlLmVycm9yKCBtYXRjaFswXSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XHJcblx0XHR9LFxyXG5cclxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcclxuXHRcdFx0dmFyIGV4Y2VzcyxcclxuXHRcdFx0XHR1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcclxuXHJcblx0XHRcdGlmICggbWF0Y2hFeHByW1wiQ0hJTERcIl0udGVzdCggbWF0Y2hbMF0gKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcclxuXHRcdFx0aWYgKCBtYXRjaFszXSApIHtcclxuXHRcdFx0XHRtYXRjaFsyXSA9IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCI7XHJcblxyXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xyXG5cdFx0XHR9IGVsc2UgaWYgKCB1bnF1b3RlZCAmJiBycHNldWRvLnRlc3QoIHVucXVvdGVkICkgJiZcclxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxyXG5cdFx0XHRcdChleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSkgJiZcclxuXHRcdFx0XHQvLyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNsb3NpbmcgcGFyZW50aGVzaXNcclxuXHRcdFx0XHQoZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoKSApIHtcclxuXHJcblx0XHRcdFx0Ly8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcclxuXHRcdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwLCBleGNlc3MgKTtcclxuXHRcdFx0XHRtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXHJcblx0XHRcdHJldHVybiBtYXRjaC5zbGljZSggMCwgMyApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGZpbHRlcjoge1xyXG5cclxuXHRcdFwiVEFHXCI6IGZ1bmN0aW9uKCBub2RlTmFtZVNlbGVjdG9yICkge1xyXG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cclxuXHRcdFx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0gOlxyXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHRcIkNMQVNTXCI6IGZ1bmN0aW9uKCBjbGFzc05hbWUgKSB7XHJcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcclxuXHJcblx0XHRcdHJldHVybiBwYXR0ZXJuIHx8XHJcblx0XHRcdFx0KHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApKSAmJlxyXG5cdFx0XHRcdGNsYXNzQ2FjaGUoIGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcGF0dGVybi50ZXN0KCB0eXBlb2YgZWxlbS5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbS5jbGFzc05hbWUgfHwgdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBzdHJ1bmRlZmluZWQgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiICk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdFwiQVRUUlwiOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNpenpsZS5hdHRyKCBlbGVtLCBuYW1lICk7XHJcblxyXG5cdFx0XHRcdGlmICggcmVzdWx0ID09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCAhb3BlcmF0b3IgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiPVwiID8gcmVzdWx0ID09PSBjaGVjayA6XHJcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIhPVwiID8gcmVzdWx0ICE9PSBjaGVjayA6XHJcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDAgOlxyXG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiKj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID4gLTEgOlxyXG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiJD1cIiA/IGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjayA6XHJcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ+PVwiID8gKCBcIiBcIiArIHJlc3VsdCArIFwiIFwiICkuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcclxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcInw9XCIgPyByZXN1bHQgPT09IGNoZWNrIHx8IHJlc3VsdC5zbGljZSggMCwgY2hlY2subGVuZ3RoICsgMSApID09PSBjaGVjayArIFwiLVwiIDpcclxuXHRcdFx0XHRcdGZhbHNlO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XHJcblx0XHRcdHZhciBzaW1wbGUgPSB0eXBlLnNsaWNlKCAwLCAzICkgIT09IFwibnRoXCIsXHJcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxyXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xyXG5cclxuXHRcdFx0XHQvLyBTaG9ydGN1dCBmb3IgOm50aC0qKG4pXHJcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0fSA6XHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XHJcblx0XHRcdFx0XHR2YXIgY2FjaGUsIG91dGVyQ2FjaGUsIG5vZGUsIGRpZmYsIG5vZGVJbmRleCwgc3RhcnQsXHJcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXHJcblx0XHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSxcclxuXHRcdFx0XHRcdFx0bmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXHJcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlO1xyXG5cclxuXHRcdFx0XHRcdGlmICggcGFyZW50ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxyXG5cdFx0XHRcdFx0XHRpZiAoIHNpbXBsZSApIHtcclxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcclxuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xyXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9IG5vZGVbIGRpciBdKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBvZlR5cGUgPyBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOiBub2RlLm5vZGVUeXBlID09PSAxICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXHJcblx0XHRcdFx0XHRcdFx0XHRzdGFydCA9IGRpciA9IHR5cGUgPT09IFwib25seVwiICYmICFzdGFydCAmJiBcIm5leHRTaWJsaW5nXCI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcclxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxyXG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBwYXJlbnRbIGV4cGFuZG8gXSB8fCAocGFyZW50WyBleHBhbmRvIF0gPSB7fSk7XHJcblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSBvdXRlckNhY2hlWyB0eXBlIF0gfHwgW107XHJcblx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbMF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbMV07XHJcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzJdO1xyXG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBub2RlSW5kZXggJiYgcGFyZW50LmNoaWxkTm9kZXNbIG5vZGVJbmRleCBdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIHNlZWtpbmcgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBVc2UgcHJldmlvdXNseS1jYWNoZWQgZWxlbWVudCBpbmRleCBpZiBhdmFpbGFibGVcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdXNlQ2FjaGUgJiYgKGNhY2hlID0gKGVsZW1bIGV4cGFuZG8gXSB8fCAoZWxlbVsgZXhwYW5kbyBdID0ge30pKVsgdHlwZSBdKSAmJiBjYWNoZVswXSA9PT0gZGlycnVucyApIHtcclxuXHRcdFx0XHRcdFx0XHRkaWZmID0gY2FjaGVbMV07XHJcblxyXG5cdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxyXG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XHJcblx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoICggb2ZUeXBlID8gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDogbm9kZS5ub2RlVHlwZSA9PT0gMSApICYmICsrZGlmZiApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdChub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KSlbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUgPT09IGVsZW0gKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXHJcblx0XHRcdFx0XHRcdGRpZmYgLT0gbGFzdDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJQU0VVRE9cIjogZnVuY3Rpb24oIHBzZXVkbywgYXJndW1lbnQgKSB7XHJcblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxyXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXHJcblx0XHRcdC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXHJcblx0XHRcdC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3NcclxuXHRcdFx0dmFyIGFyZ3MsXHJcblx0XHRcdFx0Zm4gPSBFeHByLnBzZXVkb3NbIHBzZXVkbyBdIHx8IEV4cHIuc2V0RmlsdGVyc1sgcHNldWRvLnRvTG93ZXJDYXNlKCkgXSB8fFxyXG5cdFx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcclxuXHJcblx0XHRcdC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcclxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cclxuXHRcdFx0Ly8ganVzdCBhcyBTaXp6bGUgZG9lc1xyXG5cdFx0XHRpZiAoIGZuWyBleHBhbmRvIF0gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZuKCBhcmd1bWVudCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcclxuXHRcdFx0aWYgKCBmbi5sZW5ndGggPiAxICkge1xyXG5cdFx0XHRcdGFyZ3MgPSBbIHBzZXVkbywgcHNldWRvLCBcIlwiLCBhcmd1bWVudCBdO1xyXG5cdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoIHBzZXVkby50b0xvd2VyQ2FzZSgpICkgP1xyXG5cdFx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xyXG5cdFx0XHRcdFx0XHR2YXIgaWR4LFxyXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcclxuXHRcdFx0XHRcdFx0XHRpID0gbWF0Y2hlZC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xyXG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YuY2FsbCggc2VlZCwgbWF0Y2hlZFtpXSApO1xyXG5cdFx0XHRcdFx0XHRcdHNlZWRbIGlkeCBdID0gISggbWF0Y2hlc1sgaWR4IF0gPSBtYXRjaGVkW2ldICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pIDpcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmbjtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRwc2V1ZG9zOiB7XHJcblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3NcclxuXHRcdFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XHJcblx0XHRcdC8vIFRyaW0gdGhlIHNlbGVjdG9yIHBhc3NlZCB0byBjb21waWxlXHJcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXHJcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xyXG5cdFx0XHR2YXIgaW5wdXQgPSBbXSxcclxuXHRcdFx0XHRyZXN1bHRzID0gW10sXHJcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XHJcblx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwgKSB7XHJcblx0XHRcdFx0XHR2YXIgZWxlbSxcclxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxyXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxyXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XHJcblx0XHRcdFx0XHRcdGlmICggKGVsZW0gPSB1bm1hdGNoZWRbaV0pICkge1xyXG5cdFx0XHRcdFx0XHRcdHNlZWRbaV0gPSAhKG1hdGNoZXNbaV0gPSBlbGVtKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pIDpcclxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xyXG5cdFx0XHRcdFx0aW5wdXRbMF0gPSBlbGVtO1xyXG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xyXG5cdFx0XHRcdH07XHJcblx0XHR9KSxcclxuXHJcblx0XHRcImhhc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlbGVjdG9yICkge1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdFx0cmV0dXJuIFNpenpsZSggc2VsZWN0b3IsIGVsZW0gKS5sZW5ndGggPiAwO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblxyXG5cdFx0XCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHRleHQgKSB7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLnRleHRDb250ZW50IHx8IGVsZW0uaW5uZXJUZXh0IHx8IGdldFRleHQoIGVsZW0gKSApLmluZGV4T2YoIHRleHQgKSA+IC0xO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblxyXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXHJcblx0XHQvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxyXG5cdFx0Ly8gYmVpbmcgZXF1YWwgdG8gdGhlIGlkZW50aWZpZXIgQyxcclxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXHJcblx0XHQvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cclxuXHRcdC8vIFRoZSBpZGVudGlmaWVyIEMgZG9lcyBub3QgaGF2ZSB0byBiZSBhIHZhbGlkIGxhbmd1YWdlIG5hbWUuXCJcclxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cclxuXHRcdFwibGFuZ1wiOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBsYW5nICkge1xyXG5cdFx0XHQvLyBsYW5nIHZhbHVlIG11c3QgYmUgYSB2YWxpZCBpZGVudGlmaWVyXHJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSApIHtcclxuXHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XHJcblx0XHRcdH1cclxuXHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdFx0dmFyIGVsZW1MYW5nO1xyXG5cdFx0XHRcdGRvIHtcclxuXHRcdFx0XHRcdGlmICggKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgP1xyXG5cdFx0XHRcdFx0XHRlbGVtLmxhbmcgOlxyXG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtTGFuZyA9IGVsZW1MYW5nLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IHdoaWxlICggKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH07XHJcblx0XHR9KSxcclxuXHJcblx0XHQvLyBNaXNjZWxsYW5lb3VzXHJcblx0XHRcInRhcmdldFwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJyb290XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jRWxlbTtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJmb2N1c1wiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKCFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpKSAmJiAhIShlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXHJcblx0XHRcImVuYWJsZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJkaXNhYmxlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXHJcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXHJcblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0cmV0dXJuIChub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmICEhZWxlbS5jaGVja2VkKSB8fCAobm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJzZWxlY3RlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0Ly8gQWNjZXNzaW5nIHRoaXMgcHJvcGVydHkgbWFrZXMgc2VsZWN0ZWQtYnktZGVmYXVsdFxyXG5cdFx0XHQvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XHJcblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdGVsZW0ucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZWxlbS5zZWxlY3RlZCA9PT0gdHJ1ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gQ29udGVudHNcclxuXHRcdFwiZW1wdHlcIjogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXHJcblx0XHRcdC8vIDplbXB0eSBpcyBuZWdhdGVkIGJ5IGVsZW1lbnQgKDEpIG9yIGNvbnRlbnQgbm9kZXMgKHRleHQ6IDM7IGNkYXRhOiA0OyBlbnRpdHkgcmVmOiA1KSxcclxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcclxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxyXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcclxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJwYXJlbnRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdHJldHVybiAhRXhwci5wc2V1ZG9zW1wiZW1wdHlcIl0oIGVsZW0gKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gRWxlbWVudC9pbnB1dCB0eXBlc1xyXG5cdFx0XCJoZWFkZXJcIjogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0XCJpbnB1dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0cmV0dXJuIHJpbnB1dHMudGVzdCggZWxlbS5ub2RlTmFtZSApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRcImJ1dHRvblwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XHJcblx0XHR9LFxyXG5cclxuXHRcdFwidGV4dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0dmFyIGF0dHI7XHJcblx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxyXG5cdFx0XHRcdGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiZcclxuXHJcblx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OFxyXG5cdFx0XHRcdC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXHJcblx0XHRcdFx0KCAoYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkgPT0gbnVsbCB8fCBhdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dFwiICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cclxuXHRcdFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIFsgMCBdO1xyXG5cdFx0fSksXHJcblxyXG5cdFx0XCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gWyBsZW5ndGggLSAxIF07XHJcblx0XHR9KSxcclxuXHJcblx0XHRcImVxXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcclxuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xyXG5cdFx0fSksXHJcblxyXG5cdFx0XCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xyXG5cdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xyXG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcclxuXHRcdH0pLFxyXG5cclxuXHRcdFwib2RkXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xyXG5cdFx0XHR2YXIgaSA9IDE7XHJcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xyXG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcclxuXHRcdH0pLFxyXG5cclxuXHRcdFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xyXG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XHJcblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xyXG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcclxuXHRcdH0pLFxyXG5cclxuXHRcdFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xyXG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XHJcblx0XHRcdGZvciAoIDsgKytpIDwgbGVuZ3RoOyApIHtcclxuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XHJcblx0XHR9KVxyXG5cdH1cclxufTtcclxuXHJcbkV4cHIucHNldWRvc1tcIm50aFwiXSA9IEV4cHIucHNldWRvc1tcImVxXCJdO1xyXG5cclxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcclxuZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XHJcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVJbnB1dFBzZXVkbyggaSApO1xyXG59XHJcbmZvciAoIGkgaW4geyBzdWJtaXQ6IHRydWUsIHJlc2V0OiB0cnVlIH0gKSB7XHJcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oIGkgKTtcclxufVxyXG5cclxuLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXHJcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxyXG5zZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcclxuRXhwci5zZXRGaWx0ZXJzID0gbmV3IHNldEZpbHRlcnMoKTtcclxuXHJcbnRva2VuaXplID0gU2l6emxlLnRva2VuaXplID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBwYXJzZU9ubHkgKSB7XHJcblx0dmFyIG1hdGNoZWQsIG1hdGNoLCB0b2tlbnMsIHR5cGUsXHJcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxyXG5cdFx0Y2FjaGVkID0gdG9rZW5DYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xyXG5cclxuXHRpZiAoIGNhY2hlZCApIHtcclxuXHRcdHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKCAwICk7XHJcblx0fVxyXG5cclxuXHRzb0ZhciA9IHNlbGVjdG9yO1xyXG5cdGdyb3VwcyA9IFtdO1xyXG5cdHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcclxuXHJcblx0d2hpbGUgKCBzb0ZhciApIHtcclxuXHJcblx0XHQvLyBDb21tYSBhbmQgZmlyc3QgcnVuXHJcblx0XHRpZiAoICFtYXRjaGVkIHx8IChtYXRjaCA9IHJjb21tYS5leGVjKCBzb0ZhciApKSApIHtcclxuXHRcdFx0aWYgKCBtYXRjaCApIHtcclxuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxyXG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoWzBdLmxlbmd0aCApIHx8IHNvRmFyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdyb3Vwcy5wdXNoKCAodG9rZW5zID0gW10pICk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWF0Y2hlZCA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIENvbWJpbmF0b3JzXHJcblx0XHRpZiAoIChtYXRjaCA9IHJjb21iaW5hdG9ycy5leGVjKCBzb0ZhciApKSApIHtcclxuXHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XHJcblx0XHRcdHRva2Vucy5wdXNoKHtcclxuXHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcclxuXHRcdFx0XHQvLyBDYXN0IGRlc2NlbmRhbnQgY29tYmluYXRvcnMgdG8gc3BhY2VcclxuXHRcdFx0XHR0eXBlOiBtYXRjaFswXS5yZXBsYWNlKCBydHJpbSwgXCIgXCIgKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBGaWx0ZXJzXHJcblx0XHRmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xyXG5cdFx0XHRpZiAoIChtYXRjaCA9IG1hdGNoRXhwclsgdHlwZSBdLmV4ZWMoIHNvRmFyICkpICYmICghcHJlRmlsdGVyc1sgdHlwZSBdIHx8XHJcblx0XHRcdFx0KG1hdGNoID0gcHJlRmlsdGVyc1sgdHlwZSBdKCBtYXRjaCApKSkgKSB7XHJcblx0XHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XHJcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xyXG5cdFx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXHJcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxyXG5cdFx0XHRcdFx0bWF0Y2hlczogbWF0Y2hcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhbWF0Y2hlZCApIHtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW52YWxpZCBleGNlc3NcclxuXHQvLyBpZiB3ZSdyZSBqdXN0IHBhcnNpbmdcclxuXHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcclxuXHRyZXR1cm4gcGFyc2VPbmx5ID9cclxuXHRcdHNvRmFyLmxlbmd0aCA6XHJcblx0XHRzb0ZhciA/XHJcblx0XHRcdFNpenpsZS5lcnJvciggc2VsZWN0b3IgKSA6XHJcblx0XHRcdC8vIENhY2hlIHRoZSB0b2tlbnNcclxuXHRcdFx0dG9rZW5DYWNoZSggc2VsZWN0b3IsIGdyb3VwcyApLnNsaWNlKCAwICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b1NlbGVjdG9yKCB0b2tlbnMgKSB7XHJcblx0dmFyIGkgPSAwLFxyXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcclxuXHRcdHNlbGVjdG9yID0gXCJcIjtcclxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdHNlbGVjdG9yICs9IHRva2Vuc1tpXS52YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIHNlbGVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xyXG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcclxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGRpciA9PT0gXCJwYXJlbnROb2RlXCIsXHJcblx0XHRkb25lTmFtZSA9IGRvbmUrKztcclxuXHJcblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xyXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XHJcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xyXG5cdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbVsgZGlyIF0pICkge1xyXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSA6XHJcblxyXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXHJcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xyXG5cdFx0XHR2YXIgb2xkQ2FjaGUsIG91dGVyQ2FjaGUsXHJcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XHJcblxyXG5cdFx0XHQvLyBXZSBjYW4ndCBzZXQgYXJiaXRyYXJ5IGRhdGEgb24gWE1MIG5vZGVzLCBzbyB0aGV5IGRvbid0IGJlbmVmaXQgZnJvbSBkaXIgY2FjaGluZ1xyXG5cdFx0XHRpZiAoIHhtbCApIHtcclxuXHRcdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbVsgZGlyIF0pICkge1xyXG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcclxuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xyXG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8IChlbGVtWyBleHBhbmRvIF0gPSB7fSk7XHJcblx0XHRcdFx0XHRcdGlmICggKG9sZENhY2hlID0gb3V0ZXJDYWNoZVsgZGlyIF0pICYmXHJcblx0XHRcdFx0XHRcdFx0b2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKG5ld0NhY2hlWyAyIF0gPSBvbGRDYWNoZVsgMiBdKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXHJcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZVsgZGlyIF0gPSBuZXdDYWNoZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXHJcblx0XHRcdFx0XHRcdFx0aWYgKCAobmV3Q2FjaGVbIDIgXSA9IG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xyXG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cclxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XHJcblx0XHRcdHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0XHRpZiAoICFtYXRjaGVyc1tpXSggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSA6XHJcblx0XHRtYXRjaGVyc1swXTtcclxufVxyXG5cclxuZnVuY3Rpb24gbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IsIGNvbnRleHRzLCByZXN1bHRzICkge1xyXG5cdHZhciBpID0gMCxcclxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcclxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHRzW2ldLCByZXN1bHRzICk7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25kZW5zZSggdW5tYXRjaGVkLCBtYXAsIGZpbHRlciwgY29udGV4dCwgeG1sICkge1xyXG5cdHZhciBlbGVtLFxyXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXHJcblx0XHRpID0gMCxcclxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXHJcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcclxuXHJcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XHJcblx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcclxuXHRcdFx0aWYgKCAhZmlsdGVyIHx8IGZpbHRlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XHJcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcclxuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcclxuXHRcdFx0XHRcdG1hcC5wdXNoKCBpICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3VW5tYXRjaGVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRNYXRjaGVyKCBwcmVGaWx0ZXIsIHNlbGVjdG9yLCBtYXRjaGVyLCBwb3N0RmlsdGVyLCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKSB7XHJcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XHJcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xyXG5cdH1cclxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcclxuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcclxuXHR9XHJcblx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xyXG5cdFx0dmFyIHRlbXAsIGksIGVsZW0sXHJcblx0XHRcdHByZU1hcCA9IFtdLFxyXG5cdFx0XHRwb3N0TWFwID0gW10sXHJcblx0XHRcdHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXHJcblxyXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxyXG5cdFx0XHRlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXHJcblxyXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cclxuXHRcdFx0bWF0Y2hlckluID0gcHJlRmlsdGVyICYmICggc2VlZCB8fCAhc2VsZWN0b3IgKSA/XHJcblx0XHRcdFx0Y29uZGVuc2UoIGVsZW1zLCBwcmVNYXAsIHByZUZpbHRlciwgY29udGV4dCwgeG1sICkgOlxyXG5cdFx0XHRcdGVsZW1zLFxyXG5cclxuXHRcdFx0bWF0Y2hlck91dCA9IG1hdGNoZXIgP1xyXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXHJcblx0XHRcdFx0cG9zdEZpbmRlciB8fCAoIHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyICkgP1xyXG5cclxuXHRcdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0W10gOlxyXG5cclxuXHRcdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA6XHJcblx0XHRcdFx0bWF0Y2hlckluO1xyXG5cclxuXHRcdC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXHJcblx0XHRpZiAoIG1hdGNoZXIgKSB7XHJcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxyXG5cdFx0aWYgKCBwb3N0RmlsdGVyICkge1xyXG5cdFx0XHR0ZW1wID0gY29uZGVuc2UoIG1hdGNoZXJPdXQsIHBvc3RNYXAgKTtcclxuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xyXG5cclxuXHRcdFx0Ly8gVW4tbWF0Y2ggZmFpbGluZyBlbGVtZW50cyBieSBtb3ZpbmcgdGhlbSBiYWNrIHRvIG1hdGNoZXJJblxyXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XHJcblx0XHRcdHdoaWxlICggaS0tICkge1xyXG5cdFx0XHRcdGlmICggKGVsZW0gPSB0ZW1wW2ldKSApIHtcclxuXHRcdFx0XHRcdG1hdGNoZXJPdXRbIHBvc3RNYXBbaV0gXSA9ICEobWF0Y2hlckluWyBwb3N0TWFwW2ldIF0gPSBlbGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHNlZWQgKSB7XHJcblx0XHRcdGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XHJcblx0XHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xyXG5cdFx0XHRcdFx0Ly8gR2V0IHRoZSBmaW5hbCBtYXRjaGVyT3V0IGJ5IGNvbmRlbnNpbmcgdGhpcyBpbnRlcm1lZGlhdGUgaW50byBwb3N0RmluZGVyIGNvbnRleHRzXHJcblx0XHRcdFx0XHR0ZW1wID0gW107XHJcblx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XHJcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXHJcblx0XHRcdFx0XHRcdFx0dGVtcC5wdXNoKCAobWF0Y2hlckluW2ldID0gZWxlbSkgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgKG1hdGNoZXJPdXQgPSBbXSksIHRlbXAsIHhtbCApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gTW92ZSBtYXRjaGVkIGVsZW1lbnRzIGZyb20gc2VlZCB0byByZXN1bHRzIHRvIGtlZXAgdGhlbSBzeW5jaHJvbml6ZWRcclxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XHJcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XHJcblx0XHRcdFx0XHRpZiAoIChlbGVtID0gbWF0Y2hlck91dFtpXSkgJiZcclxuXHRcdFx0XHRcdFx0KHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZi5jYWxsKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbaV0pID4gLTEgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWVkW3RlbXBdID0gIShyZXN1bHRzW3RlbXBdID0gZWxlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0Ly8gQWRkIGVsZW1lbnRzIHRvIHJlc3VsdHMsIHRocm91Z2ggcG9zdEZpbmRlciBpZiBkZWZpbmVkXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXHJcblx0XHRcdFx0bWF0Y2hlck91dCA9PT0gcmVzdWx0cyA/XHJcblx0XHRcdFx0XHRtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxyXG5cdFx0XHRcdFx0bWF0Y2hlck91dFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XHJcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgbWF0Y2hlck91dCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XHJcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcclxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXHJcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMF0udHlwZSBdLFxyXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcclxuXHRcdGkgPSBsZWFkaW5nUmVsYXRpdmUgPyAxIDogMCxcclxuXHJcblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxyXG5cdFx0bWF0Y2hDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XHJcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXHJcblx0XHRtYXRjaEFueUNvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcclxuXHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcclxuXHRcdG1hdGNoZXJzID0gWyBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xyXG5cdFx0XHRyZXR1cm4gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcclxuXHRcdFx0XHQoY2hlY2tDb250ZXh0ID0gY29udGV4dCkubm9kZVR5cGUgP1xyXG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XHJcblx0XHRcdFx0XHRtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XHJcblx0XHR9IF07XHJcblxyXG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0aWYgKCAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1tpXS50eXBlIF0pICkge1xyXG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlcikgXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1hdGNoZXIgPSBFeHByLmZpbHRlclsgdG9rZW5zW2ldLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMgKTtcclxuXHJcblx0XHRcdC8vIFJldHVybiBzcGVjaWFsIHVwb24gc2VlaW5nIGEgcG9zaXRpb25hbCBtYXRjaGVyXHJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xyXG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xyXG5cdFx0XHRcdGogPSArK2k7XHJcblx0XHRcdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XHJcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1tqXS50eXBlIF0gKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc2V0TWF0Y2hlcihcclxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxyXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHByZWNlZGluZyB0b2tlbiB3YXMgYSBkZXNjZW5kYW50IGNvbWJpbmF0b3IsIGluc2VydCBhbiBpbXBsaWNpdCBhbnktZWxlbWVudCBgKmBcclxuXHRcdFx0XHRcdFx0dG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSlcclxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLFxyXG5cdFx0XHRcdFx0bWF0Y2hlcixcclxuXHRcdFx0XHRcdGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxyXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKHRva2VucyA9IHRva2Vucy5zbGljZSggaiApKSApLFxyXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiB0b1NlbGVjdG9yKCB0b2tlbnMgKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0bWF0Y2hlcnMucHVzaCggbWF0Y2hlciApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XHJcblx0dmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcclxuXHRcdGJ5RWxlbWVudCA9IGVsZW1lbnRNYXRjaGVycy5sZW5ndGggPiAwLFxyXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xyXG5cdFx0XHR2YXIgZWxlbSwgaiwgbWF0Y2hlcixcclxuXHRcdFx0XHRtYXRjaGVkQ291bnQgPSAwLFxyXG5cdFx0XHRcdGkgPSBcIjBcIixcclxuXHRcdFx0XHR1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxyXG5cdFx0XHRcdHNldE1hdGNoZWQgPSBbXSxcclxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcclxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XHJcblx0XHRcdFx0ZWxlbXMgPSBzZWVkIHx8IGJ5RWxlbWVudCAmJiBFeHByLmZpbmRbXCJUQUdcIl0oIFwiKlwiLCBvdXRlcm1vc3QgKSxcclxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSAoZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEpLFxyXG5cdFx0XHRcdGxlbiA9IGVsZW1zLmxlbmd0aDtcclxuXHJcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xyXG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0ICE9PSBkb2N1bWVudCAmJiBjb250ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xyXG5cdFx0XHQvLyBLZWVwIGBpYCBhIHN0cmluZyBpZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgc28gYG1hdGNoZWRDb3VudGAgd2lsbCBiZSBcIjAwXCIgYmVsb3dcclxuXHRcdFx0Ly8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXHJcblx0XHRcdC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZyBlbGVtZW50cyBieSBpZFxyXG5cdFx0XHRmb3IgKCA7IGkgIT09IGxlbiAmJiAoZWxlbSA9IGVsZW1zW2ldKSAhPSBudWxsOyBpKysgKSB7XHJcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcclxuXHRcdFx0XHRcdGogPSAwO1xyXG5cdFx0XHRcdFx0d2hpbGUgKCAobWF0Y2hlciA9IGVsZW1lbnRNYXRjaGVyc1tqKytdKSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XHJcblx0XHRcdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xyXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XHJcblx0XHRcdFx0XHQvLyBUaGV5IHdpbGwgaGF2ZSBnb25lIHRocm91Z2ggYWxsIHBvc3NpYmxlIG1hdGNoZXJzXHJcblx0XHRcdFx0XHRpZiAoIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkgKSB7XHJcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3RcclxuXHRcdFx0XHRcdGlmICggc2VlZCApIHtcclxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xyXG5cdFx0XHRtYXRjaGVkQ291bnQgKz0gaTtcclxuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XHJcblx0XHRcdFx0aiA9IDA7XHJcblx0XHRcdFx0d2hpbGUgKCAobWF0Y2hlciA9IHNldE1hdGNoZXJzW2orK10pICkge1xyXG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggc2VlZCApIHtcclxuXHRcdFx0XHRcdC8vIFJlaW50ZWdyYXRlIGVsZW1lbnQgbWF0Y2hlcyB0byBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHNvcnRpbmdcclxuXHRcdFx0XHRcdGlmICggbWF0Y2hlZENvdW50ID4gMCApIHtcclxuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCAhKHVubWF0Y2hlZFtpXSB8fCBzZXRNYXRjaGVkW2ldKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbaV0gPSBwb3AuY2FsbCggcmVzdWx0cyApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIERpc2NhcmQgaW5kZXggcGxhY2Vob2xkZXIgdmFsdWVzIHRvIGdldCBvbmx5IGFjdHVhbCBtYXRjaGVzXHJcblx0XHRcdFx0XHRzZXRNYXRjaGVkID0gY29uZGVuc2UoIHNldE1hdGNoZWQgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcclxuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XHJcblxyXG5cdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xyXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdFx0KCBtYXRjaGVkQ291bnQgKyBzZXRNYXRjaGVycy5sZW5ndGggKSA+IDEgKSB7XHJcblxyXG5cdFx0XHRcdFx0U2l6emxlLnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIE92ZXJyaWRlIG1hbmlwdWxhdGlvbiBvZiBnbG9iYWxzIGJ5IG5lc3RlZCBtYXRjaGVyc1xyXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcclxuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcclxuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHVubWF0Y2hlZDtcclxuXHRcdH07XHJcblxyXG5cdHJldHVybiBieVNldCA/XHJcblx0XHRtYXJrRnVuY3Rpb24oIHN1cGVyTWF0Y2hlciApIDpcclxuXHRcdHN1cGVyTWF0Y2hlcjtcclxufVxyXG5cclxuY29tcGlsZSA9IFNpenpsZS5jb21waWxlID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcclxuXHR2YXIgaSxcclxuXHRcdHNldE1hdGNoZXJzID0gW10sXHJcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcclxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcclxuXHJcblx0aWYgKCAhY2FjaGVkICkge1xyXG5cdFx0Ly8gR2VuZXJhdGUgYSBmdW5jdGlvbiBvZiByZWN1cnNpdmUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50XHJcblx0XHRpZiAoICFtYXRjaCApIHtcclxuXHRcdFx0bWF0Y2ggPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcclxuXHRcdH1cclxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XHJcblx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0Y2FjaGVkID0gbWF0Y2hlckZyb21Ub2tlbnMoIG1hdGNoW2ldICk7XHJcblx0XHRcdGlmICggY2FjaGVkWyBleHBhbmRvIF0gKSB7XHJcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZWxlbWVudE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXHJcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlKCBzZWxlY3RvciwgbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkgKTtcclxuXHJcblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cclxuXHRcdGNhY2hlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdH1cclxuXHRyZXR1cm4gY2FjaGVkO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggU2l6emxlJ3MgY29tcGlsZWRcclxuICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xyXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxyXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBTaXp6bGUuY29tcGlsZVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcclxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XHJcbiAqL1xyXG5zZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xyXG5cdHZhciBpLCB0b2tlbnMsIHRva2VuLCB0eXBlLCBmaW5kLFxyXG5cdFx0Y29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3RvcixcclxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoIChzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKSApO1xyXG5cclxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcclxuXHJcblx0Ly8gVHJ5IHRvIG1pbmltaXplIG9wZXJhdGlvbnMgaWYgdGhlcmUgaXMgbm8gc2VlZCBhbmQgb25seSBvbmUgZ3JvdXBcclxuXHRpZiAoIG1hdGNoLmxlbmd0aCA9PT0gMSApIHtcclxuXHJcblx0XHQvLyBUYWtlIGEgc2hvcnRjdXQgYW5kIHNldCB0aGUgY29udGV4dCBpZiB0aGUgcm9vdCBzZWxlY3RvciBpcyBhbiBJRFxyXG5cdFx0dG9rZW5zID0gbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZSggMCApO1xyXG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAodG9rZW4gPSB0b2tlbnNbMF0pLnR5cGUgPT09IFwiSURcIiAmJlxyXG5cdFx0XHRcdHN1cHBvcnQuZ2V0QnlJZCAmJiBjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmXHJcblx0XHRcdFx0RXhwci5yZWxhdGl2ZVsgdG9rZW5zWzFdLnR5cGUgXSApIHtcclxuXHJcblx0XHRcdGNvbnRleHQgPSAoIEV4cHIuZmluZFtcIklEXCJdKCB0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCBjb250ZXh0ICkgfHwgW10gKVswXTtcclxuXHRcdFx0aWYgKCAhY29udGV4dCApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcclxuXHJcblx0XHRcdC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcclxuXHRcdFx0fSBlbHNlIGlmICggY29tcGlsZWQgKSB7XHJcblx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xyXG5cdFx0aSA9IG1hdGNoRXhwcltcIm5lZWRzQ29udGV4dFwiXS50ZXN0KCBzZWxlY3RvciApID8gMCA6IHRva2Vucy5sZW5ndGg7XHJcblx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0dG9rZW4gPSB0b2tlbnNbaV07XHJcblxyXG5cdFx0XHQvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXHJcblx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgKHR5cGUgPSB0b2tlbi50eXBlKSBdICkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggKGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSkgKSB7XHJcblx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXHJcblx0XHRcdFx0aWYgKCAoc2VlZCA9IGZpbmQoXHJcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXHJcblx0XHRcdFx0XHRyc2libGluZy50ZXN0KCB0b2tlbnNbMF0udHlwZSApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XHJcblx0XHRcdFx0KSkgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XHJcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKCBpLCAxICk7XHJcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xyXG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XHJcblx0XHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIHNlZWQgKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcclxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXHJcblx0KCBjb21waWxlZCB8fCBjb21waWxlKCBzZWxlY3RvciwgbWF0Y2ggKSApKFxyXG5cdFx0c2VlZCxcclxuXHRcdGNvbnRleHQsXHJcblx0XHQhZG9jdW1lbnRJc0hUTUwsXHJcblx0XHRyZXN1bHRzLFxyXG5cdFx0cnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxyXG5cdCk7XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xyXG5cclxuLy8gU29ydCBzdGFiaWxpdHlcclxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KCBzb3J0T3JkZXIgKS5qb2luKFwiXCIpID09PSBleHBhbmRvO1xyXG5cclxuLy8gU3VwcG9ydDogQ2hyb21lPDE0XHJcbi8vIEFsd2F5cyBhc3N1bWUgZHVwbGljYXRlcyBpZiB0aGV5IGFyZW4ndCBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cclxuc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzID0gISFoYXNEdXBsaWNhdGU7XHJcblxyXG4vLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcclxuc2V0RG9jdW1lbnQoKTtcclxuXHJcbi8vIFN1cHBvcnQ6IFdlYmtpdDw1MzcuMzIgLSBTYWZhcmkgNi4wLjMvQ2hyb21lIDI1IChmaXhlZCBpbiBDaHJvbWUgMjcpXHJcbi8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxyXG5zdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiggZGl2MSApIHtcclxuXHQvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcclxuXHRyZXR1cm4gZGl2MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSApICYgMTtcclxufSk7XHJcblxyXG4vLyBTdXBwb3J0OiBJRTw4XHJcbi8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXHJcbi8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcclxuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XHJcblx0ZGl2LmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PC9hPlwiO1xyXG5cdHJldHVybiBkaXYuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIiA7XHJcbn0pICkge1xyXG5cdGFkZEhhbmRsZSggXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcclxuXHRcdGlmICggIWlzWE1MICkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMiApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBTdXBwb3J0OiBJRTw5XHJcbi8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcclxuaWYgKCAhc3VwcG9ydC5hdHRyaWJ1dGVzIHx8ICFhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcclxuXHRkaXYuaW5uZXJIVE1MID0gXCI8aW5wdXQvPlwiO1xyXG5cdGRpdi5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiLCBcIlwiICk7XHJcblx0cmV0dXJuIGRpdi5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XHJcbn0pICkge1xyXG5cdGFkZEhhbmRsZSggXCJ2YWx1ZVwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XHJcblx0XHRpZiAoICFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0uZGVmYXVsdFZhbHVlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBTdXBwb3J0OiBJRTw5XHJcbi8vIFVzZSBnZXRBdHRyaWJ1dGVOb2RlIHRvIGZldGNoIGJvb2xlYW5zIHdoZW4gZ2V0QXR0cmlidXRlIGxpZXNcclxuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XHJcblx0cmV0dXJuIGRpdi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsO1xyXG59KSApIHtcclxuXHRhZGRIYW5kbGUoIGJvb2xlYW5zLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XHJcblx0XHR2YXIgdmFsO1xyXG5cdFx0aWYgKCAhaXNYTUwgKSB7XHJcblx0XHRcdHJldHVybiBlbGVtWyBuYW1lIF0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOlxyXG5cdFx0XHRcdFx0KHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggbmFtZSApKSAmJiB2YWwuc3BlY2lmaWVkID9cclxuXHRcdFx0XHRcdHZhbC52YWx1ZSA6XHJcblx0XHRcdFx0bnVsbDtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxucmV0dXJuIFNpenpsZTtcclxuXHJcbn0pKCB3aW5kb3cgKTtcclxuXHJcblxyXG5cclxualF1ZXJ5LmZpbmQgPSBTaXp6bGU7XHJcbmpRdWVyeS5leHByID0gU2l6emxlLnNlbGVjdG9ycztcclxualF1ZXJ5LmV4cHJbXCI6XCJdID0galF1ZXJ5LmV4cHIucHNldWRvcztcclxualF1ZXJ5LnVuaXF1ZSA9IFNpenpsZS51bmlxdWVTb3J0O1xyXG5qUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xyXG5qUXVlcnkuaXNYTUxEb2MgPSBTaXp6bGUuaXNYTUw7XHJcbmpRdWVyeS5jb250YWlucyA9IFNpenpsZS5jb250YWlucztcclxuXHJcblxyXG5cclxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XHJcblxyXG52YXIgcnNpbmdsZVRhZyA9ICgvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8pO1xyXG5cclxuXHJcblxyXG52YXIgcmlzU2ltcGxlID0gL14uW146I1xcW1xcLixdKiQvO1xyXG5cclxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcclxuZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XHJcblx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcXVhbGlmaWVyICkgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcclxuXHRcdFx0LyoganNoaW50IC1XMDE4ICovXHJcblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIHR5cGVvZiBxdWFsaWZpZXIgPT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRpZiAoIHJpc1NpbXBsZS50ZXN0KCBxdWFsaWZpZXIgKSApIHtcclxuXHRcdFx0cmV0dXJuIGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHF1YWxpZmllciA9IGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0cmV0dXJuICggalF1ZXJ5LmluQXJyYXkoIGVsZW0sIHF1YWxpZmllciApID49IDAgKSAhPT0gbm90O1xyXG5cdH0pO1xyXG59XHJcblxyXG5qUXVlcnkuZmlsdGVyID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1zLCBub3QgKSB7XHJcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xyXG5cclxuXHRpZiAoIG5vdCApIHtcclxuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZWxlbXMubGVuZ3RoID09PSAxICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgP1xyXG5cdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBleHByICkgPyBbIGVsZW0gXSA6IFtdIDpcclxuXHRcdGpRdWVyeS5maW5kLm1hdGNoZXMoIGV4cHIsIGpRdWVyeS5ncmVwKCBlbGVtcywgZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxO1xyXG5cdFx0fSkpO1xyXG59O1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0ZmluZDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xyXG5cdFx0dmFyIGksXHJcblx0XHRcdHJldCA9IFtdLFxyXG5cdFx0XHRzZWxmID0gdGhpcyxcclxuXHRcdFx0bGVuID0gc2VsZi5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlcihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHNlbGZbIGkgXSwgdGhpcyApICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdFx0alF1ZXJ5LmZpbmQoIHNlbGVjdG9yLCBzZWxmWyBpIF0sIHJldCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIE5lZWRlZCBiZWNhdXNlICQoIHNlbGVjdG9yLCBjb250ZXh0ICkgYmVjb21lcyAkKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKVxyXG5cdFx0cmV0ID0gdGhpcy5wdXNoU3RhY2soIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlKCByZXQgKSA6IHJldCApO1xyXG5cdFx0cmV0LnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciA/IHRoaXMuc2VsZWN0b3IgKyBcIiBcIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH0sXHJcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyh0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UpICk7XHJcblx0fSxcclxuXHRub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcclxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KHRoaXMsIHNlbGVjdG9yIHx8IFtdLCB0cnVlKSApO1xyXG5cdH0sXHJcblx0aXM6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcclxuXHRcdHJldHVybiAhIXdpbm5vdyhcclxuXHRcdFx0dGhpcyxcclxuXHJcblx0XHRcdC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcclxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxyXG5cdFx0XHR0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgJiYgcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID9cclxuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9yICkgOlxyXG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KS5sZW5ndGg7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxyXG5cclxuXHJcbi8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxyXG52YXIgcm9vdGpRdWVyeSxcclxuXHJcblx0Ly8gVXNlIHRoZSBjb3JyZWN0IGRvY3VtZW50IGFjY29yZGluZ2x5IHdpdGggd2luZG93IGFyZ3VtZW50IChzYW5kYm94KVxyXG5cdGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxyXG5cclxuXHQvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xyXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICgjOTUyMSlcclxuXHQvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcclxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sXHJcblxyXG5cdGluaXQgPSBqUXVlcnkuZm4uaW5pdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcclxuXHRcdHZhciBtYXRjaCwgZWxlbTtcclxuXHJcblx0XHQvLyBIQU5ETEU6ICQoXCJcIiksICQobnVsbCksICQodW5kZWZpbmVkKSwgJChmYWxzZSlcclxuXHRcdGlmICggIXNlbGVjdG9yICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXHJcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdFx0aWYgKCBzZWxlY3Rvci5jaGFyQXQoMCkgPT09IFwiPFwiICYmIHNlbGVjdG9yLmNoYXJBdCggc2VsZWN0b3IubGVuZ3RoIC0gMSApID09PSBcIj5cIiAmJiBzZWxlY3Rvci5sZW5ndGggPj0gMyApIHtcclxuXHRcdFx0XHQvLyBBc3N1bWUgdGhhdCBzdHJpbmdzIHRoYXQgc3RhcnQgYW5kIGVuZCB3aXRoIDw+IGFyZSBIVE1MIGFuZCBza2lwIHRoZSByZWdleCBjaGVja1xyXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxyXG5cdFx0XHRpZiAoIG1hdGNoICYmIChtYXRjaFsxXSB8fCAhY29udGV4dCkgKSB7XHJcblxyXG5cdFx0XHRcdC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxyXG5cdFx0XHRcdGlmICggbWF0Y2hbMV0gKSB7XHJcblx0XHRcdFx0XHRjb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRleHRbMF0gOiBjb250ZXh0O1xyXG5cclxuXHRcdFx0XHRcdC8vIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcclxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XHJcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXHJcblx0XHRcdFx0XHRcdG1hdGNoWzFdLFxyXG5cdFx0XHRcdFx0XHRjb250ZXh0ICYmIGNvbnRleHQubm9kZVR5cGUgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IGRvY3VtZW50LFxyXG5cdFx0XHRcdFx0XHR0cnVlXHJcblx0XHRcdFx0XHQpICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxyXG5cdFx0XHRcdFx0aWYgKCByc2luZ2xlVGFnLnRlc3QoIG1hdGNoWzFdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcclxuXHRcdFx0XHRcdFx0Zm9yICggbWF0Y2ggaW4gY29udGV4dCApIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdGhpc1sgbWF0Y2ggXSApICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgb3RoZXJ3aXNlIHNldCBhcyBhdHRyaWJ1dGVzXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHRcdFx0Ly8gSEFORExFOiAkKCNpZClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsyXSApO1xyXG5cclxuXHRcdFx0XHRcdC8vIENoZWNrIHBhcmVudE5vZGUgdG8gY2F0Y2ggd2hlbiBCbGFja2JlcnJ5IDQuNiByZXR1cm5zXHJcblx0XHRcdFx0XHQvLyBub2RlcyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdGhlIGRvY3VtZW50ICM2OTYzXHJcblx0XHRcdFx0XHRpZiAoIGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdFx0XHQvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgSUUgYW5kIE9wZXJhIHJldHVybiBpdGVtc1xyXG5cdFx0XHRcdFx0XHQvLyBieSBuYW1lIGluc3RlYWQgb2YgSURcclxuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLmlkICE9PSBtYXRjaFsyXSApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcm9vdGpRdWVyeS5maW5kKCBzZWxlY3RvciApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIHdlIGluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XHJcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcclxuXHRcdFx0XHRcdFx0dGhpc1swXSA9IGVsZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jb250ZXh0ID0gZG9jdW1lbnQ7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxyXG5cdFx0XHR9IGVsc2UgaWYgKCAhY29udGV4dCB8fCBjb250ZXh0LmpxdWVyeSApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCBjb250ZXh0IHx8IHJvb3RqUXVlcnkgKS5maW5kKCBzZWxlY3RvciApO1xyXG5cclxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsIGNvbnRleHQpXHJcblx0XHRcdC8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8vIEhBTkRMRTogJChET01FbGVtZW50KVxyXG5cdFx0fSBlbHNlIGlmICggc2VsZWN0b3Iubm9kZVR5cGUgKSB7XHJcblx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXNbMF0gPSBzZWxlY3RvcjtcclxuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXHJcblx0XHQvLyBTaG9ydGN1dCBmb3IgZG9jdW1lbnQgcmVhZHlcclxuXHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBzZWxlY3RvciApICkge1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJvb3RqUXVlcnkucmVhZHkgIT09IFwidW5kZWZpbmVkXCIgP1xyXG5cdFx0XHRcdHJvb3RqUXVlcnkucmVhZHkoIHNlbGVjdG9yICkgOlxyXG5cdFx0XHRcdC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcclxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBzZWxlY3Rvci5zZWxlY3RvciAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3Iuc2VsZWN0b3I7XHJcblx0XHRcdHRoaXMuY29udGV4dCA9IHNlbGVjdG9yLmNvbnRleHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XHJcblx0fTtcclxuXHJcbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cclxuaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47XHJcblxyXG4vLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXHJcbnJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50ICk7XHJcblxyXG5cclxudmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxyXG5cdC8vIG1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XHJcblx0Z3VhcmFudGVlZFVuaXF1ZSA9IHtcclxuXHRcdGNoaWxkcmVuOiB0cnVlLFxyXG5cdFx0Y29udGVudHM6IHRydWUsXHJcblx0XHRuZXh0OiB0cnVlLFxyXG5cdFx0cHJldjogdHJ1ZVxyXG5cdH07XHJcblxyXG5qUXVlcnkuZXh0ZW5kKHtcclxuXHRkaXI6IGZ1bmN0aW9uKCBlbGVtLCBkaXIsIHVudGlsICkge1xyXG5cdFx0dmFyIG1hdGNoZWQgPSBbXSxcclxuXHRcdFx0Y3VyID0gZWxlbVsgZGlyIF07XHJcblxyXG5cdFx0d2hpbGUgKCBjdXIgJiYgY3VyLm5vZGVUeXBlICE9PSA5ICYmICh1bnRpbCA9PT0gdW5kZWZpbmVkIHx8IGN1ci5ub2RlVHlwZSAhPT0gMSB8fCAhalF1ZXJ5KCBjdXIgKS5pcyggdW50aWwgKSkgKSB7XHJcblx0XHRcdGlmICggY3VyLm5vZGVUeXBlID09PSAxICkge1xyXG5cdFx0XHRcdG1hdGNoZWQucHVzaCggY3VyICk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3VyID0gY3VyW2Rpcl07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbWF0Y2hlZDtcclxuXHR9LFxyXG5cclxuXHRzaWJsaW5nOiBmdW5jdGlvbiggbiwgZWxlbSApIHtcclxuXHRcdHZhciByID0gW107XHJcblxyXG5cdFx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcclxuXHRcdFx0aWYgKCBuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0gKSB7XHJcblx0XHRcdFx0ci5wdXNoKCBuICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHR9XHJcbn0pO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0aGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xyXG5cdFx0dmFyIGksXHJcblx0XHRcdHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxyXG5cdFx0XHRsZW4gPSB0YXJnZXRzLmxlbmd0aDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XHJcblx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHRoaXMsIHRhcmdldHNbaV0gKSApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0Y2xvc2VzdDogZnVuY3Rpb24oIHNlbGVjdG9ycywgY29udGV4dCApIHtcclxuXHRcdHZhciBjdXIsXHJcblx0XHRcdGkgPSAwLFxyXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXHJcblx0XHRcdG1hdGNoZWQgPSBbXSxcclxuXHRcdFx0cG9zID0gcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvcnMgKSB8fCB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiID9cclxuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9ycywgY29udGV4dCB8fCB0aGlzLmNvbnRleHQgKSA6XHJcblx0XHRcdFx0MDtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XHJcblx0XHRcdGZvciAoIGN1ciA9IHRoaXNbaV07IGN1ciAmJiBjdXIgIT09IGNvbnRleHQ7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xyXG5cdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKHBvcyA/XHJcblx0XHRcdFx0XHRwb3MuaW5kZXgoY3VyKSA+IC0xIDpcclxuXHJcblx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBTaXp6bGVcclxuXHRcdFx0XHRcdGN1ci5ub2RlVHlwZSA9PT0gMSAmJlxyXG5cdFx0XHRcdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoY3VyLCBzZWxlY3RvcnMpKSApIHtcclxuXHJcblx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlKCBtYXRjaGVkICkgOiBtYXRjaGVkICk7XHJcblx0fSxcclxuXHJcblx0Ly8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpblxyXG5cdC8vIHRoZSBtYXRjaGVkIHNldCBvZiBlbGVtZW50c1xyXG5cdGluZGV4OiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHJcblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxyXG5cdFx0aWYgKCAhZWxlbSApIHtcclxuXHRcdFx0cmV0dXJuICggdGhpc1swXSAmJiB0aGlzWzBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5kZXggaW4gc2VsZWN0b3JcclxuXHRcdGlmICggdHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdHJldHVybiBqUXVlcnkuaW5BcnJheSggdGhpc1swXSwgalF1ZXJ5KCBlbGVtICkgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBMb2NhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZXNpcmVkIGVsZW1lbnRcclxuXHRcdHJldHVybiBqUXVlcnkuaW5BcnJheShcclxuXHRcdFx0Ly8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXHJcblx0XHRcdGVsZW0uanF1ZXJ5ID8gZWxlbVswXSA6IGVsZW0sIHRoaXMgKTtcclxuXHR9LFxyXG5cclxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcclxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhcclxuXHRcdFx0alF1ZXJ5LnVuaXF1ZShcclxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMuZ2V0KCksIGpRdWVyeSggc2VsZWN0b3IsIGNvbnRleHQgKSApXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0fSxcclxuXHJcblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cclxuXHRcdFx0dGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlcihzZWxlY3RvcilcclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xyXG5cdGRvIHtcclxuXHRcdGN1ciA9IGN1clsgZGlyIF07XHJcblx0fSB3aGlsZSAoIGN1ciAmJiBjdXIubm9kZVR5cGUgIT09IDEgKTtcclxuXHJcblx0cmV0dXJuIGN1cjtcclxufVxyXG5cclxualF1ZXJ5LmVhY2goe1xyXG5cdHBhcmVudDogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xyXG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcclxuXHR9LFxyXG5cdHBhcmVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5kaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiICk7XHJcblx0fSxcclxuXHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcclxuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwgKTtcclxuXHR9LFxyXG5cdG5leHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xyXG5cdH0sXHJcblx0cHJldjogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xyXG5cdH0sXHJcblx0bmV4dEFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5LmRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XHJcblx0fSxcclxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XHJcblx0fSxcclxuXHRuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcclxuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XHJcblx0fSxcclxuXHRwcmV2VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcclxuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xyXG5cdH0sXHJcblx0c2libGluZ3M6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5zaWJsaW5nKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcclxuXHR9LFxyXG5cdGNoaWxkcmVuOiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdHJldHVybiBqUXVlcnkuc2libGluZyggZWxlbS5maXJzdENoaWxkICk7XHJcblx0fSxcclxuXHRjb250ZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5Lm5vZGVOYW1lKCBlbGVtLCBcImlmcmFtZVwiICkgP1xyXG5cdFx0XHRlbGVtLmNvbnRlbnREb2N1bWVudCB8fCBlbGVtLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQgOlxyXG5cdFx0XHRqUXVlcnkubWVyZ2UoIFtdLCBlbGVtLmNoaWxkTm9kZXMgKTtcclxuXHR9XHJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcclxuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCB1bnRpbCwgc2VsZWN0b3IgKSB7XHJcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XHJcblxyXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XHJcblx0XHRcdHNlbGVjdG9yID0gdW50aWw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdHJldCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCByZXQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcclxuXHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXNcclxuXHRcdFx0aWYgKCAhZ3VhcmFudGVlZFVuaXF1ZVsgbmFtZSBdICkge1xyXG5cdFx0XHRcdHJldCA9IGpRdWVyeS51bmlxdWUoIHJldCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBSZXZlcnNlIG9yZGVyIGZvciBwYXJlbnRzKiBhbmQgcHJldi1kZXJpdmF0aXZlc1xyXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0ID0gcmV0LnJldmVyc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggcmV0ICk7XHJcblx0fTtcclxufSk7XHJcbnZhciBybm90d2hpdGUgPSAoL1xcUysvZyk7XHJcblxyXG5cclxuXHJcbi8vIFN0cmluZyB0byBPYmplY3Qgb3B0aW9ucyBmb3JtYXQgY2FjaGVcclxudmFyIG9wdGlvbnNDYWNoZSA9IHt9O1xyXG5cclxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXMgYW5kIHN0b3JlIGluIGNhY2hlXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XHJcblx0dmFyIG9iamVjdCA9IG9wdGlvbnNDYWNoZVsgb3B0aW9ucyBdID0ge307XHJcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3R3aGl0ZSApIHx8IFtdLCBmdW5jdGlvbiggXywgZmxhZyApIHtcclxuXHRcdG9iamVjdFsgZmxhZyBdID0gdHJ1ZTtcclxuXHR9KTtcclxuXHRyZXR1cm4gb2JqZWN0O1xyXG59XHJcblxyXG4vKlxyXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICpcclxuICpcdG9wdGlvbnM6IGFuIG9wdGlvbmFsIGxpc3Qgb2Ygc3BhY2Utc2VwYXJhdGVkIG9wdGlvbnMgdGhhdCB3aWxsIGNoYW5nZSBob3dcclxuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQgYSBjYWxsYmFjayBsaXN0IHdpbGwgYWN0IGxpa2UgYW4gZXZlbnQgY2FsbGJhY2sgbGlzdCBhbmQgY2FuIGJlXHJcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cclxuICpcclxuICogUG9zc2libGUgb3B0aW9uczpcclxuICpcclxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxyXG4gKlxyXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcclxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxyXG4gKlx0XHRcdFx0XHR2YWx1ZXMgKGxpa2UgYSBEZWZlcnJlZClcclxuICpcclxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcclxuICpcclxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXHJcbiAqXHJcbiAqL1xyXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG5cdC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcclxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXHJcblx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cclxuXHRcdCggb3B0aW9uc0NhY2hlWyBvcHRpb25zIF0gfHwgY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApICkgOlxyXG5cdFx0alF1ZXJ5LmV4dGVuZCgge30sIG9wdGlvbnMgKTtcclxuXHJcblx0dmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcclxuXHRcdGZpcmluZyxcclxuXHRcdC8vIExhc3QgZmlyZSB2YWx1ZSAoZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0cylcclxuXHRcdG1lbW9yeSxcclxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXHJcblx0XHRmaXJlZCxcclxuXHRcdC8vIEVuZCBvZiB0aGUgbG9vcCB3aGVuIGZpcmluZ1xyXG5cdFx0ZmlyaW5nTGVuZ3RoLFxyXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgcmVtb3ZlIGlmIG5lZWRlZClcclxuXHRcdGZpcmluZ0luZGV4LFxyXG5cdFx0Ly8gRmlyc3QgY2FsbGJhY2sgdG8gZmlyZSAodXNlZCBpbnRlcm5hbGx5IGJ5IGFkZCBhbmQgZmlyZVdpdGgpXHJcblx0XHRmaXJpbmdTdGFydCxcclxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XHJcblx0XHRsaXN0ID0gW10sXHJcblx0XHQvLyBTdGFjayBvZiBmaXJlIGNhbGxzIGZvciByZXBlYXRhYmxlIGxpc3RzXHJcblx0XHRzdGFjayA9ICFvcHRpb25zLm9uY2UgJiYgW10sXHJcblx0XHQvLyBGaXJlIGNhbGxiYWNrc1xyXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cdFx0XHRtZW1vcnkgPSBvcHRpb25zLm1lbW9yeSAmJiBkYXRhO1xyXG5cdFx0XHRmaXJlZCA9IHRydWU7XHJcblx0XHRcdGZpcmluZ0luZGV4ID0gZmlyaW5nU3RhcnQgfHwgMDtcclxuXHRcdFx0ZmlyaW5nU3RhcnQgPSAwO1xyXG5cdFx0XHRmaXJpbmdMZW5ndGggPSBsaXN0Lmxlbmd0aDtcclxuXHRcdFx0ZmlyaW5nID0gdHJ1ZTtcclxuXHRcdFx0Zm9yICggOyBsaXN0ICYmIGZpcmluZ0luZGV4IDwgZmlyaW5nTGVuZ3RoOyBmaXJpbmdJbmRleCsrICkge1xyXG5cdFx0XHRcdGlmICggbGlzdFsgZmlyaW5nSW5kZXggXS5hcHBseSggZGF0YVsgMCBdLCBkYXRhWyAxIF0gKSA9PT0gZmFsc2UgJiYgb3B0aW9ucy5zdG9wT25GYWxzZSApIHtcclxuXHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlOyAvLyBUbyBwcmV2ZW50IGZ1cnRoZXIgY2FsbHMgdXNpbmcgYWRkXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZmlyaW5nID0gZmFsc2U7XHJcblx0XHRcdGlmICggbGlzdCApIHtcclxuXHRcdFx0XHRpZiAoIHN0YWNrICkge1xyXG5cdFx0XHRcdFx0aWYgKCBzdGFjay5sZW5ndGggKSB7XHJcblx0XHRcdFx0XHRcdGZpcmUoIHN0YWNrLnNoaWZ0KCkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBtZW1vcnkgKSB7XHJcblx0XHRcdFx0XHRsaXN0ID0gW107XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNlbGYuZGlzYWJsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XHJcblx0XHRzZWxmID0ge1xyXG5cdFx0XHQvLyBBZGQgYSBjYWxsYmFjayBvciBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIHRoZSBsaXN0XHJcblx0XHRcdGFkZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xyXG5cdFx0XHRcdFx0Ly8gRmlyc3QsIHdlIHNhdmUgdGhlIGN1cnJlbnQgbGVuZ3RoXHJcblx0XHRcdFx0XHR2YXIgc3RhcnQgPSBsaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdChmdW5jdGlvbiBhZGQoIGFyZ3MgKSB7XHJcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0eXBlID0galF1ZXJ5LnR5cGUoIGFyZyApO1xyXG5cdFx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCAhb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKCBhcmcgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKCBhcmcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBhcmcgJiYgYXJnLmxlbmd0aCAmJiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSW5zcGVjdCByZWN1cnNpdmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0YWRkKCBhcmcgKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSkoIGFyZ3VtZW50cyApO1xyXG5cdFx0XHRcdFx0Ly8gRG8gd2UgbmVlZCB0byBhZGQgdGhlIGNhbGxiYWNrcyB0byB0aGVcclxuXHRcdFx0XHRcdC8vIGN1cnJlbnQgZmlyaW5nIGJhdGNoP1xyXG5cdFx0XHRcdFx0aWYgKCBmaXJpbmcgKSB7XHJcblx0XHRcdFx0XHRcdGZpcmluZ0xlbmd0aCA9IGxpc3QubGVuZ3RoO1xyXG5cdFx0XHRcdFx0Ly8gV2l0aCBtZW1vcnksIGlmIHdlJ3JlIG5vdCBmaXJpbmcgdGhlblxyXG5cdFx0XHRcdFx0Ly8gd2Ugc2hvdWxkIGNhbGwgcmlnaHQgYXdheVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggbWVtb3J5ICkge1xyXG5cdFx0XHRcdFx0XHRmaXJpbmdTdGFydCA9IHN0YXJ0O1xyXG5cdFx0XHRcdFx0XHRmaXJlKCBtZW1vcnkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3RcclxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIGxpc3QgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkuZWFjaCggYXJndW1lbnRzLCBmdW5jdGlvbiggXywgYXJnICkge1xyXG5cdFx0XHRcdFx0XHR2YXIgaW5kZXg7XHJcblx0XHRcdFx0XHRcdHdoaWxlICggKCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KCBhcmcsIGxpc3QsIGluZGV4ICkgKSA+IC0xICkge1xyXG5cdFx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xyXG5cdFx0XHRcdFx0XHRcdGlmICggZmlyaW5nICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdMZW5ndGggKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpcmluZ0xlbmd0aC0tO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdJbmRleCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXgtLTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSBnaXZlbiBjYWxsYmFjayBpcyBpbiB0aGUgbGlzdC5cclxuXHRcdFx0Ly8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXHJcblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xyXG5cdFx0XHRcdHJldHVybiBmbiA/IGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOiAhISggbGlzdCAmJiBsaXN0Lmxlbmd0aCApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XHJcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsaXN0ID0gW107XHJcblx0XHRcdFx0ZmlyaW5nTGVuZ3RoID0gMDtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gSGF2ZSB0aGUgbGlzdCBkbyBub3RoaW5nIGFueW1vcmVcclxuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGlzdCA9IHN0YWNrID0gbWVtb3J5ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBJcyBpdCBkaXNhYmxlZD9cclxuXHRcdFx0ZGlzYWJsZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiAhbGlzdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gTG9jayB0aGUgbGlzdCBpbiBpdHMgY3VycmVudCBzdGF0ZVxyXG5cdFx0XHRsb2NrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzdGFjayA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoICFtZW1vcnkgKSB7XHJcblx0XHRcdFx0XHRzZWxmLmRpc2FibGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIElzIGl0IGxvY2tlZD9cclxuXHRcdFx0bG9ja2VkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gIXN0YWNrO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXHJcblx0XHRcdGZpcmVXaXRoOiBmdW5jdGlvbiggY29udGV4dCwgYXJncyApIHtcclxuXHRcdFx0XHRpZiAoIGxpc3QgJiYgKCAhZmlyZWQgfHwgc3RhY2sgKSApIHtcclxuXHRcdFx0XHRcdGFyZ3MgPSBhcmdzIHx8IFtdO1xyXG5cdFx0XHRcdFx0YXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcclxuXHRcdFx0XHRcdGlmICggZmlyaW5nICkge1xyXG5cdFx0XHRcdFx0XHRzdGFjay5wdXNoKCBhcmdzICk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmaXJlKCBhcmdzICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xyXG5cdFx0XHRmaXJlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXHJcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gISFmaXJlZDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0cmV0dXJuIHNlbGY7XHJcbn07XHJcblxyXG5cclxualF1ZXJ5LmV4dGVuZCh7XHJcblxyXG5cdERlZmVycmVkOiBmdW5jdGlvbiggZnVuYyApIHtcclxuXHRcdHZhciB0dXBsZXMgPSBbXHJcblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGxpc3RlbmVyIGxpc3QsIGZpbmFsIHN0YXRlXHJcblx0XHRcdFx0WyBcInJlc29sdmVcIiwgXCJkb25lXCIsIGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwgXCJyZXNvbHZlZFwiIF0sXHJcblx0XHRcdFx0WyBcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBcInJlamVjdGVkXCIgXSxcclxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSBdXHJcblx0XHRcdF0sXHJcblx0XHRcdHN0YXRlID0gXCJwZW5kaW5nXCIsXHJcblx0XHRcdHByb21pc2UgPSB7XHJcblx0XHRcdFx0c3RhdGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLmRvbmUoIGFyZ3VtZW50cyApLmZhaWwoIGFyZ3VtZW50cyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XHJcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZChmdW5jdGlvbiggbmV3RGVmZXIgKSB7XHJcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBqUXVlcnkuaXNGdW5jdGlvbiggZm5zWyBpIF0gKSAmJiBmbnNbIGkgXTtcclxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZFsgZG9uZSB8IGZhaWwgfCBwcm9ncmVzcyBdIGZvciBmb3J3YXJkaW5nIGFjdGlvbnMgdG8gbmV3RGVmZXJcclxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbMV0gXShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIHJldHVybmVkLnByb21pc2UgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQucHJvbWlzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmRvbmUoIG5ld0RlZmVyLnJlc29sdmUgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5wcm9ncmVzcyggbmV3RGVmZXIubm90aWZ5ICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlclsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IHByb21pc2UgPyBuZXdEZWZlci5wcm9taXNlKCkgOiB0aGlzLCBmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50cyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Zm5zID0gbnVsbDtcclxuXHRcdFx0XHRcdH0pLnByb21pc2UoKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIEdldCBhIHByb21pc2UgZm9yIHRoaXMgZGVmZXJyZWRcclxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XHJcblx0XHRcdFx0cHJvbWlzZTogZnVuY3Rpb24oIG9iaiApIHtcclxuXHRcdFx0XHRcdHJldHVybiBvYmogIT0gbnVsbCA/IGpRdWVyeS5leHRlbmQoIG9iaiwgcHJvbWlzZSApIDogcHJvbWlzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGRlZmVycmVkID0ge307XHJcblxyXG5cdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxyXG5cdFx0cHJvbWlzZS5waXBlID0gcHJvbWlzZS50aGVuO1xyXG5cclxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcclxuXHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcclxuXHRcdFx0dmFyIGxpc3QgPSB0dXBsZVsgMiBdLFxyXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDMgXTtcclxuXHJcblx0XHRcdC8vIHByb21pc2VbIGRvbmUgfCBmYWlsIHwgcHJvZ3Jlc3MgXSA9IGxpc3QuYWRkXHJcblx0XHRcdHByb21pc2VbIHR1cGxlWzFdIF0gPSBsaXN0LmFkZDtcclxuXHJcblx0XHRcdC8vIEhhbmRsZSBzdGF0ZVxyXG5cdFx0XHRpZiAoIHN0YXRlU3RyaW5nICkge1xyXG5cdFx0XHRcdGxpc3QuYWRkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Ly8gc3RhdGUgPSBbIHJlc29sdmVkIHwgcmVqZWN0ZWQgXVxyXG5cdFx0XHRcdFx0c3RhdGUgPSBzdGF0ZVN0cmluZztcclxuXHJcblx0XHRcdFx0Ly8gWyByZWplY3RfbGlzdCB8IHJlc29sdmVfbGlzdCBdLmRpc2FibGU7IHByb2dyZXNzX2xpc3QubG9ja1xyXG5cdFx0XHRcdH0sIHR1cGxlc1sgaSBeIDEgXVsgMiBdLmRpc2FibGUsIHR1cGxlc1sgMiBdWyAyIF0ubG9jayApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBkZWZlcnJlZFsgcmVzb2x2ZSB8IHJlamVjdCB8IG5vdGlmeSBdXHJcblx0XHRcdGRlZmVycmVkWyB0dXBsZVswXSBdID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWzBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gZGVmZXJyZWQgPyBwcm9taXNlIDogdGhpcywgYXJndW1lbnRzICk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH07XHJcblx0XHRcdGRlZmVycmVkWyB0dXBsZVswXSArIFwiV2l0aFwiIF0gPSBsaXN0LmZpcmVXaXRoO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXHJcblx0XHRwcm9taXNlLnByb21pc2UoIGRlZmVycmVkICk7XHJcblxyXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxyXG5cdFx0aWYgKCBmdW5jICkge1xyXG5cdFx0XHRmdW5jLmNhbGwoIGRlZmVycmVkLCBkZWZlcnJlZCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFsbCBkb25lIVxyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH0sXHJcblxyXG5cdC8vIERlZmVycmVkIGhlbHBlclxyXG5cdHdoZW46IGZ1bmN0aW9uKCBzdWJvcmRpbmF0ZSAvKiAsIC4uLiwgc3Vib3JkaW5hdGVOICovICkge1xyXG5cdFx0dmFyIGkgPSAwLFxyXG5cdFx0XHRyZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXHJcblx0XHRcdGxlbmd0aCA9IHJlc29sdmVWYWx1ZXMubGVuZ3RoLFxyXG5cclxuXHRcdFx0Ly8gdGhlIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xyXG5cdFx0XHRyZW1haW5pbmcgPSBsZW5ndGggIT09IDEgfHwgKCBzdWJvcmRpbmF0ZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggc3Vib3JkaW5hdGUucHJvbWlzZSApICkgPyBsZW5ndGggOiAwLFxyXG5cclxuXHRcdFx0Ly8gdGhlIG1hc3RlciBEZWZlcnJlZC4gSWYgcmVzb2x2ZVZhbHVlcyBjb25zaXN0IG9mIG9ubHkgYSBzaW5nbGUgRGVmZXJyZWQsIGp1c3QgdXNlIHRoYXQuXHJcblx0XHRcdGRlZmVycmVkID0gcmVtYWluaW5nID09PSAxID8gc3Vib3JkaW5hdGUgOiBqUXVlcnkuRGVmZXJyZWQoKSxcclxuXHJcblx0XHRcdC8vIFVwZGF0ZSBmdW5jdGlvbiBmb3IgYm90aCByZXNvbHZlIGFuZCBwcm9ncmVzcyB2YWx1ZXNcclxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpLCBjb250ZXh0cywgdmFsdWVzICkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0XHRjb250ZXh0c1sgaSBdID0gdGhpcztcclxuXHRcdFx0XHRcdHZhbHVlc1sgaSBdID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSA6IHZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZXMgPT09IHByb2dyZXNzVmFsdWVzICkge1xyXG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBjb250ZXh0cywgdmFsdWVzICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggISgtLXJlbWFpbmluZykgKSB7XHJcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjb250ZXh0cywgdmFsdWVzICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHByb2dyZXNzVmFsdWVzLCBwcm9ncmVzc0NvbnRleHRzLCByZXNvbHZlQ29udGV4dHM7XHJcblxyXG5cdFx0Ly8gYWRkIGxpc3RlbmVycyB0byBEZWZlcnJlZCBzdWJvcmRpbmF0ZXM7IHRyZWF0IG90aGVycyBhcyByZXNvbHZlZFxyXG5cdFx0aWYgKCBsZW5ndGggPiAxICkge1xyXG5cdFx0XHRwcm9ncmVzc1ZhbHVlcyA9IG5ldyBBcnJheSggbGVuZ3RoICk7XHJcblx0XHRcdHByb2dyZXNzQ29udGV4dHMgPSBuZXcgQXJyYXkoIGxlbmd0aCApO1xyXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBuZXcgQXJyYXkoIGxlbmd0aCApO1xyXG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIHJlc29sdmVWYWx1ZXNbIGkgXSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggcmVzb2x2ZVZhbHVlc1sgaSBdLnByb21pc2UgKSApIHtcclxuXHRcdFx0XHRcdHJlc29sdmVWYWx1ZXNbIGkgXS5wcm9taXNlKClcclxuXHRcdFx0XHRcdFx0LmRvbmUoIHVwZGF0ZUZ1bmMoIGksIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApIClcclxuXHRcdFx0XHRcdFx0LmZhaWwoIGRlZmVycmVkLnJlamVjdCApXHJcblx0XHRcdFx0XHRcdC5wcm9ncmVzcyggdXBkYXRlRnVuYyggaSwgcHJvZ3Jlc3NDb250ZXh0cywgcHJvZ3Jlc3NWYWx1ZXMgKSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQtLXJlbWFpbmluZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSdyZSBub3Qgd2FpdGluZyBvbiBhbnl0aGluZywgcmVzb2x2ZSB0aGUgbWFzdGVyXHJcblx0XHRpZiAoICFyZW1haW5pbmcgKSB7XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XHJcbnZhciByZWFkeUxpc3Q7XHJcblxyXG5qUXVlcnkuZm4ucmVhZHkgPSBmdW5jdGlvbiggZm4gKSB7XHJcblx0Ly8gQWRkIHRoZSBjYWxsYmFja1xyXG5cdGpRdWVyeS5yZWFkeS5wcm9taXNlKCkuZG9uZSggZm4gKTtcclxuXHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5qUXVlcnkuZXh0ZW5kKHtcclxuXHQvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxyXG5cdGlzUmVhZHk6IGZhbHNlLFxyXG5cclxuXHQvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXHJcblx0Ly8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcclxuXHRyZWFkeVdhaXQ6IDEsXHJcblxyXG5cdC8vIEhvbGQgKG9yIHJlbGVhc2UpIHRoZSByZWFkeSBldmVudFxyXG5cdGhvbGRSZWFkeTogZnVuY3Rpb24oIGhvbGQgKSB7XHJcblx0XHRpZiAoIGhvbGQgKSB7XHJcblx0XHRcdGpRdWVyeS5yZWFkeVdhaXQrKztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGpRdWVyeS5yZWFkeSggdHJ1ZSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcclxuXHRyZWFkeTogZnVuY3Rpb24oIHdhaXQgKSB7XHJcblxyXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxyXG5cdFx0aWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBNYWtlIHN1cmUgYm9keSBleGlzdHMsIGF0IGxlYXN0LCBpbiBjYXNlIElFIGdldHMgYSBsaXR0bGUgb3ZlcnplYWxvdXMgKHRpY2tldCAjNTQ0MykuXHJcblx0XHRpZiAoICFkb2N1bWVudC5ib2R5ICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XHJcblx0XHRqUXVlcnkuaXNSZWFkeSA9IHRydWU7XHJcblxyXG5cdFx0Ly8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcclxuXHRcdGlmICggd2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxyXG5cdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xyXG5cclxuXHRcdC8vIFRyaWdnZXIgYW55IGJvdW5kIHJlYWR5IGV2ZW50c1xyXG5cdFx0aWYgKCBqUXVlcnkuZm4udHJpZ2dlckhhbmRsZXIgKSB7XHJcblx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VySGFuZGxlciggXCJyZWFkeVwiICk7XHJcblx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS5vZmYoIFwicmVhZHlcIiApO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4vKipcclxuICogQ2xlYW4tdXAgbWV0aG9kIGZvciBkb20gcmVhZHkgZXZlbnRzXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXRhY2goKSB7XHJcblx0aWYgKCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICkge1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCwgZmFsc2UgKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkLCBmYWxzZSApO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZGV0YWNoRXZlbnQoIFwib25yZWFkeXN0YXRlY2hhbmdlXCIsIGNvbXBsZXRlZCApO1xyXG5cdFx0d2luZG93LmRldGFjaEV2ZW50KCBcIm9ubG9hZFwiLCBjb21wbGV0ZWQgKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxyXG4gKi9cclxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xyXG5cdC8vIHJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiBpcyBnb29kIGVub3VnaCBmb3IgdXMgdG8gY2FsbCB0aGUgZG9tIHJlYWR5IGluIG9sZElFXHJcblx0aWYgKCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyIHx8IGV2ZW50LnR5cGUgPT09IFwibG9hZFwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiApIHtcclxuXHRcdGRldGFjaCgpO1xyXG5cdFx0alF1ZXJ5LnJlYWR5KCk7XHJcblx0fVxyXG59XHJcblxyXG5qUXVlcnkucmVhZHkucHJvbWlzZSA9IGZ1bmN0aW9uKCBvYmogKSB7XHJcblx0aWYgKCAhcmVhZHlMaXN0ICkge1xyXG5cclxuXHRcdHJlYWR5TGlzdCA9IGpRdWVyeS5EZWZlcnJlZCgpO1xyXG5cclxuXHRcdC8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxyXG5cdFx0Ly8gd2Ugb25jZSB0cmllZCB0byB1c2UgcmVhZHlTdGF0ZSBcImludGVyYWN0aXZlXCIgaGVyZSwgYnV0IGl0IGNhdXNlZCBpc3N1ZXMgbGlrZSB0aGUgb25lXHJcblx0XHQvLyBkaXNjb3ZlcmVkIGJ5IENocmlzUyBoZXJlOiBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjI4MiNjb21tZW50OjE1XHJcblx0XHRpZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiApIHtcclxuXHRcdFx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XHJcblx0XHRcdHNldFRpbWVvdXQoIGpRdWVyeS5yZWFkeSApO1xyXG5cclxuXHRcdC8vIFN0YW5kYXJkcy1iYXNlZCBicm93c2VycyBzdXBwb3J0IERPTUNvbnRlbnRMb2FkZWRcclxuXHRcdH0gZWxzZSBpZiAoIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgKSB7XHJcblx0XHRcdC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCwgZmFsc2UgKTtcclxuXHJcblx0XHRcdC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkLCBmYWxzZSApO1xyXG5cclxuXHRcdC8vIElmIElFIGV2ZW50IG1vZGVsIGlzIHVzZWRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEVuc3VyZSBmaXJpbmcgYmVmb3JlIG9ubG9hZCwgbWF5YmUgbGF0ZSBidXQgc2FmZSBhbHNvIGZvciBpZnJhbWVzXHJcblx0XHRcdGRvY3VtZW50LmF0dGFjaEV2ZW50KCBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLCBjb21wbGV0ZWQgKTtcclxuXHJcblx0XHRcdC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXHJcblx0XHRcdHdpbmRvdy5hdHRhY2hFdmVudCggXCJvbmxvYWRcIiwgY29tcGxldGVkICk7XHJcblxyXG5cdFx0XHQvLyBJZiBJRSBhbmQgbm90IGEgZnJhbWVcclxuXHRcdFx0Ly8gY29udGludWFsbHkgY2hlY2sgdG8gc2VlIGlmIHRoZSBkb2N1bWVudCBpcyByZWFkeVxyXG5cdFx0XHR2YXIgdG9wID0gZmFsc2U7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRvcCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgPT0gbnVsbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRcdH0gY2F0Y2goZSkge31cclxuXHJcblx0XHRcdGlmICggdG9wICYmIHRvcC5kb1Njcm9sbCApIHtcclxuXHRcdFx0XHQoZnVuY3Rpb24gZG9TY3JvbGxDaGVjaygpIHtcclxuXHRcdFx0XHRcdGlmICggIWpRdWVyeS5pc1JlYWR5ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHRyaWNrIGJ5IERpZWdvIFBlcmluaVxyXG5cdFx0XHRcdFx0XHRcdC8vIGh0dHA6Ly9qYXZhc2NyaXB0Lm53Ym94LmNvbS9JRUNvbnRlbnRMb2FkZWQvXHJcblx0XHRcdFx0XHRcdFx0dG9wLmRvU2Nyb2xsKFwibGVmdFwiKTtcclxuXHRcdFx0XHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoIGRvU2Nyb2xsQ2hlY2ssIDUwICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIGRldGFjaCBhbGwgZG9tIHJlYWR5IGV2ZW50c1xyXG5cdFx0XHRcdFx0XHRkZXRhY2goKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGFuZCBleGVjdXRlIGFueSB3YWl0aW5nIGZ1bmN0aW9uc1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkucmVhZHkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZWFkeUxpc3QucHJvbWlzZSggb2JqICk7XHJcbn07XHJcblxyXG5cclxudmFyIHN0cnVuZGVmaW5lZCA9IHR5cGVvZiB1bmRlZmluZWQ7XHJcblxyXG5cclxuXHJcbi8vIFN1cHBvcnQ6IElFPDlcclxuLy8gSXRlcmF0aW9uIG92ZXIgb2JqZWN0J3MgaW5oZXJpdGVkIHByb3BlcnRpZXMgYmVmb3JlIGl0cyBvd25cclxudmFyIGk7XHJcbmZvciAoIGkgaW4galF1ZXJ5KCBzdXBwb3J0ICkgKSB7XHJcblx0YnJlYWs7XHJcbn1cclxuc3VwcG9ydC5vd25MYXN0ID0gaSAhPT0gXCIwXCI7XHJcblxyXG4vLyBOb3RlOiBtb3N0IHN1cHBvcnQgdGVzdHMgYXJlIGRlZmluZWQgaW4gdGhlaXIgcmVzcGVjdGl2ZSBtb2R1bGVzLlxyXG4vLyBmYWxzZSB1bnRpbCB0aGUgdGVzdCBpcyBydW5cclxuc3VwcG9ydC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0ID0gZmFsc2U7XHJcblxyXG4vLyBFeGVjdXRlIEFTQVAgaW4gY2FzZSB3ZSBuZWVkIHRvIHNldCBib2R5LnN0eWxlLnpvb21cclxualF1ZXJ5KGZ1bmN0aW9uKCkge1xyXG5cdC8vIE1pbmlmaWVkOiB2YXIgYSxiLGMsZFxyXG5cdHZhciB2YWwsIGRpdiwgYm9keSwgY29udGFpbmVyO1xyXG5cclxuXHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiYm9keVwiIClbIDAgXTtcclxuXHRpZiAoICFib2R5IHx8ICFib2R5LnN0eWxlICkge1xyXG5cdFx0Ly8gUmV0dXJuIGZvciBmcmFtZXNldCBkb2NzIHRoYXQgZG9uJ3QgaGF2ZSBhIGJvZHlcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIFNldHVwXHJcblx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xyXG5cdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHhcIjtcclxuXHRib2R5LmFwcGVuZENoaWxkKCBjb250YWluZXIgKS5hcHBlbmRDaGlsZCggZGl2ICk7XHJcblxyXG5cdGlmICggdHlwZW9mIGRpdi5zdHlsZS56b29tICE9PSBzdHJ1bmRlZmluZWQgKSB7XHJcblx0XHQvLyBTdXBwb3J0OiBJRTw4XHJcblx0XHQvLyBDaGVjayBpZiBuYXRpdmVseSBibG9jay1sZXZlbCBlbGVtZW50cyBhY3QgbGlrZSBpbmxpbmUtYmxvY2tcclxuXHRcdC8vIGVsZW1lbnRzIHdoZW4gc2V0dGluZyB0aGVpciBkaXNwbGF5IHRvICdpbmxpbmUnIGFuZCBnaXZpbmdcclxuXHRcdC8vIHRoZW0gbGF5b3V0XHJcblx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTppbmxpbmU7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzoxcHg7d2lkdGg6MXB4O3pvb206MVwiO1xyXG5cclxuXHRcdHN1cHBvcnQuaW5saW5lQmxvY2tOZWVkc0xheW91dCA9IHZhbCA9IGRpdi5vZmZzZXRXaWR0aCA9PT0gMztcclxuXHRcdGlmICggdmFsICkge1xyXG5cdFx0XHQvLyBQcmV2ZW50IElFIDYgZnJvbSBhZmZlY3RpbmcgbGF5b3V0IGZvciBwb3NpdGlvbmVkIGVsZW1lbnRzICMxMTA0OFxyXG5cdFx0XHQvLyBQcmV2ZW50IElFIGZyb20gc2hyaW5raW5nIHRoZSBib2R5IGluIElFIDcgbW9kZSAjMTI4NjlcclxuXHRcdFx0Ly8gU3VwcG9ydDogSUU8OFxyXG5cdFx0XHRib2R5LnN0eWxlLnpvb20gPSAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ym9keS5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XHJcblxyXG5cdC8vIEV4ZWN1dGUgdGhlIHRlc3Qgb25seSBpZiBub3QgYWxyZWFkeSBleGVjdXRlZCBpbiBhbm90aGVyIG1vZHVsZS5cclxuXHRpZiAoc3VwcG9ydC5kZWxldGVFeHBhbmRvID09IG51bGwpIHtcclxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcclxuXHRcdHN1cHBvcnQuZGVsZXRlRXhwYW5kbyA9IHRydWU7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRkZWxldGUgZGl2LnRlc3Q7XHJcblx0XHR9IGNhdGNoKCBlICkge1xyXG5cdFx0XHRzdXBwb3J0LmRlbGV0ZUV4cGFuZG8gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIE51bGwgZWxlbWVudHMgdG8gYXZvaWQgbGVha3MgaW4gSUUuXHJcblx0ZGl2ID0gbnVsbDtcclxufSkoKTtcclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBjYW4gaGF2ZSBkYXRhXHJcbiAqL1xyXG5qUXVlcnkuYWNjZXB0RGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdHZhciBub0RhdGEgPSBqUXVlcnkubm9EYXRhWyAoZWxlbS5ub2RlTmFtZSArIFwiIFwiKS50b0xvd2VyQ2FzZSgpIF0sXHJcblx0XHRub2RlVHlwZSA9ICtlbGVtLm5vZGVUeXBlIHx8IDE7XHJcblxyXG5cdC8vIERvIG5vdCBzZXQgZGF0YSBvbiBub24tZWxlbWVudCBET00gbm9kZXMgYmVjYXVzZSBpdCB3aWxsIG5vdCBiZSBjbGVhcmVkICgjODMzNSkuXHJcblx0cmV0dXJuIG5vZGVUeXBlICE9PSAxICYmIG5vZGVUeXBlICE9PSA5ID9cclxuXHRcdGZhbHNlIDpcclxuXHJcblx0XHQvLyBOb2RlcyBhY2NlcHQgZGF0YSB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZDsgcmVqZWN0aW9uIGNhbiBiZSBjb25kaXRpb25hbFxyXG5cdFx0IW5vRGF0YSB8fCBub0RhdGEgIT09IHRydWUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc2lkXCIpID09PSBub0RhdGE7XHJcbn07XHJcblxyXG5cclxudmFyIHJicmFjZSA9IC9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxcclxuXHRybXVsdGlEYXNoID0gLyhbQS1aXSkvZztcclxuXHJcbmZ1bmN0aW9uIGRhdGFBdHRyKCBlbGVtLCBrZXksIGRhdGEgKSB7XHJcblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxyXG5cdC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxyXG5cdGlmICggZGF0YSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XHJcblxyXG5cdFx0dmFyIG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZSggcm11bHRpRGFzaCwgXCItJDFcIiApLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0ZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XHJcblxyXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRkYXRhID0gZGF0YSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDpcclxuXHRcdFx0XHRcdGRhdGEgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDpcclxuXHRcdFx0XHRcdGRhdGEgPT09IFwibnVsbFwiID8gbnVsbCA6XHJcblx0XHRcdFx0XHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xyXG5cdFx0XHRcdFx0K2RhdGEgKyBcIlwiID09PSBkYXRhID8gK2RhdGEgOlxyXG5cdFx0XHRcdFx0cmJyYWNlLnRlc3QoIGRhdGEgKSA/IGpRdWVyeS5wYXJzZUpTT04oIGRhdGEgKSA6XHJcblx0XHRcdFx0XHRkYXRhO1xyXG5cdFx0XHR9IGNhdGNoKCBlICkge31cclxuXHJcblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxyXG5cdFx0XHRqUXVlcnkuZGF0YSggZWxlbSwga2V5LCBkYXRhICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vLyBjaGVja3MgYSBjYWNoZSBvYmplY3QgZm9yIGVtcHRpbmVzc1xyXG5mdW5jdGlvbiBpc0VtcHR5RGF0YU9iamVjdCggb2JqICkge1xyXG5cdHZhciBuYW1lO1xyXG5cdGZvciAoIG5hbWUgaW4gb2JqICkge1xyXG5cclxuXHRcdC8vIGlmIHRoZSBwdWJsaWMgZGF0YSBvYmplY3QgaXMgZW1wdHksIHRoZSBwcml2YXRlIGlzIHN0aWxsIGVtcHR5XHJcblx0XHRpZiAoIG5hbWUgPT09IFwiZGF0YVwiICYmIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBvYmpbbmFtZV0gKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRpZiAoIG5hbWUgIT09IFwidG9KU09OXCIgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRlcm5hbERhdGEoIGVsZW0sIG5hbWUsIGRhdGEsIHB2dCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcclxuXHRpZiAoICFqUXVlcnkuYWNjZXB0RGF0YSggZWxlbSApICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dmFyIHJldCwgdGhpc0NhY2hlLFxyXG5cdFx0aW50ZXJuYWxLZXkgPSBqUXVlcnkuZXhwYW5kbyxcclxuXHJcblx0XHQvLyBXZSBoYXZlIHRvIGhhbmRsZSBET00gbm9kZXMgYW5kIEpTIG9iamVjdHMgZGlmZmVyZW50bHkgYmVjYXVzZSBJRTYtN1xyXG5cdFx0Ly8gY2FuJ3QgR0Mgb2JqZWN0IHJlZmVyZW5jZXMgcHJvcGVybHkgYWNyb3NzIHRoZSBET00tSlMgYm91bmRhcnlcclxuXHRcdGlzTm9kZSA9IGVsZW0ubm9kZVR5cGUsXHJcblxyXG5cdFx0Ly8gT25seSBET00gbm9kZXMgbmVlZCB0aGUgZ2xvYmFsIGpRdWVyeSBjYWNoZTsgSlMgb2JqZWN0IGRhdGEgaXNcclxuXHRcdC8vIGF0dGFjaGVkIGRpcmVjdGx5IHRvIHRoZSBvYmplY3Qgc28gR0MgY2FuIG9jY3VyIGF1dG9tYXRpY2FsbHlcclxuXHRcdGNhY2hlID0gaXNOb2RlID8galF1ZXJ5LmNhY2hlIDogZWxlbSxcclxuXHJcblx0XHQvLyBPbmx5IGRlZmluaW5nIGFuIElEIGZvciBKUyBvYmplY3RzIGlmIGl0cyBjYWNoZSBhbHJlYWR5IGV4aXN0cyBhbGxvd3NcclxuXHRcdC8vIHRoZSBjb2RlIHRvIHNob3J0Y3V0IG9uIHRoZSBzYW1lIHBhdGggYXMgYSBET00gbm9kZSB3aXRoIG5vIGNhY2hlXHJcblx0XHRpZCA9IGlzTm9kZSA/IGVsZW1bIGludGVybmFsS2V5IF0gOiBlbGVtWyBpbnRlcm5hbEtleSBdICYmIGludGVybmFsS2V5O1xyXG5cclxuXHQvLyBBdm9pZCBkb2luZyBhbnkgbW9yZSB3b3JrIHRoYW4gd2UgbmVlZCB0byB3aGVuIHRyeWluZyB0byBnZXQgZGF0YSBvbiBhblxyXG5cdC8vIG9iamVjdCB0aGF0IGhhcyBubyBkYXRhIGF0IGFsbFxyXG5cdGlmICggKCFpZCB8fCAhY2FjaGVbaWRdIHx8ICghcHZ0ICYmICFjYWNoZVtpZF0uZGF0YSkpICYmIGRhdGEgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggIWlkICkge1xyXG5cdFx0Ly8gT25seSBET00gbm9kZXMgbmVlZCBhIG5ldyB1bmlxdWUgSUQgZm9yIGVhY2ggZWxlbWVudCBzaW5jZSB0aGVpciBkYXRhXHJcblx0XHQvLyBlbmRzIHVwIGluIHRoZSBnbG9iYWwgY2FjaGVcclxuXHRcdGlmICggaXNOb2RlICkge1xyXG5cdFx0XHRpZCA9IGVsZW1bIGludGVybmFsS2V5IF0gPSBkZWxldGVkSWRzLnBvcCgpIHx8IGpRdWVyeS5ndWlkKys7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZCA9IGludGVybmFsS2V5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCAhY2FjaGVbIGlkIF0gKSB7XHJcblx0XHQvLyBBdm9pZCBleHBvc2luZyBqUXVlcnkgbWV0YWRhdGEgb24gcGxhaW4gSlMgb2JqZWN0cyB3aGVuIHRoZSBvYmplY3RcclxuXHRcdC8vIGlzIHNlcmlhbGl6ZWQgdXNpbmcgSlNPTi5zdHJpbmdpZnlcclxuXHRcdGNhY2hlWyBpZCBdID0gaXNOb2RlID8ge30gOiB7IHRvSlNPTjogalF1ZXJ5Lm5vb3AgfTtcclxuXHR9XHJcblxyXG5cdC8vIEFuIG9iamVjdCBjYW4gYmUgcGFzc2VkIHRvIGpRdWVyeS5kYXRhIGluc3RlYWQgb2YgYSBrZXkvdmFsdWUgcGFpcjsgdGhpcyBnZXRzXHJcblx0Ly8gc2hhbGxvdyBjb3BpZWQgb3ZlciBvbnRvIHRoZSBleGlzdGluZyBjYWNoZVxyXG5cdGlmICggdHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiApIHtcclxuXHRcdGlmICggcHZ0ICkge1xyXG5cdFx0XHRjYWNoZVsgaWQgXSA9IGpRdWVyeS5leHRlbmQoIGNhY2hlWyBpZCBdLCBuYW1lICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjYWNoZVsgaWQgXS5kYXRhID0galF1ZXJ5LmV4dGVuZCggY2FjaGVbIGlkIF0uZGF0YSwgbmFtZSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpc0NhY2hlID0gY2FjaGVbIGlkIF07XHJcblxyXG5cdC8vIGpRdWVyeSBkYXRhKCkgaXMgc3RvcmVkIGluIGEgc2VwYXJhdGUgb2JqZWN0IGluc2lkZSB0aGUgb2JqZWN0J3MgaW50ZXJuYWwgZGF0YVxyXG5cdC8vIGNhY2hlIGluIG9yZGVyIHRvIGF2b2lkIGtleSBjb2xsaXNpb25zIGJldHdlZW4gaW50ZXJuYWwgZGF0YSBhbmQgdXNlci1kZWZpbmVkXHJcblx0Ly8gZGF0YS5cclxuXHRpZiAoICFwdnQgKSB7XHJcblx0XHRpZiAoICF0aGlzQ2FjaGUuZGF0YSApIHtcclxuXHRcdFx0dGhpc0NhY2hlLmRhdGEgPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzQ2FjaGUgPSB0aGlzQ2FjaGUuZGF0YTtcclxuXHR9XHJcblxyXG5cdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0dGhpc0NhY2hlWyBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lICkgXSA9IGRhdGE7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayBmb3IgYm90aCBjb252ZXJ0ZWQtdG8tY2FtZWwgYW5kIG5vbi1jb252ZXJ0ZWQgZGF0YSBwcm9wZXJ0eSBuYW1lc1xyXG5cdC8vIElmIGEgZGF0YSBwcm9wZXJ0eSB3YXMgc3BlY2lmaWVkXHJcblx0aWYgKCB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHJcblx0XHQvLyBGaXJzdCBUcnkgdG8gZmluZCBhcy1pcyBwcm9wZXJ0eSBkYXRhXHJcblx0XHRyZXQgPSB0aGlzQ2FjaGVbIG5hbWUgXTtcclxuXHJcblx0XHQvLyBUZXN0IGZvciBudWxsfHVuZGVmaW5lZCBwcm9wZXJ0eSBkYXRhXHJcblx0XHRpZiAoIHJldCA9PSBudWxsICkge1xyXG5cclxuXHRcdFx0Ly8gVHJ5IHRvIGZpbmQgdGhlIGNhbWVsQ2FzZWQgcHJvcGVydHlcclxuXHRcdFx0cmV0ID0gdGhpc0NhY2hlWyBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lICkgXTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0ID0gdGhpc0NhY2hlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJldDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50ZXJuYWxSZW1vdmVEYXRhKCBlbGVtLCBuYW1lLCBwdnQgKSB7XHJcblx0aWYgKCAhalF1ZXJ5LmFjY2VwdERhdGEoIGVsZW0gKSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHZhciB0aGlzQ2FjaGUsIGksXHJcblx0XHRpc05vZGUgPSBlbGVtLm5vZGVUeXBlLFxyXG5cclxuXHRcdC8vIFNlZSBqUXVlcnkuZGF0YSBmb3IgbW9yZSBpbmZvcm1hdGlvblxyXG5cdFx0Y2FjaGUgPSBpc05vZGUgPyBqUXVlcnkuY2FjaGUgOiBlbGVtLFxyXG5cdFx0aWQgPSBpc05vZGUgPyBlbGVtWyBqUXVlcnkuZXhwYW5kbyBdIDogalF1ZXJ5LmV4cGFuZG87XHJcblxyXG5cdC8vIElmIHRoZXJlIGlzIGFscmVhZHkgbm8gY2FjaGUgZW50cnkgZm9yIHRoaXMgb2JqZWN0LCB0aGVyZSBpcyBub1xyXG5cdC8vIHB1cnBvc2UgaW4gY29udGludWluZ1xyXG5cdGlmICggIWNhY2hlWyBpZCBdICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCBuYW1lICkge1xyXG5cclxuXHRcdHRoaXNDYWNoZSA9IHB2dCA/IGNhY2hlWyBpZCBdIDogY2FjaGVbIGlkIF0uZGF0YTtcclxuXHJcblx0XHRpZiAoIHRoaXNDYWNoZSApIHtcclxuXHJcblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBuYW1lcyBmb3IgZGF0YSBrZXlzXHJcblx0XHRcdGlmICggIWpRdWVyeS5pc0FycmF5KCBuYW1lICkgKSB7XHJcblxyXG5cdFx0XHRcdC8vIHRyeSB0aGUgc3RyaW5nIGFzIGEga2V5IGJlZm9yZSBhbnkgbWFuaXB1bGF0aW9uXHJcblx0XHRcdFx0aWYgKCBuYW1lIGluIHRoaXNDYWNoZSApIHtcclxuXHRcdFx0XHRcdG5hbWUgPSBbIG5hbWUgXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdC8vIHNwbGl0IHRoZSBjYW1lbCBjYXNlZCB2ZXJzaW9uIGJ5IHNwYWNlcyB1bmxlc3MgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0c1xyXG5cdFx0XHRcdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKTtcclxuXHRcdFx0XHRcdGlmICggbmFtZSBpbiB0aGlzQ2FjaGUgKSB7XHJcblx0XHRcdFx0XHRcdG5hbWUgPSBbIG5hbWUgXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5hbWUgPSBuYW1lLnNwbGl0KFwiIFwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gSWYgXCJuYW1lXCIgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxyXG5cdFx0XHRcdC8vIFdoZW4gZGF0YSBpcyBpbml0aWFsbHkgY3JlYXRlZCwgdmlhIChcImtleVwiLCBcInZhbFwiKSBzaWduYXR1cmUsXHJcblx0XHRcdFx0Ly8ga2V5cyB3aWxsIGJlIGNvbnZlcnRlZCB0byBjYW1lbENhc2UuXHJcblx0XHRcdFx0Ly8gU2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgX2hvd18gYSBrZXkgd2FzIGFkZGVkLCByZW1vdmVcclxuXHRcdFx0XHQvLyBib3RoIHBsYWluIGtleSBhbmQgY2FtZWxDYXNlIGtleS4gIzEyNzg2XHJcblx0XHRcdFx0Ly8gVGhpcyB3aWxsIG9ubHkgcGVuYWxpemUgdGhlIGFycmF5IGFyZ3VtZW50IHBhdGguXHJcblx0XHRcdFx0bmFtZSA9IG5hbWUuY29uY2F0KCBqUXVlcnkubWFwKCBuYW1lLCBqUXVlcnkuY2FtZWxDYXNlICkgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aSA9IG5hbWUubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoIGktLSApIHtcclxuXHRcdFx0XHRkZWxldGUgdGhpc0NhY2hlWyBuYW1lW2ldIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRoZXJlIGlzIG5vIGRhdGEgbGVmdCBpbiB0aGUgY2FjaGUsIHdlIHdhbnQgdG8gY29udGludWVcclxuXHRcdFx0Ly8gYW5kIGxldCB0aGUgY2FjaGUgb2JqZWN0IGl0c2VsZiBnZXQgZGVzdHJveWVkXHJcblx0XHRcdGlmICggcHZ0ID8gIWlzRW1wdHlEYXRhT2JqZWN0KHRoaXNDYWNoZSkgOiAhalF1ZXJ5LmlzRW1wdHlPYmplY3QodGhpc0NhY2hlKSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFNlZSBqUXVlcnkuZGF0YSBmb3IgbW9yZSBpbmZvcm1hdGlvblxyXG5cdGlmICggIXB2dCApIHtcclxuXHRcdGRlbGV0ZSBjYWNoZVsgaWQgXS5kYXRhO1xyXG5cclxuXHRcdC8vIERvbid0IGRlc3Ryb3kgdGhlIHBhcmVudCBjYWNoZSB1bmxlc3MgdGhlIGludGVybmFsIGRhdGEgb2JqZWN0XHJcblx0XHQvLyBoYWQgYmVlbiB0aGUgb25seSB0aGluZyBsZWZ0IGluIGl0XHJcblx0XHRpZiAoICFpc0VtcHR5RGF0YU9iamVjdCggY2FjaGVbIGlkIF0gKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gRGVzdHJveSB0aGUgY2FjaGVcclxuXHRpZiAoIGlzTm9kZSApIHtcclxuXHRcdGpRdWVyeS5jbGVhbkRhdGEoIFsgZWxlbSBdLCB0cnVlICk7XHJcblxyXG5cdC8vIFVzZSBkZWxldGUgd2hlbiBzdXBwb3J0ZWQgZm9yIGV4cGFuZG9zIG9yIGBjYWNoZWAgaXMgbm90IGEgd2luZG93IHBlciBpc1dpbmRvdyAoIzEwMDgwKVxyXG5cdC8qIGpzaGludCBlcWVxZXE6IGZhbHNlICovXHJcblx0fSBlbHNlIGlmICggc3VwcG9ydC5kZWxldGVFeHBhbmRvIHx8IGNhY2hlICE9IGNhY2hlLndpbmRvdyApIHtcclxuXHRcdC8qIGpzaGludCBlcWVxZXE6IHRydWUgKi9cclxuXHRcdGRlbGV0ZSBjYWNoZVsgaWQgXTtcclxuXHJcblx0Ly8gV2hlbiBhbGwgZWxzZSBmYWlscywgbnVsbFxyXG5cdH0gZWxzZSB7XHJcblx0XHRjYWNoZVsgaWQgXSA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5qUXVlcnkuZXh0ZW5kKHtcclxuXHRjYWNoZToge30sXHJcblxyXG5cdC8vIFRoZSBmb2xsb3dpbmcgZWxlbWVudHMgKHNwYWNlLXN1ZmZpeGVkIHRvIGF2b2lkIE9iamVjdC5wcm90b3R5cGUgY29sbGlzaW9ucylcclxuXHQvLyB0aHJvdyB1bmNhdGNoYWJsZSBleGNlcHRpb25zIGlmIHlvdSBhdHRlbXB0IHRvIHNldCBleHBhbmRvIHByb3BlcnRpZXNcclxuXHRub0RhdGE6IHtcclxuXHRcdFwiYXBwbGV0IFwiOiB0cnVlLFxyXG5cdFx0XCJlbWJlZCBcIjogdHJ1ZSxcclxuXHRcdC8vIC4uLmJ1dCBGbGFzaCBvYmplY3RzICh3aGljaCBoYXZlIHRoaXMgY2xhc3NpZCkgKmNhbiogaGFuZGxlIGV4cGFuZG9zXHJcblx0XHRcIm9iamVjdCBcIjogXCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIlxyXG5cdH0sXHJcblxyXG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0ZWxlbSA9IGVsZW0ubm9kZVR5cGUgPyBqUXVlcnkuY2FjaGVbIGVsZW1balF1ZXJ5LmV4cGFuZG9dIF0gOiBlbGVtWyBqUXVlcnkuZXhwYW5kbyBdO1xyXG5cdFx0cmV0dXJuICEhZWxlbSAmJiAhaXNFbXB0eURhdGFPYmplY3QoIGVsZW0gKTtcclxuXHR9LFxyXG5cclxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcclxuXHRcdHJldHVybiBpbnRlcm5hbERhdGEoIGVsZW0sIG5hbWUsIGRhdGEgKTtcclxuXHR9LFxyXG5cclxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBpbnRlcm5hbFJlbW92ZURhdGEoIGVsZW0sIG5hbWUgKTtcclxuXHR9LFxyXG5cclxuXHQvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcblx0X2RhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xyXG5cdFx0cmV0dXJuIGludGVybmFsRGF0YSggZWxlbSwgbmFtZSwgZGF0YSwgdHJ1ZSApO1xyXG5cdH0sXHJcblxyXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBpbnRlcm5hbFJlbW92ZURhdGEoIGVsZW0sIG5hbWUsIHRydWUgKTtcclxuXHR9XHJcbn0pO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XHJcblx0XHR2YXIgaSwgbmFtZSwgZGF0YSxcclxuXHRcdFx0ZWxlbSA9IHRoaXNbMF0sXHJcblx0XHRcdGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0Ly8gU3BlY2lhbCBleHBlY3Rpb25zIG9mIC5kYXRhIGJhc2ljYWxseSB0aHdhcnQgalF1ZXJ5LmFjY2VzcyxcclxuXHRcdC8vIHNvIGltcGxlbWVudCB0aGUgcmVsZXZhbnQgYmVoYXZpb3Igb3Vyc2VsdmVzXHJcblxyXG5cdFx0Ly8gR2V0cyBhbGwgdmFsdWVzXHJcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xyXG5cdFx0XHRcdGRhdGEgPSBqUXVlcnkuZGF0YSggZWxlbSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgIWpRdWVyeS5fZGF0YSggZWxlbSwgXCJwYXJzZWRBdHRyc1wiICkgKSB7XHJcblx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xyXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRTExK1xyXG5cdFx0XHRcdFx0XHQvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcclxuXHRcdFx0XHRcdFx0aWYgKCBhdHRyc1sgaSBdICkge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWUgPSBhdHRyc1sgaSBdLm5hbWU7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUuc2xpY2UoNSkgKTtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGFBdHRyKCBlbGVtLCBuYW1lLCBkYXRhWyBuYW1lIF0gKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGpRdWVyeS5fZGF0YSggZWxlbSwgXCJwYXJzZWRBdHRyc1wiLCB0cnVlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xyXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGpRdWVyeS5kYXRhKCB0aGlzLCBrZXkgKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID9cclxuXHJcblx0XHRcdC8vIFNldHMgb25lIHZhbHVlXHJcblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRqUXVlcnkuZGF0YSggdGhpcywga2V5LCB2YWx1ZSApO1xyXG5cdFx0XHR9KSA6XHJcblxyXG5cdFx0XHQvLyBHZXRzIG9uZSB2YWx1ZVxyXG5cdFx0XHQvLyBUcnkgdG8gZmV0Y2ggYW55IGludGVybmFsbHkgc3RvcmVkIGRhdGEgZmlyc3RcclxuXHRcdFx0ZWxlbSA/IGRhdGFBdHRyKCBlbGVtLCBrZXksIGpRdWVyeS5kYXRhKCBlbGVtLCBrZXkgKSApIDogdW5kZWZpbmVkO1xyXG5cdH0sXHJcblxyXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBrZXkgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRqUXVlcnkucmVtb3ZlRGF0YSggdGhpcywga2V5ICk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmpRdWVyeS5leHRlbmQoe1xyXG5cdHF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSwgZGF0YSApIHtcclxuXHRcdHZhciBxdWV1ZTtcclxuXHJcblx0XHRpZiAoIGVsZW0gKSB7XHJcblx0XHRcdHR5cGUgPSAoIHR5cGUgfHwgXCJmeFwiICkgKyBcInF1ZXVlXCI7XHJcblx0XHRcdHF1ZXVlID0galF1ZXJ5Ll9kYXRhKCBlbGVtLCB0eXBlICk7XHJcblxyXG5cdFx0XHQvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXHJcblx0XHRcdGlmICggZGF0YSApIHtcclxuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBqUXVlcnkuaXNBcnJheShkYXRhKSApIHtcclxuXHRcdFx0XHRcdHF1ZXVlID0galF1ZXJ5Ll9kYXRhKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KGRhdGEpICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGRhdGEgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xyXG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xyXG5cclxuXHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxyXG5cdFx0XHRzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcclxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpLFxyXG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxyXG5cdFx0XHRuZXh0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXHJcblx0XHRpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcclxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xyXG5cdFx0XHRzdGFydExlbmd0aC0tO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZm4gKSB7XHJcblxyXG5cdFx0XHQvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXHJcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcclxuXHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XHJcblx0XHRcdFx0cXVldWUudW5zaGlmdCggXCJpbnByb2dyZXNzXCIgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gY2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxyXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcclxuXHRcdFx0Zm4uY2FsbCggZWxlbSwgbmV4dCwgaG9va3MgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICFzdGFydExlbmd0aCAmJiBob29rcyApIHtcclxuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIG5vdCBpbnRlbmRlZCBmb3IgcHVibGljIGNvbnN1bXB0aW9uIC0gZ2VuZXJhdGVzIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybnMgdGhlIGN1cnJlbnQgb25lXHJcblx0X3F1ZXVlSG9va3M6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xyXG5cdFx0dmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcclxuXHRcdHJldHVybiBqUXVlcnkuX2RhdGEoIGVsZW0sIGtleSApIHx8IGpRdWVyeS5fZGF0YSggZWxlbSwga2V5LCB7XHJcblx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGpRdWVyeS5fcmVtb3ZlRGF0YSggZWxlbSwgdHlwZSArIFwicXVldWVcIiApO1xyXG5cdFx0XHRcdGpRdWVyeS5fcmVtb3ZlRGF0YSggZWxlbSwga2V5ICk7XHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0cXVldWU6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xyXG5cdFx0dmFyIHNldHRlciA9IDI7XHJcblxyXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdFx0ZGF0YSA9IHR5cGU7XHJcblx0XHRcdHR5cGUgPSBcImZ4XCI7XHJcblx0XHRcdHNldHRlci0tO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlciApIHtcclxuXHRcdFx0cmV0dXJuIGpRdWVyeS5xdWV1ZSggdGhpc1swXSwgdHlwZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgP1xyXG5cdFx0XHR0aGlzIDpcclxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgZGF0YSApO1xyXG5cclxuXHRcdFx0XHQvLyBlbnN1cmUgYSBob29rcyBmb3IgdGhpcyBxdWV1ZVxyXG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggdGhpcywgdHlwZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVswXSAhPT0gXCJpbnByb2dyZXNzXCIgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fSxcclxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdGNsZWFyUXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xyXG5cdH0sXHJcblx0Ly8gR2V0IGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHF1ZXVlcyBvZiBhIGNlcnRhaW4gdHlwZVxyXG5cdC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxyXG5cdHByb21pc2U6IGZ1bmN0aW9uKCB0eXBlLCBvYmogKSB7XHJcblx0XHR2YXIgdG1wLFxyXG5cdFx0XHRjb3VudCA9IDEsXHJcblx0XHRcdGRlZmVyID0galF1ZXJ5LkRlZmVycmVkKCksXHJcblx0XHRcdGVsZW1lbnRzID0gdGhpcyxcclxuXHRcdFx0aSA9IHRoaXMubGVuZ3RoLFxyXG5cdFx0XHRyZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCAhKCAtLWNvdW50ICkgKSB7XHJcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xyXG5cdFx0XHRvYmogPSB0eXBlO1xyXG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xyXG5cclxuXHRcdHdoaWxlICggaS0tICkge1xyXG5cdFx0XHR0bXAgPSBqUXVlcnkuX2RhdGEoIGVsZW1lbnRzWyBpIF0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIiApO1xyXG5cdFx0XHRpZiAoIHRtcCAmJiB0bXAuZW1wdHkgKSB7XHJcblx0XHRcdFx0Y291bnQrKztcclxuXHRcdFx0XHR0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJlc29sdmUoKTtcclxuXHRcdHJldHVybiBkZWZlci5wcm9taXNlKCBvYmogKTtcclxuXHR9XHJcbn0pO1xyXG52YXIgcG51bSA9ICgvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLykuc291cmNlO1xyXG5cclxudmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xyXG5cclxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24oIGVsZW0sIGVsICkge1xyXG5cdFx0Ly8gaXNIaWRkZW4gbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcclxuXHRcdC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxyXG5cdFx0ZWxlbSA9IGVsIHx8IGVsZW07XHJcblx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCIgfHwgIWpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXHJcbi8vIFRoZSB2YWx1ZS9zIGNhbiBvcHRpb25hbGx5IGJlIGV4ZWN1dGVkIGlmIGl0J3MgYSBmdW5jdGlvblxyXG52YXIgYWNjZXNzID0galF1ZXJ5LmFjY2VzcyA9IGZ1bmN0aW9uKCBlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdyApIHtcclxuXHR2YXIgaSA9IDAsXHJcblx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXHJcblx0XHRidWxrID0ga2V5ID09IG51bGw7XHJcblxyXG5cdC8vIFNldHMgbWFueSB2YWx1ZXNcclxuXHRpZiAoIGpRdWVyeS50eXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcclxuXHRcdGNoYWluYWJsZSA9IHRydWU7XHJcblx0XHRmb3IgKCBpIGluIGtleSApIHtcclxuXHRcdFx0alF1ZXJ5LmFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbaV0sIHRydWUsIGVtcHR5R2V0LCByYXcgKTtcclxuXHRcdH1cclxuXHJcblx0Ly8gU2V0cyBvbmUgdmFsdWVcclxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcclxuXHJcblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcclxuXHRcdFx0cmF3ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGJ1bGsgKSB7XHJcblx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxyXG5cdFx0XHRpZiAoIHJhdyApIHtcclxuXHRcdFx0XHRmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcclxuXHRcdFx0XHRmbiA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnVsayA9IGZuO1xyXG5cdFx0XHRcdGZuID0gZnVuY3Rpb24oIGVsZW0sIGtleSwgdmFsdWUgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBmbiApIHtcclxuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0Zm4oIGVsZW1zW2ldLCBrZXksIHJhdyA/IHZhbHVlIDogdmFsdWUuY2FsbCggZWxlbXNbaV0sIGksIGZuKCBlbGVtc1tpXSwga2V5ICkgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2hhaW5hYmxlID9cclxuXHRcdGVsZW1zIDpcclxuXHJcblx0XHQvLyBHZXRzXHJcblx0XHRidWxrID9cclxuXHRcdFx0Zm4uY2FsbCggZWxlbXMgKSA6XHJcblx0XHRcdGxlbmd0aCA/IGZuKCBlbGVtc1swXSwga2V5ICkgOiBlbXB0eUdldDtcclxufTtcclxudmFyIHJjaGVja2FibGVUeXBlID0gKC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pKTtcclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdC8vIE1pbmlmaWVkOiB2YXIgYSxiLGNcclxuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSxcclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcclxuXHRcdGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuXHQvLyBTZXR1cFxyXG5cdGRpdi5pbm5lckhUTUwgPSBcIiAgPGxpbmsvPjx0YWJsZT48L3RhYmxlPjxhIGhyZWY9Jy9hJz5hPC9hPjxpbnB1dCB0eXBlPSdjaGVja2JveCcvPlwiO1xyXG5cclxuXHQvLyBJRSBzdHJpcHMgbGVhZGluZyB3aGl0ZXNwYWNlIHdoZW4gLmlubmVySFRNTCBpcyB1c2VkXHJcblx0c3VwcG9ydC5sZWFkaW5nV2hpdGVzcGFjZSA9IGRpdi5maXJzdENoaWxkLm5vZGVUeXBlID09PSAzO1xyXG5cclxuXHQvLyBNYWtlIHN1cmUgdGhhdCB0Ym9keSBlbGVtZW50cyBhcmVuJ3QgYXV0b21hdGljYWxseSBpbnNlcnRlZFxyXG5cdC8vIElFIHdpbGwgaW5zZXJ0IHRoZW0gaW50byBlbXB0eSB0YWJsZXNcclxuXHRzdXBwb3J0LnRib2R5ID0gIWRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJ0Ym9keVwiICkubGVuZ3RoO1xyXG5cclxuXHQvLyBNYWtlIHN1cmUgdGhhdCBsaW5rIGVsZW1lbnRzIGdldCBzZXJpYWxpemVkIGNvcnJlY3RseSBieSBpbm5lckhUTUxcclxuXHQvLyBUaGlzIHJlcXVpcmVzIGEgd3JhcHBlciBlbGVtZW50IGluIElFXHJcblx0c3VwcG9ydC5odG1sU2VyaWFsaXplID0gISFkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwibGlua1wiICkubGVuZ3RoO1xyXG5cclxuXHQvLyBNYWtlcyBzdXJlIGNsb25pbmcgYW4gaHRtbDUgZWxlbWVudCBkb2VzIG5vdCBjYXVzZSBwcm9ibGVtc1xyXG5cdC8vIFdoZXJlIG91dGVySFRNTCBpcyB1bmRlZmluZWQsIHRoaXMgc3RpbGwgd29ya3NcclxuXHRzdXBwb3J0Lmh0bWw1Q2xvbmUgPVxyXG5cdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJuYXZcIiApLmNsb25lTm9kZSggdHJ1ZSApLm91dGVySFRNTCAhPT0gXCI8Om5hdj48LzpuYXY+XCI7XHJcblxyXG5cdC8vIENoZWNrIGlmIGEgZGlzY29ubmVjdGVkIGNoZWNrYm94IHdpbGwgcmV0YWluIGl0cyBjaGVja2VkXHJcblx0Ly8gdmFsdWUgb2YgdHJ1ZSBhZnRlciBhcHBlbmRlZCB0byB0aGUgRE9NIChJRTYvNylcclxuXHRpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG5cdGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG5cdGZyYWdtZW50LmFwcGVuZENoaWxkKCBpbnB1dCApO1xyXG5cdHN1cHBvcnQuYXBwZW5kQ2hlY2tlZCA9IGlucHV0LmNoZWNrZWQ7XHJcblxyXG5cdC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXHJcblx0Ly8gU3VwcG9ydDogSUU2LUlFMTErXHJcblx0ZGl2LmlubmVySFRNTCA9IFwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiO1xyXG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xyXG5cclxuXHQvLyAjMTEyMTcgLSBXZWJLaXQgbG9zZXMgY2hlY2sgd2hlbiB0aGUgbmFtZSBpcyBhZnRlciB0aGUgY2hlY2tlZCBhdHRyaWJ1dGVcclxuXHRmcmFnbWVudC5hcHBlbmRDaGlsZCggZGl2ICk7XHJcblx0ZGl2LmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3JhZGlvJyBjaGVja2VkPSdjaGVja2VkJyBuYW1lPSd0Jy8+XCI7XHJcblxyXG5cdC8vIFN1cHBvcnQ6IFNhZmFyaSA1LjEsIGlPUyA1LjEsIEFuZHJvaWQgNC54LCBBbmRyb2lkIDIuM1xyXG5cdC8vIG9sZCBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcclxuXHRzdXBwb3J0LmNoZWNrQ2xvbmUgPSBkaXYuY2xvbmVOb2RlKCB0cnVlICkuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmNoZWNrZWQ7XHJcblxyXG5cdC8vIFN1cHBvcnQ6IElFPDlcclxuXHQvLyBPcGVyYSBkb2VzIG5vdCBjbG9uZSBldmVudHMgKGFuZCB0eXBlb2YgZGl2LmF0dGFjaEV2ZW50ID09PSB1bmRlZmluZWQpLlxyXG5cdC8vIElFOS0xMCBjbG9uZXMgZXZlbnRzIGJvdW5kIHZpYSBhdHRhY2hFdmVudCwgYnV0IHRoZXkgZG9uJ3QgdHJpZ2dlciB3aXRoIC5jbGljaygpXHJcblx0c3VwcG9ydC5ub0Nsb25lRXZlbnQgPSB0cnVlO1xyXG5cdGlmICggZGl2LmF0dGFjaEV2ZW50ICkge1xyXG5cdFx0ZGl2LmF0dGFjaEV2ZW50KCBcIm9uY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN1cHBvcnQubm9DbG9uZUV2ZW50ID0gZmFsc2U7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuY2xpY2soKTtcclxuXHR9XHJcblxyXG5cdC8vIEV4ZWN1dGUgdGhlIHRlc3Qgb25seSBpZiBub3QgYWxyZWFkeSBleGVjdXRlZCBpbiBhbm90aGVyIG1vZHVsZS5cclxuXHRpZiAoc3VwcG9ydC5kZWxldGVFeHBhbmRvID09IG51bGwpIHtcclxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcclxuXHRcdHN1cHBvcnQuZGVsZXRlRXhwYW5kbyA9IHRydWU7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRkZWxldGUgZGl2LnRlc3Q7XHJcblx0XHR9IGNhdGNoKCBlICkge1xyXG5cdFx0XHRzdXBwb3J0LmRlbGV0ZUV4cGFuZG8gPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7XHJcblxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBpLCBldmVudE5hbWUsXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XHJcblxyXG5cdC8vIFN1cHBvcnQ6IElFPDkgKGxhY2sgc3VibWl0L2NoYW5nZSBidWJibGUpLCBGaXJlZm94IDIzKyAobGFjayBmb2N1c2luIGV2ZW50KVxyXG5cdGZvciAoIGkgaW4geyBzdWJtaXQ6IHRydWUsIGNoYW5nZTogdHJ1ZSwgZm9jdXNpbjogdHJ1ZSB9KSB7XHJcblx0XHRldmVudE5hbWUgPSBcIm9uXCIgKyBpO1xyXG5cclxuXHRcdGlmICggIShzdXBwb3J0WyBpICsgXCJCdWJibGVzXCIgXSA9IGV2ZW50TmFtZSBpbiB3aW5kb3cpICkge1xyXG5cdFx0XHQvLyBCZXdhcmUgb2YgQ1NQIHJlc3RyaWN0aW9ucyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vU2VjdXJpdHkvQ1NQKVxyXG5cdFx0XHRkaXYuc2V0QXR0cmlidXRlKCBldmVudE5hbWUsIFwidFwiICk7XHJcblx0XHRcdHN1cHBvcnRbIGkgKyBcIkJ1YmJsZXNcIiBdID0gZGl2LmF0dHJpYnV0ZXNbIGV2ZW50TmFtZSBdLmV4cGFuZG8gPT09IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gTnVsbCBlbGVtZW50cyB0byBhdm9pZCBsZWFrcyBpbiBJRS5cclxuXHRkaXYgPSBudWxsO1xyXG59KSgpO1xyXG5cclxuXHJcbnZhciByZm9ybUVsZW1zID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWEpJC9pLFxyXG5cdHJrZXlFdmVudCA9IC9ea2V5LyxcclxuXHRybW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFxyXG5cdHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxyXG5cdHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpJC87XHJcblxyXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuXHR9IGNhdGNoICggZXJyICkgeyB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cclxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cclxuICovXHJcbmpRdWVyeS5ldmVudCA9IHtcclxuXHJcblx0Z2xvYmFsOiB7fSxcclxuXHJcblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xyXG5cdFx0dmFyIHRtcCwgZXZlbnRzLCB0LCBoYW5kbGVPYmpJbixcclxuXHRcdFx0c3BlY2lhbCwgZXZlbnRIYW5kbGUsIGhhbmRsZU9iaixcclxuXHRcdFx0aGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxyXG5cdFx0XHRlbGVtRGF0YSA9IGpRdWVyeS5fZGF0YSggZWxlbSApO1xyXG5cclxuXHRcdC8vIERvbid0IGF0dGFjaCBldmVudHMgdG8gbm9EYXRhIG9yIHRleHQvY29tbWVudCBub2RlcyAoYnV0IGFsbG93IHBsYWluIG9iamVjdHMpXHJcblx0XHRpZiAoICFlbGVtRGF0YSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxyXG5cdFx0aWYgKCBoYW5kbGVyLmhhbmRsZXIgKSB7XHJcblx0XHRcdGhhbmRsZU9iakluID0gaGFuZGxlcjtcclxuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XHJcblx0XHRcdHNlbGVjdG9yID0gaGFuZGxlT2JqSW4uc2VsZWN0b3I7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXHJcblx0XHRpZiAoICFoYW5kbGVyLmd1aWQgKSB7XHJcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxyXG5cdFx0aWYgKCAhKGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cykgKSB7XHJcblx0XHRcdGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0aWYgKCAhKGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlKSApIHtcclxuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxyXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcclxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGpRdWVyeSAhPT0gc3RydW5kZWZpbmVkICYmICghZSB8fCBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICE9PSBlLnR5cGUpID9cclxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5kaXNwYXRjaC5hcHBseSggZXZlbnRIYW5kbGUuZWxlbSwgYXJndW1lbnRzICkgOlxyXG5cdFx0XHRcdFx0dW5kZWZpbmVkO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQvLyBBZGQgZWxlbSBhcyBhIHByb3BlcnR5IG9mIHRoZSBoYW5kbGUgZm4gdG8gcHJldmVudCBhIG1lbW9yeSBsZWFrIHdpdGggSUUgbm9uLW5hdGl2ZSBldmVudHNcclxuXHRcdFx0ZXZlbnRIYW5kbGUuZWxlbSA9IGVsZW07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxyXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XHJcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKCB0LS0gKSB7XHJcblx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWMoIHR5cGVzW3RdICkgfHwgW107XHJcblx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcclxuXHRcdFx0bmFtZXNwYWNlcyA9ICggdG1wWzJdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XHJcblxyXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcclxuXHRcdFx0aWYgKCAhdHlwZSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgZXZlbnQgY2hhbmdlcyBpdHMgdHlwZSwgdXNlIHRoZSBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgY2hhbmdlZCB0eXBlXHJcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xyXG5cclxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgZGVmaW5lZCwgZGV0ZXJtaW5lIHNwZWNpYWwgZXZlbnQgYXBpIHR5cGUsIG90aGVyd2lzZSBnaXZlbiB0eXBlXHJcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcclxuXHJcblx0XHRcdC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcclxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XHJcblxyXG5cdFx0XHQvLyBoYW5kbGVPYmogaXMgcGFzc2VkIHRvIGFsbCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKHtcclxuXHRcdFx0XHR0eXBlOiB0eXBlLFxyXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGhhbmRsZXI6IGhhbmRsZXIsXHJcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxyXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3RvcixcclxuXHRcdFx0XHRuZWVkc0NvbnRleHQ6IHNlbGVjdG9yICYmIGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApLFxyXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKFwiLlwiKVxyXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xyXG5cclxuXHRcdFx0Ly8gSW5pdCB0aGUgZXZlbnQgaGFuZGxlciBxdWV1ZSBpZiB3ZSdyZSB0aGUgZmlyc3RcclxuXHRcdFx0aWYgKCAhKGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0pICkge1xyXG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcclxuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcclxuXHJcblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lci9hdHRhY2hFdmVudCBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXHJcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fCBzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xyXG5cdFx0XHRcdFx0Ly8gQmluZCB0aGUgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgdG8gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdGlmICggZWxlbS5hZGRFdmVudExpc3RlbmVyICkge1xyXG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlLCBmYWxzZSApO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIGVsZW0uYXR0YWNoRXZlbnQgKSB7XHJcblx0XHRcdFx0XHRcdGVsZW0uYXR0YWNoRXZlbnQoIFwib25cIiArIHR5cGUsIGV2ZW50SGFuZGxlICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHNwZWNpYWwuYWRkICkge1xyXG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xyXG5cclxuXHRcdFx0XHRpZiAoICFoYW5kbGVPYmouaGFuZGxlci5ndWlkICkge1xyXG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XHJcblx0XHRcdGlmICggc2VsZWN0b3IgKSB7XHJcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBLZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50cyBoYXZlIGV2ZXIgYmVlbiB1c2VkLCBmb3IgZXZlbnQgb3B0aW1pemF0aW9uXHJcblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTnVsbGlmeSBlbGVtIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzIGluIElFXHJcblx0XHRlbGVtID0gbnVsbDtcclxuXHR9LFxyXG5cclxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcclxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgc2VsZWN0b3IsIG1hcHBlZFR5cGVzICkge1xyXG5cdFx0dmFyIGosIGhhbmRsZU9iaiwgdG1wLFxyXG5cdFx0XHRvcmlnQ291bnQsIHQsIGV2ZW50cyxcclxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsXHJcblx0XHRcdG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxyXG5cdFx0XHRlbGVtRGF0YSA9IGpRdWVyeS5oYXNEYXRhKCBlbGVtICkgJiYgalF1ZXJ5Ll9kYXRhKCBlbGVtICk7XHJcblxyXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgIShldmVudHMgPSBlbGVtRGF0YS5ldmVudHMpICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxyXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XHJcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKCB0LS0gKSB7XHJcblx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWMoIHR5cGVzW3RdICkgfHwgW107XHJcblx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcclxuXHRcdFx0bmFtZXNwYWNlcyA9ICggdG1wWzJdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XHJcblxyXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcclxuXHRcdFx0aWYgKCAhdHlwZSApIHtcclxuXHRcdFx0XHRmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcclxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XHJcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcclxuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSB8fCBbXTtcclxuXHRcdFx0dG1wID0gdG1wWzJdICYmIG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIgKTtcclxuXHJcblx0XHRcdC8vIFJlbW92ZSBtYXRjaGluZyBldmVudHNcclxuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XHJcblx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGogXTtcclxuXHJcblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxyXG5cdFx0XHRcdFx0KCAhaGFuZGxlciB8fCBoYW5kbGVyLmd1aWQgPT09IGhhbmRsZU9iai5ndWlkICkgJiZcclxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcclxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09IFwiKipcIiAmJiBoYW5kbGVPYmouc2VsZWN0b3IgKSApIHtcclxuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggaGFuZGxlT2JqLnNlbGVjdG9yICkge1xyXG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoIHNwZWNpYWwucmVtb3ZlICkge1xyXG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFJlbW92ZSBnZW5lcmljIGV2ZW50IGhhbmRsZXIgaWYgd2UgcmVtb3ZlZCBzb21ldGhpbmcgYW5kIG5vIG1vcmUgaGFuZGxlcnMgZXhpc3RcclxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXHJcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XHJcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC50ZWFyZG93biB8fCBzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRkZWxldGUgZXZlbnRzWyB0eXBlIF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgaXQncyBubyBsb25nZXIgdXNlZFxyXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XHJcblx0XHRcdGRlbGV0ZSBlbGVtRGF0YS5oYW5kbGU7XHJcblxyXG5cdFx0XHQvLyByZW1vdmVEYXRhIGFsc28gY2hlY2tzIGZvciBlbXB0aW5lc3MgYW5kIGNsZWFycyB0aGUgZXhwYW5kbyBpZiBlbXB0eVxyXG5cdFx0XHQvLyBzbyB1c2UgaXQgaW5zdGVhZCBvZiBkZWxldGVcclxuXHRcdFx0alF1ZXJ5Ll9yZW1vdmVEYXRhKCBlbGVtLCBcImV2ZW50c1wiICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0dHJpZ2dlcjogZnVuY3Rpb24oIGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMgKSB7XHJcblx0XHR2YXIgaGFuZGxlLCBvbnR5cGUsIGN1cixcclxuXHRcdFx0YnViYmxlVHlwZSwgc3BlY2lhbCwgdG1wLCBpLFxyXG5cdFx0XHRldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQgXSxcclxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcclxuXHRcdFx0bmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKCBldmVudCwgXCJuYW1lc3BhY2VcIiApID8gZXZlbnQubmFtZXNwYWNlLnNwbGl0KFwiLlwiKSA6IFtdO1xyXG5cclxuXHRcdGN1ciA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xyXG5cclxuXHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXHJcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xyXG5cdFx0aWYgKCByZm9jdXNNb3JwaC50ZXN0KCB0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0eXBlLmluZGV4T2YoXCIuXCIpID49IDAgKSB7XHJcblx0XHRcdC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcclxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoXCIuXCIpO1xyXG5cdFx0XHR0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xyXG5cdFx0XHRuYW1lc3BhY2VzLnNvcnQoKTtcclxuXHRcdH1cclxuXHRcdG9udHlwZSA9IHR5cGUuaW5kZXhPZihcIjpcIikgPCAwICYmIFwib25cIiArIHR5cGU7XHJcblxyXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXHJcblx0XHRldmVudCA9IGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdID9cclxuXHRcdFx0ZXZlbnQgOlxyXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCB0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQgKTtcclxuXHJcblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXHJcblx0XHRldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcclxuXHRcdGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbihcIi5cIik7XHJcblx0XHRldmVudC5uYW1lc3BhY2VfcmUgPSBldmVudC5uYW1lc3BhY2UgP1xyXG5cdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikgKyBcIihcXFxcLnwkKVwiICkgOlxyXG5cdFx0XHRudWxsO1xyXG5cclxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxyXG5cdFx0ZXZlbnQucmVzdWx0ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xyXG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3RcclxuXHRcdGRhdGEgPSBkYXRhID09IG51bGwgP1xyXG5cdFx0XHRbIGV2ZW50IF0gOlxyXG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcclxuXHJcblx0XHQvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXHJcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcclxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiBzcGVjaWFsLnRyaWdnZXIgJiYgc3BlY2lhbC50cmlnZ2VyLmFwcGx5KCBlbGVtLCBkYXRhICkgPT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXHJcblx0XHQvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxyXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcclxuXHJcblx0XHRcdGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xyXG5cdFx0XHRpZiAoICFyZm9jdXNNb3JwaC50ZXN0KCBidWJibGVUeXBlICsgdHlwZSApICkge1xyXG5cdFx0XHRcdGN1ciA9IGN1ci5wYXJlbnROb2RlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAoIDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcclxuXHRcdFx0XHRldmVudFBhdGgucHVzaCggY3VyICk7XHJcblx0XHRcdFx0dG1wID0gY3VyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBPbmx5IGFkZCB3aW5kb3cgaWYgd2UgZ290IHRvIGRvY3VtZW50IChlLmcuLCBub3QgcGxhaW4gb2JqIG9yIGRldGFjaGVkIERPTSlcclxuXHRcdFx0aWYgKCB0bXAgPT09IChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQpICkge1xyXG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCB0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcclxuXHRcdGkgPSAwO1xyXG5cdFx0d2hpbGUgKCAoY3VyID0gZXZlbnRQYXRoW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xyXG5cclxuXHRcdFx0ZXZlbnQudHlwZSA9IGkgPiAxID9cclxuXHRcdFx0XHRidWJibGVUeXBlIDpcclxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XHJcblxyXG5cdFx0XHQvLyBqUXVlcnkgaGFuZGxlclxyXG5cdFx0XHRoYW5kbGUgPSAoIGpRdWVyeS5fZGF0YSggY3VyLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdICYmIGpRdWVyeS5fZGF0YSggY3VyLCBcImhhbmRsZVwiICk7XHJcblx0XHRcdGlmICggaGFuZGxlICkge1xyXG5cdFx0XHRcdGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIE5hdGl2ZSBoYW5kbGVyXHJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xyXG5cdFx0XHRpZiAoIGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgalF1ZXJ5LmFjY2VwdERhdGEoIGN1ciApICkge1xyXG5cdFx0XHRcdGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XHJcblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgPT09IGZhbHNlICkge1xyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGV2ZW50LnR5cGUgPSB0eXBlO1xyXG5cclxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcclxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XHJcblxyXG5cdFx0XHRpZiAoICghc3BlY2lhbC5fZGVmYXVsdCB8fCBzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KCBldmVudFBhdGgucG9wKCksIGRhdGEgKSA9PT0gZmFsc2UpICYmXHJcblx0XHRcdFx0alF1ZXJ5LmFjY2VwdERhdGEoIGVsZW0gKSApIHtcclxuXHJcblx0XHRcdFx0Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxyXG5cdFx0XHRcdC8vIENhbid0IHVzZSBhbiAuaXNGdW5jdGlvbigpIGNoZWNrIGhlcmUgYmVjYXVzZSBJRTYvNyBmYWlscyB0aGF0IHRlc3QuXHJcblx0XHRcdFx0Ly8gRG9uJ3QgZG8gZGVmYXVsdCBhY3Rpb25zIG9uIHdpbmRvdywgdGhhdCdzIHdoZXJlIGdsb2JhbCB2YXJpYWJsZXMgYmUgKCM2MTcwKVxyXG5cdFx0XHRcdGlmICggb250eXBlICYmIGVsZW1bIHR5cGUgXSAmJiAhalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxyXG5cdFx0XHRcdFx0dG1wID0gZWxlbVsgb250eXBlIF07XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XHJcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxyXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHR5cGU7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xyXG5cdFx0XHRcdFx0XHQvLyBJRTw5IGRpZXMgb24gZm9jdXMvYmx1ciB0byBoaWRkZW4gZWxlbWVudCAoIzE0ODYsIzEyNTE4KVxyXG5cdFx0XHRcdFx0XHQvLyBvbmx5IHJlcHJvZHVjaWJsZSBvbiB3aW5YUCBJRTggbmF0aXZlLCBub3QgSUU5IGluIElFOCBtb2RlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdG1wICkge1xyXG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IHRtcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xyXG5cdH0sXHJcblxyXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG5cdFx0Ly8gTWFrZSBhIHdyaXRhYmxlIGpRdWVyeS5FdmVudCBmcm9tIHRoZSBuYXRpdmUgZXZlbnQgb2JqZWN0XHJcblx0XHRldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIGV2ZW50ICk7XHJcblxyXG5cdFx0dmFyIGksIHJldCwgaGFuZGxlT2JqLCBtYXRjaGVkLCBqLFxyXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcclxuXHRcdFx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxyXG5cdFx0XHRoYW5kbGVycyA9ICggalF1ZXJ5Ll9kYXRhKCB0aGlzLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdIHx8IFtdLFxyXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGV2ZW50LnR5cGUgXSB8fCB7fTtcclxuXHJcblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxyXG5cdFx0YXJnc1swXSA9IGV2ZW50O1xyXG5cdFx0ZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcclxuXHRcdGlmICggc3BlY2lhbC5wcmVEaXNwYXRjaCAmJiBzcGVjaWFsLnByZURpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICkgPT09IGZhbHNlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXHJcblx0XHRoYW5kbGVyUXVldWUgPSBqUXVlcnkuZXZlbnQuaGFuZGxlcnMuY2FsbCggdGhpcywgZXZlbnQsIGhhbmRsZXJzICk7XHJcblxyXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcclxuXHRcdGkgPSAwO1xyXG5cdFx0d2hpbGUgKCAobWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xyXG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xyXG5cclxuXHRcdFx0aiA9IDA7XHJcblx0XHRcdHdoaWxlICggKGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdKSAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcclxuXHJcblx0XHRcdFx0Ly8gVHJpZ2dlcmVkIGV2ZW50IG11c3QgZWl0aGVyIDEpIGhhdmUgbm8gbmFtZXNwYWNlLCBvclxyXG5cdFx0XHRcdC8vIDIpIGhhdmUgbmFtZXNwYWNlKHMpIGEgc3Vic2V0IG9yIGVxdWFsIHRvIHRob3NlIGluIHRoZSBib3VuZCBldmVudCAoYm90aCBjYW4gaGF2ZSBubyBuYW1lc3BhY2UpLlxyXG5cdFx0XHRcdGlmICggIWV2ZW50Lm5hbWVzcGFjZV9yZSB8fCBldmVudC5uYW1lc3BhY2VfcmUudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcclxuXHRcdFx0XHRcdGV2ZW50LmRhdGEgPSBoYW5kbGVPYmouZGF0YTtcclxuXHJcblx0XHRcdFx0XHRyZXQgPSAoIChqUXVlcnkuZXZlbnQuc3BlY2lhbFsgaGFuZGxlT2JqLm9yaWdUeXBlIF0gfHwge30pLmhhbmRsZSB8fCBoYW5kbGVPYmouaGFuZGxlciApXHJcblx0XHRcdFx0XHRcdFx0LmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIChldmVudC5yZXN1bHQgPSByZXQpID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxyXG5cdFx0aWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcclxuXHRcdFx0c3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xyXG5cdH0sXHJcblxyXG5cdGhhbmRsZXJzOiBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXJzICkge1xyXG5cdFx0dmFyIHNlbCwgaGFuZGxlT2JqLCBtYXRjaGVzLCBpLFxyXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcclxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXHJcblx0XHRcdGN1ciA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXHJcblx0XHQvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAoIzEzMTgwKVxyXG5cdFx0Ly8gQXZvaWQgbm9uLWxlZnQtY2xpY2sgYnViYmxpbmcgaW4gRmlyZWZveCAoIzM4NjEpXHJcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgJiYgY3VyLm5vZGVUeXBlICYmICghZXZlbnQuYnV0dG9uIHx8IGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIikgKSB7XHJcblxyXG5cdFx0XHQvKiBqc2hpbnQgZXFlcWVxOiBmYWxzZSAqL1xyXG5cdFx0XHRmb3IgKCA7IGN1ciAhPSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzICkge1xyXG5cdFx0XHRcdC8qIGpzaGludCBlcWVxZXE6IHRydWUgKi9cclxuXHJcblx0XHRcdFx0Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXHJcblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKCM2OTExLCAjODE2NSwgIzExMzgyLCAjMTE3NjQpXHJcblx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPT09IDEgJiYgKGN1ci5kaXNhYmxlZCAhPT0gdHJ1ZSB8fCBldmVudC50eXBlICE9PSBcImNsaWNrXCIpICkge1xyXG5cdFx0XHRcdFx0bWF0Y2hlcyA9IFtdO1xyXG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKysgKSB7XHJcblx0XHRcdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBpIF07XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxyXG5cdFx0XHRcdFx0XHRzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlc1sgc2VsIF0gPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRcdFx0XHRtYXRjaGVzWyBzZWwgXSA9IGhhbmRsZU9iai5uZWVkc0NvbnRleHQgP1xyXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPj0gMCA6XHJcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZCggc2VsLCB0aGlzLCBudWxsLCBbIGN1ciBdICkubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlc1sgc2VsIF0gKSB7XHJcblx0XHRcdFx0XHRcdFx0bWF0Y2hlcy5wdXNoKCBoYW5kbGVPYmogKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBtYXRjaGVzIH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFkZCB0aGUgcmVtYWluaW5nIChkaXJlY3RseS1ib3VuZCkgaGFuZGxlcnNcclxuXHRcdGlmICggZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCApIHtcclxuXHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goeyBlbGVtOiB0aGlzLCBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoIGRlbGVnYXRlQ291bnQgKSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xyXG5cdH0sXHJcblxyXG5cdGZpeDogZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cdFx0aWYgKCBldmVudFsgalF1ZXJ5LmV4cGFuZG8gXSApIHtcclxuXHRcdFx0cmV0dXJuIGV2ZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENyZWF0ZSBhIHdyaXRhYmxlIGNvcHkgb2YgdGhlIGV2ZW50IG9iamVjdCBhbmQgbm9ybWFsaXplIHNvbWUgcHJvcGVydGllc1xyXG5cdFx0dmFyIGksIHByb3AsIGNvcHksXHJcblx0XHRcdHR5cGUgPSBldmVudC50eXBlLFxyXG5cdFx0XHRvcmlnaW5hbEV2ZW50ID0gZXZlbnQsXHJcblx0XHRcdGZpeEhvb2sgPSB0aGlzLmZpeEhvb2tzWyB0eXBlIF07XHJcblxyXG5cdFx0aWYgKCAhZml4SG9vayApIHtcclxuXHRcdFx0dGhpcy5maXhIb29rc1sgdHlwZSBdID0gZml4SG9vayA9XHJcblx0XHRcdFx0cm1vdXNlRXZlbnQudGVzdCggdHlwZSApID8gdGhpcy5tb3VzZUhvb2tzIDpcclxuXHRcdFx0XHRya2V5RXZlbnQudGVzdCggdHlwZSApID8gdGhpcy5rZXlIb29rcyA6XHJcblx0XHRcdFx0e307XHJcblx0XHR9XHJcblx0XHRjb3B5ID0gZml4SG9vay5wcm9wcyA/IHRoaXMucHJvcHMuY29uY2F0KCBmaXhIb29rLnByb3BzICkgOiB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGV2ZW50ID0gbmV3IGpRdWVyeS5FdmVudCggb3JpZ2luYWxFdmVudCApO1xyXG5cclxuXHRcdGkgPSBjb3B5Lmxlbmd0aDtcclxuXHRcdHdoaWxlICggaS0tICkge1xyXG5cdFx0XHRwcm9wID0gY29weVsgaSBdO1xyXG5cdFx0XHRldmVudFsgcHJvcCBdID0gb3JpZ2luYWxFdmVudFsgcHJvcCBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcclxuXHRcdC8vIEZpeCB0YXJnZXQgcHJvcGVydHkgKCMxOTI1KVxyXG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xyXG5cdFx0XHRldmVudC50YXJnZXQgPSBvcmlnaW5hbEV2ZW50LnNyY0VsZW1lbnQgfHwgZG9jdW1lbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDIzKywgU2FmYXJpP1xyXG5cdFx0Ly8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0MylcclxuXHRcdGlmICggZXZlbnQudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkge1xyXG5cdFx0XHRldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTdXBwb3J0OiBJRTw5XHJcblx0XHQvLyBGb3IgbW91c2Uva2V5IGV2ZW50cywgbWV0YUtleT09ZmFsc2UgaWYgaXQncyB1bmRlZmluZWQgKCMzMzY4LCAjMTEzMjgpXHJcblx0XHRldmVudC5tZXRhS2V5ID0gISFldmVudC5tZXRhS2V5O1xyXG5cclxuXHRcdHJldHVybiBmaXhIb29rLmZpbHRlciA/IGZpeEhvb2suZmlsdGVyKCBldmVudCwgb3JpZ2luYWxFdmVudCApIDogZXZlbnQ7XHJcblx0fSxcclxuXHJcblx0Ly8gSW5jbHVkZXMgc29tZSBldmVudCBwcm9wcyBzaGFyZWQgYnkgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnRcclxuXHRwcm9wczogXCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksXHJcblxyXG5cdGZpeEhvb2tzOiB7fSxcclxuXHJcblx0a2V5SG9va3M6IHtcclxuXHRcdHByb3BzOiBcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksXHJcblx0XHRmaWx0ZXI6IGZ1bmN0aW9uKCBldmVudCwgb3JpZ2luYWwgKSB7XHJcblxyXG5cdFx0XHQvLyBBZGQgd2hpY2ggZm9yIGtleSBldmVudHNcclxuXHRcdFx0aWYgKCBldmVudC53aGljaCA9PSBudWxsICkge1xyXG5cdFx0XHRcdGV2ZW50LndoaWNoID0gb3JpZ2luYWwuY2hhckNvZGUgIT0gbnVsbCA/IG9yaWdpbmFsLmNoYXJDb2RlIDogb3JpZ2luYWwua2V5Q29kZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGV2ZW50O1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdG1vdXNlSG9va3M6IHtcclxuXHRcdHByb3BzOiBcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxcclxuXHRcdGZpbHRlcjogZnVuY3Rpb24oIGV2ZW50LCBvcmlnaW5hbCApIHtcclxuXHRcdFx0dmFyIGJvZHksIGV2ZW50RG9jLCBkb2MsXHJcblx0XHRcdFx0YnV0dG9uID0gb3JpZ2luYWwuYnV0dG9uLFxyXG5cdFx0XHRcdGZyb21FbGVtZW50ID0gb3JpZ2luYWwuZnJvbUVsZW1lbnQ7XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXHJcblx0XHRcdGlmICggZXZlbnQucGFnZVggPT0gbnVsbCAmJiBvcmlnaW5hbC5jbGllbnRYICE9IG51bGwgKSB7XHJcblx0XHRcdFx0ZXZlbnREb2MgPSBldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcclxuXHRcdFx0XHRkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Ym9keSA9IGV2ZW50RG9jLmJvZHk7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnBhZ2VYID0gb3JpZ2luYWwuY2xpZW50WCArICggZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDAgKSAtICggZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDAgKTtcclxuXHRcdFx0XHRldmVudC5wYWdlWSA9IG9yaWdpbmFsLmNsaWVudFkgKyAoIGRvYyAmJiBkb2Muc2Nyb2xsVG9wICB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wICB8fCAwICkgLSAoIGRvYyAmJiBkb2MuY2xpZW50VG9wICB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wICB8fCAwICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCByZWxhdGVkVGFyZ2V0LCBpZiBuZWNlc3NhcnlcclxuXHRcdFx0aWYgKCAhZXZlbnQucmVsYXRlZFRhcmdldCAmJiBmcm9tRWxlbWVudCApIHtcclxuXHRcdFx0XHRldmVudC5yZWxhdGVkVGFyZ2V0ID0gZnJvbUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCA/IG9yaWdpbmFsLnRvRWxlbWVudCA6IGZyb21FbGVtZW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XHJcblx0XHRcdC8vIE5vdGU6IGJ1dHRvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28gZG9uJ3QgdXNlIGl0XHJcblx0XHRcdGlmICggIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdGV2ZW50LndoaWNoID0gKCBidXR0b24gJiAxID8gMSA6ICggYnV0dG9uICYgMiA/IDMgOiAoIGJ1dHRvbiAmIDQgPyAyIDogMCApICkgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGV2ZW50O1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHNwZWNpYWw6IHtcclxuXHRcdGxvYWQ6IHtcclxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxyXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGZvY3VzOiB7XHJcblx0XHRcdC8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxyXG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIHRoaXMgIT09IHNhZmVBY3RpdmVFbGVtZW50KCkgJiYgdGhpcy5mb2N1cyApIHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XHJcblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFPDlcclxuXHRcdFx0XHRcdFx0Ly8gSWYgd2UgZXJyb3Igb24gZm9jdXMgdG8gaGlkZGVuIGVsZW1lbnQgKCMxNDg2LCAjMTI1MTgpLFxyXG5cdFx0XHRcdFx0XHQvLyBsZXQgLnRyaWdnZXIoKSBydW4gdGhlIGhhbmRsZXJzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNpblwiXHJcblx0XHR9LFxyXG5cdFx0Ymx1cjoge1xyXG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIHRoaXMgPT09IHNhZmVBY3RpdmVFbGVtZW50KCkgJiYgdGhpcy5ibHVyICkge1xyXG5cdFx0XHRcdFx0dGhpcy5ibHVyKCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxyXG5cdFx0fSxcclxuXHRcdGNsaWNrOiB7XHJcblx0XHRcdC8vIEZvciBjaGVja2JveCwgZmlyZSBuYXRpdmUgZXZlbnQgc28gY2hlY2tlZCBzdGF0ZSB3aWxsIGJlIHJpZ2h0XHJcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICggalF1ZXJ5Lm5vZGVOYW1lKCB0aGlzLCBcImlucHV0XCIgKSAmJiB0aGlzLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJiB0aGlzLmNsaWNrICkge1xyXG5cdFx0XHRcdFx0dGhpcy5jbGljaygpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBkb24ndCBmaXJlIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xyXG5cdFx0XHRfZGVmYXVsdDogZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cdFx0XHRcdHJldHVybiBqUXVlcnkubm9kZU5hbWUoIGV2ZW50LnRhcmdldCwgXCJhXCIgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRiZWZvcmV1bmxvYWQ6IHtcclxuXHRcdFx0cG9zdERpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXHJcblx0XHRcdFx0Ly8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxyXG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCApIHtcclxuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCwgYnViYmxlICkge1xyXG5cdFx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lLlxyXG5cdFx0Ly8gRmFrZSBvcmlnaW5hbEV2ZW50IHRvIGF2b2lkIGRvbm9yJ3Mgc3RvcFByb3BhZ2F0aW9uLCBidXQgaWYgdGhlXHJcblx0XHQvLyBzaW11bGF0ZWQgZXZlbnQgcHJldmVudHMgZGVmYXVsdCB0aGVuIHdlIGRvIHRoZSBzYW1lIG9uIHRoZSBkb25vci5cclxuXHRcdHZhciBlID0galF1ZXJ5LmV4dGVuZChcclxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCgpLFxyXG5cdFx0XHRldmVudCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IHR5cGUsXHJcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWUsXHJcblx0XHRcdFx0b3JpZ2luYWxFdmVudDoge31cclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdGlmICggYnViYmxlICkge1xyXG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggZSwgbnVsbCwgZWxlbSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmNhbGwoIGVsZW0sIGUgKTtcclxuXHRcdH1cclxuXHRcdGlmICggZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyID9cclxuXHRmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xyXG5cdFx0aWYgKCBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIgKSB7XHJcblx0XHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlLCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cdH0gOlxyXG5cdGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XHJcblx0XHR2YXIgbmFtZSA9IFwib25cIiArIHR5cGU7XHJcblxyXG5cdFx0aWYgKCBlbGVtLmRldGFjaEV2ZW50ICkge1xyXG5cclxuXHRcdFx0Ly8gIzg1NDUsICM3MDU0LCBwcmV2ZW50aW5nIG1lbW9yeSBsZWFrcyBmb3IgY3VzdG9tIGV2ZW50cyBpbiBJRTYtOFxyXG5cdFx0XHQvLyBkZXRhY2hFdmVudCBuZWVkZWQgcHJvcGVydHkgb24gZWxlbWVudCwgYnkgbmFtZSBvZiB0aGF0IGV2ZW50LCB0byBwcm9wZXJseSBleHBvc2UgaXQgdG8gR0NcclxuXHRcdFx0aWYgKCB0eXBlb2YgZWxlbVsgbmFtZSBdID09PSBzdHJ1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0ZWxlbVsgbmFtZSBdID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxlbS5kZXRhY2hFdmVudCggbmFtZSwgaGFuZGxlICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcbmpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uKCBzcmMsIHByb3BzICkge1xyXG5cdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxyXG5cdGlmICggISh0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50KSApIHtcclxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KCBzcmMsIHByb3BzICk7XHJcblx0fVxyXG5cclxuXHQvLyBFdmVudCBvYmplY3RcclxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcclxuXHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcclxuXHRcdHRoaXMudHlwZSA9IHNyYy50eXBlO1xyXG5cclxuXHRcdC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXHJcblx0XHQvLyBieSBhIGhhbmRsZXIgbG93ZXIgZG93biB0aGUgdHJlZTsgcmVmbGVjdCB0aGUgY29ycmVjdCB2YWx1ZS5cclxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcclxuXHRcdFx0XHRzcmMuZGVmYXVsdFByZXZlbnRlZCA9PT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPCA5LCBBbmRyb2lkIDwgNC4wXHJcblx0XHRcdFx0c3JjLnJldHVyblZhbHVlID09PSBmYWxzZSA/XHJcblx0XHRcdHJldHVyblRydWUgOlxyXG5cdFx0XHRyZXR1cm5GYWxzZTtcclxuXHJcblx0Ly8gRXZlbnQgdHlwZVxyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLnR5cGUgPSBzcmM7XHJcblx0fVxyXG5cclxuXHQvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxyXG5cdGlmICggcHJvcHMgKSB7XHJcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcclxuXHR0aGlzLnRpbWVTdGFtcCA9IHNyYyAmJiBzcmMudGltZVN0YW1wIHx8IGpRdWVyeS5ub3coKTtcclxuXHJcblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxyXG5cdHRoaXNbIGpRdWVyeS5leHBhbmRvIF0gPSB0cnVlO1xyXG59O1xyXG5cclxuLy8galF1ZXJ5LkV2ZW50IGlzIGJhc2VkIG9uIERPTTMgRXZlbnRzIGFzIHNwZWNpZmllZCBieSB0aGUgRUNNQVNjcmlwdCBMYW5ndWFnZSBCaW5kaW5nXHJcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxyXG5qUXVlcnkuRXZlbnQucHJvdG90eXBlID0ge1xyXG5cdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXHJcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxyXG5cdGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcclxuXHJcblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XHJcblxyXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xyXG5cdFx0aWYgKCAhZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElmIHByZXZlbnREZWZhdWx0IGV4aXN0cywgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxyXG5cdFx0aWYgKCBlLnByZXZlbnREZWZhdWx0ICkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogSUVcclxuXHRcdC8vIE90aGVyd2lzZSBzZXQgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBmYWxzZVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xyXG5cclxuXHRcdHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xyXG5cdFx0aWYgKCAhZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8gSWYgc3RvcFByb3BhZ2F0aW9uIGV4aXN0cywgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxyXG5cdFx0aWYgKCBlLnN0b3BQcm9wYWdhdGlvbiApIHtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTdXBwb3J0OiBJRVxyXG5cdFx0Ly8gU2V0IHRoZSBjYW5jZWxCdWJibGUgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIHRydWVcclxuXHRcdGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuXHR9LFxyXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcclxuXHJcblx0XHR0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcclxuXHJcblx0XHRpZiAoIGUgJiYgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKSB7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3NcclxualF1ZXJ5LmVhY2goe1xyXG5cdG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXHJcblx0bW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxyXG5cdHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxyXG5cdHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcclxufSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcclxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgb3JpZyBdID0ge1xyXG5cdFx0ZGVsZWdhdGVUeXBlOiBmaXgsXHJcblx0XHRiaW5kVHlwZTogZml4LFxyXG5cclxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cdFx0XHR2YXIgcmV0LFxyXG5cdFx0XHRcdHRhcmdldCA9IHRoaXMsXHJcblx0XHRcdFx0cmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0aGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xyXG5cclxuXHRcdFx0Ly8gRm9yIG1vdXNlbnRlci9sZWF2ZSBjYWxsIHRoZSBoYW5kbGVyIGlmIHJlbGF0ZWQgaXMgb3V0c2lkZSB0aGUgdGFyZ2V0LlxyXG5cdFx0XHQvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xyXG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0YXJnZXQgJiYgIWpRdWVyeS5jb250YWlucyggdGFyZ2V0LCByZWxhdGVkICkpICkge1xyXG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XHJcblx0XHRcdFx0cmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBmaXg7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJldDtcclxuXHRcdH1cclxuXHR9O1xyXG59KTtcclxuXHJcbi8vIElFIHN1Ym1pdCBkZWxlZ2F0aW9uXHJcbmlmICggIXN1cHBvcnQuc3VibWl0QnViYmxlcyApIHtcclxuXHJcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwuc3VibWl0ID0ge1xyXG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBPbmx5IG5lZWQgdGhpcyBmb3IgZGVsZWdhdGVkIGZvcm0gc3VibWl0IGV2ZW50c1xyXG5cdFx0XHRpZiAoIGpRdWVyeS5ub2RlTmFtZSggdGhpcywgXCJmb3JtXCIgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIExhenktYWRkIGEgc3VibWl0IGhhbmRsZXIgd2hlbiBhIGRlc2NlbmRhbnQgZm9ybSBtYXkgcG90ZW50aWFsbHkgYmUgc3VibWl0dGVkXHJcblx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIFwiY2xpY2suX3N1Ym1pdCBrZXlwcmVzcy5fc3VibWl0XCIsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdC8vIE5vZGUgbmFtZSBjaGVjayBhdm9pZHMgYSBWTUwtcmVsYXRlZCBjcmFzaCBpbiBJRSAoIzk4MDcpXHJcblx0XHRcdFx0dmFyIGVsZW0gPSBlLnRhcmdldCxcclxuXHRcdFx0XHRcdGZvcm0gPSBqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApIHx8IGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApID8gZWxlbS5mb3JtIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICggZm9ybSAmJiAhalF1ZXJ5Ll9kYXRhKCBmb3JtLCBcInN1Ym1pdEJ1YmJsZXNcIiApICkge1xyXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZm9ybSwgXCJzdWJtaXQuX3N1Ym1pdFwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblx0XHRcdFx0XHRcdGV2ZW50Ll9zdWJtaXRfYnViYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0alF1ZXJ5Ll9kYXRhKCBmb3JtLCBcInN1Ym1pdEJ1YmJsZXNcIiwgdHJ1ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIHJldHVybiB1bmRlZmluZWQgc2luY2Ugd2UgZG9uJ3QgbmVlZCBhbiBldmVudCBsaXN0ZW5lclxyXG5cdFx0fSxcclxuXHJcblx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHRcdFx0Ly8gSWYgZm9ybSB3YXMgc3VibWl0dGVkIGJ5IHRoZSB1c2VyLCBidWJibGUgdGhlIGV2ZW50IHVwIHRoZSB0cmVlXHJcblx0XHRcdGlmICggZXZlbnQuX3N1Ym1pdF9idWJibGUgKSB7XHJcblx0XHRcdFx0ZGVsZXRlIGV2ZW50Ll9zdWJtaXRfYnViYmxlO1xyXG5cdFx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICYmICFldmVudC5pc1RyaWdnZXIgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuc2ltdWxhdGUoIFwic3VibWl0XCIsIHRoaXMucGFyZW50Tm9kZSwgZXZlbnQsIHRydWUgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBPbmx5IG5lZWQgdGhpcyBmb3IgZGVsZWdhdGVkIGZvcm0gc3VibWl0IGV2ZW50c1xyXG5cdFx0XHRpZiAoIGpRdWVyeS5ub2RlTmFtZSggdGhpcywgXCJmb3JtXCIgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFJlbW92ZSBkZWxlZ2F0ZWQgaGFuZGxlcnM7IGNsZWFuRGF0YSBldmVudHVhbGx5IHJlYXBzIHN1Ym1pdCBoYW5kbGVycyBhdHRhY2hlZCBhYm92ZVxyXG5cdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCB0aGlzLCBcIi5fc3VibWl0XCIgKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG4vLyBJRSBjaGFuZ2UgZGVsZWdhdGlvbiBhbmQgY2hlY2tib3gvcmFkaW8gZml4XHJcbmlmICggIXN1cHBvcnQuY2hhbmdlQnViYmxlcyApIHtcclxuXHJcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwuY2hhbmdlID0ge1xyXG5cclxuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGlmICggcmZvcm1FbGVtcy50ZXN0KCB0aGlzLm5vZGVOYW1lICkgKSB7XHJcblx0XHRcdFx0Ly8gSUUgZG9lc24ndCBmaXJlIGNoYW5nZSBvbiBhIGNoZWNrL3JhZGlvIHVudGlsIGJsdXI7IHRyaWdnZXIgaXQgb24gY2xpY2tcclxuXHRcdFx0XHQvLyBhZnRlciBhIHByb3BlcnR5Y2hhbmdlLiBFYXQgdGhlIGJsdXItY2hhbmdlIGluIHNwZWNpYWwuY2hhbmdlLmhhbmRsZS5cclxuXHRcdFx0XHQvLyBUaGlzIHN0aWxsIGZpcmVzIG9uY2hhbmdlIGEgc2Vjb25kIHRpbWUgZm9yIGNoZWNrL3JhZGlvIGFmdGVyIGJsdXIuXHJcblx0XHRcdFx0aWYgKCB0aGlzLnR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCB0aGlzLnR5cGUgPT09IFwicmFkaW9cIiApIHtcclxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggZXZlbnQub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUgPT09IFwiY2hlY2tlZFwiICkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2p1c3RfY2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgXCJjbGljay5fY2hhbmdlXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLl9qdXN0X2NoYW5nZWQgJiYgIWV2ZW50LmlzVHJpZ2dlciApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9qdXN0X2NoYW5nZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBBbGxvdyB0cmlnZ2VyZWQsIHNpbXVsYXRlZCBjaGFuZ2UgZXZlbnRzICgjMTE1MDApXHJcblx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5zaW11bGF0ZSggXCJjaGFuZ2VcIiwgdGhpcywgZXZlbnQsIHRydWUgKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gRGVsZWdhdGVkIGV2ZW50OyBsYXp5LWFkZCBhIGNoYW5nZSBoYW5kbGVyIG9uIGRlc2NlbmRhbnQgaW5wdXRzXHJcblx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIFwiYmVmb3JlYWN0aXZhdGUuX2NoYW5nZVwiLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHR2YXIgZWxlbSA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdFx0XHRpZiAoIHJmb3JtRWxlbXMudGVzdCggZWxlbS5ub2RlTmFtZSApICYmICFqUXVlcnkuX2RhdGEoIGVsZW0sIFwiY2hhbmdlQnViYmxlc1wiICkgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBlbGVtLCBcImNoYW5nZS5fY2hhbmdlXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgJiYgIWV2ZW50LmlzU2ltdWxhdGVkICYmICFldmVudC5pc1RyaWdnZXIgKSB7XHJcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBcImNoYW5nZVwiLCB0aGlzLnBhcmVudE5vZGUsIGV2ZW50LCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0alF1ZXJ5Ll9kYXRhKCBlbGVtLCBcImNoYW5nZUJ1YmJsZXNcIiwgdHJ1ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cdFx0XHR2YXIgZWxlbSA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHRcdC8vIFN3YWxsb3cgbmF0aXZlIGNoYW5nZSBldmVudHMgZnJvbSBjaGVja2JveC9yYWRpbywgd2UgYWxyZWFkeSB0cmlnZ2VyZWQgdGhlbSBhYm92ZVxyXG5cdFx0XHRpZiAoIHRoaXMgIT09IGVsZW0gfHwgZXZlbnQuaXNTaW11bGF0ZWQgfHwgZXZlbnQuaXNUcmlnZ2VyIHx8IChlbGVtLnR5cGUgIT09IFwicmFkaW9cIiAmJiBlbGVtLnR5cGUgIT09IFwiY2hlY2tib3hcIikgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIFwiLl9jaGFuZ2VcIiApO1xyXG5cclxuXHRcdFx0cmV0dXJuICFyZm9ybUVsZW1zLnRlc3QoIHRoaXMubm9kZU5hbWUgKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgXCJidWJibGluZ1wiIGZvY3VzIGFuZCBibHVyIGV2ZW50c1xyXG5pZiAoICFzdXBwb3J0LmZvY3VzaW5CdWJibGVzICkge1xyXG5cdGpRdWVyeS5lYWNoKHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcclxuXHJcblx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxyXG5cdFx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBmaXgsIGV2ZW50LnRhcmdldCwgalF1ZXJ5LmV2ZW50LmZpeCggZXZlbnQgKSwgdHJ1ZSApO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBmaXggXSA9IHtcclxuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcclxuXHRcdFx0XHRcdGF0dGFjaGVzID0galF1ZXJ5Ll9kYXRhKCBkb2MsIGZpeCApO1xyXG5cclxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcclxuXHRcdFx0XHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGpRdWVyeS5fZGF0YSggZG9jLCBmaXgsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxyXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBqUXVlcnkuX2RhdGEoIGRvYywgZml4ICkgLSAxO1xyXG5cclxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcclxuXHRcdFx0XHRcdGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XHJcblx0XHRcdFx0XHRqUXVlcnkuX3JlbW92ZURhdGEoIGRvYywgZml4ICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGpRdWVyeS5fZGF0YSggZG9jLCBmaXgsIGF0dGFjaGVzICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pO1xyXG59XHJcblxyXG5qUXVlcnkuZm4uZXh0ZW5kKHtcclxuXHJcblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAvKklOVEVSTkFMKi8gb25lICkge1xyXG5cdFx0dmFyIHR5cGUsIG9yaWdGbjtcclxuXHJcblx0XHQvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcclxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xyXG5cdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxyXG5cdFx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXHJcblx0XHRcdFx0ZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XHJcblx0XHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcclxuXHRcdFx0XHR0aGlzLm9uKCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcclxuXHRcdFx0Ly8gKCB0eXBlcywgZm4gKVxyXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xyXG5cdFx0XHRkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XHJcblx0XHR9IGVsc2UgaWYgKCBmbiA9PSBudWxsICkge1xyXG5cdFx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdFx0XHQvLyAoIHR5cGVzLCBzZWxlY3RvciwgZm4gKVxyXG5cdFx0XHRcdGZuID0gZGF0YTtcclxuXHRcdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vICggdHlwZXMsIGRhdGEsIGZuIClcclxuXHRcdFx0XHRmbiA9IGRhdGE7XHJcblx0XHRcdFx0ZGF0YSA9IHNlbGVjdG9yO1xyXG5cdFx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcclxuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAoICFmbiApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBvbmUgPT09IDEgKSB7XHJcblx0XHRcdG9yaWdGbiA9IGZuO1xyXG5cdFx0XHRmbiA9IGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHRcdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cclxuXHRcdFx0XHRqUXVlcnkoKS5vZmYoIGV2ZW50ICk7XHJcblx0XHRcdFx0cmV0dXJuIG9yaWdGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcblx0XHRcdH07XHJcblx0XHRcdC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXHJcblx0XHRcdGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IgKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25lOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcclxuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XHJcblx0fSxcclxuXHRvZmY6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGZuICkge1xyXG5cdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcclxuXHRcdGlmICggdHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqICkge1xyXG5cdFx0XHQvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XHJcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcclxuXHRcdFx0alF1ZXJ5KCB0eXBlcy5kZWxlZ2F0ZVRhcmdldCApLm9mZihcclxuXHRcdFx0XHRoYW5kbGVPYmoubmFtZXNwYWNlID8gaGFuZGxlT2JqLm9yaWdUeXBlICsgXCIuXCIgKyBoYW5kbGVPYmoubmFtZXNwYWNlIDogaGFuZGxlT2JqLm9yaWdUeXBlLFxyXG5cdFx0XHRcdGhhbmRsZU9iai5zZWxlY3RvcixcclxuXHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlclxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xyXG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxyXG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xyXG5cdFx0XHRcdHRoaXMub2ZmKCB0eXBlLCBzZWxlY3RvciwgdHlwZXNbIHR5cGUgXSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XHJcblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcclxuXHRcdFx0Zm4gPSBzZWxlY3RvcjtcclxuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcclxuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIHRoaXMgKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0dHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xyXG5cdFx0dmFyIGVsZW0gPSB0aGlzWzBdO1xyXG5cdFx0aWYgKCBlbGVtICkge1xyXG5cdFx0XHRyZXR1cm4galF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIGVsZW0sIHRydWUgKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNhZmVGcmFnbWVudCggZG9jdW1lbnQgKSB7XHJcblx0dmFyIGxpc3QgPSBub2RlTmFtZXMuc3BsaXQoIFwifFwiICksXHJcblx0XHRzYWZlRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcblx0aWYgKCBzYWZlRnJhZy5jcmVhdGVFbGVtZW50ICkge1xyXG5cdFx0d2hpbGUgKCBsaXN0Lmxlbmd0aCApIHtcclxuXHRcdFx0c2FmZUZyYWcuY3JlYXRlRWxlbWVudChcclxuXHRcdFx0XHRsaXN0LnBvcCgpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBzYWZlRnJhZztcclxufVxyXG5cclxudmFyIG5vZGVOYW1lcyA9IFwiYWJicnxhcnRpY2xlfGFzaWRlfGF1ZGlvfGJkaXxjYW52YXN8ZGF0YXxkYXRhbGlzdHxkZXRhaWxzfGZpZ2NhcHRpb258ZmlndXJlfGZvb3RlcnxcIiArXHJcblx0XHRcImhlYWRlcnxoZ3JvdXB8bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHByb2dyZXNzfHNlY3Rpb258c3VtbWFyeXx0aW1lfHZpZGVvXCIsXHJcblx0cmlubGluZWpRdWVyeSA9IC8galF1ZXJ5XFxkKz1cIig/Om51bGx8XFxkKylcIi9nLFxyXG5cdHJub3NoaW1jYWNoZSA9IG5ldyBSZWdFeHAoXCI8KD86XCIgKyBub2RlTmFtZXMgKyBcIilbXFxcXHMvPl1cIiwgXCJpXCIpLFxyXG5cdHJsZWFkaW5nV2hpdGVzcGFjZSA9IC9eXFxzKy8sXHJcblx0cnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLFxyXG5cdHJ0YWdOYW1lID0gLzwoW1xcdzpdKykvLFxyXG5cdHJ0Ym9keSA9IC88dGJvZHkvaSxcclxuXHRyaHRtbCA9IC88fCYjP1xcdys7LyxcclxuXHRybm9Jbm5lcmh0bWwgPSAvPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLFxyXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxyXG5cdHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcclxuXHRyc2NyaXB0VHlwZSA9IC9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksXHJcblx0cnNjcmlwdFR5cGVNYXNrZWQgPSAvXnRydWVcXC8oLiopLyxcclxuXHRyY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csXHJcblxyXG5cdC8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICgjMTMyMDApXHJcblx0d3JhcE1hcCA9IHtcclxuXHRcdG9wdGlvbjogWyAxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIiBdLFxyXG5cdFx0bGVnZW5kOiBbIDEsIFwiPGZpZWxkc2V0PlwiLCBcIjwvZmllbGRzZXQ+XCIgXSxcclxuXHRcdGFyZWE6IFsgMSwgXCI8bWFwPlwiLCBcIjwvbWFwPlwiIF0sXHJcblx0XHRwYXJhbTogWyAxLCBcIjxvYmplY3Q+XCIsIFwiPC9vYmplY3Q+XCIgXSxcclxuXHRcdHRoZWFkOiBbIDEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCIgXSxcclxuXHRcdHRyOiBbIDIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCIgXSxcclxuXHRcdGNvbDogWyAyLCBcIjx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXHJcblx0XHR0ZDogWyAzLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiIF0sXHJcblxyXG5cdFx0Ly8gSUU2LTggY2FuJ3Qgc2VyaWFsaXplIGxpbmssIHNjcmlwdCwgc3R5bGUsIG9yIGFueSBodG1sNSAoTm9TY29wZSkgdGFncyxcclxuXHRcdC8vIHVubGVzcyB3cmFwcGVkIGluIGEgZGl2IHdpdGggbm9uLWJyZWFraW5nIGNoYXJhY3RlcnMgaW4gZnJvbnQgb2YgaXQuXHJcblx0XHRfZGVmYXVsdDogc3VwcG9ydC5odG1sU2VyaWFsaXplID8gWyAwLCBcIlwiLCBcIlwiIF0gOiBbIDEsIFwiWDxkaXY+XCIsIFwiPC9kaXY+XCIgIF1cclxuXHR9LFxyXG5cdHNhZmVGcmFnbWVudCA9IGNyZWF0ZVNhZmVGcmFnbWVudCggZG9jdW1lbnQgKSxcclxuXHRmcmFnbWVudERpdiA9IHNhZmVGcmFnbWVudC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSApO1xyXG5cclxud3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uO1xyXG53cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xyXG53cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcclxuXHJcbmZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xyXG5cdHZhciBlbGVtcywgZWxlbSxcclxuXHRcdGkgPSAwLFxyXG5cdFx0Zm91bmQgPSB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gc3RydW5kZWZpbmVkID8gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICkgOlxyXG5cdFx0XHR0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBzdHJ1bmRlZmluZWQgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyB8fCBcIipcIiApIDpcclxuXHRcdFx0dW5kZWZpbmVkO1xyXG5cclxuXHRpZiAoICFmb3VuZCApIHtcclxuXHRcdGZvciAoIGZvdW5kID0gW10sIGVsZW1zID0gY29udGV4dC5jaGlsZE5vZGVzIHx8IGNvbnRleHQ7IChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcclxuXHRcdFx0aWYgKCAhdGFnIHx8IGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgdGFnICkgKSB7XHJcblx0XHRcdFx0Zm91bmQucHVzaCggZWxlbSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggZm91bmQsIGdldEFsbCggZWxlbSwgdGFnICkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBqUXVlcnkubm9kZU5hbWUoIGNvbnRleHQsIHRhZyApID9cclxuXHRcdGpRdWVyeS5tZXJnZSggWyBjb250ZXh0IF0sIGZvdW5kICkgOlxyXG5cdFx0Zm91bmQ7XHJcbn1cclxuXHJcbi8vIFVzZWQgaW4gYnVpbGRGcmFnbWVudCwgZml4ZXMgdGhlIGRlZmF1bHRDaGVja2VkIHByb3BlcnR5XHJcbmZ1bmN0aW9uIGZpeERlZmF1bHRDaGVja2VkKCBlbGVtICkge1xyXG5cdGlmICggcmNoZWNrYWJsZVR5cGUudGVzdCggZWxlbS50eXBlICkgKSB7XHJcblx0XHRlbGVtLmRlZmF1bHRDaGVja2VkID0gZWxlbS5jaGVja2VkO1xyXG5cdH1cclxufVxyXG5cclxuLy8gU3VwcG9ydDogSUU8OFxyXG4vLyBNYW5pcHVsYXRpbmcgdGFibGVzIHJlcXVpcmVzIGEgdGJvZHlcclxuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xyXG5cdHJldHVybiBqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwidGFibGVcIiApICYmXHJcblx0XHRqUXVlcnkubm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgP1xyXG5cclxuXHRcdGVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXSB8fFxyXG5cdFx0XHRlbGVtLmFwcGVuZENoaWxkKCBlbGVtLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpICkgOlxyXG5cdFx0ZWxlbTtcclxufVxyXG5cclxuLy8gUmVwbGFjZS9yZXN0b3JlIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiBzY3JpcHQgZWxlbWVudHMgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxyXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xyXG5cdGVsZW0udHlwZSA9IChqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInR5cGVcIiApICE9PSBudWxsKSArIFwiL1wiICsgZWxlbS50eXBlO1xyXG5cdHJldHVybiBlbGVtO1xyXG59XHJcbmZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoIGVsZW0gKSB7XHJcblx0dmFyIG1hdGNoID0gcnNjcmlwdFR5cGVNYXNrZWQuZXhlYyggZWxlbS50eXBlICk7XHJcblx0aWYgKCBtYXRjaCApIHtcclxuXHRcdGVsZW0udHlwZSA9IG1hdGNoWzFdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7XHJcblx0fVxyXG5cdHJldHVybiBlbGVtO1xyXG59XHJcblxyXG4vLyBNYXJrIHNjcmlwdHMgYXMgaGF2aW5nIGFscmVhZHkgYmVlbiBldmFsdWF0ZWRcclxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xyXG5cdHZhciBlbGVtLFxyXG5cdFx0aSA9IDA7XHJcblx0Zm9yICggOyAoZWxlbSA9IGVsZW1zW2ldKSAhPSBudWxsOyBpKysgKSB7XHJcblx0XHRqUXVlcnkuX2RhdGEoIGVsZW0sIFwiZ2xvYmFsRXZhbFwiLCAhcmVmRWxlbWVudHMgfHwgalF1ZXJ5Ll9kYXRhKCByZWZFbGVtZW50c1tpXSwgXCJnbG9iYWxFdmFsXCIgKSApO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoIHNyYywgZGVzdCApIHtcclxuXHJcblx0aWYgKCBkZXN0Lm5vZGVUeXBlICE9PSAxIHx8ICFqUXVlcnkuaGFzRGF0YSggc3JjICkgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR2YXIgdHlwZSwgaSwgbCxcclxuXHRcdG9sZERhdGEgPSBqUXVlcnkuX2RhdGEoIHNyYyApLFxyXG5cdFx0Y3VyRGF0YSA9IGpRdWVyeS5fZGF0YSggZGVzdCwgb2xkRGF0YSApLFxyXG5cdFx0ZXZlbnRzID0gb2xkRGF0YS5ldmVudHM7XHJcblxyXG5cdGlmICggZXZlbnRzICkge1xyXG5cdFx0ZGVsZXRlIGN1ckRhdGEuaGFuZGxlO1xyXG5cdFx0Y3VyRGF0YS5ldmVudHMgPSB7fTtcclxuXHJcblx0XHRmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcclxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBldmVudHNbIHR5cGUgXS5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XHJcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZGVzdCwgdHlwZSwgZXZlbnRzWyB0eXBlIF1bIGkgXSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBtYWtlIHRoZSBjbG9uZWQgcHVibGljIGRhdGEgb2JqZWN0IGEgY29weSBmcm9tIHRoZSBvcmlnaW5hbFxyXG5cdGlmICggY3VyRGF0YS5kYXRhICkge1xyXG5cdFx0Y3VyRGF0YS5kYXRhID0galF1ZXJ5LmV4dGVuZCgge30sIGN1ckRhdGEuZGF0YSApO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZml4Q2xvbmVOb2RlSXNzdWVzKCBzcmMsIGRlc3QgKSB7XHJcblx0dmFyIG5vZGVOYW1lLCBlLCBkYXRhO1xyXG5cclxuXHQvLyBXZSBkbyBub3QgbmVlZCB0byBkbyBhbnl0aGluZyBmb3Igbm9uLUVsZW1lbnRzXHJcblx0aWYgKCBkZXN0Lm5vZGVUeXBlICE9PSAxICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bm9kZU5hbWUgPSBkZXN0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdC8vIElFNi04IGNvcGllcyBldmVudHMgYm91bmQgdmlhIGF0dGFjaEV2ZW50IHdoZW4gdXNpbmcgY2xvbmVOb2RlLlxyXG5cdGlmICggIXN1cHBvcnQubm9DbG9uZUV2ZW50ICYmIGRlc3RbIGpRdWVyeS5leHBhbmRvIF0gKSB7XHJcblx0XHRkYXRhID0galF1ZXJ5Ll9kYXRhKCBkZXN0ICk7XHJcblxyXG5cdFx0Zm9yICggZSBpbiBkYXRhLmV2ZW50cyApIHtcclxuXHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KCBkZXN0LCBlLCBkYXRhLmhhbmRsZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEV2ZW50IGRhdGEgZ2V0cyByZWZlcmVuY2VkIGluc3RlYWQgb2YgY29waWVkIGlmIHRoZSBleHBhbmRvIGdldHMgY29waWVkIHRvb1xyXG5cdFx0ZGVzdC5yZW1vdmVBdHRyaWJ1dGUoIGpRdWVyeS5leHBhbmRvICk7XHJcblx0fVxyXG5cclxuXHQvLyBJRSBibGFua3MgY29udGVudHMgd2hlbiBjbG9uaW5nIHNjcmlwdHMsIGFuZCB0cmllcyB0byBldmFsdWF0ZSBuZXdseS1zZXQgdGV4dFxyXG5cdGlmICggbm9kZU5hbWUgPT09IFwic2NyaXB0XCIgJiYgZGVzdC50ZXh0ICE9PSBzcmMudGV4dCApIHtcclxuXHRcdGRpc2FibGVTY3JpcHQoIGRlc3QgKS50ZXh0ID0gc3JjLnRleHQ7XHJcblx0XHRyZXN0b3JlU2NyaXB0KCBkZXN0ICk7XHJcblxyXG5cdC8vIElFNi0xMCBpbXByb3Blcmx5IGNsb25lcyBjaGlsZHJlbiBvZiBvYmplY3QgZWxlbWVudHMgdXNpbmcgY2xhc3NpZC5cclxuXHQvLyBJRTEwIHRocm93cyBOb01vZGlmaWNhdGlvbkFsbG93ZWRFcnJvciBpZiBwYXJlbnQgaXMgbnVsbCwgIzEyMTMyLlxyXG5cdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcIm9iamVjdFwiICkge1xyXG5cdFx0aWYgKCBkZXN0LnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdGRlc3Qub3V0ZXJIVE1MID0gc3JjLm91dGVySFRNTDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGlzIHBhdGggYXBwZWFycyB1bmF2b2lkYWJsZSBmb3IgSUU5LiBXaGVuIGNsb25pbmcgYW4gb2JqZWN0XHJcblx0XHQvLyBlbGVtZW50IGluIElFOSwgdGhlIG91dGVySFRNTCBzdHJhdGVneSBhYm92ZSBpcyBub3Qgc3VmZmljaWVudC5cclxuXHRcdC8vIElmIHRoZSBzcmMgaGFzIGlubmVySFRNTCBhbmQgdGhlIGRlc3RpbmF0aW9uIGRvZXMgbm90LFxyXG5cdFx0Ly8gY29weSB0aGUgc3JjLmlubmVySFRNTCBpbnRvIHRoZSBkZXN0LmlubmVySFRNTC4gIzEwMzI0XHJcblx0XHRpZiAoIHN1cHBvcnQuaHRtbDVDbG9uZSAmJiAoIHNyYy5pbm5lckhUTUwgJiYgIWpRdWVyeS50cmltKGRlc3QuaW5uZXJIVE1MKSApICkge1xyXG5cdFx0XHRkZXN0LmlubmVySFRNTCA9IHNyYy5pbm5lckhUTUw7XHJcblx0XHR9XHJcblxyXG5cdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcclxuXHRcdC8vIElFNi04IGZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3hcclxuXHRcdC8vIG9yIHJhZGlvIGJ1dHRvbi4gV29yc2UsIElFNi03IGZhaWwgdG8gZ2l2ZSB0aGUgY2xvbmVkIGVsZW1lbnRcclxuXHRcdC8vIGEgY2hlY2tlZCBhcHBlYXJhbmNlIGlmIHRoZSBkZWZhdWx0Q2hlY2tlZCB2YWx1ZSBpc24ndCBhbHNvIHNldFxyXG5cclxuXHRcdGRlc3QuZGVmYXVsdENoZWNrZWQgPSBkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcclxuXHJcblx0XHQvLyBJRTYtNyBnZXQgY29uZnVzZWQgYW5kIGVuZCB1cCBzZXR0aW5nIHRoZSB2YWx1ZSBvZiBhIGNsb25lZFxyXG5cdFx0Ly8gY2hlY2tib3gvcmFkaW8gYnV0dG9uIHRvIGFuIGVtcHR5IHN0cmluZyBpbnN0ZWFkIG9mIFwib25cIlxyXG5cdFx0aWYgKCBkZXN0LnZhbHVlICE9PSBzcmMudmFsdWUgKSB7XHJcblx0XHRcdGRlc3QudmFsdWUgPSBzcmMudmFsdWU7XHJcblx0XHR9XHJcblxyXG5cdC8vIElFNi04IGZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkXHJcblx0Ly8gc3RhdGUgd2hlbiBjbG9uaW5nIG9wdGlvbnNcclxuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJvcHRpb25cIiApIHtcclxuXHRcdGRlc3QuZGVmYXVsdFNlbGVjdGVkID0gZGVzdC5zZWxlY3RlZCA9IHNyYy5kZWZhdWx0U2VsZWN0ZWQ7XHJcblxyXG5cdC8vIElFNi04IGZhaWxzIHRvIHNldCB0aGUgZGVmYXVsdFZhbHVlIHRvIHRoZSBjb3JyZWN0IHZhbHVlIHdoZW5cclxuXHQvLyBjbG9uaW5nIG90aGVyIHR5cGVzIG9mIGlucHV0IGZpZWxkc1xyXG5cdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgfHwgbm9kZU5hbWUgPT09IFwidGV4dGFyZWFcIiApIHtcclxuXHRcdGRlc3QuZGVmYXVsdFZhbHVlID0gc3JjLmRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcbn1cclxuXHJcbmpRdWVyeS5leHRlbmQoe1xyXG5cdGNsb25lOiBmdW5jdGlvbiggZWxlbSwgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XHJcblx0XHR2YXIgZGVzdEVsZW1lbnRzLCBub2RlLCBjbG9uZSwgaSwgc3JjRWxlbWVudHMsXHJcblx0XHRcdGluUGFnZSA9IGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XHJcblxyXG5cdFx0aWYgKCBzdXBwb3J0Lmh0bWw1Q2xvbmUgfHwgalF1ZXJ5LmlzWE1MRG9jKGVsZW0pIHx8ICFybm9zaGltY2FjaGUudGVzdCggXCI8XCIgKyBlbGVtLm5vZGVOYW1lICsgXCI+XCIgKSApIHtcclxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApO1xyXG5cclxuXHRcdC8vIElFPD04IGRvZXMgbm90IHByb3Blcmx5IGNsb25lIGRldGFjaGVkLCB1bmtub3duIGVsZW1lbnQgbm9kZXNcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZyYWdtZW50RGl2LmlubmVySFRNTCA9IGVsZW0ub3V0ZXJIVE1MO1xyXG5cdFx0XHRmcmFnbWVudERpdi5yZW1vdmVDaGlsZCggY2xvbmUgPSBmcmFnbWVudERpdi5maXJzdENoaWxkICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAoIXN1cHBvcnQubm9DbG9uZUV2ZW50IHx8ICFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkKSAmJlxyXG5cdFx0XHRcdChlbGVtLm5vZGVUeXBlID09PSAxIHx8IGVsZW0ubm9kZVR5cGUgPT09IDExKSAmJiAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pICkge1xyXG5cclxuXHRcdFx0Ly8gV2UgZXNjaGV3IFNpenpsZSBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOiBodHRwOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcclxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xyXG5cdFx0XHRzcmNFbGVtZW50cyA9IGdldEFsbCggZWxlbSApO1xyXG5cclxuXHRcdFx0Ly8gRml4IGFsbCBJRSBjbG9uaW5nIGlzc3Vlc1xyXG5cdFx0XHRmb3IgKCBpID0gMDsgKG5vZGUgPSBzcmNFbGVtZW50c1tpXSkgIT0gbnVsbDsgKytpICkge1xyXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGF0IHRoZSBkZXN0aW5hdGlvbiBub2RlIGlzIG5vdCBudWxsOyBGaXhlcyAjOTU4N1xyXG5cdFx0XHRcdGlmICggZGVzdEVsZW1lbnRzW2ldICkge1xyXG5cdFx0XHRcdFx0Zml4Q2xvbmVOb2RlSXNzdWVzKCBub2RlLCBkZXN0RWxlbWVudHNbaV0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBDb3B5IHRoZSBldmVudHMgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGNsb25lXHJcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XHJcblx0XHRcdGlmICggZGVlcERhdGFBbmRFdmVudHMgKSB7XHJcblx0XHRcdFx0c3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoIGVsZW0gKTtcclxuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xyXG5cclxuXHRcdFx0XHRmb3IgKCBpID0gMDsgKG5vZGUgPSBzcmNFbGVtZW50c1tpXSkgIT0gbnVsbDsgaSsrICkge1xyXG5cdFx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIG5vZGUsIGRlc3RFbGVtZW50c1tpXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3RvcnlcclxuXHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUsIFwic2NyaXB0XCIgKTtcclxuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdHNldEdsb2JhbEV2YWwoIGRlc3RFbGVtZW50cywgIWluUGFnZSAmJiBnZXRBbGwoIGVsZW0sIFwic2NyaXB0XCIgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlc3RFbGVtZW50cyA9IHNyY0VsZW1lbnRzID0gbm9kZSA9IG51bGw7XHJcblxyXG5cdFx0Ly8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XHJcblx0XHRyZXR1cm4gY2xvbmU7XHJcblx0fSxcclxuXHJcblx0YnVpbGRGcmFnbWVudDogZnVuY3Rpb24oIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24gKSB7XHJcblx0XHR2YXIgaiwgZWxlbSwgY29udGFpbnMsXHJcblx0XHRcdHRtcCwgdGFnLCB0Ym9keSwgd3JhcCxcclxuXHRcdFx0bCA9IGVsZW1zLmxlbmd0aCxcclxuXHJcblx0XHRcdC8vIEVuc3VyZSBhIHNhZmUgZnJhZ21lbnRcclxuXHRcdFx0c2FmZSA9IGNyZWF0ZVNhZmVGcmFnbWVudCggY29udGV4dCApLFxyXG5cclxuXHRcdFx0bm9kZXMgPSBbXSxcclxuXHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xyXG5cdFx0XHRlbGVtID0gZWxlbXNbIGkgXTtcclxuXHJcblx0XHRcdGlmICggZWxlbSB8fCBlbGVtID09PSAwICkge1xyXG5cclxuXHRcdFx0XHQvLyBBZGQgbm9kZXMgZGlyZWN0bHlcclxuXHRcdFx0XHRpZiAoIGpRdWVyeS50eXBlKCBlbGVtICkgPT09IFwib2JqZWN0XCIgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XHJcblxyXG5cdFx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoICFyaHRtbC50ZXN0KCBlbGVtICkgKSB7XHJcblx0XHRcdFx0XHRub2Rlcy5wdXNoKCBjb250ZXh0LmNyZWF0ZVRleHROb2RlKCBlbGVtICkgKTtcclxuXHJcblx0XHRcdFx0Ly8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRtcCA9IHRtcCB8fCBzYWZlLmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXHJcblx0XHRcdFx0XHR0YWcgPSAocnRhZ05hbWUuZXhlYyggZWxlbSApIHx8IFsgXCJcIiwgXCJcIiBdKVsgMSBdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHR3cmFwID0gd3JhcE1hcFsgdGFnIF0gfHwgd3JhcE1hcC5fZGVmYXVsdDtcclxuXHJcblx0XHRcdFx0XHR0bXAuaW5uZXJIVE1MID0gd3JhcFsxXSArIGVsZW0ucmVwbGFjZSggcnhodG1sVGFnLCBcIjwkMT48LyQyPlwiICkgKyB3cmFwWzJdO1xyXG5cclxuXHRcdFx0XHRcdC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxyXG5cdFx0XHRcdFx0aiA9IHdyYXBbMF07XHJcblx0XHRcdFx0XHR3aGlsZSAoIGotLSApIHtcclxuXHRcdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBNYW51YWxseSBhZGQgbGVhZGluZyB3aGl0ZXNwYWNlIHJlbW92ZWQgYnkgSUVcclxuXHRcdFx0XHRcdGlmICggIXN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UgJiYgcmxlYWRpbmdXaGl0ZXNwYWNlLnRlc3QoIGVsZW0gKSApIHtcclxuXHRcdFx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggcmxlYWRpbmdXaGl0ZXNwYWNlLmV4ZWMoIGVsZW0gKVswXSApICk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIElFJ3MgYXV0b2luc2VydGVkIDx0Ym9keT4gZnJvbSB0YWJsZSBmcmFnbWVudHNcclxuXHRcdFx0XHRcdGlmICggIXN1cHBvcnQudGJvZHkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTdHJpbmcgd2FzIGEgPHRhYmxlPiwgKm1heSogaGF2ZSBzcHVyaW91cyA8dGJvZHk+XHJcblx0XHRcdFx0XHRcdGVsZW0gPSB0YWcgPT09IFwidGFibGVcIiAmJiAhcnRib2R5LnRlc3QoIGVsZW0gKSA/XHJcblx0XHRcdFx0XHRcdFx0dG1wLmZpcnN0Q2hpbGQgOlxyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBTdHJpbmcgd2FzIGEgYmFyZSA8dGhlYWQ+IG9yIDx0Zm9vdD5cclxuXHRcdFx0XHRcdFx0XHR3cmFwWzFdID09PSBcIjx0YWJsZT5cIiAmJiAhcnRib2R5LnRlc3QoIGVsZW0gKSA/XHJcblx0XHRcdFx0XHRcdFx0XHR0bXAgOlxyXG5cdFx0XHRcdFx0XHRcdFx0MDtcclxuXHJcblx0XHRcdFx0XHRcdGogPSBlbGVtICYmIGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdHdoaWxlICggai0tICkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Lm5vZGVOYW1lKCAodGJvZHkgPSBlbGVtLmNoaWxkTm9kZXNbal0pLCBcInRib2R5XCIgKSAmJiAhdGJvZHkuY2hpbGROb2Rlcy5sZW5ndGggKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtLnJlbW92ZUNoaWxkKCB0Ym9keSApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gRml4ICMxMjM5MiBmb3IgV2ViS2l0IGFuZCBJRSA+IDlcclxuXHRcdFx0XHRcdHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdFx0Ly8gRml4ICMxMjM5MiBmb3Igb2xkSUVcclxuXHRcdFx0XHRcdHdoaWxlICggdG1wLmZpcnN0Q2hpbGQgKSB7XHJcblx0XHRcdFx0XHRcdHRtcC5yZW1vdmVDaGlsZCggdG1wLmZpcnN0Q2hpbGQgKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lciBmb3IgcHJvcGVyIGNsZWFudXBcclxuXHRcdFx0XHRcdHRtcCA9IHNhZmUubGFzdENoaWxkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEZpeCAjMTEzNTY6IENsZWFyIGVsZW1lbnRzIGZyb20gZnJhZ21lbnRcclxuXHRcdGlmICggdG1wICkge1xyXG5cdFx0XHRzYWZlLnJlbW92ZUNoaWxkKCB0bXAgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBSZXNldCBkZWZhdWx0Q2hlY2tlZCBmb3IgYW55IHJhZGlvcyBhbmQgY2hlY2tib3hlc1xyXG5cdFx0Ly8gYWJvdXQgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSBpbiBJRSA2LzcgKCM4MDYwKVxyXG5cdFx0aWYgKCAhc3VwcG9ydC5hcHBlbmRDaGVja2VkICkge1xyXG5cdFx0XHRqUXVlcnkuZ3JlcCggZ2V0QWxsKCBub2RlcywgXCJpbnB1dFwiICksIGZpeERlZmF1bHRDaGVja2VkICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IDA7XHJcblx0XHR3aGlsZSAoIChlbGVtID0gbm9kZXNbIGkrKyBdKSApIHtcclxuXHJcblx0XHRcdC8vICM0MDg3IC0gSWYgb3JpZ2luIGFuZCBkZXN0aW5hdGlvbiBlbGVtZW50cyBhcmUgdGhlIHNhbWUsIGFuZCB0aGlzIGlzXHJcblx0XHRcdC8vIHRoYXQgZWxlbWVudCwgZG8gbm90IGRvIGFueXRoaW5nXHJcblx0XHRcdGlmICggc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KCBlbGVtLCBzZWxlY3Rpb24gKSAhPT0gLTEgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRhaW5zID0galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcclxuXHJcblx0XHRcdC8vIEFwcGVuZCB0byBmcmFnbWVudFxyXG5cdFx0XHR0bXAgPSBnZXRBbGwoIHNhZmUuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xyXG5cclxuXHRcdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxyXG5cdFx0XHRpZiAoIGNvbnRhaW5zICkge1xyXG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXHJcblx0XHRcdGlmICggc2NyaXB0cyApIHtcclxuXHRcdFx0XHRqID0gMDtcclxuXHRcdFx0XHR3aGlsZSAoIChlbGVtID0gdG1wWyBqKysgXSkgKSB7XHJcblx0XHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XHJcblx0XHRcdFx0XHRcdHNjcmlwdHMucHVzaCggZWxlbSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRtcCA9IG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIHNhZmU7XHJcblx0fSxcclxuXHJcblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMsIC8qIGludGVybmFsICovIGFjY2VwdERhdGEgKSB7XHJcblx0XHR2YXIgZWxlbSwgdHlwZSwgaWQsIGRhdGEsXHJcblx0XHRcdGkgPSAwLFxyXG5cdFx0XHRpbnRlcm5hbEtleSA9IGpRdWVyeS5leHBhbmRvLFxyXG5cdFx0XHRjYWNoZSA9IGpRdWVyeS5jYWNoZSxcclxuXHRcdFx0ZGVsZXRlRXhwYW5kbyA9IHN1cHBvcnQuZGVsZXRlRXhwYW5kbyxcclxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsO1xyXG5cclxuXHRcdGZvciAoIDsgKGVsZW0gPSBlbGVtc1tpXSkgIT0gbnVsbDsgaSsrICkge1xyXG5cdFx0XHRpZiAoIGFjY2VwdERhdGEgfHwgalF1ZXJ5LmFjY2VwdERhdGEoIGVsZW0gKSApIHtcclxuXHJcblx0XHRcdFx0aWQgPSBlbGVtWyBpbnRlcm5hbEtleSBdO1xyXG5cdFx0XHRcdGRhdGEgPSBpZCAmJiBjYWNoZVsgaWQgXTtcclxuXHJcblx0XHRcdFx0aWYgKCBkYXRhICkge1xyXG5cdFx0XHRcdFx0aWYgKCBkYXRhLmV2ZW50cyApIHtcclxuXHRcdFx0XHRcdFx0Zm9yICggdHlwZSBpbiBkYXRhLmV2ZW50cyApIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlICk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGNhY2hlIG9ubHkgaWYgaXQgd2FzIG5vdCBhbHJlYWR5IHJlbW92ZWQgYnkgalF1ZXJ5LmV2ZW50LnJlbW92ZVxyXG5cdFx0XHRcdFx0aWYgKCBjYWNoZVsgaWQgXSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGRlbGV0ZSBjYWNoZVsgaWQgXTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIElFIGRvZXMgbm90IGFsbG93IHVzIHRvIGRlbGV0ZSBleHBhbmRvIHByb3BlcnRpZXMgZnJvbSBub2RlcyxcclxuXHRcdFx0XHRcdFx0Ly8gbm9yIGRvZXMgaXQgaGF2ZSBhIHJlbW92ZUF0dHJpYnV0ZSBmdW5jdGlvbiBvbiBEb2N1bWVudCBub2RlcztcclxuXHRcdFx0XHRcdFx0Ly8gd2UgbXVzdCBoYW5kbGUgYWxsIG9mIHRoZXNlIGNhc2VzXHJcblx0XHRcdFx0XHRcdGlmICggZGVsZXRlRXhwYW5kbyApIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZWxlbVsgaW50ZXJuYWxLZXkgXTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBlbGVtLnJlbW92ZUF0dHJpYnV0ZSAhPT0gc3RydW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBpbnRlcm5hbEtleSApO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtWyBpbnRlcm5hbEtleSBdID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0ZGVsZXRlZElkcy5wdXNoKCBpZCApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5qUXVlcnkuZm4uZXh0ZW5kKHtcclxuXHR0ZXh0OiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cclxuXHRcdFx0XHRqUXVlcnkudGV4dCggdGhpcyApIDpcclxuXHRcdFx0XHR0aGlzLmVtcHR5KCkuYXBwZW5kKCAoIHRoaXNbMF0gJiYgdGhpc1swXS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50ICkuY3JlYXRlVGV4dE5vZGUoIHZhbHVlICkgKTtcclxuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XHJcblx0fSxcclxuXHJcblx0YXBwZW5kOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmRvbU1hbmlwKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XHJcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZG9tTWFuaXAoIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcclxuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHRiZWZvcmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZG9tTWFuaXAoIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZG9tTWFuaXAoIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMubmV4dFNpYmxpbmcgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0cmVtb3ZlOiBmdW5jdGlvbiggc2VsZWN0b3IsIGtlZXBEYXRhIC8qIEludGVybmFsIFVzZSBPbmx5ICovICkge1xyXG5cdFx0dmFyIGVsZW0sXHJcblx0XHRcdGVsZW1zID0gc2VsZWN0b3IgPyBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgdGhpcyApIDogdGhpcyxcclxuXHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0Zm9yICggOyAoZWxlbSA9IGVsZW1zW2ldKSAhPSBudWxsOyBpKysgKSB7XHJcblxyXG5cdFx0XHRpZiAoICFrZWVwRGF0YSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xyXG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSApICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdGlmICgga2VlcERhdGEgJiYgalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSApIHtcclxuXHRcdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggZWxlbSwgXCJzY3JpcHRcIiApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZWxlbSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0ZW1wdHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGVsZW0sXHJcblx0XHRcdGkgPSAwO1xyXG5cclxuXHRcdGZvciAoIDsgKGVsZW0gPSB0aGlzW2ldKSAhPSBudWxsOyBpKysgKSB7XHJcblx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XHJcblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIG5vZGVzXHJcblx0XHRcdHdoaWxlICggZWxlbS5maXJzdENoaWxkICkge1xyXG5cdFx0XHRcdGVsZW0ucmVtb3ZlQ2hpbGQoIGVsZW0uZmlyc3RDaGlsZCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgc2VsZWN0LCBlbnN1cmUgdGhhdCBpdCBkaXNwbGF5cyBlbXB0eSAoIzEyMzM2KVxyXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTw5XHJcblx0XHRcdGlmICggZWxlbS5vcHRpb25zICYmIGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgXCJzZWxlY3RcIiApICkge1xyXG5cdFx0XHRcdGVsZW0ub3B0aW9ucy5sZW5ndGggPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcclxuXHRcdGRhdGFBbmRFdmVudHMgPSBkYXRhQW5kRXZlbnRzID09IG51bGwgPyBmYWxzZSA6IGRhdGFBbmRFdmVudHM7XHJcblx0XHRkZWVwRGF0YUFuZEV2ZW50cyA9IGRlZXBEYXRhQW5kRXZlbnRzID09IG51bGwgPyBkYXRhQW5kRXZlbnRzIDogZGVlcERhdGFBbmRFdmVudHM7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0aHRtbDogZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHR2YXIgZWxlbSA9IHRoaXNbIDAgXSB8fCB7fSxcclxuXHRcdFx0XHRpID0gMCxcclxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDEgP1xyXG5cdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwucmVwbGFjZSggcmlubGluZWpRdWVyeSwgXCJcIiApIDpcclxuXHRcdFx0XHRcdHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiB0YWtlIGEgc2hvcnRjdXQgYW5kIGp1c3QgdXNlIGlubmVySFRNTFxyXG5cdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAhcm5vSW5uZXJodG1sLnRlc3QoIHZhbHVlICkgJiZcclxuXHRcdFx0XHQoIHN1cHBvcnQuaHRtbFNlcmlhbGl6ZSB8fCAhcm5vc2hpbWNhY2hlLnRlc3QoIHZhbHVlICkgICkgJiZcclxuXHRcdFx0XHQoIHN1cHBvcnQubGVhZGluZ1doaXRlc3BhY2UgfHwgIXJsZWFkaW5nV2hpdGVzcGFjZS50ZXN0KCB2YWx1ZSApICkgJiZcclxuXHRcdFx0XHQhd3JhcE1hcFsgKHJ0YWdOYW1lLmV4ZWMoIHZhbHVlICkgfHwgWyBcIlwiLCBcIlwiIF0pWyAxIF0udG9Mb3dlckNhc2UoKSBdICkge1xyXG5cclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoIHJ4aHRtbFRhZywgXCI8JDE+PC8kMj5cIiApO1xyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Zm9yICg7IGkgPCBsOyBpKysgKSB7XHJcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG5cdFx0XHRcdFx0XHRlbGVtID0gdGhpc1tpXSB8fCB7fTtcclxuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xyXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRlbGVtID0gMDtcclxuXHJcblx0XHRcdFx0Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXHJcblx0XHRcdFx0fSBjYXRjaChlKSB7fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGVsZW0gKSB7XHJcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmFwcGVuZCggdmFsdWUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcclxuXHR9LFxyXG5cclxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYXJnID0gYXJndW1lbnRzWyAwIF07XHJcblxyXG5cdFx0Ly8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XHJcblx0XHR0aGlzLmRvbU1hbmlwKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRhcmcgPSB0aGlzLnBhcmVudE5vZGU7XHJcblxyXG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIHRoaXMgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBhcmcgKSB7XHJcblx0XHRcdFx0YXJnLnJlcGxhY2VDaGlsZCggZWxlbSwgdGhpcyApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBGb3JjZSByZW1vdmFsIGlmIHRoZXJlIHdhcyBubyBuZXcgY29udGVudCAoZS5nLiwgZnJvbSBlbXB0eSBhcmd1bWVudHMpXHJcblx0XHRyZXR1cm4gYXJnICYmIChhcmcubGVuZ3RoIHx8IGFyZy5ub2RlVHlwZSkgPyB0aGlzIDogdGhpcy5yZW1vdmUoKTtcclxuXHR9LFxyXG5cclxuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcclxuXHRcdHJldHVybiB0aGlzLnJlbW92ZSggc2VsZWN0b3IsIHRydWUgKTtcclxuXHR9LFxyXG5cclxuXHRkb21NYW5pcDogZnVuY3Rpb24oIGFyZ3MsIGNhbGxiYWNrICkge1xyXG5cclxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcclxuXHRcdGFyZ3MgPSBjb25jYXQuYXBwbHkoIFtdLCBhcmdzICk7XHJcblxyXG5cdFx0dmFyIGZpcnN0LCBub2RlLCBoYXNTY3JpcHRzLFxyXG5cdFx0XHRzY3JpcHRzLCBkb2MsIGZyYWdtZW50LFxyXG5cdFx0XHRpID0gMCxcclxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoLFxyXG5cdFx0XHRzZXQgPSB0aGlzLFxyXG5cdFx0XHRpTm9DbG9uZSA9IGwgLSAxLFxyXG5cdFx0XHR2YWx1ZSA9IGFyZ3NbMF0sXHJcblx0XHRcdGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcclxuXHJcblx0XHQvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcclxuXHRcdGlmICggaXNGdW5jdGlvbiB8fFxyXG5cdFx0XHRcdCggbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXHJcblx0XHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSBzZXQuZXEoIGluZGV4ICk7XHJcblx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uICkge1xyXG5cdFx0XHRcdFx0YXJnc1swXSA9IHZhbHVlLmNhbGwoIHRoaXMsIGluZGV4LCBzZWxmLmh0bWwoKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzZWxmLmRvbU1hbmlwKCBhcmdzLCBjYWxsYmFjayApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGwgKSB7XHJcblx0XHRcdGZyYWdtZW50ID0galF1ZXJ5LmJ1aWxkRnJhZ21lbnQoIGFyZ3MsIHRoaXNbIDAgXS5vd25lckRvY3VtZW50LCBmYWxzZSwgdGhpcyApO1xyXG5cdFx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XHJcblxyXG5cdFx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xyXG5cdFx0XHRcdGZyYWdtZW50ID0gZmlyc3Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZmlyc3QgKSB7XHJcblx0XHRcdFx0c2NyaXB0cyA9IGpRdWVyeS5tYXAoIGdldEFsbCggZnJhZ21lbnQsIFwic2NyaXB0XCIgKSwgZGlzYWJsZVNjcmlwdCApO1xyXG5cdFx0XHRcdGhhc1NjcmlwdHMgPSBzY3JpcHRzLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbSBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcclxuXHRcdFx0XHQvLyBiZWluZyBlbXB0aWVkIGluY29ycmVjdGx5IGluIGNlcnRhaW4gc2l0dWF0aW9ucyAoIzgwNzApLlxyXG5cdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcclxuXHRcdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xyXG5cdFx0XHRcdFx0XHRub2RlID0galF1ZXJ5LmNsb25lKCBub2RlLCB0cnVlLCB0cnVlICk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXHJcblx0XHRcdFx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcclxuXHRcdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKCB0aGlzW2ldLCBub2RlLCBpICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XHJcblx0XHRcdFx0XHRkb2MgPSBzY3JpcHRzWyBzY3JpcHRzLmxlbmd0aCAtIDEgXS5vd25lckRvY3VtZW50O1xyXG5cclxuXHRcdFx0XHRcdC8vIFJlZW5hYmxlIHNjcmlwdHNcclxuXHRcdFx0XHRcdGpRdWVyeS5tYXAoIHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXHJcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKyApIHtcclxuXHRcdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcclxuXHRcdFx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBub2RlLnR5cGUgfHwgXCJcIiApICYmXHJcblx0XHRcdFx0XHRcdFx0IWpRdWVyeS5fZGF0YSggbm9kZSwgXCJnbG9iYWxFdmFsXCIgKSAmJiBqUXVlcnkuY29udGFpbnMoIGRvYywgbm9kZSApICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUuc3JjICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuX2V2YWxVcmwoIG5vZGUuc3JjICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5nbG9iYWxFdmFsKCAoIG5vZGUudGV4dCB8fCBub2RlLnRleHRDb250ZW50IHx8IG5vZGUuaW5uZXJIVE1MIHx8IFwiXCIgKS5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gRml4ICMxMTgwOTogQXZvaWQgbGVha2luZyBtZW1vcnlcclxuXHRcdFx0XHRmcmFnbWVudCA9IGZpcnN0ID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufSk7XHJcblxyXG5qUXVlcnkuZWFjaCh7XHJcblx0YXBwZW5kVG86IFwiYXBwZW5kXCIsXHJcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcclxuXHRpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXHJcblx0aW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcclxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcclxufSwgZnVuY3Rpb24oIG5hbWUsIG9yaWdpbmFsICkge1xyXG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xyXG5cdFx0dmFyIGVsZW1zLFxyXG5cdFx0XHRpID0gMCxcclxuXHRcdFx0cmV0ID0gW10sXHJcblx0XHRcdGluc2VydCA9IGpRdWVyeSggc2VsZWN0b3IgKSxcclxuXHRcdFx0bGFzdCA9IGluc2VydC5sZW5ndGggLSAxO1xyXG5cclxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XHJcblx0XHRcdGVsZW1zID0gaSA9PT0gbGFzdCA/IHRoaXMgOiB0aGlzLmNsb25lKHRydWUpO1xyXG5cdFx0XHRqUXVlcnkoIGluc2VydFtpXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xyXG5cclxuXHRcdFx0Ly8gTW9kZXJuIGJyb3dzZXJzIGNhbiBhcHBseSBqUXVlcnkgY29sbGVjdGlvbnMgYXMgYXJyYXlzLCBidXQgb2xkSUUgbmVlZHMgYSAuZ2V0KClcclxuXHRcdFx0cHVzaC5hcHBseSggcmV0LCBlbGVtcy5nZXQoKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggcmV0ICk7XHJcblx0fTtcclxufSk7XHJcblxyXG5cclxudmFyIGlmcmFtZSxcclxuXHRlbGVtZGlzcGxheSA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlIHRoZSBhY3R1YWwgZGlzcGxheSBvZiBhIGVsZW1lbnRcclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbm9kZU5hbWUgb2YgdGhlIGVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IGRvYyBEb2N1bWVudCBvYmplY3RcclxuICovXHJcbi8vIENhbGxlZCBvbmx5IGZyb20gd2l0aGluIGRlZmF1bHREaXNwbGF5XHJcbmZ1bmN0aW9uIGFjdHVhbERpc3BsYXkoIG5hbWUsIGRvYyApIHtcclxuXHR2YXIgc3R5bGUsXHJcblx0XHRlbGVtID0galF1ZXJ5KCBkb2MuY3JlYXRlRWxlbWVudCggbmFtZSApICkuYXBwZW5kVG8oIGRvYy5ib2R5ICksXHJcblxyXG5cdFx0Ly8gZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUgbWlnaHQgYmUgcmVsaWFibHkgdXNlZCBvbmx5IG9uIGF0dGFjaGVkIGVsZW1lbnRcclxuXHRcdGRpc3BsYXkgPSB3aW5kb3cuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUgJiYgKCBzdHlsZSA9IHdpbmRvdy5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSggZWxlbVsgMCBdICkgKSA/XHJcblxyXG5cdFx0XHQvLyBVc2Ugb2YgdGhpcyBtZXRob2QgaXMgYSB0ZW1wb3JhcnkgZml4IChtb3JlIGxpa2Ugb3B0bWl6YXRpb24pIHVudGlsIHNvbWV0aGluZyBiZXR0ZXIgY29tZXMgYWxvbmcsXHJcblx0XHRcdC8vIHNpbmNlIGl0IHdhcyByZW1vdmVkIGZyb20gc3BlY2lmaWNhdGlvbiBhbmQgc3VwcG9ydGVkIG9ubHkgaW4gRkZcclxuXHRcdFx0c3R5bGUuZGlzcGxheSA6IGpRdWVyeS5jc3MoIGVsZW1bIDAgXSwgXCJkaXNwbGF5XCIgKTtcclxuXHJcblx0Ly8gV2UgZG9uJ3QgaGF2ZSBhbnkgZGF0YSBzdG9yZWQgb24gdGhlIGVsZW1lbnQsXHJcblx0Ly8gc28gdXNlIFwiZGV0YWNoXCIgbWV0aG9kIGFzIGZhc3Qgd2F5IHRvIGdldCByaWQgb2YgdGhlIGVsZW1lbnRcclxuXHRlbGVtLmRldGFjaCgpO1xyXG5cclxuXHRyZXR1cm4gZGlzcGxheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyeSB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgZGlzcGxheSB2YWx1ZSBvZiBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkoIG5vZGVOYW1lICkge1xyXG5cdHZhciBkb2MgPSBkb2N1bWVudCxcclxuXHRcdGRpc3BsYXkgPSBlbGVtZGlzcGxheVsgbm9kZU5hbWUgXTtcclxuXHJcblx0aWYgKCAhZGlzcGxheSApIHtcclxuXHRcdGRpc3BsYXkgPSBhY3R1YWxEaXNwbGF5KCBub2RlTmFtZSwgZG9jICk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHNpbXBsZSB3YXkgZmFpbHMsIHJlYWQgZnJvbSBpbnNpZGUgYW4gaWZyYW1lXHJcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiIHx8ICFkaXNwbGF5ICkge1xyXG5cclxuXHRcdFx0Ly8gVXNlIHRoZSBhbHJlYWR5LWNyZWF0ZWQgaWZyYW1lIGlmIHBvc3NpYmxlXHJcblx0XHRcdGlmcmFtZSA9IChpZnJhbWUgfHwgalF1ZXJ5KCBcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIiApKS5hcHBlbmRUbyggZG9jLmRvY3VtZW50RWxlbWVudCApO1xyXG5cclxuXHRcdFx0Ly8gQWx3YXlzIHdyaXRlIGEgbmV3IEhUTUwgc2tlbGV0b24gc28gV2Via2l0IGFuZCBGaXJlZm94IGRvbid0IGNob2tlIG9uIHJldXNlXHJcblx0XHRcdGRvYyA9ICggaWZyYW1lWyAwIF0uY29udGVudFdpbmRvdyB8fCBpZnJhbWVbIDAgXS5jb250ZW50RG9jdW1lbnQgKS5kb2N1bWVudDtcclxuXHJcblx0XHRcdC8vIFN1cHBvcnQ6IElFXHJcblx0XHRcdGRvYy53cml0ZSgpO1xyXG5cdFx0XHRkb2MuY2xvc2UoKTtcclxuXHJcblx0XHRcdGRpc3BsYXkgPSBhY3R1YWxEaXNwbGF5KCBub2RlTmFtZSwgZG9jICk7XHJcblx0XHRcdGlmcmFtZS5kZXRhY2goKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTdG9yZSB0aGUgY29ycmVjdCBkZWZhdWx0IGRpc3BsYXlcclxuXHRcdGVsZW1kaXNwbGF5WyBub2RlTmFtZSBdID0gZGlzcGxheTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBkaXNwbGF5O1xyXG59XHJcblxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBzaHJpbmtXcmFwQmxvY2tzVmFsO1xyXG5cclxuXHRzdXBwb3J0LnNocmlua1dyYXBCbG9ja3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICggc2hyaW5rV3JhcEJsb2Nrc1ZhbCAhPSBudWxsICkge1xyXG5cdFx0XHRyZXR1cm4gc2hyaW5rV3JhcEJsb2Nrc1ZhbDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBXaWxsIGJlIGNoYW5nZWQgbGF0ZXIgaWYgbmVlZGVkLlxyXG5cdFx0c2hyaW5rV3JhcEJsb2Nrc1ZhbCA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIE1pbmlmaWVkOiB2YXIgYixjLGRcclxuXHRcdHZhciBkaXYsIGJvZHksIGNvbnRhaW5lcjtcclxuXHJcblx0XHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiYm9keVwiIClbIDAgXTtcclxuXHRcdGlmICggIWJvZHkgfHwgIWJvZHkuc3R5bGUgKSB7XHJcblx0XHRcdC8vIFRlc3QgZmlyZWQgdG9vIGVhcmx5IG9yIGluIGFuIHVuc3VwcG9ydGVkIGVudmlyb25tZW50LCBleGl0LlxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU2V0dXBcclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRcdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiO1xyXG5cdFx0Ym9keS5hcHBlbmRDaGlsZCggY29udGFpbmVyICkuYXBwZW5kQ2hpbGQoIGRpdiApO1xyXG5cclxuXHRcdC8vIFN1cHBvcnQ6IElFNlxyXG5cdFx0Ly8gQ2hlY2sgaWYgZWxlbWVudHMgd2l0aCBsYXlvdXQgc2hyaW5rLXdyYXAgdGhlaXIgY2hpbGRyZW5cclxuXHRcdGlmICggdHlwZW9mIGRpdi5zdHlsZS56b29tICE9PSBzdHJ1bmRlZmluZWQgKSB7XHJcblx0XHRcdC8vIFJlc2V0IENTUzogYm94LXNpemluZzsgZGlzcGxheTsgbWFyZ2luOyBib3JkZXJcclxuXHRcdFx0ZGl2LnN0eWxlLmNzc1RleHQgPVxyXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjksIEFuZHJvaWQgMi4zXHJcblx0XHRcdFx0Ly8gVmVuZG9yLXByZWZpeCBib3gtc2l6aW5nXHJcblx0XHRcdFx0XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O1wiICtcclxuXHRcdFx0XHRcImJveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtcIiArXHJcblx0XHRcdFx0XCJwYWRkaW5nOjFweDt3aWR0aDoxcHg7em9vbToxXCI7XHJcblx0XHRcdGRpdi5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICkuc3R5bGUud2lkdGggPSBcIjVweFwiO1xyXG5cdFx0XHRzaHJpbmtXcmFwQmxvY2tzVmFsID0gZGl2Lm9mZnNldFdpZHRoICE9PSAzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJvZHkucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xyXG5cclxuXHRcdHJldHVybiBzaHJpbmtXcmFwQmxvY2tzVmFsO1xyXG5cdH07XHJcblxyXG59KSgpO1xyXG52YXIgcm1hcmdpbiA9ICgvXm1hcmdpbi8pO1xyXG5cclxudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xyXG5cclxuXHJcblxyXG52YXIgZ2V0U3R5bGVzLCBjdXJDU1MsXHJcblx0cnBvc2l0aW9uID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xyXG5cclxuaWYgKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSApIHtcclxuXHRnZXRTdHlsZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdHJldHVybiBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSwgbnVsbCApO1xyXG5cdH07XHJcblxyXG5cdGN1ckNTUyA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcclxuXHRcdHZhciB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCByZXQsXHJcblx0XHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcclxuXHJcblx0XHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xyXG5cclxuXHRcdC8vIGdldFByb3BlcnR5VmFsdWUgaXMgb25seSBuZWVkZWQgZm9yIC5jc3MoJ2ZpbHRlcicpIGluIElFOSwgc2VlICMxMjUzN1xyXG5cdFx0cmV0ID0gY29tcHV0ZWQgPyBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCBuYW1lICkgfHwgY29tcHV0ZWRbIG5hbWUgXSA6IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAoIGNvbXB1dGVkICkge1xyXG5cclxuXHRcdFx0aWYgKCByZXQgPT09IFwiXCIgJiYgIWpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgKSB7XHJcblx0XHRcdFx0cmV0ID0galF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcclxuXHRcdFx0Ly8gQ2hyb21lIDwgMTcgYW5kIFNhZmFyaSA1LjAgdXNlcyBcImNvbXB1dGVkIHZhbHVlXCIgaW5zdGVhZCBvZiBcInVzZWQgdmFsdWVcIiBmb3IgbWFyZ2luLXJpZ2h0XHJcblx0XHRcdC8vIFNhZmFyaSA1LjEuNyAoYXQgbGVhc3QpIHJldHVybnMgcGVyY2VudGFnZSBmb3IgYSBsYXJnZXIgc2V0IG9mIHZhbHVlcywgYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVsc1xyXG5cdFx0XHQvLyB0aGlzIGlzIGFnYWluc3QgdGhlIENTU09NIGRyYWZ0IHNwZWM6IGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzc29tLyNyZXNvbHZlZC12YWx1ZXNcclxuXHRcdFx0aWYgKCBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcm1hcmdpbi50ZXN0KCBuYW1lICkgKSB7XHJcblxyXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcclxuXHRcdFx0XHR3aWR0aCA9IHN0eWxlLndpZHRoO1xyXG5cdFx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XHJcblx0XHRcdFx0bWF4V2lkdGggPSBzdHlsZS5tYXhXaWR0aDtcclxuXHJcblx0XHRcdFx0Ly8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxyXG5cdFx0XHRcdHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcclxuXHRcdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcclxuXHJcblx0XHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xyXG5cdFx0XHRcdHN0eWxlLndpZHRoID0gd2lkdGg7XHJcblx0XHRcdFx0c3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcclxuXHRcdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogSUVcclxuXHRcdC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXHJcblx0XHRyZXR1cm4gcmV0ID09PSB1bmRlZmluZWQgP1xyXG5cdFx0XHRyZXQgOlxyXG5cdFx0XHRyZXQgKyBcIlwiO1xyXG5cdH07XHJcbn0gZWxzZSBpZiAoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50U3R5bGUgKSB7XHJcblx0Z2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0XHRyZXR1cm4gZWxlbS5jdXJyZW50U3R5bGU7XHJcblx0fTtcclxuXHJcblx0Y3VyQ1NTID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGNvbXB1dGVkICkge1xyXG5cdFx0dmFyIGxlZnQsIHJzLCByc0xlZnQsIHJldCxcclxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xyXG5cclxuXHRcdGNvbXB1dGVkID0gY29tcHV0ZWQgfHwgZ2V0U3R5bGVzKCBlbGVtICk7XHJcblx0XHRyZXQgPSBjb21wdXRlZCA/IGNvbXB1dGVkWyBuYW1lIF0gOiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gQXZvaWQgc2V0dGluZyByZXQgdG8gZW1wdHkgc3RyaW5nIGhlcmVcclxuXHRcdC8vIHNvIHdlIGRvbid0IGRlZmF1bHQgdG8gYXV0b1xyXG5cdFx0aWYgKCByZXQgPT0gbnVsbCAmJiBzdHlsZSAmJiBzdHlsZVsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXQgPSBzdHlsZVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcclxuXHRcdC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcclxuXHJcblx0XHQvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcclxuXHRcdC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xyXG5cdFx0Ly8gYnV0IG5vdCBwb3NpdGlvbiBjc3MgYXR0cmlidXRlcywgYXMgdGhvc2UgYXJlIHByb3BvcnRpb25hbCB0byB0aGUgcGFyZW50IGVsZW1lbnQgaW5zdGVhZFxyXG5cdFx0Ly8gYW5kIHdlIGNhbid0IG1lYXN1cmUgdGhlIHBhcmVudCBpbnN0ZWFkIGJlY2F1c2UgaXQgbWlnaHQgdHJpZ2dlciBhIFwic3RhY2tpbmcgZG9sbHNcIiBwcm9ibGVtXHJcblx0XHRpZiAoIHJudW1ub25weC50ZXN0KCByZXQgKSAmJiAhcnBvc2l0aW9uLnRlc3QoIG5hbWUgKSApIHtcclxuXHJcblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcclxuXHRcdFx0bGVmdCA9IHN0eWxlLmxlZnQ7XHJcblx0XHRcdHJzID0gZWxlbS5ydW50aW1lU3R5bGU7XHJcblx0XHRcdHJzTGVmdCA9IHJzICYmIHJzLmxlZnQ7XHJcblxyXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XHJcblx0XHRcdGlmICggcnNMZWZ0ICkge1xyXG5cdFx0XHRcdHJzLmxlZnQgPSBlbGVtLmN1cnJlbnRTdHlsZS5sZWZ0O1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlLmxlZnQgPSBuYW1lID09PSBcImZvbnRTaXplXCIgPyBcIjFlbVwiIDogcmV0O1xyXG5cdFx0XHRyZXQgPSBzdHlsZS5waXhlbExlZnQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHQvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXHJcblx0XHRcdHN0eWxlLmxlZnQgPSBsZWZ0O1xyXG5cdFx0XHRpZiAoIHJzTGVmdCApIHtcclxuXHRcdFx0XHRycy5sZWZ0ID0gcnNMZWZ0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogSUVcclxuXHRcdC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXHJcblx0XHRyZXR1cm4gcmV0ID09PSB1bmRlZmluZWQgP1xyXG5cdFx0XHRyZXQgOlxyXG5cdFx0XHRyZXQgKyBcIlwiIHx8IFwiYXV0b1wiO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEdldEhvb2tJZiggY29uZGl0aW9uRm4sIGhvb2tGbiApIHtcclxuXHQvLyBEZWZpbmUgdGhlIGhvb2ssIHdlJ2xsIGNoZWNrIG9uIHRoZSBmaXJzdCBydW4gaWYgaXQncyByZWFsbHkgbmVlZGVkLlxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgY29uZGl0aW9uID0gY29uZGl0aW9uRm4oKTtcclxuXHJcblx0XHRcdGlmICggY29uZGl0aW9uID09IG51bGwgKSB7XHJcblx0XHRcdFx0Ly8gVGhlIHRlc3Qgd2FzIG5vdCByZWFkeSBhdCB0aGlzIHBvaW50OyBzY3JldyB0aGUgaG9vayB0aGlzIHRpbWVcclxuXHRcdFx0XHQvLyBidXQgY2hlY2sgYWdhaW4gd2hlbiBuZWVkZWQgbmV4dCB0aW1lLlxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBjb25kaXRpb24gKSB7XHJcblx0XHRcdFx0Ly8gSG9vayBub3QgbmVlZGVkIChvciBpdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgaXQgZHVlIHRvIG1pc3NpbmcgZGVwZW5kZW5jeSksXHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGl0LlxyXG5cdFx0XHRcdC8vIFNpbmNlIHRoZXJlIGFyZSBubyBvdGhlciBob29rcyBmb3IgbWFyZ2luUmlnaHQsIHJlbW92ZSB0aGUgd2hvbGUgb2JqZWN0LlxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmdldDtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEhvb2sgbmVlZGVkOyByZWRlZmluZSBpdCBzbyB0aGF0IHRoZSBzdXBwb3J0IHRlc3QgaXMgbm90IGV4ZWN1dGVkIGFnYWluLlxyXG5cclxuXHRcdFx0cmV0dXJuICh0aGlzLmdldCA9IGhvb2tGbikuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0Ly8gTWluaWZpZWQ6IHZhciBiLGMsZCxlLGYsZywgaCxpXHJcblx0dmFyIGRpdiwgc3R5bGUsIGEsIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLFxyXG5cdFx0cmVsaWFibGVIaWRkZW5PZmZzZXRzVmFsLCByZWxpYWJsZU1hcmdpblJpZ2h0VmFsO1xyXG5cclxuXHQvLyBTZXR1cFxyXG5cdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRkaXYuaW5uZXJIVE1MID0gXCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIjtcclxuXHRhID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImFcIiApWyAwIF07XHJcblx0c3R5bGUgPSBhICYmIGEuc3R5bGU7XHJcblxyXG5cdC8vIEZpbmlzaCBlYXJseSBpbiBsaW1pdGVkIChub24tYnJvd3NlcikgZW52aXJvbm1lbnRzXHJcblx0aWYgKCAhc3R5bGUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRzdHlsZS5jc3NUZXh0ID0gXCJmbG9hdDpsZWZ0O29wYWNpdHk6LjVcIjtcclxuXHJcblx0Ly8gU3VwcG9ydDogSUU8OVxyXG5cdC8vIE1ha2Ugc3VyZSB0aGF0IGVsZW1lbnQgb3BhY2l0eSBleGlzdHMgKGFzIG9wcG9zZWQgdG8gZmlsdGVyKVxyXG5cdHN1cHBvcnQub3BhY2l0eSA9IHN0eWxlLm9wYWNpdHkgPT09IFwiMC41XCI7XHJcblxyXG5cdC8vIFZlcmlmeSBzdHlsZSBmbG9hdCBleGlzdGVuY2VcclxuXHQvLyAoSUUgdXNlcyBzdHlsZUZsb2F0IGluc3RlYWQgb2YgY3NzRmxvYXQpXHJcblx0c3VwcG9ydC5jc3NGbG9hdCA9ICEhc3R5bGUuY3NzRmxvYXQ7XHJcblxyXG5cdGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcclxuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xyXG5cdHN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlID0gZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID09PSBcImNvbnRlbnQtYm94XCI7XHJcblxyXG5cdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjksIEFuZHJvaWQgMi4zXHJcblx0Ly8gVmVuZG9yLXByZWZpeCBib3gtc2l6aW5nXHJcblx0c3VwcG9ydC5ib3hTaXppbmcgPSBzdHlsZS5ib3hTaXppbmcgPT09IFwiXCIgfHwgc3R5bGUuTW96Qm94U2l6aW5nID09PSBcIlwiIHx8XHJcblx0XHRzdHlsZS5XZWJraXRCb3hTaXppbmcgPT09IFwiXCI7XHJcblxyXG5cdGpRdWVyeS5leHRlbmQoc3VwcG9ydCwge1xyXG5cdFx0cmVsaWFibGVIaWRkZW5PZmZzZXRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCByZWxpYWJsZUhpZGRlbk9mZnNldHNWYWwgPT0gbnVsbCApIHtcclxuXHRcdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZWxpYWJsZUhpZGRlbk9mZnNldHNWYWw7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCBib3hTaXppbmdSZWxpYWJsZVZhbCA9PSBudWxsICkge1xyXG5cdFx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCBwaXhlbFBvc2l0aW9uVmFsID09IG51bGwgKSB7XHJcblx0XHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGl4ZWxQb3NpdGlvblZhbDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCAyLjNcclxuXHRcdHJlbGlhYmxlTWFyZ2luUmlnaHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIHJlbGlhYmxlTWFyZ2luUmlnaHRWYWwgPT0gbnVsbCApIHtcclxuXHRcdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZWxpYWJsZU1hcmdpblJpZ2h0VmFsO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcclxuXHRcdC8vIE1pbmlmaWVkOiB2YXIgYixjLGQsalxyXG5cdFx0dmFyIGRpdiwgYm9keSwgY29udGFpbmVyLCBjb250ZW50cztcclxuXHJcblx0XHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiYm9keVwiIClbIDAgXTtcclxuXHRcdGlmICggIWJvZHkgfHwgIWJvZHkuc3R5bGUgKSB7XHJcblx0XHRcdC8vIFRlc3QgZmlyZWQgdG9vIGVhcmx5IG9yIGluIGFuIHVuc3VwcG9ydGVkIGVudmlyb25tZW50LCBleGl0LlxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU2V0dXBcclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRcdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiO1xyXG5cdFx0Ym9keS5hcHBlbmRDaGlsZCggY29udGFpbmVyICkuYXBwZW5kQ2hpbGQoIGRpdiApO1xyXG5cclxuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cclxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveDwyOSwgQW5kcm9pZCAyLjNcclxuXHRcdFx0Ly8gVmVuZG9yLXByZWZpeCBib3gtc2l6aW5nXHJcblx0XHRcdFwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XCIgK1xyXG5cdFx0XHRcImJveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MSU7dG9wOjElO1wiICtcclxuXHRcdFx0XCJib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjRweDtwb3NpdGlvbjphYnNvbHV0ZVwiO1xyXG5cclxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcclxuXHRcdC8vIEFzc3VtZSByZWFzb25hYmxlIHZhbHVlcyBpbiB0aGUgYWJzZW5jZSBvZiBnZXRDb21wdXRlZFN0eWxlXHJcblx0XHRwaXhlbFBvc2l0aW9uVmFsID0gYm94U2l6aW5nUmVsaWFibGVWYWwgPSBmYWxzZTtcclxuXHRcdHJlbGlhYmxlTWFyZ2luUmlnaHRWYWwgPSB0cnVlO1xyXG5cclxuXHRcdC8vIENoZWNrIGZvciBnZXRDb21wdXRlZFN0eWxlIHNvIHRoYXQgdGhpcyBjb2RlIGlzIG5vdCBydW4gaW4gSUU8OS5cclxuXHRcdGlmICggd2luZG93LmdldENvbXB1dGVkU3R5bGUgKSB7XHJcblx0XHRcdHBpeGVsUG9zaXRpb25WYWwgPSAoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkaXYsIG51bGwgKSB8fCB7fSApLnRvcCAhPT0gXCIxJVwiO1xyXG5cdFx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9XHJcblx0XHRcdFx0KCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZGl2LCBudWxsICkgfHwgeyB3aWR0aDogXCI0cHhcIiB9ICkud2lkdGggPT09IFwiNHB4XCI7XHJcblxyXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xyXG5cdFx0XHQvLyBEaXYgd2l0aCBleHBsaWNpdCB3aWR0aCBhbmQgbm8gbWFyZ2luLXJpZ2h0IGluY29ycmVjdGx5XHJcblx0XHRcdC8vIGdldHMgY29tcHV0ZWQgbWFyZ2luLXJpZ2h0IGJhc2VkIG9uIHdpZHRoIG9mIGNvbnRhaW5lciAoIzMzMzMpXHJcblx0XHRcdC8vIFdlYktpdCBCdWcgMTMzNDMgLSBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgd3JvbmcgdmFsdWUgZm9yIG1hcmdpbi1yaWdodFxyXG5cdFx0XHRjb250ZW50cyA9IGRpdi5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICk7XHJcblxyXG5cdFx0XHQvLyBSZXNldCBDU1M6IGJveC1zaXppbmc7IGRpc3BsYXk7IG1hcmdpbjsgYm9yZGVyOyBwYWRkaW5nXHJcblx0XHRcdGNvbnRlbnRzLnN0eWxlLmNzc1RleHQgPSBkaXYuc3R5bGUuY3NzVGV4dCA9XHJcblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveDwyOSwgQW5kcm9pZCAyLjNcclxuXHRcdFx0XHQvLyBWZW5kb3ItcHJlZml4IGJveC1zaXppbmdcclxuXHRcdFx0XHRcIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7XCIgK1xyXG5cdFx0XHRcdFwiYm94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiO1xyXG5cdFx0XHRjb250ZW50cy5zdHlsZS5tYXJnaW5SaWdodCA9IGNvbnRlbnRzLnN0eWxlLndpZHRoID0gXCIwXCI7XHJcblx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IFwiMXB4XCI7XHJcblxyXG5cdFx0XHRyZWxpYWJsZU1hcmdpblJpZ2h0VmFsID1cclxuXHRcdFx0XHQhcGFyc2VGbG9hdCggKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggY29udGVudHMsIG51bGwgKSB8fCB7fSApLm1hcmdpblJpZ2h0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3VwcG9ydDogSUU4XHJcblx0XHQvLyBDaGVjayBpZiB0YWJsZSBjZWxscyBzdGlsbCBoYXZlIG9mZnNldFdpZHRoL0hlaWdodCB3aGVuIHRoZXkgYXJlIHNldFxyXG5cdFx0Ly8gdG8gZGlzcGxheTpub25lIGFuZCB0aGVyZSBhcmUgc3RpbGwgb3RoZXIgdmlzaWJsZSB0YWJsZSBjZWxscyBpbiBhXHJcblx0XHQvLyB0YWJsZSByb3c7IGlmIHNvLCBvZmZzZXRXaWR0aC9IZWlnaHQgYXJlIG5vdCByZWxpYWJsZSBmb3IgdXNlIHdoZW5cclxuXHRcdC8vIGRldGVybWluaW5nIGlmIGFuIGVsZW1lbnQgaGFzIGJlZW4gaGlkZGVuIGRpcmVjdGx5IHVzaW5nXHJcblx0XHQvLyBkaXNwbGF5Om5vbmUgKGl0IGlzIHN0aWxsIHNhZmUgdG8gdXNlIG9mZnNldHMgaWYgYSBwYXJlbnQgZWxlbWVudCBpc1xyXG5cdFx0Ly8gaGlkZGVuOyBkb24gc2FmZXR5IGdvZ2dsZXMgYW5kIHNlZSBidWcgIzQ1MTIgZm9yIG1vcmUgaW5mb3JtYXRpb24pLlxyXG5cdFx0ZGl2LmlubmVySFRNTCA9IFwiPHRhYmxlPjx0cj48dGQ+PC90ZD48dGQ+dDwvdGQ+PC90cj48L3RhYmxlPlwiO1xyXG5cdFx0Y29udGVudHMgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwidGRcIiApO1xyXG5cdFx0Y29udGVudHNbIDAgXS5zdHlsZS5jc3NUZXh0ID0gXCJtYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjA7ZGlzcGxheTpub25lXCI7XHJcblx0XHRyZWxpYWJsZUhpZGRlbk9mZnNldHNWYWwgPSBjb250ZW50c1sgMCBdLm9mZnNldEhlaWdodCA9PT0gMDtcclxuXHRcdGlmICggcmVsaWFibGVIaWRkZW5PZmZzZXRzVmFsICkge1xyXG5cdFx0XHRjb250ZW50c1sgMCBdLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG5cdFx0XHRjb250ZW50c1sgMSBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0cmVsaWFibGVIaWRkZW5PZmZzZXRzVmFsID0gY29udGVudHNbIDAgXS5vZmZzZXRIZWlnaHQgPT09IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ym9keS5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XHJcblx0fVxyXG5cclxufSkoKTtcclxuXHJcblxyXG4vLyBBIG1ldGhvZCBmb3IgcXVpY2tseSBzd2FwcGluZyBpbi9vdXQgQ1NTIHByb3BlcnRpZXMgdG8gZ2V0IGNvcnJlY3QgY2FsY3VsYXRpb25zLlxyXG5qUXVlcnkuc3dhcCA9IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBjYWxsYmFjaywgYXJncyApIHtcclxuXHR2YXIgcmV0LCBuYW1lLFxyXG5cdFx0b2xkID0ge307XHJcblxyXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xyXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcclxuXHRcdG9sZFsgbmFtZSBdID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xyXG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xyXG5cdH1cclxuXHJcblx0cmV0ID0gY2FsbGJhY2suYXBwbHkoIGVsZW0sIGFyZ3MgfHwgW10gKTtcclxuXHJcblx0Ly8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXHJcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xyXG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmV0O1xyXG59O1xyXG5cclxuXHJcbnZhclxyXG5cdFx0cmFscGhhID0gL2FscGhhXFwoW14pXSpcXCkvaSxcclxuXHRyb3BhY2l0eSA9IC9vcGFjaXR5XFxzKj1cXHMqKFteKV0qKS8sXHJcblxyXG5cdC8vIHN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGUgZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXHJcblx0Ly8gc2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XHJcblx0cmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxyXG5cdHJudW1zcGxpdCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoLiopJFwiLCBcImlcIiApLFxyXG5cdHJyZWxOdW0gPSBuZXcgUmVnRXhwKCBcIl4oWystXSk9KFwiICsgcG51bSArIFwiKVwiLCBcImlcIiApLFxyXG5cclxuXHRjc3NTaG93ID0geyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfSxcclxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XHJcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIjBcIixcclxuXHRcdGZvbnRXZWlnaHQ6IFwiNDAwXCJcclxuXHR9LFxyXG5cclxuXHRjc3NQcmVmaXhlcyA9IFsgXCJXZWJraXRcIiwgXCJPXCIsIFwiTW96XCIsIFwibXNcIiBdO1xyXG5cclxuXHJcbi8vIHJldHVybiBhIGNzcyBwcm9wZXJ0eSBtYXBwZWQgdG8gYSBwb3RlbnRpYWxseSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcclxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIHN0eWxlLCBuYW1lICkge1xyXG5cclxuXHQvLyBzaG9ydGN1dCBmb3IgbmFtZXMgdGhhdCBhcmUgbm90IHZlbmRvciBwcmVmaXhlZFxyXG5cdGlmICggbmFtZSBpbiBzdHlsZSApIHtcclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gY2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xyXG5cdHZhciBjYXBOYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksXHJcblx0XHRvcmlnTmFtZSA9IG5hbWUsXHJcblx0XHRpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xyXG5cclxuXHR3aGlsZSAoIGktLSApIHtcclxuXHRcdG5hbWUgPSBjc3NQcmVmaXhlc1sgaSBdICsgY2FwTmFtZTtcclxuXHRcdGlmICggbmFtZSBpbiBzdHlsZSApIHtcclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb3JpZ05hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcclxuXHR2YXIgZGlzcGxheSwgZWxlbSwgaGlkZGVuLFxyXG5cdFx0dmFsdWVzID0gW10sXHJcblx0XHRpbmRleCA9IDAsXHJcblx0XHRsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XHJcblxyXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XHJcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XHJcblx0XHRpZiAoICFlbGVtLnN0eWxlICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHR2YWx1ZXNbIGluZGV4IF0gPSBqUXVlcnkuX2RhdGEoIGVsZW0sIFwib2xkZGlzcGxheVwiICk7XHJcblx0XHRkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xyXG5cdFx0aWYgKCBzaG93ICkge1xyXG5cdFx0XHQvLyBSZXNldCB0aGUgaW5saW5lIGRpc3BsYXkgb2YgdGhpcyBlbGVtZW50IHRvIGxlYXJuIGlmIGl0IGlzXHJcblx0XHRcdC8vIGJlaW5nIGhpZGRlbiBieSBjYXNjYWRlZCBydWxlcyBvciBub3RcclxuXHRcdFx0aWYgKCAhdmFsdWVzWyBpbmRleCBdICYmIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xyXG5cdFx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFNldCBlbGVtZW50cyB3aGljaCBoYXZlIGJlZW4gb3ZlcnJpZGRlbiB3aXRoIGRpc3BsYXk6IG5vbmVcclxuXHRcdFx0Ly8gaW4gYSBzdHlsZXNoZWV0IHRvIHdoYXRldmVyIHRoZSBkZWZhdWx0IGJyb3dzZXIgc3R5bGUgaXNcclxuXHRcdFx0Ly8gZm9yIHN1Y2ggYW4gZWxlbWVudFxyXG5cdFx0XHRpZiAoIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbiggZWxlbSApICkge1xyXG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGpRdWVyeS5fZGF0YSggZWxlbSwgXCJvbGRkaXNwbGF5XCIsIGRlZmF1bHREaXNwbGF5KGVsZW0ubm9kZU5hbWUpICk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhpZGRlbiA9IGlzSGlkZGVuKCBlbGVtICk7XHJcblxyXG5cdFx0XHRpZiAoIGRpc3BsYXkgJiYgZGlzcGxheSAhPT0gXCJub25lXCIgfHwgIWhpZGRlbiApIHtcclxuXHRcdFx0XHRqUXVlcnkuX2RhdGEoIGVsZW0sIFwib2xkZGlzcGxheVwiLCBoaWRkZW4gPyBkaXNwbGF5IDogalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgbW9zdCBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcFxyXG5cdC8vIHRvIGF2b2lkIHRoZSBjb25zdGFudCByZWZsb3dcclxuXHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xyXG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xyXG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRpZiAoICFzaG93IHx8IGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHwgZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICkge1xyXG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gdmFsdWVzWyBpbmRleCBdIHx8IFwiXCIgOiBcIm5vbmVcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBlbGVtZW50cztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcclxuXHR2YXIgbWF0Y2hlcyA9IHJudW1zcGxpdC5leGVjKCB2YWx1ZSApO1xyXG5cdHJldHVybiBtYXRjaGVzID9cclxuXHRcdC8vIEd1YXJkIGFnYWluc3QgdW5kZWZpbmVkIFwic3VidHJhY3RcIiwgZS5nLiwgd2hlbiB1c2VkIGFzIGluIGNzc0hvb2tzXHJcblx0XHRNYXRoLm1heCggMCwgbWF0Y2hlc1sgMSBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMiBdIHx8IFwicHhcIiApIDpcclxuXHRcdHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdWdtZW50V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEsIGlzQm9yZGVyQm94LCBzdHlsZXMgKSB7XHJcblx0dmFyIGkgPSBleHRyYSA9PT0gKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApID9cclxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgcmlnaHQgbWVhc3VyZW1lbnQsIGF2b2lkIGF1Z21lbnRhdGlvblxyXG5cdFx0NCA6XHJcblx0XHQvLyBPdGhlcndpc2UgaW5pdGlhbGl6ZSBmb3IgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBwcm9wZXJ0aWVzXHJcblx0XHRuYW1lID09PSBcIndpZHRoXCIgPyAxIDogMCxcclxuXHJcblx0XHR2YWwgPSAwO1xyXG5cclxuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgKSB7XHJcblx0XHQvLyBib3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW4sIHNvIGFkZCBpdCBpZiB3ZSB3YW50IGl0XHJcblx0XHRpZiAoIGV4dHJhID09PSBcIm1hcmdpblwiICkge1xyXG5cdFx0XHR2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgZXh0cmEgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBpc0JvcmRlckJveCApIHtcclxuXHRcdFx0Ly8gYm9yZGVyLWJveCBpbmNsdWRlcyBwYWRkaW5nLCBzbyByZW1vdmUgaXQgaWYgd2Ugd2FudCBjb250ZW50XHJcblx0XHRcdGlmICggZXh0cmEgPT09IFwiY29udGVudFwiICkge1xyXG5cdFx0XHRcdHZhbCAtPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgYm9yZGVyIG5vciBtYXJnaW4sIHNvIHJlbW92ZSBib3JkZXJcclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJtYXJnaW5cIiApIHtcclxuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gYXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCwgc28gYWRkIHBhZGRpbmdcclxuXHRcdFx0dmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xyXG5cclxuXHRcdFx0Ly8gYXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCBub3IgcGFkZGluZywgc28gYWRkIGJvcmRlclxyXG5cdFx0XHRpZiAoIGV4dHJhICE9PSBcInBhZGRpbmdcIiApIHtcclxuXHRcdFx0XHR2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKSB7XHJcblxyXG5cdC8vIFN0YXJ0IHdpdGggb2Zmc2V0IHByb3BlcnR5LCB3aGljaCBpcyBlcXVpdmFsZW50IHRvIHRoZSBib3JkZXItYm94IHZhbHVlXHJcblx0dmFyIHZhbHVlSXNCb3JkZXJCb3ggPSB0cnVlLFxyXG5cdFx0dmFsID0gbmFtZSA9PT0gXCJ3aWR0aFwiID8gZWxlbS5vZmZzZXRXaWR0aCA6IGVsZW0ub2Zmc2V0SGVpZ2h0LFxyXG5cdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXHJcblx0XHRpc0JvcmRlckJveCA9IHN1cHBvcnQuYm94U2l6aW5nICYmIGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCI7XHJcblxyXG5cdC8vIHNvbWUgbm9uLWh0bWwgZWxlbWVudHMgcmV0dXJuIHVuZGVmaW5lZCBmb3Igb2Zmc2V0V2lkdGgsIHNvIGNoZWNrIGZvciBudWxsL3VuZGVmaW5lZFxyXG5cdC8vIHN2ZyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY0OTI4NVxyXG5cdC8vIE1hdGhNTCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ5MTY2OFxyXG5cdGlmICggdmFsIDw9IDAgfHwgdmFsID09IG51bGwgKSB7XHJcblx0XHQvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1bmNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcclxuXHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XHJcblx0XHRpZiAoIHZhbCA8IDAgfHwgdmFsID09IG51bGwgKSB7XHJcblx0XHRcdHZhbCA9IGVsZW0uc3R5bGVbIG5hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDb21wdXRlZCB1bml0IGlzIG5vdCBwaXhlbHMuIFN0b3AgaGVyZSBhbmQgcmV0dXJuLlxyXG5cdFx0aWYgKCBybnVtbm9ucHgudGVzdCh2YWwpICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHdlIG5lZWQgdGhlIGNoZWNrIGZvciBzdHlsZSBpbiBjYXNlIGEgYnJvd3NlciB3aGljaCByZXR1cm5zIHVucmVsaWFibGUgdmFsdWVzXHJcblx0XHQvLyBmb3IgZ2V0Q29tcHV0ZWRTdHlsZSBzaWxlbnRseSBmYWxscyBiYWNrIHRvIHRoZSByZWxpYWJsZSBlbGVtLnN0eWxlXHJcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3ggJiYgKCBzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgfHwgdmFsID09PSBlbGVtLnN0eWxlWyBuYW1lIF0gKTtcclxuXHJcblx0XHQvLyBOb3JtYWxpemUgXCJcIiwgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXHJcblx0XHR2YWwgPSBwYXJzZUZsb2F0KCB2YWwgKSB8fCAwO1xyXG5cdH1cclxuXHJcblx0Ly8gdXNlIHRoZSBhY3RpdmUgYm94LXNpemluZyBtb2RlbCB0byBhZGQvc3VidHJhY3QgaXJyZWxldmFudCBzdHlsZXNcclxuXHRyZXR1cm4gKCB2YWwgK1xyXG5cdFx0YXVnbWVudFdpZHRoT3JIZWlnaHQoXHJcblx0XHRcdGVsZW0sXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcclxuXHRcdFx0dmFsdWVJc0JvcmRlckJveCxcclxuXHRcdFx0c3R5bGVzXHJcblx0XHQpXHJcblx0KSArIFwicHhcIjtcclxufVxyXG5cclxualF1ZXJ5LmV4dGVuZCh7XHJcblx0Ly8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XHJcblx0Ly8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XHJcblx0Y3NzSG9va3M6IHtcclxuXHRcdG9wYWNpdHk6IHtcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XHJcblx0XHRcdFx0aWYgKCBjb21wdXRlZCApIHtcclxuXHRcdFx0XHRcdC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XHJcblx0XHRcdFx0XHR2YXIgcmV0ID0gY3VyQ1NTKCBlbGVtLCBcIm9wYWNpdHlcIiApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXHJcblx0Y3NzTnVtYmVyOiB7XHJcblx0XHRcImNvbHVtbkNvdW50XCI6IHRydWUsXHJcblx0XHRcImZpbGxPcGFjaXR5XCI6IHRydWUsXHJcblx0XHRcImZsZXhHcm93XCI6IHRydWUsXHJcblx0XHRcImZsZXhTaHJpbmtcIjogdHJ1ZSxcclxuXHRcdFwiZm9udFdlaWdodFwiOiB0cnVlLFxyXG5cdFx0XCJsaW5lSGVpZ2h0XCI6IHRydWUsXHJcblx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcclxuXHRcdFwib3JkZXJcIjogdHJ1ZSxcclxuXHRcdFwib3JwaGFuc1wiOiB0cnVlLFxyXG5cdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcclxuXHRcdFwiekluZGV4XCI6IHRydWUsXHJcblx0XHRcInpvb21cIjogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcclxuXHQvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXHJcblx0Y3NzUHJvcHM6IHtcclxuXHRcdC8vIG5vcm1hbGl6ZSBmbG9hdCBjc3MgcHJvcGVydHlcclxuXHRcdFwiZmxvYXRcIjogc3VwcG9ydC5jc3NGbG9hdCA/IFwiY3NzRmxvYXRcIiA6IFwic3R5bGVGbG9hdFwiXHJcblx0fSxcclxuXHJcblx0Ly8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcclxuXHRzdHlsZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSApIHtcclxuXHRcdC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xyXG5cdFx0aWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcclxuXHRcdHZhciByZXQsIHR5cGUsIGhvb2tzLFxyXG5cdFx0XHRvcmlnTmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKSxcclxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xyXG5cclxuXHRcdG5hbWUgPSBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gfHwgKCBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggc3R5bGUsIG9yaWdOYW1lICkgKTtcclxuXHJcblx0XHQvLyBnZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uXHJcblx0XHQvLyBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCB2ZXJzaW9uXHJcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcclxuXHJcblx0XHQvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcclxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuXHJcblx0XHRcdC8vIGNvbnZlcnQgcmVsYXRpdmUgbnVtYmVyIHN0cmluZ3MgKCs9IG9yIC09KSB0byByZWxhdGl2ZSBudW1iZXJzLiAjNzM0NVxyXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgJiYgKHJldCA9IHJyZWxOdW0uZXhlYyggdmFsdWUgKSkgKSB7XHJcblx0XHRcdFx0dmFsdWUgPSAoIHJldFsxXSArIDEgKSAqIHJldFsyXSArIHBhcnNlRmxvYXQoIGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKSApO1xyXG5cdFx0XHRcdC8vIEZpeGVzIGJ1ZyAjOTIzN1xyXG5cdFx0XHRcdHR5cGUgPSBcIm51bWJlclwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQuIFNlZTogIzcxMTZcclxuXHRcdFx0aWYgKCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlICE9PSB2YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCAncHgnIHRvIHRoZSAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxyXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwibnVtYmVyXCIgJiYgIWpRdWVyeS5jc3NOdW1iZXJbIG9yaWdOYW1lIF0gKSB7XHJcblx0XHRcdFx0dmFsdWUgKz0gXCJweFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBGaXhlcyAjODkwOCwgaXQgY2FuIGJlIGRvbmUgbW9yZSBjb3JyZWN0bHkgYnkgc3BlY2lmaW5nIHNldHRlcnMgaW4gY3NzSG9va3MsXHJcblx0XHRcdC8vIGJ1dCBpdCB3b3VsZCBtZWFuIHRvIGRlZmluZSBlaWdodCAoZm9yIGV2ZXJ5IHByb2JsZW1hdGljIHByb3BlcnR5KSBpZGVudGljYWwgZnVuY3Rpb25zXHJcblx0XHRcdGlmICggIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZihcImJhY2tncm91bmRcIikgPT09IDAgKSB7XHJcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcclxuXHRcdFx0aWYgKCAhaG9va3MgfHwgIShcInNldFwiIGluIGhvb2tzKSB8fCAodmFsdWUgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBleHRyYSApKSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRVxyXG5cdFx0XHRcdC8vIFN3YWxsb3cgZXJyb3JzIGZyb20gJ2ludmFsaWQnIENTUyB2YWx1ZXMgKCM1NTA5KVxyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gdmFsdWU7XHJcblx0XHRcdFx0fSBjYXRjaChlKSB7fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXHJcblx0XHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSkgIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxyXG5cdFx0XHRyZXR1cm4gc3R5bGVbIG5hbWUgXTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xyXG5cdFx0dmFyIG51bSwgdmFsLCBob29rcyxcclxuXHRcdFx0b3JpZ05hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lICk7XHJcblxyXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXHJcblx0XHRuYW1lID0galF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdIHx8ICggalF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIGVsZW0uc3R5bGUsIG9yaWdOYW1lICkgKTtcclxuXHJcblx0XHQvLyBnZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uXHJcblx0XHQvLyBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCB2ZXJzaW9uXHJcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcclxuXHJcblx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxyXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICkge1xyXG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcclxuXHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9jb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcclxuXHRcdGlmICggdmFsID09PSBcIm5vcm1hbFwiICYmIG5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtICkge1xyXG5cdFx0XHR2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bIG5hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBSZXR1cm4sIGNvbnZlcnRpbmcgdG8gbnVtYmVyIGlmIGZvcmNlZCBvciBhIHF1YWxpZmllciB3YXMgcHJvdmlkZWQgYW5kIHZhbCBsb29rcyBudW1lcmljXHJcblx0XHRpZiAoIGV4dHJhID09PSBcIlwiIHx8IGV4dHJhICkge1xyXG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcclxuXHRcdFx0cmV0dXJuIGV4dHJhID09PSB0cnVlIHx8IGpRdWVyeS5pc051bWVyaWMoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdH1cclxufSk7XHJcblxyXG5qUXVlcnkuZWFjaChbIFwiaGVpZ2h0XCIsIFwid2lkdGhcIiBdLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcclxuXHRqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSA9IHtcclxuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcclxuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcclxuXHRcdFx0XHQvLyBjZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cclxuXHRcdFx0XHQvLyBob3dldmVyLCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0IGZyb20gdGhpc1xyXG5cdFx0XHRcdHJldHVybiByZGlzcGxheXN3YXAudGVzdCggalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApICYmIGVsZW0ub2Zmc2V0V2lkdGggPT09IDAgP1xyXG5cdFx0XHRcdFx0alF1ZXJ5LnN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKTtcclxuXHRcdFx0XHRcdH0pIDpcclxuXHRcdFx0XHRcdGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIGV4dHJhICkge1xyXG5cdFx0XHR2YXIgc3R5bGVzID0gZXh0cmEgJiYgZ2V0U3R5bGVzKCBlbGVtICk7XHJcblx0XHRcdHJldHVybiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIGV4dHJhID9cclxuXHRcdFx0XHRhdWdtZW50V2lkdGhPckhlaWdodChcclxuXHRcdFx0XHRcdGVsZW0sXHJcblx0XHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdFx0ZXh0cmEsXHJcblx0XHRcdFx0XHRzdXBwb3J0LmJveFNpemluZyAmJiBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdFx0c3R5bGVzXHJcblx0XHRcdFx0KSA6IDBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG59KTtcclxuXHJcbmlmICggIXN1cHBvcnQub3BhY2l0eSApIHtcclxuXHRqUXVlcnkuY3NzSG9va3Mub3BhY2l0eSA9IHtcclxuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xyXG5cdFx0XHQvLyBJRSB1c2VzIGZpbHRlcnMgZm9yIG9wYWNpdHlcclxuXHRcdFx0cmV0dXJuIHJvcGFjaXR5LnRlc3QoIChjb21wdXRlZCAmJiBlbGVtLmN1cnJlbnRTdHlsZSA/IGVsZW0uY3VycmVudFN0eWxlLmZpbHRlciA6IGVsZW0uc3R5bGUuZmlsdGVyKSB8fCBcIlwiICkgP1xyXG5cdFx0XHRcdCggMC4wMSAqIHBhcnNlRmxvYXQoIFJlZ0V4cC4kMSApICkgKyBcIlwiIDpcclxuXHRcdFx0XHRjb21wdXRlZCA/IFwiMVwiIDogXCJcIjtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XHJcblx0XHRcdHZhciBzdHlsZSA9IGVsZW0uc3R5bGUsXHJcblx0XHRcdFx0Y3VycmVudFN0eWxlID0gZWxlbS5jdXJyZW50U3R5bGUsXHJcblx0XHRcdFx0b3BhY2l0eSA9IGpRdWVyeS5pc051bWVyaWMoIHZhbHVlICkgPyBcImFscGhhKG9wYWNpdHk9XCIgKyB2YWx1ZSAqIDEwMCArIFwiKVwiIDogXCJcIixcclxuXHRcdFx0XHRmaWx0ZXIgPSBjdXJyZW50U3R5bGUgJiYgY3VycmVudFN0eWxlLmZpbHRlciB8fCBzdHlsZS5maWx0ZXIgfHwgXCJcIjtcclxuXHJcblx0XHRcdC8vIElFIGhhcyB0cm91YmxlIHdpdGggb3BhY2l0eSBpZiBpdCBkb2VzIG5vdCBoYXZlIGxheW91dFxyXG5cdFx0XHQvLyBGb3JjZSBpdCBieSBzZXR0aW5nIHRoZSB6b29tIGxldmVsXHJcblx0XHRcdHN0eWxlLnpvb20gPSAxO1xyXG5cclxuXHRcdFx0Ly8gaWYgc2V0dGluZyBvcGFjaXR5IHRvIDEsIGFuZCBubyBvdGhlciBmaWx0ZXJzIGV4aXN0IC0gYXR0ZW1wdCB0byByZW1vdmUgZmlsdGVyIGF0dHJpYnV0ZSAjNjY1MlxyXG5cdFx0XHQvLyBpZiB2YWx1ZSA9PT0gXCJcIiwgdGhlbiByZW1vdmUgaW5saW5lIG9wYWNpdHkgIzEyNjg1XHJcblx0XHRcdGlmICggKCB2YWx1ZSA+PSAxIHx8IHZhbHVlID09PSBcIlwiICkgJiZcclxuXHRcdFx0XHRcdGpRdWVyeS50cmltKCBmaWx0ZXIucmVwbGFjZSggcmFscGhhLCBcIlwiICkgKSA9PT0gXCJcIiAmJlxyXG5cdFx0XHRcdFx0c3R5bGUucmVtb3ZlQXR0cmlidXRlICkge1xyXG5cclxuXHRcdFx0XHQvLyBTZXR0aW5nIHN0eWxlLmZpbHRlciB0byBudWxsLCBcIlwiICYgXCIgXCIgc3RpbGwgbGVhdmUgXCJmaWx0ZXI6XCIgaW4gdGhlIGNzc1RleHRcclxuXHRcdFx0XHQvLyBpZiBcImZpbHRlcjpcIiBpcyBwcmVzZW50IGF0IGFsbCwgY2xlYXJUeXBlIGlzIGRpc2FibGVkLCB3ZSB3YW50IHRvIGF2b2lkIHRoaXNcclxuXHRcdFx0XHQvLyBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUgaXMgSUUgT25seSwgYnV0IHNvIGFwcGFyZW50bHkgaXMgdGhpcyBjb2RlIHBhdGguLi5cclxuXHRcdFx0XHRzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoIFwiZmlsdGVyXCIgKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gZmlsdGVyIHN0eWxlIGFwcGxpZWQgaW4gYSBjc3MgcnVsZSBvciB1bnNldCBpbmxpbmUgb3BhY2l0eSwgd2UgYXJlIGRvbmVcclxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcIlwiIHx8IGN1cnJlbnRTdHlsZSAmJiAhY3VycmVudFN0eWxlLmZpbHRlciApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG90aGVyd2lzZSwgc2V0IG5ldyBmaWx0ZXIgdmFsdWVzXHJcblx0XHRcdHN0eWxlLmZpbHRlciA9IHJhbHBoYS50ZXN0KCBmaWx0ZXIgKSA/XHJcblx0XHRcdFx0ZmlsdGVyLnJlcGxhY2UoIHJhbHBoYSwgb3BhY2l0eSApIDpcclxuXHRcdFx0XHRmaWx0ZXIgKyBcIiBcIiArIG9wYWNpdHk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxualF1ZXJ5LmNzc0hvb2tzLm1hcmdpblJpZ2h0ID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnJlbGlhYmxlTWFyZ2luUmlnaHQsXHJcblx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xyXG5cdFx0aWYgKCBjb21wdXRlZCApIHtcclxuXHRcdFx0Ly8gV2ViS2l0IEJ1ZyAxMzM0MyAtIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyB3cm9uZyB2YWx1ZSBmb3IgbWFyZ2luLXJpZ2h0XHJcblx0XHRcdC8vIFdvcmsgYXJvdW5kIGJ5IHRlbXBvcmFyaWx5IHNldHRpbmcgZWxlbWVudCBkaXNwbGF5IHRvIGlubGluZS1ibG9ja1xyXG5cdFx0XHRyZXR1cm4galF1ZXJ5LnN3YXAoIGVsZW0sIHsgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIgfSxcclxuXHRcdFx0XHRjdXJDU1MsIFsgZWxlbSwgXCJtYXJnaW5SaWdodFwiIF0gKTtcclxuXHRcdH1cclxuXHR9XHJcbik7XHJcblxyXG4vLyBUaGVzZSBob29rcyBhcmUgdXNlZCBieSBhbmltYXRlIHRvIGV4cGFuZCBwcm9wZXJ0aWVzXHJcbmpRdWVyeS5lYWNoKHtcclxuXHRtYXJnaW46IFwiXCIsXHJcblx0cGFkZGluZzogXCJcIixcclxuXHRib3JkZXI6IFwiV2lkdGhcIlxyXG59LCBmdW5jdGlvbiggcHJlZml4LCBzdWZmaXggKSB7XHJcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXSA9IHtcclxuXHRcdGV4cGFuZDogZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHR2YXIgaSA9IDAsXHJcblx0XHRcdFx0ZXhwYW5kZWQgPSB7fSxcclxuXHJcblx0XHRcdFx0Ly8gYXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXHJcblx0XHRcdFx0cGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdChcIiBcIikgOiBbIHZhbHVlIF07XHJcblxyXG5cdFx0XHRmb3IgKCA7IGkgPCA0OyBpKysgKSB7XHJcblx0XHRcdFx0ZXhwYW5kZWRbIHByZWZpeCArIGNzc0V4cGFuZFsgaSBdICsgc3VmZml4IF0gPVxyXG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCAhcm1hcmdpbi50ZXN0KCBwcmVmaXggKSApIHtcclxuXHRcdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XHJcblx0fVxyXG59KTtcclxuXHJcbmpRdWVyeS5mbi5leHRlbmQoe1xyXG5cdGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHR2YXIgc3R5bGVzLCBsZW4sXHJcblx0XHRcdFx0bWFwID0ge30sXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBuYW1lICkgKSB7XHJcblx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICk7XHJcblx0XHRcdFx0bGVuID0gbmFtZS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0XHRcdFx0bWFwWyBuYW1lWyBpIF0gXSA9IGpRdWVyeS5jc3MoIGVsZW0sIG5hbWVbIGkgXSwgZmFsc2UsIHN0eWxlcyApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIG1hcDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgP1xyXG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XHJcblx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xyXG5cdFx0fSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XHJcblx0fSxcclxuXHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcywgdHJ1ZSApO1xyXG5cdH0sXHJcblx0aGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMgKTtcclxuXHR9LFxyXG5cdHRvZ2dsZTogZnVuY3Rpb24oIHN0YXRlICkge1xyXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggaXNIaWRkZW4oIHRoaXMgKSApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5zaG93KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcclxuXHRyZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApO1xyXG59XHJcbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xyXG5cclxuVHdlZW4ucHJvdG90eXBlID0ge1xyXG5cdGNvbnN0cnVjdG9yOiBUd2VlbixcclxuXHRpbml0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQgKSB7XHJcblx0XHR0aGlzLmVsZW0gPSBlbGVtO1xyXG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcclxuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IFwic3dpbmdcIjtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xyXG5cdFx0dGhpcy5lbmQgPSBlbmQ7XHJcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xyXG5cdH0sXHJcblx0Y3VyOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XHJcblxyXG5cdFx0cmV0dXJuIGhvb2tzICYmIGhvb2tzLmdldCA/XHJcblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcclxuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCggdGhpcyApO1xyXG5cdH0sXHJcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcclxuXHRcdHZhciBlYXNlZCxcclxuXHRcdFx0aG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xyXG5cclxuXHRcdGlmICggdGhpcy5vcHRpb25zLmR1cmF0aW9uICkge1xyXG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0galF1ZXJ5LmVhc2luZ1sgdGhpcy5lYXNpbmcgXShcclxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub3cgPSAoIHRoaXMuZW5kIC0gdGhpcy5zdGFydCApICogZWFzZWQgKyB0aGlzLnN0YXJ0O1xyXG5cclxuXHRcdGlmICggdGhpcy5vcHRpb25zLnN0ZXAgKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucy5zdGVwLmNhbGwoIHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnNldCApIHtcclxuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KCB0aGlzICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn07XHJcblxyXG5Ud2Vlbi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGUgPSBUd2Vlbi5wcm90b3R5cGU7XHJcblxyXG5Ud2Vlbi5wcm9wSG9va3MgPSB7XHJcblx0X2RlZmF1bHQ6IHtcclxuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xyXG5cdFx0XHR2YXIgcmVzdWx0O1xyXG5cclxuXHRcdFx0aWYgKCB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gIT0gbnVsbCAmJlxyXG5cdFx0XHRcdCghdHdlZW4uZWxlbS5zdHlsZSB8fCB0d2Vlbi5lbGVtLnN0eWxlWyB0d2Vlbi5wcm9wIF0gPT0gbnVsbCkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XHJcblx0XHRcdC8vIGF0dGVtcHQgYSBwYXJzZUZsb2F0IGFuZCBmYWxsYmFjayB0byBhIHN0cmluZyBpZiB0aGUgcGFyc2UgZmFpbHNcclxuXHRcdFx0Ly8gc28sIHNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0LlxyXG5cdFx0XHQvLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzIGlzLlxyXG5cdFx0XHRyZXN1bHQgPSBqUXVlcnkuY3NzKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCBcIlwiICk7XHJcblx0XHRcdC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxyXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcclxuXHRcdFx0Ly8gdXNlIHN0ZXAgaG9vayBmb3IgYmFjayBjb21wYXQgLSB1c2UgY3NzSG9vayBpZiBpdHMgdGhlcmUgLSB1c2UgLnN0eWxlIGlmIGl0c1xyXG5cdFx0XHQvLyBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZVxyXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XHJcblx0XHRcdFx0alF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSggdHdlZW4gKTtcclxuXHRcdFx0fSBlbHNlIGlmICggdHdlZW4uZWxlbS5zdHlsZSAmJiAoIHR3ZWVuLmVsZW0uc3R5bGVbIGpRdWVyeS5jc3NQcm9wc1sgdHdlZW4ucHJvcCBdIF0gIT0gbnVsbCB8fCBqUXVlcnkuY3NzSG9va3NbIHR3ZWVuLnByb3AgXSApICkge1xyXG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8vIFN1cHBvcnQ6IElFIDw9OVxyXG4vLyBQYW5pYyBiYXNlZCBhcHByb2FjaCB0byBzZXR0aW5nIHRoaW5ncyBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcclxuXHJcblR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3AgPSBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsTGVmdCA9IHtcclxuXHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcclxuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5qUXVlcnkuZWFzaW5nID0ge1xyXG5cdGxpbmVhcjogZnVuY3Rpb24oIHAgKSB7XHJcblx0XHRyZXR1cm4gcDtcclxuXHR9LFxyXG5cdHN3aW5nOiBmdW5jdGlvbiggcCApIHtcclxuXHRcdHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XHJcblx0fVxyXG59O1xyXG5cclxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XHJcblxyXG4vLyBCYWNrIENvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxyXG5qUXVlcnkuZnguc3RlcCA9IHt9O1xyXG5cclxuXHJcblxyXG5cclxudmFyXHJcblx0ZnhOb3csIHRpbWVySWQsXHJcblx0cmZ4dHlwZXMgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXHJcblx0cmZ4bnVtID0gbmV3IFJlZ0V4cCggXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIgKSxcclxuXHRycnVuID0gL3F1ZXVlSG9va3MkLyxcclxuXHRhbmltYXRpb25QcmVmaWx0ZXJzID0gWyBkZWZhdWx0UHJlZmlsdGVyIF0sXHJcblx0dHdlZW5lcnMgPSB7XHJcblx0XHRcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XHJcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4oIHByb3AsIHZhbHVlICksXHJcblx0XHRcdFx0dGFyZ2V0ID0gdHdlZW4uY3VyKCksXHJcblx0XHRcdFx0cGFydHMgPSByZnhudW0uZXhlYyggdmFsdWUgKSxcclxuXHRcdFx0XHR1bml0ID0gcGFydHMgJiYgcGFydHNbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKSxcclxuXHJcblx0XHRcdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcclxuXHRcdFx0XHRzdGFydCA9ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdIHx8IHVuaXQgIT09IFwicHhcIiAmJiArdGFyZ2V0ICkgJiZcclxuXHRcdFx0XHRcdHJmeG51bS5leGVjKCBqUXVlcnkuY3NzKCB0d2Vlbi5lbGVtLCBwcm9wICkgKSxcclxuXHRcdFx0XHRzY2FsZSA9IDEsXHJcblx0XHRcdFx0bWF4SXRlcmF0aW9ucyA9IDIwO1xyXG5cclxuXHRcdFx0aWYgKCBzdGFydCAmJiBzdGFydFsgMyBdICE9PSB1bml0ICkge1xyXG5cdFx0XHRcdC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3NcclxuXHRcdFx0XHR1bml0ID0gdW5pdCB8fCBzdGFydFsgMyBdO1xyXG5cclxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXHJcblx0XHRcdFx0cGFydHMgPSBwYXJ0cyB8fCBbXTtcclxuXHJcblx0XHRcdFx0Ly8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcclxuXHRcdFx0XHRzdGFydCA9ICt0YXJnZXQgfHwgMTtcclxuXHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0Ly8gSWYgcHJldmlvdXMgaXRlcmF0aW9uIHplcm9lZCBvdXQsIGRvdWJsZSB1bnRpbCB3ZSBnZXQgKnNvbWV0aGluZypcclxuXHRcdFx0XHRcdC8vIFVzZSBhIHN0cmluZyBmb3IgZG91YmxpbmcgZmFjdG9yIHNvIHdlIGRvbid0IGFjY2lkZW50YWxseSBzZWUgc2NhbGUgYXMgdW5jaGFuZ2VkIGJlbG93XHJcblx0XHRcdFx0XHRzY2FsZSA9IHNjYWxlIHx8IFwiLjVcIjtcclxuXHJcblx0XHRcdFx0XHQvLyBBZGp1c3QgYW5kIGFwcGx5XHJcblx0XHRcdFx0XHRzdGFydCA9IHN0YXJ0IC8gc2NhbGU7XHJcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIHR3ZWVuLmVsZW0sIHByb3AsIHN0YXJ0ICsgdW5pdCApO1xyXG5cclxuXHRcdFx0XHQvLyBVcGRhdGUgc2NhbGUsIHRvbGVyYXRpbmcgemVybyBvciBOYU4gZnJvbSB0d2Vlbi5jdXIoKVxyXG5cdFx0XHRcdC8vIEFuZCBicmVha2luZyB0aGUgbG9vcCBpZiBzY2FsZSBpcyB1bmNoYW5nZWQgb3IgcGVyZmVjdCwgb3IgaWYgd2UndmUganVzdCBoYWQgZW5vdWdoXHJcblx0XHRcdFx0fSB3aGlsZSAoIHNjYWxlICE9PSAoc2NhbGUgPSB0d2Vlbi5jdXIoKSAvIHRhcmdldCkgJiYgc2NhbGUgIT09IDEgJiYgLS1tYXhJdGVyYXRpb25zICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFVwZGF0ZSB0d2VlbiBwcm9wZXJ0aWVzXHJcblx0XHRcdGlmICggcGFydHMgKSB7XHJcblx0XHRcdFx0c3RhcnQgPSB0d2Vlbi5zdGFydCA9ICtzdGFydCB8fCArdGFyZ2V0IHx8IDA7XHJcblx0XHRcdFx0dHdlZW4udW5pdCA9IHVuaXQ7XHJcblx0XHRcdFx0Ly8gSWYgYSArPS8tPSB0b2tlbiB3YXMgcHJvdmlkZWQsIHdlJ3JlIGRvaW5nIGEgcmVsYXRpdmUgYW5pbWF0aW9uXHJcblx0XHRcdFx0dHdlZW4uZW5kID0gcGFydHNbIDEgXSA/XHJcblx0XHRcdFx0XHRzdGFydCArICggcGFydHNbIDEgXSArIDEgKSAqIHBhcnRzWyAyIF0gOlxyXG5cdFx0XHRcdFx0K3BhcnRzWyAyIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0d2VlbjtcclxuXHRcdH0gXVxyXG5cdH07XHJcblxyXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XHJcbmZ1bmN0aW9uIGNyZWF0ZUZ4Tm93KCkge1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRmeE5vdyA9IHVuZGVmaW5lZDtcclxuXHR9KTtcclxuXHRyZXR1cm4gKCBmeE5vdyA9IGpRdWVyeS5ub3coKSApO1xyXG59XHJcblxyXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxyXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xyXG5cdHZhciB3aGljaCxcclxuXHRcdGF0dHJzID0geyBoZWlnaHQ6IHR5cGUgfSxcclxuXHRcdGkgPSAwO1xyXG5cclxuXHQvLyBpZiB3ZSBpbmNsdWRlIHdpZHRoLCBzdGVwIHZhbHVlIGlzIDEgdG8gZG8gYWxsIGNzc0V4cGFuZCB2YWx1ZXMsXHJcblx0Ly8gaWYgd2UgZG9uJ3QgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxyXG5cdGluY2x1ZGVXaWR0aCA9IGluY2x1ZGVXaWR0aCA/IDEgOiAwO1xyXG5cdGZvciAoIDsgaSA8IDQgOyBpICs9IDIgLSBpbmNsdWRlV2lkdGggKSB7XHJcblx0XHR3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xyXG5cdFx0YXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoIGluY2x1ZGVXaWR0aCApIHtcclxuXHRcdGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYXR0cnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKCB2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uICkge1xyXG5cdHZhciB0d2VlbixcclxuXHRcdGNvbGxlY3Rpb24gPSAoIHR3ZWVuZXJzWyBwcm9wIF0gfHwgW10gKS5jb25jYXQoIHR3ZWVuZXJzWyBcIipcIiBdICksXHJcblx0XHRpbmRleCA9IDAsXHJcblx0XHRsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcclxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xyXG5cdFx0aWYgKCAodHdlZW4gPSBjb2xsZWN0aW9uWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUgKSkgKSB7XHJcblxyXG5cdFx0XHQvLyB3ZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxyXG5cdFx0XHRyZXR1cm4gdHdlZW47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKCBlbGVtLCBwcm9wcywgb3B0cyApIHtcclxuXHQvKiBqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXHJcblx0dmFyIHByb3AsIHZhbHVlLCB0b2dnbGUsIHR3ZWVuLCBob29rcywgb2xkZmlyZSwgZGlzcGxheSwgY2hlY2tEaXNwbGF5LFxyXG5cdFx0YW5pbSA9IHRoaXMsXHJcblx0XHRvcmlnID0ge30sXHJcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGUsXHJcblx0XHRoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuKCBlbGVtICksXHJcblx0XHRkYXRhU2hvdyA9IGpRdWVyeS5fZGF0YSggZWxlbSwgXCJmeHNob3dcIiApO1xyXG5cclxuXHQvLyBoYW5kbGUgcXVldWU6IGZhbHNlIHByb21pc2VzXHJcblx0aWYgKCAhb3B0cy5xdWV1ZSApIHtcclxuXHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcclxuXHRcdGlmICggaG9va3MudW5xdWV1ZWQgPT0gbnVsbCApIHtcclxuXHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xyXG5cdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcclxuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICggIWhvb2tzLnVucXVldWVkICkge1xyXG5cdFx0XHRcdFx0b2xkZmlyZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGhvb2tzLnVucXVldWVkKys7XHJcblxyXG5cdFx0YW5pbS5hbHdheXMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGRvaW5nIHRoaXMgbWFrZXMgc3VyZSB0aGF0IHRoZSBjb21wbGV0ZSBoYW5kbGVyIHdpbGwgYmUgY2FsbGVkXHJcblx0XHRcdC8vIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xyXG5cdFx0XHRhbmltLmFsd2F5cyhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRob29rcy51bnF1ZXVlZC0tO1xyXG5cdFx0XHRcdGlmICggIWpRdWVyeS5xdWV1ZSggZWxlbSwgXCJmeFwiICkubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIGhlaWdodC93aWR0aCBvdmVyZmxvdyBwYXNzXHJcblx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICggXCJoZWlnaHRcIiBpbiBwcm9wcyB8fCBcIndpZHRoXCIgaW4gcHJvcHMgKSApIHtcclxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG5vdGhpbmcgc25lYWtzIG91dFxyXG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdFxyXG5cdFx0Ly8gY2hhbmdlIHRoZSBvdmVyZmxvdyBhdHRyaWJ1dGUgd2hlbiBvdmVyZmxvd1ggYW5kXHJcblx0XHQvLyBvdmVyZmxvd1kgYXJlIHNldCB0byB0aGUgc2FtZSB2YWx1ZVxyXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XHJcblxyXG5cdFx0Ly8gU2V0IGRpc3BsYXkgcHJvcGVydHkgdG8gaW5saW5lLWJsb2NrIGZvciBoZWlnaHQvd2lkdGhcclxuXHRcdC8vIGFuaW1hdGlvbnMgb24gaW5saW5lIGVsZW1lbnRzIHRoYXQgYXJlIGhhdmluZyB3aWR0aC9oZWlnaHQgYW5pbWF0ZWRcclxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xyXG5cclxuXHRcdC8vIFRlc3QgZGVmYXVsdCBkaXNwbGF5IGlmIGRpc3BsYXkgaXMgY3VycmVudGx5IFwibm9uZVwiXHJcblx0XHRjaGVja0Rpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/XHJcblx0XHRcdGpRdWVyeS5fZGF0YSggZWxlbSwgXCJvbGRkaXNwbGF5XCIgKSB8fCBkZWZhdWx0RGlzcGxheSggZWxlbS5ub2RlTmFtZSApIDogZGlzcGxheTtcclxuXHJcblx0XHRpZiAoIGNoZWNrRGlzcGxheSA9PT0gXCJpbmxpbmVcIiAmJiBqUXVlcnkuY3NzKCBlbGVtLCBcImZsb2F0XCIgKSA9PT0gXCJub25lXCIgKSB7XHJcblxyXG5cdFx0XHQvLyBpbmxpbmUtbGV2ZWwgZWxlbWVudHMgYWNjZXB0IGlubGluZS1ibG9jaztcclxuXHRcdFx0Ly8gYmxvY2stbGV2ZWwgZWxlbWVudHMgbmVlZCB0byBiZSBpbmxpbmUgd2l0aCBsYXlvdXRcclxuXHRcdFx0aWYgKCAhc3VwcG9ydC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0IHx8IGRlZmF1bHREaXNwbGF5KCBlbGVtLm5vZGVOYW1lICkgPT09IFwiaW5saW5lXCIgKSB7XHJcblx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3R5bGUuem9vbSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggb3B0cy5vdmVyZmxvdyApIHtcclxuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHRcdGlmICggIXN1cHBvcnQuc2hyaW5rV3JhcEJsb2NrcygpICkge1xyXG5cdFx0XHRhbmltLmFsd2F5cyhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcclxuXHRcdFx0XHRzdHlsZS5vdmVyZmxvd1ggPSBvcHRzLm92ZXJmbG93WyAxIF07XHJcblx0XHRcdFx0c3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1sgMiBdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHNob3cvaGlkZSBwYXNzXHJcblx0Zm9yICggcHJvcCBpbiBwcm9wcyApIHtcclxuXHRcdHZhbHVlID0gcHJvcHNbIHByb3AgXTtcclxuXHRcdGlmICggcmZ4dHlwZXMuZXhlYyggdmFsdWUgKSApIHtcclxuXHRcdFx0ZGVsZXRlIHByb3BzWyBwcm9wIF07XHJcblx0XHRcdHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcclxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XHJcblxyXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGRhdGFTaG93IGxlZnQgb3ZlciBmcm9tIGEgc3RvcHBlZCBoaWRlIG9yIHNob3cgYW5kIHdlIGFyZSBnb2luZyB0byBwcm9jZWVkIHdpdGggc2hvdywgd2Ugc2hvdWxkIHByZXRlbmQgdG8gYmUgaGlkZGVuXHJcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XHJcblxyXG5cdFx0Ly8gQW55IG5vbi1meCB2YWx1ZSBzdG9wcyB1cyBmcm9tIHJlc3RvcmluZyB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGxheSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBvcmlnICkgKSB7XHJcblx0XHRpZiAoIGRhdGFTaG93ICkge1xyXG5cdFx0XHRpZiAoIFwiaGlkZGVuXCIgaW4gZGF0YVNob3cgKSB7XHJcblx0XHRcdFx0aGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkYXRhU2hvdyA9IGpRdWVyeS5fZGF0YSggZWxlbSwgXCJmeHNob3dcIiwge30gKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzdG9yZSBzdGF0ZSBpZiBpdHMgdG9nZ2xlIC0gZW5hYmxlcyAuc3RvcCgpLnRvZ2dsZSgpIHRvIFwicmV2ZXJzZVwiXHJcblx0XHRpZiAoIHRvZ2dsZSApIHtcclxuXHRcdFx0ZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcclxuXHRcdH1cclxuXHRcdGlmICggaGlkZGVuICkge1xyXG5cdFx0XHRqUXVlcnkoIGVsZW0gKS5zaG93KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbmltLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0alF1ZXJ5KCBlbGVtICkuaGlkZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGFuaW0uZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHByb3A7XHJcblx0XHRcdGpRdWVyeS5fcmVtb3ZlRGF0YSggZWxlbSwgXCJmeHNob3dcIiApO1xyXG5cdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XHJcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XHJcblx0XHRcdHR3ZWVuID0gY3JlYXRlVHdlZW4oIGhpZGRlbiA/IGRhdGFTaG93WyBwcm9wIF0gOiAwLCBwcm9wLCBhbmltICk7XHJcblxyXG5cdFx0XHRpZiAoICEoIHByb3AgaW4gZGF0YVNob3cgKSApIHtcclxuXHRcdFx0XHRkYXRhU2hvd1sgcHJvcCBdID0gdHdlZW4uc3RhcnQ7XHJcblx0XHRcdFx0aWYgKCBoaWRkZW4gKSB7XHJcblx0XHRcdFx0XHR0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydDtcclxuXHRcdFx0XHRcdHR3ZWVuLnN0YXJ0ID0gcHJvcCA9PT0gXCJ3aWR0aFwiIHx8IHByb3AgPT09IFwiaGVpZ2h0XCIgPyAxIDogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0Ly8gSWYgdGhpcyBpcyBhIG5vb3AgbGlrZSAuaGlkZSgpLmhpZGUoKSwgcmVzdG9yZSBhbiBvdmVyd3JpdHRlbiBkaXNwbGF5IHZhbHVlXHJcblx0fSBlbHNlIGlmICggKGRpc3BsYXkgPT09IFwibm9uZVwiID8gZGVmYXVsdERpc3BsYXkoIGVsZW0ubm9kZU5hbWUgKSA6IGRpc3BsYXkpID09PSBcImlubGluZVwiICkge1xyXG5cdFx0c3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcclxuXHR2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzO1xyXG5cclxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3NcclxuXHRmb3IgKCBpbmRleCBpbiBwcm9wcyApIHtcclxuXHRcdG5hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBpbmRleCApO1xyXG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xyXG5cdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXTtcclxuXHRcdGlmICggalF1ZXJ5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XHJcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XHJcblx0XHRcdHByb3BzWyBuYW1lIF0gPSB2YWx1ZTtcclxuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XHJcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XHJcblx0XHRcdHZhbHVlID0gaG9va3MuZXhwYW5kKCB2YWx1ZSApO1xyXG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcclxuXHJcblx0XHRcdC8vIG5vdCBxdWl0ZSAkLmV4dGVuZCwgdGhpcyB3b250IG92ZXJ3cml0ZSBrZXlzIGFscmVhZHkgcHJlc2VudC5cclxuXHRcdFx0Ly8gYWxzbyAtIHJldXNpbmcgJ2luZGV4JyBmcm9tIGFib3ZlIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxyXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcclxuXHRcdFx0XHRpZiAoICEoIGluZGV4IGluIHByb3BzICkgKSB7XHJcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xyXG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwZWNpYWxFYXNpbmdbIG5hbWUgXSA9IGVhc2luZztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcclxuXHR2YXIgcmVzdWx0LFxyXG5cdFx0c3RvcHBlZCxcclxuXHRcdGluZGV4ID0gMCxcclxuXHRcdGxlbmd0aCA9IGFuaW1hdGlvblByZWZpbHRlcnMubGVuZ3RoLFxyXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBkb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3JcclxuXHRcdFx0ZGVsZXRlIHRpY2suZWxlbTtcclxuXHRcdH0pLFxyXG5cdFx0dGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIHN0b3BwZWQgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXHJcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxyXG5cdFx0XHRcdC8vIGFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSAxIC0gKCAwLjUgfHwgMCApICgjMTI0OTcpXHJcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxyXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gdGVtcCxcclxuXHRcdFx0XHRpbmRleCA9IDAsXHJcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XHJcblxyXG5cdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoIDsgaW5kZXgrKyApIHtcclxuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggcGVyY2VudCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgcGVyY2VudCwgcmVtYWluaW5nIF0pO1xyXG5cclxuXHRcdFx0aWYgKCBwZXJjZW50IDwgMSAmJiBsZW5ndGggKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24gXSApO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2Uoe1xyXG5cdFx0XHRlbGVtOiBlbGVtLFxyXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcclxuXHRcdFx0b3B0czogalF1ZXJ5LmV4dGVuZCggdHJ1ZSwgeyBzcGVjaWFsRWFzaW5nOiB7fSB9LCBvcHRpb25zICksXHJcblx0XHRcdG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcclxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxyXG5cdFx0XHRzdGFydFRpbWU6IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXHJcblx0XHRcdGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxyXG5cdFx0XHR0d2VlbnM6IFtdLFxyXG5cdFx0XHRjcmVhdGVUd2VlbjogZnVuY3Rpb24oIHByb3AsIGVuZCApIHtcclxuXHRcdFx0XHR2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oIGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsXHJcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbIHByb3AgXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcgKTtcclxuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zLnB1c2goIHR3ZWVuICk7XHJcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdG9wOiBmdW5jdGlvbiggZ290b0VuZCApIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSAwLFxyXG5cdFx0XHRcdFx0Ly8gaWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXHJcblx0XHRcdFx0XHQvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcclxuXHRcdFx0XHRcdGxlbmd0aCA9IGdvdG9FbmQgPyBhbmltYXRpb24udHdlZW5zLmxlbmd0aCA6IDA7XHJcblx0XHRcdFx0aWYgKCBzdG9wcGVkICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIDEgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWVcclxuXHRcdFx0XHQvLyBvdGhlcndpc2UsIHJlamVjdFxyXG5cdFx0XHRcdGlmICggZ290b0VuZCApIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdH0pLFxyXG5cdFx0cHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XHJcblxyXG5cdHByb3BGaWx0ZXIoIHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nICk7XHJcblxyXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xyXG5cdFx0cmVzdWx0ID0gYW5pbWF0aW9uUHJlZmlsdGVyc1sgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyApO1xyXG5cdFx0aWYgKCByZXN1bHQgKSB7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRqUXVlcnkubWFwKCBwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbiApO1xyXG5cclxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xyXG5cdFx0YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbCggZWxlbSwgYW5pbWF0aW9uICk7XHJcblx0fVxyXG5cclxuXHRqUXVlcnkuZngudGltZXIoXHJcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aWNrLCB7XHJcblx0XHRcdGVsZW06IGVsZW0sXHJcblx0XHRcdGFuaW06IGFuaW1hdGlvbixcclxuXHRcdFx0cXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdC8vIGF0dGFjaCBjYWxsYmFja3MgZnJvbSBvcHRpb25zXHJcblx0cmV0dXJuIGFuaW1hdGlvbi5wcm9ncmVzcyggYW5pbWF0aW9uLm9wdHMucHJvZ3Jlc3MgKVxyXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcclxuXHRcdC5mYWlsKCBhbmltYXRpb24ub3B0cy5mYWlsIClcclxuXHRcdC5hbHdheXMoIGFuaW1hdGlvbi5vcHRzLmFsd2F5cyApO1xyXG59XHJcblxyXG5qUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XHJcblx0dHdlZW5lcjogZnVuY3Rpb24oIHByb3BzLCBjYWxsYmFjayApIHtcclxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHByb3BzICkgKSB7XHJcblx0XHRcdGNhbGxiYWNrID0gcHJvcHM7XHJcblx0XHRcdHByb3BzID0gWyBcIipcIiBdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHJvcHMgPSBwcm9wcy5zcGxpdChcIiBcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHByb3AsXHJcblx0XHRcdGluZGV4ID0gMCxcclxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xyXG5cclxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xyXG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XHJcblx0XHRcdHR3ZWVuZXJzWyBwcm9wIF0gPSB0d2VlbmVyc1sgcHJvcCBdIHx8IFtdO1xyXG5cdFx0XHR0d2VlbmVyc1sgcHJvcCBdLnVuc2hpZnQoIGNhbGxiYWNrICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XHJcblx0XHRpZiAoIHByZXBlbmQgKSB7XHJcblx0XHRcdGFuaW1hdGlvblByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFuaW1hdGlvblByZWZpbHRlcnMucHVzaCggY2FsbGJhY2sgKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xyXG5cdHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKCB7fSwgc3BlZWQgKSA6IHtcclxuXHRcdGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8XHJcblx0XHRcdGpRdWVyeS5pc0Z1bmN0aW9uKCBzcGVlZCApICYmIHNwZWVkLFxyXG5cdFx0ZHVyYXRpb246IHNwZWVkLFxyXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFqUXVlcnkuaXNGdW5jdGlvbiggZWFzaW5nICkgJiYgZWFzaW5nXHJcblx0fTtcclxuXHJcblx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4Lm9mZiA/IDAgOiB0eXBlb2Ygb3B0LmR1cmF0aW9uID09PSBcIm51bWJlclwiID8gb3B0LmR1cmF0aW9uIDpcclxuXHRcdG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzID8galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF0gOiBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xyXG5cclxuXHQvLyBub3JtYWxpemUgb3B0LnF1ZXVlIC0gdHJ1ZS91bmRlZmluZWQvbnVsbCAtPiBcImZ4XCJcclxuXHRpZiAoIG9wdC5xdWV1ZSA9PSBudWxsIHx8IG9wdC5xdWV1ZSA9PT0gdHJ1ZSApIHtcclxuXHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcclxuXHR9XHJcblxyXG5cdC8vIFF1ZXVlaW5nXHJcblx0b3B0Lm9sZCA9IG9wdC5jb21wbGV0ZTtcclxuXHJcblx0b3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBvcHQub2xkICkgKSB7XHJcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xyXG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgb3B0LnF1ZXVlICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIG9wdDtcclxufTtcclxuXHJcbmpRdWVyeS5mbi5leHRlbmQoe1xyXG5cdGZhZGVUbzogZnVuY3Rpb24oIHNwZWVkLCB0bywgZWFzaW5nLCBjYWxsYmFjayApIHtcclxuXHJcblx0XHQvLyBzaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcclxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggaXNIaWRkZW4gKS5jc3MoIFwib3BhY2l0eVwiLCAwICkuc2hvdygpXHJcblxyXG5cdFx0XHQvLyBhbmltYXRlIHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWRcclxuXHRcdFx0LmVuZCgpLmFuaW1hdGUoeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xyXG5cdH0sXHJcblx0YW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xyXG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcclxuXHRcdFx0b3B0YWxsID0galF1ZXJ5LnNwZWVkKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApLFxyXG5cdFx0XHRkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XHJcblx0XHRcdFx0dmFyIGFuaW0gPSBBbmltYXRpb24oIHRoaXMsIGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wICksIG9wdGFsbCApO1xyXG5cclxuXHRcdFx0XHQvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcclxuXHRcdFx0XHRpZiAoIGVtcHR5IHx8IGpRdWVyeS5fZGF0YSggdGhpcywgXCJmaW5pc2hcIiApICkge1xyXG5cdFx0XHRcdFx0YW5pbS5zdG9wKCB0cnVlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcclxuXHJcblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XHJcblx0XHRcdHRoaXMuZWFjaCggZG9BbmltYXRpb24gKSA6XHJcblx0XHRcdHRoaXMucXVldWUoIG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24gKTtcclxuXHR9LFxyXG5cdHN0b3A6IGZ1bmN0aW9uKCB0eXBlLCBjbGVhclF1ZXVlLCBnb3RvRW5kICkge1xyXG5cdFx0dmFyIHN0b3BRdWV1ZSA9IGZ1bmN0aW9uKCBob29rcyApIHtcclxuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xyXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcclxuXHRcdFx0c3RvcCggZ290b0VuZCApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xyXG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcclxuXHRcdFx0Y2xlYXJRdWV1ZSA9IHR5cGU7XHJcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0XHRpZiAoIGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UgKSB7XHJcblx0XHRcdHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBkZXF1ZXVlID0gdHJ1ZSxcclxuXHRcdFx0XHRpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXHJcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcclxuXHRcdFx0XHRkYXRhID0galF1ZXJ5Ll9kYXRhKCB0aGlzICk7XHJcblxyXG5cdFx0XHRpZiAoIGluZGV4ICkge1xyXG5cdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgKSB7XHJcblx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yICggaW5kZXggaW4gZGF0YSApIHtcclxuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xyXG5cdFx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XHJcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiAodHlwZSA9PSBudWxsIHx8IHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSkgKSB7XHJcblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCBnb3RvRW5kICk7XHJcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZFxyXG5cdFx0XHQvLyB0aW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoIHdpbGwgZGVxdWV1ZVxyXG5cdFx0XHQvLyBidXQgb25seSBpZiB0aGV5IHdlcmUgZ290b0VuZFxyXG5cdFx0XHRpZiAoIGRlcXVldWUgfHwgIWdvdG9FbmQgKSB7XHJcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRmaW5pc2g6IGZ1bmN0aW9uKCB0eXBlICkge1xyXG5cdFx0aWYgKCB0eXBlICE9PSBmYWxzZSApIHtcclxuXHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGluZGV4LFxyXG5cdFx0XHRcdGRhdGEgPSBqUXVlcnkuX2RhdGEoIHRoaXMgKSxcclxuXHRcdFx0XHRxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcclxuXHRcdFx0XHRob29rcyA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlSG9va3NcIiBdLFxyXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXHJcblx0XHRcdFx0bGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xyXG5cclxuXHRcdFx0Ly8gZW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxyXG5cdFx0XHRkYXRhLmZpbmlzaCA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyBlbXB0eSB0aGUgcXVldWUgZmlyc3RcclxuXHRcdFx0alF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBbXSApO1xyXG5cclxuXHRcdFx0aWYgKCBob29rcyAmJiBob29rcy5zdG9wICkge1xyXG5cdFx0XHRcdGhvb2tzLnN0b3AuY2FsbCggdGhpcywgdHJ1ZSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBsb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxyXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xyXG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkge1xyXG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggdHJ1ZSApO1xyXG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGxvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXHJcblx0XHRcdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XHJcblx0XHRcdFx0aWYgKCBxdWV1ZVsgaW5kZXggXSAmJiBxdWV1ZVsgaW5kZXggXS5maW5pc2ggKSB7XHJcblx0XHRcdFx0XHRxdWV1ZVsgaW5kZXggXS5maW5pc2guY2FsbCggdGhpcyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdHVybiBvZmYgZmluaXNoaW5nIGZsYWdcclxuXHRcdFx0ZGVsZXRlIGRhdGEuZmluaXNoO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuXHJcbmpRdWVyeS5lYWNoKFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xyXG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xyXG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xyXG5cdFx0cmV0dXJuIHNwZWVkID09IG51bGwgfHwgdHlwZW9mIHNwZWVkID09PSBcImJvb2xlYW5cIiA/XHJcblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XHJcblx0XHRcdHRoaXMuYW5pbWF0ZSggZ2VuRngoIG5hbWUsIHRydWUgKSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcclxuXHR9O1xyXG59KTtcclxuXHJcbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcclxualF1ZXJ5LmVhY2goe1xyXG5cdHNsaWRlRG93bjogZ2VuRngoXCJzaG93XCIpLFxyXG5cdHNsaWRlVXA6IGdlbkZ4KFwiaGlkZVwiKSxcclxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoXCJ0b2dnbGVcIiksXHJcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXHJcblx0ZmFkZU91dDogeyBvcGFjaXR5OiBcImhpZGVcIiB9LFxyXG5cdGZhZGVUb2dnbGU6IHsgb3BhY2l0eTogXCJ0b2dnbGVcIiB9XHJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcclxuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcclxuXHRcdHJldHVybiB0aGlzLmFuaW1hdGUoIHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xyXG5cdH07XHJcbn0pO1xyXG5cclxualF1ZXJ5LnRpbWVycyA9IFtdO1xyXG5qUXVlcnkuZngudGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciB0aW1lcixcclxuXHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXHJcblx0XHRpID0gMDtcclxuXHJcblx0ZnhOb3cgPSBqUXVlcnkubm93KCk7XHJcblxyXG5cdGZvciAoIDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdHRpbWVyID0gdGltZXJzWyBpIF07XHJcblx0XHQvLyBDaGVja3MgdGhlIHRpbWVyIGhhcyBub3QgYWxyZWFkeSBiZWVuIHJlbW92ZWRcclxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xyXG5cdFx0XHR0aW1lcnMuc3BsaWNlKCBpLS0sIDEgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggIXRpbWVycy5sZW5ndGggKSB7XHJcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xyXG5cdH1cclxuXHRmeE5vdyA9IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uKCB0aW1lciApIHtcclxuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XHJcblx0aWYgKCB0aW1lcigpICkge1xyXG5cdFx0alF1ZXJ5LmZ4LnN0YXJ0KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGpRdWVyeS50aW1lcnMucG9wKCk7XHJcblx0fVxyXG59O1xyXG5cclxualF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XHJcblxyXG5qUXVlcnkuZnguc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoICF0aW1lcklkICkge1xyXG5cdFx0dGltZXJJZCA9IHNldEludGVydmFsKCBqUXVlcnkuZngudGljaywgalF1ZXJ5LmZ4LmludGVydmFsICk7XHJcblx0fVxyXG59O1xyXG5cclxualF1ZXJ5LmZ4LnN0b3AgPSBmdW5jdGlvbigpIHtcclxuXHRjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcblx0dGltZXJJZCA9IG51bGw7XHJcbn07XHJcblxyXG5qUXVlcnkuZnguc3BlZWRzID0ge1xyXG5cdHNsb3c6IDYwMCxcclxuXHRmYXN0OiAyMDAsXHJcblx0Ly8gRGVmYXVsdCBzcGVlZFxyXG5cdF9kZWZhdWx0OiA0MDBcclxufTtcclxuXHJcblxyXG4vLyBCYXNlZCBvZmYgb2YgdGhlIHBsdWdpbiBieSBDbGludCBIZWxmZXJzLCB3aXRoIHBlcm1pc3Npb24uXHJcbi8vIGh0dHA6Ly9ibGluZHNpZ25hbHMuY29tL2luZGV4LnBocC8yMDA5LzA3L2pxdWVyeS1kZWxheS9cclxualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XHJcblx0dGltZSA9IGpRdWVyeS5meCA/IGpRdWVyeS5meC5zcGVlZHNbIHRpbWUgXSB8fCB0aW1lIDogdGltZTtcclxuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XHJcblxyXG5cdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlLCBmdW5jdGlvbiggbmV4dCwgaG9va3MgKSB7XHJcblx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcclxuXHRcdGhvb2tzLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XHJcblx0XHR9O1xyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHQvLyBNaW5pZmllZDogdmFyIGEsYixjLGQsZVxyXG5cdHZhciBpbnB1dCwgZGl2LCBzZWxlY3QsIGEsIG9wdDtcclxuXHJcblx0Ly8gU2V0dXBcclxuXHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XHJcblx0ZGl2LnNldEF0dHJpYnV0ZSggXCJjbGFzc05hbWVcIiwgXCJ0XCIgKTtcclxuXHRkaXYuaW5uZXJIVE1MID0gXCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIjtcclxuXHRhID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVsgMCBdO1xyXG5cclxuXHQvLyBGaXJzdCBiYXRjaCBvZiB0ZXN0cy5cclxuXHRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG5cdG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSApO1xyXG5cdGlucHV0ID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbIDAgXTtcclxuXHJcblx0YS5zdHlsZS5jc3NUZXh0ID0gXCJ0b3A6MXB4XCI7XHJcblxyXG5cdC8vIFRlc3Qgc2V0QXR0cmlidXRlIG9uIGNhbWVsQ2FzZSBjbGFzcy4gSWYgaXQgd29ya3MsIHdlIG5lZWQgYXR0ckZpeGVzIHdoZW4gZG9pbmcgZ2V0L3NldEF0dHJpYnV0ZSAoaWU2LzcpXHJcblx0c3VwcG9ydC5nZXRTZXRBdHRyaWJ1dGUgPSBkaXYuY2xhc3NOYW1lICE9PSBcInRcIjtcclxuXHJcblx0Ly8gR2V0IHRoZSBzdHlsZSBpbmZvcm1hdGlvbiBmcm9tIGdldEF0dHJpYnV0ZVxyXG5cdC8vIChJRSB1c2VzIC5jc3NUZXh0IGluc3RlYWQpXHJcblx0c3VwcG9ydC5zdHlsZSA9IC90b3AvLnRlc3QoIGEuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgKTtcclxuXHJcblx0Ly8gTWFrZSBzdXJlIHRoYXQgVVJMcyBhcmVuJ3QgbWFuaXB1bGF0ZWRcclxuXHQvLyAoSUUgbm9ybWFsaXplcyBpdCBieSBkZWZhdWx0KVxyXG5cdHN1cHBvcnQuaHJlZk5vcm1hbGl6ZWQgPSBhLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiL2FcIjtcclxuXHJcblx0Ly8gQ2hlY2sgdGhlIGRlZmF1bHQgY2hlY2tib3gvcmFkaW8gdmFsdWUgKFwiXCIgb24gV2ViS2l0OyBcIm9uXCIgZWxzZXdoZXJlKVxyXG5cdHN1cHBvcnQuY2hlY2tPbiA9ICEhaW5wdXQudmFsdWU7XHJcblxyXG5cdC8vIE1ha2Ugc3VyZSB0aGF0IGEgc2VsZWN0ZWQtYnktZGVmYXVsdCBvcHRpb24gaGFzIGEgd29ya2luZyBzZWxlY3RlZCBwcm9wZXJ0eS5cclxuXHQvLyAoV2ViS2l0IGRlZmF1bHRzIHRvIGZhbHNlIGluc3RlYWQgb2YgdHJ1ZSwgSUUgdG9vLCBpZiBpdCdzIGluIGFuIG9wdGdyb3VwKVxyXG5cdHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XHJcblxyXG5cdC8vIFRlc3RzIGZvciBlbmN0eXBlIHN1cHBvcnQgb24gYSBmb3JtICgjNjc0MylcclxuXHRzdXBwb3J0LmVuY3R5cGUgPSAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGU7XHJcblxyXG5cdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBvcHRpb25zIGluc2lkZSBkaXNhYmxlZCBzZWxlY3RzIGFyZW4ndCBtYXJrZWQgYXMgZGlzYWJsZWRcclxuXHQvLyAoV2ViS2l0IG1hcmtzIHRoZW0gYXMgZGlzYWJsZWQpXHJcblx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHRzdXBwb3J0Lm9wdERpc2FibGVkID0gIW9wdC5kaXNhYmxlZDtcclxuXHJcblx0Ly8gU3VwcG9ydDogSUU4IG9ubHlcclxuXHQvLyBDaGVjayBpZiB3ZSBjYW4gdHJ1c3QgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcclxuXHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xyXG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiLCBcIlwiICk7XHJcblx0c3VwcG9ydC5pbnB1dCA9IGlucHV0LmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XHJcblxyXG5cdC8vIENoZWNrIGlmIGFuIGlucHV0IG1haW50YWlucyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xyXG5cdGlucHV0LnZhbHVlID0gXCJ0XCI7XHJcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XHJcblx0c3VwcG9ydC5yYWRpb1ZhbHVlID0gaW5wdXQudmFsdWUgPT09IFwidFwiO1xyXG59KSgpO1xyXG5cclxuXHJcbnZhciBycmV0dXJuID0gL1xcci9nO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0dmFsOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHR2YXIgaG9va3MsIHJldCwgaXNGdW5jdGlvbixcclxuXHRcdFx0ZWxlbSA9IHRoaXNbMF07XHJcblxyXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcclxuXHRcdFx0aWYgKCBlbGVtICkge1xyXG5cdFx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyBlbGVtLnR5cGUgXSB8fCBqUXVlcnkudmFsSG9va3NbIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLmdldCggZWxlbSwgXCJ2YWx1ZVwiICkpICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0ID0gZWxlbS52YWx1ZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgP1xyXG5cdFx0XHRcdFx0Ly8gaGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xyXG5cdFx0XHRcdFx0cmV0LnJlcGxhY2UocnJldHVybiwgXCJcIikgOlxyXG5cdFx0XHRcdFx0Ly8gaGFuZGxlIGNhc2VzIHdoZXJlIHZhbHVlIGlzIG51bGwvdW5kZWYgb3IgbnVtYmVyXHJcblx0XHRcdFx0XHRyZXQgPT0gbnVsbCA/IFwiXCIgOiByZXQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaSApIHtcclxuXHRcdFx0dmFyIHZhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggaXNGdW5jdGlvbiApIHtcclxuXHRcdFx0XHR2YWwgPSB2YWx1ZS5jYWxsKCB0aGlzLCBpLCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXHJcblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XHJcblx0XHRcdFx0dmFsID0gXCJcIjtcclxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApIHtcclxuXHRcdFx0XHR2YWwgKz0gXCJcIjtcclxuXHRcdFx0fSBlbHNlIGlmICggalF1ZXJ5LmlzQXJyYXkoIHZhbCApICkge1xyXG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcclxuXHJcblx0XHRcdC8vIElmIHNldCByZXR1cm5zIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIG5vcm1hbCBzZXR0aW5nXHJcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoXCJzZXRcIiBpbiBob29rcykgfHwgaG9va3Muc2V0KCB0aGlzLCB2YWwsIFwidmFsdWVcIiApID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuXHJcbmpRdWVyeS5leHRlbmQoe1xyXG5cdHZhbEhvb2tzOiB7XHJcblx0XHRvcHRpb246IHtcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XHJcblx0XHRcdFx0cmV0dXJuIHZhbCAhPSBudWxsID9cclxuXHRcdFx0XHRcdHZhbCA6XHJcblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRTEwLTExK1xyXG5cdFx0XHRcdFx0Ly8gb3B0aW9uLnRleHQgdGhyb3dzIGV4Y2VwdGlvbnMgKCMxNDY4NiwgIzE0ODU4KVxyXG5cdFx0XHRcdFx0alF1ZXJ5LnRyaW0oIGpRdWVyeS50ZXh0KCBlbGVtICkgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRcdHZhciB2YWx1ZSwgb3B0aW9uLFxyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcclxuXHRcdFx0XHRcdGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxyXG5cdFx0XHRcdFx0b25lID0gZWxlbS50eXBlID09PSBcInNlbGVjdC1vbmVcIiB8fCBpbmRleCA8IDAsXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSBvbmUgPyBudWxsIDogW10sXHJcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aCxcclxuXHRcdFx0XHRcdGkgPSBpbmRleCA8IDAgP1xyXG5cdFx0XHRcdFx0XHRtYXggOlxyXG5cdFx0XHRcdFx0XHRvbmUgPyBpbmRleCA6IDA7XHJcblxyXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcclxuXHRcdFx0XHRmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcclxuXHRcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcclxuXHJcblx0XHRcdFx0XHQvLyBvbGRJRSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcclxuXHRcdFx0XHRcdGlmICggKCBvcHRpb24uc2VsZWN0ZWQgfHwgaSA9PT0gaW5kZXggKSAmJlxyXG5cdFx0XHRcdFx0XHRcdC8vIERvbid0IHJldHVybiBvcHRpb25zIHRoYXQgYXJlIGRpc2FibGVkIG9yIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcclxuXHRcdFx0XHRcdFx0XHQoIHN1cHBvcnQub3B0RGlzYWJsZWQgPyAhb3B0aW9uLmRpc2FibGVkIDogb3B0aW9uLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09PSBudWxsICkgJiZcclxuXHRcdFx0XHRcdFx0XHQoICFvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fCAhalF1ZXJ5Lm5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gV2UgZG9uJ3QgbmVlZCBhbiBhcnJheSBmb3Igb25lIHNlbGVjdHNcclxuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxyXG5cdFx0XHRcdFx0XHR2YWx1ZXMucHVzaCggdmFsdWUgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9uU2V0LCBvcHRpb24sXHJcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxyXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcclxuXHRcdFx0XHRcdGkgPSBvcHRpb25zLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XHJcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuaW5BcnJheSggalF1ZXJ5LnZhbEhvb2tzLm9wdGlvbi5nZXQoIG9wdGlvbiApLCB2YWx1ZXMgKSA+PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUU2XHJcblx0XHRcdFx0XHRcdC8vIFdoZW4gbmV3IG9wdGlvbiBlbGVtZW50IGlzIGFkZGVkIHRvIHNlbGVjdCBib3ggd2UgbmVlZCB0b1xyXG5cdFx0XHRcdFx0XHQvLyBmb3JjZSByZWZsb3cgb2YgbmV3bHkgYWRkZWQgbm9kZSBpbiBvcmRlciB0byB3b3JrYXJvdW5kIGRlbGF5XHJcblx0XHRcdFx0XHRcdC8vIG9mIGluaXRpYWxpemF0aW9uIHByb3BlcnRpZXNcclxuXHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb25TZXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBjYXRjaCAoIF8gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIFdpbGwgYmUgZXhlY3V0ZWQgb25seSBpbiBJRTZcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uc2Nyb2xsSGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxyXG5cdFx0XHRcdGlmICggIW9wdGlvblNldCApIHtcclxuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIG9wdGlvbnM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIGdldHRlci9zZXR0ZXJcclxualF1ZXJ5LmVhY2goWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcclxuXHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXSA9IHtcclxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xyXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoZWxlbSkudmFsKCksIHZhbHVlICkgPj0gMCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XHJcblx0XHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXS5nZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0Ly8gU3VwcG9ydDogV2Via2l0XHJcblx0XHRcdC8vIFwiXCIgaXMgcmV0dXJuZWQgaW5zdGVhZCBvZiBcIm9uXCIgaWYgYSB2YWx1ZSBpc24ndCBzcGVjaWZpZWRcclxuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgPT09IG51bGwgPyBcIm9uXCIgOiBlbGVtLnZhbHVlO1xyXG5cdFx0fTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxudmFyIG5vZGVIb29rLCBib29sSG9vayxcclxuXHRhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZSxcclxuXHRydXNlRGVmYXVsdCA9IC9eKD86Y2hlY2tlZHxzZWxlY3RlZCkkL2ksXHJcblx0Z2V0U2V0QXR0cmlidXRlID0gc3VwcG9ydC5nZXRTZXRBdHRyaWJ1dGUsXHJcblx0Z2V0U2V0SW5wdXQgPSBzdXBwb3J0LmlucHV0O1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0YXR0cjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LmF0dHIsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xyXG5cdH0sXHJcblxyXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIHRoaXMsIG5hbWUgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcblxyXG5qUXVlcnkuZXh0ZW5kKHtcclxuXHRhdHRyOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XHJcblx0XHR2YXIgaG9va3MsIHJldCxcclxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xyXG5cclxuXHRcdC8vIGRvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcclxuXHRcdGlmICggIWVsZW0gfHwgblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBGYWxsYmFjayB0byBwcm9wIHdoZW4gYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZFxyXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IHN0cnVuZGVmaW5lZCApIHtcclxuXHRcdFx0cmV0dXJuIGpRdWVyeS5wcm9wKCBlbGVtLCBuYW1lLCB2YWx1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFsbCBhdHRyaWJ1dGVzIGFyZSBsb3dlcmNhc2VcclxuXHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcclxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xyXG5cdFx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRob29rcyA9IGpRdWVyeS5hdHRySG9va3NbIG5hbWUgXSB8fFxyXG5cdFx0XHRcdCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgPyBib29sSG9vayA6IG5vZGVIb29rICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApKSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdHJldHVybiByZXQ7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCB2YWx1ZSArIFwiXCIgKTtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2UgaWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSkgIT09IG51bGwgKSB7XHJcblx0XHRcdHJldHVybiByZXQ7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xyXG5cclxuXHRcdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcclxuXHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID9cclxuXHRcdFx0XHR1bmRlZmluZWQgOlxyXG5cdFx0XHRcdHJldDtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XHJcblx0XHR2YXIgbmFtZSwgcHJvcE5hbWUsXHJcblx0XHRcdGkgPSAwLFxyXG5cdFx0XHRhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaCggcm5vdHdoaXRlICk7XHJcblxyXG5cdFx0aWYgKCBhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcclxuXHRcdFx0d2hpbGUgKCAobmFtZSA9IGF0dHJOYW1lc1tpKytdKSApIHtcclxuXHRcdFx0XHRwcm9wTmFtZSA9IGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZTtcclxuXHJcblx0XHRcdFx0Ly8gQm9vbGVhbiBhdHRyaWJ1dGVzIGdldCBzcGVjaWFsIHRyZWF0bWVudCAoIzEwODcwKVxyXG5cdFx0XHRcdGlmICggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgKSB7XHJcblx0XHRcdFx0XHQvLyBTZXQgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSB0byBmYWxzZVxyXG5cdFx0XHRcdFx0aWYgKCBnZXRTZXRJbnB1dCAmJiBnZXRTZXRBdHRyaWJ1dGUgfHwgIXJ1c2VEZWZhdWx0LnRlc3QoIG5hbWUgKSApIHtcclxuXHRcdFx0XHRcdFx0ZWxlbVsgcHJvcE5hbWUgXSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OVxyXG5cdFx0XHRcdFx0Ly8gQWxzbyBjbGVhciBkZWZhdWx0Q2hlY2tlZC9kZWZhdWx0U2VsZWN0ZWQgKGlmIGFwcHJvcHJpYXRlKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZWxlbVsgalF1ZXJ5LmNhbWVsQ2FzZSggXCJkZWZhdWx0LVwiICsgbmFtZSApIF0gPVxyXG5cdFx0XHRcdFx0XHRcdGVsZW1bIHByb3BOYW1lIF0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gU2VlICM5Njk5IGZvciBleHBsYW5hdGlvbiBvZiB0aGlzIGFwcHJvYWNoIChzZXR0aW5nIGZpcnN0LCB0aGVuIHJlbW92YWwpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGpRdWVyeS5hdHRyKCBlbGVtLCBuYW1lLCBcIlwiICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggZ2V0U2V0QXR0cmlidXRlID8gbmFtZSA6IHByb3BOYW1lICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRhdHRySG9va3M6IHtcclxuXHRcdHR5cGU6IHtcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XHJcblx0XHRcdFx0aWYgKCAhc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiYgalF1ZXJ5Lm5vZGVOYW1lKGVsZW0sIFwiaW5wdXRcIikgKSB7XHJcblx0XHRcdFx0XHQvLyBTZXR0aW5nIHRoZSB0eXBlIG9uIGEgcmFkaW8gYnV0dG9uIGFmdGVyIHRoZSB2YWx1ZSByZXNldHMgdGhlIHZhbHVlIGluIElFNi05XHJcblx0XHRcdFx0XHQvLyBSZXNldCB2YWx1ZSB0byBkZWZhdWx0IGluIGNhc2UgdHlwZSBpcyBzZXQgYWZ0ZXIgdmFsdWUgZHVyaW5nIGNyZWF0aW9uXHJcblx0XHRcdFx0XHR2YXIgdmFsID0gZWxlbS52YWx1ZTtcclxuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgdmFsdWUgKTtcclxuXHRcdFx0XHRcdGlmICggdmFsICkge1xyXG5cdFx0XHRcdFx0XHRlbGVtLnZhbHVlID0gdmFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBIb29rIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcclxuYm9vbEhvb2sgPSB7XHJcblx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIG5hbWUgKSB7XHJcblx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcclxuXHRcdFx0Ly8gUmVtb3ZlIGJvb2xlYW4gYXR0cmlidXRlcyB3aGVuIHNldCB0byBmYWxzZVxyXG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xyXG5cdFx0fSBlbHNlIGlmICggZ2V0U2V0SW5wdXQgJiYgZ2V0U2V0QXR0cmlidXRlIHx8ICFydXNlRGVmYXVsdC50ZXN0KCBuYW1lICkgKSB7XHJcblx0XHRcdC8vIElFPDggbmVlZHMgdGhlICpwcm9wZXJ0eSogbmFtZVxyXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggIWdldFNldEF0dHJpYnV0ZSAmJiBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWUsIG5hbWUgKTtcclxuXHJcblx0XHQvLyBVc2UgZGVmYXVsdENoZWNrZWQgYW5kIGRlZmF1bHRTZWxlY3RlZCBmb3Igb2xkSUVcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1bIGpRdWVyeS5jYW1lbENhc2UoIFwiZGVmYXVsdC1cIiArIG5hbWUgKSBdID0gZWxlbVsgbmFtZSBdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcbn07XHJcblxyXG4vLyBSZXRyaWV2ZSBib29sZWFucyBzcGVjaWFsbHlcclxualF1ZXJ5LmVhY2goIGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKCAvXFx3Ky9nICksIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xyXG5cclxuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XHJcblxyXG5cdGF0dHJIYW5kbGVbIG5hbWUgXSA9IGdldFNldElucHV0ICYmIGdldFNldEF0dHJpYnV0ZSB8fCAhcnVzZURlZmF1bHQudGVzdCggbmFtZSApID9cclxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcclxuXHRcdFx0dmFyIHJldCwgaGFuZGxlO1xyXG5cdFx0XHRpZiAoICFpc1hNTCApIHtcclxuXHRcdFx0XHQvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXHJcblx0XHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbmFtZSBdO1xyXG5cdFx0XHRcdGF0dHJIYW5kbGVbIG5hbWUgXSA9IHJldDtcclxuXHRcdFx0XHRyZXQgPSBnZXR0ZXIoIGVsZW0sIG5hbWUsIGlzWE1MICkgIT0gbnVsbCA/XHJcblx0XHRcdFx0XHRuYW1lLnRvTG93ZXJDYXNlKCkgOlxyXG5cdFx0XHRcdFx0bnVsbDtcclxuXHRcdFx0XHRhdHRySGFuZGxlWyBuYW1lIF0gPSBoYW5kbGU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJldDtcclxuXHRcdH0gOlxyXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xyXG5cdFx0XHRpZiAoICFpc1hNTCApIHtcclxuXHRcdFx0XHRyZXR1cm4gZWxlbVsgalF1ZXJ5LmNhbWVsQ2FzZSggXCJkZWZhdWx0LVwiICsgbmFtZSApIF0gP1xyXG5cdFx0XHRcdFx0bmFtZS50b0xvd2VyQ2FzZSgpIDpcclxuXHRcdFx0XHRcdG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcbn0pO1xyXG5cclxuLy8gZml4IG9sZElFIGF0dHJvcGVydGllc1xyXG5pZiAoICFnZXRTZXRJbnB1dCB8fCAhZ2V0U2V0QXR0cmlidXRlICkge1xyXG5cdGpRdWVyeS5hdHRySG9va3MudmFsdWUgPSB7XHJcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgbmFtZSApIHtcclxuXHRcdFx0aWYgKCBqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xyXG5cdFx0XHRcdC8vIERvZXMgbm90IHJldHVybiBzbyB0aGF0IHNldEF0dHJpYnV0ZSBpcyBhbHNvIHVzZWRcclxuXHRcdFx0XHRlbGVtLmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFVzZSBub2RlSG9vayBpZiBkZWZpbmVkICgjMTk1NCk7IG90aGVyd2lzZSBzZXRBdHRyaWJ1dGUgaXMgZmluZVxyXG5cdFx0XHRcdHJldHVybiBub2RlSG9vayAmJiBub2RlSG9vay5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG4vLyBJRTYvNyBkbyBub3Qgc3VwcG9ydCBnZXR0aW5nL3NldHRpbmcgc29tZSBhdHRyaWJ1dGVzIHdpdGggZ2V0L3NldEF0dHJpYnV0ZVxyXG5pZiAoICFnZXRTZXRBdHRyaWJ1dGUgKSB7XHJcblxyXG5cdC8vIFVzZSB0aGlzIGZvciBhbnkgYXR0cmlidXRlIGluIElFNi83XHJcblx0Ly8gVGhpcyBmaXhlcyBhbG1vc3QgZXZlcnkgSUU2LzcgaXNzdWVcclxuXHRub2RlSG9vayA9IHtcclxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xyXG5cdFx0XHQvLyBTZXQgdGhlIGV4aXN0aW5nIG9yIGNyZWF0ZSBhIG5ldyBhdHRyaWJ1dGUgbm9kZVxyXG5cdFx0XHR2YXIgcmV0ID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBuYW1lICk7XHJcblx0XHRcdGlmICggIXJldCApIHtcclxuXHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZU5vZGUoXHJcblx0XHRcdFx0XHQocmV0ID0gZWxlbS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSggbmFtZSApKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldC52YWx1ZSA9IHZhbHVlICs9IFwiXCI7XHJcblxyXG5cdFx0XHQvLyBCcmVhayBhc3NvY2lhdGlvbiB3aXRoIGNsb25lZCBlbGVtZW50cyBieSBhbHNvIHVzaW5nIHNldEF0dHJpYnV0ZSAoIzk2NDYpXHJcblx0XHRcdGlmICggbmFtZSA9PT0gXCJ2YWx1ZVwiIHx8IHZhbHVlID09PSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIFNvbWUgYXR0cmlidXRlcyBhcmUgY29uc3RydWN0ZWQgd2l0aCBlbXB0eS1zdHJpbmcgdmFsdWVzIHdoZW4gbm90IGRlZmluZWRcclxuXHRhdHRySGFuZGxlLmlkID0gYXR0ckhhbmRsZS5uYW1lID0gYXR0ckhhbmRsZS5jb29yZHMgPVxyXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xyXG5cdFx0XHR2YXIgcmV0O1xyXG5cdFx0XHRpZiAoICFpc1hNTCApIHtcclxuXHRcdFx0XHRyZXR1cm4gKHJldCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggbmFtZSApKSAmJiByZXQudmFsdWUgIT09IFwiXCIgP1xyXG5cdFx0XHRcdFx0cmV0LnZhbHVlIDpcclxuXHRcdFx0XHRcdG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdC8vIEZpeGluZyB2YWx1ZSByZXRyaWV2YWwgb24gYSBidXR0b24gcmVxdWlyZXMgdGhpcyBtb2R1bGVcclxuXHRqUXVlcnkudmFsSG9va3MuYnV0dG9uID0ge1xyXG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcclxuXHRcdFx0dmFyIHJldCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggbmFtZSApO1xyXG5cdFx0XHRpZiAoIHJldCAmJiByZXQuc3BlY2lmaWVkICkge1xyXG5cdFx0XHRcdHJldHVybiByZXQudmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzZXQ6IG5vZGVIb29rLnNldFxyXG5cdH07XHJcblxyXG5cdC8vIFNldCBjb250ZW50ZWRpdGFibGUgdG8gZmFsc2Ugb24gcmVtb3ZhbHMoIzEwNDI5KVxyXG5cdC8vIFNldHRpbmcgdG8gZW1wdHkgc3RyaW5nIHRocm93cyBhbiBlcnJvciBhcyBhbiBpbnZhbGlkIHZhbHVlXHJcblx0alF1ZXJ5LmF0dHJIb29rcy5jb250ZW50ZWRpdGFibGUgPSB7XHJcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgbmFtZSApIHtcclxuXHRcdFx0bm9kZUhvb2suc2V0KCBlbGVtLCB2YWx1ZSA9PT0gXCJcIiA/IGZhbHNlIDogdmFsdWUsIG5hbWUgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBTZXQgd2lkdGggYW5kIGhlaWdodCB0byBhdXRvIGluc3RlYWQgb2YgMCBvbiBlbXB0eSBzdHJpbmcoIEJ1ZyAjODE1MCApXHJcblx0Ly8gVGhpcyBpcyBmb3IgcmVtb3ZhbHNcclxuXHRqUXVlcnkuZWFjaChbIFwid2lkdGhcIiwgXCJoZWlnaHRcIiBdLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcclxuXHRcdGpRdWVyeS5hdHRySG9va3NbIG5hbWUgXSA9IHtcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XHJcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJcIiApIHtcclxuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCBcImF1dG9cIiApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KTtcclxufVxyXG5cclxuaWYgKCAhc3VwcG9ydC5zdHlsZSApIHtcclxuXHRqUXVlcnkuYXR0ckhvb2tzLnN0eWxlID0ge1xyXG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0Ly8gUmV0dXJuIHVuZGVmaW5lZCBpbiB0aGUgY2FzZSBvZiBlbXB0eSBzdHJpbmdcclxuXHRcdFx0Ly8gTm90ZTogSUUgdXBwZXJjYXNlcyBjc3MgcHJvcGVydHkgbmFtZXMsIGJ1dCBpZiB3ZSB3ZXJlIHRvIC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdC8vIC5jc3NUZXh0LCB0aGF0IHdvdWxkIGRlc3Ryb3kgY2FzZSBzZW5zdGl0aXZpdHkgaW4gVVJMJ3MsIGxpa2UgaW4gXCJiYWNrZ3JvdW5kXCJcclxuXHRcdFx0cmV0dXJuIGVsZW0uc3R5bGUuY3NzVGV4dCB8fCB1bmRlZmluZWQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAoIGVsZW0uc3R5bGUuY3NzVGV4dCA9IHZhbHVlICsgXCJcIiApO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdCkkL2ksXHJcblx0cmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcclxuXHJcbmpRdWVyeS5mbi5leHRlbmQoe1xyXG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcclxuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5wcm9wLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcclxuXHR9LFxyXG5cclxuXHRyZW1vdmVQcm9wOiBmdW5jdGlvbiggbmFtZSApIHtcclxuXHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyB0cnkvY2F0Y2ggaGFuZGxlcyBjYXNlcyB3aGVyZSBJRSBiYWxrcyAoc3VjaCBhcyByZW1vdmluZyBhIHByb3BlcnR5IG9uIHdpbmRvdylcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR0aGlzWyBuYW1lIF0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXNbIG5hbWUgXTtcclxuXHRcdFx0fSBjYXRjaCggZSApIHt9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxualF1ZXJ5LmV4dGVuZCh7XHJcblx0cHJvcEZpeDoge1xyXG5cdFx0XCJmb3JcIjogXCJodG1sRm9yXCIsXHJcblx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcclxuXHR9LFxyXG5cclxuXHRwcm9wOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XHJcblx0XHR2YXIgcmV0LCBob29rcywgbm90eG1sLFxyXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XHJcblxyXG5cdFx0Ly8gZG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xyXG5cdFx0aWYgKCAhZWxlbSB8fCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vdHhtbCA9IG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKTtcclxuXHJcblx0XHRpZiAoIG5vdHhtbCApIHtcclxuXHRcdFx0Ly8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xyXG5cdFx0XHRuYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xyXG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdHJldHVybiBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkpICE9PSB1bmRlZmluZWQgP1xyXG5cdFx0XHRcdHJldCA6XHJcblx0XHRcdFx0KCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSkgIT09IG51bGwgP1xyXG5cdFx0XHRcdHJldCA6XHJcblx0XHRcdFx0ZWxlbVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHByb3BIb29rczoge1xyXG5cdFx0dGFiSW5kZXg6IHtcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcclxuXHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XHJcblx0XHRcdFx0Ly8gaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cclxuXHRcdFx0XHQvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxyXG5cdFx0XHRcdHZhciB0YWJpbmRleCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIFwidGFiaW5kZXhcIiApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGFiaW5kZXggP1xyXG5cdFx0XHRcdFx0cGFyc2VJbnQoIHRhYmluZGV4LCAxMCApIDpcclxuXHRcdFx0XHRcdHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8IHJjbGlja2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApICYmIGVsZW0uaHJlZiA/XHJcblx0XHRcdFx0XHRcdDAgOlxyXG5cdFx0XHRcdFx0XHQtMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBTb21lIGF0dHJpYnV0ZXMgcmVxdWlyZSBhIHNwZWNpYWwgY2FsbCBvbiBJRVxyXG4vLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzY0MjklMjhWUy44NSUyOS5hc3B4XHJcbmlmICggIXN1cHBvcnQuaHJlZk5vcm1hbGl6ZWQgKSB7XHJcblx0Ly8gaHJlZi9zcmMgcHJvcGVydHkgc2hvdWxkIGdldCB0aGUgZnVsbCBub3JtYWxpemVkIFVSTCAoIzEwMjk5LyMxMjkxNSlcclxuXHRqUXVlcnkuZWFjaChbIFwiaHJlZlwiLCBcInNyY1wiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xyXG5cdFx0alF1ZXJ5LnByb3BIb29rc1sgbmFtZSBdID0ge1xyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSwgNCApO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBTdXBwb3J0OiBTYWZhcmksIElFOStcclxuLy8gbWlzLXJlcG9ydHMgdGhlIGRlZmF1bHQgc2VsZWN0ZWQgcHJvcGVydHkgb2YgYW4gb3B0aW9uXHJcbi8vIEFjY2Vzc2luZyB0aGUgcGFyZW50J3Mgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBmaXhlcyBpdFxyXG5pZiAoICFzdXBwb3J0Lm9wdFNlbGVjdGVkICkge1xyXG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XHJcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xyXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0aWYgKCBwYXJlbnQgKSB7XHJcblx0XHRcdFx0cGFyZW50LnNlbGVjdGVkSW5kZXg7XHJcblxyXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IGl0IGFsc28gd29ya3Mgd2l0aCBvcHRncm91cHMsIHNlZSAjNTcwMVxyXG5cdFx0XHRcdGlmICggcGFyZW50LnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5qUXVlcnkuZWFjaChbXHJcblx0XCJ0YWJJbmRleFwiLFxyXG5cdFwicmVhZE9ubHlcIixcclxuXHRcIm1heExlbmd0aFwiLFxyXG5cdFwiY2VsbFNwYWNpbmdcIixcclxuXHRcImNlbGxQYWRkaW5nXCIsXHJcblx0XCJyb3dTcGFuXCIsXHJcblx0XCJjb2xTcGFuXCIsXHJcblx0XCJ1c2VNYXBcIixcclxuXHRcImZyYW1lQm9yZGVyXCIsXHJcblx0XCJjb250ZW50RWRpdGFibGVcIlxyXG5dLCBmdW5jdGlvbigpIHtcclxuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xyXG59KTtcclxuXHJcbi8vIElFNi83IGNhbGwgZW5jdHlwZSBlbmNvZGluZ1xyXG5pZiAoICFzdXBwb3J0LmVuY3R5cGUgKSB7XHJcblx0alF1ZXJ5LnByb3BGaXguZW5jdHlwZSA9IFwiZW5jb2RpbmdcIjtcclxufVxyXG5cclxuXHJcblxyXG5cclxudmFyIHJjbGFzcyA9IC9bXFx0XFxyXFxuXFxmXS9nO1xyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxyXG5cdFx0XHRpID0gMCxcclxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXHJcblx0XHRcdHByb2NlZWQgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWU7XHJcblxyXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaiApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgdGhpcy5jbGFzc05hbWUgKSApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHByb2NlZWQgKSB7XHJcblx0XHRcdC8vIFRoZSBkaXNqdW5jdGlvbiBoZXJlIGlzIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgcmVtb3ZlQ2xhc3MpXHJcblx0XHRcdGNsYXNzZXMgPSAoIHZhbHVlIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgW107XHJcblxyXG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdFx0XHRlbGVtID0gdGhpc1sgaSBdO1xyXG5cdFx0XHRcdGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBlbGVtLmNsYXNzTmFtZSA/XHJcblx0XHRcdFx0XHQoIFwiIFwiICsgZWxlbS5jbGFzc05hbWUgKyBcIiBcIiApLnJlcGxhY2UoIHJjbGFzcywgXCIgXCIgKSA6XHJcblx0XHRcdFx0XHRcIiBcIlxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmICggY3VyICkge1xyXG5cdFx0XHRcdFx0aiA9IDA7XHJcblx0XHRcdFx0XHR3aGlsZSAoIChjbGF6eiA9IGNsYXNzZXNbaisrXSkgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApIDwgMCApIHtcclxuXHRcdFx0XHRcdFx0XHRjdXIgKz0gY2xhenogKyBcIiBcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIG9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXHJcblx0XHRcdFx0XHRmaW5hbFZhbHVlID0galF1ZXJ5LnRyaW0oIGN1ciApO1xyXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmNsYXNzTmFtZSAhPT0gZmluYWxWYWx1ZSApIHtcclxuXHRcdFx0XHRcdFx0ZWxlbS5jbGFzc05hbWUgPSBmaW5hbFZhbHVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHR2YXIgY2xhc3NlcywgZWxlbSwgY3VyLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcclxuXHRcdFx0aSA9IDAsXHJcblx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoLFxyXG5cdFx0XHRwcm9jZWVkID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWU7XHJcblxyXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaiApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgdGhpcy5jbGFzc05hbWUgKSApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmICggcHJvY2VlZCApIHtcclxuXHRcdFx0Y2xhc3NlcyA9ICggdmFsdWUgfHwgXCJcIiApLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcclxuXHJcblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF07XHJcblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcclxuXHRcdFx0XHRjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmICggZWxlbS5jbGFzc05hbWUgP1xyXG5cdFx0XHRcdFx0KCBcIiBcIiArIGVsZW0uY2xhc3NOYW1lICsgXCIgXCIgKS5yZXBsYWNlKCByY2xhc3MsIFwiIFwiICkgOlxyXG5cdFx0XHRcdFx0XCJcIlxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmICggY3VyICkge1xyXG5cdFx0XHRcdFx0aiA9IDA7XHJcblx0XHRcdFx0XHR3aGlsZSAoIChjbGF6eiA9IGNsYXNzZXNbaisrXSkgKSB7XHJcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcclxuXHRcdFx0XHRcdFx0d2hpbGUgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPj0gMCApIHtcclxuXHRcdFx0XHRcdFx0XHRjdXIgPSBjdXIucmVwbGFjZSggXCIgXCIgKyBjbGF6eiArIFwiIFwiLCBcIiBcIiApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gb25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cclxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSB2YWx1ZSA/IGpRdWVyeS50cmltKCBjdXIgKSA6IFwiXCI7XHJcblx0XHRcdFx0XHRpZiAoIGVsZW0uY2xhc3NOYW1lICE9PSBmaW5hbFZhbHVlICkge1xyXG5cdFx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSA9IGZpbmFsVmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0dG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSwgc3RhdGVWYWwgKSB7XHJcblx0XHR2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuXHJcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZVZhbCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZSA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlVmFsID8gdGhpcy5hZGRDbGFzcyggdmFsdWUgKSA6IHRoaXMucmVtb3ZlQ2xhc3MoIHZhbHVlICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaSApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyggdmFsdWUuY2FsbCh0aGlzLCBpLCB0aGlzLmNsYXNzTmFtZSwgc3RhdGVWYWwpLCBzdGF0ZVZhbCApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdFx0Ly8gdG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcclxuXHRcdFx0XHR2YXIgY2xhc3NOYW1lLFxyXG5cdFx0XHRcdFx0aSA9IDAsXHJcblx0XHRcdFx0XHRzZWxmID0galF1ZXJ5KCB0aGlzICksXHJcblx0XHRcdFx0XHRjbGFzc05hbWVzID0gdmFsdWUubWF0Y2goIHJub3R3aGl0ZSApIHx8IFtdO1xyXG5cclxuXHRcdFx0XHR3aGlsZSAoIChjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpKysgXSkgKSB7XHJcblx0XHRcdFx0XHQvLyBjaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3RcclxuXHRcdFx0XHRcdGlmICggc2VsZi5oYXNDbGFzcyggY2xhc3NOYW1lICkgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5hZGRDbGFzcyggY2xhc3NOYW1lICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcclxuXHRcdFx0fSBlbHNlIGlmICggdHlwZSA9PT0gc3RydW5kZWZpbmVkIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiICkge1xyXG5cdFx0XHRcdGlmICggdGhpcy5jbGFzc05hbWUgKSB7XHJcblx0XHRcdFx0XHQvLyBzdG9yZSBjbGFzc05hbWUgaWYgc2V0XHJcblx0XHRcdFx0XHRqUXVlcnkuX2RhdGEoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCB0aGlzLmNsYXNzTmFtZSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgXCJmYWxzZVwiLFxyXG5cdFx0XHRcdC8vIHRoZW4gcmVtb3ZlIHRoZSB3aG9sZSBjbGFzc25hbWUgKGlmIHRoZXJlIHdhcyBvbmUsIHRoZSBhYm92ZSBzYXZlZCBpdCkuXHJcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcclxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXHJcblx0XHRcdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgPyBcIlwiIDogalF1ZXJ5Ll9kYXRhKCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiApIHx8IFwiXCI7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGhhc0NsYXNzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XHJcblx0XHR2YXIgY2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiLFxyXG5cdFx0XHRpID0gMCxcclxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xyXG5cdFx0XHRpZiAoIHRoaXNbaV0ubm9kZVR5cGUgPT09IDEgJiYgKFwiIFwiICsgdGhpc1tpXS5jbGFzc05hbWUgKyBcIiBcIikucmVwbGFjZShyY2xhc3MsIFwiIFwiKS5pbmRleE9mKCBjbGFzc05hbWUgKSA+PSAwICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm4galF1ZXJ5IGZvciBhdHRyaWJ1dGVzLW9ubHkgaW5jbHVzaW9uXHJcblxyXG5cclxualF1ZXJ5LmVhY2goIChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIFwiICtcclxuXHRcIm1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIFwiICtcclxuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIikuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcclxuXHJcblx0Ly8gSGFuZGxlIGV2ZW50IGJpbmRpbmdcclxuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcclxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/XHJcblx0XHRcdHRoaXMub24oIG5hbWUsIG51bGwsIGRhdGEsIGZuICkgOlxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcclxuXHR9O1xyXG59KTtcclxuXHJcbmpRdWVyeS5mbi5leHRlbmQoe1xyXG5cdGhvdmVyOiBmdW5jdGlvbiggZm5PdmVyLCBmbk91dCApIHtcclxuXHRcdHJldHVybiB0aGlzLm1vdXNlZW50ZXIoIGZuT3ZlciApLm1vdXNlbGVhdmUoIGZuT3V0IHx8IGZuT3ZlciApO1xyXG5cdH0sXHJcblxyXG5cdGJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZGF0YSwgZm4gKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIG51bGwsIGRhdGEsIGZuICk7XHJcblx0fSxcclxuXHR1bmJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZm4gKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vZmYoIHR5cGVzLCBudWxsLCBmbiApO1xyXG5cdH0sXHJcblxyXG5cdGRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbiApIHtcclxuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XHJcblx0fSxcclxuXHR1bmRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBmbiApIHtcclxuXHRcdC8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcclxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gdGhpcy5vZmYoIHNlbGVjdG9yLCBcIioqXCIgKSA6IHRoaXMub2ZmKCB0eXBlcywgc2VsZWN0b3IgfHwgXCIqKlwiLCBmbiApO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxudmFyIG5vbmNlID0galF1ZXJ5Lm5vdygpO1xyXG5cclxudmFyIHJxdWVyeSA9ICgvXFw/Lyk7XHJcblxyXG5cclxuXHJcbnZhciBydmFsaWR0b2tlbnMgPSAvKCwpfChcXFt8eyl8KH18XSl8XCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXFtcIlxcXFxcXC9iZm5ydF18XFxcXHVbXFxkYS1mQS1GXXs0fSkqXCJcXHMqOj98dHJ1ZXxmYWxzZXxudWxsfC0/KD8hMFxcZClcXGQrKD86XFwuXFxkK3wpKD86W2VFXVsrLV0/XFxkK3wpL2c7XHJcblxyXG5qUXVlcnkucGFyc2VKU09OID0gZnVuY3Rpb24oIGRhdGEgKSB7XHJcblx0Ly8gQXR0ZW1wdCB0byBwYXJzZSB1c2luZyB0aGUgbmF0aXZlIEpTT04gcGFyc2VyIGZpcnN0XHJcblx0aWYgKCB3aW5kb3cuSlNPTiAmJiB3aW5kb3cuSlNPTi5wYXJzZSApIHtcclxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zXHJcblx0XHQvLyBXb3JrYXJvdW5kIGZhaWx1cmUgdG8gc3RyaW5nLWNhc3QgbnVsbCBpbnB1dFxyXG5cdFx0cmV0dXJuIHdpbmRvdy5KU09OLnBhcnNlKCBkYXRhICsgXCJcIiApO1xyXG5cdH1cclxuXHJcblx0dmFyIHJlcXVpcmVOb25Db21tYSxcclxuXHRcdGRlcHRoID0gbnVsbCxcclxuXHRcdHN0ciA9IGpRdWVyeS50cmltKCBkYXRhICsgXCJcIiApO1xyXG5cclxuXHQvLyBHdWFyZCBhZ2FpbnN0IGludmFsaWQgKGFuZCBwb3NzaWJseSBkYW5nZXJvdXMpIGlucHV0IGJ5IGVuc3VyaW5nIHRoYXQgbm90aGluZyByZW1haW5zXHJcblx0Ly8gYWZ0ZXIgcmVtb3ZpbmcgdmFsaWQgdG9rZW5zXHJcblx0cmV0dXJuIHN0ciAmJiAhalF1ZXJ5LnRyaW0oIHN0ci5yZXBsYWNlKCBydmFsaWR0b2tlbnMsIGZ1bmN0aW9uKCB0b2tlbiwgY29tbWEsIG9wZW4sIGNsb3NlICkge1xyXG5cclxuXHRcdC8vIEZvcmNlIHRlcm1pbmF0aW9uIGlmIHdlIHNlZSBhIG1pc3BsYWNlZCBjb21tYVxyXG5cdFx0aWYgKCByZXF1aXJlTm9uQ29tbWEgJiYgY29tbWEgKSB7XHJcblx0XHRcdGRlcHRoID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBQZXJmb3JtIG5vIG1vcmUgcmVwbGFjZW1lbnRzIGFmdGVyIHJldHVybmluZyB0byBvdXRlcm1vc3QgZGVwdGhcclxuXHRcdGlmICggZGVwdGggPT09IDAgKSB7XHJcblx0XHRcdHJldHVybiB0b2tlbjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDb21tYXMgbXVzdCBub3QgZm9sbG93IFwiW1wiLCBcIntcIiwgb3IgXCIsXCJcclxuXHRcdHJlcXVpcmVOb25Db21tYSA9IG9wZW4gfHwgY29tbWE7XHJcblxyXG5cdFx0Ly8gRGV0ZXJtaW5lIG5ldyBkZXB0aFxyXG5cdFx0Ly8gYXJyYXkvb2JqZWN0IG9wZW4gKFwiW1wiIG9yIFwie1wiKTogZGVwdGggKz0gdHJ1ZSAtIGZhbHNlIChpbmNyZW1lbnQpXHJcblx0XHQvLyBhcnJheS9vYmplY3QgY2xvc2UgKFwiXVwiIG9yIFwifVwiKTogZGVwdGggKz0gZmFsc2UgLSB0cnVlIChkZWNyZW1lbnQpXHJcblx0XHQvLyBvdGhlciBjYXNlcyAoXCIsXCIgb3IgcHJpbWl0aXZlKTogZGVwdGggKz0gdHJ1ZSAtIHRydWUgKG51bWVyaWMgY2FzdClcclxuXHRcdGRlcHRoICs9ICFjbG9zZSAtICFvcGVuO1xyXG5cclxuXHRcdC8vIFJlbW92ZSB0aGlzIHRva2VuXHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHR9KSApID9cclxuXHRcdCggRnVuY3Rpb24oIFwicmV0dXJuIFwiICsgc3RyICkgKSgpIDpcclxuXHRcdGpRdWVyeS5lcnJvciggXCJJbnZhbGlkIEpTT046IFwiICsgZGF0YSApO1xyXG59O1xyXG5cclxuXHJcbi8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcclxualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XHJcblx0dmFyIHhtbCwgdG1wO1xyXG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0dHJ5IHtcclxuXHRcdGlmICggd2luZG93LkRPTVBhcnNlciApIHsgLy8gU3RhbmRhcmRcclxuXHRcdFx0dG1wID0gbmV3IERPTVBhcnNlcigpO1xyXG5cdFx0XHR4bWwgPSB0bXAucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcclxuXHRcdH0gZWxzZSB7IC8vIElFXHJcblx0XHRcdHhtbCA9IG5ldyBBY3RpdmVYT2JqZWN0KCBcIk1pY3Jvc29mdC5YTUxET01cIiApO1xyXG5cdFx0XHR4bWwuYXN5bmMgPSBcImZhbHNlXCI7XHJcblx0XHRcdHhtbC5sb2FkWE1MKCBkYXRhICk7XHJcblx0XHR9XHJcblx0fSBjYXRjaCggZSApIHtcclxuXHRcdHhtbCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0aWYgKCAheG1sIHx8ICF4bWwuZG9jdW1lbnRFbGVtZW50IHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiICkubGVuZ3RoICkge1xyXG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIGRhdGEgKTtcclxuXHR9XHJcblx0cmV0dXJuIHhtbDtcclxufTtcclxuXHJcblxyXG52YXJcclxuXHQvLyBEb2N1bWVudCBsb2NhdGlvblxyXG5cdGFqYXhMb2NQYXJ0cyxcclxuXHRhamF4TG9jYXRpb24sXHJcblxyXG5cdHJoYXNoID0gLyMuKiQvLFxyXG5cdHJ0cyA9IC8oWz8mXSlfPVteJl0qLyxcclxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKVxccj8kL21nLCAvLyBJRSBsZWF2ZXMgYW4gXFxyIGNoYXJhY3RlciBhdCBFT0xcclxuXHQvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cclxuXHRybG9jYWxQcm90b2NvbCA9IC9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLFxyXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxyXG5cdHJwcm90b2NvbCA9IC9eXFwvXFwvLyxcclxuXHRydXJsID0gL14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sXHJcblxyXG5cdC8qIFByZWZpbHRlcnNcclxuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxyXG5cdCAqIDIpIFRoZXNlIGFyZSBjYWxsZWQ6XHJcblx0ICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxyXG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcclxuXHQgKiAzKSBrZXkgaXMgdGhlIGRhdGFUeXBlXHJcblx0ICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxyXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXHJcblx0ICovXHJcblx0cHJlZmlsdGVycyA9IHt9LFxyXG5cclxuXHQvKiBUcmFuc3BvcnRzIGJpbmRpbmdzXHJcblx0ICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxyXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcclxuXHQgKiAzKSBzZWxlY3Rpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBnbyB0byBcIipcIiBpZiBuZWVkZWRcclxuXHQgKi9cclxuXHR0cmFuc3BvcnRzID0ge30sXHJcblxyXG5cdC8vIEF2b2lkIGNvbW1lbnQtcHJvbG9nIGNoYXIgc2VxdWVuY2UgKCMxMDA5OCk7IG11c3QgYXBwZWFzZSBsaW50IGFuZCBldmFkZSBjb21wcmVzc2lvblxyXG5cdGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdChcIipcIik7XHJcblxyXG4vLyAjODEzOCwgSUUgbWF5IHRocm93IGFuIGV4Y2VwdGlvbiB3aGVuIGFjY2Vzc2luZ1xyXG4vLyBhIGZpZWxkIGZyb20gd2luZG93LmxvY2F0aW9uIGlmIGRvY3VtZW50LmRvbWFpbiBoYXMgYmVlbiBzZXRcclxudHJ5IHtcclxuXHRhamF4TG9jYXRpb24gPSBsb2NhdGlvbi5ocmVmO1xyXG59IGNhdGNoKCBlICkge1xyXG5cdC8vIFVzZSB0aGUgaHJlZiBhdHRyaWJ1dGUgb2YgYW4gQSBlbGVtZW50XHJcblx0Ly8gc2luY2UgSUUgd2lsbCBtb2RpZnkgaXQgZ2l2ZW4gZG9jdW1lbnQubG9jYXRpb25cclxuXHRhamF4TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xyXG5cdGFqYXhMb2NhdGlvbi5ocmVmID0gXCJcIjtcclxuXHRhamF4TG9jYXRpb24gPSBhamF4TG9jYXRpb24uaHJlZjtcclxufVxyXG5cclxuLy8gU2VnbWVudCBsb2NhdGlvbiBpbnRvIHBhcnRzXHJcbmFqYXhMb2NQYXJ0cyA9IHJ1cmwuZXhlYyggYWpheExvY2F0aW9uLnRvTG93ZXJDYXNlKCkgKSB8fCBbXTtcclxuXHJcbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcclxuZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUgKSB7XHJcblxyXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcclxuXHRyZXR1cm4gZnVuY3Rpb24oIGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYyApIHtcclxuXHJcblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XHJcblx0XHRcdGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkYXRhVHlwZSxcclxuXHRcdFx0aSA9IDAsXHJcblx0XHRcdGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcclxuXHJcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBmdW5jICkgKSB7XHJcblx0XHRcdC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cclxuXHRcdFx0d2hpbGUgKCAoZGF0YVR5cGUgPSBkYXRhVHlwZXNbaSsrXSkgKSB7XHJcblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcclxuXHRcdFx0XHRpZiAoIGRhdGFUeXBlLmNoYXJBdCggMCApID09PSBcIitcIiApIHtcclxuXHRcdFx0XHRcdGRhdGFUeXBlID0gZGF0YVR5cGUuc2xpY2UoIDEgKSB8fCBcIipcIjtcclxuXHRcdFx0XHRcdChzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10pLnVuc2hpZnQoIGZ1bmMgKTtcclxuXHJcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQoc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdKS5wdXNoKCBmdW5jICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXHJcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XHJcblxyXG5cdHZhciBpbnNwZWN0ZWQgPSB7fSxcclxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xyXG5cclxuXHRmdW5jdGlvbiBpbnNwZWN0KCBkYXRhVHlwZSApIHtcclxuXHRcdHZhciBzZWxlY3RlZDtcclxuXHRcdGluc3BlY3RlZFsgZGF0YVR5cGUgXSA9IHRydWU7XHJcblx0XHRqUXVlcnkuZWFjaCggc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdLCBmdW5jdGlvbiggXywgcHJlZmlsdGVyT3JGYWN0b3J5ICkge1xyXG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xyXG5cdFx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmICFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbIGRhdGFUeXBlT3JUcmFuc3BvcnQgXSApIHtcclxuXHRcdFx0XHRvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XHJcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmICggc2Vla2luZ1RyYW5zcG9ydCApIHtcclxuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XHJcbn1cclxuXHJcbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xyXG4vLyB0aGF0IHRha2VzIFwiZmxhdFwiIG9wdGlvbnMgKG5vdCB0byBiZSBkZWVwIGV4dGVuZGVkKVxyXG4vLyBGaXhlcyAjOTg4N1xyXG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcclxuXHR2YXIgZGVlcCwga2V5LFxyXG5cdFx0ZmxhdE9wdGlvbnMgPSBqUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zIHx8IHt9O1xyXG5cclxuXHRmb3IgKCBrZXkgaW4gc3JjICkge1xyXG5cdFx0aWYgKCBzcmNbIGtleSBdICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8IChkZWVwID0ge30pICkgKVsga2V5IF0gPSBzcmNbIGtleSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoIGRlZXAgKSB7XHJcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcclxuICogLSBmaW5kcyB0aGUgcmlnaHQgZGF0YVR5cGUgKG1lZGlhdGVzIGJldHdlZW4gY29udGVudC10eXBlIGFuZCBleHBlY3RlZCBkYXRhVHlwZSlcclxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXHJcbiAqL1xyXG5mdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICkge1xyXG5cdHZhciBmaXJzdERhdGFUeXBlLCBjdCwgZmluYWxEYXRhVHlwZSwgdHlwZSxcclxuXHRcdGNvbnRlbnRzID0gcy5jb250ZW50cyxcclxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xyXG5cclxuXHQvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xyXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xyXG5cdFx0ZGF0YVR5cGVzLnNoaWZ0KCk7XHJcblx0XHRpZiAoIGN0ID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxyXG5cdGlmICggY3QgKSB7XHJcblx0XHRmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xyXG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xyXG5cdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0eXBlICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UgZm9yIHRoZSBleHBlY3RlZCBkYXRhVHlwZVxyXG5cdGlmICggZGF0YVR5cGVzWyAwIF0gaW4gcmVzcG9uc2VzICkge1xyXG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBUcnkgY29udmVydGlibGUgZGF0YVR5cGVzXHJcblx0XHRmb3IgKCB0eXBlIGluIHJlc3BvbnNlcyApIHtcclxuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbMF0gXSApIHtcclxuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xyXG5cdFx0XHRcdGZpcnN0RGF0YVR5cGUgPSB0eXBlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcclxuXHRcdGZpbmFsRGF0YVR5cGUgPSBmaW5hbERhdGFUeXBlIHx8IGZpcnN0RGF0YVR5cGU7XHJcblx0fVxyXG5cclxuXHQvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXHJcblx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcclxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXHJcblx0aWYgKCBmaW5hbERhdGFUeXBlICkge1xyXG5cdFx0aWYgKCBmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbIDAgXSApIHtcclxuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcclxuICogQWxzbyBzZXRzIHRoZSByZXNwb25zZVhYWCBmaWVsZHMgb24gdGhlIGpxWEhSIGluc3RhbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XHJcblx0dmFyIGNvbnYyLCBjdXJyZW50LCBjb252LCB0bXAsIHByZXYsXHJcblx0XHRjb252ZXJ0ZXJzID0ge30sXHJcblx0XHQvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXHJcblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xyXG5cclxuXHQvLyBDcmVhdGUgY29udmVydGVycyBtYXAgd2l0aCBsb3dlcmNhc2VkIGtleXNcclxuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xyXG5cdFx0Zm9yICggY29udiBpbiBzLmNvbnZlcnRlcnMgKSB7XHJcblx0XHRcdGNvbnZlcnRlcnNbIGNvbnYudG9Mb3dlckNhc2UoKSBdID0gcy5jb252ZXJ0ZXJzWyBjb252IF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XHJcblxyXG5cdC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXHJcblx0d2hpbGUgKCBjdXJyZW50ICkge1xyXG5cclxuXHRcdGlmICggcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdICkge1xyXG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxyXG5cdFx0aWYgKCAhcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyICkge1xyXG5cdFx0XHRyZXNwb25zZSA9IHMuZGF0YUZpbHRlciggcmVzcG9uc2UsIHMuZGF0YVR5cGUgKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcmV2ID0gY3VycmVudDtcclxuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcclxuXHJcblx0XHRpZiAoIGN1cnJlbnQgKSB7XHJcblxyXG5cdFx0XHQvLyBUaGVyZSdzIG9ubHkgd29yayB0byBkbyBpZiBjdXJyZW50IGRhdGFUeXBlIGlzIG5vbi1hdXRvXHJcblx0XHRcdGlmICggY3VycmVudCA9PT0gXCIqXCIgKSB7XHJcblxyXG5cdFx0XHRcdGN1cnJlbnQgPSBwcmV2O1xyXG5cclxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxyXG5cdFx0XHR9IGVsc2UgaWYgKCBwcmV2ICE9PSBcIipcIiAmJiBwcmV2ICE9PSBjdXJyZW50ICkge1xyXG5cclxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxyXG5cdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBwcmV2ICsgXCIgXCIgKyBjdXJyZW50IF0gfHwgY29udmVydGVyc1sgXCIqIFwiICsgY3VycmVudCBdO1xyXG5cclxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxyXG5cdFx0XHRcdGlmICggIWNvbnYgKSB7XHJcblx0XHRcdFx0XHRmb3IgKCBjb252MiBpbiBjb252ZXJ0ZXJzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gSWYgY29udjIgb3V0cHV0cyBjdXJyZW50XHJcblx0XHRcdFx0XHRcdHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xyXG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcclxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udmVydGVyc1sgXCIqIFwiICsgdG1wWyAwIF0gXTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBjb252MiBdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGNvbnZlcnRlcnNbIGNvbnYyIF0gIT09IHRydWUgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQgPSB0bXBbIDAgXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxyXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcclxuXHJcblx0XHRcdFx0XHQvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXHJcblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgc1sgXCJ0aHJvd3NcIiBdICkge1xyXG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcclxuXHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgc3RhdGU6IFwicGFyc2VyZXJyb3JcIiwgZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50IH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcclxufVxyXG5cclxualF1ZXJ5LmV4dGVuZCh7XHJcblxyXG5cdC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xyXG5cdGFjdGl2ZTogMCxcclxuXHJcblx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxyXG5cdGxhc3RNb2RpZmllZDoge30sXHJcblx0ZXRhZzoge30sXHJcblxyXG5cdGFqYXhTZXR0aW5nczoge1xyXG5cdFx0dXJsOiBhamF4TG9jYXRpb24sXHJcblx0XHR0eXBlOiBcIkdFVFwiLFxyXG5cdFx0aXNMb2NhbDogcmxvY2FsUHJvdG9jb2wudGVzdCggYWpheExvY1BhcnRzWyAxIF0gKSxcclxuXHRcdGdsb2JhbDogdHJ1ZSxcclxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxyXG5cdFx0YXN5bmM6IHRydWUsXHJcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcclxuXHRcdC8qXHJcblx0XHR0aW1lb3V0OiAwLFxyXG5cdFx0ZGF0YTogbnVsbCxcclxuXHRcdGRhdGFUeXBlOiBudWxsLFxyXG5cdFx0dXNlcm5hbWU6IG51bGwsXHJcblx0XHRwYXNzd29yZDogbnVsbCxcclxuXHRcdGNhY2hlOiBudWxsLFxyXG5cdFx0dGhyb3dzOiBmYWxzZSxcclxuXHRcdHRyYWRpdGlvbmFsOiBmYWxzZSxcclxuXHRcdGhlYWRlcnM6IHt9LFxyXG5cdFx0Ki9cclxuXHJcblx0XHRhY2NlcHRzOiB7XHJcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcclxuXHRcdFx0dGV4dDogXCJ0ZXh0L3BsYWluXCIsXHJcblx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXHJcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXHJcblx0XHRcdGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcclxuXHRcdH0sXHJcblxyXG5cdFx0Y29udGVudHM6IHtcclxuXHRcdFx0eG1sOiAveG1sLyxcclxuXHRcdFx0aHRtbDogL2h0bWwvLFxyXG5cdFx0XHRqc29uOiAvanNvbi9cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVzcG9uc2VGaWVsZHM6IHtcclxuXHRcdFx0eG1sOiBcInJlc3BvbnNlWE1MXCIsXHJcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXHJcblx0XHRcdGpzb246IFwicmVzcG9uc2VKU09OXCJcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gRGF0YSBjb252ZXJ0ZXJzXHJcblx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXHJcblx0XHRjb252ZXJ0ZXJzOiB7XHJcblxyXG5cdFx0XHQvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcclxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxyXG5cclxuXHRcdFx0Ly8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXHJcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXHJcblxyXG5cdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXHJcblx0XHRcdFwidGV4dCBqc29uXCI6IGpRdWVyeS5wYXJzZUpTT04sXHJcblxyXG5cdFx0XHQvLyBQYXJzZSB0ZXh0IGFzIHhtbFxyXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxyXG5cdFx0Ly8geW91IGNhbiBhZGQgeW91ciBvd24gY3VzdG9tIG9wdGlvbnMgaGVyZSBpZlxyXG5cdFx0Ly8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcclxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxyXG5cdFx0ZmxhdE9wdGlvbnM6IHtcclxuXHRcdFx0dXJsOiB0cnVlLFxyXG5cdFx0XHRjb250ZXh0OiB0cnVlXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGZ1bGwgZmxlZGdlZCBzZXR0aW5ncyBvYmplY3QgaW50byB0YXJnZXRcclxuXHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXHJcblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cclxuXHRhamF4U2V0dXA6IGZ1bmN0aW9uKCB0YXJnZXQsIHNldHRpbmdzICkge1xyXG5cdFx0cmV0dXJuIHNldHRpbmdzID9cclxuXHJcblx0XHRcdC8vIEJ1aWxkaW5nIGEgc2V0dGluZ3Mgb2JqZWN0XHJcblx0XHRcdGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcclxuXHJcblx0XHRcdC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3NcclxuXHRcdFx0YWpheEV4dGVuZCggalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0ICk7XHJcblx0fSxcclxuXHJcblx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzICksXHJcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXHJcblxyXG5cdC8vIE1haW4gbWV0aG9kXHJcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcclxuXHJcblx0XHQvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxyXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xyXG5cdFx0XHRvcHRpb25zID0gdXJsO1xyXG5cdFx0XHR1cmwgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3RcclxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuXHRcdHZhciAvLyBDcm9zcy1kb21haW4gZGV0ZWN0aW9uIHZhcnNcclxuXHRcdFx0cGFydHMsXHJcblx0XHRcdC8vIExvb3AgdmFyaWFibGVcclxuXHRcdFx0aSxcclxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxyXG5cdFx0XHRjYWNoZVVSTCxcclxuXHRcdFx0Ly8gUmVzcG9uc2UgaGVhZGVycyBhcyBzdHJpbmdcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxyXG5cdFx0XHQvLyB0aW1lb3V0IGhhbmRsZVxyXG5cdFx0XHR0aW1lb3V0VGltZXIsXHJcblxyXG5cdFx0XHQvLyBUbyBrbm93IGlmIGdsb2JhbCBldmVudHMgYXJlIHRvIGJlIGRpc3BhdGNoZWRcclxuXHRcdFx0ZmlyZUdsb2JhbHMsXHJcblxyXG5cdFx0XHR0cmFuc3BvcnQsXHJcblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzLFxyXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGZpbmFsIG9wdGlvbnMgb2JqZWN0XHJcblx0XHRcdHMgPSBqUXVlcnkuYWpheFNldHVwKCB7fSwgb3B0aW9ucyApLFxyXG5cdFx0XHQvLyBDYWxsYmFja3MgY29udGV4dFxyXG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcclxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxyXG5cdFx0XHRnbG9iYWxFdmVudENvbnRleHQgPSBzLmNvbnRleHQgJiYgKCBjYWxsYmFja0NvbnRleHQubm9kZVR5cGUgfHwgY2FsbGJhY2tDb250ZXh0LmpxdWVyeSApID9cclxuXHRcdFx0XHRqUXVlcnkoIGNhbGxiYWNrQ29udGV4dCApIDpcclxuXHRcdFx0XHRqUXVlcnkuZXZlbnQsXHJcblx0XHRcdC8vIERlZmVycmVkc1xyXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxyXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxyXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xyXG5cdFx0XHRzdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxyXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxyXG5cdFx0XHRyZXF1ZXN0SGVhZGVycyA9IHt9LFxyXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXHJcblx0XHRcdC8vIFRoZSBqcVhIUiBzdGF0ZVxyXG5cdFx0XHRzdGF0ZSA9IDAsXHJcblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxyXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcclxuXHRcdFx0Ly8gRmFrZSB4aHJcclxuXHRcdFx0anFYSFIgPSB7XHJcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcclxuXHJcblx0XHRcdFx0Ly8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxyXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xyXG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xyXG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSA9PT0gMiApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkpICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpIF0gPSBtYXRjaFsgMiBdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1sga2V5LnRvTG93ZXJDYXNlKCkgXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBtYXRjaCA9PSBudWxsID8gbnVsbCA6IG1hdGNoO1xyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdC8vIFJhdyBzdHJpbmdcclxuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlID09PSAyID8gcmVzcG9uc2VIZWFkZXJzU3RyaW5nIDogbnVsbDtcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHQvLyBDYWNoZXMgdGhlIGhlYWRlclxyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcclxuXHRcdFx0XHRcdHZhciBsbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRcdGlmICggIXN0YXRlICkge1xyXG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbG5hbWUgXSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbIGxuYW1lIF0gfHwgbmFtZTtcclxuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0Ly8gT3ZlcnJpZGVzIHJlc3BvbnNlIGNvbnRlbnQtdHlwZSBoZWFkZXJcclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcclxuXHRcdFx0XHRcdGlmICggIXN0YXRlICkge1xyXG5cdFx0XHRcdFx0XHRzLm1pbWVUeXBlID0gdHlwZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXHJcblx0XHRcdFx0c3RhdHVzQ29kZTogZnVuY3Rpb24oIG1hcCApIHtcclxuXHRcdFx0XHRcdHZhciBjb2RlO1xyXG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggc3RhdGUgPCAyICkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFjayBpbiBhIHdheSB0aGF0IHByZXNlcnZlcyBvbGQgb25lc1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzQ29kZVsgY29kZSBdID0gWyBzdGF0dXNDb2RlWyBjb2RlIF0sIG1hcFsgY29kZSBdIF07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xyXG5cdFx0XHRcdFx0XHRcdGpxWEhSLmFsd2F5cyggbWFwWyBqcVhIUi5zdGF0dXMgXSApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHQvLyBDYW5jZWwgdGhlIHJlcXVlc3RcclxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XHJcblx0XHRcdFx0XHR2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcclxuXHRcdFx0XHRcdGlmICggdHJhbnNwb3J0ICkge1xyXG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZG9uZSggMCwgZmluYWxUZXh0ICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0Ly8gQXR0YWNoIGRlZmVycmVkc1xyXG5cdFx0ZGVmZXJyZWQucHJvbWlzZSgganFYSFIgKS5jb21wbGV0ZSA9IGNvbXBsZXRlRGVmZXJyZWQuYWRkO1xyXG5cdFx0anFYSFIuc3VjY2VzcyA9IGpxWEhSLmRvbmU7XHJcblx0XHRqcVhIUi5lcnJvciA9IGpxWEhSLmZhaWw7XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGhhc2ggY2hhcmFjdGVyICgjNzUzMTogYW5kIHN0cmluZyBwcm9tb3Rpb24pXHJcblx0XHQvLyBBZGQgcHJvdG9jb2wgaWYgbm90IHByb3ZpZGVkICgjNTg2NjogSUU3IGlzc3VlIHdpdGggcHJvdG9jb2wtbGVzcyB1cmxzKVxyXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcclxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxyXG5cdFx0cy51cmwgPSAoICggdXJsIHx8IHMudXJsIHx8IGFqYXhMb2NhdGlvbiApICsgXCJcIiApLnJlcGxhY2UoIHJoYXNoLCBcIlwiICkucmVwbGFjZSggcnByb3RvY29sLCBhamF4TG9jUGFydHNbIDEgXSArIFwiLy9cIiApO1xyXG5cclxuXHRcdC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0ICMxMjAwNFxyXG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcclxuXHJcblx0XHQvLyBFeHRyYWN0IGRhdGFUeXBlcyBsaXN0XHJcblx0XHRzLmRhdGFUeXBlcyA9IGpRdWVyeS50cmltKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XHJcblxyXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHdlIGhhdmUgYSBwcm90b2NvbDpob3N0OnBvcnQgbWlzbWF0Y2hcclxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xyXG5cdFx0XHRwYXJ0cyA9IHJ1cmwuZXhlYyggcy51cmwudG9Mb3dlckNhc2UoKSApO1xyXG5cdFx0XHRzLmNyb3NzRG9tYWluID0gISEoIHBhcnRzICYmXHJcblx0XHRcdFx0KCBwYXJ0c1sgMSBdICE9PSBhamF4TG9jUGFydHNbIDEgXSB8fCBwYXJ0c1sgMiBdICE9PSBhamF4TG9jUGFydHNbIDIgXSB8fFxyXG5cdFx0XHRcdFx0KCBwYXJ0c1sgMyBdIHx8ICggcGFydHNbIDEgXSA9PT0gXCJodHRwOlwiID8gXCI4MFwiIDogXCI0NDNcIiApICkgIT09XHJcblx0XHRcdFx0XHRcdCggYWpheExvY1BhcnRzWyAzIF0gfHwgKCBhamF4TG9jUGFydHNbIDEgXSA9PT0gXCJodHRwOlwiID8gXCI4MFwiIDogXCI0NDNcIiApICkgKVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xyXG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiICkge1xyXG5cdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0oIHMuZGF0YSwgcy50cmFkaXRpb25hbCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcclxuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xyXG5cclxuXHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGEgcHJlZmlsdGVyLCBzdG9wIHRoZXJlXHJcblx0XHRpZiAoIHN0YXRlID09PSAyICkge1xyXG5cdFx0XHRyZXR1cm4ganFYSFI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cclxuXHRcdGZpcmVHbG9iYWxzID0gcy5nbG9iYWw7XHJcblxyXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xyXG5cdFx0aWYgKCBmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDAgKSB7XHJcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxyXG5cdFx0cy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG5cdFx0Ly8gRGV0ZXJtaW5lIGlmIHJlcXVlc3QgaGFzIGNvbnRlbnRcclxuXHRcdHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3QoIHMudHlwZSApO1xyXG5cclxuXHRcdC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxyXG5cdFx0Ly8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXHJcblx0XHRjYWNoZVVSTCA9IHMudXJsO1xyXG5cclxuXHRcdC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XHJcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XHJcblxyXG5cdFx0XHQvLyBJZiBkYXRhIGlzIGF2YWlsYWJsZSwgYXBwZW5kIGRhdGEgdG8gdXJsXHJcblx0XHRcdGlmICggcy5kYXRhICkge1xyXG5cdFx0XHRcdGNhY2hlVVJMID0gKCBzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhICk7XHJcblx0XHRcdFx0Ly8gIzk2ODI6IHJlbW92ZSBkYXRhIHNvIHRoYXQgaXQncyBub3QgdXNlZCBpbiBhbiBldmVudHVhbCByZXRyeVxyXG5cdFx0XHRcdGRlbGV0ZSBzLmRhdGE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCBhbnRpLWNhY2hlIGluIHVybCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRzLnVybCA9IHJ0cy50ZXN0KCBjYWNoZVVSTCApID9cclxuXHJcblx0XHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgJ18nIHBhcmFtZXRlciwgc2V0IGl0cyB2YWx1ZVxyXG5cdFx0XHRcdFx0Y2FjaGVVUkwucmVwbGFjZSggcnRzLCBcIiQxXz1cIiArIG5vbmNlKysgKSA6XHJcblxyXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFkZCBvbmUgdG8gdGhlIGVuZFxyXG5cdFx0XHRcdFx0Y2FjaGVVUkwgKyAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgbm9uY2UrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXHJcblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcclxuXHRcdFx0aWYgKCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICkge1xyXG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKSB7XHJcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcclxuXHRcdGlmICggcy5kYXRhICYmIHMuaGFzQ29udGVudCAmJiBzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSB8fCBvcHRpb25zLmNvbnRlbnRUeXBlICkge1xyXG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxyXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcclxuXHRcdFx0XCJBY2NlcHRcIixcclxuXHRcdFx0cy5kYXRhVHlwZXNbIDAgXSAmJiBzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWzBdIF0gP1xyXG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbMF0gXSArICggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XHJcblx0XHRcdFx0cy5hY2NlcHRzWyBcIipcIiBdXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxyXG5cdFx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XHJcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxyXG5cdFx0aWYgKCBzLmJlZm9yZVNlbmQgJiYgKCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBzdGF0ZSA9PT0gMiApICkge1xyXG5cdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cclxuXHRcdFx0cmV0dXJuIGpxWEhSLmFib3J0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXHJcblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcclxuXHJcblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrcyBvbiBkZWZlcnJlZHNcclxuXHRcdGZvciAoIGkgaW4geyBzdWNjZXNzOiAxLCBlcnJvcjogMSwgY29tcGxldGU6IDEgfSApIHtcclxuXHRcdFx0anFYSFJbIGkgXSggc1sgaSBdICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gR2V0IHRyYW5zcG9ydFxyXG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XHJcblxyXG5cdFx0Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XHJcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XHJcblx0XHRcdGRvbmUoIC0xLCBcIk5vIFRyYW5zcG9ydFwiICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcclxuXHJcblx0XHRcdC8vIFNlbmQgZ2xvYmFsIGV2ZW50XHJcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XHJcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheFNlbmRcIiwgWyBqcVhIUiwgcyBdICk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gVGltZW91dFxyXG5cdFx0XHRpZiAoIHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCApIHtcclxuXHRcdFx0XHR0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoXCJ0aW1lb3V0XCIpO1xyXG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHN0YXRlID0gMTtcclxuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcclxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XHJcblx0XHRcdFx0Ly8gUHJvcGFnYXRlIGV4Y2VwdGlvbiBhcyBlcnJvciBpZiBub3QgZG9uZVxyXG5cdFx0XHRcdGlmICggc3RhdGUgPCAyICkge1xyXG5cdFx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcclxuXHRcdFx0XHQvLyBTaW1wbHkgcmV0aHJvdyBvdGhlcndpc2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcclxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xyXG5cdFx0XHR2YXIgaXNTdWNjZXNzLCBzdWNjZXNzLCBlcnJvciwgcmVzcG9uc2UsIG1vZGlmaWVkLFxyXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xyXG5cclxuXHRcdFx0Ly8gQ2FsbGVkIG9uY2VcclxuXHRcdFx0aWYgKCBzdGF0ZSA9PT0gMiApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFN0YXRlIGlzIFwiZG9uZVwiIG5vd1xyXG5cdFx0XHRzdGF0ZSA9IDI7XHJcblxyXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xyXG5cdFx0XHRpZiAoIHRpbWVvdXRUaW1lciApIHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxyXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxyXG5cdFx0XHR0cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXHJcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyA9IGhlYWRlcnMgfHwgXCJcIjtcclxuXHJcblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXHJcblx0XHRcdGpxWEhSLnJlYWR5U3RhdGUgPSBzdGF0dXMgPiAwID8gNCA6IDA7XHJcblxyXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxyXG5cdFx0XHRpc1N1Y2Nlc3MgPSBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNDtcclxuXHJcblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXHJcblx0XHRcdGlmICggcmVzcG9uc2VzICkge1xyXG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXHJcblx0XHRcdHJlc3BvbnNlID0gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICk7XHJcblxyXG5cdFx0XHQvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xyXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcclxuXHJcblx0XHRcdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cclxuXHRcdFx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcclxuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpO1xyXG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIik7XHJcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gaWYgbm8gY29udGVudFxyXG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcclxuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vY29udGVudFwiO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzdGF0dXMgPT09IDMwNCApIHtcclxuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XHJcblxyXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgZGF0YSwgbGV0J3MgY29udmVydCBpdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XHJcblx0XHRcdFx0XHRzdWNjZXNzID0gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0XHRcdGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XHJcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFdlIGV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0XHJcblx0XHRcdFx0Ly8gdGhlbiBub3JtYWxpemUgc3RhdHVzVGV4dCBhbmQgc3RhdHVzIGZvciBub24tYWJvcnRzXHJcblx0XHRcdFx0ZXJyb3IgPSBzdGF0dXNUZXh0O1xyXG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xyXG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwiZXJyb3JcIjtcclxuXHRcdFx0XHRcdGlmICggc3RhdHVzIDwgMCApIHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XHJcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcclxuXHRcdFx0anFYSFIuc3RhdHVzVGV4dCA9ICggbmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0ICkgKyBcIlwiO1xyXG5cclxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxyXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIHN1Y2Nlc3MsIHN0YXR1c1RleHQsIGpxWEhSIF0gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQsIGVycm9yIF0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3NcclxuXHRcdFx0anFYSFIuc3RhdHVzQ29kZSggc3RhdHVzQ29kZSApO1xyXG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcclxuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcclxuXHRcdFx0XHRcdFsganFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvciBdICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIENvbXBsZXRlXHJcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCBdICk7XHJcblxyXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xyXG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhDb21wbGV0ZVwiLCBbIGpxWEhSLCBzIF0gKTtcclxuXHRcdFx0XHQvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xyXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ganFYSFI7XHJcblx0fSxcclxuXHJcblx0Z2V0SlNPTjogZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2sgKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcclxuXHR9LFxyXG5cclxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIiApO1xyXG5cdH1cclxufSk7XHJcblxyXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggaSwgbWV0aG9kICkge1xyXG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcclxuXHRcdC8vIHNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXHJcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBkYXRhICkgKSB7XHJcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xyXG5cdFx0XHRjYWxsYmFjayA9IGRhdGE7XHJcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KHtcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdHN1Y2Nlc3M6IGNhbGxiYWNrXHJcblx0XHR9KTtcclxuXHR9O1xyXG59KTtcclxuXHJcbi8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXHJcbmpRdWVyeS5lYWNoKCBbIFwiYWpheFN0YXJ0XCIsIFwiYWpheFN0b3BcIiwgXCJhamF4Q29tcGxldGVcIiwgXCJhamF4RXJyb3JcIiwgXCJhamF4U3VjY2Vzc1wiLCBcImFqYXhTZW5kXCIgXSwgZnVuY3Rpb24oIGksIHR5cGUgKSB7XHJcblx0alF1ZXJ5LmZuWyB0eXBlIF0gPSBmdW5jdGlvbiggZm4gKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZSwgZm4gKTtcclxuXHR9O1xyXG59KTtcclxuXHJcblxyXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsICkge1xyXG5cdHJldHVybiBqUXVlcnkuYWpheCh7XHJcblx0XHR1cmw6IHVybCxcclxuXHRcdHR5cGU6IFwiR0VUXCIsXHJcblx0XHRkYXRhVHlwZTogXCJzY3JpcHRcIixcclxuXHRcdGFzeW5jOiBmYWxzZSxcclxuXHRcdGdsb2JhbDogZmFsc2UsXHJcblx0XHRcInRocm93c1wiOiB0cnVlXHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxualF1ZXJ5LmZuLmV4dGVuZCh7XHJcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XHJcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBodG1sICkgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGpRdWVyeSh0aGlzKS53cmFwQWxsKCBodG1sLmNhbGwodGhpcywgaSkgKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzWzBdICkge1xyXG5cdFx0XHQvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxyXG5cdFx0XHR2YXIgd3JhcCA9IGpRdWVyeSggaHRtbCwgdGhpc1swXS5vd25lckRvY3VtZW50ICkuZXEoMCkuY2xvbmUodHJ1ZSk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXNbMF0ucGFyZW50Tm9kZSApIHtcclxuXHRcdFx0XHR3cmFwLmluc2VydEJlZm9yZSggdGhpc1swXSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3cmFwLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgZWxlbSA9IHRoaXM7XHJcblxyXG5cdFx0XHRcdHdoaWxlICggZWxlbS5maXJzdENoaWxkICYmIGVsZW0uZmlyc3RDaGlsZC5ub2RlVHlwZSA9PT0gMSApIHtcclxuXHRcdFx0XHRcdGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcclxuXHRcdFx0fSkuYXBwZW5kKCB0aGlzICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0d3JhcElubmVyOiBmdW5jdGlvbiggaHRtbCApIHtcclxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0alF1ZXJ5KHRoaXMpLndyYXBJbm5lciggaHRtbC5jYWxsKHRoaXMsIGkpICk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0galF1ZXJ5KCB0aGlzICksXHJcblx0XHRcdFx0Y29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCk7XHJcblxyXG5cdFx0XHRpZiAoIGNvbnRlbnRzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRjb250ZW50cy53cmFwQWxsKCBodG1sICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNlbGYuYXBwZW5kKCBodG1sICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHdyYXA6IGZ1bmN0aW9uKCBodG1sICkge1xyXG5cdFx0dmFyIGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBpc0Z1bmN0aW9uID8gaHRtbC5jYWxsKHRoaXMsIGkpIDogaHRtbCApO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0dW53cmFwOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggIWpRdWVyeS5ub2RlTmFtZSggdGhpcywgXCJib2R5XCIgKSApIHtcclxuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZXBsYWNlV2l0aCggdGhpcy5jaGlsZE5vZGVzICk7XHJcblx0XHRcdH1cclxuXHRcdH0pLmVuZCgpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxualF1ZXJ5LmV4cHIuZmlsdGVycy5oaWRkZW4gPSBmdW5jdGlvbiggZWxlbSApIHtcclxuXHQvLyBTdXBwb3J0OiBPcGVyYSA8PSAxMi4xMlxyXG5cdC8vIE9wZXJhIHJlcG9ydHMgb2Zmc2V0V2lkdGhzIGFuZCBvZmZzZXRIZWlnaHRzIGxlc3MgdGhhbiB6ZXJvIG9uIHNvbWUgZWxlbWVudHNcclxuXHRyZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCA8PSAwICYmIGVsZW0ub2Zmc2V0SGVpZ2h0IDw9IDAgfHxcclxuXHRcdCghc3VwcG9ydC5yZWxpYWJsZUhpZGRlbk9mZnNldHMoKSAmJlxyXG5cdFx0XHQoKGVsZW0uc3R5bGUgJiYgZWxlbS5zdHlsZS5kaXNwbGF5KSB8fCBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApKSA9PT0gXCJub25lXCIpO1xyXG59O1xyXG5cclxualF1ZXJ5LmV4cHIuZmlsdGVycy52aXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0cmV0dXJuICFqUXVlcnkuZXhwci5maWx0ZXJzLmhpZGRlbiggZWxlbSApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxudmFyIHIyMCA9IC8lMjAvZyxcclxuXHRyYnJhY2tldCA9IC9cXFtcXF0kLyxcclxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXHJcblx0cnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxyXG5cdHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUGFyYW1zKCBwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCApIHtcclxuXHR2YXIgbmFtZTtcclxuXHJcblx0aWYgKCBqUXVlcnkuaXNBcnJheSggb2JqICkgKSB7XHJcblx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cclxuXHRcdGpRdWVyeS5lYWNoKCBvYmosIGZ1bmN0aW9uKCBpLCB2ICkge1xyXG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xyXG5cdFx0XHRcdC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cclxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cclxuXHRcdFx0XHRidWlsZFBhcmFtcyggcHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiID8gaSA6IFwiXCIgKSArIFwiXVwiLCB2LCB0cmFkaXRpb25hbCwgYWRkICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9IGVsc2UgaWYgKCAhdHJhZGl0aW9uYWwgJiYgalF1ZXJ5LnR5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xyXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxyXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XHJcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqWyBuYW1lIF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcclxuXHRcdH1cclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cclxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIFNlcmlhbGl6ZSBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzIG9yIGEgc2V0IG9mXHJcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xyXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XHJcblx0dmFyIHByZWZpeCxcclxuXHRcdHMgPSBbXSxcclxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xyXG5cdFx0XHQvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCBpbnZva2UgaXQgYW5kIHJldHVybiBpdHMgdmFsdWVcclxuXHRcdFx0dmFsdWUgPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSA/IHZhbHVlKCkgOiAoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcclxuXHRcdFx0c1sgcy5sZW5ndGggXSA9IGVuY29kZVVSSUNvbXBvbmVudCgga2V5ICkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCggdmFsdWUgKTtcclxuXHRcdH07XHJcblxyXG5cdC8vIFNldCB0cmFkaXRpb25hbCB0byB0cnVlIGZvciBqUXVlcnkgPD0gMS4zLjIgYmVoYXZpb3IuXHJcblx0aWYgKCB0cmFkaXRpb25hbCA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0dHJhZGl0aW9uYWwgPSBqUXVlcnkuYWpheFNldHRpbmdzICYmIGpRdWVyeS5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWw7XHJcblx0fVxyXG5cclxuXHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxyXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XHJcblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcclxuXHRcdGpRdWVyeS5lYWNoKCBhLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0YWRkKCB0aGlzLm5hbWUsIHRoaXMudmFsdWUgKTtcclxuXHRcdH0pO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcclxuXHRcdC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxyXG5cdFx0Zm9yICggcHJlZml4IGluIGEgKSB7XHJcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXHJcblx0cmV0dXJuIHMuam9pbiggXCImXCIgKS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XHJcbn07XHJcblxyXG5qUXVlcnkuZm4uZXh0ZW5kKHtcclxuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5wYXJhbSggdGhpcy5zZXJpYWxpemVBcnJheSgpICk7XHJcblx0fSxcclxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcclxuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KCBlbGVtZW50cyApIDogdGhpcztcclxuXHRcdH0pXHJcblx0XHQuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcclxuXHRcdFx0Ly8gVXNlIC5pcyhcIjpkaXNhYmxlZFwiKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXHJcblx0XHRcdFx0cnN1Ym1pdHRhYmxlLnRlc3QoIHRoaXMubm9kZU5hbWUgKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QoIHR5cGUgKSAmJlxyXG5cdFx0XHRcdCggdGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KCB0eXBlICkgKTtcclxuXHRcdH0pXHJcblx0XHQubWFwKGZ1bmN0aW9uKCBpLCBlbGVtICkge1xyXG5cdFx0XHR2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdmFsID09IG51bGwgP1xyXG5cdFx0XHRcdG51bGwgOlxyXG5cdFx0XHRcdGpRdWVyeS5pc0FycmF5KCB2YWwgKSA/XHJcblx0XHRcdFx0XHRqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XHJcblx0XHRcdFx0XHR9KSA6XHJcblx0XHRcdFx0XHR7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XHJcblx0XHR9KS5nZXQoKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbi8vIENyZWF0ZSB0aGUgcmVxdWVzdCBvYmplY3RcclxuLy8gKFRoaXMgaXMgc3RpbGwgYXR0YWNoZWQgdG8gYWpheFNldHRpbmdzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxyXG5qUXVlcnkuYWpheFNldHRpbmdzLnhociA9IHdpbmRvdy5BY3RpdmVYT2JqZWN0ICE9PSB1bmRlZmluZWQgP1xyXG5cdC8vIFN1cHBvcnQ6IElFNitcclxuXHRmdW5jdGlvbigpIHtcclxuXHJcblx0XHQvLyBYSFIgY2Fubm90IGFjY2VzcyBsb2NhbCBmaWxlcywgYWx3YXlzIHVzZSBBY3RpdmVYIGZvciB0aGF0IGNhc2VcclxuXHRcdHJldHVybiAhdGhpcy5pc0xvY2FsICYmXHJcblxyXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTctOFxyXG5cdFx0XHQvLyBvbGRJRSBYSFIgZG9lcyBub3Qgc3VwcG9ydCBub24tUkZDMjYxNiBtZXRob2RzICgjMTMyNDApXHJcblx0XHRcdC8vIFNlZSBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvbXM1MzY2NDgodj12cy44NSkuYXNweFxyXG5cdFx0XHQvLyBhbmQgaHR0cDovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWM5Lmh0bWwjc2VjOVxyXG5cdFx0XHQvLyBBbHRob3VnaCB0aGlzIGNoZWNrIGZvciBzaXggbWV0aG9kcyBpbnN0ZWFkIG9mIGVpZ2h0XHJcblx0XHRcdC8vIHNpbmNlIElFIGFsc28gZG9lcyBub3Qgc3VwcG9ydCBcInRyYWNlXCIgYW5kIFwiY29ubmVjdFwiXHJcblx0XHRcdC9eKGdldHxwb3N0fGhlYWR8cHV0fGRlbGV0ZXxvcHRpb25zKSQvaS50ZXN0KCB0aGlzLnR5cGUgKSAmJlxyXG5cclxuXHRcdFx0Y3JlYXRlU3RhbmRhcmRYSFIoKSB8fCBjcmVhdGVBY3RpdmVYSFIoKTtcclxuXHR9IDpcclxuXHQvLyBGb3IgYWxsIG90aGVyIGJyb3dzZXJzLCB1c2UgdGhlIHN0YW5kYXJkIFhNTEh0dHBSZXF1ZXN0IG9iamVjdFxyXG5cdGNyZWF0ZVN0YW5kYXJkWEhSO1xyXG5cclxudmFyIHhocklkID0gMCxcclxuXHR4aHJDYWxsYmFja3MgPSB7fSxcclxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xyXG5cclxuLy8gU3VwcG9ydDogSUU8MTBcclxuLy8gT3BlbiByZXF1ZXN0cyBtdXN0IGJlIG1hbnVhbGx5IGFib3J0ZWQgb24gdW5sb2FkICgjNTI4MClcclxuaWYgKCB3aW5kb3cuQWN0aXZlWE9iamVjdCApIHtcclxuXHRqUXVlcnkoIHdpbmRvdyApLm9uKCBcInVubG9hZFwiLCBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAoIHZhciBrZXkgaW4geGhyQ2FsbGJhY2tzICkge1xyXG5cdFx0XHR4aHJDYWxsYmFja3NbIGtleSBdKCB1bmRlZmluZWQsIHRydWUgKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gRGV0ZXJtaW5lIHN1cHBvcnQgcHJvcGVydGllc1xyXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XHJcbnhoclN1cHBvcnRlZCA9IHN1cHBvcnQuYWpheCA9ICEheGhyU3VwcG9ydGVkO1xyXG5cclxuLy8gQ3JlYXRlIHRyYW5zcG9ydCBpZiB0aGUgYnJvd3NlciBjYW4gcHJvdmlkZSBhbiB4aHJcclxuaWYgKCB4aHJTdXBwb3J0ZWQgKSB7XHJcblxyXG5cdGpRdWVyeS5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxyXG5cdFx0aWYgKCAhb3B0aW9ucy5jcm9zc0RvbWFpbiB8fCBzdXBwb3J0LmNvcnMgKSB7XHJcblxyXG5cdFx0XHR2YXIgY2FsbGJhY2s7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcclxuXHRcdFx0XHRcdHZhciBpLFxyXG5cdFx0XHRcdFx0XHR4aHIgPSBvcHRpb25zLnhocigpLFxyXG5cdFx0XHRcdFx0XHRpZCA9ICsreGhySWQ7XHJcblxyXG5cdFx0XHRcdFx0Ly8gT3BlbiB0aGUgc29ja2V0XHJcblx0XHRcdFx0XHR4aHIub3Blbiggb3B0aW9ucy50eXBlLCBvcHRpb25zLnVybCwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZCApO1xyXG5cclxuXHRcdFx0XHRcdC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcclxuXHRcdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoIGkgaW4gb3B0aW9ucy54aHJGaWVsZHMgKSB7XHJcblx0XHRcdFx0XHRcdFx0eGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxyXG5cdFx0XHRcdFx0aWYgKCBvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlICkge1xyXG5cdFx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFgtUmVxdWVzdGVkLVdpdGggaGVhZGVyXHJcblx0XHRcdFx0XHQvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXHJcblx0XHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxyXG5cdFx0XHRcdFx0Ly8gKGl0IGNhbiBhbHdheXMgYmUgc2V0IG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgb3IgZXZlbiB1c2luZyBhamF4U2V0dXApXHJcblx0XHRcdFx0XHQvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cclxuXHRcdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdICkge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJzW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBTZXQgaGVhZGVyc1xyXG5cdFx0XHRcdFx0Zm9yICggaSBpbiBoZWFkZXJzICkge1xyXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRTw5XHJcblx0XHRcdFx0XHRcdC8vIElFJ3MgQWN0aXZlWE9iamVjdCB0aHJvd3MgYSAnVHlwZSBNaXNtYXRjaCcgZXhjZXB0aW9uIHdoZW4gc2V0dGluZ1xyXG5cdFx0XHRcdFx0XHQvLyByZXF1ZXN0IGhlYWRlciB0byBhIG51bGwtdmFsdWUuXHJcblx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdC8vIFRvIGtlZXAgY29uc2lzdGVudCB3aXRoIG90aGVyIFhIUiBpbXBsZW1lbnRhdGlvbnMsIGNhc3QgdGhlIHZhbHVlXHJcblx0XHRcdFx0XHRcdC8vIHRvIHN0cmluZyBhbmQgaWdub3JlIGB1bmRlZmluZWRgLlxyXG5cdFx0XHRcdFx0XHRpZiAoIGhlYWRlcnNbIGkgXSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBoZWFkZXJzWyBpIF0gKyBcIlwiICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBEbyBzZW5kIHRoZSByZXF1ZXN0XHJcblx0XHRcdFx0XHQvLyBUaGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24gd2hpY2ggaXMgYWN0dWFsbHlcclxuXHRcdFx0XHRcdC8vIGhhbmRsZWQgaW4galF1ZXJ5LmFqYXggKHNvIG5vIHRyeS9jYXRjaCBoZXJlKVxyXG5cdFx0XHRcdFx0eGhyLnNlbmQoICggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSApIHx8IG51bGwgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBMaXN0ZW5lclxyXG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggXywgaXNBYm9ydCApIHtcclxuXHRcdFx0XHRcdFx0dmFyIHN0YXR1cywgc3RhdHVzVGV4dCwgcmVzcG9uc2VzO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gV2FzIG5ldmVyIGNhbGxlZCBhbmQgaXMgYWJvcnRlZCBvciBjb21wbGV0ZVxyXG5cdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICYmICggaXNBYm9ydCB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gNCApICkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIENsZWFuIHVwXHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHhockNhbGxiYWNrc1sgaWQgXTtcclxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0galF1ZXJ5Lm5vb3A7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIEFib3J0IG1hbnVhbGx5IGlmIG5lZWRlZFxyXG5cdFx0XHRcdFx0XHRcdGlmICggaXNBYm9ydCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICggeGhyLnJlYWR5U3RhdGUgIT09IDQgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5hYm9ydCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZXMgPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXR1cyA9IHhoci5zdGF0dXM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8MTBcclxuXHRcdFx0XHRcdFx0XHRcdC8vIEFjY2Vzc2luZyBiaW5hcnktZGF0YSByZXNwb25zZVRleHQgdGhyb3dzIGFuIGV4Y2VwdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gKCMxMTQyNilcclxuXHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHhoci5yZXNwb25zZVRleHQgPT09IFwic3RyaW5nXCIgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlcy50ZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBGaXJlZm94IHRocm93cyBhbiBleGNlcHRpb24gd2hlbiBhY2Nlc3NpbmdcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHN0YXR1c1RleHQgZm9yIGZhdWx0eSBjcm9zcy1kb21haW4gcmVxdWVzdHNcclxuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dDtcclxuXHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2goIGUgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFdlIG5vcm1hbGl6ZSB3aXRoIFdlYmtpdCBnaXZpbmcgYW4gZW1wdHkgc3RhdHVzVGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBGaWx0ZXIgc3RhdHVzIGZvciBub24gc3RhbmRhcmQgYmVoYXZpb3JzXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHJlcXVlc3QgaXMgbG9jYWwgYW5kIHdlIGhhdmUgZGF0YTogYXNzdW1lIGEgc3VjY2Vzc1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gKHN1Y2Nlc3Mgd2l0aCBubyBkYXRhIHdvbid0IGdldCBub3RpZmllZCwgdGhhdCdzIHRoZSBiZXN0IHdlXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjYW4gZG8gZ2l2ZW4gY3VycmVudCBpbXBsZW1lbnRhdGlvbnMpXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoICFzdGF0dXMgJiYgb3B0aW9ucy5pc0xvY2FsICYmICFvcHRpb25zLmNyb3NzRG9tYWluICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXMgPSByZXNwb25zZXMudGV4dCA/IDIwMCA6IDQwNDtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIElFIC0gIzE0NTA6IHNvbWV0aW1lcyByZXR1cm5zIDEyMjMgd2hlbiBpdCBzaG91bGQgYmUgMjA0XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBzdGF0dXMgPT09IDEyMjMgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1cyA9IDIwNDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIENhbGwgY29tcGxldGUgaWYgbmVlZGVkXHJcblx0XHRcdFx0XHRcdGlmICggcmVzcG9uc2VzICkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlKCBzdGF0dXMsIHN0YXR1c1RleHQsIHJlc3BvbnNlcywgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAhb3B0aW9ucy5hc3luYyApIHtcclxuXHRcdFx0XHRcdFx0Ly8gaWYgd2UncmUgaW4gc3luYyBtb2RlIHdlIGZpcmUgdGhlIGNhbGxiYWNrXHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCB4aHIucmVhZHlTdGF0ZSA9PT0gNCApIHtcclxuXHRcdFx0XHRcdFx0Ly8gKElFNiAmIElFNykgaWYgaXQncyBpbiBjYWNoZSBhbmQgaGFzIGJlZW5cclxuXHRcdFx0XHRcdFx0Ly8gcmV0cmlldmVkIGRpcmVjdGx5IHdlIG5lZWQgdG8gZmlyZSB0aGUgY2FsbGJhY2tcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggY2FsbGJhY2sgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIEFkZCB0byB0aGUgbGlzdCBvZiBhY3RpdmUgeGhyIGNhbGxiYWNrc1xyXG5cdFx0XHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0geGhyQ2FsbGJhY2tzWyBpZCBdID0gY2FsbGJhY2s7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2soIHVuZGVmaW5lZCwgdHJ1ZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb25zIHRvIGNyZWF0ZSB4aHJzXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YW5kYXJkWEhSKCkge1xyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG5cdH0gY2F0Y2goIGUgKSB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBY3RpdmVYSFIoKSB7XHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBuZXcgd2luZG93LkFjdGl2ZVhPYmplY3QoIFwiTWljcm9zb2Z0LlhNTEhUVFBcIiApO1xyXG5cdH0gY2F0Y2goIGUgKSB7fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxyXG5qUXVlcnkuYWpheFNldHVwKHtcclxuXHRhY2NlcHRzOiB7XHJcblx0XHRzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxyXG5cdH0sXHJcblx0Y29udGVudHM6IHtcclxuXHRcdHNjcmlwdDogLyg/OmphdmF8ZWNtYSlzY3JpcHQvXHJcblx0fSxcclxuXHRjb252ZXJ0ZXJzOiB7XHJcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xyXG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggdGV4dCApO1xyXG5cdFx0XHRyZXR1cm4gdGV4dDtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gSGFuZGxlIGNhY2hlJ3Mgc3BlY2lhbCBjYXNlIGFuZCBnbG9iYWxcclxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xyXG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0cy5jYWNoZSA9IGZhbHNlO1xyXG5cdH1cclxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XHJcblx0XHRzLnR5cGUgPSBcIkdFVFwiO1xyXG5cdFx0cy5nbG9iYWwgPSBmYWxzZTtcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XHJcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbihzKSB7XHJcblxyXG5cdC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gcmVxdWVzdHNcclxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XHJcblxyXG5cdFx0dmFyIHNjcmlwdCxcclxuXHRcdFx0aGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgalF1ZXJ5KFwiaGVhZFwiKVswXSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHJcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBfLCBjYWxsYmFjayApIHtcclxuXHJcblx0XHRcdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcblx0XHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aWYgKCBzLnNjcmlwdENoYXJzZXQgKSB7XHJcblx0XHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9IHMuc2NyaXB0Q2hhcnNldDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjcmlwdC5zcmMgPSBzLnVybDtcclxuXHJcblx0XHRcdFx0Ly8gQXR0YWNoIGhhbmRsZXJzIGZvciBhbGwgYnJvd3NlcnNcclxuXHRcdFx0XHRzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCBfLCBpc0Fib3J0ICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggaXNBYm9ydCB8fCAhc2NyaXB0LnJlYWR5U3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdCggc2NyaXB0LnJlYWR5U3RhdGUgKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEhhbmRsZSBtZW1vcnkgbGVhayBpbiBJRVxyXG5cdFx0XHRcdFx0XHRzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIHNjcmlwdFxyXG5cdFx0XHRcdFx0XHRpZiAoIHNjcmlwdC5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRcdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzY3JpcHQgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRGVyZWZlcmVuY2UgdGhlIHNjcmlwdFxyXG5cdFx0XHRcdFx0XHRzY3JpcHQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQ2FsbGJhY2sgaWYgbm90IGFib3J0XHJcblx0XHRcdFx0XHRcdGlmICggIWlzQWJvcnQgKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soIDIwMCwgXCJzdWNjZXNzXCIgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdC8vIENpcmN1bXZlbnQgSUU2IGJ1Z3Mgd2l0aCBiYXNlIGVsZW1lbnRzICgjMjcwOSBhbmQgIzQzNzgpIGJ5IHByZXBlbmRpbmdcclxuXHRcdFx0XHQvLyBVc2UgbmF0aXZlIERPTSBtYW5pcHVsYXRpb24gdG8gYXZvaWQgb3VyIGRvbU1hbmlwIEFKQVggdHJpY2tlcnlcclxuXHRcdFx0XHRoZWFkLmluc2VydEJlZm9yZSggc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQgKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIHNjcmlwdCApIHtcclxuXHRcdFx0XHRcdHNjcmlwdC5vbmxvYWQoIHVuZGVmaW5lZCwgdHJ1ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxudmFyIG9sZENhbGxiYWNrcyA9IFtdLFxyXG5cdHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87XHJcblxyXG4vLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXHJcbmpRdWVyeS5hamF4U2V0dXAoe1xyXG5cdGpzb25wOiBcImNhbGxiYWNrXCIsXHJcblx0anNvbnBDYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZSsrICkgKTtcclxuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xyXG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcclxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIFwianNvbiBqc29ucFwiLCBmdW5jdGlvbiggcywgb3JpZ2luYWxTZXR0aW5ncywganFYSFIgKSB7XHJcblxyXG5cdHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcclxuXHRcdGpzb25Qcm9wID0gcy5qc29ucCAhPT0gZmFsc2UgJiYgKCByanNvbnAudGVzdCggcy51cmwgKSA/XHJcblx0XHRcdFwidXJsXCIgOlxyXG5cdFx0XHR0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmICEoIHMuY29udGVudFR5cGUgfHwgXCJcIiApLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikgJiYgcmpzb25wLnRlc3QoIHMuZGF0YSApICYmIFwiZGF0YVwiXHJcblx0XHQpO1xyXG5cclxuXHQvLyBIYW5kbGUgaWZmIHRoZSBleHBlY3RlZCBkYXRhIHR5cGUgaXMgXCJqc29ucFwiIG9yIHdlIGhhdmUgYSBwYXJhbWV0ZXIgdG8gc2V0XHJcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XHJcblxyXG5cdFx0Ly8gR2V0IGNhbGxiYWNrIG5hbWUsIHJlbWVtYmVyaW5nIHByZWV4aXN0aW5nIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBpdFxyXG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0galF1ZXJ5LmlzRnVuY3Rpb24oIHMuanNvbnBDYWxsYmFjayApID9cclxuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxyXG5cdFx0XHRzLmpzb25wQ2FsbGJhY2s7XHJcblxyXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxyXG5cdFx0aWYgKCBqc29uUHJvcCApIHtcclxuXHRcdFx0c1sganNvblByb3AgXSA9IHNbIGpzb25Qcm9wIF0ucmVwbGFjZSggcmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUgKTtcclxuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xyXG5cdFx0XHRzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBzLnVybCApID8gXCImXCIgOiBcIj9cIiApICsgcy5qc29ucCArIFwiPVwiICsgY2FsbGJhY2tOYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFVzZSBkYXRhIGNvbnZlcnRlciB0byByZXRyaWV2ZSBqc29uIGFmdGVyIHNjcmlwdCBleGVjdXRpb25cclxuXHRcdHMuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggIXJlc3BvbnNlQ29udGFpbmVyICkge1xyXG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXNwb25zZUNvbnRhaW5lclsgMCBdO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBmb3JjZSBqc29uIGRhdGFUeXBlXHJcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XHJcblxyXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja1xyXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xyXG5cdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXHJcblx0XHRqcVhIUi5hbHdheXMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIFJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcclxuXHRcdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IG92ZXJ3cml0dGVuO1xyXG5cclxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcclxuXHRcdFx0aWYgKCBzWyBjYWxsYmFja05hbWUgXSApIHtcclxuXHRcdFx0XHQvLyBtYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcclxuXHRcdFx0XHRzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7XHJcblxyXG5cdFx0XHRcdC8vIHNhdmUgdGhlIGNhbGxiYWNrIG5hbWUgZm9yIGZ1dHVyZSB1c2VcclxuXHRcdFx0XHRvbGRDYWxsYmFja3MucHVzaCggY2FsbGJhY2tOYW1lICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxyXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCBvdmVyd3JpdHRlbiApICkge1xyXG5cdFx0XHRcdG92ZXJ3cml0dGVuKCByZXNwb25zZUNvbnRhaW5lclsgMCBdICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gb3ZlcndyaXR0ZW4gPSB1bmRlZmluZWQ7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcclxuXHRcdHJldHVybiBcInNjcmlwdFwiO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBkYXRhOiBzdHJpbmcgb2YgaHRtbFxyXG4vLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsIGRlZmF1bHRzIHRvIGRvY3VtZW50XHJcbi8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcclxualF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uKCBkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cyApIHtcclxuXHRpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwiYm9vbGVhblwiICkge1xyXG5cdFx0a2VlcFNjcmlwdHMgPSBjb250ZXh0O1xyXG5cdFx0Y29udGV4dCA9IGZhbHNlO1xyXG5cdH1cclxuXHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcclxuXHJcblx0dmFyIHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyggZGF0YSApLFxyXG5cdFx0c2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcclxuXHJcblx0Ly8gU2luZ2xlIHRhZ1xyXG5cdGlmICggcGFyc2VkICkge1xyXG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbMV0gKSBdO1xyXG5cdH1cclxuXHJcblx0cGFyc2VkID0galF1ZXJ5LmJ1aWxkRnJhZ21lbnQoIFsgZGF0YSBdLCBjb250ZXh0LCBzY3JpcHRzICk7XHJcblxyXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcclxuXHRcdGpRdWVyeSggc2NyaXB0cyApLnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIHBhcnNlZC5jaGlsZE5vZGVzICk7XHJcbn07XHJcblxyXG5cclxuLy8gS2VlcCBhIGNvcHkgb2YgdGhlIG9sZCBsb2FkIG1ldGhvZFxyXG52YXIgX2xvYWQgPSBqUXVlcnkuZm4ubG9hZDtcclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXHJcbiAqL1xyXG5qUXVlcnkuZm4ubG9hZCA9IGZ1bmN0aW9uKCB1cmwsIHBhcmFtcywgY2FsbGJhY2sgKSB7XHJcblx0aWYgKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiICYmIF9sb2FkICkge1xyXG5cdFx0cmV0dXJuIF9sb2FkLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHR9XHJcblxyXG5cdHZhciBzZWxlY3RvciwgcmVzcG9uc2UsIHR5cGUsXHJcblx0XHRzZWxmID0gdGhpcyxcclxuXHRcdG9mZiA9IHVybC5pbmRleE9mKFwiIFwiKTtcclxuXHJcblx0aWYgKCBvZmYgPj0gMCApIHtcclxuXHRcdHNlbGVjdG9yID0galF1ZXJ5LnRyaW0oIHVybC5zbGljZSggb2ZmLCB1cmwubGVuZ3RoICkgKTtcclxuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XHJcblx0fVxyXG5cclxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cclxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcclxuXHJcblx0XHQvLyBXZSBhc3N1bWUgdGhhdCBpdCdzIHRoZSBjYWxsYmFja1xyXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XHJcblx0XHRwYXJhbXMgPSB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcclxuXHR9IGVsc2UgaWYgKCBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiApIHtcclxuXHRcdHR5cGUgPSBcIlBPU1RcIjtcclxuXHR9XHJcblxyXG5cdC8vIElmIHdlIGhhdmUgZWxlbWVudHMgdG8gbW9kaWZ5LCBtYWtlIHRoZSByZXF1ZXN0XHJcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRqUXVlcnkuYWpheCh7XHJcblx0XHRcdHVybDogdXJsLFxyXG5cclxuXHRcdFx0Ly8gaWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZFxyXG5cdFx0XHR0eXBlOiB0eXBlLFxyXG5cdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0XHRcdGRhdGE6IHBhcmFtc1xyXG5cdFx0fSkuZG9uZShmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xyXG5cclxuXHRcdFx0Ly8gU2F2ZSByZXNwb25zZSBmb3IgdXNlIGluIGNvbXBsZXRlIGNhbGxiYWNrXHJcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xyXG5cclxuXHRcdFx0c2VsZi5odG1sKCBzZWxlY3RvciA/XHJcblxyXG5cdFx0XHRcdC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxyXG5cdFx0XHRcdC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xyXG5cdFx0XHRcdGpRdWVyeShcIjxkaXY+XCIpLmFwcGVuZCggalF1ZXJ5LnBhcnNlSFRNTCggcmVzcG9uc2VUZXh0ICkgKS5maW5kKCBzZWxlY3RvciApIDpcclxuXHJcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcclxuXHRcdFx0XHRyZXNwb25zZVRleHQgKTtcclxuXHJcblx0XHR9KS5jb21wbGV0ZSggY2FsbGJhY2sgJiYgZnVuY3Rpb24oIGpxWEhSLCBzdGF0dXMgKSB7XHJcblx0XHRcdHNlbGYuZWFjaCggY2FsbGJhY2ssIHJlc3BvbnNlIHx8IFsganFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSIF0gKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZXhwci5maWx0ZXJzLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcblx0cmV0dXJuIGpRdWVyeS5ncmVwKGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uKCBmbiApIHtcclxuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xyXG5cdH0pLmxlbmd0aDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZG9jRWxlbSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4vKipcclxuICogR2V0cyBhIHdpbmRvdyBmcm9tIGFuIGVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIGdldFdpbmRvdyggZWxlbSApIHtcclxuXHRyZXR1cm4galF1ZXJ5LmlzV2luZG93KCBlbGVtICkgP1xyXG5cdFx0ZWxlbSA6XHJcblx0XHRlbGVtLm5vZGVUeXBlID09PSA5ID9cclxuXHRcdFx0ZWxlbS5kZWZhdWx0VmlldyB8fCBlbGVtLnBhcmVudFdpbmRvdyA6XHJcblx0XHRcdGZhbHNlO1xyXG59XHJcblxyXG5qUXVlcnkub2Zmc2V0ID0ge1xyXG5cdHNldE9mZnNldDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGkgKSB7XHJcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxyXG5cdFx0XHRwb3NpdGlvbiA9IGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApLFxyXG5cdFx0XHRjdXJFbGVtID0galF1ZXJ5KCBlbGVtICksXHJcblx0XHRcdHByb3BzID0ge307XHJcblxyXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxyXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcclxuXHRcdFx0ZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHRcdH1cclxuXHJcblx0XHRjdXJPZmZzZXQgPSBjdXJFbGVtLm9mZnNldCgpO1xyXG5cdFx0Y3VyQ1NTVG9wID0galF1ZXJ5LmNzcyggZWxlbSwgXCJ0b3BcIiApO1xyXG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XHJcblx0XHRjYWxjdWxhdGVQb3NpdGlvbiA9ICggcG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiICkgJiZcclxuXHRcdFx0alF1ZXJ5LmluQXJyYXkoXCJhdXRvXCIsIFsgY3VyQ1NTVG9wLCBjdXJDU1NMZWZ0IF0gKSA+IC0xO1xyXG5cclxuXHRcdC8vIG5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxyXG5cdFx0aWYgKCBjYWxjdWxhdGVQb3NpdGlvbiApIHtcclxuXHRcdFx0Y3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XHJcblx0XHRcdGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcclxuXHRcdFx0Y3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjdXJUb3AgPSBwYXJzZUZsb2F0KCBjdXJDU1NUb3AgKSB8fCAwO1xyXG5cdFx0XHRjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggb3B0aW9ucyApICkge1xyXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBjdXJPZmZzZXQgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XHJcblx0XHRcdHByb3BzLnRvcCA9ICggb3B0aW9ucy50b3AgLSBjdXJPZmZzZXQudG9wICkgKyBjdXJUb3A7XHJcblx0XHR9XHJcblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xyXG5cdFx0XHRwcm9wcy5sZWZ0ID0gKCBvcHRpb25zLmxlZnQgLSBjdXJPZmZzZXQubGVmdCApICsgY3VyTGVmdDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIFwidXNpbmdcIiBpbiBvcHRpb25zICkge1xyXG5cdFx0XHRvcHRpb25zLnVzaW5nLmNhbGwoIGVsZW0sIHByb3BzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5qUXVlcnkuZm4uZXh0ZW5kKHtcclxuXHRvZmZzZXQ6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cclxuXHRcdFx0XHR0aGlzIDpcclxuXHRcdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oIGkgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkub2Zmc2V0LnNldE9mZnNldCggdGhpcywgb3B0aW9ucywgaSApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkb2NFbGVtLCB3aW4sXHJcblx0XHRcdGJveCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH0sXHJcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXHJcblx0XHRcdGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuXHRcdGlmICggIWRvYyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuXHRcdC8vIE1ha2Ugc3VyZSBpdCdzIG5vdCBhIGRpc2Nvbm5lY3RlZCBET00gbm9kZVxyXG5cdFx0aWYgKCAhalF1ZXJ5LmNvbnRhaW5zKCBkb2NFbGVtLCBlbGVtICkgKSB7XHJcblx0XHRcdHJldHVybiBib3g7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWYgd2UgZG9uJ3QgaGF2ZSBnQkNSLCBqdXN0IHVzZSAwLDAgcmF0aGVyIHRoYW4gZXJyb3JcclxuXHRcdC8vIEJsYWNrQmVycnkgNSwgaU9TIDMgKG9yaWdpbmFsIGlQaG9uZSlcclxuXHRcdGlmICggdHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSBzdHJ1bmRlZmluZWQgKSB7XHJcblx0XHRcdGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR9XHJcblx0XHR3aW4gPSBnZXRXaW5kb3coIGRvYyApO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dG9wOiBib3gudG9wICArICggd2luLnBhZ2VZT2Zmc2V0IHx8IGRvY0VsZW0uc2Nyb2xsVG9wICkgIC0gKCBkb2NFbGVtLmNsaWVudFRvcCAgfHwgMCApLFxyXG5cdFx0XHRsZWZ0OiBib3gubGVmdCArICggd2luLnBhZ2VYT2Zmc2V0IHx8IGRvY0VsZW0uc2Nyb2xsTGVmdCApIC0gKCBkb2NFbGVtLmNsaWVudExlZnQgfHwgMCApXHJcblx0XHR9O1xyXG5cdH0sXHJcblxyXG5cdHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICggIXRoaXNbIDAgXSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBvZmZzZXRQYXJlbnQsIG9mZnNldCxcclxuXHRcdFx0cGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcclxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcclxuXHJcblx0XHQvLyBmaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LCBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcclxuXHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICkgPT09IFwiZml4ZWRcIiApIHtcclxuXHRcdFx0Ly8gd2UgYXNzdW1lIHRoYXQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGF2YWlsYWJsZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXHJcblx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxyXG5cdFx0XHRvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpO1xyXG5cclxuXHRcdFx0Ly8gR2V0IGNvcnJlY3Qgb2Zmc2V0c1xyXG5cdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xyXG5cdFx0XHRpZiAoICFqUXVlcnkubm9kZU5hbWUoIG9mZnNldFBhcmVudFsgMCBdLCBcImh0bWxcIiApICkge1xyXG5cdFx0XHRcdHBhcmVudE9mZnNldCA9IG9mZnNldFBhcmVudC5vZmZzZXQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXHJcblx0XHRcdHBhcmVudE9mZnNldC50b3AgICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudFsgMCBdLCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUgKTtcclxuXHRcdFx0cGFyZW50T2Zmc2V0LmxlZnQgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50WyAwIF0sIFwiYm9yZGVyTGVmdFdpZHRoXCIsIHRydWUgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXHJcblx0XHQvLyBub3RlOiB3aGVuIGFuIGVsZW1lbnQgaGFzIG1hcmdpbjogYXV0byB0aGUgb2Zmc2V0TGVmdCBhbmQgbWFyZ2luTGVmdFxyXG5cdFx0Ly8gYXJlIHRoZSBzYW1lIGluIFNhZmFyaSBjYXVzaW5nIG9mZnNldC5sZWZ0IHRvIGluY29ycmVjdGx5IGJlIDBcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRvcDogIG9mZnNldC50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcclxuXHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlKVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHRvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcclxuXHJcblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmICggIWpRdWVyeS5ub2RlTmFtZSggb2Zmc2V0UGFyZW50LCBcImh0bWxcIiApICYmIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSApIHtcclxuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcclxualF1ZXJ5LmVhY2goIHsgc2Nyb2xsTGVmdDogXCJwYWdlWE9mZnNldFwiLCBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIiB9LCBmdW5jdGlvbiggbWV0aG9kLCBwcm9wICkge1xyXG5cdHZhciB0b3AgPSAvWS8udGVzdCggcHJvcCApO1xyXG5cclxuXHRqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcclxuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBtZXRob2QsIHZhbCApIHtcclxuXHRcdFx0dmFyIHdpbiA9IGdldFdpbmRvdyggZWxlbSApO1xyXG5cclxuXHRcdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRyZXR1cm4gd2luID8gKHByb3AgaW4gd2luKSA/IHdpblsgcHJvcCBdIDpcclxuXHRcdFx0XHRcdHdpbi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbIG1ldGhvZCBdIDpcclxuXHRcdFx0XHRcdGVsZW1bIG1ldGhvZCBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHdpbiApIHtcclxuXHRcdFx0XHR3aW4uc2Nyb2xsVG8oXHJcblx0XHRcdFx0XHQhdG9wID8gdmFsIDogalF1ZXJ5KCB3aW4gKS5zY3JvbGxMZWZ0KCksXHJcblx0XHRcdFx0XHR0b3AgPyB2YWwgOiBqUXVlcnkoIHdpbiApLnNjcm9sbFRvcCgpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZWxlbVsgbWV0aG9kIF0gPSB2YWw7XHJcblx0XHRcdH1cclxuXHRcdH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoLCBudWxsICk7XHJcblx0fTtcclxufSk7XHJcblxyXG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxyXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcclxuLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodFxyXG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwgd2UganVzdCBjaGVjayBmb3IgaXQgaGVyZVxyXG5qUXVlcnkuZWFjaCggWyBcInRvcFwiLCBcImxlZnRcIiBdLCBmdW5jdGlvbiggaSwgcHJvcCApIHtcclxuXHRqUXVlcnkuY3NzSG9va3NbIHByb3AgXSA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5waXhlbFBvc2l0aW9uLFxyXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xyXG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xyXG5cdFx0XHRcdGNvbXB1dGVkID0gY3VyQ1NTKCBlbGVtLCBwcm9wICk7XHJcblx0XHRcdFx0Ly8gaWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XHJcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cclxuXHRcdFx0XHRcdGpRdWVyeSggZWxlbSApLnBvc2l0aW9uKClbIHByb3AgXSArIFwicHhcIiA6XHJcblx0XHRcdFx0XHRjb21wdXRlZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xyXG5qUXVlcnkuZWFjaCggeyBIZWlnaHQ6IFwiaGVpZ2h0XCIsIFdpZHRoOiBcIndpZHRoXCIgfSwgZnVuY3Rpb24oIG5hbWUsIHR5cGUgKSB7XHJcblx0alF1ZXJ5LmVhY2goIHsgcGFkZGluZzogXCJpbm5lclwiICsgbmFtZSwgY29udGVudDogdHlwZSwgXCJcIjogXCJvdXRlclwiICsgbmFtZSB9LCBmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcclxuXHRcdC8vIG1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxyXG5cdFx0alF1ZXJ5LmZuWyBmdW5jTmFtZSBdID0gZnVuY3Rpb24oIG1hcmdpbiwgdmFsdWUgKSB7XHJcblx0XHRcdHZhciBjaGFpbmFibGUgPSBhcmd1bWVudHMubGVuZ3RoICYmICggZGVmYXVsdEV4dHJhIHx8IHR5cGVvZiBtYXJnaW4gIT09IFwiYm9vbGVhblwiICksXHJcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIHR5cGUsIHZhbHVlICkge1xyXG5cdFx0XHRcdHZhciBkb2M7XHJcblxyXG5cdFx0XHRcdGlmICggalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XHJcblx0XHRcdFx0XHQvLyBBcyBvZiA1LzgvMjAxMiB0aGlzIHdpbGwgeWllbGQgaW5jb3JyZWN0IHJlc3VsdHMgZm9yIE1vYmlsZSBTYWZhcmksIGJ1dCB0aGVyZVxyXG5cdFx0XHRcdFx0Ly8gaXNuJ3QgYSB3aG9sZSBsb3Qgd2UgY2FuIGRvLiBTZWUgcHVsbCByZXF1ZXN0IGF0IHRoaXMgVVJMIGZvciBkaXNjdXNzaW9uOlxyXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC83NjRcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFsgXCJjbGllbnRcIiArIG5hbWUgXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcclxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XHJcblx0XHRcdFx0XHRkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sIHdoaWNoZXZlciBpcyBncmVhdGVzdFxyXG5cdFx0XHRcdFx0Ly8gdW5mb3J0dW5hdGVseSwgdGhpcyBjYXVzZXMgYnVnICMzODM4IGluIElFNi84IG9ubHksIGJ1dCB0aGVyZSBpcyBjdXJyZW50bHkgbm8gZ29vZCwgc21hbGwgd2F5IHRvIGZpeCBpdC5cclxuXHRcdFx0XHRcdHJldHVybiBNYXRoLm1heChcclxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXHJcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJvZmZzZXRcIiArIG5hbWUgXSwgZG9jWyBcIm9mZnNldFwiICsgbmFtZSBdLFxyXG5cdFx0XHRcdFx0XHRkb2NbIFwiY2xpZW50XCIgKyBuYW1lIF1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XHJcblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XHJcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCB0eXBlLCBleHRyYSApIDpcclxuXHJcblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSApO1xyXG5cdFx0XHR9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSwgbnVsbCApO1xyXG5cdFx0fTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuLy8gVGhlIG51bWJlciBvZiBlbGVtZW50cyBjb250YWluZWQgaW4gdGhlIG1hdGNoZWQgZWxlbWVudCBzZXRcclxualF1ZXJ5LmZuLnNpemUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5sZW5ndGg7XHJcbn07XHJcblxyXG5qUXVlcnkuZm4uYW5kU2VsZiA9IGpRdWVyeS5mbi5hZGRCYWNrO1xyXG5cclxuXHJcblxyXG5cclxuLy8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXHJcbi8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcclxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XHJcbi8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcclxuLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXHJcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xyXG4vLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXHJcblxyXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxyXG4vLyBkZWNsYXJlIHRoZW1zZWx2ZXMgYXMgYW5vbnltb3VzIG1vZHVsZXMsIGFuZCBhdm9pZCBzZXR0aW5nIGEgZ2xvYmFsIGlmIGFuXHJcbi8vIEFNRCBsb2FkZXIgaXMgcHJlc2VudC4galF1ZXJ5IGlzIGEgc3BlY2lhbCBjYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cclxuXHJcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XHJcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4galF1ZXJ5O1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG52YXJcclxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcclxuXHRfalF1ZXJ5ID0gd2luZG93LmpRdWVyeSxcclxuXHJcblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcclxuXHRfJCA9IHdpbmRvdy4kO1xyXG5cclxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcclxuXHRpZiAoIHdpbmRvdy4kID09PSBqUXVlcnkgKSB7XHJcblx0XHR3aW5kb3cuJCA9IF8kO1xyXG5cdH1cclxuXHJcblx0aWYgKCBkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSApIHtcclxuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGpRdWVyeTtcclxufTtcclxuXHJcbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW5cclxuLy8gQU1EICgjNzEwMiNjb21tZW50OjEwLCBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzU1NylcclxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxyXG5pZiAoIHR5cGVvZiBub0dsb2JhbCA9PT0gc3RydW5kZWZpbmVkICkge1xyXG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG5cclxucmV0dXJuIGpRdWVyeTtcclxuXHJcbn0pKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZW50cnkvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm51bGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2VudHJ5L2lubmVyL21haW4yLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzEwLzMxLlxyXG4gKi9cclxuZGVmaW5lKGZ1bmN0aW9uKCkge1xyXG5cdGNvbnNvbGUubG9nKCdoZWxsbyBtYWluMi5qcycpO1xyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vZW50cnkvaW5uZXIvbWFpbjIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibnVsbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvZW50cnkvbWFpbjMuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTYvMTAvMzEuXHJcbiAqL1xyXG5kZWZpbmUoZnVuY3Rpb24oKSB7XHJcblx0Y29uc29sZS5sb2coJ2hlbGxvIG1haW4zLmpzJyk7XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9lbnRyeS9tYWluMy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9