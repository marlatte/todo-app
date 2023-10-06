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
}

.sidebar.open {
	width: 80vw;
	padding: 20px;
}

#sidebar-close-btn {
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
	}

	#sidebar-close-btn {
		display: none;
	}

	.project-delete-btn {
		display: none;
	}

	.project-name:hover .project-delete-btn {
		display: block;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: red;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n.flex-container {\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.app-content {\n\t--main-spacer: 20px;\n\t--add-btn-dims: 50px;\n\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #fff;\n}\n\n.add-container {\n\tposition: fixed;\n\tz-index: 1;\n\tbottom: calc(var(--main-spacer) + 48px);\n\tleft: 10px;\n\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\tgap: 10px;\n}\n\n#add-btn {\n\theight: var(--add-btn-dims);\n\twidth: var(--add-btn-dims);\n\tdisplay: grid;\n\tplace-content: center;\n\n\tborder-radius: var(--add-btn-dims);\n\tborder: 2px solid white;\n\tbackground-color: black;\n\tcolor: white;\n\tfont-size: 40px;\n}\n\n#add-btn.open {\n\ttransform: rotate(45deg);\n}\n\n#add-btn ~ * {\n\tdisplay: none;\n}\n\n#add-btn.open ~ * {\n\tdisplay: block;\n}\n\n@media (min-width: 700px) {\n\t.app-content {\n\t\twidth: min(calc(100vw - 40px), 1400px);\n\t\tmin-height: 80vh;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tgrid-template-rows: 60px auto;\n\t}\n\t.add-container {\n\t\tposition: absolute;\n\t\tbottom: 10px;\n\t}\n}\n\n/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tborder-bottom: 1px solid black;\n}\n\nheader h1 {\n\tmargin: 10px;\n\tfont-style: italic;\n}\n\n#sidebar-open-btn {\n\tmargin: 10px;\n\tpadding: 5px 8px;\n\tfont-size: 20px;\n}\n\n@media (min-width: 700px) {\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 0;\n\theight: 100svh;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\n\tbackground-color: wheat;\n}\n\n.sidebar.open {\n\twidth: 80vw;\n\tpadding: 20px;\n}\n\n#sidebar-close-btn {\n\talign-self: flex-end;\n\tpadding: 10px;\n}\n\n.projects-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.project-name {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n@media (min-width: 700px) {\n\t.sidebar,\n\t.sidebar.open {\n\t\tposition: inherit;\n\t\twidth: unset;\n\t\theight: unset;\n\t\tpadding: 20px;\n\t\tz-index: unset;\n\t}\n\n\t#sidebar-close-btn {\n\t\tdisplay: none;\n\t}\n\n\t.project-delete-btn {\n\t\tdisplay: none;\n\t}\n\n\t.project-name:hover .project-delete-btn {\n\t\tdisplay: block;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tposition: relative;\n\tpadding: var(--main-spacer);\n\tpadding-bottom: calc(var(--add-btn-dims) + var(--main-spacer));\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--main-spacer);\n}\n\n#statuses-container {\n\t--status-spacer: 10px;\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n.status-row {\n\tflex: auto;\n\twidth: min(480px, 100%);\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n/* ---------------     Status columns     --------------- */\n\n.status-column {\n\tflex: 1;\n\tpadding: var(--status-spacer);\n\tmin-width: min(230px, 100%);\n\tmin-height: 25svh;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--status-spacer);\n\tborder: 1px solid black;\n\tborder-radius: 6px;\n}\n\n.task-card {\n\t--priority-width: 12px;\n\t--priority-color: grey;\n\n\tpadding: 5px 5px 5px calc(var(--priority-width) + 5px);\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--priority-color) var(--priority-width),\n\t\ttransparent var(--priority-width)\n\t);\n\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n}\n\n.task-card[data-priority=\"high\"] {\n\t--priority-color: red;\n}\n\n.task-card[data-priority=\"medium\"] {\n\t--priority-color: gold;\n}\n\n.task-card[data-priority=\"low\"] {\n\t--priority-color: green;\n}\n\n.subtext {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n/* ---------------     /Status columns     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: black;\n\tcolor: white;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     Dialog     --------------- */\n\ndialog {\n\t--modal-spacer: 12px;\n\n\tmargin: auto;\n\tborder: none;\n}\n\ndialog > * {\n\twidth: min(88vw, 500px);\n\tpadding: var(--modal-spacer);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\n.display-mode {\n\tdisplay: flex;\n\n\tbackground-color: wheat;\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: cadetblue;\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n/* ---------------     /Dialog     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


const Tasks = (() => {
	let _tasks = [];
	let _idCounter = 0;

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
		"dueDate",
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
		const setProperty = (key, value) => {
			_task[key] = "title project priority notes".includes(key)
				? (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(value)
				: value;
		};
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

	return {
		addTask,
		removeTasks,
		updateTask,
		getAllTasks: () => _columnSort(_tasks),
		getTasksByProperty,
		getColumnNames: () => _columnNames,
		getPriorityNames: () => _priorities,
		getPropertyNames: () => _propertyNames,
	};
})();

const Projects = (() => {
	let _projectList = ["home", "finances", "learning"];

	function addProject(newProjectName) {
		_projectList.push(newProjectName);
	}
	function removeProject(removeName) {
		if (_projectList.includes(removeName)) {
			// Get task.id's associated with that project
			const removeIds = Tasks.getTasksByProperty(
				"project",
				removeName
			).map((task) => task.getProperty("id"));

			// Remove all tasks with those id's from _tasks
			Tasks.removeTasks(...removeIds);

			// Remove name from project list
			_projectList.splice(_projectList.indexOf(removeName), 1);

			// devMode
			console.log(_projectList);
		}
	}

	return {
		addProject,
		removeProject,
		getProjects: () => _projectList.sort(),
	};
})();

const _addDefaults = (() => {
	const defaultTasks = [
		{
			title: "Pay bills",
			status: "in-progress",
			project: "finances",
			priority: "high",
			notes: "The rent is too damn high",
			dueDate: "2023-11-01",
			tags: "",
		},
		{
			title: "groceries",
			status: "to-do",
			project: "home",
			priority: "medium",
			notes: "",
			dueDate: "",
			tags: "store",
		},
		{
			title: "file taxes",
			status: "backlog",
			project: "finances",
			priority: "medium",
			notes: "",
			dueDate: "",
			tags: "",
		},
		{
			title: "read Chekhov",
			status: "backlog",
			project: "learning",
			priority: "Low",
			notes: "",
			dueDate: "",
			tags: "",
		},
		{
			title: "replace lightbulb",
			status: "to-do",
			project: "home",
			priority: "medium",
			notes: "Bathroom light is flickering",
			dueDate: "",
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
/* harmony export */   findTaskId: () => (/* binding */ findTaskId),
/* harmony export */   formRowFactory: () => (/* binding */ formRowFactory),
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
		el.appendChild(htmlFactory(child));
	});

	return el;
}

function formRowFactory(formDataArrays) {
	return formDataArrays
		.map((formData) => {
			const kebab = formData[1].toLowerCase().split(" ").join("-");
			const formItem = elFactory("div", { classList: "form-item" }, [
				elFactory("label", {
					htmlFor: kebab,
					textContent: formData[1] + ":",
				}),
			]);

			switch (formData[0]) {
				case "input":
					formItem.children.push(
						elFactory("input", {
							id: kebab,
							value: formData[2],
							type: formData[3],
						})
					);
					break;

				case "select":
					formItem.children.push(
						elFactory(
							"select",
							{
								id: kebab,
							},
							[
								elFactory("option"),
								...formData[3].map((option) => {
									return elFactory("option", {
										value: option,
										textContent: makeFirstUpper(option),
										selected:
											formData[2].toLowerCase() ===
											option,
									});
								}),
							]
						)
					);
					break;
				case "textarea":
					formItem.children.push(
						elFactory("textarea", {
							id: kebab,
							cols: 30,
							rows: 10,
							textContent: formData[2],
						})
					);
					break;
			}

			return formItem;
		})
		.reduce((acc, currentItem, index) => {
			if (!(index & 1)) {
				// If even, create row with currentItem as a child
				acc.push(
					elFactory("div", { classList: "form-row" }, [currentItem])
				);
				return acc;
			} else {
				// If odd, add currentItem to previous row
				acc[acc.length - 1].children.push(currentItem);
				return acc;
			}
		}, []);
}

// ------------------------------------------------------- //
// -------------------- Other Helpers -------------------- //
// ------------------------------------------------------- //

function findTaskId(target) {
	return target.classList.value.includes("id-bubble-marker")
		? target.dataset.taskId
		: findTaskId(target.parentElement);
}

function makeFirstUpper(string) {
	return !!string
		? string
				.split("-")
				.map((word) => word[0].toUpperCase() + word.slice(1))
				.join(" ")
		: string;
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
/* harmony export */   populateForm: () => (/* binding */ populateForm)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");



const dialog = document.querySelector("dialog");

function buildDisplayMode(selectedId) {
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksByProperty("id", +selectedId)[0];

	// Returns nested elFactories to append to dialog
	return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(
		(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("div", { classList: "display-mode" }, [
			(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("section", { classList: "display-mode-header" }, [
				(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("h3", {
					classList: "display-title",
					textContent: task.getProperty("title"),
				}),
				(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
					type: "button",
					classList: "close-btn",
					textContent: "×",
				}),
			]),
			(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
				"section",
				{ classList: "display-mode-details" },
				// Add details!!!!
				[
					"project",
					"priority",
					"due-date",
					"status",
					"notes",
					"tags",
				].map((prop) => {
					return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
						"p",
						{
							textContent: `${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(prop)}: `,
						},
						[
							(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("span", {
								classList: `display-${prop}`,
								textContent: task.getProperty(prop),
							}),
						]
					);
				})
			),
			(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)(
				"section",
				{
					classList: "display-mode-buttons id-bubble-marker",
					dataset: { taskId: selectedId },
				},
				[
					(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
						type: "button",
						id: "edit-btn",
						textContent: "Edit",
					}),
					(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("button", {
						type: "button",
						id: "delete-btn",
						textContent: "Delete",
					}),
				]
			),
		])
	);
}

// export function buildEditMode(selectedId = "") {
// 	// Builds a form, adds relevant task info IF an id is supplied
// 	const task = selectedId
// 		? appController.Tasks.getTasksByProperty("id", +selectedId)[0]
// 		: { getProperty: (prop) => "" };

// 	const titleRow = formRowFactory([
// 		["input", "Title", task.getProperty("title"), "text"],
// 	]);

// 	const middleRows = formRowFactory([
// 		[
// 			"select",
// 			"Project",
// 			task.getProperty("project"),
// 			appController.Projects.getProjects(),
// 		],
// 		[
// 			"select",
// 			"Priority",
// 			task.getProperty("priority"),
// 			["high", "medium", "low"],
// 		],
// 		["input", "Due Date", task.getProperty("dueDate"), "date"],
// 		[
// 			"select",
// 			"Status",
// 			task.getProperty("status"),
// 			appController.Tasks.getColumnNames(),
// 		],
// 		["textarea", "Notes", task.getProperty("notes")],
// 	]);

// 	const tagsRow = formRowFactory([
// 		["input", "Tags", task.getProperty("tags"), "text"],
// 	]);

// 	tagsRow[0].children[0].children.unshift(
// 		elFactory("p", { textContent: "Enter tags separated by commas." })
// 	);

// 	return htmlFactory(
// 		elFactory("div", { classList: "edit-mode" }, [
// 			elFactory("section", { classList: "edit-mode-details" }, [
// 				...titleRow,
// 				...middleRows,
// 				...tagsRow,
// 			]),
// 			elFactory(
// 				"section",
// 				{
// 					classList: "edit-mode-buttons id-bubble-marker",
// 					dataset: { taskId: selectedId },
// 				},
// 				[
// 					elFactory("button", {
// 						type: "submit",
// 						id: "save-btn",
// 						textContent: "Save",
// 					}),
// 					elFactory("button", {
// 						type: "button",
// 						id: "cancel-btn",
// 						textContent: "Cancel",
// 					}),
// 				]
// 			),
// 		])
// 	);
// }

function buildEditMode() {
	dialog.innerHTML = `<form class="edit-mode">
				<section class="edit-mode-details">
					<div class="form-row">
						<div class="form-item">
							<label for="title">Title:</label>
							<input
								type="text"
								id="title"
								required
							/>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="project">Project:</label>
							<select id="project">
								<option value=""></option>
								<!-- Add options here -->
							</select>
						</div>
						<div class="form-item">
							<label for="priority">Priority:</label>
							<select id="priority">
								<option value=""></option>
								<!-- Add options here -->
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="due-date">Due Date:</label>
							<input type="date" id="due-date" />
						</div>
						<div class="form-item">
							<label for="status">Status:</label>
							<select id="status" required>
								<!-- Add options here -->
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="notes">Notes:</label>
							<textarea id="notes" cols="30" rows="10"></textarea>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<p>Enter tags separated by commas.</p>
							<label for="tags">Tags:</label>
							<input type="text" id="tags" />
						</div>
					</div>
				</section>
				<section class="edit-mode-buttons id-bubble-marker">
					<button type="submit" id="static-save-btn">Save</button>
					<button type="button" id="static-cancel-btn">Cancel</button>
				</section>
			</form>`;
}

function addDropdowns() {
	[
		["project", _app_controller__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()],
		["priority", _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getPriorityNames()],
		["status", _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getColumnNames()],
	].forEach((pair) => {
		const element = document.getElementById(pair[0]);
		pair[1].forEach((project) => {
			element.appendChild(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.htmlFactory)(
					(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elFactory)("option", {
						value: project,
						textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(project),
					})
				)
			);
		});
	});
}

function populateForm(selectedId) {
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksByProperty("id", +selectedId)[0];

	// Grab select elements and set values
	["project", "priority", "status"].forEach((prop) => {
		const element = document.getElementById(prop);
		// Find the right <option> and give it selected=true
	});

	// Grab inputs and set values
	["title", "due-date", "tags"].forEach((prop) => {
		const element = document.getElementById(prop);
		element.value = task.getProperty(
			prop === "due-date" ? "dueDate" : prop
		);
	});

	document.getElementById("notes").textContent = task.getProperty("notes");
	document.querySelector(
		".edit-mode-buttons.id-bubble-marker"
	).dataset.taskId = selectedId;
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
const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");
const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const dialog = document.querySelector("dialog");

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
			const [title, project, dueDate] = [
				task.getProperty("title"),
				task.getProperty("project"),
				task.getProperty("dueDate"),
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
								textContent: dueDate ? dueDate : "(date)",
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

function openDisplayMode(e) {
	dialog.textContent = "";
	dialog.appendChild((0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildDisplayMode)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target)));
	dialog.showModal();
	document.querySelector(".close-btn").addEventListener("click", () => {
		dialog.close();
		dialog.textContent = "";
	});
	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document.getElementById("delete-btn").addEventListener("click", deleteTask);
}

function openEditMode(e) {
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildEditMode)();
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.addDropdowns)();
	if (e.target.id === "edit-btn") {
		(0,_modals__WEBPACK_IMPORTED_MODULE_2__.populateForm)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
	}
}

function deleteTask(e) {
	console.log((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
}

/*   PSEUDO

FUNCTION updateSidebar()
	Gets current list.
	Builds DOM elements for each.
END FUNCTION

// Showing the sidebar (mobile)
EVENT LISTENER sidebar-open-btn on click: sidebar.classList.add("open")

// Hiding the sidebar (mobile)
EVENT LISTENER sidebar-close-btn on click: sidebar.classList.remove("open")

// Opening editMode
EVENT LISTENER edit-btn on click: openEditMode(targetTask)
FUNCTION openEditMode(targetTask)
	Builds a form in <dialog>.
	IF (targetTask)
		Gets targetTask info and sets form input values.
	END IF
	Adds event listeners for editMode buttons.
	Removes event listeners for displayMode buttons.
END FUNCTION

// Deleting a task
EVENT LISTENER task-delete-btn on click: deleteTask(targetTask)
FUNCTION deleteTask(targetTask)
	Removes task from list
	closeDialog()
	Updates the screen.
END FUNCTION

// Canceling changes
EVENT LISTENER task-cancel-btn on click: closeDialog()
FUNCTION closeDialog()
	Erases dialog inner content and closes it.
END FUNCTION

// Submitting changes, a new task, or new project
EVENT LISTENER form on submit: handleFormSubmit(e)
FUNCTION handleFormSubmit(e)
	Submits new details to targetTask.
	closeDialog()
	Updates the screen.
END FUNCTION

// Creating a task
EVENT LISTENER add-task-btn on click: openEditMode()

// Creating a project
EVENT LISTENER add-project-btn on click: openProjectMode()
FUNCTION openProjectMode()
	Opens dialog/form with single input.
END FUNCTION

// Deleting a project
EVENT LISTENER .project-delete-btn on click: deleteProject(e)
FUNCTION deleteProject(e)
	Get projectName from e.target.dataset.etc.
	Remove name from project list.
	updateSidebar()
END FUNCTION





 */
// Initial call
updateTaskColumns(_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getAllTasks());

addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPLHdGQUF3RixRQUFRLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxjQUFjLFNBQVMsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksY0FBYyxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsS0FBSyxhQUFhLGNBQWMsTUFBTSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDOztBQUVwQztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWdCLENBQUMsb0RBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxzREFBYTtBQUNkLENBQUMscURBQVk7QUFDYjtBQUNBLEVBQUUscURBQVksQ0FBQyxvREFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxvREFBVTtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQW1COztBQUVyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2FwcC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0LyogY29sb3I6IHVuc2V0OyAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5mbGV4LWNvbnRhaW5lciB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLWNvbnRlbnQge1xuXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xuXHQtLWFkZC1idG4tZGltczogNTBweDtcblxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5hZGQtY29udGFpbmVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiAxO1xuXHRib3R0b206IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpICsgNDhweCk7XG5cdGxlZnQ6IDEwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRnYXA6IDEwcHg7XG59XG5cbiNhZGQtYnRuIHtcblx0aGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDQwcHg7XG59XG5cbiNhZGQtYnRuLm9wZW4ge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbiNhZGQtYnRuIH4gKiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbiNhZGQtYnRuLm9wZW4gfiAqIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuYXBwLWNvbnRlbnQge1xuXHRcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xuXHRcdG1pbi1oZWlnaHQ6IDgwdmg7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XG5cdH1cblx0LmFkZC1jb250YWluZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDEwcHg7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuaGVhZGVyIGgxIHtcblx0bWFyZ2luOiAxMHB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiNzaWRlYmFyLW9wZW4tYnRuIHtcblx0bWFyZ2luOiAxMHB4O1xuXHRwYWRkaW5nOiA1cHggOHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQjc2lkZWJhci1vcGVuLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc2lkZWJhciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0d2lkdGg6IDA7XG5cdGhlaWdodDogMTAwc3ZoO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLnNpZGViYXIub3BlbiB7XG5cdHdpZHRoOiA4MHZ3O1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4jc2lkZWJhci1jbG9zZS1idG4ge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5zaWRlYmFyLFxuXHQuc2lkZWJhci5vcGVuIHtcblx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0aGVpZ2h0OiB1bnNldDtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdHotaW5kZXg6IHVuc2V0O1xuXHR9XG5cblx0I3NpZGViYXItY2xvc2UtYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0LnByb2plY3QtZGVsZXRlLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5wcm9qZWN0LW5hbWU6aG92ZXIgLnByb2plY3QtZGVsZXRlLWJ0biB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2VyKTtcblx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tYWRkLWJ0bi1kaW1zKSArIHZhcigtLW1haW4tc3BhY2VyKSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbiNzdGF0dXNlcy1jb250YWluZXIge1xuXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLnN0YXR1cy1yb3cge1xuXHRmbGV4OiBhdXRvO1xuXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFN0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnN0YXR1cy1jb2x1bW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xuXHRtaW4taGVpZ2h0OiAyNXN2aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4udGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS13aWR0aDogMTJweDtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JleTtcblxuXHRwYWRkaW5nOiA1cHggNXB4IDVweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIDVweCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXG5cdFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXG5cdCk7XG5cblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwiaGlnaFwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHJlZDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ29sZDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibG93XCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XG59XG5cbi5zdWJ0ZXh0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZGlhbG9nIHtcblx0LS1tb2RhbC1zcGFjZXI6IDEycHg7XG5cblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbmRpYWxvZyA+ICoge1xuXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcblx0cGFkZGluZzogdmFyKC0tbW9kYWwtc3BhY2VyKTtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGlzcGxheS1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lZGl0LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi5lZGl0LW1vZGUtZGV0YWlscyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLnByb2plY3QtbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0RpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NB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OztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQSw0REFBNEQ7QUFDNUQsa0RBQWtEOztBQUVsRCxtREFBbUQ7O0FBRW5EO0NBQ0MsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsdUJBQXVCO0NBQ3ZCLFlBQVk7QUFDYjtBQUNBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtDQUNDLG9CQUFvQjs7Q0FFcEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7O0NBRWIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUEsb0RBQW9EOztBQUVwRCxxREFBcURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC8qIGNvbG9yOiB1bnNldDsgKi9cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtY29udGVudCB7XFxuXFx0LS1tYWluLXNwYWNlcjogMjBweDtcXG5cXHQtLWFkZC1idG4tZGltczogNTBweDtcXG5cXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZGQtY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRib3R0b206IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpICsgNDhweCk7XFxuXFx0bGVmdDogMTBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbiNhZGQtYnRuIHtcXG5cXHRoZWlnaHQ6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4jYWRkLWJ0bi5vcGVuIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNhZGQtYnRuIH4gKiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZC1idG4ub3BlbiB+ICoge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuYXBwLWNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xcblxcdFxcdG1pbi1oZWlnaHQ6IDgwdmg7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuXFx0fVxcblxcdC5hZGQtY29udGFpbmVyIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0Ym90dG9tOiAxMHB4O1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmhlYWRlciB7XFxuXFx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI3NpZGViYXItb3Blbi1idG4ge1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRwYWRkaW5nOiA1cHggOHB4O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0I3NpZGViYXItb3Blbi1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnNpZGViYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuLnNpZGViYXIub3BlbiB7XFxuXFx0d2lkdGg6IDgwdnc7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuI3NpZGViYXItY2xvc2UtYnRuIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0LnNpZGViYXIsXFxuXFx0LnNpZGViYXIub3BlbiB7XFxuXFx0XFx0cG9zaXRpb246IGluaGVyaXQ7XFxuXFx0XFx0d2lkdGg6IHVuc2V0O1xcblxcdFxcdGhlaWdodDogdW5zZXQ7XFxuXFx0XFx0cGFkZGluZzogMjBweDtcXG5cXHRcXHR6LWluZGV4OiB1bnNldDtcXG5cXHR9XFxuXFxuXFx0I3NpZGViYXItY2xvc2UtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kZWxldGUtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1uYW1lOmhvdmVyIC5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNlcik7XFxuXFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tYWRkLWJ0bi1kaW1zKSArIHZhcigtLW1haW4tc3BhY2VyKSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcXG5cXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLnN0YXR1cy1yb3cge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zdGF0dXMtY29sdW1uIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcXG5cXHRtaW4taGVpZ2h0OiAyNXN2aDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktd2lkdGg6IDEycHg7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogZ3JleTtcXG5cXG5cXHRwYWRkaW5nOiA1cHggNXB4IDVweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIDVweCk7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0LFxcblxcdFxcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXFxuXFx0XFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXFxuXFx0KTtcXG5cXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWVkaXVtXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdvbGQ7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VidGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZGlhbG9nIHtcXG5cXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5kaWFsb2cgPiAqIHtcXG5cXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uZWRpdC1tb2RlLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5wcm9qZWN0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrcyA9ICgoKSA9PiB7XG5cdGxldCBfdGFza3MgPSBbXTtcblx0bGV0IF9pZENvdW50ZXIgPSAwO1xuXG5cdGZ1bmN0aW9uIF9kYXRlU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIG91dGdvaW5nVGFza3M7IC8vIGRldk1vZGVcblx0fVxuXG5cdGNvbnN0IF9jb2x1bW5OYW1lcyA9IFtcImJhY2tsb2dcIiwgXCJ0by1kb1wiLCBcImluLXByb2dyZXNzXCIsIFwiZG9uZVwiXTtcblxuXHRsZXQgX3Byb3BlcnR5TmFtZXMgPSBbXG5cdFx0XCJ0aXRsZVwiLFxuXHRcdFwic3RhdHVzXCIsXG5cdFx0XCJwcm9qZWN0XCIsXG5cdFx0XCJwcmlvcml0eVwiLFxuXHRcdFwibm90ZXNcIixcblx0XHRcImR1ZURhdGVcIixcblx0XHRcInRhZ3NcIixcblx0XTtcblxuXHRsZXQgX3ByaW9yaXRpZXMgPSBbXCJoaWdoXCIsIFwibWVkaXVtXCIsIFwibG93XCJdO1xuXG5cdGZ1bmN0aW9uIF9jb2x1bW5Tb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRjb25zdCBjb2x1bW5Tb3J0ZWRBcnJheSA9IF9jb2x1bW5OYW1lcy5tYXAoKGNvbHVtbk5hbWUpID0+IHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdGNvbHVtbk5hbWUsXG5cdFx0XHRcdF9kYXRlU29ydChcblx0XHRcdFx0XHRvdXRnb2luZ1Rhc2tzLmZpbHRlcihcblx0XHRcdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KFwic3RhdHVzXCIpID09PSBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XTtcblx0XHR9KTtcblx0XHRyZXR1cm4gY29sdW1uU29ydGVkQXJyYXk7XG5cdH1cblxuXHRmdW5jdGlvbiBfdGFza0ZhY3RvcnkoKSB7XG5cdFx0Y29uc3QgX3Rhc2sgPSB7fTtcblx0XHRjb25zdCBzZXRQcm9wZXJ0eSA9IChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRfdGFza1trZXldID0gXCJ0aXRsZSBwcm9qZWN0IHByaW9yaXR5IG5vdGVzXCIuaW5jbHVkZXMoa2V5KVxuXHRcdFx0XHQ/IG1ha2VGaXJzdFVwcGVyKHZhbHVlKVxuXHRcdFx0XHQ6IHZhbHVlO1xuXHRcdH07XG5cdFx0X3Byb3BlcnR5TmFtZXMuZm9yRWFjaCgocHJvcCkgPT4gc2V0UHJvcGVydHkocHJvcCwgXCJcIikpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRQcm9wZXJ0eTogKGtleSkgPT4gX3Rhc2tba2V5XSxcblx0XHRcdHNldFByb3BlcnR5LFxuXHRcdFx0bG9nRGF0YTogKCkgPT4gT2JqZWN0LmVudHJpZXMoX3Rhc2spLCAvLyBkZXZNb2RlXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2soaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBfdGFza0ZhY3RvcnkoKTtcblx0XHRuZXdUYXNrLnNldFByb3BlcnR5KFwiaWRcIiwgX2lkQ291bnRlcisrKTtcblx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdG5ld1Rhc2suc2V0UHJvcGVydHkocGFpclswXSwgcGFpclsxXSk7XG5cdFx0fSk7XG5cdFx0X3Rhc2tzLnB1c2gobmV3VGFzayk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVUYXNrcyguLi5yZW1vdmVJZHMpIHtcblx0XHRfdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcblx0XHRcdGlmIChyZW1vdmVJZHMuaW5jbHVkZXModGFzay5nZXRQcm9wZXJ0eShcImlkXCIpKSkge1xuXHRcdFx0XHRfdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGRldk1vZGVcblx0XHRfdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4gY29uc29sZS5sb2coaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpKSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVUYXNrKHVwZGF0ZUlkLCBpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0X3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAodXBkYXRlSWQgPT09IHRhc2suZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuXHRcdFx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdFx0XHRfdGFza3NbaW5kZXhdLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRhc2tzQnlQcm9wZXJ0eShwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBfdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KHByb3ApID09PSB2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGFkZFRhc2ssXG5cdFx0cmVtb3ZlVGFza3MsXG5cdFx0dXBkYXRlVGFzayxcblx0XHRnZXRBbGxUYXNrczogKCkgPT4gX2NvbHVtblNvcnQoX3Rhc2tzKSxcblx0XHRnZXRUYXNrc0J5UHJvcGVydHksXG5cdFx0Z2V0Q29sdW1uTmFtZXM6ICgpID0+IF9jb2x1bW5OYW1lcyxcblx0XHRnZXRQcmlvcml0eU5hbWVzOiAoKSA9PiBfcHJpb3JpdGllcyxcblx0XHRnZXRQcm9wZXJ0eU5hbWVzOiAoKSA9PiBfcHJvcGVydHlOYW1lcyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG5cdGxldCBfcHJvamVjdExpc3QgPSBbXCJob21lXCIsIFwiZmluYW5jZXNcIiwgXCJsZWFybmluZ1wiXTtcblxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSB7XG5cdFx0X3Byb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdE5hbWUpO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocmVtb3ZlTmFtZSkge1xuXHRcdGlmIChfcHJvamVjdExpc3QuaW5jbHVkZXMocmVtb3ZlTmFtZSkpIHtcblx0XHRcdC8vIEdldCB0YXNrLmlkJ3MgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcHJvamVjdFxuXHRcdFx0Y29uc3QgcmVtb3ZlSWRzID0gVGFza3MuZ2V0VGFza3NCeVByb3BlcnR5KFxuXHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0cmVtb3ZlTmFtZVxuXHRcdFx0KS5tYXAoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydHkoXCJpZFwiKSk7XG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgdGFza3Mgd2l0aCB0aG9zZSBpZCdzIGZyb20gX3Rhc2tzXG5cdFx0XHRUYXNrcy5yZW1vdmVUYXNrcyguLi5yZW1vdmVJZHMpO1xuXG5cdFx0XHQvLyBSZW1vdmUgbmFtZSBmcm9tIHByb2plY3QgbGlzdFxuXHRcdFx0X3Byb2plY3RMaXN0LnNwbGljZShfcHJvamVjdExpc3QuaW5kZXhPZihyZW1vdmVOYW1lKSwgMSk7XG5cblx0XHRcdC8vIGRldk1vZGVcblx0XHRcdGNvbnNvbGUubG9nKF9wcm9qZWN0TGlzdCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRhZGRQcm9qZWN0LFxuXHRcdHJlbW92ZVByb2plY3QsXG5cdFx0Z2V0UHJvamVjdHM6ICgpID0+IF9wcm9qZWN0TGlzdC5zb3J0KCksXG5cdH07XG59KSgpO1xuXG5jb25zdCBfYWRkRGVmYXVsdHMgPSAoKCkgPT4ge1xuXHRjb25zdCBkZWZhdWx0VGFza3MgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiUGF5IGJpbGxzXCIsXG5cdFx0XHRzdGF0dXM6IFwiaW4tcHJvZ3Jlc3NcIixcblx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcblx0XHRcdG5vdGVzOiBcIlRoZSByZW50IGlzIHRvbyBkYW1uIGhpZ2hcIixcblx0XHRcdGR1ZURhdGU6IFwiMjAyMy0xMS0wMVwiLFxuXHRcdFx0dGFnczogXCJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcImdyb2Nlcmllc1wiLFxuXHRcdFx0c3RhdHVzOiBcInRvLWRvXCIsXG5cdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHRkdWVEYXRlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiZmlsZSB0YXhlc1wiLFxuXHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHRkdWVEYXRlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInJlYWQgQ2hla2hvdlwiLFxuXHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdHByb2plY3Q6IFwibGVhcm5pbmdcIixcblx0XHRcdHByaW9yaXR5OiBcIkxvd1wiLFxuXHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHRkdWVEYXRlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInJlcGxhY2UgbGlnaHRidWxiXCIsXG5cdFx0XHRzdGF0dXM6IFwidG8tZG9cIixcblx0XHRcdHByb2plY3Q6IFwiaG9tZVwiLFxuXHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRub3RlczogXCJCYXRocm9vbSBsaWdodCBpcyBmbGlja2VyaW5nXCIsXG5cdFx0XHRkdWVEYXRlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdH0sXG5cdF0ubWFwKChpdGVtKSA9PiBPYmplY3QuZW50cmllcyhpdGVtKSk7XG5cblx0ZGVmYXVsdFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRUYXNrcy5hZGRUYXNrKGl0ZW0pO1xuXHR9KTtcblxuXHQvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhpbmdzIGFyZSBhZGRpbmcgY29ycmVjdGx5LiBkZXZNb2RlXG5cdGNvbnN0IHRlc3REZWZhdWx0VGFza3MgPSBUYXNrcy5nZXRBbGxUYXNrcygpO1xuXHR0ZXN0RGVmYXVsdFRhc2tzLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgQ29sdW1uOiAke2NvbHVtblswXX1gKTtcblx0XHRjb2x1bW5bMV0uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGBcXHRUYXNrIGF0OiAke2luZGV4fWApO1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdGBcXHRcXHQke3Rhc2subG9nRGF0YSgpLmpvaW4oXCJcXG5cXHRcXHRcIikuc3BsaXQoXCIsXCIpLmpvaW4oXCI6IFwiKX1gXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKFwiXFxuXCIpO1xuXHR9KTtcbn0pKCk7XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBET00gRmFjdG9yaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBlbEZhY3RvcnkodHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gPSBbXSkge1xuXHRyZXR1cm4geyB0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZhY3Rvcnkob2JqKSB7XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcztcblxuXHRmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChrZXkgIT09IFwiZGF0YXNldFwiKSB7XG5cdFx0XHRlbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTcGVjaWFsIGRpcmVjdGlvbnMgbmVlZGVkIHRvIHNldCBcImRhdGEtXCIgcHJvcGVydGllc1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wIGluIGF0dHJpYnV0ZXNba2V5XSkge1xuXHRcdFx0XHRlbC5kYXRhc2V0W3Byb3BdID0gYXR0cmlidXRlc1trZXldW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9iai5jaGlsZHJlbj8uZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRlbC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShjaGlsZCkpO1xuXHR9KTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtUm93RmFjdG9yeShmb3JtRGF0YUFycmF5cykge1xuXHRyZXR1cm4gZm9ybURhdGFBcnJheXNcblx0XHQubWFwKChmb3JtRGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qga2ViYWIgPSBmb3JtRGF0YVsxXS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKTtcblx0XHRcdGNvbnN0IGZvcm1JdGVtID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0taXRlbVwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwibGFiZWxcIiwge1xuXHRcdFx0XHRcdGh0bWxGb3I6IGtlYmFiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBmb3JtRGF0YVsxXSArIFwiOlwiLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0pO1xuXG5cdFx0XHRzd2l0Y2ggKGZvcm1EYXRhWzBdKSB7XG5cdFx0XHRcdGNhc2UgXCJpbnB1dFwiOlxuXHRcdFx0XHRcdGZvcm1JdGVtLmNoaWxkcmVuLnB1c2goXG5cdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJpbnB1dFwiLCB7XG5cdFx0XHRcdFx0XHRcdGlkOiBrZWJhYixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGZvcm1EYXRhWzJdLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiBmb3JtRGF0YVszXSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwic2VsZWN0XCI6XG5cdFx0XHRcdFx0Zm9ybUl0ZW0uY2hpbGRyZW4ucHVzaChcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcblx0XHRcdFx0XHRcdFx0XCJzZWxlY3RcIixcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGlkOiBrZWJhYixcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcIm9wdGlvblwiKSxcblx0XHRcdFx0XHRcdFx0XHQuLi5mb3JtRGF0YVszXS5tYXAoKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBvcHRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihvcHRpb24pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb3JtRGF0YVsyXS50b0xvd2VyQ2FzZSgpID09PVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInRleHRhcmVhXCI6XG5cdFx0XHRcdFx0Zm9ybUl0ZW0uY2hpbGRyZW4ucHVzaChcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcInRleHRhcmVhXCIsIHtcblx0XHRcdFx0XHRcdFx0aWQ6IGtlYmFiLFxuXHRcdFx0XHRcdFx0XHRjb2xzOiAzMCxcblx0XHRcdFx0XHRcdFx0cm93czogMTAsXG5cdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBmb3JtRGF0YVsyXSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZvcm1JdGVtO1xuXHRcdH0pXG5cdFx0LnJlZHVjZSgoYWNjLCBjdXJyZW50SXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdGlmICghKGluZGV4ICYgMSkpIHtcblx0XHRcdFx0Ly8gSWYgZXZlbiwgY3JlYXRlIHJvdyB3aXRoIGN1cnJlbnRJdGVtIGFzIGEgY2hpbGRcblx0XHRcdFx0YWNjLnB1c2goXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImZvcm0tcm93XCIgfSwgW2N1cnJlbnRJdGVtXSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIG9kZCwgYWRkIGN1cnJlbnRJdGVtIHRvIHByZXZpb3VzIHJvd1xuXHRcdFx0XHRhY2NbYWNjLmxlbmd0aCAtIDFdLmNoaWxkcmVuLnB1c2goY3VycmVudEl0ZW0pO1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fVxuXHRcdH0sIFtdKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3RoZXIgSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2tJZCh0YXJnZXQpIHtcblx0cmV0dXJuIHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJpZC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC50YXNrSWRcblx0XHQ6IGZpbmRUYXNrSWQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZpcnN0VXBwZXIoc3RyaW5nKSB7XG5cdHJldHVybiAhIXN0cmluZ1xuXHRcdD8gc3RyaW5nXG5cdFx0XHRcdC5zcGxpdChcIi1cIilcblx0XHRcdFx0Lm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcblx0XHRcdFx0LmpvaW4oXCIgXCIpXG5cdFx0OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge1xuXHRlbEZhY3RvcnksXG5cdGZvcm1Sb3dGYWN0b3J5LFxuXHRodG1sRmFjdG9yeSxcblx0bWFrZUZpcnN0VXBwZXIsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIGFwcENvbnRyb2xsZXIgZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRGlzcGxheU1vZGUoc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gYXBwQ29udHJvbGxlci5UYXNrcy5nZXRUYXNrc0J5UHJvcGVydHkoXCJpZFwiLCArc2VsZWN0ZWRJZClbMF07XG5cblx0Ly8gUmV0dXJucyBuZXN0ZWQgZWxGYWN0b3JpZXMgdG8gYXBwZW5kIHRvIGRpYWxvZ1xuXHRyZXR1cm4gaHRtbEZhY3RvcnkoXG5cdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImRpc3BsYXktbW9kZVwiIH0sIFtcblx0XHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiZGlzcGxheS1tb2RlLWhlYWRlclwiIH0sIFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDNcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJkaXNwbGF5LXRpdGxlXCIsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHRhc2suZ2V0UHJvcGVydHkoXCJ0aXRsZVwiKSxcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiY2xvc2UtYnRuXCIsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiw5dcIixcblx0XHRcdFx0fSksXG5cdFx0XHRdKSxcblx0XHRcdGVsRmFjdG9yeShcblx0XHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHRcdHsgY2xhc3NMaXN0OiBcImRpc3BsYXktbW9kZS1kZXRhaWxzXCIgfSxcblx0XHRcdFx0Ly8gQWRkIGRldGFpbHMhISEhXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0XHRcInByaW9yaXR5XCIsXG5cdFx0XHRcdFx0XCJkdWUtZGF0ZVwiLFxuXHRcdFx0XHRcdFwic3RhdHVzXCIsXG5cdFx0XHRcdFx0XCJub3Rlc1wiLFxuXHRcdFx0XHRcdFwidGFnc1wiLFxuXHRcdFx0XHRdLm1hcCgocHJvcCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcInBcIixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IGAke21ha2VGaXJzdFVwcGVyKHByb3ApfTogYCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcInNwYW5cIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogYGRpc3BsYXktJHtwcm9wfWAsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHRhc2suZ2V0UHJvcGVydHkocHJvcCksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcInNlY3Rpb25cIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJkaXNwbGF5LW1vZGUtYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIsXG5cdFx0XHRcdFx0ZGF0YXNldDogeyB0YXNrSWQ6IHNlbGVjdGVkSWQgfSxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0aWQ6IFwiZWRpdC1idG5cIixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBcIkVkaXRcIixcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdGlkOiBcImRlbGV0ZS1idG5cIixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBcIkRlbGV0ZVwiLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdXG5cdFx0XHQpLFxuXHRcdF0pXG5cdCk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBidWlsZEVkaXRNb2RlKHNlbGVjdGVkSWQgPSBcIlwiKSB7XG4vLyBcdC8vIEJ1aWxkcyBhIGZvcm0sIGFkZHMgcmVsZXZhbnQgdGFzayBpbmZvIElGIGFuIGlkIGlzIHN1cHBsaWVkXG4vLyBcdGNvbnN0IHRhc2sgPSBzZWxlY3RlZElkXG4vLyBcdFx0PyBhcHBDb250cm9sbGVyLlRhc2tzLmdldFRhc2tzQnlQcm9wZXJ0eShcImlkXCIsICtzZWxlY3RlZElkKVswXVxuLy8gXHRcdDogeyBnZXRQcm9wZXJ0eTogKHByb3ApID0+IFwiXCIgfTtcblxuLy8gXHRjb25zdCB0aXRsZVJvdyA9IGZvcm1Sb3dGYWN0b3J5KFtcbi8vIFx0XHRbXCJpbnB1dFwiLCBcIlRpdGxlXCIsIHRhc2suZ2V0UHJvcGVydHkoXCJ0aXRsZVwiKSwgXCJ0ZXh0XCJdLFxuLy8gXHRdKTtcblxuLy8gXHRjb25zdCBtaWRkbGVSb3dzID0gZm9ybVJvd0ZhY3RvcnkoW1xuLy8gXHRcdFtcbi8vIFx0XHRcdFwic2VsZWN0XCIsXG4vLyBcdFx0XHRcIlByb2plY3RcIixcbi8vIFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJwcm9qZWN0XCIpLFxuLy8gXHRcdFx0YXBwQ29udHJvbGxlci5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpLFxuLy8gXHRcdF0sXG4vLyBcdFx0W1xuLy8gXHRcdFx0XCJzZWxlY3RcIixcbi8vIFx0XHRcdFwiUHJpb3JpdHlcIixcbi8vIFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKSxcbi8vIFx0XHRcdFtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl0sXG4vLyBcdFx0XSxcbi8vIFx0XHRbXCJpbnB1dFwiLCBcIkR1ZSBEYXRlXCIsIHRhc2suZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpLCBcImRhdGVcIl0sXG4vLyBcdFx0W1xuLy8gXHRcdFx0XCJzZWxlY3RcIixcbi8vIFx0XHRcdFwiU3RhdHVzXCIsXG4vLyBcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwic3RhdHVzXCIpLFxuLy8gXHRcdFx0YXBwQ29udHJvbGxlci5UYXNrcy5nZXRDb2x1bW5OYW1lcygpLFxuLy8gXHRcdF0sXG4vLyBcdFx0W1widGV4dGFyZWFcIiwgXCJOb3Rlc1wiLCB0YXNrLmdldFByb3BlcnR5KFwibm90ZXNcIildLFxuLy8gXHRdKTtcblxuLy8gXHRjb25zdCB0YWdzUm93ID0gZm9ybVJvd0ZhY3RvcnkoW1xuLy8gXHRcdFtcImlucHV0XCIsIFwiVGFnc1wiLCB0YXNrLmdldFByb3BlcnR5KFwidGFnc1wiKSwgXCJ0ZXh0XCJdLFxuLy8gXHRdKTtcblxuLy8gXHR0YWdzUm93WzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuLnVuc2hpZnQoXG4vLyBcdFx0ZWxGYWN0b3J5KFwicFwiLCB7IHRleHRDb250ZW50OiBcIkVudGVyIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hcy5cIiB9KVxuLy8gXHQpO1xuXG4vLyBcdHJldHVybiBodG1sRmFjdG9yeShcbi8vIFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZWRpdC1tb2RlXCIgfSwgW1xuLy8gXHRcdFx0ZWxGYWN0b3J5KFwic2VjdGlvblwiLCB7IGNsYXNzTGlzdDogXCJlZGl0LW1vZGUtZGV0YWlsc1wiIH0sIFtcbi8vIFx0XHRcdFx0Li4udGl0bGVSb3csXG4vLyBcdFx0XHRcdC4uLm1pZGRsZVJvd3MsXG4vLyBcdFx0XHRcdC4uLnRhZ3NSb3csXG4vLyBcdFx0XHRdKSxcbi8vIFx0XHRcdGVsRmFjdG9yeShcbi8vIFx0XHRcdFx0XCJzZWN0aW9uXCIsXG4vLyBcdFx0XHRcdHtcbi8vIFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZWRpdC1tb2RlLWJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiLFxuLy8gXHRcdFx0XHRcdGRhdGFzZXQ6IHsgdGFza0lkOiBzZWxlY3RlZElkIH0sXG4vLyBcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFtcbi8vIFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuLy8gXHRcdFx0XHRcdFx0dHlwZTogXCJzdWJtaXRcIixcbi8vIFx0XHRcdFx0XHRcdGlkOiBcInNhdmUtYnRuXCIsXG4vLyBcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCJTYXZlXCIsXG4vLyBcdFx0XHRcdFx0fSksXG4vLyBcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcbi8vIFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG4vLyBcdFx0XHRcdFx0XHRpZDogXCJjYW5jZWwtYnRuXCIsXG4vLyBcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCJDYW5jZWxcIixcbi8vIFx0XHRcdFx0XHR9KSxcbi8vIFx0XHRcdFx0XVxuLy8gXHRcdFx0KSxcbi8vIFx0XHRdKVxuLy8gXHQpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFZGl0TW9kZSgpIHtcblx0ZGlhbG9nLmlubmVySFRNTCA9IGA8Zm9ybSBjbGFzcz1cImVkaXQtbW9kZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImVkaXQtbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInRpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJvamVjdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIEFkZCBvcHRpb25zIGhlcmUgLS0+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIEFkZCBvcHRpb25zIGhlcmUgLS0+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5TdGF0dXM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD1cInN0YXR1c1wiIHJlcXVpcmVkPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gQWRkIG9wdGlvbnMgaGVyZSAtLT5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGlkPVwibm90ZXNcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxwPkVudGVyIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hcy48L3A+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0YWdzXCI+VGFnczo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhZ3NcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdGF0aWMtc2F2ZS1idG5cIj5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdGF0aWMtY2FuY2VsLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Zvcm0+YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERyb3Bkb3ducygpIHtcblx0W1xuXHRcdFtcInByb2plY3RcIiwgYXBwQ29udHJvbGxlci5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpXSxcblx0XHRbXCJwcmlvcml0eVwiLCBhcHBDb250cm9sbGVyLlRhc2tzLmdldFByaW9yaXR5TmFtZXMoKV0sXG5cdFx0W1wic3RhdHVzXCIsIGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0Q29sdW1uTmFtZXMoKV0sXG5cdF0uZm9yRWFjaCgocGFpcikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWlyWzBdKTtcblx0XHRwYWlyWzFdLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogcHJvamVjdCxcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihwcm9qZWN0KSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRm9ybShzZWxlY3RlZElkKSB7XG5cdGNvbnN0IHRhc2sgPSBhcHBDb250cm9sbGVyLlRhc2tzLmdldFRhc2tzQnlQcm9wZXJ0eShcImlkXCIsICtzZWxlY3RlZElkKVswXTtcblxuXHQvLyBHcmFiIHNlbGVjdCBlbGVtZW50cyBhbmQgc2V0IHZhbHVlc1xuXHRbXCJwcm9qZWN0XCIsIFwicHJpb3JpdHlcIiwgXCJzdGF0dXNcIl0uZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKTtcblx0XHQvLyBGaW5kIHRoZSByaWdodCA8b3B0aW9uPiBhbmQgZ2l2ZSBpdCBzZWxlY3RlZD10cnVlXG5cdH0pO1xuXG5cdC8vIEdyYWIgaW5wdXRzIGFuZCBzZXQgdmFsdWVzXG5cdFtcInRpdGxlXCIsIFwiZHVlLWRhdGVcIiwgXCJ0YWdzXCJdLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCk7XG5cdFx0ZWxlbWVudC52YWx1ZSA9IHRhc2suZ2V0UHJvcGVydHkoXG5cdFx0XHRwcm9wID09PSBcImR1ZS1kYXRlXCIgPyBcImR1ZURhdGVcIiA6IHByb3Bcblx0XHQpO1xuXHR9KTtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnRleHRDb250ZW50ID0gdGFzay5nZXRQcm9wZXJ0eShcIm5vdGVzXCIpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiLmVkaXQtbW9kZS1idXR0b25zLmlkLWJ1YmJsZS1tYXJrZXJcIlxuXHQpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGFwcENvbnRyb2xsZXIgZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnksIGZpbmRUYXNrSWQsIG1ha2VGaXJzdFVwcGVyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHtcblx0YWRkRHJvcGRvd25zLFxuXHRidWlsZERpc3BsYXlNb2RlLFxuXHRidWlsZEVkaXRNb2RlLFxuXHRwb3B1bGF0ZUZvcm0sXG59IGZyb20gXCIuL21vZGFsc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3Qgc2lkZWJhck9wZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItb3Blbi1idG5cIik7XG5jb25zdCBwcm9qZWN0RGlzcGxheWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpc3BsYXllZFwiKTtcbmNvbnN0IHN0YXR1c2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNlcy1jb250YWluZXJcIik7XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1idG5cIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idG5cIik7XG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ29sdW1ucyhkaXNwbGF5VGFza3MpIHtcblx0Ly8gUmVzZXQgdGhlIGNvbHVtbnNcblx0Wy4uLnN0YXR1c2VzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChyb3cpID0+IChyb3cudGV4dENvbnRlbnQgPSBcIlwiKSk7XG5cblx0Ly8gQnVpbGQgY29sdW1uIGNvbnRlbnRcblx0ZGlzcGxheVRhc2tzLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBjb2x1bW5OYW1lID0gY29sdW1uWzBdO1xuXHRcdGNvbnN0IHN0YXR1c05hbWUgPSBtYWtlRmlyc3RVcHBlcihjb2x1bW5OYW1lKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbnRlbnQgPSBlbEZhY3RvcnkoXG5cdFx0XHRcInNlY3Rpb25cIixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBcInN0YXR1cy1jb2x1bW5cIixcblx0XHRcdFx0aWQ6IGBkeW5hbWljLSR7Y29sdW1uTmFtZX0tY29sdW1uYCwgLy9kZXZNb2RlIChkeW5hbWljKVxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDJcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtbmFtZVwiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBzdGF0dXNOYW1lLFxuXHRcdFx0XHR9KSxcblx0XHRcdF1cblx0XHQpO1xuXG5cdFx0Ly8gQnVpbGQgdGFzayBjYXJkc1xuXHRcdGNvbHVtblsxXS5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRjb25zdCBbdGl0bGUsIHByb2plY3QsIGR1ZURhdGVdID0gW1xuXHRcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwidGl0bGVcIiksXG5cdFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJwcm9qZWN0XCIpLFxuXHRcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSxcblx0XHRcdF07XG5cdFx0XHRjb2x1bW5Db250ZW50LmNoaWxkcmVuLnB1c2goXG5cdFx0XHRcdGVsRmFjdG9yeShcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ0YXNrLWNhcmQgaWQtYnViYmxlLW1hcmtlclwiLFxuXHRcdFx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdFx0XHRwcmlvcml0eTogdGFza1xuXHRcdFx0XHRcdFx0XHRcdC5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpXG5cdFx0XHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHRcdHRhc2tJZDogdGFzay5nZXRQcm9wZXJ0eShcImlkXCIpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ0aXRsZVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGl0bGUpLFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwic3VidGV4dFwiIH0sIFtcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdFwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihwcm9qZWN0KSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImRhdGVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogZHVlRGF0ZSA/IGR1ZURhdGUgOiBcIihkYXRlKVwiLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0byBjb3JyZWN0IHJvd1xuXHRcdGlmIChpbmRleCA8IDIpIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBNYWtlIGVhY2ggdGFzayBjbGlja2FibGVcblx0Y29uc3QgVGFza0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIik7XG5cdFRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRpc3BsYXlNb2RlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5EaXNwbGF5TW9kZShlKSB7XG5cdGRpYWxvZy50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGRpYWxvZy5hcHBlbmRDaGlsZChidWlsZERpc3BsYXlNb2RlKGZpbmRUYXNrSWQoZS50YXJnZXQpKSk7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHRkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xuXHR9KTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RlKGUpIHtcblx0YnVpbGRFZGl0TW9kZSgpO1xuXHRhZGREcm9wZG93bnMoKTtcblx0aWYgKGUudGFyZ2V0LmlkID09PSBcImVkaXQtYnRuXCIpIHtcblx0XHRwb3B1bGF0ZUZvcm0oZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuXHRjb25zb2xlLmxvZyhmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG59XG5cbi8qICAgUFNFVURPXG5cbkZVTkNUSU9OIHVwZGF0ZVNpZGViYXIoKVxuXHRHZXRzIGN1cnJlbnQgbGlzdC5cblx0QnVpbGRzIERPTSBlbGVtZW50cyBmb3IgZWFjaC5cbkVORCBGVU5DVElPTlxuXG4vLyBTaG93aW5nIHRoZSBzaWRlYmFyIChtb2JpbGUpXG5FVkVOVCBMSVNURU5FUiBzaWRlYmFyLW9wZW4tYnRuIG9uIGNsaWNrOiBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXG5cbi8vIEhpZGluZyB0aGUgc2lkZWJhciAobW9iaWxlKVxuRVZFTlQgTElTVEVORVIgc2lkZWJhci1jbG9zZS1idG4gb24gY2xpY2s6IHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIilcblxuLy8gT3BlbmluZyBlZGl0TW9kZVxuRVZFTlQgTElTVEVORVIgZWRpdC1idG4gb24gY2xpY2s6IG9wZW5FZGl0TW9kZSh0YXJnZXRUYXNrKVxuRlVOQ1RJT04gb3BlbkVkaXRNb2RlKHRhcmdldFRhc2spXG5cdEJ1aWxkcyBhIGZvcm0gaW4gPGRpYWxvZz4uXG5cdElGICh0YXJnZXRUYXNrKVxuXHRcdEdldHMgdGFyZ2V0VGFzayBpbmZvIGFuZCBzZXRzIGZvcm0gaW5wdXQgdmFsdWVzLlxuXHRFTkQgSUZcblx0QWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXRNb2RlIGJ1dHRvbnMuXG5cdFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIGZvciBkaXNwbGF5TW9kZSBidXR0b25zLlxuRU5EIEZVTkNUSU9OXG5cbi8vIERlbGV0aW5nIGEgdGFza1xuRVZFTlQgTElTVEVORVIgdGFzay1kZWxldGUtYnRuIG9uIGNsaWNrOiBkZWxldGVUYXNrKHRhcmdldFRhc2spXG5GVU5DVElPTiBkZWxldGVUYXNrKHRhcmdldFRhc2spXG5cdFJlbW92ZXMgdGFzayBmcm9tIGxpc3Rcblx0Y2xvc2VEaWFsb2coKVxuXHRVcGRhdGVzIHRoZSBzY3JlZW4uXG5FTkQgRlVOQ1RJT05cblxuLy8gQ2FuY2VsaW5nIGNoYW5nZXNcbkVWRU5UIExJU1RFTkVSIHRhc2stY2FuY2VsLWJ0biBvbiBjbGljazogY2xvc2VEaWFsb2coKVxuRlVOQ1RJT04gY2xvc2VEaWFsb2coKVxuXHRFcmFzZXMgZGlhbG9nIGlubmVyIGNvbnRlbnQgYW5kIGNsb3NlcyBpdC5cbkVORCBGVU5DVElPTlxuXG4vLyBTdWJtaXR0aW5nIGNoYW5nZXMsIGEgbmV3IHRhc2ssIG9yIG5ldyBwcm9qZWN0XG5FVkVOVCBMSVNURU5FUiBmb3JtIG9uIHN1Ym1pdDogaGFuZGxlRm9ybVN1Ym1pdChlKVxuRlVOQ1RJT04gaGFuZGxlRm9ybVN1Ym1pdChlKVxuXHRTdWJtaXRzIG5ldyBkZXRhaWxzIHRvIHRhcmdldFRhc2suXG5cdGNsb3NlRGlhbG9nKClcblx0VXBkYXRlcyB0aGUgc2NyZWVuLlxuRU5EIEZVTkNUSU9OXG5cbi8vIENyZWF0aW5nIGEgdGFza1xuRVZFTlQgTElTVEVORVIgYWRkLXRhc2stYnRuIG9uIGNsaWNrOiBvcGVuRWRpdE1vZGUoKVxuXG4vLyBDcmVhdGluZyBhIHByb2plY3RcbkVWRU5UIExJU1RFTkVSIGFkZC1wcm9qZWN0LWJ0biBvbiBjbGljazogb3BlblByb2plY3RNb2RlKClcbkZVTkNUSU9OIG9wZW5Qcm9qZWN0TW9kZSgpXG5cdE9wZW5zIGRpYWxvZy9mb3JtIHdpdGggc2luZ2xlIGlucHV0LlxuRU5EIEZVTkNUSU9OXG5cbi8vIERlbGV0aW5nIGEgcHJvamVjdFxuRVZFTlQgTElTVEVORVIgLnByb2plY3QtZGVsZXRlLWJ0biBvbiBjbGljazogZGVsZXRlUHJvamVjdChlKVxuRlVOQ1RJT04gZGVsZXRlUHJvamVjdChlKVxuXHRHZXQgcHJvamVjdE5hbWUgZnJvbSBlLnRhcmdldC5kYXRhc2V0LmV0Yy5cblx0UmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3QuXG5cdHVwZGF0ZVNpZGViYXIoKVxuRU5EIEZVTkNUSU9OXG5cblxuXG5cblxuICovXG4vLyBJbml0aWFsIGNhbGxcbnVwZGF0ZVRhc2tDb2x1bW5zKGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0QWxsVGFza3MoKSk7XG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==