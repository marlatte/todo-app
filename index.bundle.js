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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t/* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: red;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n.flex-container {\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.app-content {\n\t--main-spacer: 20px;\n\t--add-btn-dims: 50px;\n\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #fff;\n}\n\n.add-container {\n\tposition: fixed;\n\tz-index: 1;\n\tbottom: calc(var(--main-spacer) + 48px);\n\tleft: 10px;\n\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\tgap: 10px;\n}\n\n#add-btn {\n\theight: var(--add-btn-dims);\n\twidth: var(--add-btn-dims);\n\tdisplay: grid;\n\tplace-content: center;\n\n\tborder-radius: var(--add-btn-dims);\n\tborder: 2px solid white;\n\tbackground-color: black;\n\tcolor: white;\n\tfont-size: 40px;\n}\n\n#add-btn.open {\n\ttransform: rotate(45deg);\n}\n\n#add-btn ~ * {\n\tdisplay: none;\n}\n\n#add-btn.open ~ * {\n\tdisplay: block;\n}\n\n@media (min-width: 700px) {\n\t.app-content {\n\t\twidth: min(calc(100vw - 40px), 1400px);\n\t\tmin-height: 80vh;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tgrid-template-rows: 60px auto;\n\t}\n\t.add-container {\n\t\tposition: absolute;\n\t\tbottom: 10px;\n\t}\n}\n\n/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tborder-bottom: 1px solid black;\n}\n\nheader h1 {\n\tmargin: 10px;\n\tfont-style: italic;\n}\n\n#sidebar-open-btn {\n\tmargin: 10px;\n\tpadding: 5px 8px;\n\tfont-size: 20px;\n}\n\n@media (min-width: 700px) {\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Sidebar     --------------- */\n\n.sidebar {\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 0;\n\theight: 100svh;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\n\tbackground-color: wheat;\n\n\ttransition: all 1s;\n}\n\n.sidebar.open {\n\twidth: 100vw;\n\tpadding: 20px;\n\n\ttransition: all 0.5s;\n}\n\n.sidebar > * {\n\topacity: 0;\n\n\ttransition: opacity 0.2s;\n}\n\n.sidebar.open > * {\n\topacity: 1;\n\n\ttransition: opacity 1s;\n}\n\n.close-btn {\n\talign-self: flex-end;\n\tpadding: 10px;\n}\n\n.projects-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.project-name {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n@media (min-width: 700px) {\n\t.sidebar,\n\t.sidebar.open {\n\t\tposition: inherit;\n\t\twidth: unset;\n\t\theight: unset;\n\t\tpadding: 20px;\n\t\tz-index: unset;\n\n\t\ttransition: none;\n\t}\n\n\t.sidebar > *,\n\t.sidebar.open > * {\n\t\topacity: 1;\n\t}\n\n\t#sidebar-close-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Sidebar     --------------- */\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tposition: relative;\n\tpadding: var(--main-spacer);\n\tpadding-bottom: calc(var(--add-btn-dims) + var(--main-spacer));\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--main-spacer);\n}\n\n#statuses-container {\n\t--status-spacer: 10px;\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n.status-row {\n\tflex: auto;\n\twidth: min(480px, 100%);\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n/* ---------------     Status columns     --------------- */\n\n.status-column {\n\tflex: 1;\n\tpadding: var(--status-spacer);\n\tmin-width: min(230px, 100%);\n\tmin-height: 25svh;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--status-spacer);\n\tborder: 1px solid black;\n\tborder-radius: 6px;\n}\n\n.task-card {\n\t--priority-width: 12px;\n\t--priority-color: grey;\n\n\tpadding: 5px 5px 5px calc(var(--priority-width) + 5px);\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--priority-color) var(--priority-width),\n\t\ttransparent var(--priority-width)\n\t);\n\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n}\n\n.task-card[data-priority=\"high\"] {\n\t--priority-color: rgb(222, 19, 0);\n}\n\n.task-card[data-priority=\"medium\"] {\n\t--priority-color: gold;\n}\n\n.task-card[data-priority=\"low\"] {\n\t--priority-color: skyblue;\n}\n\n#done-column .task-card {\n\t--priority-color: green;\n}\n\n.subtext {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n/* ---------------     /Status columns     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: black;\n\tcolor: white;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     Dialog     --------------- */\n\ndialog {\n\t--modal-spacer: 12px;\n\n\tmargin: auto;\n\tborder: none;\n}\n\ndialog > * {\n\twidth: min(88vw, 500px);\n\tpadding: var(--modal-spacer);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\n.display-mode {\n\tdisplay: flex;\n\n\tbackground-color: wheat;\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: cadetblue;\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n/* ---------------     /Dialog     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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
	let _taskList = [];
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
			const dateA = a.getProperty("due").split("-").join("");
			const dateB = b.getProperty("due").split("-").join("");
			return !dateA ? 1 : dateA - dateB;
		});
	}

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
		_taskList.push(newTask);
	}

	function removeTasks(...removeIds) {
		_taskList.forEach((task, index) => {
			if (removeIds.includes(task.getProperty("id"))) {
				_taskList.splice(index, 1);
			}
		});
	}

	function updateTask(updateId, inputValuesArray) {
		_taskList.forEach((task, index) => {
			if (updateId === task.getProperty("id")) {
				inputValuesArray.forEach((pair) => {
					_taskList[index].setProperty(pair[0], pair[1]);
				});
			}
		});
	}

	function getTasksBy(prop, value) {
		return _taskList.filter((task) => task.getProperty(prop) === value);
	}

	function getSortedTasksBy(prop, value) {
		return _columnSort(
			_taskList.filter((task) => task.getProperty(prop) === value)
		);
	}

	const subAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, addTask);
	const subRemoveTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, removeTasks);
	const subUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.UPDATE_TASK, updateTask);

	return {
		getAllTasks: () => _columnSort(_taskList),
		getTasksBy,
		getSortedTasksBy,
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
			const removeIds = Tasks.getTasksBy("project", removeName).map(
				(task) => task.getProperty("id")
			);

			// Remove all tasks with those id's from _taskList
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, ...removeIds);

			// Remove name from project list
			_projectList.delete(removeName);
		}
	}

	const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, addProject);
	const subRemoveProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_PROJECT,
		removeProject
	);

	return {
		getProjects: () => [..._projectList].sort(),
	};
})();

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
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, item);
});


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
		console.log(_eventsList); // devMode
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
sidebarCloseBtn.addEventListener("click", () =>
	sidebar.classList.remove("open")
);

const projectDisplayed = document.getElementById("project-displayed");
const statusesContainer = document.getElementById("statuses-container");

const ALL_TASKS = "all-tasks";
const NO_PROJECT = "uncategorized";
let currentProject = ALL_TASKS;

function updateScreen() {
	if (currentProject === ALL_TASKS) {
		projectDisplayed.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(ALL_TASKS);
		updateTaskColumns(_app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getAllTasks());
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
		column[1].forEach((task) => {
			const [title, project, due] = [
				task.getProperty("title"),
				task.getProperty("project"),
				task.getProperty("due"),
			];
			columnContent.children.push(
				(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
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
						(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", {
							classList: "title",
							textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(title),
						}),
						(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", { classList: "subtext" }, [
							(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", {
								classList: "project",
								textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(project),
							}),
							(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", {
								classList: "due",
								textContent: due,
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

	sidebar.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(replacementContainer));
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");







const addBtn = document.getElementById("add-btn");
const addProjectBtn = document.getElementById("add-project-btn");
const addTaskBtn = document.getElementById("add-task-btn");

addBtn.addEventListener("click", () => addBtn.classList.toggle("open"));
addTaskBtn.addEventListener("click", openEditMode);
addProjectBtn.addEventListener("click", openProjectMode);

function openDisplayMode(e) {
	addBtn.classList.remove("open");

	_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.DISPLAY_MODE, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));

	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document
		.getElementById("delete-btn")
		.addEventListener("click", handleTaskDelete);
}

function openEditMode(e) {
	addBtn.classList.remove("open");
	if (e.target !== addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", openEditMode);
		document
			.getElementById("delete-btn")
			.removeEventListener("click", handleTaskDelete);
	}

	_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.EDIT_MODE);

	if (e.target.id === "edit-btn") {
		_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.EDIT_MODE_POP, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(e.target));
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

	_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.PROJECT_MODE);

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
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getTasksBy("id", selectedId)[0].getProperties();

	const userConfirmed = confirm(
		`Are you sure you want to delete the "${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.makeFirstUpper)(
			task.title
		)}" task? \nThis action cannot be undone.`
	);

	if (userConfirmed) {
		_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.DELETE_TASK, selectedId);
	}
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

function handleTaskSubmit(e) {
	e.preventDefault();
	const submitId = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findTaskId)(document.getElementById("save-btn"));
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
			_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.ADD_TASK, valuesArray);
		} else {
			_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.UPDATE_TASK, submitId, valuesArray);
		}
		_modals__WEBPACK_IMPORTED_MODULE_2__.dialog.close();
	}
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.ADD_PROJECT, newProjectName);
}

const subCardClick = _pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.CARD_CLICK, openDisplayMode);

_pubsub__WEBPACK_IMPORTED_MODULE_4__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_4__.EVENTS.INIT);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTyx3RkFBd0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksY0FBYyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sYUFBYSxNQUFNLFlBQVksWUFBWSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGNBQWMsU0FBUyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxjQUFjLGNBQWMsTUFBTSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxLQUFLLGFBQWEsY0FBYyxNQUFN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O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRywyQ0FBTSxTQUFTLDJDQUFNO0FBQ3hCLElBQUk7QUFDSixHQUFHLDJDQUFNLFNBQVMsMkNBQU07QUFDeEI7QUFDQSxFQUFFLDJDQUFNO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJDQUFNLFNBQVMsMkNBQU07QUFDdEI7O0FBRUEscUJBQXFCLDJDQUFNLFdBQVcsMkNBQU07O0FBRTVDLDJDQUFNLFNBQVMsMkNBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGFscy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmJvZHkge1xuXHRtaW4taGVpZ2h0OiAxMDBzdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmxleC1jb250YWluZXIge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1jb250ZW50IHtcblx0LS1tYWluLXNwYWNlcjogMjBweDtcblx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XG5cblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogMTtcblx0Ym90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSArIDQ4cHgpO1xuXHRsZWZ0OiAxMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0Z2FwOiAxMHB4O1xufVxuXG4jYWRkLWJ0biB7XG5cdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuXG4jYWRkLWJ0bi5vcGVuIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jYWRkLWJ0biB+ICoge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jYWRkLWJ0bi5vcGVuIH4gKiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0LmFwcC1jb250ZW50IHtcblx0XHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcblx0XHRtaW4taGVpZ2h0OiA4MHZoO1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xuXHR9XG5cdC5hZGQtY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmhlYWRlciBoMSB7XG5cdG1hcmdpbjogMTBweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jc2lkZWJhci1vcGVuLWJ0biB7XG5cdG1hcmdpbjogMTBweDtcblx0cGFkZGluZzogNXB4IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0I3NpZGViYXItb3Blbi1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNpZGViYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDEwMHN2aDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG5cblx0dHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcblx0d2lkdGg6IDEwMHZ3O1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uc2lkZWJhciA+ICoge1xuXHRvcGFjaXR5OiAwO1xuXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnNpZGViYXIub3BlbiA+ICoge1xuXHRvcGFjaXR5OiAxO1xuXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG59XG5cbi5jbG9zZS1idG4ge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0cGFkZGluZzogMTBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5zaWRlYmFyLFxuXHQuc2lkZWJhci5vcGVuIHtcblx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0aGVpZ2h0OiB1bnNldDtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdHotaW5kZXg6IHVuc2V0O1xuXG5cdFx0dHJhbnNpdGlvbjogbm9uZTtcblx0fVxuXG5cdC5zaWRlYmFyID4gKixcblx0LnNpZGViYXIub3BlbiA+ICoge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQjc2lkZWJhci1jbG9zZS1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2lkZWJhciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2VyKTtcblx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tYWRkLWJ0bi1kaW1zKSArIHZhcigtLW1haW4tc3BhY2VyKSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbiNzdGF0dXNlcy1jb250YWluZXIge1xuXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLnN0YXR1cy1yb3cge1xuXHRmbGV4OiBhdXRvO1xuXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFN0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnN0YXR1cy1jb2x1bW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xuXHRtaW4taGVpZ2h0OiAyNXN2aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4udGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS13aWR0aDogMTJweDtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JleTtcblxuXHRwYWRkaW5nOiA1cHggNXB4IDVweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIDVweCk7XG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXG5cdFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXG5cdCk7XG5cblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwiaGlnaFwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHJnYigyMjIsIDE5LCAwKTtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ29sZDtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibG93XCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogc2t5Ymx1ZTtcbn1cblxuI2RvbmUtY29sdW1uIC50YXNrLWNhcmQge1xuXHQtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcbn1cblxuLnN1YnRleHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG5cdGhlaWdodDogNjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaWFsb2cgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5kaWFsb2cge1xuXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcblxuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuZGlhbG9nID4gKiB7XG5cdHdpZHRoOiBtaW4oODh2dywgNTAwcHgpO1xuXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kaXNwbGF5LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xufVxuXG4uZGlzcGxheS1tb2RlLWhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmVkaXQtbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cblxuLmVkaXQtbW9kZS1kZXRhaWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xufVxuXG4ucHJvamVjdC1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDs7O0NBR0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0NBQ0Msa0JBQWtC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O0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUEsNERBQTREO0FBQzVELGtEQUFrRDs7QUFFbEQsbURBQW1EOztBQUVuRDtDQUNDLFlBQVk7O0NBRVosYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7QUFDQSxvREFBb0Q7O0FBRXBELG1EQUFtRDs7QUFFbkQ7Q0FDQyxvQkFBb0I7O0NBRXBCLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsNEJBQTRCO0NBQzVCLHdCQUF3QjtDQUN4QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhOztDQUViLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBLG9EQUFvRDs7QUFFcEQscURBQXFEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQvKiBjb2xvcjogdW5zZXQ7ICovXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZmxleC1jb250YWluZXIge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRlbnQge1xcblxcdC0tbWFpbi1zcGFjZXI6IDIwcHg7XFxuXFx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XFxuXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRkLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Ym90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSArIDQ4cHgpO1xcblxcdGxlZnQ6IDEwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4jYWRkLWJ0biB7XFxuXFx0aGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdHdpZHRoOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuI2FkZC1idG4ub3BlbiB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jYWRkLWJ0biB+ICoge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtYnRuLm9wZW4gfiAqIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0LmFwcC1jb250ZW50IHtcXG5cXHRcXHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcXG5cXHRcXHRtaW4taGVpZ2h0OiA4MHZoO1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcblxcdH1cXG5cXHQuYWRkLWNvbnRhaW5lciB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGJvdHRvbTogMTBweDtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oZWFkZXIge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0cGFkZGluZzogNXB4IDhweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdCNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNpZGViYXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDEwMHN2aDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2lkZWJhci5vcGVuIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnNpZGViYXIgPiAqIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuXFxuLnNpZGViYXIub3BlbiA+ICoge1xcblxcdG9wYWNpdHk6IDE7XFxuXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5zaWRlYmFyLFxcblxcdC5zaWRlYmFyLm9wZW4ge1xcblxcdFxcdHBvc2l0aW9uOiBpbmhlcml0O1xcblxcdFxcdHdpZHRoOiB1bnNldDtcXG5cXHRcXHRoZWlnaHQ6IHVuc2V0O1xcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0XFx0ei1pbmRleDogdW5zZXQ7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnNpZGViYXIgPiAqLFxcblxcdC5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1jbG9zZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TaWRlYmFyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2VyKTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1hZGQtYnRuLWRpbXMpICsgdmFyKC0tbWFpbi1zcGFjZXIpKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbiNzdGF0dXNlcy1jb250YWluZXIge1xcblxcdC0tc3RhdHVzLXNwYWNlcjogMTBweDtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4uc3RhdHVzLXJvdyB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnN0YXR1cy1jb2x1bW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XFxuXFx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xcblxcdG1pbi1oZWlnaHQ6IDI1c3ZoO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuXFx0LS1wcmlvcml0eS13aWR0aDogMTJweDtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiBncmV5O1xcblxcblxcdHBhZGRpbmc6IDVweCA1cHggNXB4IGNhbGModmFyKC0tcHJpb3JpdHktd2lkdGgpICsgNXB4KTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0dmFyKC0tcHJpb3JpdHktY29sb3IpIHZhcigtLXByaW9yaXR5LXdpZHRoKSxcXG5cXHRcXHR0cmFuc3BhcmVudCB2YXIoLS1wcmlvcml0eS13aWR0aClcXG5cXHQpO1xcblxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHJnYigyMjIsIDE5LCAwKTtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogZ29sZDtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuI2RvbmUtY29sdW1uIC50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VidGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpYWxvZyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZGlhbG9nIHtcXG5cXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcXG5cXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5kaWFsb2cgPiAqIHtcXG5cXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uZWRpdC1tb2RlLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5wcm9qZWN0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlhbG9nICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IFRhc2tzID0gKCgpID0+IHtcblx0bGV0IF90YXNrTGlzdCA9IFtdO1xuXHRsZXQgX2lkQ291bnRlciA9IDE7XG5cblx0Y29uc3QgX2NvbHVtbk5hbWVzID0gW1wiYmFja2xvZ1wiLCBcInRvLWRvXCIsIFwiaW4tcHJvZ3Jlc3NcIiwgXCJkb25lXCJdO1xuXG5cdGxldCBfcHJvcGVydHlOYW1lcyA9IFtcblx0XHRcInRpdGxlXCIsXG5cdFx0XCJzdGF0dXNcIixcblx0XHRcInByb2plY3RcIixcblx0XHRcInByaW9yaXR5XCIsXG5cdFx0XCJub3Rlc1wiLFxuXHRcdFwiZHVlXCIsXG5cdFx0XCJ0YWdzXCIsXG5cdF07XG5cblx0bGV0IF9wcmlvcml0aWVzID0gW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXTtcblxuXHRmdW5jdGlvbiBfZGF0ZVNvcnQob3V0Z29pbmdUYXNrcykge1xuXHRcdHJldHVybiBvdXRnb2luZ1Rhc2tzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGNvbnN0IGRhdGVBID0gYS5nZXRQcm9wZXJ0eShcImR1ZVwiKS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcblx0XHRcdGNvbnN0IGRhdGVCID0gYi5nZXRQcm9wZXJ0eShcImR1ZVwiKS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcblx0XHRcdHJldHVybiAhZGF0ZUEgPyAxIDogZGF0ZUEgLSBkYXRlQjtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9jb2x1bW5Tb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRjb25zdCBjb2x1bW5Tb3J0ZWRBcnJheSA9IF9jb2x1bW5OYW1lcy5tYXAoKGNvbHVtbk5hbWUpID0+IHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdGNvbHVtbk5hbWUsXG5cdFx0XHRcdF9kYXRlU29ydChcblx0XHRcdFx0XHRvdXRnb2luZ1Rhc2tzLmZpbHRlcihcblx0XHRcdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KFwic3RhdHVzXCIpID09PSBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XTtcblx0XHR9KTtcblx0XHRyZXR1cm4gY29sdW1uU29ydGVkQXJyYXk7XG5cdH1cblxuXHRmdW5jdGlvbiBfdGFza0ZhY3RvcnkoKSB7XG5cdFx0Y29uc3QgX3Rhc2sgPSB7fTtcblx0XHRjb25zdCBzZXRQcm9wZXJ0eSA9IChrZXksIHZhbHVlKSA9PiAoX3Rhc2tba2V5XSA9IHZhbHVlKTtcblx0XHRfcHJvcGVydHlOYW1lcy5mb3JFYWNoKChwcm9wKSA9PiBzZXRQcm9wZXJ0eShwcm9wLCBcIlwiKSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldFByb3BlcnR5OiAoa2V5KSA9PiBfdGFza1trZXldLFxuXHRcdFx0Z2V0UHJvcGVydGllczogKCkgPT4gX3Rhc2ssXG5cdFx0XHRzZXRQcm9wZXJ0eSxcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkVGFzayhpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0Y29uc3QgbmV3VGFzayA9IF90YXNrRmFjdG9yeSgpO1xuXHRcdG5ld1Rhc2suc2V0UHJvcGVydHkoXCJpZFwiLCBfaWRDb3VudGVyKyspO1xuXHRcdGlucHV0VmFsdWVzQXJyYXkuZm9yRWFjaCgocGFpcikgPT4ge1xuXHRcdFx0bmV3VGFzay5zZXRQcm9wZXJ0eShwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHR9KTtcblx0XHRfdGFza0xpc3QucHVzaChuZXdUYXNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRhc2tzKC4uLnJlbW92ZUlkcykge1xuXHRcdF90YXNrTGlzdC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKHJlbW92ZUlkcy5pbmNsdWRlcyh0YXNrLmdldFByb3BlcnR5KFwiaWRcIikpKSB7XG5cdFx0XHRcdF90YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVGFzayh1cGRhdGVJZCwgaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdF90YXNrTGlzdC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKHVwZGF0ZUlkID09PSB0YXNrLmdldFByb3BlcnR5KFwiaWRcIikpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRcdFx0X3Rhc2tMaXN0W2luZGV4XS5zZXRQcm9wZXJ0eShwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUYXNrc0J5KHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIF90YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydHkocHJvcCkgPT09IHZhbHVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNvcnRlZFRhc2tzQnkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gX2NvbHVtblNvcnQoXG5cdFx0XHRfdGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnR5KHByb3ApID09PSB2YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9UQVNLLCBhZGRUYXNrKTtcblx0Y29uc3Qgc3ViUmVtb3ZlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRFTEVURV9UQVNLLCByZW1vdmVUYXNrcyk7XG5cdGNvbnN0IHN1YlVwZGF0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5VUERBVEVfVEFTSywgdXBkYXRlVGFzayk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRBbGxUYXNrczogKCkgPT4gX2NvbHVtblNvcnQoX3Rhc2tMaXN0KSxcblx0XHRnZXRUYXNrc0J5LFxuXHRcdGdldFNvcnRlZFRhc2tzQnksXG5cdFx0Z2V0Q29sdW1uTmFtZXM6ICgpID0+IF9jb2x1bW5OYW1lcyxcblx0XHRnZXRQcmlvcml0eU5hbWVzOiAoKSA9PiBfcHJpb3JpdGllcyxcblx0XHRnZXRQcm9wZXJ0eU5hbWVzOiAoKSA9PiBfcHJvcGVydHlOYW1lcyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG5cdGxldCBfcHJvamVjdExpc3QgPSBuZXcgU2V0KFtcImhvbWVcIiwgXCJmaW5hbmNlc1wiLCBcImxlYXJuaW5nXCJdKTtcblxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSB7XG5cdFx0X3Byb2plY3RMaXN0LmFkZChuZXdQcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocmVtb3ZlTmFtZSkge1xuXHRcdGlmIChfcHJvamVjdExpc3QuaGFzKHJlbW92ZU5hbWUpKSB7XG5cdFx0XHQvLyBHZXQgdGFzay5pZCdzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHByb2plY3Rcblx0XHRcdGNvbnN0IHJlbW92ZUlkcyA9IFRhc2tzLmdldFRhc2tzQnkoXCJwcm9qZWN0XCIsIHJlbW92ZU5hbWUpLm1hcChcblx0XHRcdFx0KHRhc2spID0+IHRhc2suZ2V0UHJvcGVydHkoXCJpZFwiKVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCB0YXNrcyB3aXRoIHRob3NlIGlkJ3MgZnJvbSBfdGFza0xpc3Rcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5ERUxFVEVfVEFTSywgLi4ucmVtb3ZlSWRzKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3Rcblx0XHRcdF9wcm9qZWN0TGlzdC5kZWxldGUocmVtb3ZlTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9QUk9KRUNULCBhZGRQcm9qZWN0KTtcblx0Y29uc3Qgc3ViUmVtb3ZlUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoXG5cdFx0RVZFTlRTLkRFTEVURV9QUk9KRUNULFxuXHRcdHJlbW92ZVByb2plY3Rcblx0KTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldFByb2plY3RzOiAoKSA9PiBbLi4uX3Byb2plY3RMaXN0XS5zb3J0KCksXG5cdH07XG59KSgpO1xuXG5jb25zdCBkZWZhdWx0VGFza3MgPSBbXG5cdHtcblx0XHR0aXRsZTogXCJwYXkgYmlsbHNcIixcblx0XHRzdGF0dXM6IFwiaW4tcHJvZ3Jlc3NcIixcblx0XHRwcm9qZWN0OiBcImZpbmFuY2VzXCIsXG5cdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxuXHRcdG5vdGVzOiBcInRoZSByZW50IGlzIHRvbyBkYW1uIGhpZ2hcIixcblx0XHRkdWU6IFwiMjAyMy0xMS0wMVwiLFxuXHRcdHRhZ3M6IFwiXCIsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJncm9jZXJpZXNcIixcblx0XHRzdGF0dXM6IFwidG8tZG9cIixcblx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRub3RlczogXCJcIixcblx0XHRkdWU6IFwiXCIsXG5cdFx0dGFnczogXCJzdG9yZVwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiZmlsZSB0YXhlc1wiLFxuXHRcdHN0YXR1czogXCJiYWNrbG9nXCIsXG5cdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdG5vdGVzOiBcIlwiLFxuXHRcdGR1ZTogXCJcIixcblx0XHR0YWdzOiBcIlwiLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwicmVhZCBDaGVraG92XCIsXG5cdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRwcm9qZWN0OiBcImxlYXJuaW5nXCIsXG5cdFx0cHJpb3JpdHk6IFwibG93XCIsXG5cdFx0bm90ZXM6IFwiXCIsXG5cdFx0ZHVlOiBcIlwiLFxuXHRcdHRhZ3M6IFwiXCIsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJyZXBsYWNlIGxpZ2h0YnVsYlwiLFxuXHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdHByb2plY3Q6IFwiaG9tZVwiLFxuXHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdG5vdGVzOiBcImJhdGhyb29tIGxpZ2h0IGlzIGZsaWNrZXJpbmdcIixcblx0XHRkdWU6IFwiXCIsXG5cdFx0dGFnczogXCJzdG9yZVwiLFxuXHR9LFxuXS5tYXAoKGl0ZW0pID0+IE9iamVjdC5lbnRyaWVzKGl0ZW0pKTtcblxuZGVmYXVsdFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9UQVNLLCBpdGVtKTtcbn0pO1xuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gRE9NIEZhY3RvcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcblx0cmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG5cblx0Zm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5ICE9PSBcImRhdGFzZXRcIikge1xuXHRcdFx0ZWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gU3BlY2lhbCBkaXJlY3Rpb25zIG5lZWRlZCB0byBzZXQgXCJkYXRhLVwiIHByb3BlcnRpZXNcblx0XHRcdGZvciAoY29uc3QgcHJvcCBpbiBhdHRyaWJ1dGVzW2tleV0pIHtcblx0XHRcdFx0ZWwuZGF0YXNldFtwcm9wXSA9IGF0dHJpYnV0ZXNba2V5XVtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvYmouY2hpbGRyZW4/LmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0Ly8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IGFkZGluZyBjaGlsZHJlbiB1cHN0cmVhbSBieVxuXHRcdC8vIHNldHRpbmcgXCJcIiBhcyB0aGUgYWx0ZXJuYXRpdmUgdG8gZWxGYWN0b3J5KClcblx0XHRpZiAoISFjaGlsZCkge1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoY2hpbGQpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3RoZXIgSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2tJZCh0YXJnZXQpIHtcblx0cmV0dXJuICsodGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImlkLWJ1YmJsZS1tYXJrZXJcIilcblx0XHQ/IHRhcmdldC5kYXRhc2V0LnRhc2tJZFxuXHRcdDogZmluZFRhc2tJZCh0YXJnZXQucGFyZW50RWxlbWVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFByb2plY3ROYW1lKHRhcmdldCkge1xuXHRyZXR1cm4gdGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImlkLWJ1YmJsZS1tYXJrZXJcIilcblx0XHQ/IHRhcmdldC5kYXRhc2V0LnByb2plY3RGaWx0ZXJcblx0XHQ6IGZpbmRQcm9qZWN0TmFtZSh0YXJnZXQucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmlyc3RVcHBlcihzdHJpbmcpIHtcblx0cmV0dXJuICEhc3RyaW5nXG5cdFx0PyBzdHJpbmdcblx0XHRcdFx0LnNwbGl0KFwiLVwiKVxuXHRcdFx0XHQubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuXHRcdFx0XHQuam9pbihcIiBcIilcblx0XHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoaXNvRGF0ZSkge1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7aXNvRGF0ZX1UMTI6MDA6MDAtMDQ6MDBgKTtcblx0Y29uc3QgZGF5cyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcblx0Y29uc3QgbW9udGhzID0gW1xuXHRcdFwiSmFuXCIsXG5cdFx0XCJGZWJcIixcblx0XHRcIk1hclwiLFxuXHRcdFwiQXByXCIsXG5cdFx0XCJNYXlcIixcblx0XHRcIkp1bmVcIixcblx0XHRcIkp1bHlcIixcblx0XHRcIkF1Z1wiLFxuXHRcdFwiU2VwdFwiLFxuXHRcdFwiT2N0XCIsXG5cdFx0XCJOb3ZcIixcblx0XHRcIkRlY1wiLFxuXHRdO1xuXG5cdHJldHVybiBgJHtkYXlzW2RhdGUuZ2V0RGF5KCldfSwgJHtkYXRlLmdldERhdGUoKX0gJHtcblx0XHRtb250aHNbZGF0ZS5nZXRNb250aCgpXVxuXHR9ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG59XG4iLCJpbXBvcnQgeyBlbEZhY3RvcnksIGZvcm1hdERhdGUsIGh0bWxGYWN0b3J5LCBtYWtlRmlyc3RVcHBlciB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IFRhc2tzLCBQcm9qZWN0cyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQgPT09IGRpYWxvZykgZGlhbG9nLmNsb3NlKCk7XG59KTtcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuXHRkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xufSk7XG5cbmZ1bmN0aW9uIGJ1aWxkRGlzcGxheU1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1tb2RlXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1tb2RlLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMyBpZD1cImRpc3BsYXktdGl0bGVcIj48L2gzPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG4gZGlzcGxheS1jbG9zZS1idG5cIj7DlzwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1tb2RlLWRldGFpbHNcIj5cblx0XHRcdFx0XHQ8cD5Qcm9qZWN0OiA8c3BhbiBpZD1cImRpc3BsYXktcHJvamVjdFwiPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0PHA+UHJpb3JpdHk6IDxzcGFuIGlkPVwiZGlzcGxheS1wcmlvcml0eVwiPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0PHA+RHVlOiA8c3BhbiBpZD1cImRpc3BsYXktZHVlXCI+PC9zcGFuPjwvcD5cblx0XHRcdFx0XHQ8cD5TdGF0dXM6IDxzcGFuIGlkPVwiZGlzcGxheS1zdGF0dXNcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwPk5vdGVzOjxzcGFuIGlkPVwiZGlzcGxheS1ub3Rlc1wiPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0PHA+VGFnczogPHNwYW4gaWQ9XCJkaXNwbGF5LXRhZ3NcIj48L3NwYW4+PC9wPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1tb2RlLWJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiIGRhdGEtdGFzay1pZD1cIlwiPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZWRpdC1idG5cIj5FZGl0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUtYnRuXCI+RGVsZXRlPC9idXR0b24+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRgO1xuXHRkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShzZWxlY3RlZElkKSB7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXHRUYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGlzcGxheS0ke3Byb3B9YCk7XG5cdFx0bGV0IG91dHB1dCA9IHRhc2tbcHJvcF07XG5cblx0XHRpZiAocHJvcCA9PT0gXCJkdWVcIiAmJiAhIW91dHB1dCkge1xuXHRcdFx0b3V0cHV0ID0gZm9ybWF0RGF0ZShvdXRwdXQpO1xuXHRcdH1cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gcHJvcCA9PT0gXCJ0YWdzXCIgPyBvdXRwdXQgOiBtYWtlRmlyc3RVcHBlcihvdXRwdXQpO1xuXHR9KTtcblx0ZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaWQtYnViYmxlLW1hcmtlclwiKS5kYXRhc2V0LnRhc2tJZCA9IHNlbGVjdGVkSWQ7XG5cdGRpYWxvZ1xuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY2xvc2UtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cuY2xvc2UoKSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRWRpdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgPGZvcm0gY2xhc3M9XCJlZGl0LW1vZGVcIiBtZXRob2Q9XCJkaWFsb2dcIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtZGV0YWlsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcm9qZWN0XCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD1cInByaW9yaXR5XCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImR1ZVwiPkR1ZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZVwiIGNsYXNzPVwic3VibWl0LWluZm9cIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwic3RhdHVzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkPjwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiPjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PHA+RW50ZXIgdGFncyBzZXBhcmF0ZWQgYnkgY29tbWFzLjwvcD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRhZ3NcIj5UYWdzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFnc1wiIGNsYXNzPVwic3VibWl0LWluZm9cIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImVkaXQtbW9kZS1idXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIiBkYXRhLXRhc2staWQ9XCJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNhdmUtYnRuXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Zvcm0+YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBhZGREcm9wZG93bnMoKSB7XG5cdFtcblx0XHRbXCJwcm9qZWN0XCIsIFByb2plY3RzLmdldFByb2plY3RzKCldLFxuXHRcdFtcInByaW9yaXR5XCIsIFRhc2tzLmdldFByaW9yaXR5TmFtZXMoKV0sXG5cdFx0W1wic3RhdHVzXCIsIFRhc2tzLmdldENvbHVtbk5hbWVzKCldLFxuXHRdLmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFpclswXSk7XG5cdFx0cGFpclsxXS5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogb3B0aW9uLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKG9wdGlvbiksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybShzZWxlY3RlZElkKSB7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXHRUYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKTtcblxuXHRcdHN3aXRjaCAocHJvcCkge1xuXHRcdFx0Y2FzZSBcInByb2plY3RcIjpcblx0XHRcdGNhc2UgXCJwcmlvcml0eVwiOlxuXHRcdFx0Y2FzZSBcInN0YXR1c1wiOlxuXHRcdFx0XHRbLi4uZWxlbWVudC5jaGlsZHJlbl0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09PSB0YXNrW3Byb3BdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidGl0bGVcIjpcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IG1ha2VGaXJzdFVwcGVyKHRhc2tbcHJvcF0pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcIm5vdGVzXCI6XG5cdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcih0YXNrW3Byb3BdKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSB0YXNrW3Byb3BdO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcm9qZWN0TW9kZSgpIHtcblx0ZGlhbG9nLmlubmVySFRNTCA9IGBcblx0XHQ8Zm9ybSBjbGFzcz1cInByb2plY3QtbW9kZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwibmV3LXByb2plY3RcIj5OZXcgUHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1wcm9qZWN0XCIgcmVxdWlyZWQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cInByb2plY3QtbW9kZS1idXR0b25zXCI+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwicHJvamVjdC1zYXZlLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInByb2plY3QtY2FuY2VsLWJ0blwiPlxuXHRcdFx0XHRcdENhbmNlbFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L2Zvcm0+YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5jb25zdCBzdWJEaXNwbGF5QnVpbGQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ESVNQTEFZX01PREUsIGJ1aWxkRGlzcGxheU1vZGUpO1xuY29uc3Qgc3ViRGlzcGxheVBvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRJU1BMQVlfTU9ERSwgcG9wdWxhdGVEaXNwbGF5KTtcblxuY29uc3Qgc3ViRWRpdEJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFLCBidWlsZEVkaXRNb2RlKTtcbmNvbnN0IHN1YkVkaXREcm9wZG93bnMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5FRElUX01PREUsIGFkZERyb3Bkb3ducyk7XG5jb25zdCBzdWJGb3JtUG9wID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFX1BPUCwgcG9wdWxhdGVGb3JtKTtcblxuY29uc3Qgc3ViUHJvamVjdEJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuUFJPSkVDVF9NT0RFLCBidWlsZFByb2plY3RNb2RlKTtcbiIsIi8qXG5QdWJTdWIgb3JnYW5pemF0aW9uXG5cbmV2ZW50IHR5cGVzOiBcblx0LSBhZGRUYXNrXG5cdC0gdXBkYXRlVGFza1xuXHQtIHJlbW92ZVRhc2tcblx0LSBhZGRQcm9qZWN0XG5cdC0gcmVtb3ZlUHJvamVjdFxuXG5zdWJzY3JpYmVycyAodGhpbmdzIHRoYXQgbmVlZCB0byBnZXQgZG9uZSk6XG5cdC0gbWFraW5nIHJlbGV2YW50IGNoYW5nZXMgaW4gYXBwQ29udHJvbGxlclxuXHQtIHBvcHVsYXRlU3RvcmFnZSAob25jZSBKU09OIGNvbWVzIGludG8gcGxheSlcblx0LSB1cGRhdGVTY3JlZW5cblxuXG4obG9jYWxTdG9yYWdlIG5vdGU6IGdvbm5hIG5lZWQgdG8gdXNlIE1ETidzIHN0b3JhZ2VBdmFpbGFibGUgZm4gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHN1YnNjcmliZSBzdG9yYWdlIHJlbGF0ZWQgc3R1ZmYgdG8gZXZlbnRzLCBtZWFuaW5nIHRoYXQgZXZlcnl0aGluZyBuZWVkcyB0byBzdGlsbCB3b3JrIGV2ZW4gaWYgc3RvcmFnZSBpc24ndCBhdmFpbGFibGUpXG4qL1xuXG5leHBvcnQgY29uc3QgUHViU3ViID0gKCgpID0+IHtcblx0Y29uc3QgX2V2ZW50c0xpc3QgPSB7fTtcblx0Ly8geyBrZXk6IFwidHJpZ2dlckV2ZW50XCIsIHZhbHVlOiBbIGFycmF5IG9mIGZ1bmN0aW9ucyBdIH1cblxuXHRmdW5jdGlvbiBzdWJzY3JpYmUodHJpZ2dlckV2ZW50LCBzdWJzY3JpYmVyKSB7XG5cdFx0aWYgKCFfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdKSB7XG5cdFx0XHRfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdID0gW3N1YnNjcmliZXJdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdLnB1c2goc3Vic2NyaWJlcik7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKF9ldmVudHNMaXN0KTsgLy8gZGV2TW9kZVxuXHRcdHJldHVybiB7XG5cdFx0XHR1bnN1YnNjcmliZTogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBmdW5jdGlvbkxpc3QgPSBfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdO1xuXHRcdFx0XHRjb25zdCBpID0gZnVuY3Rpb25MaXN0LmluZGV4T2Yoc3Vic2NyaWJlcik7XG5cdFx0XHRcdGlmIChpID4gLTEpIHtcblx0XHRcdFx0XHRmdW5jdGlvbkxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBwdWJsaXNoKHRyaWdnZXJFdmVudCwgLi4uYXJncykge1xuXHRcdGNvbnN0IGZ1bmN0aW9uTGlzdCA9IF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZnVuY3Rpb25MaXN0KSkge1xuXHRcdFx0ZnVuY3Rpb25MaXN0LmZvckVhY2goKHN1YnNjcmliZXIpID0+IHtcblx0XHRcdFx0c3Vic2NyaWJlci5hcHBseShudWxsLCBhcmdzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN1YnNjcmliZSwgcHVibGlzaCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UUyA9IHtcblx0RElTUExBWV9NT0RFOiBcImRpc3BsYXlNb2RlXCIsXG5cdEVESVRfTU9ERTogXCJlZGl0TW9kZVwiLFxuXHRFRElUX01PREVfUE9QOiBcImVkaXRNb2RlUG9wXCIsXG5cdFBST0pFQ1RfTU9ERTogXCJwcm9qZWN0TW9kZVwiLFxuXHRERUxFVEVfVEFTSzogXCJkZWxldGVUYXNrXCIsXG5cdEFERF9UQVNLOiBcImFkZFRhc2tcIixcblx0VVBEQVRFX1RBU0s6IFwidXBkYXRlVGFza1wiLFxuXHRDQVJEX0NMSUNLOiBcImNhcmRDbGlja1wiLFxuXHRJTklUOiBcImluaXRcIixcblx0QUREX1BST0pFQ1Q6IFwiYWRkUHJvamVjdFwiLFxuXHRERUxFVEVfUFJPSkVDVDogXCJkZWxldGVQcm9qZWN0XCIsXG59O1xuIiwiaW1wb3J0IHsgVGFza3MsIFByb2plY3RzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL21vZGFsc1wiO1xuaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7XG5cdGVsRmFjdG9yeSxcblx0aHRtbEZhY3RvcnksXG5cdG1ha2VGaXJzdFVwcGVyLFxuXHRmaW5kUHJvamVjdE5hbWUsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3Qgc2lkZWJhck9wZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItb3Blbi1idG5cIik7XG5jb25zdCBzaWRlYmFyQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItY2xvc2UtYnRuXCIpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbnNpZGViYXJPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpKTtcbnNpZGViYXJDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cblx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKVxuKTtcblxuY29uc3QgcHJvamVjdERpc3BsYXllZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kaXNwbGF5ZWRcIik7XG5jb25zdCBzdGF0dXNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzZXMtY29udGFpbmVyXCIpO1xuXG5jb25zdCBBTExfVEFTS1MgPSBcImFsbC10YXNrc1wiO1xuY29uc3QgTk9fUFJPSkVDVCA9IFwidW5jYXRlZ29yaXplZFwiO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gQUxMX1RBU0tTO1xuXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG5cdGlmIChjdXJyZW50UHJvamVjdCA9PT0gQUxMX1RBU0tTKSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKEFMTF9UQVNLUyk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoVGFza3MuZ2V0QWxsVGFza3MoKSk7XG5cdFx0dXBkYXRlU2lkZWJhcigpO1xuXHR9IGVsc2Uge1xuXHRcdHByb2plY3REaXNwbGF5ZWQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcihjdXJyZW50UHJvamVjdCk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoXG5cdFx0XHRUYXNrcy5nZXRTb3J0ZWRUYXNrc0J5KFxuXHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0Y3VycmVudFByb2plY3QgPT09IE5PX1BST0pFQ1QgPyBcIlwiIDogY3VycmVudFByb2plY3Rcblx0XHRcdClcblx0XHQpO1xuXHRcdHVwZGF0ZVNpZGViYXIoKTtcblx0fVxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbHVtbnMoZGlzcGxheVRhc2tzKSB7XG5cdC8vIFJlc2V0IHRoZSBjb2x1bW5zXG5cdFsuLi5zdGF0dXNlc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocm93KSA9PiAocm93LnRleHRDb250ZW50ID0gXCJcIikpO1xuXG5cdC8vIEJ1aWxkIGNvbHVtbiBjb250ZW50XG5cdGRpc3BsYXlUYXNrcy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgY29sdW1uTmFtZSA9IGNvbHVtblswXTtcblx0XHRjb25zdCBzdGF0dXNOYW1lID0gbWFrZUZpcnN0VXBwZXIoY29sdW1uTmFtZSk7XG5cblx0XHRjb25zdCBjb2x1bW5Db250ZW50ID0gZWxGYWN0b3J5KFxuXHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtY29sdW1uXCIsXG5cdFx0XHRcdGlkOiBgJHtjb2x1bW5OYW1lfS1jb2x1bW5gLFxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDJcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtbmFtZVwiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBzdGF0dXNOYW1lLFxuXHRcdFx0XHR9KSxcblx0XHRcdF1cblx0XHQpO1xuXG5cdFx0Ly8gQnVpbGQgdGFzayBjYXJkc1xuXHRcdGNvbHVtblsxXS5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRjb25zdCBbdGl0bGUsIHByb2plY3QsIGR1ZV0gPSBbXG5cdFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJ0aXRsZVwiKSxcblx0XHRcdFx0dGFzay5nZXRQcm9wZXJ0eShcInByb2plY3RcIiksXG5cdFx0XHRcdHRhc2suZ2V0UHJvcGVydHkoXCJkdWVcIiksXG5cdFx0XHRdO1xuXHRcdFx0Y29sdW1uQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGFzay1jYXJkIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRcdFx0cHJpb3JpdHk6IHRhc2tcblx0XHRcdFx0XHRcdFx0XHQuZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKVxuXHRcdFx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdFx0XHR0YXNrSWQ6IHRhc2suZ2V0UHJvcGVydHkoXCJpZFwiKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGl0bGVcIixcblx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHRpdGxlKSxcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcInN1YnRleHRcIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3RcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIocHJvamVjdCksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJkdWVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogZHVlLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0byBjb3JyZWN0IHJvd1xuXHRcdGlmIChpbmRleCA8IDIpIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBNYWtlIGVhY2ggdGFzayBjbGlja2FibGVcblx0Y29uc3QgVGFza0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIik7XG5cdFRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5DQVJEX0NMSUNLLCBlKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpZGViYXIoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuXHRjb25zdCByZXBsYWNlbWVudENvbnRhaW5lciA9IGVsRmFjdG9yeShcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NMaXN0OiBcInByb2plY3RzLWNvbnRhaW5lclwiIH0sXG5cdFx0W0FMTF9UQVNLUywgTk9fUFJPSkVDVCwgLi4uUHJvamVjdHMuZ2V0UHJvamVjdHMoKV0ubWFwKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtbmFtZSBpZC1idWJibGUtbWFya2VyXCIsXG5cdFx0XHRcdFx0ZGF0YXNldDogeyBwcm9qZWN0RmlsdGVyOiBwcm9qZWN0IH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihwcm9qZWN0KSxcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0LWZpbHRlci1idG5cIixcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRbQUxMX1RBU0tTLCBOT19QUk9KRUNUXS5pbmNsdWRlcyhwcm9qZWN0KVxuXHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHQ6IGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogXCJEXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0ICB9KSxcblx0XHRcdFx0XVxuXHRcdFx0KTtcblx0XHR9KVxuXHQpO1xuXG5cdHNpZGViYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkocmVwbGFjZW1lbnRDb250YWluZXIpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWZpbHRlci1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaWx0ZXJQcm9qZWN0Vmlldyk7XG5cdH0pO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGVsZXRlLWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3REZWxldGUpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdERlbGV0ZShlKSB7XG5cdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZShlLnRhcmdldCk7XG5cblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIke21ha2VGaXJzdFVwcGVyKFxuXHRcdFx0c2VsZWN0ZWRQcm9qZWN0XG5cdFx0KX1cIiBhbmQgYWxsIGl0cyB0YXNrcz8gXFxuVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5gXG5cdCk7XG5cblx0aWYgKHVzZXJDb25maXJtZWQpIHtcblx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuREVMRVRFX1BST0pFQ1QsIHNlbGVjdGVkUHJvamVjdCk7XG5cdFx0Y3VycmVudFByb2plY3QgPVxuXHRcdFx0c2VsZWN0ZWRQcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdCA/IEFMTF9UQVNLUyA6IGN1cnJlbnRQcm9qZWN0O1xuXHRcdHVwZGF0ZVNjcmVlbigpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclByb2plY3RWaWV3KGUpIHtcblx0Y3VycmVudFByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUoZS50YXJnZXQpO1xuXHR1cGRhdGVTY3JlZW4oKTtcblx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbn1cblxuY29uc3Qgc3ViSW5pdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLklOSVQsIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkRlbGV0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ERUxFVEVfVEFTSywgdXBkYXRlU2NyZWVuKTtcbmNvbnN0IHN1YkFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfVEFTSywgdXBkYXRlU2NyZWVuKTtcbmNvbnN0IHN1YlVwZGF0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5VUERBVEVfVEFTSywgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9QUk9KRUNULCB1cGRhdGVTY3JlZW4pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFRhc2tJZCwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tIFwiLi9tb2RhbHNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJ0blwiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0blwiKTtcblxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIikpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0TW9kZSk7XG5cbmZ1bmN0aW9uIG9wZW5EaXNwbGF5TW9kZShlKSB7XG5cdGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblxuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuRElTUExBWV9NT0RFLCBmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrRGVsZXRlKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RlKGUpIHtcblx0YWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRpZiAoZS50YXJnZXQgIT09IGFkZFRhc2tCdG4pIHtcblx0XHRkb2N1bWVudFxuXHRcdFx0LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idG5cIilcblx0XHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0XHRkb2N1bWVudFxuXHRcdFx0LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ0blwiKVxuXHRcdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrRGVsZXRlKTtcblx0fVxuXG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5FRElUX01PREUpO1xuXG5cdGlmIChlLnRhcmdldC5pZCA9PT0gXCJlZGl0LWJ0blwiKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkVESVRfTU9ERV9QT1AsIGZpbmRUYXNrSWQoZS50YXJnZXQpKTtcblx0fVxuXG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kZSgpIHtcblx0YWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5QUk9KRUNUX01PREUpO1xuXG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NhbmNlbChlKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cblx0aWYgKGZpbmRUYXNrSWQoZS50YXJnZXQpKSB7XG5cdFx0b3BlbkRpc3BsYXlNb2RlKGUpO1xuXHR9IGVsc2Uge1xuXHRcdGRpYWxvZy5jbG9zZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDYW5jZWwoKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcblxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0RlbGV0ZShlKSB7XG5cdGNvbnN0IHNlbGVjdGVkSWQgPSBmaW5kVGFza0lkKGUudGFyZ2V0KTtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBzZWxlY3RlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHRhc2sudGl0bGVcblx0XHQpfVwiIHRhc2s/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuYFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRFTEVURV9UQVNLLCBzZWxlY3RlZElkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNBcnJheSgpIHtcblx0Y29uc3Qgc3VibWl0dGVkSW5mbyA9IFtdO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Ym1pdC1pbmZvXCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0bGV0IHN1Ym1pdFZhbHVlID0ge1xuXHRcdFx0aW5wdXQ6IGVsLnZhbHVlLFxuXHRcdFx0c2VsZWN0OiBbLi4uZWwuY2hpbGRyZW5dLmZpbHRlcihcblx0XHRcdFx0KG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkID09PSB0cnVlXG5cdFx0XHQpWzBdPy52YWx1ZSxcblx0XHRcdHRleHRhcmVhOiBlbC50ZXh0Q29udGVudCxcblx0XHR9W2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKV07XG5cdFx0c3VibWl0dGVkSW5mby5wdXNoKFtlbC5pZCwgc3VibWl0VmFsdWVdKTtcblx0fSk7XG5cdHJldHVybiBzdWJtaXR0ZWRJbmZvO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrU3VibWl0KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBzdWJtaXRJZCA9IGZpbmRUYXNrSWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ0blwiKSk7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0YFJlYWR5IHRvIHN1Ym1pdCAke3N1Ym1pdElkID09PSAwID8gXCJhIG5ldyB0YXNrXCIgOiBcInlvdXIgY2hhbmdlc1wifT9gXG5cdCk7XG5cblx0aWYgKHVzZXJDb25maXJtZWQpIHtcblx0XHRjb25zdCB2YWx1ZXNBcnJheSA9IGdldFZhbHVlc0FycmF5KCk7XG5cdFx0aWYgKHN1Ym1pdElkID09PSAwKSB7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuQUREX1RBU0ssIHZhbHVlc0FycmF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLlVQREFURV9UQVNLLCBzdWJtaXRJZCwgdmFsdWVzQXJyYXkpO1xuXHRcdH1cblx0XHRkaWFsb2cuY2xvc2UoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIikudmFsdWU7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfUFJPSkVDVCwgbmV3UHJvamVjdE5hbWUpO1xufVxuXG5jb25zdCBzdWJDYXJkQ2xpY2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DQVJEX0NMSUNLLCBvcGVuRGlzcGxheU1vZGUpO1xuXG5QdWJTdWIucHVibGlzaChFVkVOVFMuSU5JVCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=