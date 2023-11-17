/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dog-background.jpg */ \"./src/images/dog-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    font-family: sans-serif;\n    font-size: 100%;\n}\n\n#main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n}\n\n#titleBar {\n    display: flex;\n    gap: 50px;\n    background-color: white;\n    border: 2px solid black;\n    padding: 0 10px;\n}\n\nh1 {\n    text-align: center;\n    font-size: 3rem;\n}\n\n.titleIcon {\n    width: 100px;\n}\n\n.tabMain {\n    background-color: white;\n    width: 150px;\n    font-size: 1.8rem;\n    font-weight: bold;\n    border-width: 0 2px 2px 2px;\n}\n\n.tabSelected {\n    color: white;\n    background-color: black;\n    width: 150px;\n    font-size: 1.8rem;\n    font-weight: bold;\n    border-color: white;\n    border-width: 0 2px 2px 2px;\n}\n\n#content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 75vw;\n}\n\nh2 {\n    font-size: 2.2rem;\n}\n\n#content > p {\n    text-align: center;\n    font-size: 1.3rem;\n    background-color: white;\n    border: 2px solid black;\n    padding: 10px;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\n#hoursDiv {\n    background-color: white;\n    text-align: center;\n    border: 2px solid black;\n    padding: 0 20px;\n}\n\n#menuDiv {\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: 2px solid black;\n    width: clamp(400px, 50vw, 600px);\n    padding: 20px;\n}\n\n.menuItemTitleDiv {\n    display: flex;\n    justify-content: space-between;\n}\n\n.menuItemImg {\n    width: 400px;\n}\n\n#contactDiv {\n    background-color: white;\n    border: 2px solid black;\n    padding: 10px;\n}\n\n#contactMap {\n    width: 600px;\n    border: 2px solid black;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ \"./src/style.css?1315\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dog-icon.png */ \"./src/images/dog-icon.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>The Dogstaurant</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n    </head>\\n    <body>\\n        <div id=\\\"main\\\">\\n            <div id=\\\"titleBar\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"A dog icon\\\" class=\\\"titleIcon\\\">\\n                <h1>The Dogstaurant</h1>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"A dog icon\\\" class=\\\"titleIcon\\\">\\n            </div>\\n            <div id=\\\"tabDiv\\\">\\n                <button type=\\\"button\\\" class=\\\"tabMain\\\" id=\\\"tabHome\\\">Home</button>\\n                <button type=\\\"button\\\" class=\\\"tabMain\\\" id=\\\"tabMenu\\\">Menu</button>\\n                <button type=\\\"button\\\" class=\\\"tabMain\\\" id=\\\"tabContact\\\">Contact</button>\\n            </div>\\n            <div id=\\\"content\\\">\\n\\n            </div>\\n        </div>\\n    </body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://odin-restaurant/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css?7163":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupContact: () => (/* binding */ setupContact)\n/* harmony export */ });\n/* harmony import */ var _images_fakeMap_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/fakeMap.jpg */ \"./src/images/fakeMap.jpg\");\n\n\nfunction setupContact() {\n    const content = document.querySelector('#content');\n    //Setup Contact\n    const contactDiv = document.createElement('div');\n    contactDiv.setAttribute('id', 'contactDiv');\n    content.appendChild(contactDiv);\n    const contactName = document.createElement('h3');\n    contactName.setAttribute('id', 'contactName');\n    contactName.textContent = \"The Dogstaurant\";\n    contactDiv.appendChild(contactName);\n    const addressLineOne = document.createElement('p');\n    addressLineOne.setAttribute('class', 'contactAddress');\n    addressLineOne.textContent = \"123 Fake Address Rd\";\n    contactDiv.appendChild(addressLineOne);\n    const addressLineTwo = document.createElement('p');\n    addressLineTwo.setAttribute('class', 'contactAddress');\n    addressLineTwo.textContent = \"Placelocationtown, State 90210\";\n    contactDiv.appendChild(addressLineTwo);\n    const contactPhone = document.createElement('p');\n    contactPhone.setAttribute('id', 'contactPhone');\n    contactPhone.textContent = \"Phone: (999) 999-9999\";\n    contactDiv.appendChild(contactPhone);\n    //Setup Map\n    const fakeMapImg = document.createElement('img');\n    fakeMapImg.src = _images_fakeMap_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    fakeMapImg.setAttribute('id', 'contactMap');\n    content.appendChild(fakeMapImg);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css?7163\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\n\n\n\n\n\nconst content = document.querySelector('#content');\nconst tabHome = document.querySelector('#tabHome');\nconst tabMenu = document.querySelector('#tabMenu');\nconst tabContact = document.querySelector('#tabContact');\n\n\n\nfunction removeChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\nfunction clickTab(tabFunction) {\n    if (content.firstChild){\n        removeChildNodes(content);\n    }\n    tabFunction();\n    // Event.target.setAttribute('class', 'tabSelected');\n}\n\nclickTab(_mainPage__WEBPACK_IMPORTED_MODULE_0__.setupMain);\n\ntabHome.addEventListener('click', function() {\n    clickTab(_mainPage__WEBPACK_IMPORTED_MODULE_0__.setupMain)\n});\ntabMenu.addEventListener('click', function() {\n    clickTab(_menu__WEBPACK_IMPORTED_MODULE_1__.setupMenu)\n});\ntabContact.addEventListener('click', function() {\n    clickTab(_contact__WEBPACK_IMPORTED_MODULE_2__.setupContact)\n});\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupMain: () => (/* binding */ setupMain)\n/* harmony export */ });\nfunction setupMain() {\n    const content = document.querySelector(\"#content\");\n    //Set up title\n    const h2 = document.createElement('h2');\n    h2.innerText = \"Welcome to The Dogstaurant!\";\n    content.appendChild(h2);\n    //Set up intro paragraph\n    const firstPara = document.createElement('p');\n    firstPara.innerText = \"We are a restaurant dedicated to providing your canine companions a five star dining experience. Our selections include some of the highest quality dog food, treats, and even complimentary toys. We guarantee that this will be the happiest your dogs will ever be. Look at your dog's face right now - don't they deserve it?\"\n    content.appendChild(firstPara);\n    //Set up hours section\n    const hoursDiv = document.createElement('div');\n    hoursDiv.setAttribute('id', 'hoursDiv');\n    content.appendChild(hoursDiv);\n    const hoursTitle = document.createElement('h3');\n    hoursTitle.innerText = \"Hours\";\n    hoursDiv.appendChild(hoursTitle);\n    let sunday = document.createElement('p');\n    sunday.innerText = \"Sunday: 7am - 9pm\";\n    hoursDiv.appendChild(sunday);\n    let monday = document.createElement('p');\n    monday.innerText = \"Monday: 7am - 7pm\";\n    hoursDiv.appendChild(monday);\n    let tuesday = document.createElement('p');\n    tuesday.innerText = \"Tuesday: 7am - 7pm\";\n    hoursDiv.appendChild(tuesday);\n    let wednesday = document.createElement('p');\n    wednesday.innerText = \"Wednesday: 7am - 7pm\";\n    hoursDiv.appendChild(wednesday);\n    let thursday = document.createElement('p');\n    thursday.innerText = \"Thursday: 7am - 7pm\";\n    hoursDiv.appendChild(thursday);\n    let friday = document.createElement('p');\n    friday.innerText = \"Friday: 7am - 7pm\";\n    hoursDiv.appendChild(friday);\n    let saturday = document.createElement('p');\n    saturday.innerText = \"Saturday: 7am - 9pm\";\n    hoursDiv.appendChild(saturday);\n    \n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/mainPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupMenu: () => (/* binding */ setupMenu)\n/* harmony export */ });\n/* harmony import */ var _images_dog_hose_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/dog-hose.jpg */ \"./src/images/dog-hose.jpg\");\n/* harmony import */ var _images_dog_lake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dog-lake.jpg */ \"./src/images/dog-lake.jpg\");\n/* harmony import */ var _images_kibble_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/kibble.jpg */ \"./src/images/kibble.jpg\");\n/* harmony import */ var _images_wet_dog_food_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/wet-dog-food.jpg */ \"./src/images/wet-dog-food.jpg\");\n/* harmony import */ var _images_homemade_dog_food_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/homemade-dog-food.jpg */ \"./src/images/homemade-dog-food.jpg\");\n\n\n\n\n\n\nfunction setupMenuItem(parentDiv, itemName, itemPrice, itemImg, itemDesc) {\n    const itemDiv = document.createElement('div');\n    itemDiv.setAttribute('class', 'menuItem');\n    parentDiv.appendChild(itemDiv);\n    const itemTitleDiv = document.createElement('div');\n    itemTitleDiv.setAttribute('class', 'menuItemTitleDiv');\n    itemDiv.appendChild(itemTitleDiv);\n    const menuItemName = document.createElement('h4');\n    menuItemName.textContent = itemName;\n    menuItemName.setAttribute('class', 'menuItemName');\n    itemTitleDiv.appendChild(menuItemName);\n    const menuItemPrice = document.createElement('h4');\n    menuItemPrice.textContent = itemPrice;\n    menuItemPrice.setAttribute('class', 'menuItemPrice');\n    itemTitleDiv.appendChild(menuItemPrice);\n    const menuItemImg = document.createElement('img');\n    menuItemImg.src = itemImg;\n    menuItemImg.setAttribute('class', 'menuItemImg');\n    itemDiv.appendChild(menuItemImg);\n    const menuItemDesc = document.createElement('p');\n    menuItemDesc.setAttribute('class', 'menuItemDescription');\n    menuItemDesc.textContent = itemDesc;\n    itemDiv.appendChild(menuItemDesc);\n}\n\nfunction setupMenu() {\n    const content = document.querySelector('#content');\n    //Setup title\n    const h2 = document.createElement('h2');\n    h2.textContent = \"The Dogstaurant Menu\";\n    content.appendChild(h2);\n    //Setup menu\n    const menuDiv = document.createElement('div');\n    menuDiv.setAttribute('id', 'menuDiv')\n    content.appendChild(menuDiv);\n    //Setup beverages\n    const beveragesDiv = document.createElement('div');\n    beveragesDiv.setAttribute('class', 'menuSection');\n    menuDiv.appendChild(beveragesDiv);\n    const beveragesTitle = document.createElement('h3');\n    beveragesTitle.textContent = \"Beverages\";\n    beveragesDiv.appendChild(beveragesTitle);\n    setupMenuItem(beveragesDiv, \"Hose Water\", \"Free\", _images_dog_hose_jpg__WEBPACK_IMPORTED_MODULE_0__, \"Our complimentary classic hose water is a mixture of fun and hydration; a perfect harmony of sustainable entertainment.\");\n    setupMenuItem(beveragesDiv, \"Lake Water\", \"$5.00\", _images_dog_lake_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Our lake water is organic and parasite-free, filtered through five layers of algae. It is local delicacy only found here by The Dogstaurant.\");\n    //Setup main courses\n    const mainCourseDiv = document.createElement('div');\n    mainCourseDiv.setAttribute('class', 'menuSection');\n    menuDiv.appendChild(mainCourseDiv);\n    const mainCourseTitle = document.createElement('h3');\n    mainCourseTitle.textContent = \"Main Courses\";\n    mainCourseDiv.appendChild(mainCourseTitle);\n    setupMenuItem(mainCourseDiv, \"Kibble\", \"$10.00\", _images_kibble_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Kibble is a classic for a reason. Our perfected formula delivers the crunch and nutrition your pup needs to live happy and healthy.\");\n    setupMenuItem(mainCourseDiv, \"Wet Food\", \"$15.00\", _images_wet_dog_food_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Wet food is a chance for you to give your dog more love. Ask about our seasonal flavor selections - hand crafted to perfection.\");\n    setupMenuItem(mainCourseDiv, \"The Fancy Feast\", \"$25.00\", _images_homemade_dog_food_jpg__WEBPACK_IMPORTED_MODULE_4__, \"For those who love their dog the most, we offer the highest quality meal. This combination of nutrition and love will keep even the most sensitive stomach happy.\");\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/style.css?1315":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57011448dc08b9372b5e.css\";\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./src/images/dog-background.jpg":
/*!***************************************!*\
  !*** ./src/images/dog-background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16ad07e698f085916a74.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/dog-background.jpg?");

/***/ }),

/***/ "./src/images/dog-hose.jpg":
/*!*********************************!*\
  !*** ./src/images/dog-hose.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ed015b661c3ff08d0c0.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/dog-hose.jpg?");

/***/ }),

/***/ "./src/images/dog-icon.png":
/*!*********************************!*\
  !*** ./src/images/dog-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03b3c4b753b13d482c45.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/dog-icon.png?");

/***/ }),

/***/ "./src/images/dog-lake.jpg":
/*!*********************************!*\
  !*** ./src/images/dog-lake.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ec97fc78e2d7ff51abd.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/dog-lake.jpg?");

/***/ }),

/***/ "./src/images/fakeMap.jpg":
/*!********************************!*\
  !*** ./src/images/fakeMap.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"794bd55896a3d56ee6b9.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/fakeMap.jpg?");

/***/ }),

/***/ "./src/images/homemade-dog-food.jpg":
/*!******************************************!*\
  !*** ./src/images/homemade-dog-food.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7158ae68308891338c1f.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/homemade-dog-food.jpg?");

/***/ }),

/***/ "./src/images/kibble.jpg":
/*!*******************************!*\
  !*** ./src/images/kibble.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07dbf89dba912624c20d.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/kibble.jpg?");

/***/ }),

/***/ "./src/images/wet-dog-food.jpg":
/*!*************************************!*\
  !*** ./src/images/wet-dog-food.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80a9d3dfbb32a4f27af5.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/wet-dog-food.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;