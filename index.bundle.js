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

@media (min-width: 700px) {
	.app-content {
		width: min(calc(100vw - 40px), 1400px);
		min-height: 80vh;
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: 60px auto;
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

.bottom-buttons {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 12px;
	border: 2px solid blue;
}

.hidden-btn {
	display: none;
}

.hidden-btn.open {
	display: block;
}

.reveal-btns {
	display: flex;
	justify-content: space-between;
}

.reveal-btn {
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

#add-reveal-btn.open {
	transform: rotate(45deg);
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
	--priority-color: rgb(222, 19, 0);
}

.task-card[data-priority="medium"] {
	--priority-color: gold;
}

.task-card[data-priority="low"] {
	--priority-color: skyblue;
}

#done-column .task-card {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: red;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n.flex-container {\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.app-content {\n\t--main-spacer: 20px;\n\t--add-btn-dims: 50px;\n\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #fff;\n}\n\n@media (min-width: 700px) {\n\t.app-content {\n\t\twidth: min(calc(100vw - 40px), 1400px);\n\t\tmin-height: 80vh;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tgrid-template-rows: 60px auto;\n\t}\n}\n\n/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tborder-bottom: 1px solid black;\n}\n\nheader h1 {\n\tmargin: 10px;\n\tfont-style: italic;\n}\n\n#sidebar-open-btn {\n\tmargin: 10px;\n\tpadding: 5px 8px;\n\tfont-size: 20px;\n}\n\n@media (min-width: 700px) {\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 0;\n\theight: 100svh;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\n\tbackground-color: wheat;\n\n\ttransition: all 1s;\n}\n\n.sidebar.open {\n\twidth: 100vw;\n\tpadding: 20px;\n\n\ttransition: all 0.5s;\n}\n\n.sidebar > * {\n\topacity: 0;\n\n\ttransition: opacity 0.2s;\n}\n\n.sidebar.open > * {\n\topacity: 1;\n\n\ttransition: opacity 1s;\n}\n\n.close-btn {\n\talign-self: flex-end;\n\tpadding: 10px;\n}\n\n.projects-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.project-name {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.bottom-buttons {\n\tmargin-top: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n\tborder: 2px solid blue;\n}\n\n.hidden-btn {\n\tdisplay: none;\n}\n\n.hidden-btn.open {\n\tdisplay: block;\n}\n\n.reveal-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.reveal-btn {\n\theight: var(--add-btn-dims);\n\twidth: var(--add-btn-dims);\n\tdisplay: grid;\n\tplace-content: center;\n\n\tborder-radius: var(--add-btn-dims);\n\tborder: 2px solid white;\n\tbackground-color: black;\n\tcolor: white;\n\tfont-size: 40px;\n}\n\n#add-reveal-btn.open {\n\ttransform: rotate(45deg);\n}\n\n@media (min-width: 700px) {\n\t.sidebar,\n\t.sidebar.open {\n\t\tposition: inherit;\n\t\twidth: unset;\n\t\theight: unset;\n\t\tpadding: 20px;\n\t\tz-index: unset;\n\n\t\ttransition: none;\n\t}\n\n\t.sidebar > *,\n\t.sidebar.open > * {\n\t\topacity: 1;\n\t}\n\n\t#sidebar-close-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tposition: relative;\n\tpadding: var(--main-spacer);\n\tpadding-bottom: calc(var(--add-btn-dims) + var(--main-spacer));\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--main-spacer);\n}\n\n#statuses-container {\n\t--status-spacer: 10px;\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n.status-row {\n\tflex: auto;\n\twidth: min(480px, 100%);\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n/* ---------------     Status columns     --------------- */\n\n.status-column {\n\tflex: 1;\n\tpadding: var(--status-spacer);\n\tmin-width: min(230px, 100%);\n\tmin-height: 25svh;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--status-spacer);\n\tborder: 1px solid black;\n\tborder-radius: 6px;\n}\n\n.task-card {\n\t--priority-width: 12px;\n\t--priority-color: grey;\n\n\tpadding: 5px 5px 5px calc(var(--priority-width) + 5px);\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--priority-color) var(--priority-width),\n\t\ttransparent var(--priority-width)\n\t);\n\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n}\n\n.task-card[data-priority=\"high\"] {\n\t--priority-color: rgb(222, 19, 0);\n}\n\n.task-card[data-priority=\"medium\"] {\n\t--priority-color: gold;\n}\n\n.task-card[data-priority=\"low\"] {\n\t--priority-color: skyblue;\n}\n\n#done-column .task-card {\n\t--priority-color: green;\n}\n\n.subtext {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n/* ---------------     /Status columns     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: black;\n\tcolor: white;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     Dialog     --------------- */\n\ndialog {\n\t--modal-spacer: 12px;\n\n\tmargin: auto;\n\tborder: none;\n}\n\ndialog > * {\n\twidth: min(88vw, 500px);\n\tpadding: var(--modal-spacer);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\n.display-mode {\n\tdisplay: flex;\n\n\tbackground-color: wheat;\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: cadetblue;\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n/* ---------------     /Dialog     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


const Tasks = (() => {
	let _taskList = new Set();
	let _idCounter = 1;

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

	function _dateSort(outgoingTasks) {
		return outgoingTasks.sort((a, b) => {
			const dateA = +a.getProperties().due.split("-").join("");
			const dateB = +b.getProperties().due.split("-").join("");
			return !dateA ? 1 : dateB - dateA;
		});
	}

	function _columnSort(outgoingTasks) {
		return _columnNames.map((columnName) => {
			return [
				columnName,
				_dateSort(
					outgoingTasks.filter(
						(task) => task.getProperties().status === columnName
					)
				),
			];
		});
	}

	function _taskFactory() {
		const _task = {};
		const setProperty = (key, value) => (_task[key] = value);
		_propertyNames.forEach((prop) => setProperty(prop, ""));
		return {
			getProperties: () => _task,
			setProperty,
		};
	}

	function addTask(inputValuesArray) {
		const newTask = _taskFactory();
		newTask.setProperty("id", _idCounter++);
		inputValuesArray.forEach((pair) => {
			newTask.setProperty(pair[0], pair[1]);
		});
		_taskList.add(newTask);
	}

	function removeTasks(...removeIds) {
		[..._taskList].forEach((task) => {
			if (removeIds.includes(task.getProperties().id)) {
				_taskList.delete(task);
			}
		});
	}

	function updateTask(updateId, inputValuesArray) {
		[..._taskList].forEach((task) => {
			if (updateId === task.getProperties().id) {
				inputValuesArray.forEach((pair) => {
					task.setProperty(pair[0], pair[1]);
				});
			}
		});
	}

	function clearTasks() {
		_taskList.clear();
	}

	function getTasksBy(prop, value) {
		return [..._taskList].filter((task) => task.getProperties()[prop] === value);
	}

	function getSortedTasksBy(prop, value) {
		return _columnSort(
			[..._taskList].filter((task) => task.getProperties()[prop] === value)
		);
	}

	const subAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, addTask);
	const subRemoveTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, removeTasks);
	const subUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.UPDATE_TASK, updateTask);
	const subClearTasks = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL, clearTasks);

	return {
		getAllTasks: () => [..._taskList],
		getSortedTasks: () => _columnSort([..._taskList]),
		getTasksBy,
		getSortedTasksBy,
		getColumnNames: () => _columnNames,
		getPriorityNames: () => _priorities,
		getPropertyNames: () => _propertyNames,
	};
})();

const Projects = (() => {
	let _projectList = new Set();

	function addProject(newProjectName) {
		_projectList.add(newProjectName.toLowerCase());
	}

	function removeProject(removeName) {
		if (_projectList.has(removeName)) {
			// Get task.id's associated with that project
			const removeIds = Tasks.getTasksBy("project", removeName).map(
				(task) => task.getProperties().id
			);

			// Remove all tasks with those id's from _taskList
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, ...removeIds);

			// Remove name from project list
			_projectList.delete(removeName);
		}
	}

	function clearProjects() {
		_projectList.clear();
	}

	const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, addProject);
	const subRemoveProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_PROJECT, removeProject);
	const subClearProjects = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL, clearProjects);

	return {
		getProjects: () => [..._projectList].sort(),
	};
})();

function addDefaults(askUser) {
	const userConfirmed = askUser
		? confirm(
				"Default Mode replaces all tasks and projects with an example set. \nThis will erase anything you have saved."
		  )
		: true;
	if (userConfirmed) {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL);
		const defaultProjects = ["home", "finances", "learning"];

		defaultProjects.forEach((project) => {
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, project);
		});

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
				due: "2023-11-05",
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
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, item);
		});
	}
}

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_DEFAULTS, addDefaults);


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
/* harmony export */   dialog: () => (/* binding */ dialog)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");




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
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", selectedId)[0].getProperties();
	_app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(`display-${prop}`);
		let output = task[prop];

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
							<input type="text" id="title" class="submit-info" required />
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="project">Project:</label>
							<select id="project" class="submit-info">
								<option value=""></option>
							</select>
						</div>
						<div class="form-item">
							<label for="priority">Priority:</label>
							<select id="priority" class="submit-info">
								<option value=""></option>
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
							<select id="status" class="submit-info" required></select>
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
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", selectedId)[0].getProperties();
	_app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getPropertyNames().forEach((prop) => {
		const element = document.getElementById(prop);

		switch (prop) {
			case "project":
			case "priority":
			case "status":
				[...element.children].forEach((option) => {
					option.selected = option.value === task[prop];
				});
				break;
			case "title":
				element.value = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(task[prop]);
				break;

			case "notes":
				element.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(task[prop]);
				break;

			default:
				element.value = task[prop];
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

const subDisplayBuild = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.DISPLAY_MODE, buildDisplayMode);
const subDisplayPop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.DISPLAY_MODE, populateDisplay);

const subEditBuild = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.EDIT_MODE, buildEditMode);
const subEditDropdowns = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.EDIT_MODE, addDropdowns);
const subFormPop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.EDIT_MODE_POP, populateForm);

const subProjectBuild = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.PROJECT_MODE, buildProjectMode);


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENTS: () => (/* binding */ EVENTS),
/* harmony export */   PubSub: () => (/* binding */ PubSub)
/* harmony export */ });
/*
PubSub organization

event types: 
	- addTask
	- updateTask
	- removeTask
	- addProject
	- removeProject

subscribers (things that need to get done):
	- making relevant changes in appController
	- populateStorage (once JSON comes into play)
	- updateScreen


(localStorage note: gonna need to use MDN's storageAvailable fn to determine whether or not to subscribe storage related stuff to events, meaning that everything needs to still work even if storage isn't available)
*/

const PubSub = (() => {
	const _eventsList = {};
	// { key: "triggerEvent", value: [ array of functions ] }

	function subscribe(triggerEvent, subscriber) {
		if (!_eventsList[triggerEvent]) {
			_eventsList[triggerEvent] = [subscriber];
		} else {
			_eventsList[triggerEvent].push(subscriber);
		}
		return {
			unsubscribe: () => {
				const functionList = _eventsList[triggerEvent];
				const i = functionList.indexOf(subscriber);
				if (i > -1) {
					functionList.splice(i, 1);
				}
			},
		};
	}

	function publish(triggerEvent, ...args) {
		const functionList = _eventsList[triggerEvent];
		if (Array.isArray(functionList)) {
			functionList.forEach((subscriber) => {
				subscriber.apply(null, args);
			});
		}
	}

	return { subscribe, publish };
})();

const EVENTS = {
	DISPLAY_MODE: "displayMode",
	EDIT_MODE: "editMode",
	EDIT_MODE_POP: "editModePop",
	PROJECT_MODE: "projectMode",
	DELETE_TASK: "deleteTask",
	ADD_TASK: "addTask",
	UPDATE_TASK: "updateTask",
	CARD_CLICK: "cardClick",
	INIT: "init",
	ADD_PROJECT: "addProject",
	DELETE_PROJECT: "deleteProject",
	ADD_DEFAULTS: "addDefaults",
	CLEAR_ALL: "clearAll",
};


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./src/modals.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");





const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");
sidebarOpenBtn.addEventListener("click", () => sidebar.classList.add("open"));
sidebarCloseBtn.addEventListener("click", () => sidebar.classList.remove("open"));

const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");

const ALL_TASKS = "all-tasks";
const NO_PROJECT = "uncategorized";
let currentProject = ALL_TASKS;

function updateScreen() {
	if (currentProject === ALL_TASKS) {
		projectDisplayed.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(ALL_TASKS);
		updateTaskColumns(_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getSortedTasks());
		updateSidebar();
	} else {
		projectDisplayed.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(currentProject);
		updateTaskColumns(
			_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getSortedTasksBy(
				"project",
				currentProject === NO_PROJECT ? "" : currentProject
			)
		);
		updateSidebar();
	}
	_modals__WEBPACK_IMPORTED_MODULE_1__.dialog.close();
}

function updateTaskColumns(displayTasks) {
	// Reset the columns
	[...statusesContainer.children].forEach((row) => (row.textContent = ""));

	// Build column content
	displayTasks.forEach((column, index) => {
		const columnName = column[0];
		const statusName = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(columnName);

		const columnContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
			"section",
			{
				classList: "status-column",
				id: `${columnName}-column`,
			},
			[
				(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("h2", {
					classList: "status-name",
					textContent: statusName,
				}),
			]
		);

		// Build task cards
		column[1].forEach((taskContainer) => {
			const task = taskContainer.getProperties();

			columnContent.children.push(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
					"div",
					{
						classList: "task-card id-bubble-marker",
						dataset: {
							priority: task.priority.toLowerCase(),
							taskId: task.id,
						},
					},
					[
						(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", {
							classList: "title",
							textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(task.title),
						}),
						(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", { classList: "subtext" }, [
							(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", {
								classList: "project",
								textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(task.project),
							}),
							(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", {
								classList: "due",
								textContent: task.due,
							}),
						]),
					]
				)
			);
		});

		// Append to correct row
		if (index < 2) {
			statusesContainer.firstElementChild.appendChild(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(columnContent)
			);
		} else {
			statusesContainer.lastElementChild.appendChild(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(columnContent)
			);
		}
	});

	// Make each task clickable
	const TaskCards = document.querySelectorAll(".task-card");
	TaskCards.forEach((card) => {
		card.addEventListener("click", (e) => {
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CARD_CLICK, e);
		});
	});
}

function updateSidebar() {
	document.querySelector(".projects-container").remove();
	const replacementContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
		"div",
		{ classList: "projects-container" },
		[ALL_TASKS, NO_PROJECT, ..._app_controller__WEBPACK_IMPORTED_MODULE_0__.Projects.getProjects()].map((project) => {
			return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
				"div",
				{
					classList: "project-name id-bubble-marker",
					dataset: { projectFilter: project },
				},
				[
					(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("button", {
						type: "button",
						textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(project),
						classList: "project-filter-btn",
					}),
					[ALL_TASKS, NO_PROJECT].includes(project)
						? ""
						: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("button", {
								type: "button",
								textContent: "D",
								classList: "project-delete-btn",
						  }),
				]
			);
		})
	);
	document
		.querySelector(".bottom-buttons")
		.before((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(replacementContainer));
	document.querySelectorAll(".project-filter-btn").forEach((button) => {
		button.addEventListener("click", filterProjectView);
	});
	document.querySelectorAll(".project-delete-btn").forEach((button) => {
		button.addEventListener("click", handleProjectDelete);
	});
}

function handleProjectDelete(e) {
	const selectedProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findProjectName)(e.target);

	const userConfirmed = confirm(
		`Are you sure you want to delete "${(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(
			selectedProject
		)}" and all its tasks? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.DELETE_PROJECT, selectedProject);
		currentProject =
			selectedProject === currentProject ? ALL_TASKS : currentProject;
		updateScreen();
	}
}

function filterProjectView(e) {
	currentProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findProjectName)(e.target);
	updateScreen();
	sidebar.classList.remove("open");
}

const subInit = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.INIT, updateScreen);

const subDeleteTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.DELETE_TASK, updateScreen);
const subAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.ADD_TASK, updateScreen);
const subUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.UPDATE_TASK, updateScreen);

const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.ADD_PROJECT, updateScreen);

const subClearScreen = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CLEAR_ALL, updateScreen);


/***/ }),

/***/ "./src/web-storage.js":
/*!****************************!*\
  !*** ./src/web-storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");



// This function is from MDN to test is storage is available on older browsers.
function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === "QuotaExceededError" ||
				// Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage &&
			storage.length !== 0
		);
	}
}

let storageType;
if (storageAvailable("localStorage")) {
	console.log("localStorage");
	storageType = localStorage;
} else if (storageAvailable("sessionStorage")) {
	console.log("sessionStorage");
	storageType = sessionStorage;
} else {
	console.log("No storage");
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_DEFAULTS, false);
}

function checkStorage() {
	if (!!storageType.length) {
		getStorage();
	}
}

function setStorage() {
	const allTasks = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getAllTasks().map((task) => task.getProperties());
	const allProjects = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects();

	console.log({ allTasks, allProjects }); //devMode

	storageType.setItem("allProjects", JSON.stringify(allProjects));
	storageType.setItem("allTasks", JSON.stringify([...allTasks]));
}

function getStorage() {
	const storedProjects = JSON.parse(storageType.getItem("allProjects"));
	const storedTasks = JSON.parse(storageType.getItem("allTasks")).map((item) =>
		Object.entries(item)
	);

	console.log(storedProjects); // devMode
	console.log(storedTasks); // devMode

	storedProjects.forEach((project) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, project);
	});

	storedTasks.forEach((item) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, item);
	});
}

function clearStorage() {
	storageType.clear();

	console.log(storageType); // devMode
}

const subSetAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, setStorage);
const subSetDeleteTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, setStorage);
const subSetUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.UPDATE_TASK, setStorage);
const subSetAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, setStorage);
const subSetDeleteProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_PROJECT, setStorage);

const subCheckInit = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.INIT, checkStorage);

const subClearStorage = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL, clearStorage);


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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals */ "./src/modals.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-storage */ "./src/web-storage.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");








const BottomBtns = (() => {
	const addRevealBtn = document.getElementById("add-reveal-btn");
	const addTaskBtn = document.getElementById("add-task-btn");
	const addProjectBtn = document.getElementById("add-project-btn");

	const storageRevealBtn = document.getElementById("storage-reveal-btn");
	const defaultsBtn = document.getElementById("defaults-btn");
	const clearStorageBtn = document.getElementById("clear-storage-btn");

	addRevealBtn.addEventListener("click", () => {
		addRevealBtn.classList.toggle("open");
		addTaskBtn.classList.toggle("open");
		addProjectBtn.classList.toggle("open");

		hideStorageBtns();
	});

	addTaskBtn.addEventListener("click", openEditMode);
	addProjectBtn.addEventListener("click", openProjectMode);

	storageRevealBtn.addEventListener("click", () => {
		storageRevealBtn.classList.toggle("open");
		defaultsBtn.classList.toggle("open");
		clearStorageBtn.classList.toggle("open");

		hideAddBtns();
	});

	defaultsBtn.addEventListener("click", () => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_DEFAULTS, true);
	});
	clearStorageBtn.addEventListener("click", () => {
		const userConfirmed = confirm(
			"Are you sure you want to delete all tasks AND projects? \nThis action cannot be undone."
		);

		if (userConfirmed) {
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL);
		}
	});

	function hideAddBtns() {
		addRevealBtn.classList.remove("open");
		addTaskBtn.classList.remove("open");
		addProjectBtn.classList.remove("open");
	}

	const subAddDisplay = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DISPLAY_MODE, hideAddBtns);
	const subAddEdit = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.EDIT_MODE, hideAddBtns);
	const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.PROJECT_MODE, hideAddBtns);

	function hideStorageBtns() {
		storageRevealBtn.classList.remove("open");
		defaultsBtn.classList.remove("open");
		clearStorageBtn.classList.remove("open");
	}

	const subStorDefaults = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_DEFAULTS, hideStorageBtns);
	const subStorClearAll = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL, hideStorageBtns);
	const subStorDisplay = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DISPLAY_MODE, hideStorageBtns);

	return { addTaskBtn };
})();

function openDisplayMode(e) {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DISPLAY_MODE, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target));

	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleTaskDelete);
}

function openEditMode(e) {
	if (e.target !== BottomBtns.addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", openEditMode);
		document
			.getElementById("delete-btn")
			.removeEventListener("click", handleTaskDelete);
	}

	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.EDIT_MODE);

	if (e.target.id === "edit-btn") {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.EDIT_MODE_POP, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target));
	}

	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.addEventListener("click", handleTaskCancel);
}

function openProjectMode() {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.PROJECT_MODE);

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

	if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target)) {
		openDisplayMode(e);
	} else {
		_modals__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
	}
}

function handleProjectCancel() {
	document
		.querySelector(".project-mode")
		.removeEventListener("submit", handleProjectSubmit);
	document
		.getElementById("project-cancel-btn")
		.removeEventListener("click", handleProjectCancel);

	_modals__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
}

function handleTaskDelete(e) {
	const selectedId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target);
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", selectedId)[0].getProperties();

	const userConfirmed = confirm(
		`Are you sure you want to delete the "${(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeFirstUpper)(
			task.title
		)}" task? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, selectedId);
	}
}

function getValuesArray() {
	const submittedInfo = [];
	document.querySelectorAll(".submit-info").forEach((el) => {
		let submitValue = {
			input: el.value,
			select: [...el.children].filter((option) => option.selected === true)[0]
				?.value,
			textarea: el.textContent,
		}[el.tagName.toLowerCase()];
		submittedInfo.push([el.id, submitValue]);
	});
	return submittedInfo;
}

function handleTaskSubmit(e) {
	e.preventDefault();
	const submitId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(document.getElementById("save-btn"));
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);

	const userConfirmed = confirm(
		`Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`
	);

	if (userConfirmed) {
		const valuesArray = getValuesArray();
		if (submitId === 0) {
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, valuesArray);
		} else {
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.UPDATE_TASK, submitId, valuesArray);
		}
		_modals__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
	}
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, newProjectName);
}

const subCardClick = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CARD_CLICK, openDisplayMode);

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.INIT);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPLHdGQUF3RixRQUFRLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxjQUFjLFNBQVMsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksY0FBYyxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsS0FBSyxhQUFhLGNBQWMsTUFBTSxhQUFhLFdBQVcsVUFBVSxNQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssb0RBQVU7QUFDZjtBQUNBLEdBQUc7QUFDSCxFQUFFLDJDQUFNO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDJDQUFNO0FBQ1A7O0FBRUE7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUIsY0FBYyxrREFBSzs7QUFFbkI7QUFDQSwwQ0FBMEMsd0RBQWM7QUFDeEQ7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSxFQUFFLDJDQUFNLFNBQVMsMkNBQU07QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsK0NBQStDO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMkNBQU0sU0FBUywyQ0FBTTtBQUN4QixJQUFJO0FBQ0osR0FBRywyQ0FBTSxTQUFTLDJDQUFNO0FBQ3hCO0FBQ0EsRUFBRSwyQ0FBTTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQ0FBTSxTQUFTLDJDQUFNO0FBQ3RCOztBQUVBLHFCQUFxQiwyQ0FBTSxXQUFXLDJDQUFNOztBQUU1QywyQ0FBTSxTQUFTLDJDQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYXBwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2ViLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQvKiBjb2xvcjogdW5zZXQ7ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5ib2R5IHtcblx0bWluLWhlaWdodDogMTAwc3ZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmZsZXgtY29udGFpbmVyIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtY29udGVudCB7XG5cdC0tbWFpbi1zcGFjZXI6IDIwcHg7XG5cdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xuXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5hcHAtY29udGVudCB7XG5cdFx0d2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gNDBweCksIDE0MDBweCk7XG5cdFx0bWluLWhlaWdodDogODB2aDtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmhlYWRlciB7XG5cdGdyaWQtY29sdW1uOiBzcGFuIDI7XG5cdGhlaWdodDogNjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5oZWFkZXIgaDEge1xuXHRtYXJnaW46IDEwcHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuI3NpZGViYXItb3Blbi1idG4ge1xuXHRtYXJnaW46IDEwcHg7XG5cdHBhZGRpbmc6IDVweCA4cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdCNzaWRlYmFyLW9wZW4tYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zaWRlYmFyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAxMDBzdmg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuXG5cdHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLnNpZGViYXIub3BlbiB7XG5cdHdpZHRoOiAxMDB2dztcblx0cGFkZGluZzogMjBweDtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnNpZGViYXIgPiAqIHtcblx0b3BhY2l0eTogMDtcblxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5zaWRlYmFyLm9wZW4gPiAqIHtcblx0b3BhY2l0eTogMTtcblxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xufVxuXG4uY2xvc2UtYnRuIHtcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b20tYnV0dG9ucyB7XG5cdG1hcmdpbi10b3A6IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTJweDtcblx0Ym9yZGVyOiAycHggc29saWQgYmx1ZTtcbn1cblxuLmhpZGRlbi1idG4ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuLWJ0bi5vcGVuIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZXZlYWwtYnRucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJldmVhbC1idG4ge1xuXHRoZWlnaHQ6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdHdpZHRoOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cblx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogNDBweDtcbn1cblxuI2FkZC1yZXZlYWwtYnRuLm9wZW4ge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuc2lkZWJhcixcblx0LnNpZGViYXIub3BlbiB7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0d2lkdGg6IHVuc2V0O1xuXHRcdGhlaWdodDogdW5zZXQ7XG5cdFx0cGFkZGluZzogMjBweDtcblx0XHR6LWluZGV4OiB1bnNldDtcblxuXHRcdHRyYW5zaXRpb246IG5vbmU7XG5cdH1cblxuXHQuc2lkZWJhciA+ICosXG5cdC5zaWRlYmFyLm9wZW4gPiAqIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0I3NpZGViYXItY2xvc2UtYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1NpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5tYWluIHtcblx0ZmxleDogMTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNlcik7XG5cdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWFkZC1idG4tZGltcykgKyB2YXIoLS1tYWluLXNwYWNlcikpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcblx0LS1zdGF0dXMtc3BhY2VyOiAxMHB4O1xuXHRmbGV4OiAxO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbi5zdGF0dXMtcm93IHtcblx0ZmxleDogYXV0bztcblx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zdGF0dXMtY29sdW1uIHtcblx0ZmxleDogMTtcblx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XG5cdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcblx0bWluLWhlaWdodDogMjVzdmg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnRhc2stY2FyZCB7XG5cdC0tcHJpb3JpdHktd2lkdGg6IDEycHg7XG5cdC0tcHJpb3JpdHktY29sb3I6IGdyZXk7XG5cblx0cGFkZGluZzogNXB4IDVweCA1cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyA1cHgpO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHR2YXIoLS1wcmlvcml0eS1jb2xvcikgdmFyKC0tcHJpb3JpdHktd2lkdGgpLFxuXHRcdHRyYW5zcGFyZW50IHZhcigtLXByaW9yaXR5LXdpZHRoKVxuXHQpO1xuXG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiByZ2IoMjIyLCAxOSwgMCk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cIm1lZGl1bVwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IGdvbGQ7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHNreWJsdWU7XG59XG5cbiNkb25lLWNvbHVtbiAudGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XG59XG5cbi5zdWJ0ZXh0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZGlhbG9nIHtcblx0LS1tb2RhbC1zcGFjZXI6IDEycHg7XG5cblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbmRpYWxvZyA+ICoge1xuXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcblx0cGFkZGluZzogdmFyKC0tbW9kYWwtc3BhY2VyKTtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGlzcGxheS1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lZGl0LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi5lZGl0LW1vZGUtZGV0YWlscyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLnByb2plY3QtbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0RpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQSxvREFBb0Q7QUFDcEQsbUVBQW1FOztBQUVuRTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0Qjs7QUFFQSxvRUFBb0U7QUFDcEUsb0RBQW9EOztBQUVwRDtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7O0NBRXBCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDO0VBQ0Msc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtDQUM5QjtBQUNEOztBQUVBLG1EQUFtRDs7QUFFbkQ7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjs7Q0FFbkIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUEsb0RBQW9EOztBQUVwRCxvREFBb0Q7O0FBRXBEO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixRQUFRO0NBQ1IsY0FBYztDQUNkLGdCQUFnQjs7Q0FFaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTOztDQUVULHVCQUF1Qjs7Q0FFdkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7O0NBRWIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTs7Q0FFVix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxVQUFVOztDQUVWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHFCQUFxQjs7Q0FFckIsa0NBQWtDO0NBQ2xDLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYzs7RUFFZCxnQkFBZ0I7Q0FDakI7O0NBRUE7O0VBRUMsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUEscURBQXFEOztBQUVyRCxpREFBaUQ7O0FBRWpEO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0IsOERBQThEOztDQUU5RCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixPQUFPOztDQUVQLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUEsMkRBQTJEOztBQUUzRDtDQUNDLE9BQU87Q0FDUCw2QkFBNkI7Q0FDN0IsMkJBQTJCO0NBQzNCLGlCQUFpQjs7Q0FFakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixzQkFBc0I7O0NBRXRCLHNEQUFzRDs7Q0FFdEQ7Ozs7RUFJQzs7Q0FFRCx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQSw0REFBNEQ7QUFDNUQsa0RBQWtEOztBQUVsRCxtREFBbUQ7O0FBRW5EO0NBQ0MsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsdUJBQXVCO0NBQ3ZCLFlBQVk7QUFDYjtBQUNBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtDQUNDLG9CQUFvQjs7Q0FFcEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7O0NBRWIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUEsb0RBQW9EOztBQUVwRCxxREFBcURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC8qIGNvbG9yOiB1bnNldDsgKi9cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtY29udGVudCB7XFxuXFx0LS1tYWluLXNwYWNlcjogMjBweDtcXG5cXHQtLWFkZC1idG4tZGltczogNTBweDtcXG5cXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5hcHAtY29udGVudCB7XFxuXFx0XFx0d2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gNDBweCksIDE0MDBweCk7XFxuXFx0XFx0bWluLWhlaWdodDogODB2aDtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oZWFkZXIge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0cGFkZGluZzogNXB4IDhweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdCNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDEwMHN2aDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2lkZWJhci5vcGVuIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnNpZGViYXIgPiAqIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuXFxuLnNpZGViYXIub3BlbiA+ICoge1xcblxcdG9wYWNpdHk6IDE7XFxuXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5ib3R0b20tYnV0dG9ucyB7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMnB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5oaWRkZW4tYnRuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuLWJ0bi5vcGVuIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnJldmVhbC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJldmVhbC1idG4ge1xcblxcdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNhZGQtcmV2ZWFsLWJ0bi5vcGVuIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5zaWRlYmFyLFxcblxcdC5zaWRlYmFyLm9wZW4ge1xcblxcdFxcdHBvc2l0aW9uOiBpbmhlcml0O1xcblxcdFxcdHdpZHRoOiB1bnNldDtcXG5cXHRcXHRoZWlnaHQ6IHVuc2V0O1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0XFx0ei1pbmRleDogdW5zZXQ7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnNpZGViYXIgPiAqLFxcblxcdC5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1jbG9zZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2VyKTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1hZGQtYnRuLWRpbXMpICsgdmFyKC0tbWFpbi1zcGFjZXIpKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbiNzdGF0dXNlcy1jb250YWluZXIge1xcblxcdC0tc3RhdHVzLXNwYWNlcjogMTBweDtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4uc3RhdHVzLXJvdyB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnN0YXR1cy1jb2x1bW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XFxuXFx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xcblxcdG1pbi1oZWlnaHQ6IDI1c3ZoO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuXFx0LS1wcmlvcml0eS13aWR0aDogMTJweDtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiBncmV5O1xcblxcblxcdHBhZGRpbmc6IDVweCA1cHggNXB4IGNhbGModmFyKC0tcHJpb3JpdHktd2lkdGgpICsgNXB4KTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0dmFyKC0tcHJpb3JpdHktY29sb3IpIHZhcigtLXByaW9yaXR5LXdpZHRoKSxcXG5cXHRcXHR0cmFuc3BhcmVudCB2YXIoLS1wcmlvcml0eS13aWR0aClcXG5cXHQpO1xcblxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHJnYigyMjIsIDE5LCAwKTtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogZ29sZDtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuI2RvbmUtY29sdW1uIC50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VidGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZGlhbG9nIHtcXG5cXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5kaWFsb2cgPiAqIHtcXG5cXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uZWRpdC1tb2RlLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5wcm9qZWN0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IFRhc2tzID0gKCgpID0+IHtcblx0bGV0IF90YXNrTGlzdCA9IG5ldyBTZXQoKTtcblx0bGV0IF9pZENvdW50ZXIgPSAxO1xuXG5cdGNvbnN0IF9jb2x1bW5OYW1lcyA9IFtcImJhY2tsb2dcIiwgXCJ0by1kb1wiLCBcImluLXByb2dyZXNzXCIsIFwiZG9uZVwiXTtcblxuXHRsZXQgX3Byb3BlcnR5TmFtZXMgPSBbXG5cdFx0XCJ0aXRsZVwiLFxuXHRcdFwic3RhdHVzXCIsXG5cdFx0XCJwcm9qZWN0XCIsXG5cdFx0XCJwcmlvcml0eVwiLFxuXHRcdFwibm90ZXNcIixcblx0XHRcImR1ZVwiLFxuXHRcdFwidGFnc1wiLFxuXHRdO1xuXG5cdGxldCBfcHJpb3JpdGllcyA9IFtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl07XG5cblx0ZnVuY3Rpb24gX2RhdGVTb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRyZXR1cm4gb3V0Z29pbmdUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRlQSA9ICthLmdldFByb3BlcnRpZXMoKS5kdWUuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XG5cdFx0XHRjb25zdCBkYXRlQiA9ICtiLmdldFByb3BlcnRpZXMoKS5kdWUuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XG5cdFx0XHRyZXR1cm4gIWRhdGVBID8gMSA6IGRhdGVCIC0gZGF0ZUE7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBfY29sdW1uU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIF9jb2x1bW5OYW1lcy5tYXAoKGNvbHVtbk5hbWUpID0+IHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdGNvbHVtbk5hbWUsXG5cdFx0XHRcdF9kYXRlU29ydChcblx0XHRcdFx0XHRvdXRnb2luZ1Rhc2tzLmZpbHRlcihcblx0XHRcdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKS5zdGF0dXMgPT09IGNvbHVtbk5hbWVcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRdO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gX3Rhc2tGYWN0b3J5KCkge1xuXHRcdGNvbnN0IF90YXNrID0ge307XG5cdFx0Y29uc3Qgc2V0UHJvcGVydHkgPSAoa2V5LCB2YWx1ZSkgPT4gKF90YXNrW2tleV0gPSB2YWx1ZSk7XG5cdFx0X3Byb3BlcnR5TmFtZXMuZm9yRWFjaCgocHJvcCkgPT4gc2V0UHJvcGVydHkocHJvcCwgXCJcIikpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRQcm9wZXJ0aWVzOiAoKSA9PiBfdGFzayxcblx0XHRcdHNldFByb3BlcnR5LFxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRUYXNrKGlucHV0VmFsdWVzQXJyYXkpIHtcblx0XHRjb25zdCBuZXdUYXNrID0gX3Rhc2tGYWN0b3J5KCk7XG5cdFx0bmV3VGFzay5zZXRQcm9wZXJ0eShcImlkXCIsIF9pZENvdW50ZXIrKyk7XG5cdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRuZXdUYXNrLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdH0pO1xuXHRcdF90YXNrTGlzdC5hZGQobmV3VGFzayk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVUYXNrcyguLi5yZW1vdmVJZHMpIHtcblx0XHRbLi4uX3Rhc2tMaXN0XS5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRpZiAocmVtb3ZlSWRzLmluY2x1ZGVzKHRhc2suZ2V0UHJvcGVydGllcygpLmlkKSkge1xuXHRcdFx0XHRfdGFza0xpc3QuZGVsZXRlKHRhc2spO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVGFzayh1cGRhdGVJZCwgaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdFsuLi5fdGFza0xpc3RdLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGlmICh1cGRhdGVJZCA9PT0gdGFzay5nZXRQcm9wZXJ0aWVzKCkuaWQpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRcdFx0dGFzay5zZXRQcm9wZXJ0eShwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuXHRcdF90YXNrTGlzdC5jbGVhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGFza3NCeShwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBbLi4uX3Rhc2tMaXN0XS5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpW3Byb3BdID09PSB2YWx1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRTb3J0ZWRUYXNrc0J5KHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIF9jb2x1bW5Tb3J0KFxuXHRcdFx0Wy4uLl90YXNrTGlzdF0uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKVtwcm9wXSA9PT0gdmFsdWUpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHN1YkFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfVEFTSywgYWRkVGFzayk7XG5cdGNvbnN0IHN1YlJlbW92ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ERUxFVEVfVEFTSywgcmVtb3ZlVGFza3MpO1xuXHRjb25zdCBzdWJVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuVVBEQVRFX1RBU0ssIHVwZGF0ZVRhc2spO1xuXHRjb25zdCBzdWJDbGVhclRhc2tzID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQ0xFQVJfQUxMLCBjbGVhclRhc2tzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldEFsbFRhc2tzOiAoKSA9PiBbLi4uX3Rhc2tMaXN0XSxcblx0XHRnZXRTb3J0ZWRUYXNrczogKCkgPT4gX2NvbHVtblNvcnQoWy4uLl90YXNrTGlzdF0pLFxuXHRcdGdldFRhc2tzQnksXG5cdFx0Z2V0U29ydGVkVGFza3NCeSxcblx0XHRnZXRDb2x1bW5OYW1lczogKCkgPT4gX2NvbHVtbk5hbWVzLFxuXHRcdGdldFByaW9yaXR5TmFtZXM6ICgpID0+IF9wcmlvcml0aWVzLFxuXHRcdGdldFByb3BlcnR5TmFtZXM6ICgpID0+IF9wcm9wZXJ0eU5hbWVzLFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gKCgpID0+IHtcblx0bGV0IF9wcm9qZWN0TGlzdCA9IG5ldyBTZXQoKTtcblxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSB7XG5cdFx0X3Byb2plY3RMaXN0LmFkZChuZXdQcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocmVtb3ZlTmFtZSkge1xuXHRcdGlmIChfcHJvamVjdExpc3QuaGFzKHJlbW92ZU5hbWUpKSB7XG5cdFx0XHQvLyBHZXQgdGFzay5pZCdzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHByb2plY3Rcblx0XHRcdGNvbnN0IHJlbW92ZUlkcyA9IFRhc2tzLmdldFRhc2tzQnkoXCJwcm9qZWN0XCIsIHJlbW92ZU5hbWUpLm1hcChcblx0XHRcdFx0KHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpLmlkXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIHRhc2tzIHdpdGggdGhvc2UgaWQncyBmcm9tIF90YXNrTGlzdFxuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRFTEVURV9UQVNLLCAuLi5yZW1vdmVJZHMpO1xuXG5cdFx0XHQvLyBSZW1vdmUgbmFtZSBmcm9tIHByb2plY3QgbGlzdFxuXHRcdFx0X3Byb2plY3RMaXN0LmRlbGV0ZShyZW1vdmVOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhclByb2plY3RzKCkge1xuXHRcdF9wcm9qZWN0TGlzdC5jbGVhcigpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9QUk9KRUNULCBhZGRQcm9qZWN0KTtcblx0Y29uc3Qgc3ViUmVtb3ZlUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRFTEVURV9QUk9KRUNULCByZW1vdmVQcm9qZWN0KTtcblx0Y29uc3Qgc3ViQ2xlYXJQcm9qZWN0cyA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkNMRUFSX0FMTCwgY2xlYXJQcm9qZWN0cyk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRQcm9qZWN0czogKCkgPT4gWy4uLl9wcm9qZWN0TGlzdF0uc29ydCgpLFxuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYWRkRGVmYXVsdHMoYXNrVXNlcikge1xuXHRjb25zdCB1c2VyQ29uZmlybWVkID0gYXNrVXNlclxuXHRcdD8gY29uZmlybShcblx0XHRcdFx0XCJEZWZhdWx0IE1vZGUgcmVwbGFjZXMgYWxsIHRhc2tzIGFuZCBwcm9qZWN0cyB3aXRoIGFuIGV4YW1wbGUgc2V0LiBcXG5UaGlzIHdpbGwgZXJhc2UgYW55dGhpbmcgeW91IGhhdmUgc2F2ZWQuXCJcblx0XHQgIClcblx0XHQ6IHRydWU7XG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkNMRUFSX0FMTCk7XG5cdFx0Y29uc3QgZGVmYXVsdFByb2plY3RzID0gW1wiaG9tZVwiLCBcImZpbmFuY2VzXCIsIFwibGVhcm5pbmdcIl07XG5cblx0XHRkZWZhdWx0UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9QUk9KRUNULCBwcm9qZWN0KTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IGRlZmF1bHRUYXNrcyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwicGF5IGJpbGxzXCIsXG5cdFx0XHRcdHN0YXR1czogXCJpbi1wcm9ncmVzc1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImZpbmFuY2VzXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcblx0XHRcdFx0bm90ZXM6IFwidGhlIHJlbnQgaXMgdG9vIGRhbW4gaGlnaFwiLFxuXHRcdFx0XHRkdWU6IFwiMjAyMy0xMS0wMVwiLFxuXHRcdFx0XHR0YWdzOiBcIlwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiZ3JvY2VyaWVzXCIsXG5cdFx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRcdG5vdGVzOiBcIlwiLFxuXHRcdFx0XHRkdWU6IFwiXCIsXG5cdFx0XHRcdHRhZ3M6IFwic3RvcmVcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcImZpbGUgdGF4ZXNcIixcblx0XHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdFx0bm90ZXM6IFwiXCIsXG5cdFx0XHRcdGR1ZTogXCJcIixcblx0XHRcdFx0dGFnczogXCJcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcInJlYWQgQ2hla2hvdlwiLFxuXHRcdFx0XHRzdGF0dXM6IFwiYmFja2xvZ1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImxlYXJuaW5nXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcImxvd1wiLFxuXHRcdFx0XHRub3RlczogXCJcIixcblx0XHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDVcIixcblx0XHRcdFx0dGFnczogXCJcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcInJlcGxhY2UgbGlnaHRidWxiXCIsXG5cdFx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRcdG5vdGVzOiBcImJhdGhyb29tIGxpZ2h0IGlzIGZsaWNrZXJpbmdcIixcblx0XHRcdFx0ZHVlOiBcIlwiLFxuXHRcdFx0XHR0YWdzOiBcInN0b3JlXCIsXG5cdFx0XHR9LFxuXHRcdF0ubWFwKChpdGVtKSA9PiBPYmplY3QuZW50cmllcyhpdGVtKSk7XG5cblx0XHRkZWZhdWx0VGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9UQVNLLCBpdGVtKTtcblx0XHR9KTtcblx0fVxufVxuXG5QdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfREVGQVVMVFMsIGFkZERlZmF1bHRzKTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERPTSBGYWN0b3JpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG5cdHJldHVybiB7IHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRmFjdG9yeShvYmopIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcblx0Y29uc3QgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuXG5cdGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSAhPT0gXCJkYXRhc2V0XCIpIHtcblx0XHRcdGVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFNwZWNpYWwgZGlyZWN0aW9ucyBuZWVkZWQgdG8gc2V0IFwiZGF0YS1cIiBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKGNvbnN0IHByb3AgaW4gYXR0cmlidXRlc1trZXldKSB7XG5cdFx0XHRcdGVsLmRhdGFzZXRbcHJvcF0gPSBhdHRyaWJ1dGVzW2tleV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdC8vIEFsbG93cyBmb3IgY29uZGl0aW9uYWxseSBhZGRpbmcgY2hpbGRyZW4gdXBzdHJlYW0gYnlcblx0XHQvLyBzZXR0aW5nIFwiXCIgYXMgdGhlIGFsdGVybmF0aXZlIHRvIGVsRmFjdG9yeSgpXG5cdFx0aWYgKCEhY2hpbGQpIHtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE90aGVyIEhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYXNrSWQodGFyZ2V0KSB7XG5cdHJldHVybiArKHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJpZC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC50YXNrSWRcblx0XHQ6IGZpbmRUYXNrSWQodGFyZ2V0LnBhcmVudEVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9qZWN0TmFtZSh0YXJnZXQpIHtcblx0cmV0dXJuIHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJpZC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC5wcm9qZWN0RmlsdGVyXG5cdFx0OiBmaW5kUHJvamVjdE5hbWUodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZpcnN0VXBwZXIoc3RyaW5nKSB7XG5cdHJldHVybiAhIXN0cmluZ1xuXHRcdD8gc3RyaW5nXG5cdFx0XHRcdC5zcGxpdChcIi1cIilcblx0XHRcdFx0Lm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcblx0XHRcdFx0LmpvaW4oXCIgXCIpXG5cdFx0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlzb0RhdGUpIHtcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke2lzb0RhdGV9VDEyOjAwOjAwLTA0OjAwYCk7XG5cdGNvbnN0IGRheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5cdGNvbnN0IG1vbnRocyA9IFtcblx0XHRcIkphblwiLFxuXHRcdFwiRmViXCIsXG5cdFx0XCJNYXJcIixcblx0XHRcIkFwclwiLFxuXHRcdFwiTWF5XCIsXG5cdFx0XCJKdW5lXCIsXG5cdFx0XCJKdWx5XCIsXG5cdFx0XCJBdWdcIixcblx0XHRcIlNlcHRcIixcblx0XHRcIk9jdFwiLFxuXHRcdFwiTm92XCIsXG5cdFx0XCJEZWNcIixcblx0XTtcblxuXHRyZXR1cm4gYCR7ZGF5c1tkYXRlLmdldERheSgpXX0sICR7ZGF0ZS5nZXREYXRlKCl9ICR7XG5cdFx0bW9udGhzW2RhdGUuZ2V0TW9udGgoKV1cblx0fSAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtYXREYXRlLCBodG1sRmFjdG9yeSwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5kaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcblx0ZGlhbG9nLnRleHRDb250ZW50ID0gXCJcIjtcbn0pO1xuXG5mdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktbW9kZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgaWQ9XCJkaXNwbGF5LXRpdGxlXCI+PC9oMz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuIGRpc3BsYXktY2xvc2UtYnRuXCI+w5c8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0PHA+UHJvamVjdDogPHNwYW4gaWQ9XCJkaXNwbGF5LXByb2plY3RcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPlByaW9yaXR5OiA8c3BhbiBpZD1cImRpc3BsYXktcHJpb3JpdHlcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPkR1ZTogPHNwYW4gaWQ9XCJkaXNwbGF5LWR1ZVwiPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0PHA+U3RhdHVzOiA8c3BhbiBpZD1cImRpc3BsYXktc3RhdHVzXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0XHQ8cD5Ob3Rlczo8c3BhbiBpZD1cImRpc3BsYXktbm90ZXNcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPlRhZ3M6IDxzcGFuIGlkPVwiZGlzcGxheS10YWdzXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1idXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIiBkYXRhLXRhc2staWQ9XCJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVkaXQtYnRuXCI+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlLWJ0blwiPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkoc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIHNlbGVjdGVkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0VGFza3MuZ2V0UHJvcGVydHlOYW1lcygpLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRpc3BsYXktJHtwcm9wfWApO1xuXHRcdGxldCBvdXRwdXQgPSB0YXNrW3Byb3BdO1xuXG5cdFx0aWYgKHByb3AgPT09IFwiZHVlXCIgJiYgISFvdXRwdXQpIHtcblx0XHRcdG91dHB1dCA9IGZvcm1hdERhdGUob3V0cHV0KTtcblx0XHR9XG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IHByb3AgPT09IFwidGFnc1wiID8gb3V0cHV0IDogbWFrZUZpcnN0VXBwZXIob3V0cHV0KTtcblx0fSk7XG5cdGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmlkLWJ1YmJsZS1tYXJrZXJcIikuZGF0YXNldC50YXNrSWQgPSBzZWxlY3RlZElkO1xuXHRkaWFsb2dcblx0XHQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWNsb3NlLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9nLmNsb3NlKCkpO1xufVxuXG5mdW5jdGlvbiBidWlsZEVkaXRNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYDxmb3JtIGNsYXNzPVwiZWRpdC1tb2RlXCIgbWV0aG9kPVwiZGlhbG9nXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZWRpdC1tb2RlLWRldGFpbHNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwic3VibWl0LWluZm9cIiByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJvamVjdFwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJkdWVcIj5EdWU6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5TdGF0dXM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD1cInN0YXR1c1wiIGNsYXNzPVwic3VibWl0LWluZm9cIiByZXF1aXJlZD48L3NlbGVjdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibm90ZXNcIj5Ob3Rlczo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGNsYXNzPVwic3VibWl0LWluZm9cIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxwPkVudGVyIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hcy48L3A+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0YWdzXCI+VGFnczo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhZ3NcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIgZGF0YS10YXNrLWlkPVwiXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzYXZlLWJ0blwiPlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkRHJvcGRvd25zKCkge1xuXHRbXG5cdFx0W1wicHJvamVjdFwiLCBQcm9qZWN0cy5nZXRQcm9qZWN0cygpXSxcblx0XHRbXCJwcmlvcml0eVwiLCBUYXNrcy5nZXRQcmlvcml0eU5hbWVzKCldLFxuXHRcdFtcInN0YXR1c1wiLCBUYXNrcy5nZXRDb2x1bW5OYW1lcygpXSxcblx0XS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhaXJbMF0pO1xuXHRcdHBhaXJbMV0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IG9wdGlvbixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihvcHRpb24pLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm0oc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIHNlbGVjdGVkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0VGFza3MuZ2V0UHJvcGVydHlOYW1lcygpLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCk7XG5cblx0XHRzd2l0Y2ggKHByb3ApIHtcblx0XHRcdGNhc2UgXCJwcm9qZWN0XCI6XG5cdFx0XHRjYXNlIFwicHJpb3JpdHlcIjpcblx0XHRcdGNhc2UgXCJzdGF0dXNcIjpcblx0XHRcdFx0Wy4uLmVsZW1lbnQuY2hpbGRyZW5dLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PT0gdGFza1twcm9wXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInRpdGxlXCI6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSBtYWtlRmlyc3RVcHBlcih0YXNrW3Byb3BdKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJub3Rlc1wiOlxuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gbWFrZUZpcnN0VXBwZXIodGFza1twcm9wXSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gdGFza1twcm9wXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KTtcblx0ZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaWQtYnViYmxlLW1hcmtlclwiKS5kYXRhc2V0LnRhc2tJZCA9IHNlbGVjdGVkSWQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0PGZvcm0gY2xhc3M9XCJwcm9qZWN0LW1vZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cIm5ldy1wcm9qZWN0XCI+TmV3IFByb2plY3Q6PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctcHJvamVjdFwiIHJlcXVpcmVkLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJwcm9qZWN0LW1vZGUtYnV0dG9uc1wiPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInByb2plY3Qtc2F2ZS1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm9qZWN0LWNhbmNlbC1idG5cIj5cblx0XHRcdFx0XHRDYW5jZWxcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuY29uc3Qgc3ViRGlzcGxheUJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRElTUExBWV9NT0RFLCBidWlsZERpc3BsYXlNb2RlKTtcbmNvbnN0IHN1YkRpc3BsYXlQb3AgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ESVNQTEFZX01PREUsIHBvcHVsYXRlRGlzcGxheSk7XG5cbmNvbnN0IHN1YkVkaXRCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkVESVRfTU9ERSwgYnVpbGRFZGl0TW9kZSk7XG5jb25zdCBzdWJFZGl0RHJvcGRvd25zID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFLCBhZGREcm9wZG93bnMpO1xuY29uc3Qgc3ViRm9ybVBvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkVESVRfTU9ERV9QT1AsIHBvcHVsYXRlRm9ybSk7XG5cbmNvbnN0IHN1YlByb2plY3RCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLlBST0pFQ1RfTU9ERSwgYnVpbGRQcm9qZWN0TW9kZSk7XG4iLCIvKlxuUHViU3ViIG9yZ2FuaXphdGlvblxuXG5ldmVudCB0eXBlczogXG5cdC0gYWRkVGFza1xuXHQtIHVwZGF0ZVRhc2tcblx0LSByZW1vdmVUYXNrXG5cdC0gYWRkUHJvamVjdFxuXHQtIHJlbW92ZVByb2plY3Rcblxuc3Vic2NyaWJlcnMgKHRoaW5ncyB0aGF0IG5lZWQgdG8gZ2V0IGRvbmUpOlxuXHQtIG1ha2luZyByZWxldmFudCBjaGFuZ2VzIGluIGFwcENvbnRyb2xsZXJcblx0LSBwb3B1bGF0ZVN0b3JhZ2UgKG9uY2UgSlNPTiBjb21lcyBpbnRvIHBsYXkpXG5cdC0gdXBkYXRlU2NyZWVuXG5cblxuKGxvY2FsU3RvcmFnZSBub3RlOiBnb25uYSBuZWVkIHRvIHVzZSBNRE4ncyBzdG9yYWdlQXZhaWxhYmxlIGZuIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBzdWJzY3JpYmUgc3RvcmFnZSByZWxhdGVkIHN0dWZmIHRvIGV2ZW50cywgbWVhbmluZyB0aGF0IGV2ZXJ5dGhpbmcgbmVlZHMgdG8gc3RpbGwgd29yayBldmVuIGlmIHN0b3JhZ2UgaXNuJ3QgYXZhaWxhYmxlKVxuKi9cblxuZXhwb3J0IGNvbnN0IFB1YlN1YiA9ICgoKSA9PiB7XG5cdGNvbnN0IF9ldmVudHNMaXN0ID0ge307XG5cdC8vIHsga2V5OiBcInRyaWdnZXJFdmVudFwiLCB2YWx1ZTogWyBhcnJheSBvZiBmdW5jdGlvbnMgXSB9XG5cblx0ZnVuY3Rpb24gc3Vic2NyaWJlKHRyaWdnZXJFdmVudCwgc3Vic2NyaWJlcikge1xuXHRcdGlmICghX2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XSkge1xuXHRcdFx0X2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XSA9IFtzdWJzY3JpYmVyXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XS5wdXNoKHN1YnNjcmliZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dW5zdWJzY3JpYmU6ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgZnVuY3Rpb25MaXN0ID0gX2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcblx0XHRcdFx0Y29uc3QgaSA9IGZ1bmN0aW9uTGlzdC5pbmRleE9mKHN1YnNjcmliZXIpO1xuXHRcdFx0XHRpZiAoaSA+IC0xKSB7XG5cdFx0XHRcdFx0ZnVuY3Rpb25MaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHVibGlzaCh0cmlnZ2VyRXZlbnQsIC4uLmFyZ3MpIHtcblx0XHRjb25zdCBmdW5jdGlvbkxpc3QgPSBfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdO1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGZ1bmN0aW9uTGlzdCkpIHtcblx0XHRcdGZ1bmN0aW9uTGlzdC5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PiB7XG5cdFx0XHRcdHN1YnNjcmliZXIuYXBwbHkobnVsbCwgYXJncyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4geyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBFVkVOVFMgPSB7XG5cdERJU1BMQVlfTU9ERTogXCJkaXNwbGF5TW9kZVwiLFxuXHRFRElUX01PREU6IFwiZWRpdE1vZGVcIixcblx0RURJVF9NT0RFX1BPUDogXCJlZGl0TW9kZVBvcFwiLFxuXHRQUk9KRUNUX01PREU6IFwicHJvamVjdE1vZGVcIixcblx0REVMRVRFX1RBU0s6IFwiZGVsZXRlVGFza1wiLFxuXHRBRERfVEFTSzogXCJhZGRUYXNrXCIsXG5cdFVQREFURV9UQVNLOiBcInVwZGF0ZVRhc2tcIixcblx0Q0FSRF9DTElDSzogXCJjYXJkQ2xpY2tcIixcblx0SU5JVDogXCJpbml0XCIsXG5cdEFERF9QUk9KRUNUOiBcImFkZFByb2plY3RcIixcblx0REVMRVRFX1BST0pFQ1Q6IFwiZGVsZXRlUHJvamVjdFwiLFxuXHRBRERfREVGQVVMVFM6IFwiYWRkRGVmYXVsdHNcIixcblx0Q0xFQVJfQUxMOiBcImNsZWFyQWxsXCIsXG59O1xuIiwiaW1wb3J0IHsgVGFza3MsIFByb2plY3RzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL21vZGFsc1wiO1xuaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnksIG1ha2VGaXJzdFVwcGVyLCBmaW5kUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHNpZGViYXJPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLW9wZW4tYnRuXCIpO1xuY29uc3Qgc2lkZWJhckNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNsb3NlLWJ0blwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5zaWRlYmFyT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKSk7XG5zaWRlYmFyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIikpO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpc3BsYXllZFwiKTtcbmNvbnN0IHN0YXR1c2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNlcy1jb250YWluZXJcIik7XG5cbmNvbnN0IEFMTF9UQVNLUyA9IFwiYWxsLXRhc2tzXCI7XG5jb25zdCBOT19QUk9KRUNUID0gXCJ1bmNhdGVnb3JpemVkXCI7XG5sZXQgY3VycmVudFByb2plY3QgPSBBTExfVEFTS1M7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpIHtcblx0aWYgKGN1cnJlbnRQcm9qZWN0ID09PSBBTExfVEFTS1MpIHtcblx0XHRwcm9qZWN0RGlzcGxheWVkLnRleHRDb250ZW50ID0gbWFrZUZpcnN0VXBwZXIoQUxMX1RBU0tTKTtcblx0XHR1cGRhdGVUYXNrQ29sdW1ucyhUYXNrcy5nZXRTb3J0ZWRUYXNrcygpKTtcblx0XHR1cGRhdGVTaWRlYmFyKCk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKGN1cnJlbnRQcm9qZWN0KTtcblx0XHR1cGRhdGVUYXNrQ29sdW1ucyhcblx0XHRcdFRhc2tzLmdldFNvcnRlZFRhc2tzQnkoXG5cdFx0XHRcdFwicHJvamVjdFwiLFxuXHRcdFx0XHRjdXJyZW50UHJvamVjdCA9PT0gTk9fUFJPSkVDVCA/IFwiXCIgOiBjdXJyZW50UHJvamVjdFxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dXBkYXRlU2lkZWJhcigpO1xuXHR9XG5cdGRpYWxvZy5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ29sdW1ucyhkaXNwbGF5VGFza3MpIHtcblx0Ly8gUmVzZXQgdGhlIGNvbHVtbnNcblx0Wy4uLnN0YXR1c2VzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChyb3cpID0+IChyb3cudGV4dENvbnRlbnQgPSBcIlwiKSk7XG5cblx0Ly8gQnVpbGQgY29sdW1uIGNvbnRlbnRcblx0ZGlzcGxheVRhc2tzLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBjb2x1bW5OYW1lID0gY29sdW1uWzBdO1xuXHRcdGNvbnN0IHN0YXR1c05hbWUgPSBtYWtlRmlyc3RVcHBlcihjb2x1bW5OYW1lKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbnRlbnQgPSBlbEZhY3RvcnkoXG5cdFx0XHRcInNlY3Rpb25cIixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBcInN0YXR1cy1jb2x1bW5cIixcblx0XHRcdFx0aWQ6IGAke2NvbHVtbk5hbWV9LWNvbHVtbmAsXG5cdFx0XHR9LFxuXHRcdFx0W1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJoMlwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInN0YXR1cy1uYW1lXCIsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHN0YXR1c05hbWUsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XVxuXHRcdCk7XG5cblx0XHQvLyBCdWlsZCB0YXNrIGNhcmRzXG5cdFx0Y29sdW1uWzFdLmZvckVhY2goKHRhc2tDb250YWluZXIpID0+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSB0YXNrQ29udGFpbmVyLmdldFByb3BlcnRpZXMoKTtcblxuXHRcdFx0Y29sdW1uQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGFzay1jYXJkIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRcdFx0cHJpb3JpdHk6IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0dGFza0lkOiB0YXNrLmlkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ0aXRsZVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay50aXRsZSksXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJzdWJ0ZXh0XCIgfSwgW1xuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHRhc2sucHJvamVjdCksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJkdWVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogdGFzay5kdWUsXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGNvcnJlY3Qgcm93XG5cdFx0aWYgKGluZGV4IDwgMikge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KGNvbHVtbkNvbnRlbnQpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGF0dXNlc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIE1ha2UgZWFjaCB0YXNrIGNsaWNrYWJsZVxuXHRjb25zdCBUYXNrQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKTtcblx0VGFza0NhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkNBUkRfQ0xJQ0ssIGUpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2lkZWJhcigpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIikucmVtb3ZlKCk7XG5cdGNvbnN0IHJlcGxhY2VtZW50Q29udGFpbmVyID0gZWxGYWN0b3J5KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc0xpc3Q6IFwicHJvamVjdHMtY29udGFpbmVyXCIgfSxcblx0XHRbQUxMX1RBU0tTLCBOT19QUk9KRUNULCAuLi5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpXS5tYXAoKHByb2plY3QpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1uYW1lIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRkYXRhc2V0OiB7IHByb2plY3RGaWx0ZXI6IHByb2plY3QgfSxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHByb2plY3QpLFxuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZmlsdGVyLWJ0blwiLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFtBTExfVEFTS1MsIE5PX1BST0pFQ1RdLmluY2x1ZGVzKHByb2plY3QpXG5cdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0XHRcdDogZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBcIkRcIixcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1kZWxldGUtYnRuXCIsXG5cdFx0XHRcdFx0XHQgIH0pLFxuXHRcdFx0XHRdXG5cdFx0XHQpO1xuXHRcdH0pXG5cdCk7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWJ1dHRvbnNcIilcblx0XHQuYmVmb3JlKGh0bWxGYWN0b3J5KHJlcGxhY2VtZW50Q29udGFpbmVyKSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1maWx0ZXItYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsdGVyUHJvamVjdFZpZXcpO1xuXHR9KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRlbGV0ZS1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0RGVsZXRlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3REZWxldGUoZSkge1xuXHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUoZS50YXJnZXQpO1xuXG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHNlbGVjdGVkUHJvamVjdFxuXHRcdCl9XCIgYW5kIGFsbCBpdHMgdGFza3M/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuYFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRFTEVURV9QUk9KRUNULCBzZWxlY3RlZFByb2plY3QpO1xuXHRcdGN1cnJlbnRQcm9qZWN0ID1cblx0XHRcdHNlbGVjdGVkUHJvamVjdCA9PT0gY3VycmVudFByb2plY3QgPyBBTExfVEFTS1MgOiBjdXJyZW50UHJvamVjdDtcblx0XHR1cGRhdGVTY3JlZW4oKTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJQcm9qZWN0VmlldyhlKSB7XG5cdGN1cnJlbnRQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKGUudGFyZ2V0KTtcblx0dXBkYXRlU2NyZWVuKCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG59XG5cbmNvbnN0IHN1YkluaXQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5JTklULCB1cGRhdGVTY3JlZW4pO1xuXG5jb25zdCBzdWJEZWxldGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1RBU0ssIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJBZGRUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX1RBU0ssIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuVVBEQVRFX1RBU0ssIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfUFJPSkVDVCwgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViQ2xlYXJTY3JlZW4gPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIHVwZGF0ZVNjcmVlbik7XG4iLCJpbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgUHJvamVjdHMsIFRhc2tzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBmcm9tIE1ETiB0byB0ZXN0IGlzIHN0b3JhZ2UgaXMgYXZhaWxhYmxlIG9uIG9sZGVyIGJyb3dzZXJzLlxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG5cdGxldCBzdG9yYWdlO1xuXHR0cnkge1xuXHRcdHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG5cdFx0Y29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuXHRcdHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcblx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuXHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuXHRcdFx0KGUuY29kZSA9PT0gMjIgfHxcblx0XHRcdFx0Ly8gRmlyZWZveFxuXHRcdFx0XHRlLmNvZGUgPT09IDEwMTQgfHxcblx0XHRcdFx0Ly8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcblx0XHRcdFx0ZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG5cdFx0XHRcdC8vIEZpcmVmb3hcblx0XHRcdFx0ZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG5cdFx0XHQvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuXHRcdFx0c3RvcmFnZSAmJlxuXHRcdFx0c3RvcmFnZS5sZW5ndGggIT09IDBcblx0XHQpO1xuXHR9XG59XG5cbmxldCBzdG9yYWdlVHlwZTtcbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG5cdGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlXCIpO1xuXHRzdG9yYWdlVHlwZSA9IGxvY2FsU3RvcmFnZTtcbn0gZWxzZSBpZiAoc3RvcmFnZUF2YWlsYWJsZShcInNlc3Npb25TdG9yYWdlXCIpKSB7XG5cdGNvbnNvbGUubG9nKFwic2Vzc2lvblN0b3JhZ2VcIik7XG5cdHN0b3JhZ2VUeXBlID0gc2Vzc2lvblN0b3JhZ2U7XG59IGVsc2Uge1xuXHRjb25zb2xlLmxvZyhcIk5vIHN0b3JhZ2VcIik7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfREVGQVVMVFMsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTdG9yYWdlKCkge1xuXHRpZiAoISFzdG9yYWdlVHlwZS5sZW5ndGgpIHtcblx0XHRnZXRTdG9yYWdlKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0U3RvcmFnZSgpIHtcblx0Y29uc3QgYWxsVGFza3MgPSBUYXNrcy5nZXRBbGxUYXNrcygpLm1hcCgodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKCkpO1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IFByb2plY3RzLmdldFByb2plY3RzKCk7XG5cblx0Y29uc29sZS5sb2coeyBhbGxUYXNrcywgYWxsUHJvamVjdHMgfSk7IC8vZGV2TW9kZVxuXG5cdHN0b3JhZ2VUeXBlLnNldEl0ZW0oXCJhbGxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuXHRzdG9yYWdlVHlwZS5zZXRJdGVtKFwiYWxsVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoWy4uLmFsbFRhc2tzXSkpO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yYWdlKCkge1xuXHRjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcblx0Y29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKHN0b3JhZ2VUeXBlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSkubWFwKChpdGVtKSA9PlxuXHRcdE9iamVjdC5lbnRyaWVzKGl0ZW0pXG5cdCk7XG5cblx0Y29uc29sZS5sb2coc3RvcmVkUHJvamVjdHMpOyAvLyBkZXZNb2RlXG5cdGNvbnNvbGUubG9nKHN0b3JlZFRhc2tzKTsgLy8gZGV2TW9kZVxuXG5cdHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuQUREX1BST0pFQ1QsIHByb2plY3QpO1xuXHR9KTtcblxuXHRzdG9yZWRUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9UQVNLLCBpdGVtKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHtcblx0c3RvcmFnZVR5cGUuY2xlYXIoKTtcblxuXHRjb25zb2xlLmxvZyhzdG9yYWdlVHlwZSk7IC8vIGRldk1vZGVcbn1cblxuY29uc3Qgc3ViU2V0QWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9UQVNLLCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldERlbGV0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ERUxFVEVfVEFTSywgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXRVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuVVBEQVRFX1RBU0ssIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0QWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9QUk9KRUNULCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldERlbGV0ZVByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ERUxFVEVfUFJPSkVDVCwgc2V0U3RvcmFnZSk7XG5cbmNvbnN0IHN1YkNoZWNrSW5pdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLklOSVQsIGNoZWNrU3RvcmFnZSk7XG5cbmNvbnN0IHN1YkNsZWFyU3RvcmFnZSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkNMRUFSX0FMTCwgY2xlYXJTdG9yYWdlKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFB1YlN1YiwgRVZFTlRTIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBmaW5kVGFza0lkLCBtYWtlRmlyc3RVcHBlciB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL21vZGFsc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vd2ViLXN0b3JhZ2VcIjtcbmltcG9ydCBcIi4vc2NyZWVuQ29udHJvbGxlclwiO1xuXG5jb25zdCBCb3R0b21CdG5zID0gKCgpID0+IHtcblx0Y29uc3QgYWRkUmV2ZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcmV2ZWFsLWJ0blwiKTtcblx0Y29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuXCIpO1xuXHRjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cblx0Y29uc3Qgc3RvcmFnZVJldmVhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmFnZS1yZXZlYWwtYnRuXCIpO1xuXHRjb25zdCBkZWZhdWx0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdHMtYnRuXCIpO1xuXHRjb25zdCBjbGVhclN0b3JhZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyLXN0b3JhZ2UtYnRuXCIpO1xuXG5cdGFkZFJldmVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGFkZFJldmVhbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRhZGRUYXNrQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cblx0XHRoaWRlU3RvcmFnZUJ0bnMoKTtcblx0fSk7XG5cblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RNb2RlKTtcblxuXHRzdG9yYWdlUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0c3RvcmFnZVJldmVhbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRkZWZhdWx0c0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRjbGVhclN0b3JhZ2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cblx0XHRoaWRlQWRkQnRucygpO1xuXHR9KTtcblxuXHRkZWZhdWx0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfREVGQVVMVFMsIHRydWUpO1xuXHR9KTtcblx0Y2xlYXJTdG9yYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0XHRcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzIEFORCBwcm9qZWN0cz8gXFxuVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5cIlxuXHRcdCk7XG5cblx0XHRpZiAodXNlckNvbmZpcm1lZCkge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkNMRUFSX0FMTCk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBoaWRlQWRkQnRucygpIHtcblx0XHRhZGRSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0YWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkRGlzcGxheSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRJU1BMQVlfTU9ERSwgaGlkZUFkZEJ0bnMpO1xuXHRjb25zdCBzdWJBZGRFZGl0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFLCBoaWRlQWRkQnRucyk7XG5cdGNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5QUk9KRUNUX01PREUsIGhpZGVBZGRCdG5zKTtcblxuXHRmdW5jdGlvbiBoaWRlU3RvcmFnZUJ0bnMoKSB7XG5cdFx0c3RvcmFnZVJldmVhbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRkZWZhdWx0c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRjbGVhclN0b3JhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdH1cblxuXHRjb25zdCBzdWJTdG9yRGVmYXVsdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfREVGQVVMVFMsIGhpZGVTdG9yYWdlQnRucyk7XG5cdGNvbnN0IHN1YlN0b3JDbGVhckFsbCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkNMRUFSX0FMTCwgaGlkZVN0b3JhZ2VCdG5zKTtcblx0Y29uc3Qgc3ViU3RvckRpc3BsYXkgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ESVNQTEFZX01PREUsIGhpZGVTdG9yYWdlQnRucyk7XG5cblx0cmV0dXJuIHsgYWRkVGFza0J0biB9O1xufSkoKTtcblxuZnVuY3Rpb24gb3BlbkRpc3BsYXlNb2RlKGUpIHtcblx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRJU1BMQVlfTU9ERSwgZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kZSk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0RlbGV0ZSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0TW9kZShlKSB7XG5cdGlmIChlLnRhcmdldCAhPT0gQm90dG9tQnRucy5hZGRUYXNrQnRuKSB7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kZSk7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1idG5cIilcblx0XHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0RlbGV0ZSk7XG5cdH1cblxuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuRURJVF9NT0RFKTtcblxuXHRpZiAoZS50YXJnZXQuaWQgPT09IFwiZWRpdC1idG5cIikge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5FRElUX01PREVfUE9QLCBmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG5cdH1cblxuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGUoKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5QUk9KRUNUX01PREUpO1xuXG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NhbmNlbChlKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cblx0aWYgKGZpbmRUYXNrSWQoZS50YXJnZXQpKSB7XG5cdFx0b3BlbkRpc3BsYXlNb2RlKGUpO1xuXHR9IGVsc2Uge1xuXHRcdGRpYWxvZy5jbG9zZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDYW5jZWwoKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcblxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0RlbGV0ZShlKSB7XG5cdGNvbnN0IHNlbGVjdGVkSWQgPSBmaW5kVGFza0lkKGUudGFyZ2V0KTtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBzZWxlY3RlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHRhc2sudGl0bGVcblx0XHQpfVwiIHRhc2s/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuYFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRFTEVURV9UQVNLLCBzZWxlY3RlZElkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNBcnJheSgpIHtcblx0Y29uc3Qgc3VibWl0dGVkSW5mbyA9IFtdO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Ym1pdC1pbmZvXCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0bGV0IHN1Ym1pdFZhbHVlID0ge1xuXHRcdFx0aW5wdXQ6IGVsLnZhbHVlLFxuXHRcdFx0c2VsZWN0OiBbLi4uZWwuY2hpbGRyZW5dLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQgPT09IHRydWUpWzBdXG5cdFx0XHRcdD8udmFsdWUsXG5cdFx0XHR0ZXh0YXJlYTogZWwudGV4dENvbnRlbnQsXG5cdFx0fVtlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCldO1xuXHRcdHN1Ym1pdHRlZEluZm8ucHVzaChbZWwuaWQsIHN1Ym1pdFZhbHVlXSk7XG5cdH0pO1xuXHRyZXR1cm4gc3VibWl0dGVkSW5mbztcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza1N1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3Qgc3VibWl0SWQgPSBmaW5kVGFza0lkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idG5cIikpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdGBSZWFkeSB0byBzdWJtaXQgJHtzdWJtaXRJZCA9PT0gMCA/IFwiYSBuZXcgdGFza1wiIDogXCJ5b3VyIGNoYW5nZXNcIn0/YFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0Y29uc3QgdmFsdWVzQXJyYXkgPSBnZXRWYWx1ZXNBcnJheSgpO1xuXHRcdGlmIChzdWJtaXRJZCA9PT0gMCkge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9UQVNLLCB2YWx1ZXNBcnJheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5VUERBVEVfVEFTSywgc3VibWl0SWQsIHZhbHVlc0FycmF5KTtcblx0XHR9XG5cdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFN1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpLnZhbHVlO1xuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuQUREX1BST0pFQ1QsIG5ld1Byb2plY3ROYW1lKTtcbn1cblxuY29uc3Qgc3ViQ2FyZENsaWNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQ0FSRF9DTElDSywgb3BlbkRpc3BsYXlNb2RlKTtcblxuUHViU3ViLnB1Ymxpc2goRVZFTlRTLklOSVQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9