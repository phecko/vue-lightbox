(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Lightbox"] = factory();
	else
		root["Lightbox"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(30)
  , toPrimitive    = __webpack_require__(24)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(55)
  , defined = __webpack_require__(14);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(3)
  , createDesc = __webpack_require__(12);
module.exports = __webpack_require__(1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(22)('wks')
  , uid        = __webpack_require__(13)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(35)
  , enumBugKeys = __webpack_require__(15);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(52)
  , hide      = __webpack_require__(5)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(6)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys')
  , uid    = __webpack_require__(13);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(8)
  , LIBRARY        = __webpack_require__(18)
  , wksExt         = __webpack_require__(26)
  , defineProperty = __webpack_require__(3).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(9)(function(){
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(18)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(36)
  , hide           = __webpack_require__(5)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(17)
  , $iterCreate    = __webpack_require__(57)
  , setToStringTag = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(64)
  , ITERATOR       = __webpack_require__(6)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(7)
  , dPs         = __webpack_require__(61)
  , enumBugKeys = __webpack_require__(15)
  , IE_PROTO    = __webpack_require__(21)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(29)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(35)
  , hiddenKeys = __webpack_require__(15).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(4)
  , arrayIndexOf = __webpack_require__(51)(false)
  , IE_PROTO     = __webpack_require__(21)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(78)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(39);






var getUid = function getUid() {
  return ("" + new Date().getTime() + parseInt(Math.random() * 1000)).toString(32);
};

var getWinWidth = function getWinWidth() {
  return window.innerWidth;
};

var getWinHeight = function getWinHeight() {
  return window.innerHeight;
};

var containerPadding = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10
};
var dataContainerHeight = 40;
var imageBorderWidth = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4
};

var Picture = function Picture(src, caption, showIndex, indexTmpl, clickOverlayHide) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Picture);

  this.src = src;
  this.uid = getUid();
  this.caption = caption;
  this.showIndex = showIndex;
  this.clickOverlayHide = clickOverlayHide;
  this.indexTmpl = indexTmpl;
};

var Album = function () {
  function Album(name) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Album);

    this.name = name;
    this.pictures = [];
  }

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_createClass___default()(Album, [{
    key: "addPicture",
    value: function addPicture(uid) {
      this.pictures.push(uid);
    }
  }, {
    key: "getPictureIndex",
    value: function getPictureIndex(uid) {
      for (var i = 0; i < this.pictures.length; i++) {
        if (this.pictures[i] == uid) {
          return i + 1;
        }
      }
      return 0;
    }
  }, {
    key: "getPicture",
    value: function getPicture(index) {
      if (this.pictures.length < index) {
        return;
      }
      return this.pictures[index - 1];
    }
  }, {
    key: "length",
    value: function length() {
      return this.pictures.length;
    }
  }]);

  return Album;
}();

var ModalManager = {
  zindex: 2000,
  _lightbox: false,
  _overlay: false,
  _outerContainer: false,
  _container: false,
  _nav: false,
  _image: false,
  _loader: false,

  _inited: false,

  _albums: {},
  _pictures: {},
  curAlbum: false,

  init: function init() {
    var self = this;
    if (this._inited) {

      this._image.src = "";
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._loader, "display", "block");
      self.sizeContainer(250, 250);

      return;
    }
    var div = document.createElement("div");
    div.innerHTML = '<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption">这是一张很大大的图片</span><span class="lb-number">1 of 5 images</span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>';
    var divs = div.childNodes;
    var elements = [];
    for (var i = 0; i < divs.length; i++) {
      elements.push(divs[i]);
    }
    var docFrag = document.createDocumentFragment();
    for (var i = 0; i < elements.length; i++) {
      docFrag.appendChild(elements[i]);
    }
    document.body.appendChild(docFrag);

    this._lightbox = document.getElementById("lightbox");
    this._overlay = document.getElementById("lightboxOverlay");
    this._outerContainer = this._lightbox.querySelector(".lb-outerContainer");
    this._container = this._lightbox.querySelector(".lb-container");
    this._image = this._lightbox.querySelector(".lb-image");
    this._nav = this._lightbox.querySelector(".lb-nav");
    this._loader = this._lightbox.querySelector(".lb-loader");

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* on */])(window, "resize", function () {
      self.sizeOverlay();
      self.sizeContainer(self._image.naturalWidth, self._image.naturalHeight);
    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* on */])(this._nav, 'mousedown', function (event) {
      if (event.which === 3) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(self._nav, 'pointer-events', 'none');

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["c" /* once */])(self._lightbox, 'contextmenu', function () {
          setTimeout(function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(self._nav, 'pointer-events', 'auto');
          }, 0);
        });
      }
    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* on */])(this._lightbox.querySelector(".lb-close"), "click", function (event) {
      self.end();
      event.stopPropagation();
    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* on */])(this._nav.querySelector(".lb-prev"), "click", function (event) {
      console.log("wahahah");
      self.changeImage(self.curIndex - 1);
      event.preventDefault();
      event.stopPropagation();
    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* on */])(this._nav.querySelector(".lb-next"), "click", function (event) {
      console.log("wahahah");
      self.changeImage(self.curIndex + 1);
      event.preventDefault();
      event.stopPropagation();
    });

    self.sizeContainer(250, 250);
    this._inited = true;
  },
  start: function start(albumName, uid) {
    this.init();
    var self = this;
    this.sizeOverlay();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* show */])(this._overlay);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* show */])(this._lightbox);
    this.showImage(albumName, uid);
  },
  end: function end() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(ModalManager._overlay);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(ModalManager._lightbox);
  },
  showImage: function showImage(albumName, uid) {

    var pic = this.getPicture(uid);
    var self = this;
    if (!pic) {
      return;
    }
    var $image = this._image;

    if (pic.clickOverlayHide) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* on */])(self._overlay, "click", this.end);
    } else {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["f" /* off */])(self._overlay, "click", this.end);
    }

    var preloader = new Image();
    var navPrev = this._nav.querySelector(".lb-prev");
    var navNext = this._nav.querySelector(".lb-next");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._image, "visibility", "hidden");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* show */])(this._loader);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(this._nav);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(navPrev);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(navNext);
    preloader.onload = function () {

      var imageWidth = preloader.width,
          imageHeight = preloader.height;
      self.sizeContainer(imageWidth, imageHeight);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(self._loader, "display", "none");

      $image.src = preloader.src;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(self._image, "visibility", "visible");
    };

    preloader.src = pic.src;

    self.updateNav(albumName, uid);
    self.updateCaption(pic.caption);
  },
  updateNav: function updateNav(albumName, uid) {
    var pic = this.getPicture(uid);
    var navPrev = this._nav.querySelector(".lb-prev");
    var navNext = this._nav.querySelector(".lb-next");
    var album = this.getAlbum(albumName);
    if (!album) {
      this._lightbox.querySelector(".lb-number").innerHTML = "";
      return;
    }
    this.curAlbum = album;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* show */])(this._nav);

    var index = album.getPictureIndex(uid);
    if (!index) {
      return;
    }
    this.curIndex = index;

    var numberDom = this._lightbox.querySelector(".lb-number");
    if (!pic.showIndex) {
      numberDom.innerHTML = "";
    } else {
      var indexStr = pic.indexTmpl.replace(/\${d}/g, index).replace(/\${total}/g, album.length());
      numberDom.innerHTML = indexStr;
    }

    setTimeout(function () {
      if (index > 1) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* show */])(navPrev);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(navPrev);
      }

      if (index < album.length()) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["d" /* show */])(navNext);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["e" /* hide */])(navNext);
      }
    }, 800);
  },
  updateCaption: function updateCaption(caption) {
    caption = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["g" /* htmlEncode */])(caption);
    this._lightbox.querySelector(".lb-caption").innerHTML = caption;
  },
  changeImage: function changeImage(index) {
    if (!this.curAlbum) {
      console.log("noalbum");
      return;
    }

    console.log(this.curAlbum, index);
    var pp = this.curAlbum.getPicture(index);
    console.log(this.curAlbum.getPicture(index));
    if (pp.len) {
      return;
    }
    console.log(pp);

    this.showImage(this.curAlbum.name, pp);
  },
  sizeOverlay: function sizeOverlay() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._overlay, "width", document.documentElement.clientWidth + "px");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._overlay, "height", document.documentElement.clientHeight + "px");
  },
  sizeContainer: function sizeContainer(imageWidth, imageHeight) {

    if (imageWidth == 0 || imageHeight == 0) {
      return;
    }

    var self = this;
    var oldWidth = this._outerContainer.outerWidth;
    var oldHeight = this._outerContainer.outerHeight;

    var newWidth = containerPadding.left + imageBorderWidth.left + imageWidth + imageBorderWidth.right + containerPadding.right;

    var newHeight = containerPadding.top + imageBorderWidth.top + imageHeight + imageBorderWidth.bottom + containerPadding.bottom;

    var maxWidth = getWinWidth() - 30,
        maxHeight = getWinHeight() - 30 - dataContainerHeight,
        ratio = imageWidth / imageHeight;

    console.log(maxWidth, maxHeight, newWidth, newHeight);

    if (newWidth > maxWidth) {
      newWidth = maxWidth;
      newHeight = newWidth / ratio;
    }
    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = ratio * newHeight;
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._outerContainer, "width", newWidth + "px");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._lightbox, "width", newWidth + "px");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._outerContainer, "height", newHeight + "px");

    this.positionLightbox(newWidth, newHeight);

    var newImageWidth = newWidth - (containerPadding.left + imageBorderWidth.left + imageBorderWidth.right + containerPadding.right);
    var newImageHeight = newHeight - (containerPadding.top + imageBorderWidth.top + imageBorderWidth.bottom + containerPadding.bottom);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._image, "width", newImageWidth + "px");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._image, "height", newImageHeight + "px");
  },
  positionLightbox: function positionLightbox(width, height) {
    var ww = getWinWidth();
    var wh = getWinHeight();

    var top = (wh - height) / 2;
    var left = (ww - width) / 2;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._lightbox, "top", top + "px");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* setStyle */])(this._lightbox, "left", left + "px");
  },
  addToAlbum: function addToAlbum(name, src, caption, showIndex, indexTmpl, clickOverlayHide) {

    var pic = new Picture(src, caption, showIndex, indexTmpl, clickOverlayHide);
    this._pictures[pic.uid] = pic;
    if (!name) {
      return pic.uid;
    }

    if (!this._albums[name]) {
      this._albums[name] = new Album(name);
    }
    this._albums[name].addPicture(pic.uid);
    return pic.uid;
  },
  getAlbum: function getAlbum(name) {
    return this._albums[name];
  },
  getPicture: function getPicture(uid) {
    return this._pictures[uid];
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  props: {
    src: {
      type: String
    },
    caption: {
      type: String
    },
    album: {
      type: String,
      default: ""
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    indexTmpl: {
      type: String,
      default: "${d} of ${total} images"
    },
    clickOverlayHide: {
      type: Boolean,
      default: true
    } },
  data: function data() {
    return {
      uid: ""
    };
  },

  methods: {
    open: function open() {
      ModalManager.start(this.album, this.uid);
    }
  },
  mounted: function mounted() {
    this.uid = ModalManager.addToAlbum(this.album, this.src, this.caption, this.showIndex, this.indexTmpl, this.clickOverlayHide);
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return once; });
/* unused harmony export hasClass */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* unused harmony export getStyle */
/* harmony export (immutable) */ __webpack_exports__["a"] = setStyle;
/* harmony export (immutable) */ __webpack_exports__["d"] = show;
/* harmony export (immutable) */ __webpack_exports__["e"] = hide;
/* harmony export (immutable) */ __webpack_exports__["g"] = htmlEncode;




var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

var ieVersion = Number(document.documentMode);

var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};


var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

var on = function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

var off = function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

var DataExpando = new Date().getTime();

function Data() {
  this.expando = DataExpando + Data.uid++;
}

Data.uid = 1;

var acceptData = function acceptData(owner) {
  return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
};

Data.prototype = {

  cache: function cache(owner) {
    var value = owner[this.expando];

    if (!value) {
      value = {};

      if (acceptData(owner)) {
        if (owner.nodeType) {
          owner[this.expando] = value;
        } else {
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(owner, this.expando, {
            value: value,
            configurable: true
          });
        }
      }
    }

    return value;
  },
  set: function set(owner, data, value) {
    var prop,
        cache = this.cache(owner);

    if (typeof data === "string") {
      cache[camelCase(data)] = value;
    } else {
      for (prop in data) {
        cache[camelCase(prop)] = data[prop];
      }
    }
    return cache;
  },
  get: function get(owner, key) {
    return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
  },
  access: function access(owner, key, value) {
    if (key === undefined || key && typeof key === "string" && value === undefined) {

      return this.get(owner, key);
    }

    this.set(owner, key, value);

    return value !== undefined ? value : key;
  },
  remove: function remove(owner, key) {
    var i,
        cache = owner[this.expando];

    if (cache === undefined) {
      return;
    }

    if (key !== undefined) {
      if (jQuery.isArray(key)) {
        key = key.map(camelCase);
      } else {
        key = camelCase(key);

        key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
      }

      i = key.length;

      while (i--) {
        delete cache[key[i]];
      }
    }

    if (key === undefined || jQuery.isEmptyObject(cache)) {
      if (owner.nodeType) {
        owner[this.expando] = undefined;
      } else {
        delete owner[this.expando];
      }
    }
  },
  hasData: function hasData(owner) {
    var cache = owner[this.expando];
    return cache !== undefined;
  }
};

var defaultDisplayMap = {};

var dataPriv = new Data();

function getStyles(elem) {
  var view = elem.ownerDocument.defaultView;

  if (!view || !view.opener) {
    view = window;
  }

  return view.getComputedStyle(elem);
};

function css(elem, name) {
  var computed = getStyles(elem);
  return computed ? computed[name] : "";
}

function getDefaultDisplay(elem) {
  var temp,
      doc = elem.ownerDocument,
      nodeName = elem.nodeName,
      display = defaultDisplayMap[nodeName];

  if (display) {
    return display;
  }

  temp = doc.body.appendChild(doc.createElement(nodeName));
  display = css(temp, "display");

  temp.parentNode.removeChild(temp);

  if (display === "none") {
    display = "block";
  }
  defaultDisplayMap[nodeName] = display;

  return display;
}

function elemShowOrHide(elem, show) {

  var display = elem.style.display;
  var newDisplay = "none";
  if (show) {
    if (display === "none") {
      newDisplay = dataPriv.get(elem, "display") || null;
      if (!newDisplay) {
        elem.style.display = "";
      }
    }
    if (elem.style.display === "") {
      newDisplay = getDefaultDisplay(elem);
    }
  } else {
    if (display !== "none") {
      newDisplay = "none";

      dataPriv.set(elem, "display", display);
    }
  }

  elem.style.display = newDisplay;

  console.log(elem, show, elem.style.display);

  return elem;
}

function show(elem) {
  elemShowOrHide(elem, true);
}

function hide(elem) {
  elemShowOrHide(elem, false);
}

function htmlEncode(html) {
  var temp = document.createElement("div");
  temp.textContent != undefined ? temp.textContent = html : temp.innerText = html;
  var output = temp.innerHTML;
  temp = null;
  return output;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Lightbox_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Lightbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Lightbox_vue__);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_Lightbox_vue___default.a);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(27);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(42);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(41);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(71);
__webpack_require__(74);
__webpack_require__(75);
module.exports = __webpack_require__(8).Symbol;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
__webpack_require__(76);
module.exports = __webpack_require__(26).f('iterator');

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4)
  , toLength  = __webpack_require__(67)
  , toIndex   = __webpack_require__(66);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11)
  , gOPS    = __webpack_require__(34)
  , pIE     = __webpack_require__(19);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(28);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(32)
  , descriptor     = __webpack_require__(12)
  , setToStringTag = __webpack_require__(20)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(6)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(11)
  , toIObject = __webpack_require__(4);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(13)('meta')
  , isObject = __webpack_require__(10)
  , has      = __webpack_require__(2)
  , setDesc  = __webpack_require__(3).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(9)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(3)
  , anObject = __webpack_require__(7)
  , getKeys  = __webpack_require__(11);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(19)
  , createDesc     = __webpack_require__(12)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(24)
  , has            = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(30)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4)
  , gOPN      = __webpack_require__(33).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(68)
  , IE_PROTO    = __webpack_require__(21)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23)
  , defined   = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(23)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(50)
  , step             = __webpack_require__(58)
  , Iterators        = __webpack_require__(17)
  , toIObject        = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(31)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', {defineProperty: __webpack_require__(3).f});

/***/ }),
/* 71 */
/***/ (function(module, exports) {



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(65)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(31)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(1)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(36)
  , META           = __webpack_require__(60).KEY
  , $fails         = __webpack_require__(9)
  , shared         = __webpack_require__(22)
  , setToStringTag = __webpack_require__(20)
  , uid            = __webpack_require__(13)
  , wks            = __webpack_require__(6)
  , wksExt         = __webpack_require__(26)
  , wksDefine      = __webpack_require__(25)
  , keyOf          = __webpack_require__(59)
  , enumKeys       = __webpack_require__(53)
  , isArray        = __webpack_require__(56)
  , anObject       = __webpack_require__(7)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(24)
  , createDesc     = __webpack_require__(12)
  , _create        = __webpack_require__(32)
  , gOPNExt        = __webpack_require__(63)
  , $GOPD          = __webpack_require__(62)
  , $DP            = __webpack_require__(3)
  , $keys          = __webpack_require__(11)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(33).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(19).f  = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(18)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(5)
  , Iterators     = __webpack_require__(17)
  , TO_STRING_TAG = __webpack_require__(6)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    on: {
      "click": _vm.open
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-lightbox.js.map