/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Carousel = {
  init: function init() {
    console.log('okとしか言いようがない');
    Carousel.config = {
      indexIds: Carousel._getIndexIds()
    };
    Carousel.state = {
      isAlready: true
    };
    this.setEventListener();
  },
  setEventListener: function setEventListener() {
    var leftArrow = document.getElementById('p-leftBtn');
    console.log(leftArrow);
    leftArrow.addEventListener('click', this.clickLeftArrow, false);
    var rightArrow = document.getElementById('p-rightBtn');
    rightArrow.addEventListener('click', this.clickRightArrow, false);
  },
  clickLeftArrow: function clickLeftArrow() {
    if (!Carousel.state.isAlready) return;
    Carousel._rollCarousel(Carousel._getShownId(), 'former');
  },
  clickRightArrow: function clickRightArrow() {
    if (!Carousel.state.isAlready) return;
    Carousel._rollCarousel(Carousel._getShownId(), 'latter');
  },
  _getShownId: function _getShownId() {
    var activeImage = document.getElementsByClassName('is-active');
    return activeImage[0].id;
  },
  _rollCarousel: function _rollCarousel(shownId, towardOpt) {
    var _shownId = shownId;
    var towardId = Carousel.getTowardId(_shownId, towardOpt);
    if (_shownId !== towardId) {
      Carousel.changeShownImage(_shownId, towardId);
    }
  },
  _getIndexIds: function _getIndexIds() {
    var ImagesArray = document.getElementsByClassName('p-image');
    var indexIds = [];
    Array.prototype.forEach.call(ImagesArray, function (el) {
      indexIds.push(el.id);
    });
    return indexIds;
  },
  _refreshArrows: function _refreshArrows(towardId) {
    var rightArrow = document.getElementById('p-rightBtn');
    var leftArrow = document.getElementById('p-leftBtn');
    var indexIds = Carousel.config.indexIds;
    if (towardId === indexIds[indexIds.length - 1]) {
      rightArrow.classList.add('is-hidden');
    } else if (towardId === indexIds[0]) {
      leftArrow.classList.add('is-hidden');
    } else {
      rightArrow.classList.remove('is-hidden');
      leftArrow.classList.remove('is-hidden');
    }
  },
  getTowardId: function getTowardId(shownId, towardOpt) {
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
    var _shownId = shownId;
    var _towardId = towardId;
    var shownImage = document.getElementById(_shownId);
    var towardImage = document.getElementById(_towardId);
    if (shownId < towardId) {
      // slide to left
      Carousel.state.isAlready = false;
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
          Carousel._refreshArrows(towardId);
          Carousel.state.isAlready = true;
        }, 1000);
      }, 10);
    } else if (shownId > towardId) {
      // slide to right
      Carousel.state.isAlready = false;
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
          Carousel._refreshArrows(towardId);
          Carousel.state.isAlready = true;
        }, 1000);
      }, 10);
    }
  }
};

module.exports = Carousel;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
var Carousel = __webpack_require__(0);
window.onload = function () {
  Carousel.init();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/node-sass/vendor/darwin-x64-51/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 7.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 4.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to build the binding for your current environment.\n    at module.exports (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:571:32)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:488:32)\n    at tryModuleLoad (module.js:447:12)\n    at Function.Module._load (module.js:439:3)\n    at Module.require (module.js:498:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/sass-loader/index.js:4:12)\n    at Module._compile (module.js:571:32)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:488:32)\n    at tryModuleLoad (module.js:447:12)\n    at Function.Module._load (module.js:439:3)\n    at Module.require (module.js:498:17)\n    at require (internal/module.js:20:19)\n    at loadLoader (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/webpack/lib/NormalModule.js:268:15)\n    at Compilation.buildModule (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/webpack/lib/Compilation.js:142:10)\n    at factoryCallback (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/webpack/lib/Compilation.js:325:11)\n    at factory (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/webpack/lib/NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (/Users/01010373/dev/reinventing_the_wheel/carousel/node_modules/webpack/lib/NormalModuleFactory.js:99:14)");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
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


/***/ })
/******/ ]);