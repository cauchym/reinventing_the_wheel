/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);
	__webpack_require__(5);
	var Content = __webpack_require__(7);
	document.write(Content);
	var Carousel = __webpack_require__(8);
	Carousel.init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.sass", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  color: red; }\n  body .l-carousel {\n    margin-left: auto;\n    margin-right: auto; }\n  body .p-carousel {\n    position: relative;\n    width: 640px;\n    height: 360px; }\n  body ._p-Btn, body .p-leftBtn, body .p-rightBtn {\n    width: 24px;\n    height: 24px;\n    color: white;\n    position: absolute;\n    top: 50%;\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    cursor: pointer;\n    z-index: 3;\n    overflow: hidden; }\n  body .p-leftBtn {\n    left: 10px; }\n  body .p-rightBtn {\n    right: 10px; }\n  body .p-images-wrapper {\n    overflow: hidden; }\n  body .p-images {\n    width: 1920px;\n    height: 100%;\n    display: flex;\n    position: relative;\n    transform: translateX(-640px); }\n  body .p-image {\n    display: none;\n    width: 640px;\n    height: 100%; }\n    body .p-image.is-active {\n      display: block;\n      position: absolute;\n      left: 640px; }\n    body .p-image.is-left {\n      display: block;\n      position: absolute;\n      left: 0; }\n    body .p-image.is-right {\n      display: block;\n      position: absolute;\n      left: 1280px; }\n    body .p-image._is-sliding, body .p-image.is-sliding-rtoc, body .p-image.is-sliding-ctol, body .p-image.is-sliding-ctor, body .p-image.is-sliding-ltoc {\n      display: block;\n      transition: transform 1s; }\n    body .p-image.is-sliding-rtoc {\n      position: absolute;\n      z-index: 2;\n      transform: translateX(-100%); }\n    body .p-image.is-sliding-ctol {\n      position: absolute;\n      z-index: 1;\n      left: 640px;\n      transform: translateX(-100%); }\n    body .p-image.is-sliding-ctor {\n      position: absolute;\n      z-index: 1;\n      left: 640px;\n      transform: translateX(100%); }\n    body .p-image.is-sliding-ltoc {\n      z-index: 2;\n      transform: translateX(100%); }\n    body .p-image img {\n      height: 100%;\n      width: 100%; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: yellow; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = '<h2>image files...</h2>';
	// module.exports = `<img src="./1.jpg"></img>
	//         <img src="./2.jpg"></img>
	//         <img src="./3.jpg"></img>
	//         <img src="./4.jpg"></img>
	//         <img src="./5.jpg"></img>`;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var Carousel = {
	  init: function init() {
	    "use strict";

	    Carousel.config = {
	      indexIds: Carousel._getIndexIds()
	    };
	    window.onload = this.setEventListener();
	  },
	  setEventListener: function setEventListener() {
	    "use strict";

	    var leftArrow = document.getElementById('p-leftBtn');
	    leftArrow.addEventListener('click', this.clickLeftArrow, false);
	    var rightArrow = document.getElementById('p-rightBtn');
	    rightArrow.addEventListener('click', this.clickRightArrow, false);
	  },
	  clickLeftArrow: function clickLeftArrow() {
	    "use strict";

	    Carousel._rollCarousel(Carousel._getShownId(), 'former');
	  },
	  clickRightArrow: function clickRightArrow() {
	    "use strict";

	    Carousel._rollCarousel(Carousel._getShownId(), 'latter');
	  },
	  _getShownId: function _getShownId() {
	    "use strict";

	    var activeImage = document.getElementsByClassName('is-active');
	    return activeImage[0].id;
	  },
	  _rollCarousel: function _rollCarousel(shownId, towardOpt) {
	    "use strict";

	    var _shownId = shownId;
	    var towardId = Carousel.getTowardId(_shownId, towardOpt);
	    if (_shownId !== towardId) {
	      Carousel.changeShownImage(_shownId, towardId);
	    }
	  },
	  _getIndexIds: function _getIndexIds() {
	    "use strict";

	    var ImagesArray = document.getElementsByClassName('p-image');
	    var indexIds = [];
	    Array.prototype.forEach.call(ImagesArray, function (el) {
	      indexIds.push(el.id);
	    });
	    return indexIds;
	  },
	  getTowardId: function getTowardId(shownId, towardOpt) {
	    "use strict";

	    var _shownId = shownId;
	    var _indexIds = Carousel.config.indexIds;
	    var shownIndex = _indexIds.indexOf(_shownId);
	    var towardIndex = -1;
	    if (towardOpt === 'former' && shownIndex === 0) {
	      towardIndex = shownIndex;
	    } else if (towardOpt === 'latter' && shownIndex === _indexIds.length - 1) {
	      towardIndex = shownIndex;
	    } else {
	      towardIndex = towardOpt === 'former' ? shownIndex - 1 : shownIndex + 1;
	    }
	    return _indexIds[towardIndex];
	  },
	  changeShownImage: function changeShownImage(shownId, towardId) {
	    "use strict";

	    var _shownId = shownId;
	    var _towardId = towardId;
	    var shownImage = document.getElementById(_shownId);
	    var towardImage = document.getElementById(_towardId);
	    if (shownId < towardId) {
	      // slide to left
	      towardImage.classList.add('is-right');
	      setTimeout(function () {
	        shownImage.classList.remove('is-active');
	        shownImage.classList.add('is-sliding-ctol');
	        towardImage.classList.add('is-sliding-rtoc');
	        setTimeout(function () {
	          towardImage.classList.add('is-active');
	          towardImage.classList.remove('is-right');
	          shownImage.classList.remove('is-sliding-ctol');
	          towardImage.classList.remove('is-sliding-rtoc');
	        }, 1000);
	      }, 10);
	    } else {
	      // slide to right
	      towardImage.classList.add('is-left');
	      setTimeout(function () {
	        shownImage.classList.remove('is-active');
	        shownImage.classList.add('is-sliding-ctor');
	        towardImage.classList.add('is-sliding-ltoc');
	        setTimeout(function () {
	          towardImage.classList.remove('is-left');
	          shownImage.classList.remove('is-sliding-ctor');
	          towardImage.classList.remove('is-sliding-ltoc');
	          towardImage.classList.add('is-active');
	        }, 1000);
	      }, 10);
	    }
	  }
	};

	module.exports = Carousel;

/***/ }
/******/ ]);