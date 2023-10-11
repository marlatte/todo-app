/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Reboot     --------------- */

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	/* color: unset; */
}

/* ---------------     /Reboot     --------------- */
/* ---------------     Utilities & Universals     --------------- */

body {
	min-height: 100svh;
	display: flex;
	flex-direction: column;
	background-color: red;
}

/* ---------------     /Utilities & Universals     --------------- */
/* ---------------     CONTENT     --------------- */

.flex-container {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.app-content {
	--main-spacer: 20px;
	--add-btn-dims: 50px;

	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #fff;
}

.add-container {
	position: fixed;
	z-index: 1;
	bottom: calc(var(--main-spacer) + 48px);
	left: 10px;

	display: flex;
	flex-direction: column-reverse;
	gap: 10px;
}

#add-btn {
	height: var(--add-btn-dims);
	width: var(--add-btn-dims);
	display: grid;
	place-content: center;

	border-radius: var(--add-btn-dims);
	border: 2px solid white;
	background-color: black;
	color: white;
	font-size: 40px;
}

#add-btn.open {
	transform: rotate(45deg);
}

#add-btn ~ * {
	display: none;
}

#add-btn.open ~ * {
	display: block;
}

@media (min-width: 700px) {
	.app-content {
		width: min(calc(100vw - 40px), 1400px);
		min-height: 80vh;
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: 60px auto;
	}
	.add-container {
		position: absolute;
		bottom: 10px;
	}
}

/* ---------------     Header     --------------- */

header {
	grid-column: span 2;
	height: 60px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	border-bottom: 1px solid black;
}

header h1 {
	margin: 10px;
	font-style: italic;
}

#sidebar-open-btn {
	margin: 10px;
	padding: 5px 8px;
	font-size: 20px;
}

@media (min-width: 700px) {
	#sidebar-open-btn {
		display: none;
	}
}

/* ---------------     /Header     --------------- */

/* ---------------     Sidebar     --------------- */

.sidebar {
	position: absolute;
	z-index: 1;
	width: 0;
	height: 100svh;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	gap: 20px;

	background-color: wheat;

	transition: all 1s;
}

.sidebar.open {
	width: 100vw;
	padding: 20px;

	transition: all 0.5s;
}

.sidebar > * {
	opacity: 0;

	transition: opacity 0.2s;
}

.sidebar.open > * {
	opacity: 1;

	transition: opacity 1s;
}

.close-btn {
	align-self: flex-end;
	padding: 10px;
}

.projects-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.project-name {
	display: flex;
	justify-content: space-between;
}

@media (min-width: 700px) {
	.sidebar,
	.sidebar.open {
		position: inherit;
		width: unset;
		height: unset;
		padding: 20px;
		z-index: unset;

		transition: none;
	}

	.sidebar > *,
	.sidebar.open > * {
		opacity: 1;
	}

	#sidebar-close-btn {
		display: none;
	}
}

/* ---------------     /Sidebar     --------------- */

/* ---------------     Main     --------------- */

main {
	flex: 1;
	position: relative;
	padding: var(--main-spacer);
	padding-bottom: calc(var(--add-btn-dims) + var(--main-spacer));

	display: flex;
	flex-direction: column;
	gap: var(--main-spacer);
}

#statuses-container {
	--status-spacer: 10px;
	flex: 1;

	display: flex;
	flex-wrap: wrap;
	gap: var(--main-spacer);
}

.status-row {
	flex: auto;
	width: min(480px, 100%);

	display: flex;
	flex-wrap: wrap;
	gap: var(--main-spacer);
}

/* ---------------     Status columns     --------------- */

.status-column {
	flex: 1;
	padding: var(--status-spacer);
	min-width: min(230px, 100%);
	min-height: 25svh;

	display: flex;
	flex-direction: column;
	gap: var(--status-spacer);
	border: 1px solid black;
	border-radius: 6px;
}

.task-card {
	--priority-width: 12px;
	--priority-color: grey;

	padding: 5px 5px 5px calc(var(--priority-width) + 5px);

	background-image: linear-gradient(
		to right,
		var(--priority-color) var(--priority-width),
		transparent var(--priority-width)
	);

	border: 2px solid black;
	border-radius: 5px;
}

.task-card[data-priority="high"] {
	--priority-color: red;
}

.task-card[data-priority="medium"] {
	--priority-color: gold;
}

.task-card[data-priority="low"] {
	--priority-color: green;
}

.subtext {
	display: flex;
	justify-content: space-between;
}

/* ---------------     /Status columns     --------------- */
/* ---------------     /Main     --------------- */

/* ---------------     Footer     --------------- */

footer {
	height: 60px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: black;
	color: white;
}
/* ---------------     /Footer     --------------- */

/* ---------------     Dialog     --------------- */

dialog {
	--modal-spacer: 12px;

	margin: auto;
	border: none;
}

dialog > * {
	width: min(88vw, 500px);
	padding: var(--modal-spacer);
	gap: var(--modal-spacer);
	flex-direction: column;
}

.display-mode {
	display: flex;

	background-color: wheat;
}

.display-mode-header {
	display: flex;
	justify-content: space-between;
}

.edit-mode {
	display: flex;
	background-color: cadetblue;
}

.edit-mode-details {
	display: flex;
	flex-direction: column;
	gap: var(--modal-spacer);
}

.project-mode {
	display: flex;
	background-color: pink;
}

/* ---------------     /Dialog     --------------- */

/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: red;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n.flex-container {\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.app-content {\n\t--main-spacer: 20px;\n\t--add-btn-dims: 50px;\n\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #fff;\n}\n\n.add-container {\n\tposition: fixed;\n\tz-index: 1;\n\tbottom: calc(var(--main-spacer) + 48px);\n\tleft: 10px;\n\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\tgap: 10px;\n}\n\n#add-btn {\n\theight: var(--add-btn-dims);\n\twidth: var(--add-btn-dims);\n\tdisplay: grid;\n\tplace-content: center;\n\n\tborder-radius: var(--add-btn-dims);\n\tborder: 2px solid white;\n\tbackground-color: black;\n\tcolor: white;\n\tfont-size: 40px;\n}\n\n#add-btn.open {\n\ttransform: rotate(45deg);\n}\n\n#add-btn ~ * {\n\tdisplay: none;\n}\n\n#add-btn.open ~ * {\n\tdisplay: block;\n}\n\n@media (min-width: 700px) {\n\t.app-content {\n\t\twidth: min(calc(100vw - 40px), 1400px);\n\t\tmin-height: 80vh;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tgrid-template-rows: 60px auto;\n\t}\n\t.add-container {\n\t\tposition: absolute;\n\t\tbottom: 10px;\n\t}\n}\n\n/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tborder-bottom: 1px solid black;\n}\n\nheader h1 {\n\tmargin: 10px;\n\tfont-style: italic;\n}\n\n#sidebar-open-btn {\n\tmargin: 10px;\n\tpadding: 5px 8px;\n\tfont-size: 20px;\n}\n\n@media (min-width: 700px) {\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 0;\n\theight: 100svh;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\n\tbackground-color: wheat;\n\n\ttransition: all 1s;\n}\n\n.sidebar.open {\n\twidth: 100vw;\n\tpadding: 20px;\n\n\ttransition: all 0.5s;\n}\n\n.sidebar > * {\n\topacity: 0;\n\n\ttransition: opacity 0.2s;\n}\n\n.sidebar.open > * {\n\topacity: 1;\n\n\ttransition: opacity 1s;\n}\n\n.close-btn {\n\talign-self: flex-end;\n\tpadding: 10px;\n}\n\n.projects-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.project-name {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n@media (min-width: 700px) {\n\t.sidebar,\n\t.sidebar.open {\n\t\tposition: inherit;\n\t\twidth: unset;\n\t\theight: unset;\n\t\tpadding: 20px;\n\t\tz-index: unset;\n\n\t\ttransition: none;\n\t}\n\n\t.sidebar > *,\n\t.sidebar.open > * {\n\t\topacity: 1;\n\t}\n\n\t#sidebar-close-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tposition: relative;\n\tpadding: var(--main-spacer);\n\tpadding-bottom: calc(var(--add-btn-dims) + var(--main-spacer));\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--main-spacer);\n}\n\n#statuses-container {\n\t--status-spacer: 10px;\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n.status-row {\n\tflex: auto;\n\twidth: min(480px, 100%);\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n/* ---------------     Status columns     --------------- */\n\n.status-column {\n\tflex: 1;\n\tpadding: var(--status-spacer);\n\tmin-width: min(230px, 100%);\n\tmin-height: 25svh;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--status-spacer);\n\tborder: 1px solid black;\n\tborder-radius: 6px;\n}\n\n.task-card {\n\t--priority-width: 12px;\n\t--priority-color: grey;\n\n\tpadding: 5px 5px 5px calc(var(--priority-width) + 5px);\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--priority-color) var(--priority-width),\n\t\ttransparent var(--priority-width)\n\t);\n\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n}\n\n.task-card[data-priority=\"high\"] {\n\t--priority-color: red;\n}\n\n.task-card[data-priority=\"medium\"] {\n\t--priority-color: gold;\n}\n\n.task-card[data-priority=\"low\"] {\n\t--priority-color: green;\n}\n\n.subtext {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n/* ---------------     /Status columns     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: black;\n\tcolor: white;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     Dialog     --------------- */\n\ndialog {\n\t--modal-spacer: 12px;\n\n\tmargin: auto;\n\tborder: none;\n}\n\ndialog > * {\n\twidth: min(88vw, 500px);\n\tpadding: var(--modal-spacer);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\n.display-mode {\n\tdisplay: flex;\n\n\tbackground-color: wheat;\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: cadetblue;\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n/* ---------------     /Dialog     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app-controller.js":
/*!*******************************!*\
  !*** ./src/app-controller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projects: () => (/* binding */ Projects),
/* harmony export */   Tasks: () => (/* binding */ Tasks)
/* harmony export */ });
const Tasks = (() => {
	let _tasks = [];
	let _idCounter = 1;

	function _dateSort(outgoingTasks) {
		return outgoingTasks; // devMode
	}

	const _columnNames = ["backlog", "to-do", "in-progress", "done"];

	let _propertyNames = [
		"title",
		"status",
		"project",
		"priority",
		"notes",
		"due",
		"tags",
	];

	let _priorities = ["high", "medium", "low"];

	function _columnSort(outgoingTasks) {
		const columnSortedArray = _columnNames.map((columnName) => {
			return [
				columnName,
				_dateSort(
					outgoingTasks.filter(
						(task) => task.getProperty("status") === columnName
					)
				),
			];
		});
		return columnSortedArray;
	}

	function _taskFactory() {
		const _task = {};
		const setProperty = (key, value) => (_task[key] = value);
		_propertyNames.forEach((prop) => setProperty(prop, ""));
		return {
			getProperty: (key) => _task[key],
			setProperty,
			logData: () => Object.entries(_task), // devMode
		};
	}

	function addTask(inputValuesArray) {
		const newTask = _taskFactory();
		newTask.setProperty("id", _idCounter++);
		inputValuesArray.forEach((pair) => {
			newTask.setProperty(pair[0], pair[1]);
		});
		_tasks.push(newTask);
	}

	function removeTasks(...removeIds) {
		_tasks.forEach((task, index) => {
			if (removeIds.includes(task.getProperty("id"))) {
				_tasks.splice(index, 1);
			}
		});

		// devMode
		_tasks.forEach((item) => console.log(item.getProperty("id")));
	}

	function updateTask(updateId, inputValuesArray) {
		_tasks.forEach((task, index) => {
			if (updateId === task.getProperty("id")) {
				inputValuesArray.forEach((pair) => {
					_tasks[index].setProperty(pair[0], pair[1]);
				});
			}
		});
	}

	function getTasksByProperty(prop, value) {
		return _tasks.filter((task) => task.getProperty(prop) === value);
	}

	function getSortedTasksByProperty(prop, value) {
		return _columnSort(
			_tasks.filter((task) => task.getProperty(prop) === value)
		);
	}

	return {
		addTask,
		removeTasks,
		updateTask,
		getAllTasks: () => _columnSort(_tasks),
		getTasksByProperty,
		getSortedTasksByProperty,
		getColumnNames: () => _columnNames,
		getPriorityNames: () => _priorities,
		getPropertyNames: () => _propertyNames,
	};
})();

const Projects = (() => {
	let _projectList = new Set(["home", "finances", "learning"]);

	function addProject(newProjectName) {
		_projectList.add(newProjectName.toLowerCase());
	}
	function removeProject(removeName) {
		if (_projectList.has(removeName)) {
			// Get task.id's associated with that project
			const removeIds = Tasks.getTasksByProperty(
				"project",
				removeName
			).map((task) => task.getProperty("id"));

			// Remove all tasks with those id's from _tasks
			Tasks.removeTasks(...removeIds);

			// Remove name from project list
			_projectList.delete(removeName);

			// devMode
			console.log(_projectList);
		}
	}

	return {
		addProject,
		removeProject,
		getProjects: () => [..._projectList].sort(),
	};
})();

const _addDefaults = (() => {
	const defaultTasks = [
		{
			title: "pay bills",
			status: "in-progress",
			project: "finances",
			priority: "high",
			notes: "the rent is too damn high",
			due: "2023-11-01",
			tags: "",
		},
		{
			title: "groceries",
			status: "to-do",
			project: "home",
			priority: "medium",
			notes: "",
			due: "",
			tags: "store",
		},
		{
			title: "file taxes",
			status: "backlog",
			project: "finances",
			priority: "medium",
			notes: "",
			due: "",
			tags: "",
		},
		{
			title: "read Chekhov",
			status: "backlog",
			project: "learning",
			priority: "low",
			notes: "",
			due: "",
			tags: "",
		},
		{
			title: "replace lightbulb",
			status: "to-do",
			project: "home",
			priority: "medium",
			notes: "bathroom light is flickering",
			due: "",
			tags: "store",
		},
	].map((item) => Object.entries(item));

	defaultTasks.forEach((item) => {
		Tasks.addTask(item);
	});

	// Check to make sure things are adding correctly. devMode
	const testDefaultTasks = Tasks.getAllTasks();
	testDefaultTasks.forEach((column, index) => {
		console.log(`Column: ${column[0]}`);
		column[1].forEach((task, index) => {
			console.log(`\tTask at: ${index}`);
			console.log(
				`\t\t${task.logData().join("\n\t\t").split(",").join(": ")}`
			);
		});
		console.log("\n");
	});
})();


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elFactory: () => (/* binding */ elFactory),
/* harmony export */   findProjectName: () => (/* binding */ findProjectName),
/* harmony export */   findTaskId: () => (/* binding */ findTaskId),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   htmlFactory: () => (/* binding */ htmlFactory),
/* harmony export */   makeFirstUpper: () => (/* binding */ makeFirstUpper)
/* harmony export */ });
// ------------------------------------------------------- //
// -------------------- DOM Factories -------------------- //
// ------------------------------------------------------- //

function elFactory(type, attributes, children = []) {
	return { type, attributes, children };
}

function htmlFactory(obj) {
	const el = document.createElement(obj.type);
	const attributes = obj.attributes;

	for (let key in attributes) {
		if (key !== "dataset") {
			el[key] = attributes[key];
		} else {
			// Special directions needed to set "data-" properties
			for (const prop in attributes[key]) {
				el.dataset[prop] = attributes[key][prop];
			}
		}
	}

	obj.children?.forEach((child) => {
		// Allows for conditionally adding children upstream by
		// setting "" as the alternative to elFactory()
		if (!!child) {
			el.appendChild(htmlFactory(child));
		}
	});

	return el;
}

// ------------------------------------------------------- //
// -------------------- Other Helpers -------------------- //
// ------------------------------------------------------- //

function findTaskId(target) {
	return +(target.classList.value.includes("id-bubble-marker")
		? target.dataset.taskId
		: findTaskId(target.parentElement));
}

function findProjectName(target) {
	return target.classList.value.includes("id-bubble-marker")
		? target.dataset.projectFilter
		: findProjectName(target.parentElement);
}

function makeFirstUpper(string) {
	return !!string
		? string
				.split("-")
				.map((word) => word[0].toUpperCase() + word.slice(1))
				.join(" ")
		: string;
}

function formatDate(isoDate) {
	const date = new Date(`${isoDate}T12:00:00-04:00`);
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	return `${days[date.getDay()]}, ${date.getDate()} ${
		months[date.getMonth()]
	} ${date.getFullYear()}`;
}


/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDropdowns: () => (/* binding */ addDropdowns),
/* harmony export */   buildDisplayMode: () => (/* binding */ buildDisplayMode),
/* harmony export */   buildEditMode: () => (/* binding */ buildEditMode),
/* harmony export */   buildProjectMode: () => (/* binding */ buildProjectMode),
/* harmony export */   dialog: () => (/* binding */ dialog),
/* harmony export */   getValuesArray: () => (/* binding */ getValuesArray),
/* harmony export */   populateDisplay: () => (/* binding */ populateDisplay),
/* harmony export */   populateForm: () => (/* binding */ populateForm)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");



const dialog = document.querySelector("dialog");
document.addEventListener("click", (e) => {
	if (e.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
	dialog.textContent = "";
});

function buildDisplayMode() {
	dialog.innerHTML = `
			<div class="display-mode">
				<section class="display-mode-header">
					<h3 id="display-title"></h3>
					<button class="close-btn display-close-btn">×</button>
				</section>
				<section class="display-mode-details">
					<p>Project: <span id="display-project"></span></p>
					<p>Priority: <span id="display-priority"></span></p>
					<p>Due: <span id="display-due"></span></p>
					<p>Status: <span id="display-status"></span></p>
					<p>Notes:<span id="display-notes"></span></p>
					<p>Tags: <span id="display-tags"></span></p>
				</section>
				<section class="display-mode-buttons id-bubble-marker" data-task-id="">
					<button type="button" id="edit-btn">Edit</button>
					<button type="button" id="delete-btn">Delete</button>
				</section>
			</div>
	`;
	dialog.showModal();
}

function populateDisplay(selectedId) {
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksByProperty("id", selectedId)[0];
	_app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(`display-${prop}`);
		let output = task.getProperty(prop);

		if (prop === "due" && !!output) {
			output = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.formatDate)(output);
		}
		element.textContent = prop === "tags" ? output : (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(output);
	});
	dialog.querySelector(".id-bubble-marker").dataset.taskId = selectedId;
	dialog
		.querySelector(".display-close-btn")
		.addEventListener("click", () => dialog.close());
}

function buildEditMode() {
	dialog.innerHTML = `<form class="edit-mode" method="dialog">
				<section class="edit-mode-details">
					<div class="form-row">
						<div class="form-item">
							<label for="title">Title:</label>
							<input
								type="text"
								id="title"
								class="submit-info"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="project">Project:</label>
							<select id="project" class="submit-info">
								<option value=""></option>
								<!-- Add options here -->
							</select>
						</div>
						<div class="form-item">
							<label for="priority">Priority:</label>
							<select id="priority" class="submit-info">
								<option value=""></option>
								<!-- Add options here -->
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="due">Due:</label>
							<input type="date" id="due" class="submit-info"/>
						</div>
						<div class="form-item">
							<label for="status">Status:</label>
							<select id="status" class="submit-info" required>
								<!-- Add options here -->
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="notes">Notes:</label>
							<textarea id="notes" cols="30" rows="10" class="submit-info"></textarea>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<p>Enter tags separated by commas.</p>
							<label for="tags">Tags:</label>
							<input type="text" id="tags" class="submit-info"/>
						</div>
					</div>
				</section>
				<section class="edit-mode-buttons id-bubble-marker" data-task-id="">
					<button type="submit" id="save-btn">Save</button>
					<button type="button" id="cancel-btn">Cancel</button>
				</section>
			</form>`;
	dialog.showModal();
}

function addDropdowns() {
	[
		["project", _app_controller__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()],
		["priority", _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getPriorityNames()],
		["status", _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getColumnNames()],
	].forEach((pair) => {
		const element = document.getElementById(pair[0]);
		pair[1].forEach((option) => {
			element.appendChild(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(
					(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("option", {
						value: option,
						textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(option),
					})
				)
			);
		});
	});
}

function populateForm(selectedId) {
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksByProperty("id", selectedId)[0];
	_app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(prop);

		switch (prop) {
			case "project":
			case "priority":
			case "status":
				[...element.children].forEach((option) => {
					option.selected = option.value === task.getProperty(prop);
				});
				break;
			case "title":
				element.value = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(task.getProperty(prop));
				break;

			case "notes":
				element.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(task.getProperty(prop));
				break;

			default:
				element.value = task.getProperty(prop);
				break;
		}
	});
	dialog.querySelector(".id-bubble-marker").dataset.taskId = selectedId;
}

function buildProjectMode() {
	dialog.innerHTML = `
		<form class="project-mode">
			<div class="form-item">
				<label for="new-project">New Project:</label>
				<input type="text" id="new-project" required/>
			</div>
			<section class="project-mode-buttons">
				<button type="submit" id="project-save-btn">Submit</button>
				<button type="button" id="project-cancel-btn">
					Cancel
				</button>
			</section>
		</form>`;
	dialog.showModal();
}

function getValuesArray() {
	const submittedInfo = [];
	document.querySelectorAll(".submit-info").forEach((el) => {
		let submitValue = {
			input: el.value,
			select: [...el.children].filter(
				(option) => option.selected === true
			)[0]?.value,
			textarea: el.textContent,
		}[el.tagName.toLowerCase()];
		submittedInfo.push([el.id, submitValue]);
	});
	return submittedInfo;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals */ "./src/modals.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
sidebarOpenBtn.addEventListener("click", () => sidebar.classList.add("open"));
sidebarCloseBtn.addEventListener("click", () =>
	sidebar.classList.remove("open")
);

const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");

const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");

addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
addTaskBtn.addEventListener("click", openEditMode);
addProjectBtn.addEventListener("click", openProjectMode);

const ALL_TASKS = "all-tasks";
let currentProject = ALL_TASKS;

function openDisplayMode(e) {
	addBtn.classList.remove("open");
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildDisplayMode)();
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.populateDisplay)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleTaskDelete);
}

function openEditMode(e) {
	if (e.target !== addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", openEditMode);
		document
			.getElementById("delete-btn")
			.removeEventListener("click", handleTaskDelete);
	}

	addBtn.classList.remove("open");

	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildEditMode)();
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.addDropdowns)();

	if (e.target.id === "edit-btn") {
		(0,_modals__WEBPACK_IMPORTED_MODULE_2__.populateForm)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
	}

	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.addEventListener("click", handleTaskCancel);
}

function openProjectMode() {
	addBtn.classList.toggle("open");
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildProjectMode)();
	//add event listeners
	document
		.querySelector(".project-mode")
		.addEventListener("submit", handleProjectSubmit);
	document
		.getElementById("project-cancel-btn")
		.addEventListener("click", handleProjectCancel);
}

function handleTaskCancel(e) {
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);

	if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target)) {
		openDisplayMode(e);
	} else {
		_modals__WEBPACK_IMPORTED_MODULE_2__.dialog.close();
	}
}

function handleProjectCancel() {
	document
		.querySelector(".project-mode")
		.removeEventListener("submit", handleProjectSubmit);
	document
		.getElementById("project-cancel-btn")
		.removeEventListener("click", handleProjectCancel);

	_modals__WEBPACK_IMPORTED_MODULE_2__.dialog.close();
}

function handleTaskDelete(e) {
	const selectedId = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target);
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getTasksByProperty("id", selectedId)[0];

	const userConfirmed = confirm(
		`Are you sure you want to delete the "${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(
			task.getProperty("title")
		)}" task? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		console.log(selectedId);
		_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.removeTasks(selectedId);
		updateScreen();
	}
}

function handleProjectDelete(e) {
	const selectedProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findProjectName)(e.target);

	const userConfirmed = confirm(
		`Are you sure you want to delete "${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(
			selectedProject
		)}" and all its tasks? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		_app_controller__WEBPACK_IMPORTED_MODULE_0__.Projects.removeProject(selectedProject);
		currentProject =
			selectedProject === currentProject ? ALL_TASKS : currentProject;
		updateScreen();
	}
}

function handleTaskSubmit(e) {
	e.preventDefault();
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);

	const submitId = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(document.getElementById("save-btn"));
	const userConfirmed = confirm(
		`Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`
	);

	if (userConfirmed) {
		const valuesArray = (0,_modals__WEBPACK_IMPORTED_MODULE_2__.getValuesArray)();
		if (submitId === 0) {
			_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.addTask(valuesArray);
		} else {
			_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.updateTask(submitId, valuesArray);
		}
		_modals__WEBPACK_IMPORTED_MODULE_2__.dialog.close();
		updateScreen();
	}
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	_app_controller__WEBPACK_IMPORTED_MODULE_0__.Projects.addProject(newProjectName);
	updateScreen();
}

function updateScreen() {
	if (currentProject === ALL_TASKS) {
		projectDisplayed.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(ALL_TASKS);
		updateTaskColumns(_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getAllTasks());
		updateSidebar();
	} else {
		projectDisplayed.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(currentProject);
		updateTaskColumns(
			_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getSortedTasksByProperty(
				"project",
				currentProject
			)
		);
		updateSidebar();
	}
	_modals__WEBPACK_IMPORTED_MODULE_2__.dialog.close();
}

function updateTaskColumns(displayTasks) {
	// Reset the columns
	[...statusesContainer.children].forEach((row) => (row.textContent = ""));

	// Build column content
	displayTasks.forEach((column, index) => {
		const columnName = column[0];
		const statusName = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(columnName);

		const columnContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)(
			"section",
			{
				classList: "status-column",
				id: `dynamic-${columnName}-column`, //devMode (dynamic)
			},
			[
				(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("h2", {
					classList: "status-name",
					textContent: statusName,
				}),
			]
		);

		// Build task cards
		column[1].forEach((task) => {
			const [title, project, due] = [
				task.getProperty("title"),
				task.getProperty("project"),
				task.getProperty("due"),
			];
			columnContent.children.push(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)(
					"div",
					{
						classList: "task-card id-bubble-marker",
						dataset: {
							priority: task
								.getProperty("priority")
								.toLowerCase(),
							taskId: task.getProperty("id"),
						},
					},
					[
						(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", {
							classList: "title",
							textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(title),
						}),
						(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", { classList: "subtext" }, [
							(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", {
								classList: "project",
								textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(project),
							}),
							(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("div", {
								classList: "date",
								textContent: due ? due : "(date)",
							}),
						]),
					]
				)
			);
		});

		// Append to correct row
		if (index < 2) {
			statusesContainer.firstElementChild.appendChild(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.htmlFactory)(columnContent)
			);
		} else {
			statusesContainer.lastElementChild.appendChild(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.htmlFactory)(columnContent)
			);
		}
	});

	// Make each task clickable
	const TaskCards = document.querySelectorAll(".task-card");
	TaskCards.forEach((card) => {
		card.addEventListener("click", openDisplayMode);
	});
}

function updateSidebar() {
	document.querySelector(".projects-container").remove();
	const replacementContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)(
		"div",
		{ classList: "projects-container" },
		[ALL_TASKS, ..._app_controller__WEBPACK_IMPORTED_MODULE_0__.Projects.getProjects()].map((project) => {
			return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)(
				"div",
				{
					classList: "project-name id-bubble-marker",
					dataset: { projectFilter: project },
				},
				[
					(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("button", {
						type: "button",
						textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(project),
						classList: "project-filter-btn",
					}),
					project === ALL_TASKS
						? ""
						: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.elFactory)("button", {
								type: "button",
								textContent: "D",
								classList: "project-delete-btn",
						  }),
				]
			);
		})
	);

	sidebar.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.htmlFactory)(replacementContainer));
	document.querySelectorAll(".project-filter-btn").forEach((button) => {
		button.addEventListener("click", filterProjectView);
	});
	document.querySelectorAll(".project-delete-btn").forEach((button) => {
		button.addEventListener("click", handleProjectDelete);
	});
}

function filterProjectView(e) {
	currentProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findProjectName)(e.target);
	updateScreen();
	sidebar.classList.remove("open");
}

// Initial call
updateScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPLHdGQUF3RixRQUFRLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsY0FBYyxTQUFTLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLGNBQWMsY0FBYyxNQUFNLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLEtBQUssYUFBYSxjQUFjLE1BQU0sYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVks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LHdEQUFjO0FBQ2pDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLG1EQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHFCQUFxQixxREFBVztBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxrQkFBa0IseURBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGFscy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmJvZHkge1xuXHRtaW4taGVpZ2h0OiAxMDBzdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmxleC1jb250YWluZXIge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1jb250ZW50IHtcblx0LS1tYWluLXNwYWNlcjogMjBweDtcblx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XG5cblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogMTtcblx0Ym90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSArIDQ4cHgpO1xuXHRsZWZ0OiAxMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0Z2FwOiAxMHB4O1xufVxuXG4jYWRkLWJ0biB7XG5cdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuXG4jYWRkLWJ0bi5vcGVuIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jYWRkLWJ0biB+ICoge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jYWRkLWJ0bi5vcGVuIH4gKiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0LmFwcC1jb250ZW50IHtcblx0XHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcblx0XHRtaW4taGVpZ2h0OiA4MHZoO1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xuXHR9XG5cdC5hZGQtY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmhlYWRlciBoMSB7XG5cdG1hcmdpbjogMTBweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jc2lkZWJhci1vcGVuLWJ0biB7XG5cdG1hcmdpbjogMTBweDtcblx0cGFkZGluZzogNXB4IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0I3NpZGViYXItb3Blbi1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNpZGViYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDEwMHN2aDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG5cblx0dHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcblx0d2lkdGg6IDEwMHZ3O1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uc2lkZWJhciA+ICoge1xuXHRvcGFjaXR5OiAwO1xuXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnNpZGViYXIub3BlbiA+ICoge1xuXHRvcGFjaXR5OiAxO1xuXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG59XG5cbi5jbG9zZS1idG4ge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5zaWRlYmFyLFxuXHQuc2lkZWJhci5vcGVuIHtcblx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0aGVpZ2h0OiB1bnNldDtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdHotaW5kZXg6IHVuc2V0O1xuXG5cdFx0dHJhbnNpdGlvbjogbm9uZTtcblx0fVxuXG5cdC5zaWRlYmFyID4gKixcblx0LnNpZGViYXIub3BlbiA+ICoge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQjc2lkZWJhci1jbG9zZS1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2VyKTtcblx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tYWRkLWJ0bi1kaW1zKSArIHZhcigtLW1haW4tc3BhY2VyKSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbiNzdGF0dXNlcy1jb250YWluZXIge1xuXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLnN0YXR1cy1yb3cge1xuXHRmbGV4OiBhdXRvO1xuXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFN0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnN0YXR1cy1jb2x1bW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xuXHRtaW4taGVpZ2h0OiAyNXN2aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4udGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS13aWR0aDogMTJweDtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JleTtcblxuXHRwYWRkaW5nOiA1cHggNXB4IDVweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIDVweCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXG5cdFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXG5cdCk7XG5cblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwiaGlnaFwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHJlZDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ29sZDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibG93XCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XG59XG5cbi5zdWJ0ZXh0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZGlhbG9nIHtcblx0LS1tb2RhbC1zcGFjZXI6IDEycHg7XG5cblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbmRpYWxvZyA+ICoge1xuXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcblx0cGFkZGluZzogdmFyKC0tbW9kYWwtc3BhY2VyKTtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGlzcGxheS1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lZGl0LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi5lZGl0LW1vZGUtZGV0YWlscyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLnByb2plY3QtbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0RpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQSxvREFBb0Q7QUFDcEQsbUVBQW1FOztBQUVuRTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0Qjs7QUFFQSxvRUFBb0U7QUFDcEUsb0RBQW9EOztBQUVwRDtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7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LG1EQUFtRDs7QUFFbkQ7Q0FDQyxZQUFZOztDQUVaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1COztDQUVuQix1QkFBdUI7Q0FDdkIsWUFBWTtBQUNiO0FBQ0Esb0RBQW9EOztBQUVwRCxtREFBbUQ7O0FBRW5EO0NBQ0Msb0JBQW9COztDQUVwQixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLDRCQUE0QjtDQUM1Qix3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTs7Q0FFYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQSxvREFBb0Q7O0FBRXBELHFEQUFxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0LyogY29sb3I6IHVuc2V0OyAqL1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwc3ZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250ZW50IHtcXG5cXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xcblxcdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xcblxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFkZC1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJvdHRvbTogY2FsYyh2YXIoLS1tYWluLXNwYWNlcikgKyA0OHB4KTtcXG5cXHRsZWZ0OiAxMHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuI2FkZC1idG4ge1xcblxcdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNhZGQtYnRuLm9wZW4ge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuI2FkZC1idG4gfiAqIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLWJ0bi5vcGVuIH4gKiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5hcHAtY29udGVudCB7XFxuXFx0XFx0d2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gNDBweCksIDE0MDBweCk7XFxuXFx0XFx0bWluLWhlaWdodDogODB2aDtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG5cXHR9XFxuXFx0LmFkZC1jb250YWluZXIge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRib3R0b206IDEwcHg7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuaGVhZGVyIHtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGhlaWdodDogNjBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jc2lkZWJhci1vcGVuLWJ0biB7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdHBhZGRpbmc6IDVweCA4cHg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQjc2lkZWJhci1vcGVuLWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc2lkZWJhciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAxMDBzdmg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAyMHB4O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuXFxuLnNpZGViYXIub3BlbiB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5zaWRlYmFyID4gKiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxufVxcblxcbi5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuc2lkZWJhcixcXG5cXHQuc2lkZWJhci5vcGVuIHtcXG5cXHRcXHRwb3NpdGlvbjogaW5oZXJpdDtcXG5cXHRcXHR3aWR0aDogdW5zZXQ7XFxuXFx0XFx0aGVpZ2h0OiB1bnNldDtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcblxcdFxcdHotaW5kZXg6IHVuc2V0O1xcblxcblxcdFxcdHRyYW5zaXRpb246IG5vbmU7XFxuXFx0fVxcblxcblxcdC5zaWRlYmFyID4gKixcXG5cXHQuc2lkZWJhci5vcGVuID4gKiB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFxuXFx0I3NpZGViYXItY2xvc2UtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNlcik7XFxuXFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tYWRkLWJ0bi1kaW1zKSArIHZhcigtLW1haW4tc3BhY2VyKSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcXG5cXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLnN0YXR1cy1yb3cge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zdGF0dXMtY29sdW1uIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcXG5cXHRtaW4taGVpZ2h0OiAyNXN2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktd2lkdGg6IDEycHg7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogZ3JleTtcXG5cXG5cXHRwYWRkaW5nOiA1cHggNXB4IDVweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIDVweCk7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0LFxcblxcdFxcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXFxuXFx0XFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXFxuXFx0KTtcXG5cXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWVkaXVtXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdvbGQ7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VidGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZGlhbG9nIHtcXG5cXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5kaWFsb2cgPiAqIHtcXG5cXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uZWRpdC1tb2RlLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5wcm9qZWN0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IFRhc2tzID0gKCgpID0+IHtcblx0bGV0IF90YXNrcyA9IFtdO1xuXHRsZXQgX2lkQ291bnRlciA9IDE7XG5cblx0ZnVuY3Rpb24gX2RhdGVTb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRyZXR1cm4gb3V0Z29pbmdUYXNrczsgLy8gZGV2TW9kZVxuXHR9XG5cblx0Y29uc3QgX2NvbHVtbk5hbWVzID0gW1wiYmFja2xvZ1wiLCBcInRvLWRvXCIsIFwiaW4tcHJvZ3Jlc3NcIiwgXCJkb25lXCJdO1xuXG5cdGxldCBfcHJvcGVydHlOYW1lcyA9IFtcblx0XHRcInRpdGxlXCIsXG5cdFx0XCJzdGF0dXNcIixcblx0XHRcInByb2plY3RcIixcblx0XHRcInByaW9yaXR5XCIsXG5cdFx0XCJub3Rlc1wiLFxuXHRcdFwiZHVlXCIsXG5cdFx0XCJ0YWdzXCIsXG5cdF07XG5cblx0bGV0IF9wcmlvcml0aWVzID0gW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXTtcblxuXHRmdW5jdGlvbiBfY29sdW1uU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0Y29uc3QgY29sdW1uU29ydGVkQXJyYXkgPSBfY29sdW1uTmFtZXMubWFwKChjb2x1bW5OYW1lKSA9PiB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRjb2x1bW5OYW1lLFxuXHRcdFx0XHRfZGF0ZVNvcnQoXG5cdFx0XHRcdFx0b3V0Z29pbmdUYXNrcy5maWx0ZXIoXG5cdFx0XHRcdFx0XHQodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0eShcInN0YXR1c1wiKSA9PT0gY29sdW1uTmFtZVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSxcblx0XHRcdF07XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGNvbHVtblNvcnRlZEFycmF5O1xuXHR9XG5cblx0ZnVuY3Rpb24gX3Rhc2tGYWN0b3J5KCkge1xuXHRcdGNvbnN0IF90YXNrID0ge307XG5cdFx0Y29uc3Qgc2V0UHJvcGVydHkgPSAoa2V5LCB2YWx1ZSkgPT4gKF90YXNrW2tleV0gPSB2YWx1ZSk7XG5cdFx0X3Byb3BlcnR5TmFtZXMuZm9yRWFjaCgocHJvcCkgPT4gc2V0UHJvcGVydHkocHJvcCwgXCJcIikpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRQcm9wZXJ0eTogKGtleSkgPT4gX3Rhc2tba2V5XSxcblx0XHRcdHNldFByb3BlcnR5LFxuXHRcdFx0bG9nRGF0YTogKCkgPT4gT2JqZWN0LmVudHJpZXMoX3Rhc2spLCAvLyBkZXZNb2RlXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2soaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBfdGFza0ZhY3RvcnkoKTtcblx0XHRuZXdUYXNrLnNldFByb3BlcnR5KFwiaWRcIiwgX2lkQ291bnRlcisrKTtcblx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdG5ld1Rhc2suc2V0UHJvcGVydHkocGFpclswXSwgcGFpclsxXSk7XG5cdFx0fSk7XG5cdFx0X3Rhc2tzLnB1c2gobmV3VGFzayk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVUYXNrcyguLi5yZW1vdmVJZHMpIHtcblx0XHRfdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcblx0XHRcdGlmIChyZW1vdmVJZHMuaW5jbHVkZXModGFzay5nZXRQcm9wZXJ0eShcImlkXCIpKSkge1xuXHRcdFx0XHRfdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGRldk1vZGVcblx0XHRfdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4gY29uc29sZS5sb2coaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpKSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVUYXNrKHVwZGF0ZUlkLCBpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0X3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAodXBkYXRlSWQgPT09IHRhc2suZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuXHRcdFx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdFx0XHRfdGFza3NbaW5kZXhdLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRhc2tzQnlQcm9wZXJ0eShwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBfdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KHByb3ApID09PSB2YWx1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRTb3J0ZWRUYXNrc0J5UHJvcGVydHkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gX2NvbHVtblNvcnQoXG5cdFx0XHRfdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KHByb3ApID09PSB2YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRhZGRUYXNrLFxuXHRcdHJlbW92ZVRhc2tzLFxuXHRcdHVwZGF0ZVRhc2ssXG5cdFx0Z2V0QWxsVGFza3M6ICgpID0+IF9jb2x1bW5Tb3J0KF90YXNrcyksXG5cdFx0Z2V0VGFza3NCeVByb3BlcnR5LFxuXHRcdGdldFNvcnRlZFRhc2tzQnlQcm9wZXJ0eSxcblx0XHRnZXRDb2x1bW5OYW1lczogKCkgPT4gX2NvbHVtbk5hbWVzLFxuXHRcdGdldFByaW9yaXR5TmFtZXM6ICgpID0+IF9wcmlvcml0aWVzLFxuXHRcdGdldFByb3BlcnR5TmFtZXM6ICgpID0+IF9wcm9wZXJ0eU5hbWVzLFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gKCgpID0+IHtcblx0bGV0IF9wcm9qZWN0TGlzdCA9IG5ldyBTZXQoW1wiaG9tZVwiLCBcImZpbmFuY2VzXCIsIFwibGVhcm5pbmdcIl0pO1xuXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdE5hbWUpIHtcblx0XHRfcHJvamVjdExpc3QuYWRkKG5ld1Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocmVtb3ZlTmFtZSkge1xuXHRcdGlmIChfcHJvamVjdExpc3QuaGFzKHJlbW92ZU5hbWUpKSB7XG5cdFx0XHQvLyBHZXQgdGFzay5pZCdzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHByb2plY3Rcblx0XHRcdGNvbnN0IHJlbW92ZUlkcyA9IFRhc2tzLmdldFRhc2tzQnlQcm9wZXJ0eShcblx0XHRcdFx0XCJwcm9qZWN0XCIsXG5cdFx0XHRcdHJlbW92ZU5hbWVcblx0XHRcdCkubWFwKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KFwiaWRcIikpO1xuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIHRhc2tzIHdpdGggdGhvc2UgaWQncyBmcm9tIF90YXNrc1xuXHRcdFx0VGFza3MucmVtb3ZlVGFza3MoLi4ucmVtb3ZlSWRzKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3Rcblx0XHRcdF9wcm9qZWN0TGlzdC5kZWxldGUocmVtb3ZlTmFtZSk7XG5cblx0XHRcdC8vIGRldk1vZGVcblx0XHRcdGNvbnNvbGUubG9nKF9wcm9qZWN0TGlzdCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRhZGRQcm9qZWN0LFxuXHRcdHJlbW92ZVByb2plY3QsXG5cdFx0Z2V0UHJvamVjdHM6ICgpID0+IFsuLi5fcHJvamVjdExpc3RdLnNvcnQoKSxcblx0fTtcbn0pKCk7XG5cbmNvbnN0IF9hZGREZWZhdWx0cyA9ICgoKSA9PiB7XG5cdGNvbnN0IGRlZmF1bHRUYXNrcyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJwYXkgYmlsbHNcIixcblx0XHRcdHN0YXR1czogXCJpbi1wcm9ncmVzc1wiLFxuXHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxuXHRcdFx0bm90ZXM6IFwidGhlIHJlbnQgaXMgdG9vIGRhbW4gaGlnaFwiLFxuXHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDFcIixcblx0XHRcdHRhZ3M6IFwiXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJncm9jZXJpZXNcIixcblx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0cHJvamVjdDogXCJob21lXCIsXG5cdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0ZHVlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiZmlsZSB0YXhlc1wiLFxuXHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHRkdWU6IFwiXCIsXG5cdFx0XHR0YWdzOiBcIlwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwicmVhZCBDaGVraG92XCIsXG5cdFx0XHRzdGF0dXM6IFwiYmFja2xvZ1wiLFxuXHRcdFx0cHJvamVjdDogXCJsZWFybmluZ1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwibG93XCIsXG5cdFx0XHRub3RlczogXCJcIixcblx0XHRcdGR1ZTogXCJcIixcblx0XHRcdHRhZ3M6IFwiXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJyZXBsYWNlIGxpZ2h0YnVsYlwiLFxuXHRcdFx0c3RhdHVzOiBcInRvLWRvXCIsXG5cdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0bm90ZXM6IFwiYmF0aHJvb20gbGlnaHQgaXMgZmxpY2tlcmluZ1wiLFxuXHRcdFx0ZHVlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdH0sXG5cdF0ubWFwKChpdGVtKSA9PiBPYmplY3QuZW50cmllcyhpdGVtKSk7XG5cblx0ZGVmYXVsdFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRUYXNrcy5hZGRUYXNrKGl0ZW0pO1xuXHR9KTtcblxuXHQvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhpbmdzIGFyZSBhZGRpbmcgY29ycmVjdGx5LiBkZXZNb2RlXG5cdGNvbnN0IHRlc3REZWZhdWx0VGFza3MgPSBUYXNrcy5nZXRBbGxUYXNrcygpO1xuXHR0ZXN0RGVmYXVsdFRhc2tzLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgQ29sdW1uOiAke2NvbHVtblswXX1gKTtcblx0XHRjb2x1bW5bMV0uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGBcXHRUYXNrIGF0OiAke2luZGV4fWApO1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdGBcXHRcXHQke3Rhc2subG9nRGF0YSgpLmpvaW4oXCJcXG5cXHRcXHRcIikuc3BsaXQoXCIsXCIpLmpvaW4oXCI6IFwiKX1gXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKFwiXFxuXCIpO1xuXHR9KTtcbn0pKCk7XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBET00gRmFjdG9yaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBlbEZhY3RvcnkodHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gPSBbXSkge1xuXHRyZXR1cm4geyB0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZhY3Rvcnkob2JqKSB7XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcztcblxuXHRmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChrZXkgIT09IFwiZGF0YXNldFwiKSB7XG5cdFx0XHRlbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTcGVjaWFsIGRpcmVjdGlvbnMgbmVlZGVkIHRvIHNldCBcImRhdGEtXCIgcHJvcGVydGllc1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wIGluIGF0dHJpYnV0ZXNba2V5XSkge1xuXHRcdFx0XHRlbC5kYXRhc2V0W3Byb3BdID0gYXR0cmlidXRlc1trZXldW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9iai5jaGlsZHJlbj8uZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHQvLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsbHkgYWRkaW5nIGNoaWxkcmVuIHVwc3RyZWFtIGJ5XG5cdFx0Ly8gc2V0dGluZyBcIlwiIGFzIHRoZSBhbHRlcm5hdGl2ZSB0byBlbEZhY3RvcnkoKVxuXHRcdGlmICghIWNoaWxkKSB7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShjaGlsZCkpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBPdGhlciBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFza0lkKHRhcmdldCkge1xuXHRyZXR1cm4gKyh0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiaWQtYnViYmxlLW1hcmtlclwiKVxuXHRcdD8gdGFyZ2V0LmRhdGFzZXQudGFza0lkXG5cdFx0OiBmaW5kVGFza0lkKHRhcmdldC5wYXJlbnRFbGVtZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvamVjdE5hbWUodGFyZ2V0KSB7XG5cdHJldHVybiB0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiaWQtYnViYmxlLW1hcmtlclwiKVxuXHRcdD8gdGFyZ2V0LmRhdGFzZXQucHJvamVjdEZpbHRlclxuXHRcdDogZmluZFByb2plY3ROYW1lKHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGaXJzdFVwcGVyKHN0cmluZykge1xuXHRyZXR1cm4gISFzdHJpbmdcblx0XHQ/IHN0cmluZ1xuXHRcdFx0XHQuc3BsaXQoXCItXCIpXG5cdFx0XHRcdC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG5cdFx0XHRcdC5qb2luKFwiIFwiKVxuXHRcdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29EYXRlKSB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHtpc29EYXRlfVQxMjowMDowMC0wNDowMGApO1xuXHRjb25zdCBkYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuXHRjb25zdCBtb250aHMgPSBbXG5cdFx0XCJKYW5cIixcblx0XHRcIkZlYlwiLFxuXHRcdFwiTWFyXCIsXG5cdFx0XCJBcHJcIixcblx0XHRcIk1heVwiLFxuXHRcdFwiSnVuZVwiLFxuXHRcdFwiSnVseVwiLFxuXHRcdFwiQXVnXCIsXG5cdFx0XCJTZXB0XCIsXG5cdFx0XCJPY3RcIixcblx0XHRcIk5vdlwiLFxuXHRcdFwiRGVjXCIsXG5cdF07XG5cblx0cmV0dXJuIGAke2RheXNbZGF0ZS5nZXREYXkoKV19LCAke2RhdGUuZ2V0RGF0ZSgpfSAke1xuXHRcdG1vbnRoc1tkYXRlLmdldE1vbnRoKCldXG5cdH0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbn1cbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgZm9ybWF0RGF0ZSwgaHRtbEZhY3RvcnksIG1ha2VGaXJzdFVwcGVyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0ICogYXMgYXBwQ29udHJvbGxlciBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQgPT09IGRpYWxvZykgZGlhbG9nLmNsb3NlKCk7XG59KTtcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuXHRkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktbW9kZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgaWQ9XCJkaXNwbGF5LXRpdGxlXCI+PC9oMz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuIGRpc3BsYXktY2xvc2UtYnRuXCI+w5c8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0PHA+UHJvamVjdDogPHNwYW4gaWQ9XCJkaXNwbGF5LXByb2plY3RcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPlByaW9yaXR5OiA8c3BhbiBpZD1cImRpc3BsYXktcHJpb3JpdHlcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPkR1ZTogPHNwYW4gaWQ9XCJkaXNwbGF5LWR1ZVwiPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0PHA+U3RhdHVzOiA8c3BhbiBpZD1cImRpc3BsYXktc3RhdHVzXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0XHQ8cD5Ob3Rlczo8c3BhbiBpZD1cImRpc3BsYXktbm90ZXNcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPlRhZ3M6IDxzcGFuIGlkPVwiZGlzcGxheS10YWdzXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1idXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIiBkYXRhLXRhc2staWQ9XCJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVkaXQtYnRuXCI+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlLWJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KHNlbGVjdGVkSWQpIHtcblx0Y29uc3QgdGFzayA9IGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0VGFza3NCeVByb3BlcnR5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF07XG5cdGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0UHJvcGVydHlOYW1lcygpLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRpc3BsYXktJHtwcm9wfWApO1xuXHRcdGxldCBvdXRwdXQgPSB0YXNrLmdldFByb3BlcnR5KHByb3ApO1xuXG5cdFx0aWYgKHByb3AgPT09IFwiZHVlXCIgJiYgISFvdXRwdXQpIHtcblx0XHRcdG91dHB1dCA9IGZvcm1hdERhdGUob3V0cHV0KTtcblx0XHR9XG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IHByb3AgPT09IFwidGFnc1wiID8gb3V0cHV0IDogbWFrZUZpcnN0VXBwZXIob3V0cHV0KTtcblx0fSk7XG5cdGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmlkLWJ1YmJsZS1tYXJrZXJcIikuZGF0YXNldC50YXNrSWQgPSBzZWxlY3RlZElkO1xuXHRkaWFsb2dcblx0XHQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNsb3NlLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9nLmNsb3NlKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFZGl0TW9kZSgpIHtcblx0ZGlhbG9nLmlubmVySFRNTCA9IGA8Zm9ybSBjbGFzcz1cImVkaXQtbW9kZVwiIG1ldGhvZD1cImRpYWxvZ1wiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImVkaXQtbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInRpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInN1Ym1pdC1pbmZvXCJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJvamVjdFwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSBBZGQgb3B0aW9ucyBoZXJlIC0tPlxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gQWRkIG9wdGlvbnMgaGVyZSAtLT5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImR1ZVwiPkR1ZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZVwiIGNsYXNzPVwic3VibWl0LWluZm9cIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwic3RhdHVzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gQWRkIG9wdGlvbnMgaGVyZSAtLT5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGlkPVwibm90ZXNcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8cD5FbnRlciB0YWdzIHNlcGFyYXRlZCBieSBjb21tYXMuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFnc1wiPlRhZ3M6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YWdzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZWRpdC1tb2RlLWJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiIGRhdGEtdGFzay1pZD1cIlwiPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic2F2ZS1idG5cIj5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZm9ybT5gO1xuXHRkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREcm9wZG93bnMoKSB7XG5cdFtcblx0XHRbXCJwcm9qZWN0XCIsIGFwcENvbnRyb2xsZXIuUHJvamVjdHMuZ2V0UHJvamVjdHMoKV0sXG5cdFx0W1wicHJpb3JpdHlcIiwgYXBwQ29udHJvbGxlci5UYXNrcy5nZXRQcmlvcml0eU5hbWVzKCldLFxuXHRcdFtcInN0YXR1c1wiLCBhcHBDb250cm9sbGVyLlRhc2tzLmdldENvbHVtbk5hbWVzKCldLFxuXHRdLmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFpclswXSk7XG5cdFx0cGFpclsxXS5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogb3B0aW9uLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKG9wdGlvbiksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUZvcm0oc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gYXBwQ29udHJvbGxlci5UYXNrcy5nZXRUYXNrc0J5UHJvcGVydHkoXCJpZFwiLCBzZWxlY3RlZElkKVswXTtcblx0YXBwQ29udHJvbGxlci5UYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKTtcblxuXHRcdHN3aXRjaCAocHJvcCkge1xuXHRcdFx0Y2FzZSBcInByb2plY3RcIjpcblx0XHRcdGNhc2UgXCJwcmlvcml0eVwiOlxuXHRcdFx0Y2FzZSBcInN0YXR1c1wiOlxuXHRcdFx0XHRbLi4uZWxlbWVudC5jaGlsZHJlbl0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09PSB0YXNrLmdldFByb3BlcnR5KHByb3ApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidGl0bGVcIjpcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IG1ha2VGaXJzdFVwcGVyKHRhc2suZ2V0UHJvcGVydHkocHJvcCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcIm5vdGVzXCI6XG5cdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcih0YXNrLmdldFByb3BlcnR5KHByb3ApKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSB0YXNrLmdldFByb3BlcnR5KHByb3ApO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0PGZvcm0gY2xhc3M9XCJwcm9qZWN0LW1vZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cIm5ldy1wcm9qZWN0XCI+TmV3IFByb2plY3Q6PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctcHJvamVjdFwiIHJlcXVpcmVkLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJwcm9qZWN0LW1vZGUtYnV0dG9uc1wiPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInByb2plY3Qtc2F2ZS1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm9qZWN0LWNhbmNlbC1idG5cIj5cblx0XHRcdFx0XHRDYW5jZWxcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlc0FycmF5KCkge1xuXHRjb25zdCBzdWJtaXR0ZWRJbmZvID0gW107XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3VibWl0LWluZm9cIikuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRsZXQgc3VibWl0VmFsdWUgPSB7XG5cdFx0XHRpbnB1dDogZWwudmFsdWUsXG5cdFx0XHRzZWxlY3Q6IFsuLi5lbC5jaGlsZHJlbl0uZmlsdGVyKFxuXHRcdFx0XHQob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQgPT09IHRydWVcblx0XHRcdClbMF0/LnZhbHVlLFxuXHRcdFx0dGV4dGFyZWE6IGVsLnRleHRDb250ZW50LFxuXHRcdH1bZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcblx0XHRzdWJtaXR0ZWRJbmZvLnB1c2goW2VsLmlkLCBzdWJtaXRWYWx1ZV0pO1xuXHR9KTtcblx0cmV0dXJuIHN1Ym1pdHRlZEluZm87XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBhcHBDb250cm9sbGVyIGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQge1xuXHRlbEZhY3RvcnksXG5cdGh0bWxGYWN0b3J5LFxuXHRmaW5kVGFza0lkLFxuXHRtYWtlRmlyc3RVcHBlcixcblx0ZmluZFByb2plY3ROYW1lLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQge1xuXHRhZGREcm9wZG93bnMsXG5cdGJ1aWxkRGlzcGxheU1vZGUsXG5cdGJ1aWxkRWRpdE1vZGUsXG5cdGJ1aWxkUHJvamVjdE1vZGUsXG5cdGRpYWxvZyxcblx0Z2V0VmFsdWVzQXJyYXksXG5cdHBvcHVsYXRlRGlzcGxheSxcblx0cG9wdWxhdGVGb3JtLFxufSBmcm9tIFwiLi9tb2RhbHNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHNpZGViYXJPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLW9wZW4tYnRuXCIpO1xuY29uc3Qgc2lkZWJhckNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNsb3NlLWJ0blwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5zaWRlYmFyT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKSk7XG5zaWRlYmFyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG5cdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIilcbik7XG5cbmNvbnN0IHByb2plY3REaXNwbGF5ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGlzcGxheWVkXCIpO1xuY29uc3Qgc3RhdHVzZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c2VzLWNvbnRhaW5lclwiKTtcblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtYnRuXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuXCIpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKSk7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdE1vZGUpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RNb2RlKTtcblxuY29uc3QgQUxMX1RBU0tTID0gXCJhbGwtdGFza3NcIjtcbmxldCBjdXJyZW50UHJvamVjdCA9IEFMTF9UQVNLUztcblxuZnVuY3Rpb24gb3BlbkRpc3BsYXlNb2RlKGUpIHtcblx0YWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRidWlsZERpc3BsYXlNb2RlKCk7XG5cdHBvcHVsYXRlRGlzcGxheShmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kZSk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0RlbGV0ZSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0TW9kZShlKSB7XG5cdGlmIChlLnRhcmdldCAhPT0gYWRkVGFza0J0bikge1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKVxuXHRcdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdE1vZGUpO1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tEZWxldGUpO1xuXHR9XG5cblx0YWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXG5cdGJ1aWxkRWRpdE1vZGUoKTtcblx0YWRkRHJvcGRvd25zKCk7XG5cblx0aWYgKGUudGFyZ2V0LmlkID09PSBcImVkaXQtYnRuXCIpIHtcblx0XHRwb3B1bGF0ZUZvcm0oZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXHR9XG5cblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVUYXNrU3VibWl0KTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrQ2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RNb2RlKCkge1xuXHRhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdGJ1aWxkUHJvamVjdE1vZGUoKTtcblx0Ly9hZGQgZXZlbnQgbGlzdGVuZXJzXG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NhbmNlbChlKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cblx0aWYgKGZpbmRUYXNrSWQoZS50YXJnZXQpKSB7XG5cdFx0b3BlbkRpc3BsYXlNb2RlKGUpO1xuXHR9IGVsc2Uge1xuXHRcdGRpYWxvZy5jbG9zZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDYW5jZWwoKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcblxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0RlbGV0ZShlKSB7XG5cdGNvbnN0IHNlbGVjdGVkSWQgPSBmaW5kVGFza0lkKGUudGFyZ2V0KTtcblx0Y29uc3QgdGFzayA9IGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0VGFza3NCeVByb3BlcnR5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF07XG5cblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJ0aXRsZVwiKVxuXHRcdCl9XCIgdGFzaz8gXFxuVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5gXG5cdCk7XG5cblx0aWYgKHVzZXJDb25maXJtZWQpIHtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZElkKTtcblx0XHRhcHBDb250cm9sbGVyLlRhc2tzLnJlbW92ZVRhc2tzKHNlbGVjdGVkSWQpO1xuXHRcdHVwZGF0ZVNjcmVlbigpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3REZWxldGUoZSkge1xuXHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUoZS50YXJnZXQpO1xuXG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHNlbGVjdGVkUHJvamVjdFxuXHRcdCl9XCIgYW5kIGFsbCBpdHMgdGFza3M/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuYFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0YXBwQ29udHJvbGxlci5Qcm9qZWN0cy5yZW1vdmVQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG5cdFx0Y3VycmVudFByb2plY3QgPVxuXHRcdFx0c2VsZWN0ZWRQcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdCA/IEFMTF9UQVNLUyA6IGN1cnJlbnRQcm9qZWN0O1xuXHRcdHVwZGF0ZVNjcmVlbigpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tTdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cblx0Y29uc3Qgc3VibWl0SWQgPSBmaW5kVGFza0lkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idG5cIikpO1xuXHRjb25zdCB1c2VyQ29uZmlybWVkID0gY29uZmlybShcblx0XHRgUmVhZHkgdG8gc3VibWl0ICR7c3VibWl0SWQgPT09IDAgPyBcImEgbmV3IHRhc2tcIiA6IFwieW91ciBjaGFuZ2VzXCJ9P2Bcblx0KTtcblxuXHRpZiAodXNlckNvbmZpcm1lZCkge1xuXHRcdGNvbnN0IHZhbHVlc0FycmF5ID0gZ2V0VmFsdWVzQXJyYXkoKTtcblx0XHRpZiAoc3VibWl0SWQgPT09IDApIHtcblx0XHRcdGFwcENvbnRyb2xsZXIuVGFza3MuYWRkVGFzayh2YWx1ZXNBcnJheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFwcENvbnRyb2xsZXIuVGFza3MudXBkYXRlVGFzayhzdWJtaXRJZCwgdmFsdWVzQXJyYXkpO1xuXHRcdH1cblx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHR1cGRhdGVTY3JlZW4oKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIikudmFsdWU7XG5cdGFwcENvbnRyb2xsZXIuUHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG5cdHVwZGF0ZVNjcmVlbigpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG5cdGlmIChjdXJyZW50UHJvamVjdCA9PT0gQUxMX1RBU0tTKSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKEFMTF9UQVNLUyk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoYXBwQ29udHJvbGxlci5UYXNrcy5nZXRBbGxUYXNrcygpKTtcblx0XHR1cGRhdGVTaWRlYmFyKCk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKGN1cnJlbnRQcm9qZWN0KTtcblx0XHR1cGRhdGVUYXNrQ29sdW1ucyhcblx0XHRcdGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0U29ydGVkVGFza3NCeVByb3BlcnR5KFxuXHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0Y3VycmVudFByb2plY3Rcblx0XHRcdClcblx0XHQpO1xuXHRcdHVwZGF0ZVNpZGViYXIoKTtcblx0fVxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbHVtbnMoZGlzcGxheVRhc2tzKSB7XG5cdC8vIFJlc2V0IHRoZSBjb2x1bW5zXG5cdFsuLi5zdGF0dXNlc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocm93KSA9PiAocm93LnRleHRDb250ZW50ID0gXCJcIikpO1xuXG5cdC8vIEJ1aWxkIGNvbHVtbiBjb250ZW50XG5cdGRpc3BsYXlUYXNrcy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgY29sdW1uTmFtZSA9IGNvbHVtblswXTtcblx0XHRjb25zdCBzdGF0dXNOYW1lID0gbWFrZUZpcnN0VXBwZXIoY29sdW1uTmFtZSk7XG5cblx0XHRjb25zdCBjb2x1bW5Db250ZW50ID0gZWxGYWN0b3J5KFxuXHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtY29sdW1uXCIsXG5cdFx0XHRcdGlkOiBgZHluYW1pYy0ke2NvbHVtbk5hbWV9LWNvbHVtbmAsIC8vZGV2TW9kZSAoZHluYW1pYylcblx0XHRcdH0sXG5cdFx0XHRbXG5cdFx0XHRcdGVsRmFjdG9yeShcImgyXCIsIHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwic3RhdHVzLW5hbWVcIixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogc3RhdHVzTmFtZSxcblx0XHRcdFx0fSksXG5cdFx0XHRdXG5cdFx0KTtcblxuXHRcdC8vIEJ1aWxkIHRhc2sgY2FyZHNcblx0XHRjb2x1bW5bMV0uZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0Y29uc3QgW3RpdGxlLCBwcm9qZWN0LCBkdWVdID0gW1xuXHRcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwidGl0bGVcIiksXG5cdFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJwcm9qZWN0XCIpLFxuXHRcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwiZHVlXCIpLFxuXHRcdFx0XTtcblx0XHRcdGNvbHVtbkNvbnRlbnQuY2hpbGRyZW4ucHVzaChcblx0XHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInRhc2stY2FyZCBpZC1idWJibGUtbWFya2VyXCIsXG5cdFx0XHRcdFx0XHRkYXRhc2V0OiB7XG5cdFx0XHRcdFx0XHRcdHByaW9yaXR5OiB0YXNrXG5cdFx0XHRcdFx0XHRcdFx0LmdldFByb3BlcnR5KFwicHJpb3JpdHlcIilcblx0XHRcdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0dGFza0lkOiB0YXNrLmdldFByb3BlcnR5KFwiaWRcIiksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcih0aXRsZSksXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzdWJ0ZXh0XCIgfSwgW1xuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHByb2plY3QpLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZGF0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBkdWUgPyBkdWUgOiBcIihkYXRlKVwiLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0byBjb3JyZWN0IHJvd1xuXHRcdGlmIChpbmRleCA8IDIpIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBNYWtlIGVhY2ggdGFzayBjbGlja2FibGVcblx0Y29uc3QgVGFza0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIik7XG5cdFRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRpc3BsYXlNb2RlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpZGViYXIoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuXHRjb25zdCByZXBsYWNlbWVudENvbnRhaW5lciA9IGVsRmFjdG9yeShcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NMaXN0OiBcInByb2plY3RzLWNvbnRhaW5lclwiIH0sXG5cdFx0W0FMTF9UQVNLUywgLi4uYXBwQ29udHJvbGxlci5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpXS5tYXAoKHByb2plY3QpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1uYW1lIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRkYXRhc2V0OiB7IHByb2plY3RGaWx0ZXI6IHByb2plY3QgfSxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHByb2plY3QpLFxuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZmlsdGVyLWJ0blwiLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHByb2plY3QgPT09IEFMTF9UQVNLU1xuXHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHQ6IGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCJEXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0ICB9KSxcblx0XHRcdFx0XVxuXHRcdFx0KTtcblx0XHR9KVxuXHQpO1xuXG5cdHNpZGViYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkocmVwbGFjZW1lbnRDb250YWluZXIpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWZpbHRlci1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaWx0ZXJQcm9qZWN0Vmlldyk7XG5cdH0pO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGVsZXRlLWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3REZWxldGUpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUHJvamVjdFZpZXcoZSkge1xuXHRjdXJyZW50UHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZShlLnRhcmdldCk7XG5cdHVwZGF0ZVNjcmVlbigpO1xuXHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xufVxuXG4vLyBJbml0aWFsIGNhbGxcbnVwZGF0ZVNjcmVlbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9