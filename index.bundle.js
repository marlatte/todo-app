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
/* harmony export */   findTaskId: () => (/* binding */ findTaskId),
/* harmony export */   formRowFactory: () => (/* binding */ formRowFactory),
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
					<button class="close-btn">×</button>
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
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksByProperty("id", +selectedId)[0];
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
		.querySelector(".close-btn")
		.addEventListener("click", () => dialog.close());
}

// export function buildDisplayMode(selectedId) {
// 	const task = appController.Tasks.getTasksByProperty("id", +selectedId)[0];

// 	// Returns nested elFactories to append to dialog
// 	return htmlFactory(
// 		elFactory("div", { classList: "display-mode" }, [
// 			elFactory("section", { classList: "display-mode-header" }, [
// 				elFactory("h3", {
// 					classList: "display-title",
// 					textContent: task.getProperty("title"),
// 				}),
// 				elFactory("button", {
// 					type: "button",
// 					classList: "close-btn",
// 					textContent: "×",
// 				}),
// 			]),
// 			elFactory(
// 				"section",
// 				{ classList: "display-mode-details" },
// 				// Add details!!!!
// 				[
// 					"project",
// 					"priority",
// 					"due-date",
// 					"status",
// 					"notes",
// 					"tags",
// 				].map((prop) => {
// 					return elFactory(
// 						"p",
// 						{
// 							textContent: `${makeFirstUpper(prop)}: `,
// 						},
// 						[
// 							elFactory("span", {
// 								classList: `display-${prop}`,
// 								textContent: task.getProperty(prop),
// 							}),
// 						]
// 					);
// 				})
// 			),
// 			elFactory(
// 				"section",
// 				{
// 					classList: "display-mode-buttons id-bubble-marker",
// 					dataset: { taskId: selectedId },
// 				},
// 				[
// 					elFactory("button", {
// 						type: "button",
// 						id: "edit-btn",
// 						textContent: "Edit",
// 					}),
// 					elFactory("button", {
// 						type: "button",
// 						id: "delete-btn",
// 						textContent: "Delete",
// 					}),
// 				]
// 			),
// 		])
// 	);
// }

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
	dialog.innerHTML = `<form class="edit-mode" method="dialog">
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
							<label for="due">Due:</label>
							<input type="date" id="due" />
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
				<section class="edit-mode-buttons id-bubble-marker" data-task-id="">
					<button type="submit" id="save-btn">Save</button>
					<button type="button" id="cancel-btn">Cancel</button>
				</section>
			</form>`;
	document
		.getElementById("cancel-btn")
		.addEventListener("click", () => dialog.close());
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
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksByProperty("id", +selectedId)[0];
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

function openDisplayMode(e) {
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildDisplayMode)();
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.populateDisplay)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document.getElementById("delete-btn").addEventListener("click", deleteTask);
}

function openEditMode(e) {
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.buildEditMode)();
	(0,_modals__WEBPACK_IMPORTED_MODULE_2__.addDropdowns)();
	if (e.target.id === "edit-btn") {
		(0,_modals__WEBPACK_IMPORTED_MODULE_2__.populateForm)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
	}
	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleFormSubmit);
}

function deleteTask(e) {
	console.log((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
}

function handleFormSubmit(e) {
	e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPLHdGQUF3RixRQUFRLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxjQUFjLFNBQVMsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksY0FBYyxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsS0FBSyxhQUFhLGNBQWMsTUFBTSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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O0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFOztBQUVBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRCw2QkFBNkIsZ0NBQWdDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFtQjs7QUFFckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGFscy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmJvZHkge1xuXHRtaW4taGVpZ2h0OiAxMDBzdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmxleC1jb250YWluZXIge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1jb250ZW50IHtcblx0LS1tYWluLXNwYWNlcjogMjBweDtcblx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XG5cblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogMTtcblx0Ym90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSArIDQ4cHgpO1xuXHRsZWZ0OiAxMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0Z2FwOiAxMHB4O1xufVxuXG4jYWRkLWJ0biB7XG5cdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuXG4jYWRkLWJ0bi5vcGVuIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jYWRkLWJ0biB+ICoge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jYWRkLWJ0bi5vcGVuIH4gKiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0LmFwcC1jb250ZW50IHtcblx0XHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcblx0XHRtaW4taGVpZ2h0OiA4MHZoO1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xuXHR9XG5cdC5hZGQtY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmhlYWRlciBoMSB7XG5cdG1hcmdpbjogMTBweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jc2lkZWJhci1vcGVuLWJ0biB7XG5cdG1hcmdpbjogMTBweDtcblx0cGFkZGluZzogNXB4IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0I3NpZGViYXItb3Blbi1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNpZGViYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDEwMHN2aDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG5cbi5zaWRlYmFyLm9wZW4ge1xuXHR3aWR0aDogODB2dztcblx0cGFkZGluZzogMjBweDtcbn1cblxuI3NpZGViYXItY2xvc2UtYnRuIHtcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuc2lkZWJhcixcblx0LnNpZGViYXIub3BlbiB7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0d2lkdGg6IHVuc2V0O1xuXHRcdGhlaWdodDogdW5zZXQ7XG5cdFx0cGFkZGluZzogMjBweDtcblx0XHR6LWluZGV4OiB1bnNldDtcblx0fVxuXG5cdCNzaWRlYmFyLWNsb3NlLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5wcm9qZWN0LWRlbGV0ZS1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQucHJvamVjdC1uYW1lOmhvdmVyIC5wcm9qZWN0LWRlbGV0ZS1idG4ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1NpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5tYWluIHtcblx0ZmxleDogMTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNlcik7XG5cdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWFkZC1idG4tZGltcykgKyB2YXIoLS1tYWluLXNwYWNlcikpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcblx0LS1zdGF0dXMtc3BhY2VyOiAxMHB4O1xuXHRmbGV4OiAxO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbi5zdGF0dXMtcm93IHtcblx0ZmxleDogYXV0bztcblx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zdGF0dXMtY29sdW1uIHtcblx0ZmxleDogMTtcblx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XG5cdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcblx0bWluLWhlaWdodDogMjVzdmg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnRhc2stY2FyZCB7XG5cdC0tcHJpb3JpdHktd2lkdGg6IDEycHg7XG5cdC0tcHJpb3JpdHktY29sb3I6IGdyZXk7XG5cblx0cGFkZGluZzogNXB4IDVweCA1cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyA1cHgpO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHR2YXIoLS1wcmlvcml0eS1jb2xvcikgdmFyKC0tcHJpb3JpdHktd2lkdGgpLFxuXHRcdHRyYW5zcGFyZW50IHZhcigtLXByaW9yaXR5LXdpZHRoKVxuXHQpO1xuXG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiByZWQ7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cIm1lZGl1bVwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IGdvbGQ7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xufVxuXG4uc3VidGV4dCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRjb2xvcjogd2hpdGU7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmRpYWxvZyB7XG5cdC0tbW9kYWwtc3BhY2VyOiAxMnB4O1xuXG5cdG1hcmdpbjogYXV0bztcblx0Ym9yZGVyOiBub25lO1xufVxuXG5kaWFsb2cgPiAqIHtcblx0d2lkdGg6IG1pbig4OHZ3LCA1MDBweCk7XG5cdHBhZGRpbmc6IHZhcigtLW1vZGFsLXNwYWNlcik7XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRpc3BsYXktbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG5cbi5kaXNwbGF5LW1vZGUtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZWRpdC1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuXG4uZWRpdC1tb2RlLWRldGFpbHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG59XG5cbi5wcm9qZWN0LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9EaWFsb2cgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtREFBbUQ7O0FBRW5EOzs7Q0FHQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUEsb0RBQW9EO0FBQ3BELG1FQUFtRTs7QUFFbkU7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixxQkFBcUI7QUFDdEI7O0FBRUEsb0VBQW9FO0FBQ3BFLG9EQUFvRDs7QUFFcEQ7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9COztDQUVwQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLHVDQUF1QztDQUN2QyxVQUFVOztDQUVWLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsU0FBUztBQUNWOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IscUJBQXFCOztDQUVyQixrQ0FBa0M7Q0FDbEMsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6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RUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBLG9EQUFvRDs7QUFFcEQscURBQXFEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQvKiBjb2xvcjogdW5zZXQ7ICovXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZmxleC1jb250YWluZXIge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRlbnQge1xcblxcdC0tbWFpbi1zcGFjZXI6IDIwcHg7XFxuXFx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XFxuXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRkLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Ym90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSArIDQ4cHgpO1xcblxcdGxlZnQ6IDEwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4jYWRkLWJ0biB7XFxuXFx0aGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdHdpZHRoOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuI2FkZC1idG4ub3BlbiB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jYWRkLWJ0biB+ICoge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtYnRuLm9wZW4gfiAqIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0LmFwcC1jb250ZW50IHtcXG5cXHRcXHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcXG5cXHRcXHRtaW4taGVpZ2h0OiA4MHZoO1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcblxcdH1cXG5cXHQuYWRkLWNvbnRhaW5lciB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGJvdHRvbTogMTBweDtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oZWFkZXIge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0cGFkZGluZzogNXB4IDhweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdCNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDEwMHN2aDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcbi5zaWRlYmFyLm9wZW4ge1xcblxcdHdpZHRoOiA4MHZ3O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNzaWRlYmFyLWNsb3NlLWJ0biB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5zaWRlYmFyLFxcblxcdC5zaWRlYmFyLm9wZW4ge1xcblxcdFxcdHBvc2l0aW9uOiBpbmhlcml0O1xcblxcdFxcdHdpZHRoOiB1bnNldDtcXG5cXHRcXHRoZWlnaHQ6IHVuc2V0O1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0XFx0ei1pbmRleDogdW5zZXQ7XFxuXFx0fVxcblxcblxcdCNzaWRlYmFyLWNsb3NlLWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGVsZXRlLWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtbmFtZTpob3ZlciAucHJvamVjdC1kZWxldGUtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1NpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZzogdmFyKC0tbWFpbi1zcGFjZXIpO1xcblxcdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWFkZC1idG4tZGltcykgKyB2YXIoLS1tYWluLXNwYWNlcikpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuI3N0YXR1c2VzLWNvbnRhaW5lciB7XFxuXFx0LS1zdGF0dXMtc3BhY2VyOiAxMHB4O1xcblxcdGZsZXg6IDE7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi5zdGF0dXMtcm93IHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdHdpZHRoOiBtaW4oNDgwcHgsIDEwMCUpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFN0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc3RhdHVzLWNvbHVtbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG5cXHRtaW4td2lkdGg6IG1pbigyMzBweCwgMTAwJSk7XFxuXFx0bWluLWhlaWdodDogMjVzdmg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tc3RhdHVzLXNwYWNlcik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG5cXHQtLXByaW9yaXR5LXdpZHRoOiAxMnB4O1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZXk7XFxuXFxuXFx0cGFkZGluZzogNXB4IDVweCA1cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyA1cHgpO1xcblxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCxcXG5cXHRcXHR2YXIoLS1wcmlvcml0eS1jb2xvcikgdmFyKC0tcHJpb3JpdHktd2lkdGgpLFxcblxcdFxcdHRyYW5zcGFyZW50IHZhcigtLXByaW9yaXR5LXdpZHRoKVxcblxcdCk7XFxuXFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1lZGl1bVxcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnN1YnRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaWFsb2cgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmRpYWxvZyB7XFxuXFx0LS1tb2RhbC1zcGFjZXI6IDEycHg7XFxuXFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZGlhbG9nID4gKiB7XFxuXFx0d2lkdGg6IG1pbig4OHZ3LCA1MDBweCk7XFxuXFx0cGFkZGluZzogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRpc3BsYXktbW9kZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuLmVkaXQtbW9kZS1kZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0RpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBUYXNrcyA9ICgoKSA9PiB7XG5cdGxldCBfdGFza3MgPSBbXTtcblx0bGV0IF9pZENvdW50ZXIgPSAwO1xuXG5cdGZ1bmN0aW9uIF9kYXRlU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIG91dGdvaW5nVGFza3M7IC8vIGRldk1vZGVcblx0fVxuXG5cdGNvbnN0IF9jb2x1bW5OYW1lcyA9IFtcImJhY2tsb2dcIiwgXCJ0by1kb1wiLCBcImluLXByb2dyZXNzXCIsIFwiZG9uZVwiXTtcblxuXHRsZXQgX3Byb3BlcnR5TmFtZXMgPSBbXG5cdFx0XCJ0aXRsZVwiLFxuXHRcdFwic3RhdHVzXCIsXG5cdFx0XCJwcm9qZWN0XCIsXG5cdFx0XCJwcmlvcml0eVwiLFxuXHRcdFwibm90ZXNcIixcblx0XHRcImR1ZVwiLFxuXHRcdFwidGFnc1wiLFxuXHRdO1xuXG5cdGxldCBfcHJpb3JpdGllcyA9IFtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl07XG5cblx0ZnVuY3Rpb24gX2NvbHVtblNvcnQob3V0Z29pbmdUYXNrcykge1xuXHRcdGNvbnN0IGNvbHVtblNvcnRlZEFycmF5ID0gX2NvbHVtbk5hbWVzLm1hcCgoY29sdW1uTmFtZSkgPT4ge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0Y29sdW1uTmFtZSxcblx0XHRcdFx0X2RhdGVTb3J0KFxuXHRcdFx0XHRcdG91dGdvaW5nVGFza3MuZmlsdGVyKFxuXHRcdFx0XHRcdFx0KHRhc2spID0+IHRhc2suZ2V0UHJvcGVydHkoXCJzdGF0dXNcIikgPT09IGNvbHVtbk5hbWVcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRdO1xuXHRcdH0pO1xuXHRcdHJldHVybiBjb2x1bW5Tb3J0ZWRBcnJheTtcblx0fVxuXG5cdGZ1bmN0aW9uIF90YXNrRmFjdG9yeSgpIHtcblx0XHRjb25zdCBfdGFzayA9IHt9O1xuXHRcdGNvbnN0IHNldFByb3BlcnR5ID0gKGtleSwgdmFsdWUpID0+IChfdGFza1trZXldID0gdmFsdWUpO1xuXHRcdF9wcm9wZXJ0eU5hbWVzLmZvckVhY2goKHByb3ApID0+IHNldFByb3BlcnR5KHByb3AsIFwiXCIpKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0UHJvcGVydHk6IChrZXkpID0+IF90YXNrW2tleV0sXG5cdFx0XHRzZXRQcm9wZXJ0eSxcblx0XHRcdGxvZ0RhdGE6ICgpID0+IE9iamVjdC5lbnRyaWVzKF90YXNrKSwgLy8gZGV2TW9kZVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRUYXNrKGlucHV0VmFsdWVzQXJyYXkpIHtcblx0XHRjb25zdCBuZXdUYXNrID0gX3Rhc2tGYWN0b3J5KCk7XG5cdFx0bmV3VGFzay5zZXRQcm9wZXJ0eShcImlkXCIsIF9pZENvdW50ZXIrKyk7XG5cdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRuZXdUYXNrLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdH0pO1xuXHRcdF90YXNrcy5wdXNoKG5ld1Rhc2spO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVGFza3MoLi4ucmVtb3ZlSWRzKSB7XG5cdFx0X3Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAocmVtb3ZlSWRzLmluY2x1ZGVzKHRhc2suZ2V0UHJvcGVydHkoXCJpZFwiKSkpIHtcblx0XHRcdFx0X3Rhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBkZXZNb2RlXG5cdFx0X3Rhc2tzLmZvckVhY2goKGl0ZW0pID0+IGNvbnNvbGUubG9nKGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKSkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVGFzayh1cGRhdGVJZCwgaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdF90YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKHVwZGF0ZUlkID09PSB0YXNrLmdldFByb3BlcnR5KFwiaWRcIikpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRcdFx0X3Rhc2tzW2luZGV4XS5zZXRQcm9wZXJ0eShwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUYXNrc0J5UHJvcGVydHkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gX3Rhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0eShwcm9wKSA9PT0gdmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRhZGRUYXNrLFxuXHRcdHJlbW92ZVRhc2tzLFxuXHRcdHVwZGF0ZVRhc2ssXG5cdFx0Z2V0QWxsVGFza3M6ICgpID0+IF9jb2x1bW5Tb3J0KF90YXNrcyksXG5cdFx0Z2V0VGFza3NCeVByb3BlcnR5LFxuXHRcdGdldENvbHVtbk5hbWVzOiAoKSA9PiBfY29sdW1uTmFtZXMsXG5cdFx0Z2V0UHJpb3JpdHlOYW1lczogKCkgPT4gX3ByaW9yaXRpZXMsXG5cdFx0Z2V0UHJvcGVydHlOYW1lczogKCkgPT4gX3Byb3BlcnR5TmFtZXMsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuXHRsZXQgX3Byb2plY3RMaXN0ID0gW1wiaG9tZVwiLCBcImZpbmFuY2VzXCIsIFwibGVhcm5pbmdcIl07XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0TmFtZSkge1xuXHRcdF9wcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3ROYW1lKTtcblx0fVxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHJlbW92ZU5hbWUpIHtcblx0XHRpZiAoX3Byb2plY3RMaXN0LmluY2x1ZGVzKHJlbW92ZU5hbWUpKSB7XG5cdFx0XHQvLyBHZXQgdGFzay5pZCdzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHByb2plY3Rcblx0XHRcdGNvbnN0IHJlbW92ZUlkcyA9IFRhc2tzLmdldFRhc2tzQnlQcm9wZXJ0eShcblx0XHRcdFx0XCJwcm9qZWN0XCIsXG5cdFx0XHRcdHJlbW92ZU5hbWVcblx0XHRcdCkubWFwKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KFwiaWRcIikpO1xuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIHRhc2tzIHdpdGggdGhvc2UgaWQncyBmcm9tIF90YXNrc1xuXHRcdFx0VGFza3MucmVtb3ZlVGFza3MoLi4ucmVtb3ZlSWRzKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3Rcblx0XHRcdF9wcm9qZWN0TGlzdC5zcGxpY2UoX3Byb2plY3RMaXN0LmluZGV4T2YocmVtb3ZlTmFtZSksIDEpO1xuXG5cdFx0XHQvLyBkZXZNb2RlXG5cdFx0XHRjb25zb2xlLmxvZyhfcHJvamVjdExpc3QpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0YWRkUHJvamVjdCxcblx0XHRyZW1vdmVQcm9qZWN0LFxuXHRcdGdldFByb2plY3RzOiAoKSA9PiBfcHJvamVjdExpc3Quc29ydCgpLFxuXHR9O1xufSkoKTtcblxuY29uc3QgX2FkZERlZmF1bHRzID0gKCgpID0+IHtcblx0Y29uc3QgZGVmYXVsdFRhc2tzID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiBcInBheSBiaWxsc1wiLFxuXHRcdFx0c3RhdHVzOiBcImluLXByb2dyZXNzXCIsXG5cdFx0XHRwcm9qZWN0OiBcImZpbmFuY2VzXCIsXG5cdFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXG5cdFx0XHRub3RlczogXCJ0aGUgcmVudCBpcyB0b28gZGFtbiBoaWdoXCIsXG5cdFx0XHRkdWU6IFwiMjAyMy0xMS0wMVwiLFxuXHRcdFx0dGFnczogXCJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcImdyb2Nlcmllc1wiLFxuXHRcdFx0c3RhdHVzOiBcInRvLWRvXCIsXG5cdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHRkdWU6IFwiXCIsXG5cdFx0XHR0YWdzOiBcInN0b3JlXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJmaWxlIHRheGVzXCIsXG5cdFx0XHRzdGF0dXM6IFwiYmFja2xvZ1wiLFxuXHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRub3RlczogXCJcIixcblx0XHRcdGR1ZTogXCJcIixcblx0XHRcdHRhZ3M6IFwiXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJyZWFkIENoZWtob3ZcIixcblx0XHRcdHN0YXR1czogXCJiYWNrbG9nXCIsXG5cdFx0XHRwcm9qZWN0OiBcImxlYXJuaW5nXCIsXG5cdFx0XHRwcmlvcml0eTogXCJsb3dcIixcblx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0ZHVlOiBcIlwiLFxuXHRcdFx0dGFnczogXCJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInJlcGxhY2UgbGlnaHRidWxiXCIsXG5cdFx0XHRzdGF0dXM6IFwidG8tZG9cIixcblx0XHRcdHByb2plY3Q6IFwiaG9tZVwiLFxuXHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRub3RlczogXCJiYXRocm9vbSBsaWdodCBpcyBmbGlja2VyaW5nXCIsXG5cdFx0XHRkdWU6IFwiXCIsXG5cdFx0XHR0YWdzOiBcInN0b3JlXCIsXG5cdFx0fSxcblx0XS5tYXAoKGl0ZW0pID0+IE9iamVjdC5lbnRyaWVzKGl0ZW0pKTtcblxuXHRkZWZhdWx0VGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFRhc2tzLmFkZFRhc2soaXRlbSk7XG5cdH0pO1xuXG5cdC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGluZ3MgYXJlIGFkZGluZyBjb3JyZWN0bHkuIGRldk1vZGVcblx0Y29uc3QgdGVzdERlZmF1bHRUYXNrcyA9IFRhc2tzLmdldEFsbFRhc2tzKCk7XG5cdHRlc3REZWZhdWx0VGFza3MuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGBDb2x1bW46ICR7Y29sdW1uWzBdfWApO1xuXHRcdGNvbHVtblsxXS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coYFxcdFRhc2sgYXQ6ICR7aW5kZXh9YCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0YFxcdFxcdCR7dGFzay5sb2dEYXRhKCkuam9pbihcIlxcblxcdFxcdFwiKS5zcGxpdChcIixcIikuam9pbihcIjogXCIpfWBcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coXCJcXG5cIik7XG5cdH0pO1xufSkoKTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERPTSBGYWN0b3JpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG5cdHJldHVybiB7IHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRmFjdG9yeShvYmopIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcblx0Y29uc3QgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuXG5cdGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSAhPT0gXCJkYXRhc2V0XCIpIHtcblx0XHRcdGVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFNwZWNpYWwgZGlyZWN0aW9ucyBuZWVkZWQgdG8gc2V0IFwiZGF0YS1cIiBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKGNvbnN0IHByb3AgaW4gYXR0cmlidXRlc1trZXldKSB7XG5cdFx0XHRcdGVsLmRhdGFzZXRbcHJvcF0gPSBhdHRyaWJ1dGVzW2tleV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1Sb3dGYWN0b3J5KGZvcm1EYXRhQXJyYXlzKSB7XG5cdHJldHVybiBmb3JtRGF0YUFycmF5c1xuXHRcdC5tYXAoKGZvcm1EYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBrZWJhYiA9IGZvcm1EYXRhWzFdLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xuXHRcdFx0Y29uc3QgZm9ybUl0ZW0gPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1pdGVtXCIgfSwgW1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJsYWJlbFwiLCB7XG5cdFx0XHRcdFx0aHRtbEZvcjoga2ViYWIsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IGZvcm1EYXRhWzFdICsgXCI6XCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSk7XG5cblx0XHRcdHN3aXRjaCAoZm9ybURhdGFbMF0pIHtcblx0XHRcdFx0Y2FzZSBcImlucHV0XCI6XG5cdFx0XHRcdFx0Zm9ybUl0ZW0uY2hpbGRyZW4ucHVzaChcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImlucHV0XCIsIHtcblx0XHRcdFx0XHRcdFx0aWQ6IGtlYmFiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogZm9ybURhdGFbMl0sXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGZvcm1EYXRhWzNdLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJzZWxlY3RcIjpcblx0XHRcdFx0XHRmb3JtSXRlbS5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcdFx0XHRcInNlbGVjdFwiLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGtlYmFiLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwib3B0aW9uXCIpLFxuXHRcdFx0XHRcdFx0XHRcdC4uLmZvcm1EYXRhWzNdLm1hcCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFwib3B0aW9uXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG9wdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKG9wdGlvbiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvcm1EYXRhWzJdLnRvTG93ZXJDYXNlKCkgPT09XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidGV4dGFyZWFcIjpcblx0XHRcdFx0XHRmb3JtSXRlbS5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwidGV4dGFyZWFcIiwge1xuXHRcdFx0XHRcdFx0XHRpZDoga2ViYWIsXG5cdFx0XHRcdFx0XHRcdGNvbHM6IDMwLFxuXHRcdFx0XHRcdFx0XHRyb3dzOiAxMCxcblx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IGZvcm1EYXRhWzJdLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm9ybUl0ZW07XG5cdFx0fSlcblx0XHQucmVkdWNlKChhY2MsIGN1cnJlbnRJdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKCEoaW5kZXggJiAxKSkge1xuXHRcdFx0XHQvLyBJZiBldmVuLCBjcmVhdGUgcm93IHdpdGggY3VycmVudEl0ZW0gYXMgYSBjaGlsZFxuXHRcdFx0XHRhY2MucHVzaChcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiZm9ybS1yb3dcIiB9LCBbY3VycmVudEl0ZW1dKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgb2RkLCBhZGQgY3VycmVudEl0ZW0gdG8gcHJldmlvdXMgcm93XG5cdFx0XHRcdGFjY1thY2MubGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChjdXJyZW50SXRlbSk7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9XG5cdFx0fSwgW10pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBPdGhlciBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFza0lkKHRhcmdldCkge1xuXHRyZXR1cm4gdGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImlkLWJ1YmJsZS1tYXJrZXJcIilcblx0XHQ/IHRhcmdldC5kYXRhc2V0LnRhc2tJZFxuXHRcdDogZmluZFRhc2tJZCh0YXJnZXQucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmlyc3RVcHBlcihzdHJpbmcpIHtcblx0cmV0dXJuICEhc3RyaW5nXG5cdFx0PyBzdHJpbmdcblx0XHRcdFx0LnNwbGl0KFwiLVwiKVxuXHRcdFx0XHQubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuXHRcdFx0XHQuam9pbihcIiBcIilcblx0XHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoaXNvRGF0ZSkge1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7aXNvRGF0ZX1UMTI6MDA6MDAtMDQ6MDBgKTtcblx0Y29uc3QgZGF5cyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcblx0Y29uc3QgbW9udGhzID0gW1xuXHRcdFwiSmFuXCIsXG5cdFx0XCJGZWJcIixcblx0XHRcIk1hclwiLFxuXHRcdFwiQXByXCIsXG5cdFx0XCJNYXlcIixcblx0XHRcIkp1bmVcIixcblx0XHRcIkp1bHlcIixcblx0XHRcIkF1Z1wiLFxuXHRcdFwiU2VwdFwiLFxuXHRcdFwiT2N0XCIsXG5cdFx0XCJOb3ZcIixcblx0XHRcIkRlY1wiLFxuXHRdO1xuXG5cdHJldHVybiBgJHtkYXlzW2RhdGUuZ2V0RGF5KCldfSwgJHtkYXRlLmdldERhdGUoKX0gJHtcblx0XHRtb250aHNbZGF0ZS5nZXRNb250aCgpXVxuXHR9ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG59XG4iLCJpbXBvcnQge1xuXHRlbEZhY3RvcnksXG5cdGZvcm1Sb3dGYWN0b3J5LFxuXHRmb3JtYXREYXRlLFxuXHRodG1sRmFjdG9yeSxcblx0bWFrZUZpcnN0VXBwZXIsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIGFwcENvbnRyb2xsZXIgZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQgPT09IGRpYWxvZykgZGlhbG9nLmNsb3NlKCk7XG59KTtcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuXHRkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktbW9kZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgaWQ9XCJkaXNwbGF5LXRpdGxlXCI+PC9oMz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCI+w5c8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0PHA+UHJvamVjdDogPHNwYW4gaWQ9XCJkaXNwbGF5LXByb2plY3RcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPlByaW9yaXR5OiA8c3BhbiBpZD1cImRpc3BsYXktcHJpb3JpdHlcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPkR1ZTogPHNwYW4gaWQ9XCJkaXNwbGF5LWR1ZVwiPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0PHA+U3RhdHVzOiA8c3BhbiBpZD1cImRpc3BsYXktc3RhdHVzXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0XHQ8cD5Ob3Rlczo8c3BhbiBpZD1cImRpc3BsYXktbm90ZXNcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPlRhZ3M6IDxzcGFuIGlkPVwiZGlzcGxheS10YWdzXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1idXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIiBkYXRhLXRhc2staWQ9XCJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVkaXQtYnRuXCI+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlLWJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KHNlbGVjdGVkSWQpIHtcblx0Y29uc3QgdGFzayA9IGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0VGFza3NCeVByb3BlcnR5KFwiaWRcIiwgK3NlbGVjdGVkSWQpWzBdO1xuXHRhcHBDb250cm9sbGVyLlRhc2tzLmdldFByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkaXNwbGF5LSR7cHJvcH1gKTtcblx0XHRsZXQgb3V0cHV0ID0gdGFzay5nZXRQcm9wZXJ0eShwcm9wKTtcblxuXHRcdGlmIChwcm9wID09PSBcImR1ZVwiICYmICEhb3V0cHV0KSB7XG5cdFx0XHRvdXRwdXQgPSBmb3JtYXREYXRlKG91dHB1dCk7XG5cdFx0fVxuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9wID09PSBcInRhZ3NcIiA/IG91dHB1dCA6IG1ha2VGaXJzdFVwcGVyKG91dHB1dCk7XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcblx0ZGlhbG9nXG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cuY2xvc2UoKSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKHNlbGVjdGVkSWQpIHtcbi8vIFx0Y29uc3QgdGFzayA9IGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0VGFza3NCeVByb3BlcnR5KFwiaWRcIiwgK3NlbGVjdGVkSWQpWzBdO1xuXG4vLyBcdC8vIFJldHVybnMgbmVzdGVkIGVsRmFjdG9yaWVzIHRvIGFwcGVuZCB0byBkaWFsb2dcbi8vIFx0cmV0dXJuIGh0bWxGYWN0b3J5KFxuLy8gXHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJkaXNwbGF5LW1vZGVcIiB9LCBbXG4vLyBcdFx0XHRlbEZhY3RvcnkoXCJzZWN0aW9uXCIsIHsgY2xhc3NMaXN0OiBcImRpc3BsYXktbW9kZS1oZWFkZXJcIiB9LCBbXG4vLyBcdFx0XHRcdGVsRmFjdG9yeShcImgzXCIsIHtcbi8vIFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZGlzcGxheS10aXRsZVwiLFxuLy8gXHRcdFx0XHRcdHRleHRDb250ZW50OiB0YXNrLmdldFByb3BlcnR5KFwidGl0bGVcIiksXG4vLyBcdFx0XHRcdH0pLFxuLy8gXHRcdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuLy8gXHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG4vLyBcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImNsb3NlLWJ0blwiLFxuLy8gXHRcdFx0XHRcdHRleHRDb250ZW50OiBcIsOXXCIsXG4vLyBcdFx0XHRcdH0pLFxuLy8gXHRcdFx0XSksXG4vLyBcdFx0XHRlbEZhY3RvcnkoXG4vLyBcdFx0XHRcdFwic2VjdGlvblwiLFxuLy8gXHRcdFx0XHR7IGNsYXNzTGlzdDogXCJkaXNwbGF5LW1vZGUtZGV0YWlsc1wiIH0sXG4vLyBcdFx0XHRcdC8vIEFkZCBkZXRhaWxzISEhIVxuLy8gXHRcdFx0XHRbXG4vLyBcdFx0XHRcdFx0XCJwcm9qZWN0XCIsXG4vLyBcdFx0XHRcdFx0XCJwcmlvcml0eVwiLFxuLy8gXHRcdFx0XHRcdFwiZHVlLWRhdGVcIixcbi8vIFx0XHRcdFx0XHRcInN0YXR1c1wiLFxuLy8gXHRcdFx0XHRcdFwibm90ZXNcIixcbi8vIFx0XHRcdFx0XHRcInRhZ3NcIixcbi8vIFx0XHRcdFx0XS5tYXAoKHByb3ApID0+IHtcbi8vIFx0XHRcdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFxuLy8gXHRcdFx0XHRcdFx0XCJwXCIsXG4vLyBcdFx0XHRcdFx0XHR7XG4vLyBcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBgJHttYWtlRmlyc3RVcHBlcihwcm9wKX06IGAsXG4vLyBcdFx0XHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRcdFx0W1xuLy8gXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJzcGFuXCIsIHtcbi8vIFx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IGBkaXNwbGF5LSR7cHJvcH1gLFxuLy8gXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiB0YXNrLmdldFByb3BlcnR5KHByb3ApLFxuLy8gXHRcdFx0XHRcdFx0XHR9KSxcbi8vIFx0XHRcdFx0XHRcdF1cbi8vIFx0XHRcdFx0XHQpO1xuLy8gXHRcdFx0XHR9KVxuLy8gXHRcdFx0KSxcbi8vIFx0XHRcdGVsRmFjdG9yeShcbi8vIFx0XHRcdFx0XCJzZWN0aW9uXCIsXG4vLyBcdFx0XHRcdHtcbi8vIFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZGlzcGxheS1tb2RlLWJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiLFxuLy8gXHRcdFx0XHRcdGRhdGFzZXQ6IHsgdGFza0lkOiBzZWxlY3RlZElkIH0sXG4vLyBcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFtcbi8vIFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuLy8gXHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcbi8vIFx0XHRcdFx0XHRcdGlkOiBcImVkaXQtYnRuXCIsXG4vLyBcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCJFZGl0XCIsXG4vLyBcdFx0XHRcdFx0fSksXG4vLyBcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcbi8vIFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG4vLyBcdFx0XHRcdFx0XHRpZDogXCJkZWxldGUtYnRuXCIsXG4vLyBcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCJEZWxldGVcIixcbi8vIFx0XHRcdFx0XHR9KSxcbi8vIFx0XHRcdFx0XVxuLy8gXHRcdFx0KSxcbi8vIFx0XHRdKVxuLy8gXHQpO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYnVpbGRFZGl0TW9kZShzZWxlY3RlZElkID0gXCJcIikge1xuLy8gXHQvLyBCdWlsZHMgYSBmb3JtLCBhZGRzIHJlbGV2YW50IHRhc2sgaW5mbyBJRiBhbiBpZCBpcyBzdXBwbGllZFxuLy8gXHRjb25zdCB0YXNrID0gc2VsZWN0ZWRJZFxuLy8gXHRcdD8gYXBwQ29udHJvbGxlci5UYXNrcy5nZXRUYXNrc0J5UHJvcGVydHkoXCJpZFwiLCArc2VsZWN0ZWRJZClbMF1cbi8vIFx0XHQ6IHsgZ2V0UHJvcGVydHk6IChwcm9wKSA9PiBcIlwiIH07XG5cbi8vIFx0Y29uc3QgdGl0bGVSb3cgPSBmb3JtUm93RmFjdG9yeShbXG4vLyBcdFx0W1wiaW5wdXRcIiwgXCJUaXRsZVwiLCB0YXNrLmdldFByb3BlcnR5KFwidGl0bGVcIiksIFwidGV4dFwiXSxcbi8vIFx0XSk7XG5cbi8vIFx0Y29uc3QgbWlkZGxlUm93cyA9IGZvcm1Sb3dGYWN0b3J5KFtcbi8vIFx0XHRbXG4vLyBcdFx0XHRcInNlbGVjdFwiLFxuLy8gXHRcdFx0XCJQcm9qZWN0XCIsXG4vLyBcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwicHJvamVjdFwiKSxcbi8vIFx0XHRcdGFwcENvbnRyb2xsZXIuUHJvamVjdHMuZ2V0UHJvamVjdHMoKSxcbi8vIFx0XHRdLFxuLy8gXHRcdFtcbi8vIFx0XHRcdFwic2VsZWN0XCIsXG4vLyBcdFx0XHRcIlByaW9yaXR5XCIsXG4vLyBcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIiksXG4vLyBcdFx0XHRbXCJoaWdoXCIsIFwibWVkaXVtXCIsIFwibG93XCJdLFxuLy8gXHRcdF0sXG4vLyBcdFx0W1wiaW5wdXRcIiwgXCJEdWUgRGF0ZVwiLCB0YXNrLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSwgXCJkYXRlXCJdLFxuLy8gXHRcdFtcbi8vIFx0XHRcdFwic2VsZWN0XCIsXG4vLyBcdFx0XHRcIlN0YXR1c1wiLFxuLy8gXHRcdFx0dGFzay5nZXRQcm9wZXJ0eShcInN0YXR1c1wiKSxcbi8vIFx0XHRcdGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0Q29sdW1uTmFtZXMoKSxcbi8vIFx0XHRdLFxuLy8gXHRcdFtcInRleHRhcmVhXCIsIFwiTm90ZXNcIiwgdGFzay5nZXRQcm9wZXJ0eShcIm5vdGVzXCIpXSxcbi8vIFx0XSk7XG5cbi8vIFx0Y29uc3QgdGFnc1JvdyA9IGZvcm1Sb3dGYWN0b3J5KFtcbi8vIFx0XHRbXCJpbnB1dFwiLCBcIlRhZ3NcIiwgdGFzay5nZXRQcm9wZXJ0eShcInRhZ3NcIiksIFwidGV4dFwiXSxcbi8vIFx0XSk7XG5cbi8vIFx0dGFnc1Jvd1swXS5jaGlsZHJlblswXS5jaGlsZHJlbi51bnNoaWZ0KFxuLy8gXHRcdGVsRmFjdG9yeShcInBcIiwgeyB0ZXh0Q29udGVudDogXCJFbnRlciB0YWdzIHNlcGFyYXRlZCBieSBjb21tYXMuXCIgfSlcbi8vIFx0KTtcblxuLy8gXHRyZXR1cm4gaHRtbEZhY3RvcnkoXG4vLyBcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImVkaXQtbW9kZVwiIH0sIFtcbi8vIFx0XHRcdGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBjbGFzc0xpc3Q6IFwiZWRpdC1tb2RlLWRldGFpbHNcIiB9LCBbXG4vLyBcdFx0XHRcdC4uLnRpdGxlUm93LFxuLy8gXHRcdFx0XHQuLi5taWRkbGVSb3dzLFxuLy8gXHRcdFx0XHQuLi50YWdzUm93LFxuLy8gXHRcdFx0XSksXG4vLyBcdFx0XHRlbEZhY3RvcnkoXG4vLyBcdFx0XHRcdFwic2VjdGlvblwiLFxuLy8gXHRcdFx0XHR7XG4vLyBcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImVkaXQtbW9kZS1idXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIixcbi8vIFx0XHRcdFx0XHRkYXRhc2V0OiB7IHRhc2tJZDogc2VsZWN0ZWRJZCB9LFxuLy8gXHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRbXG4vLyBcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcbi8vIFx0XHRcdFx0XHRcdHR5cGU6IFwic3VibWl0XCIsXG4vLyBcdFx0XHRcdFx0XHRpZDogXCJzYXZlLWJ0blwiLFxuLy8gXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiU2F2ZVwiLFxuLy8gXHRcdFx0XHRcdH0pLFxuLy8gXHRcdFx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG4vLyBcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuLy8gXHRcdFx0XHRcdFx0aWQ6IFwiY2FuY2VsLWJ0blwiLFxuLy8gXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IFwiQ2FuY2VsXCIsXG4vLyBcdFx0XHRcdFx0fSksXG4vLyBcdFx0XHRcdF1cbi8vIFx0XHRcdCksXG4vLyBcdFx0XSlcbi8vIFx0KTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWRpdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgPGZvcm0gY2xhc3M9XCJlZGl0LW1vZGVcIiBtZXRob2Q9XCJkaWFsb2dcIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtZGV0YWlsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3Q6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD1cInByb2plY3RcIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSBBZGQgb3B0aW9ucyBoZXJlIC0tPlxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJpb3JpdHlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSBBZGQgb3B0aW9ucyBoZXJlIC0tPlxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZHVlXCI+RHVlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwic3RhdHVzXCI+U3RhdHVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJzdGF0dXNcIiByZXF1aXJlZD5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIEFkZCBvcHRpb25zIGhlcmUgLS0+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8cD5FbnRlciB0YWdzIHNlcGFyYXRlZCBieSBjb21tYXMuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFnc1wiPlRhZ3M6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YWdzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZWRpdC1tb2RlLWJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiIGRhdGEtdGFzay1pZD1cIlwiPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic2F2ZS1idG5cIj5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZm9ybT5gO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpYWxvZy5jbG9zZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERyb3Bkb3ducygpIHtcblx0W1xuXHRcdFtcInByb2plY3RcIiwgYXBwQ29udHJvbGxlci5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpXSxcblx0XHRbXCJwcmlvcml0eVwiLCBhcHBDb250cm9sbGVyLlRhc2tzLmdldFByaW9yaXR5TmFtZXMoKV0sXG5cdFx0W1wic3RhdHVzXCIsIGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0Q29sdW1uTmFtZXMoKV0sXG5cdF0uZm9yRWFjaCgocGFpcikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWlyWzBdKTtcblx0XHRwYWlyWzFdLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwib3B0aW9uXCIsIHtcblx0XHRcdFx0XHRcdHZhbHVlOiBvcHRpb24sXG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIob3B0aW9uKSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRm9ybShzZWxlY3RlZElkKSB7XG5cdGNvbnN0IHRhc2sgPSBhcHBDb250cm9sbGVyLlRhc2tzLmdldFRhc2tzQnlQcm9wZXJ0eShcImlkXCIsICtzZWxlY3RlZElkKVswXTtcblx0YXBwQ29udHJvbGxlci5UYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKTtcblxuXHRcdHN3aXRjaCAocHJvcCkge1xuXHRcdFx0Y2FzZSBcInByb2plY3RcIjpcblx0XHRcdGNhc2UgXCJwcmlvcml0eVwiOlxuXHRcdFx0Y2FzZSBcInN0YXR1c1wiOlxuXHRcdFx0XHRbLi4uZWxlbWVudC5jaGlsZHJlbl0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09PSB0YXNrLmdldFByb3BlcnR5KHByb3ApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidGl0bGVcIjpcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IG1ha2VGaXJzdFVwcGVyKHRhc2suZ2V0UHJvcGVydHkocHJvcCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcIm5vdGVzXCI6XG5cdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcih0YXNrLmdldFByb3BlcnR5KHByb3ApKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSB0YXNrLmdldFByb3BlcnR5KHByb3ApO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGFwcENvbnRyb2xsZXIgZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnksIGZpbmRUYXNrSWQsIG1ha2VGaXJzdFVwcGVyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHtcblx0YWRkRHJvcGRvd25zLFxuXHRidWlsZERpc3BsYXlNb2RlLFxuXHRidWlsZEVkaXRNb2RlLFxuXHRwb3B1bGF0ZURpc3BsYXksXG5cdHBvcHVsYXRlRm9ybSxcbn0gZnJvbSBcIi4vbW9kYWxzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBzaWRlYmFyT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1vcGVuLWJ0blwiKTtcbmNvbnN0IHByb2plY3REaXNwbGF5ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGlzcGxheWVkXCIpO1xuY29uc3Qgc3RhdHVzZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c2VzLWNvbnRhaW5lclwiKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJ0blwiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0blwiKTtcblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbHVtbnMoZGlzcGxheVRhc2tzKSB7XG5cdC8vIFJlc2V0IHRoZSBjb2x1bW5zXG5cdFsuLi5zdGF0dXNlc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocm93KSA9PiAocm93LnRleHRDb250ZW50ID0gXCJcIikpO1xuXG5cdC8vIEJ1aWxkIGNvbHVtbiBjb250ZW50XG5cdGRpc3BsYXlUYXNrcy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgY29sdW1uTmFtZSA9IGNvbHVtblswXTtcblx0XHRjb25zdCBzdGF0dXNOYW1lID0gbWFrZUZpcnN0VXBwZXIoY29sdW1uTmFtZSk7XG5cblx0XHRjb25zdCBjb2x1bW5Db250ZW50ID0gZWxGYWN0b3J5KFxuXHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtY29sdW1uXCIsXG5cdFx0XHRcdGlkOiBgZHluYW1pYy0ke2NvbHVtbk5hbWV9LWNvbHVtbmAsIC8vZGV2TW9kZSAoZHluYW1pYylcblx0XHRcdH0sXG5cdFx0XHRbXG5cdFx0XHRcdGVsRmFjdG9yeShcImgyXCIsIHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwic3RhdHVzLW5hbWVcIixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogc3RhdHVzTmFtZSxcblx0XHRcdFx0fSksXG5cdFx0XHRdXG5cdFx0KTtcblxuXHRcdC8vIEJ1aWxkIHRhc2sgY2FyZHNcblx0XHRjb2x1bW5bMV0uZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0Y29uc3QgW3RpdGxlLCBwcm9qZWN0LCBkdWVdID0gW1xuXHRcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwidGl0bGVcIiksXG5cdFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJwcm9qZWN0XCIpLFxuXHRcdFx0XHR0YXNrLmdldFByb3BlcnR5KFwiZHVlXCIpLFxuXHRcdFx0XTtcblx0XHRcdGNvbHVtbkNvbnRlbnQuY2hpbGRyZW4ucHVzaChcblx0XHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInRhc2stY2FyZCBpZC1idWJibGUtbWFya2VyXCIsXG5cdFx0XHRcdFx0XHRkYXRhc2V0OiB7XG5cdFx0XHRcdFx0XHRcdHByaW9yaXR5OiB0YXNrXG5cdFx0XHRcdFx0XHRcdFx0LmdldFByb3BlcnR5KFwicHJpb3JpdHlcIilcblx0XHRcdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0dGFza0lkOiB0YXNrLmdldFByb3BlcnR5KFwiaWRcIiksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcih0aXRsZSksXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzdWJ0ZXh0XCIgfSwgW1xuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHByb2plY3QpLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZGF0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBkdWUgPyBkdWUgOiBcIihkYXRlKVwiLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0byBjb3JyZWN0IHJvd1xuXHRcdGlmIChpbmRleCA8IDIpIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBNYWtlIGVhY2ggdGFzayBjbGlja2FibGVcblx0Y29uc3QgVGFza0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIik7XG5cdFRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRpc3BsYXlNb2RlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5EaXNwbGF5TW9kZShlKSB7XG5cdGJ1aWxkRGlzcGxheU1vZGUoKTtcblx0cG9wdWxhdGVEaXNwbGF5KGZpbmRUYXNrSWQoZS50YXJnZXQpKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RlKGUpIHtcblx0YnVpbGRFZGl0TW9kZSgpO1xuXHRhZGREcm9wZG93bnMoKTtcblx0aWYgKGUudGFyZ2V0LmlkID09PSBcImVkaXQtYnRuXCIpIHtcblx0XHRwb3B1bGF0ZUZvcm0oZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXHR9XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuXHRjb25zb2xlLmxvZyhmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8qICAgUFNFVURPXG5cbkZVTkNUSU9OIHVwZGF0ZVNpZGViYXIoKVxuXHRHZXRzIGN1cnJlbnQgbGlzdC5cblx0QnVpbGRzIERPTSBlbGVtZW50cyBmb3IgZWFjaC5cbkVORCBGVU5DVElPTlxuXG4vLyBTaG93aW5nIHRoZSBzaWRlYmFyIChtb2JpbGUpXG5FVkVOVCBMSVNURU5FUiBzaWRlYmFyLW9wZW4tYnRuIG9uIGNsaWNrOiBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXG5cbi8vIEhpZGluZyB0aGUgc2lkZWJhciAobW9iaWxlKVxuRVZFTlQgTElTVEVORVIgc2lkZWJhci1jbG9zZS1idG4gb24gY2xpY2s6IHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIilcblxuLy8gT3BlbmluZyBlZGl0TW9kZVxuRVZFTlQgTElTVEVORVIgZWRpdC1idG4gb24gY2xpY2s6IG9wZW5FZGl0TW9kZSh0YXJnZXRUYXNrKVxuRlVOQ1RJT04gb3BlbkVkaXRNb2RlKHRhcmdldFRhc2spXG5cdEJ1aWxkcyBhIGZvcm0gaW4gPGRpYWxvZz4uXG5cdElGICh0YXJnZXRUYXNrKVxuXHRcdEdldHMgdGFyZ2V0VGFzayBpbmZvIGFuZCBzZXRzIGZvcm0gaW5wdXQgdmFsdWVzLlxuXHRFTkQgSUZcblx0QWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXRNb2RlIGJ1dHRvbnMuXG5cdFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIGZvciBkaXNwbGF5TW9kZSBidXR0b25zLlxuRU5EIEZVTkNUSU9OXG5cbi8vIERlbGV0aW5nIGEgdGFza1xuRVZFTlQgTElTVEVORVIgdGFzay1kZWxldGUtYnRuIG9uIGNsaWNrOiBkZWxldGVUYXNrKHRhcmdldFRhc2spXG5GVU5DVElPTiBkZWxldGVUYXNrKHRhcmdldFRhc2spXG5cdFJlbW92ZXMgdGFzayBmcm9tIGxpc3Rcblx0Y2xvc2VEaWFsb2coKVxuXHRVcGRhdGVzIHRoZSBzY3JlZW4uXG5FTkQgRlVOQ1RJT05cblxuLy8gQ2FuY2VsaW5nIGNoYW5nZXNcbkVWRU5UIExJU1RFTkVSIHRhc2stY2FuY2VsLWJ0biBvbiBjbGljazogY2xvc2VEaWFsb2coKVxuRlVOQ1RJT04gY2xvc2VEaWFsb2coKVxuXHRFcmFzZXMgZGlhbG9nIGlubmVyIGNvbnRlbnQgYW5kIGNsb3NlcyBpdC5cbkVORCBGVU5DVElPTlxuXG4vLyBTdWJtaXR0aW5nIGNoYW5nZXMsIGEgbmV3IHRhc2ssIG9yIG5ldyBwcm9qZWN0XG5FVkVOVCBMSVNURU5FUiBmb3JtIG9uIHN1Ym1pdDogaGFuZGxlRm9ybVN1Ym1pdChlKVxuRlVOQ1RJT04gaGFuZGxlRm9ybVN1Ym1pdChlKVxuXHRTdWJtaXRzIG5ldyBkZXRhaWxzIHRvIHRhcmdldFRhc2suXG5cdGNsb3NlRGlhbG9nKClcblx0VXBkYXRlcyB0aGUgc2NyZWVuLlxuRU5EIEZVTkNUSU9OXG5cbi8vIENyZWF0aW5nIGEgdGFza1xuRVZFTlQgTElTVEVORVIgYWRkLXRhc2stYnRuIG9uIGNsaWNrOiBvcGVuRWRpdE1vZGUoKVxuXG4vLyBDcmVhdGluZyBhIHByb2plY3RcbkVWRU5UIExJU1RFTkVSIGFkZC1wcm9qZWN0LWJ0biBvbiBjbGljazogb3BlblByb2plY3RNb2RlKClcbkZVTkNUSU9OIG9wZW5Qcm9qZWN0TW9kZSgpXG5cdE9wZW5zIGRpYWxvZy9mb3JtIHdpdGggc2luZ2xlIGlucHV0LlxuRU5EIEZVTkNUSU9OXG5cbi8vIERlbGV0aW5nIGEgcHJvamVjdFxuRVZFTlQgTElTVEVORVIgLnByb2plY3QtZGVsZXRlLWJ0biBvbiBjbGljazogZGVsZXRlUHJvamVjdChlKVxuRlVOQ1RJT04gZGVsZXRlUHJvamVjdChlKVxuXHRHZXQgcHJvamVjdE5hbWUgZnJvbSBlLnRhcmdldC5kYXRhc2V0LmV0Yy5cblx0UmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3QuXG5cdHVwZGF0ZVNpZGViYXIoKVxuRU5EIEZVTkNUSU9OXG5cblxuXG5cblxuICovXG4vLyBJbml0aWFsIGNhbGxcbnVwZGF0ZVRhc2tDb2x1bW5zKGFwcENvbnRyb2xsZXIuVGFza3MuZ2V0QWxsVGFza3MoKSk7XG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==