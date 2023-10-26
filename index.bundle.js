/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
	--modal-spacer: 12px;

	width: min(88vw, 500px);
	margin: auto;
	border: none;

	border-radius: 10px;
	box-shadow: 4px 5px 10px #00000099;
	font-size: 1.3rem;
}

dialog::backdrop {
	background-color: #59595980;
}

dialog > * {
	padding: min(4vw, 18px);
	gap: var(--modal-spacer);
	flex-direction: column;
}

dialog .buttons {
	display: flex;
	gap: var(--modal-spacer);
}

dialog .buttons > * {
	flex: 1;

	padding: 6px;

	border-radius: 10px;
	font-size: 1.6rem;
	font-weight: bold;
	text-transform: uppercase;
}

/* ---------------     Display Mode     --------------- */

.display-mode {
	display: flex;
	background-color: var(--display-mode-bg);
}

.display-mode-header {
	display: flex;
	justify-content: space-between;
	font-size: 1.6rem;
}

.display-close-btn {
	--btn-dim: 33px;
	align-self: center;
	height: var(--btn-dim);
	width: var(--btn-dim);

	background-color: var(--text-dark);
	color: var(--text-light);
	border-radius: 20px;
	font-weight: 500;
}

.display-mode-body {
	display: flex;
}

.display-sidebar {
	width: 6px;
	border-radius: 5px;
	background-color: grey;
}

.display-details {
	flex: 1;
	margin: 8px 0;

	display: flex;
	flex-direction: column;
	gap: 20px;
}

.display-item {
	display: flex;
	gap: 10px;
}

.display-label {
	width: 70px;
	padding-left: 10px;
	color: var(--text-dark);
}

.display-value {
	flex: 1;
}

#edit-btn {
	background-color: var(--edit-btn-bg);
	color: var(--text-light);
}

#delete-btn {
	color: var(--edit-btn-bg);
	border: 2px solid currentColor;
}

/* ---------------     /Display Mode     --------------- */
/* ---------------     Edit Mode     --------------- */

.edit-mode {
	display: flex;
	background-color: var(--edit-mode-bg);
	color: var(--save-btn-bg);
}

.edit-mode-details {
	display: flex;
	flex-direction: column;
	gap: var(--modal-spacer);
}

.form-row {
	display: flex;
	flex-wrap: wrap;
	gap: var(--modal-spacer);
}

.form-item {
	position: relative;
	flex: 1;

	display: flex;
	gap: 6px;
}

.form-row p {
	width: 100%;
	margin: var(--modal-spacer) 0 0 76px;
	font-size: 1.2rem;
}

.edit-mode label {
	width: 70px;
	text-align: end;
}

input,
select,
textarea {
	flex: 1;
	appearance: none;
	padding: 1px 8px;
	width: 100px;

	border: 1px solid var(--save-btn-bg);
	border-radius: 5px;

	font-family: unset;
	font-size: inherit;
}

textarea {
	resize: vertical;
}

form .fa-chevron-down {
	position: absolute;
	right: 4%;
	top: 36%;

	color: black;
	font-size: 10px;
}

#save-btn {
	color: var(--text-light);
	background-color: var(--save-btn-bg);
}

#cancel-btn {
	color: var(--save-btn-bg);
	border: 2px solid currentColor;
}
/* ---------------     /Edit Mode     --------------- */
/* ---------------     Project Mode     --------------- */

.project-mode {
	display: flex;
	background-color: pink;
}

#project-save-btn {
	background-color: var(--text-project);
	color: pink;
}

#project-cancel-btn {
	color: var(--text-project);
	border: 2px solid var(--text-project);
}

/* ---------------     /Project Mode     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/dialog.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;;CAEpB,uBAAuB;CACvB,YAAY;CACZ,YAAY;;CAEZ,mBAAmB;CACnB,kCAAkC;CAClC,iBAAiB;AAClB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,uBAAuB;CACvB,wBAAwB;CACxB,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,OAAO;;CAEP,YAAY;;CAEZ,mBAAmB;CACnB,iBAAiB;CACjB,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA,yDAAyD;;AAEzD;CACC,aAAa;CACb,wCAAwC;AACzC;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,sBAAsB;CACtB,qBAAqB;;CAErB,kCAAkC;CAClC,wBAAwB;CACxB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,UAAU;CACV,kBAAkB;CAClB,sBAAsB;AACvB;;AAEA;CACC,OAAO;CACP,aAAa;;CAEb,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,oCAAoC;CACpC,wBAAwB;AACzB;;AAEA;CACC,yBAAyB;CACzB,8BAA8B;AAC/B;;AAEA,0DAA0D;AAC1D,sDAAsD;;AAEtD;CACC,aAAa;CACb,qCAAqC;CACrC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,OAAO;;CAEP,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,oCAAoC;CACpC,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,eAAe;AAChB;;AAEA;;;CAGC,OAAO;CACP,gBAAgB;CAChB,gBAAgB;CAChB,YAAY;;CAEZ,oCAAoC;CACpC,kBAAkB;;CAElB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,QAAQ;;CAER,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,wBAAwB;CACxB,oCAAoC;AACrC;;AAEA;CACC,yBAAyB;CACzB,8BAA8B;AAC/B;AACA,uDAAuD;AACvD,yDAAyD;;AAEzD;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,qCAAqC;CACrC,WAAW;AACZ;;AAEA;CACC,0BAA0B;CAC1B,qCAAqC;AACtC;;AAEA,0DAA0D","sourcesContent":["dialog {\n\t--modal-spacer: 12px;\n\n\twidth: min(88vw, 500px);\n\tmargin: auto;\n\tborder: none;\n\n\tborder-radius: 10px;\n\tbox-shadow: 4px 5px 10px #00000099;\n\tfont-size: 1.3rem;\n}\n\ndialog::backdrop {\n\tbackground-color: #59595980;\n}\n\ndialog > * {\n\tpadding: min(4vw, 18px);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\ndialog .buttons {\n\tdisplay: flex;\n\tgap: var(--modal-spacer);\n}\n\ndialog .buttons > * {\n\tflex: 1;\n\n\tpadding: 6px;\n\n\tborder-radius: 10px;\n\tfont-size: 1.6rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n}\n\n/* ---------------     Display Mode     --------------- */\n\n.display-mode {\n\tdisplay: flex;\n\tbackground-color: var(--display-mode-bg);\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 1.6rem;\n}\n\n.display-close-btn {\n\t--btn-dim: 33px;\n\talign-self: center;\n\theight: var(--btn-dim);\n\twidth: var(--btn-dim);\n\n\tbackground-color: var(--text-dark);\n\tcolor: var(--text-light);\n\tborder-radius: 20px;\n\tfont-weight: 500;\n}\n\n.display-mode-body {\n\tdisplay: flex;\n}\n\n.display-sidebar {\n\twidth: 6px;\n\tborder-radius: 5px;\n\tbackground-color: grey;\n}\n\n.display-details {\n\tflex: 1;\n\tmargin: 8px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.display-item {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.display-label {\n\twidth: 70px;\n\tpadding-left: 10px;\n\tcolor: var(--text-dark);\n}\n\n.display-value {\n\tflex: 1;\n}\n\n#edit-btn {\n\tbackground-color: var(--edit-btn-bg);\n\tcolor: var(--text-light);\n}\n\n#delete-btn {\n\tcolor: var(--edit-btn-bg);\n\tborder: 2px solid currentColor;\n}\n\n/* ---------------     /Display Mode     --------------- */\n/* ---------------     Edit Mode     --------------- */\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: var(--edit-mode-bg);\n\tcolor: var(--save-btn-bg);\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--modal-spacer);\n}\n\n.form-item {\n\tposition: relative;\n\tflex: 1;\n\n\tdisplay: flex;\n\tgap: 6px;\n}\n\n.form-row p {\n\twidth: 100%;\n\tmargin: var(--modal-spacer) 0 0 76px;\n\tfont-size: 1.2rem;\n}\n\n.edit-mode label {\n\twidth: 70px;\n\ttext-align: end;\n}\n\ninput,\nselect,\ntextarea {\n\tflex: 1;\n\tappearance: none;\n\tpadding: 1px 8px;\n\twidth: 100px;\n\n\tborder: 1px solid var(--save-btn-bg);\n\tborder-radius: 5px;\n\n\tfont-family: unset;\n\tfont-size: inherit;\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform .fa-chevron-down {\n\tposition: absolute;\n\tright: 4%;\n\ttop: 36%;\n\n\tcolor: black;\n\tfont-size: 10px;\n}\n\n#save-btn {\n\tcolor: var(--text-light);\n\tbackground-color: var(--save-btn-bg);\n}\n\n#cancel-btn {\n\tcolor: var(--save-btn-bg);\n\tborder: 2px solid currentColor;\n}\n/* ---------------     /Edit Mode     --------------- */\n/* ---------------     Project Mode     --------------- */\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n#project-save-btn {\n\tbackground-color: var(--text-project);\n\tcolor: pink;\n}\n\n#project-cancel-btn {\n\tcolor: var(--text-project);\n\tborder: 2px solid var(--text-project);\n}\n\n/* ---------------     /Project Mode     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Header     --------------- */

header {
	grid-column: span 2;
	height: 60px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-image: linear-gradient(
		to right,
		var(--header-bg-left),
		var(--header-bg-right)
	);
	color: var(--text-light);
	font-size: 2rem;
	box-shadow: 0 3px 3px #0000004e;
}

header h1 {
	margin: 10px 18px;
	font-style: italic;
	text-shadow: -3px 3px black;
}

#sidebar-open-btn {
	margin-top: -6px;
	padding: 5px 20px;
}

@media (min-width: 700px) {
	header {
		border-radius: calc(var(--app-bd-rad) * 0.6) calc(var(--app-bd-rad) * 0.6) 0
			0;
		border-bottom: 3px solid black;
		box-shadow: none;
	}

	#sidebar-open-btn {
		display: none;
	}
}

/* ---------------     /Header     --------------- */

/* ---------------     Footer     --------------- */

footer {
	height: 60px;

	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;

	background-color: var(--footer-bg);
	color: var(--text-light);
	font-size: 20px;
}

.fa.fa-github {
	color: currentColor;
	font-size: 30px;

	&:hover {
		transition: transform 0.4s ease-in-out;
		transform: rotate(-360deg) scale(1.3);
	}
}
/* ---------------     /Footer     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/header-footer.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;CACC,mBAAmB;CACnB,YAAY;;CAEZ,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;;CAEnB;;;;EAIC;CACD,wBAAwB;CACxB,eAAe;CACf,+BAA+B;AAChC;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC;EACC;IACE;EACF,8BAA8B;EAC9B,gBAAgB;CACjB;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,oDAAoD;;AAEpD,mDAAmD;;AAEnD;CACC,YAAY;;CAEZ,aAAa;CACb,QAAQ;CACR,uBAAuB;CACvB,mBAAmB;;CAEnB,kCAAkC;CAClC,wBAAwB;CACxB,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;AACD;AACA,oDAAoD","sourcesContent":["/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--header-bg-left),\n\t\tvar(--header-bg-right)\n\t);\n\tcolor: var(--text-light);\n\tfont-size: 2rem;\n\tbox-shadow: 0 3px 3px #0000004e;\n}\n\nheader h1 {\n\tmargin: 10px 18px;\n\tfont-style: italic;\n\ttext-shadow: -3px 3px black;\n}\n\n#sidebar-open-btn {\n\tmargin-top: -6px;\n\tpadding: 5px 20px;\n}\n\n@media (min-width: 700px) {\n\theader {\n\t\tborder-radius: calc(var(--app-bd-rad) * 0.6) calc(var(--app-bd-rad) * 0.6) 0\n\t\t\t0;\n\t\tborder-bottom: 3px solid black;\n\t\tbox-shadow: none;\n\t}\n\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tgap: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: var(--footer-bg);\n\tcolor: var(--text-light);\n\tfont-size: 20px;\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n/* ---------------     /Footer     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flex-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.app-content {
	--main-spacer: 20px;
	--add-btn-dims: 50px;

	flex: 1;
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: var(--text-light);
}

@media (min-width: 700px) {
	.flex-container {
		flex-direction: row;
	}

	.app-content {
		--app-bd-rad: 10px;

		width: min(calc(100vw - 40px), 1400px);
		min-height: 80vh;
		flex: 0 0 auto;

		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: 60px auto;

		border: 3px solid black;
		border-radius: var(--app-bd-rad);
		box-shadow: 8px 6px black;
	}
}

/* ---------------     Main     --------------- */

main {
	flex: 1;
	position: relative;
	padding: calc(var(--main-spacer) / 2);

	display: flex;
	flex-direction: column;
}

#project-displayed {
	font-size: 1.8rem;
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

	display: flex;
	flex-direction: column;
	gap: var(--status-spacer);

	border-radius: 10px;
	border: 2px solid transparent;
}

.status-column.drag-over {
	border-color: black;
	background-color: hsl(279, 33%, 92%);
}

.status-name {
	font-size: 1.6rem;
	font-weight: 500;
}

.task-card {
	--priority-width: 16px;
	--side-pad: 9px;
	--priority-color: var(--priority-none);

	min-height: 60px;
	padding: 4px var(--side-pad) 4px calc(var(--priority-width) + var(--side-pad));

	display: flex;
	flex-direction: column;

	background-image: linear-gradient(
		to right,
		var(--priority-color) var(--priority-width),
		transparent var(--priority-width)
	);

	border: 1px solid black;
	border-radius: 5px;
	box-shadow: 6px 4px black;

	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s;
}

.task-card:hover {
	transform: translate(-1px, -1px);
	box-shadow: 7px 5px black;
}

.task-card[data-priority="high"] {
	--priority-color: var(--priority-hi);
}

.task-card[data-priority="medium"] {
	--priority-color: var(--priority-med);
}

.task-card[data-priority="low"] {
	--priority-color: var(--priority-low);
}

#done-column .task-card {
	--priority-color: green;
}

.card-section {
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.task-card .title {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 90%;
}

.card-delete-btn {
	font-size: 20px;
}

.card-section:last-child {
	color: var(--text-med);
}

/* ---------------     /Status columns     --------------- */
/* ---------------     /Main     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;;CAEpB,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,mCAAmC;AACpC;;AAEA;CACC;EACC,mBAAmB;CACpB;;CAEA;EACC,kBAAkB;;EAElB,sCAAsC;EACtC,gBAAgB;EAChB,cAAc;;EAEd,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;;EAE7B,uBAAuB;EACvB,gCAAgC;EAChC,yBAAyB;CAC1B;AACD;;AAEA,iDAAiD;;AAEjD;CACC,OAAO;CACP,kBAAkB;CAClB,qCAAqC;;CAErC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,OAAO;;CAEP,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,UAAU;CACV,uBAAuB;;CAEvB,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA,2DAA2D;;AAE3D;CACC,OAAO;CACP,6BAA6B;CAC7B,2BAA2B;;CAE3B,aAAa;CACb,sBAAsB;CACtB,yBAAyB;;CAEzB,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,oCAAoC;AACrC;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,sBAAsB;CACtB,eAAe;CACf,sCAAsC;;CAEtC,gBAAgB;CAChB,8EAA8E;;CAE9E,aAAa;CACb,sBAAsB;;CAEtB;;;;EAIC;;CAED,uBAAuB;CACvB,kBAAkB;CAClB,yBAAyB;;CAEzB,gBAAgB;CAChB,eAAe;CACf,oBAAoB;AACrB;;AAEA;CACC,gCAAgC;CAChC,yBAAyB;AAC1B;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,sBAAsB;AACvB;;AAEA,4DAA4D;AAC5D,kDAAkD","sourcesContent":[".flex-container {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.app-content {\n\t--main-spacer: 20px;\n\t--add-btn-dims: 50px;\n\n\tflex: 1;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: var(--text-light);\n}\n\n@media (min-width: 700px) {\n\t.flex-container {\n\t\tflex-direction: row;\n\t}\n\n\t.app-content {\n\t\t--app-bd-rad: 10px;\n\n\t\twidth: min(calc(100vw - 40px), 1400px);\n\t\tmin-height: 80vh;\n\t\tflex: 0 0 auto;\n\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tgrid-template-rows: 60px auto;\n\n\t\tborder: 3px solid black;\n\t\tborder-radius: var(--app-bd-rad);\n\t\tbox-shadow: 8px 6px black;\n\t}\n}\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tposition: relative;\n\tpadding: calc(var(--main-spacer) / 2);\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#project-displayed {\n\tfont-size: 1.8rem;\n}\n\n#statuses-container {\n\t--status-spacer: 10px;\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n.status-row {\n\tflex: auto;\n\twidth: min(480px, 100%);\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n/* ---------------     Status columns     --------------- */\n\n.status-column {\n\tflex: 1;\n\tpadding: var(--status-spacer);\n\tmin-width: min(230px, 100%);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--status-spacer);\n\n\tborder-radius: 10px;\n\tborder: 2px solid transparent;\n}\n\n.status-column.drag-over {\n\tborder-color: black;\n\tbackground-color: hsl(279, 33%, 92%);\n}\n\n.status-name {\n\tfont-size: 1.6rem;\n\tfont-weight: 500;\n}\n\n.task-card {\n\t--priority-width: 16px;\n\t--side-pad: 9px;\n\t--priority-color: var(--priority-none);\n\n\tmin-height: 60px;\n\tpadding: 4px var(--side-pad) 4px calc(var(--priority-width) + var(--side-pad));\n\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--priority-color) var(--priority-width),\n\t\ttransparent var(--priority-width)\n\t);\n\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\tbox-shadow: 6px 4px black;\n\n\tfont-weight: 500;\n\tcursor: pointer;\n\ttransition: all 0.2s;\n}\n\n.task-card:hover {\n\ttransform: translate(-1px, -1px);\n\tbox-shadow: 7px 5px black;\n}\n\n.task-card[data-priority=\"high\"] {\n\t--priority-color: var(--priority-hi);\n}\n\n.task-card[data-priority=\"medium\"] {\n\t--priority-color: var(--priority-med);\n}\n\n.task-card[data-priority=\"low\"] {\n\t--priority-color: var(--priority-low);\n}\n\n#done-column .task-card {\n\t--priority-color: green;\n}\n\n.card-section {\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.task-card .title {\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tline-height: 90%;\n}\n\n.card-delete-btn {\n\tfont-size: 20px;\n}\n\n.card-section:last-child {\n\tcolor: var(--text-med);\n}\n\n/* ---------------     /Status columns     --------------- */\n/* ---------------     /Main     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sidebar {
	position: absolute;
	z-index: 1;
	width: 0;
	height: 100svh;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	gap: 20px;

	background-color: var(--footer-bg);
	color: var(--text-light);

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
	font-size: 40px;
	line-height: 22px;
}

/* ---------------     Project Buttons     --------------- */

.projects-container {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.project-name {
	display: flex;
	justify-content: space-between;
}

.project-filter-btn {
	font-size: 1.4rem;
	transition: all 0.2s;
}

.project-filter-btn:hover {
	color: var(--priority-low);
}

.project-filter-btn.selected {
	text-decoration: underline;
	text-underline-offset: 3px;
}

.project-delete-btn {
	font-size: 20px;
}

/* ---------------     /Project Buttons     --------------- */
/* ---------------     Bottom Buttons     --------------- */

.bottom-buttons {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.hidden-btn {
	display: none;
	padding: 5px;

	border: 1px solid currentColor;
	border-radius: 5px;
}

.hidden-btn.open {
	display: block;
}

.hidden-btn:hover {
	background-color: var(--text-light);
	color: var(--footer-bg);
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
	border: 2px solid currentColor;
	font-size: 40px;

	transition: all 0.4s;
}

#add-reveal-btn.open {
	transform: rotate(45deg);
}

#storage-reveal-btn {
	font-size: 20px;
}

#storage-reveal-btn.open {
	transform: rotate(90deg);
}

/* ---------------     /Bottom Buttons     --------------- */

@media (min-width: 700px) {
	.sidebar,
	.sidebar.open {
		position: inherit;
		width: unset;
		height: unset;
		padding: 20px min(20px, 6%);
		z-index: unset;

		transition: none;

		border-radius: 0 0 0 calc(var(--app-bd-rad) * 0.6);
	}

	.sidebar > *,
	.sidebar.open > * {
		opacity: 1;
	}

	#sidebar-close-btn {
		display: none;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,UAAU;CACV,QAAQ;CACR,cAAc;CACd,gBAAgB;;CAEhB,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET,kCAAkC;CAClC,wBAAwB;;CAExB,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,aAAa;;CAEb,oBAAoB;AACrB;;AAEA;CACC,UAAU;;CAEV,wBAAwB;AACzB;;AAEA;CACC,UAAU;;CAEV,sBAAsB;AACvB;;AAEA;CACC,oBAAoB;CACpB,eAAe;CACf,iBAAiB;AAClB;;AAEA,4DAA4D;;AAE5D;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,0BAA0B;CAC1B,0BAA0B;AAC3B;;AAEA;CACC,eAAe;AAChB;;AAEA,6DAA6D;AAC7D,2DAA2D;;AAE3D;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,YAAY;;CAEZ,8BAA8B;CAC9B,kBAAkB;AACnB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,mCAAmC;CACnC,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,2BAA2B;CAC3B,0BAA0B;CAC1B,aAAa;CACb,qBAAqB;;CAErB,kCAAkC;CAClC,8BAA8B;CAC9B,eAAe;;CAEf,oBAAoB;AACrB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;;AAEA,4DAA4D;;AAE5D;CACC;;EAEC,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,cAAc;;EAEd,gBAAgB;;EAEhB,kDAAkD;CACnD;;CAEA;;EAEC,UAAU;CACX;;CAEA;EACC,aAAa;CACd;AACD","sourcesContent":[".sidebar {\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 0;\n\theight: 100svh;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\n\tbackground-color: var(--footer-bg);\n\tcolor: var(--text-light);\n\n\ttransition: all 1s;\n}\n\n.sidebar.open {\n\twidth: 100vw;\n\tpadding: 20px;\n\n\ttransition: all 0.5s;\n}\n\n.sidebar > * {\n\topacity: 0;\n\n\ttransition: opacity 0.2s;\n}\n\n.sidebar.open > * {\n\topacity: 1;\n\n\ttransition: opacity 1s;\n}\n\n.close-btn {\n\talign-self: flex-end;\n\tfont-size: 40px;\n\tline-height: 22px;\n}\n\n/* ---------------     Project Buttons     --------------- */\n\n.projects-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n}\n\n.project-name {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.project-filter-btn {\n\tfont-size: 1.4rem;\n\ttransition: all 0.2s;\n}\n\n.project-filter-btn:hover {\n\tcolor: var(--priority-low);\n}\n\n.project-filter-btn.selected {\n\ttext-decoration: underline;\n\ttext-underline-offset: 3px;\n}\n\n.project-delete-btn {\n\tfont-size: 20px;\n}\n\n/* ---------------     /Project Buttons     --------------- */\n/* ---------------     Bottom Buttons     --------------- */\n\n.bottom-buttons {\n\tmargin-top: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n}\n\n.hidden-btn {\n\tdisplay: none;\n\tpadding: 5px;\n\n\tborder: 1px solid currentColor;\n\tborder-radius: 5px;\n}\n\n.hidden-btn.open {\n\tdisplay: block;\n}\n\n.hidden-btn:hover {\n\tbackground-color: var(--text-light);\n\tcolor: var(--footer-bg);\n}\n\n.reveal-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.reveal-btn {\n\theight: var(--add-btn-dims);\n\twidth: var(--add-btn-dims);\n\tdisplay: grid;\n\tplace-content: center;\n\n\tborder-radius: var(--add-btn-dims);\n\tborder: 2px solid currentColor;\n\tfont-size: 40px;\n\n\ttransition: all 0.4s;\n}\n\n#add-reveal-btn.open {\n\ttransform: rotate(45deg);\n}\n\n#storage-reveal-btn {\n\tfont-size: 20px;\n}\n\n#storage-reveal-btn.open {\n\ttransform: rotate(90deg);\n}\n\n/* ---------------     /Bottom Buttons     --------------- */\n\n@media (min-width: 700px) {\n\t.sidebar,\n\t.sidebar.open {\n\t\tposition: inherit;\n\t\twidth: unset;\n\t\theight: unset;\n\t\tpadding: 20px min(20px, 6%);\n\t\tz-index: unset;\n\n\t\ttransition: none;\n\n\t\tborder-radius: 0 0 0 calc(var(--app-bd-rad) * 0.6);\n\t}\n\n\t.sidebar > *,\n\t.sidebar.open > * {\n\t\topacity: 1;\n\t}\n\n\t#sidebar-close-btn {\n\t\tdisplay: none;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.typekit.net/pke3bbf.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Reboot     --------------- */

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	color: unset;
}

button {
	color: unset;
	background-color: unset;
	border: none;
	font-size: inherit;
	font-family: unset;
	cursor: pointer;
}

h1,
h2,
h3 {
	font-size: unset;
}

/* ---------------     /Reboot     --------------- */
/* ---------------     Utilities & Universals     --------------- */
:root {
	--save-btn-bg: #004b6b;
	--edit-btn-bg: #473262;
	--header-bg-left: hsl(210, 70%, 50%);
	--header-bg-right: hsl(266, 50%, 30%);
	--display-mode-bg: #eee0ff;
	--edit-mode-bg: #e0f6ff;

	--text-light: #fbfcff;
	--text-med: #404040;
	--text-dark: #4f4162;
	--text-project: #760a1c;

	--priority-low: #87bbf2;
	--priority-med: #ffc000;
	--priority-hi: #c00000;
	--priority-none: #a6a6a6;

	--footer-bg: #222a35;

	--font-main: futura-pt;
}

body {
	min-height: 100svh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(
			hsla(198, 100%, 41%, 0.745),
			hsla(266, 32%, 50%, 0.745)
		),
		no-repeat center/cover
			url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stones_Porto_DSCF0572.jpg/1024px-Stones_Porto_DSCF0572.jpg);
	font-family: var(--font-main), system-ui, -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;
}

/* ---------------     /Utilities & Universals     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAMA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,uBAAuB;CACvB,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;;;CAGC,gBAAgB;AACjB;;AAEA,oDAAoD;AACpD,mEAAmE;AACnE;CACC,sBAAsB;CACtB,sBAAsB;CACtB,oCAAoC;CACpC,qCAAqC;CACrC,0BAA0B;CAC1B,uBAAuB;;CAEvB,qBAAqB;CACrB,mBAAmB;CACnB,oBAAoB;CACpB,uBAAuB;;CAEvB,uBAAuB;CACvB,uBAAuB;CACvB,sBAAsB;CACtB,wBAAwB;;CAExB,oBAAoB;;CAEpB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB;;;;;4HAK2H;CAC3H;;YAEW;AACZ;;AAEA,oEAAoE","sourcesContent":["@import url(./main.css);\n@import url(./sidebar.css);\n@import url(./dialog.css);\n@import url(./header-footer.css);\n@import url(\"https://use.typekit.net/pke3bbf.css\");\n\n/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\na {\n\tcolor: unset;\n}\n\nbutton {\n\tcolor: unset;\n\tbackground-color: unset;\n\tborder: none;\n\tfont-size: inherit;\n\tfont-family: unset;\n\tcursor: pointer;\n}\n\nh1,\nh2,\nh3 {\n\tfont-size: unset;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n:root {\n\t--save-btn-bg: #004b6b;\n\t--edit-btn-bg: #473262;\n\t--header-bg-left: hsl(210, 70%, 50%);\n\t--header-bg-right: hsl(266, 50%, 30%);\n\t--display-mode-bg: #eee0ff;\n\t--edit-mode-bg: #e0f6ff;\n\n\t--text-light: #fbfcff;\n\t--text-med: #404040;\n\t--text-dark: #4f4162;\n\t--text-project: #760a1c;\n\n\t--priority-low: #87bbf2;\n\t--priority-med: #ffc000;\n\t--priority-hi: #c00000;\n\t--priority-none: #a6a6a6;\n\n\t--footer-bg: #222a35;\n\n\t--font-main: futura-pt;\n}\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: linear-gradient(\n\t\t\thsla(198, 100%, 41%, 0.745),\n\t\t\thsla(266, 32%, 50%, 0.745)\n\t\t),\n\t\tno-repeat center/cover\n\t\t\turl(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stones_Porto_DSCF0572.jpg/1024px-Stones_Porto_DSCF0572.jpg);\n\tfont-family: var(--font-main), system-ui, -apple-system, BlinkMacSystemFont,\n\t\t\"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
		return _columnNames.map((columnName) => [
			columnName,
			_dateSort(
				outgoingTasks.filter(
					(task) => task.getProperties().status === columnName
				)
			),
		]);
	}

	function _taskFactory() {
		const _task = {};
		const setProperty = (key, value) => (_task[key] = value);
		_propertyNames.forEach((prop) => setProperty(prop, ""));
		const getProperties = () => {
			return { ..._task };
		};
		return {
			getProperties,
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
	const question =
		"Defaults replace all tasks and projects with an example set. \nThis will erase anything you have saved.";
	const userConfirmed = askUser ? confirm(question) : true;
	if (userConfirmed) {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL);
		["home", "finances", "learning"].forEach((project) => {
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
			},
			{
				title: "groceries",
				status: "to-do",
				project: "home",
				priority: "medium",
				tags: "store",
			},
			{
				title: "file taxes",
				status: "backlog",
				project: "finances",
				priority: "medium",
			},
			{
				title: "read Chekhov",
				status: "backlog",
				project: "learning",
				priority: "low",
				due: "2023-11-05",
			},
			{
				title: "replace lightbulb",
				status: "to-do",
				project: "home",
				priority: "medium",
				notes: "bathroom light is flickering",
				tags: "store",
			},
		].map((item) => Object.entries(item));

		defaultTasks.forEach((item) => {
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, item);
		});
	}
}

const subDefaults = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_DEFAULTS, addDefaults);


/***/ }),

/***/ "./src/drag-drop.js":
/*!**************************!*\
  !*** ./src/drag-drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");




let draggedTask = undefined;
let counter = 0;

function addDragDrop(card) {
	card.addEventListener("dragstart", dragStart);
	card.addEventListener("dragend", dragEnd);
}

function dragStart(e) {
	draggedTask = this;
	this.style.opacity = "0.4";
}

function dragEnd(e) {
	draggedTask = undefined;
	this.style.opacity = "1";
	counter = 0;
	document.querySelectorAll(".status-column").forEach((status) => {
		status.classList.remove("drag-over");
	});
}

function addStatusDrop() {
	document.querySelectorAll(".status-column").forEach((status) => {
		status.addEventListener("dragover", dragOver);
		status.addEventListener("drop", updateStatus);
		status.addEventListener("dragenter", dragEnter);
		status.addEventListener("dragleave", dragLeave);
	});
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter() {
	counter++;
	(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findStatus)(this).classList.add("drag-over");
}

function dragLeave() {
	counter--;
	if (counter === 0) {
		(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findStatus)(this).classList.remove("drag-over");
	}
}

function updateStatus() {
	const dropColumn = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.findStatus)(this).id.slice(0, -7);
	const draggedId = +draggedTask.dataset.taskId;
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_0__.Tasks.getTasksBy("id", draggedId)[0].getProperties();
	task.status = dropColumn;

	_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.UPDATE_TASK, draggedId, Object.entries(task));
}

const subDragDrop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.ADD_DRAG_DROP, addDragDrop);
const subStatusDrop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.ADD_STATUS_DROP, addStatusDrop);


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
/* harmony export */   findStatus: () => (/* binding */ findStatus),
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
	return target.classList.value.includes("project-bubble-marker")
		? target.dataset.projectFilter
		: findProjectName(target.parentElement);
}

function findStatus(target) {
	return target.classList.value.includes("status-column")
		? target
		: findStatus(target.parentElement);
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
				<section class="display-mode-body">
					<div class="display-sidebar"></div>
					<div class="display-details">
						<div class="display-item"><span class="display-label">Project: </span><span class="display-value" id="display-project"></span></div>
						<div class="display-item"><span class="display-label">Priority: </span><span class="display-value" id="display-priority"></span></div>
						<div class="display-item"><span class="display-label">Due: </span><span class="display-value" id="display-due"></span></div>
						<div class="display-item"><span class="display-label">Status: </span><span class="display-value" id="display-status"></span></div>
						<div class="display-item"><span class="display-label">Notes: </span><span class="display-value" id="display-notes"></span></div>
						<div class="display-item"><span class="display-label">Tags: </span><span class="display-value" id="display-tags"></span></div>
					</div>
				</section>
				<section class="buttons id-bubble-marker" data-task-id="">
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
							<i class="fa fa-chevron-down" aria-hidden="true"></i>
							<label for="project">Project:</label>
							<select id="project" class="submit-info">
								<option value=""></option>
							</select>
						</div>
						<div class="form-item">
							<i class="fa fa-chevron-down" aria-hidden="true"></i>
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
							<i class="fa fa-chevron-down" aria-hidden="true"></i>
							<label for="status">Status:</label>
							<select id="status" class="submit-info" required></select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label for="notes">Notes:</label>
							<textarea id="notes" rows="5" class="submit-info"></textarea>
						</div>
					</div>
					<div class="form-row">
					<p>Separate tags with commas.</p>
						<div class="form-item">
							<label for="tags">Tags:</label>
							<input type="text" id="tags" class="submit-info"/>
						</div>
					</div>
				</section>
				<section class="buttons id-bubble-marker" data-task-id="">
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
			<section class="buttons">
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
	INIT: "init",
	DISPLAY_MODE: "displayMode",
	EDIT_MODE: "editMode",
	EDIT_MODE_POP: "editModePop",
	PROJECT_MODE: "projectMode",
	DELETE_TASK: "deleteTask",
	ADD_TASK: "addTask",
	UPDATE_TASK: "updateTask",
	CARD_CLICK: "cardClick",
	CARD_DELETE: "cardDelete",
	ADD_PROJECT: "addProject",
	DELETE_PROJECT: "deleteProject",
	ADD_DEFAULTS: "addDefaults",
	CLEAR_ALL: "clearAll",
	ADD_DRAG_DROP: "addDragDrop",
	ADD_STATUS_DROP: "addStatusDrop",
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
const NO_PROJECT = "unsorted";
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
					textContent: statusName + ":",
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
						draggable: true,
						dataset: {
							priority: task.priority.toLowerCase(),
							taskId: task.id,
						},
					},
					[
						(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", { classList: "card-section" }, [
							(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("h3", {
								classList: "title",
								textContent: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(task.title),
							}),
							(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
								"button",
								{
									type: "button",
									classList: "card-delete-btn",
								},
								[
									(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("i", {
										classList: "fa fa-trash-o card-delete-btn",
										"aria-hidden": true,
									}),
								]
							),
						]),
						(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("div", { classList: "card-section" }, [
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

	//Make each status-column able to receive dragDrops
	_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.ADD_STATUS_DROP);

	// Make each task clickable and draggable
	document.querySelectorAll(".task-card").forEach((card) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.ADD_DRAG_DROP, card);
		card.addEventListener("click", (e) => {
			if (e.target.classList.value.includes("card-delete-btn")) {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CARD_DELETE, e);
			} else {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CARD_CLICK, e);
			}
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
					classList: "project-name project-bubble-marker",
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
						: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
								"button",
								{
									type: "button",
									classList: "project-delete-btn",
								},
								[
									(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("i", {
										classList: "fa fa-trash",
										"aria-hidden": true,
									}),
								]
						  ),
				]
			);
		})
	);
	document
		.querySelector(".bottom-buttons")
		.before((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(replacementContainer));
	document.querySelectorAll(".project-filter-btn").forEach((button) => {
		button.addEventListener("click", filterProjectView);
		if (button.textContent === (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.makeFirstUpper)(currentProject)) {
			button.classList.add("selected");
		}
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
	storageType = localStorage;
} else if (storageAvailable("sessionStorage")) {
	storageType = sessionStorage;
} else {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_DEFAULTS, false);
}

if (!!storageType.getItem("allTasks")) {
	getStorage();
}

function setStorage() {
	const allTasks = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getAllTasks().map((task) => {
		const taskNoId = task.getProperties();
		delete taskNoId.id;
		return taskNoId;
	});
	const allProjects = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects();

	storageType.setItem("allProjects", JSON.stringify(allProjects));
	storageType.setItem("allTasks", JSON.stringify([...allTasks]));
}

function getStorage() {
	const storedProjects = JSON.parse(storageType.getItem("allProjects"));
	const storedTasks = JSON.parse(storageType.getItem("allTasks")).map((item) =>
		Object.entries(item)
	);

	storedProjects.forEach((project) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, project);
	});

	storedTasks.forEach((item) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, item);
	});
}

function clearStorage() {
	storageType.clear();
}

const subSetAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_TASK, setStorage);
const subSetDeleteTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, setStorage);
const subSetUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.UPDATE_TASK, setStorage);
const subSetAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.ADD_PROJECT, setStorage);
const subSetDeleteProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_PROJECT, setStorage);

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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-storage */ "./src/web-storage.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");
/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drag-drop */ "./src/drag-drop.js");









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

		if (userConfirmed) _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLEAR_ALL);
	});

	function hideAddBtns() {
		addRevealBtn.classList.remove("open");
		addTaskBtn.classList.remove("open");
		addProjectBtn.classList.remove("open");
	}

	function hideStorageBtns() {
		storageRevealBtn.classList.remove("open");
		defaultsBtn.classList.remove("open");
		clearStorageBtn.classList.remove("open");
	}

	const subAddDisplay = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DISPLAY_MODE, hideAddBtns);
	const subAddEdit = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.EDIT_MODE, hideAddBtns);
	const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.PROJECT_MODE, hideAddBtns);
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

	if (userConfirmed) _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.DELETE_TASK, selectedId);
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
const subCardDelete = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CARD_DELETE, handleTaskDelete);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EVENTS.INIT);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlGQUF5RixZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLLG9EQUFVO0FBQ2Y7QUFDQSxHQUFHO0FBQ0gsRUFBRSwyQ0FBTTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQywyQ0FBTTtBQUNQOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCLGNBQWMsa0RBQUs7O0FBRW5CO0FBQ0EsMENBQTBDLHdEQUFjO0FBQ3hEO0FBQ0EsSUFBSTtBQUNKOztBQUVBLG9CQUFvQiwyQ0FBTSxTQUFTLDJDQUFNO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRywyQ0FBTSxTQUFTLDJDQUFNO0FBQ3hCLElBQUk7QUFDSixHQUFHLDJDQUFNLFNBQVMsMkNBQU07QUFDeEI7QUFDQSxFQUFFLDJDQUFNO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJDQUFNLFNBQVMsMkNBQU07QUFDdEI7O0FBRUEscUJBQXFCLDJDQUFNLFdBQVcsMkNBQU07QUFDNUMsc0JBQXNCLDJDQUFNLFdBQVcsMkNBQU07QUFDN0MsMkNBQU0sU0FBUywyQ0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9kaWFsb2cuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9oZWFkZXItZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYXBwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZHJhZy1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3dlYi1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2cge1xuXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcblxuXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXI6IG5vbmU7XG5cblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogNHB4IDVweCAxMHB4ICMwMDAwMDA5OTtcblx0Zm9udC1zaXplOiAxLjNyZW07XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5ODA7XG59XG5cbmRpYWxvZyA+ICoge1xuXHRwYWRkaW5nOiBtaW4oNHZ3LCAxOHB4KTtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5kaWFsb2cgLmJ1dHRvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG59XG5cbmRpYWxvZyAuYnV0dG9ucyA+ICoge1xuXHRmbGV4OiAxO1xuXG5cdHBhZGRpbmc6IDZweDtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRGlzcGxheSBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmRpc3BsYXktbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpc3BsYXktbW9kZS1iZyk7XG59XG5cbi5kaXNwbGF5LW1vZGUtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmRpc3BsYXktY2xvc2UtYnRuIHtcblx0LS1idG4tZGltOiAzM3B4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGhlaWdodDogdmFyKC0tYnRuLWRpbSk7XG5cdHdpZHRoOiB2YXIoLS1idG4tZGltKTtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kaXNwbGF5LW1vZGUtYm9keSB7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXNwbGF5LXNpZGViYXIge1xuXHR3aWR0aDogNnB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5kaXNwbGF5LWRldGFpbHMge1xuXHRmbGV4OiAxO1xuXHRtYXJnaW46IDhweCAwO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuLmRpc3BsYXktaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMTBweDtcbn1cblxuLmRpc3BsYXktbGFiZWwge1xuXHR3aWR0aDogNzBweDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cblxuLmRpc3BsYXktdmFsdWUge1xuXHRmbGV4OiAxO1xufVxuXG4jZWRpdC1idG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuI2RlbGV0ZS1idG4ge1xuXHRjb2xvcjogdmFyKC0tZWRpdC1idG4tYmcpO1xuXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Rpc3BsYXkgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEVkaXQgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5lZGl0LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LW1vZGUtYmcpO1xuXHRjb2xvcjogdmFyKC0tc2F2ZS1idG4tYmcpO1xufVxuXG4uZWRpdC1tb2RlLWRldGFpbHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG59XG5cbi5mb3JtLXJvdyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xufVxuXG4uZm9ybS1pdGVtIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmbGV4OiAxO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogNnB4O1xufVxuXG4uZm9ybS1yb3cgcCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IHZhcigtLW1vZGFsLXNwYWNlcikgMCAwIDc2cHg7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZWRpdC1tb2RlIGxhYmVsIHtcblx0d2lkdGg6IDcwcHg7XG5cdHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG5cdGZsZXg6IDE7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHBhZGRpbmc6IDFweCA4cHg7XG5cdHdpZHRoOiAxMDBweDtcblxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zYXZlLWJ0bi1iZyk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblxuXHRmb250LWZhbWlseTogdW5zZXQ7XG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxudGV4dGFyZWEge1xuXHRyZXNpemU6IHZlcnRpY2FsO1xufVxuXG5mb3JtIC5mYS1jaGV2cm9uLWRvd24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiA0JTtcblx0dG9wOiAzNiU7XG5cblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDEwcHg7XG59XG5cbiNzYXZlLWJ0biB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2F2ZS1idG4tYmcpO1xufVxuXG4jY2FuY2VsLWJ0biB7XG5cdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0VkaXQgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFByb2plY3QgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5wcm9qZWN0LW1vZGUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxuXG4jcHJvamVjdC1zYXZlLWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtcHJvamVjdCk7XG5cdGNvbG9yOiBwaW5rO1xufVxuXG4jcHJvamVjdC1jYW5jZWwtYnRuIHtcblx0Y29sb3I6IHZhcigtLXRleHQtcHJvamVjdCk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtcHJvamVjdCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1Byb2plY3QgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG9CQUFvQjs7Q0FFcEIsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixZQUFZOztDQUVaLG1CQUFtQjtDQUNuQixrQ0FBa0M7Q0FDbEMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsT0FBTzs7Q0FFUCxZQUFZOztDQUVaLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtBQUMxQjs7QUFFQSx5REFBeUQ7O0FBRXpEO0NBQ0MsYUFBYTtDQUNiLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIscUJBQXFCOztDQUVyQixrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhOztDQUViLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw4QkFBOEI7QUFDL0I7O0FBRUEsMERBQTBEO0FBQzFELHNEQUFzRDs7QUFFdEQ7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsT0FBTzs7Q0FFUCxhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0MsV0FBVztDQUNYLG9DQUFvQztDQUNwQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTs7O0NBR0MsT0FBTztDQUNQLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsWUFBWTs7Q0FFWixvQ0FBb0M7Q0FDcEMsa0JBQWtCOztDQUVsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxRQUFROztDQUVSLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw4QkFBOEI7QUFDL0I7QUFDQSx1REFBdUQ7QUFDdkQseURBQXlEOztBQUV6RDtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxxQ0FBcUM7Q0FDckMsV0FBVztBQUNaOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLHFDQUFxQztBQUN0Qzs7QUFFQSwwREFBMERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG5cXHQtLW1vZGFsLXNwYWNlcjogMTJweDtcXG5cXG5cXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDVweCAxMHB4ICMwMDAwMDA5OTtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU5NTk1OTgwO1xcbn1cXG5cXG5kaWFsb2cgPiAqIHtcXG5cXHRwYWRkaW5nOiBtaW4oNHZ3LCAxOHB4KTtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGlhbG9nIC5idXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG59XFxuXFxuZGlhbG9nIC5idXR0b25zID4gKiB7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRwYWRkaW5nOiA2cHg7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpc3BsYXkgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmRpc3BsYXktbW9kZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXNwbGF5LW1vZGUtYmcpO1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlLWhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5kaXNwbGF5LWNsb3NlLWJ0biB7XFxuXFx0LS1idG4tZGltOiAzM3B4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IHZhcigtLWJ0bi1kaW0pO1xcblxcdHdpZHRoOiB2YXIoLS1idG4tZGltKTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kaXNwbGF5LW1vZGUtYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXktc2lkZWJhciB7XFxuXFx0d2lkdGg6IDZweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmRpc3BsYXktZGV0YWlscyB7XFxuXFx0ZmxleDogMTtcXG5cXHRtYXJnaW46IDhweCAwO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5kaXNwbGF5LWl0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1sYWJlbCB7XFxuXFx0d2lkdGg6IDcwcHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcbn1cXG5cXG4uZGlzcGxheS12YWx1ZSB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuI2VkaXQtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbn1cXG5cXG4jZGVsZXRlLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLWVkaXQtYnRuLWJnKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Rpc3BsYXkgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5lZGl0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1tb2RlLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tc2F2ZS1idG4tYmcpO1xcbn1cXG5cXG4uZWRpdC1tb2RlLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG4uZm9ybS1pdGVtIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogNnB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgcCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiB2YXIoLS1tb2RhbC1zcGFjZXIpIDAgMCA3NnB4O1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZWRpdC1tb2RlIGxhYmVsIHtcXG5cXHR3aWR0aDogNzBweDtcXG5cXHR0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0ZmxleDogMTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdHBhZGRpbmc6IDFweCA4cHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNhdmUtYnRuLWJnKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0Zm9udC1mYW1pbHk6IHVuc2V0O1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxudGV4dGFyZWEge1xcblxcdHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmZvcm0gLmZhLWNoZXZyb24tZG93biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiA0JTtcXG5cXHR0b3A6IDM2JTtcXG5cXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0tc2F2ZS1idG4tYmcpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFByb2plY3QgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3QtbW9kZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4jcHJvamVjdC1zYXZlLWJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG5cXHRjb2xvcjogcGluaztcXG59XFxuXFxuI3Byb2plY3QtY2FuY2VsLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtcHJvamVjdCk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0dmFyKC0taGVhZGVyLWJnLWxlZnQpLFxuXHRcdHZhcigtLWhlYWRlci1iZy1yaWdodClcblx0KTtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGJveC1zaGFkb3c6IDAgM3B4IDNweCAjMDAwMDAwNGU7XG59XG5cbmhlYWRlciBoMSB7XG5cdG1hcmdpbjogMTBweCAxOHB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtc2hhZG93OiAtM3B4IDNweCBibGFjaztcbn1cblxuI3NpZGViYXItb3Blbi1idG4ge1xuXHRtYXJnaW4tdG9wOiAtNnB4O1xuXHRwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdGhlYWRlciB7XG5cdFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNikgY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNikgMFxuXHRcdFx0MDtcblx0XHRib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0fVxuXG5cdCNzaWRlYmFyLW9wZW4tYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZhLmZhLWdpdGh1YiB7XG5cdGNvbG9yOiBjdXJyZW50Q29sb3I7XG5cdGZvbnQtc2l6ZTogMzBweDtcblxuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xuXHR9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjs7Q0FFbkI7Ozs7RUFJQztDQUNELHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0M7RUFDQztJQUNFO0VBQ0YsOEJBQThCO0VBQzlCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtDQUNDLFlBQVk7O0NBRVosYUFBYTtDQUNiLFFBQVE7Q0FDUix1QkFBdUI7Q0FDdkIsbUJBQW1COztDQUVuQixrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTs7Q0FFZjtFQUNDLHNDQUFzQztFQUN0QyxxQ0FBcUM7Q0FDdEM7QUFDRDtBQUNBLG9EQUFvRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuaGVhZGVyIHtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGhlaWdodDogNjBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCxcXG5cXHRcXHR2YXIoLS1oZWFkZXItYmctbGVmdCksXFxuXFx0XFx0dmFyKC0taGVhZGVyLWJnLXJpZ2h0KVxcblxcdCk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAzcHggIzAwMDAwMDRlO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcblxcdG1hcmdpbjogMTBweCAxOHB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHR0ZXh0LXNoYWRvdzogLTNweCAzcHggYmxhY2s7XFxufVxcblxcbiNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRtYXJnaW4tdG9wOiAtNnB4O1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIDBcXG5cXHRcXHRcXHQwO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG5cXHRcXHRib3gtc2hhZG93OiBub25lO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1vcGVuLWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mYS5mYS1naXRodWIge1xcblxcdGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XFxuXFx0fVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZsZXgtY29udGFpbmVyIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtY29udGVudCB7XG5cdC0tbWFpbi1zcGFjZXI6IDIwcHg7XG5cdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xuXG5cdGZsZXg6IDE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuZmxleC1jb250YWluZXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblxuXHQuYXBwLWNvbnRlbnQge1xuXHRcdC0tYXBwLWJkLXJhZDogMTBweDtcblxuXHRcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xuXHRcdG1pbi1oZWlnaHQ6IDgwdmg7XG5cdFx0ZmxleDogMCAwIGF1dG87XG5cblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcblxuXHRcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1iZC1yYWQpO1xuXHRcdGJveC1zaGFkb3c6IDhweCA2cHggYmxhY2s7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxubWFpbiB7XG5cdGZsZXg6IDE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogY2FsYyh2YXIoLS1tYWluLXNwYWNlcikgLyAyKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdC1kaXNwbGF5ZWQge1xuXHRmb250LXNpemU6IDEuOHJlbTtcbn1cblxuI3N0YXR1c2VzLWNvbnRhaW5lciB7XG5cdC0tc3RhdHVzLXNwYWNlcjogMTBweDtcblx0ZmxleDogMTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4uc3RhdHVzLXJvdyB7XG5cdGZsZXg6IGF1dG87XG5cdHdpZHRoOiBtaW4oNDgwcHgsIDEwMCUpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc3RhdHVzLWNvbHVtbiB7XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xuXHRtaW4td2lkdGg6IG1pbigyMzBweCwgMTAwJSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnN0YXR1cy1jb2x1bW4uZHJhZy1vdmVyIHtcblx0Ym9yZGVyLWNvbG9yOiBibGFjaztcblx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDI3OSwgMzMlLCA5MiUpO1xufVxuXG4uc3RhdHVzLW5hbWUge1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhc2stY2FyZCB7XG5cdC0tcHJpb3JpdHktd2lkdGg6IDE2cHg7XG5cdC0tc2lkZS1wYWQ6IDlweDtcblx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZSk7XG5cblx0bWluLWhlaWdodDogNjBweDtcblx0cGFkZGluZzogNHB4IHZhcigtLXNpZGUtcGFkKSA0cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyB2YXIoLS1zaWRlLXBhZCkpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXG5cdFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXG5cdCk7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym94LXNoYWRvdzogNnB4IDRweCBibGFjaztcblxuXHRmb250LXdlaWdodDogNTAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4udGFzay1jYXJkOmhvdmVyIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCk7XG5cdGJveC1zaGFkb3c6IDdweCA1cHggYmxhY2s7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaSk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cIm1lZGl1bVwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZCk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XG59XG5cbiNkb25lLWNvbHVtbiAudGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XG59XG5cbi5jYXJkLXNlY3Rpb24ge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNhcmQgLnRpdGxlIHtcblx0Zm9udC1zaXplOiAxLjRyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5cbi5jYXJkLWRlbGV0ZS1idG4ge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkLXNlY3Rpb246bGFzdC1jaGlsZCB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LW1lZCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7O0NBRXBCLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGtCQUFrQjs7RUFFbEIsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCOztFQUU3Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBLGlEQUFpRDs7QUFFakQ7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLHFDQUFxQzs7Q0FFckMsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixPQUFPOztDQUVQLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUEsMkRBQTJEOztBQUUzRDtDQUNDLE9BQU87Q0FDUCw2QkFBNkI7Q0FDN0IsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHlCQUF5Qjs7Q0FFekIsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixzQ0FBc0M7O0NBRXRDLGdCQUFnQjtDQUNoQiw4RUFBOEU7O0NBRTlFLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCOzs7O0VBSUM7O0NBRUQsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQix5QkFBeUI7O0NBRXpCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQSw0REFBNEQ7QUFDNUQsa0RBQWtEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGV4LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250ZW50IHtcXG5cXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xcblxcdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xcblxcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0LmZsZXgtY29udGFpbmVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQuYXBwLWNvbnRlbnQge1xcblxcdFxcdC0tYXBwLWJkLXJhZDogMTBweDtcXG5cXG5cXHRcXHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcXG5cXHRcXHRtaW4taGVpZ2h0OiA4MHZoO1xcblxcdFxcdGZsZXg6IDAgMCBhdXRvO1xcblxcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcblxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1iZC1yYWQpO1xcblxcdFxcdGJveC1zaGFkb3c6IDhweCA2cHggYmxhY2s7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpIC8gMik7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdC1kaXNwbGF5ZWQge1xcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcXG5cXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLnN0YXR1cy1yb3cge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zdGF0dXMtY29sdW1uIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3RhdHVzLWNvbHVtbi5kcmFnLW92ZXIge1xcblxcdGJvcmRlci1jb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDI3OSwgMzMlLCA5MiUpO1xcbn1cXG5cXG4uc3RhdHVzLW5hbWUge1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktd2lkdGg6IDE2cHg7XFxuXFx0LS1zaWRlLXBhZDogOXB4O1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUpO1xcblxcblxcdG1pbi1oZWlnaHQ6IDYwcHg7XFxuXFx0cGFkZGluZzogNHB4IHZhcigtLXNpZGUtcGFkKSA0cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyB2YXIoLS1zaWRlLXBhZCkpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0dmFyKC0tcHJpb3JpdHktY29sb3IpIHZhcigtLXByaW9yaXR5LXdpZHRoKSxcXG5cXHRcXHR0cmFuc3BhcmVudCB2YXIoLS1wcmlvcml0eS13aWR0aClcXG5cXHQpO1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3gtc2hhZG93OiA2cHggNHB4IGJsYWNrO1xcblxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcXG5cXHRib3gtc2hhZG93OiA3cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGkpO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1lZGl1bVxcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQpO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4jZG9uZS1jb2x1bW4gLnRhc2stY2FyZCB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jYXJkLXNlY3Rpb24ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY2FyZCAudGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS40cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDkwJTtcXG59XFxuXFxuLmNhcmQtZGVsZXRlLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC1zZWN0aW9uOmxhc3QtY2hpbGQge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LW1lZCk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlYmFyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAxMDBzdmg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5zaWRlYmFyLm9wZW4ge1xuXHR3aWR0aDogMTAwdnc7XG5cdHBhZGRpbmc6IDIwcHg7XG5cblx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5zaWRlYmFyID4gKiB7XG5cdG9wYWNpdHk6IDA7XG5cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uc2lkZWJhci5vcGVuID4gKiB7XG5cdG9wYWNpdHk6IDE7XG5cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbn1cblxuLmNsb3NlLWJ0biB7XG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFByb2plY3QgQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDMwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LWZpbHRlci1idG4ge1xuXHRmb250LXNpemU6IDEuNHJlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5wcm9qZWN0LWZpbHRlci1idG46aG92ZXIge1xuXHRjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcbn1cblxuLnByb2plY3QtZmlsdGVyLWJ0bi5zZWxlY3RlZCB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLnByb2plY3QtZGVsZXRlLWJ0biB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm90dG9tIEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uYm90dG9tLWJ1dHRvbnMge1xuXHRtYXJnaW4tdG9wOiBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDEycHg7XG59XG5cbi5oaWRkZW4tYnRuIHtcblx0ZGlzcGxheTogbm9uZTtcblx0cGFkZGluZzogNXB4O1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaGlkZGVuLWJ0bi5vcGVuIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRkZW4tYnRuOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xufVxuXG4ucmV2ZWFsLWJ0bnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZXZlYWwtYnRuIHtcblx0aGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0Zm9udC1zaXplOiA0MHB4O1xuXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4jYWRkLXJldmVhbC1idG4ub3BlbiB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuI3N0b3JhZ2UtcmV2ZWFsLWJ0biB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3N0b3JhZ2UtcmV2ZWFsLWJ0bi5vcGVuIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb3R0b20gQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuc2lkZWJhcixcblx0LnNpZGViYXIub3BlbiB7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0d2lkdGg6IHVuc2V0O1xuXHRcdGhlaWdodDogdW5zZXQ7XG5cdFx0cGFkZGluZzogMjBweCBtaW4oMjBweCwgNiUpO1xuXHRcdHotaW5kZXg6IHVuc2V0O1xuXG5cdFx0dHJhbnNpdGlvbjogbm9uZTtcblxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAwIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpO1xuXHR9XG5cblx0LnNpZGViYXIgPiAqLFxuXHQuc2lkZWJhci5vcGVuID4gKiB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCNzaWRlYmFyLWNsb3NlLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixRQUFRO0NBQ1IsY0FBYztDQUNkLGdCQUFnQjs7Q0FFaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTOztDQUVULGtDQUFrQztDQUNsQyx3QkFBd0I7O0NBRXhCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhOztDQUViLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFVBQVU7O0NBRVYsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsVUFBVTs7Q0FFVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQSw0REFBNEQ7O0FBRTVEO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBLDZEQUE2RDtBQUM3RCwyREFBMkQ7O0FBRTNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7O0NBRVosOEJBQThCO0NBQzlCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IscUJBQXFCOztDQUVyQixrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCLGVBQWU7O0NBRWYsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQSw0REFBNEQ7O0FBRTVEO0NBQ0M7O0VBRUMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7O0VBRWQsZ0JBQWdCOztFQUVoQixrREFBa0Q7Q0FDbkQ7O0NBRUE7O0VBRUMsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5zaWRlYmFyLm9wZW4ge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcblxcdG9wYWNpdHk6IDA7XFxuXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG5cXG4uc2lkZWJhci5vcGVuID4gKiB7XFxuXFx0b3BhY2l0eTogMTtcXG5cXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtZmlsdGVyLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAxLjRyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5wcm9qZWN0LWZpbHRlci1idG46aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4ucHJvamVjdC1maWx0ZXItYnRuLnNlbGVjdGVkIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm90dG9tIEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5ib3R0b20tYnV0dG9ucyB7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMnB4O1xcbn1cXG5cXG4uaGlkZGVuLWJ0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhpZGRlbi1idG4ub3BlbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oaWRkZW4tYnRuOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRjb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG59XFxuXFxuLnJldmVhbC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJldmVhbC1idG4ge1xcblxcdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbiNhZGQtcmV2ZWFsLWJ0bi5vcGVuIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNzdG9yYWdlLXJldmVhbC1idG4ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3N0b3JhZ2UtcmV2ZWFsLWJ0bi5vcGVuIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0JvdHRvbSBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuc2lkZWJhcixcXG5cXHQuc2lkZWJhci5vcGVuIHtcXG5cXHRcXHRwb3NpdGlvbjogaW5oZXJpdDtcXG5cXHRcXHR3aWR0aDogdW5zZXQ7XFxuXFx0XFx0aGVpZ2h0OiB1bnNldDtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IG1pbigyMHB4LCA2JSk7XFxuXFx0XFx0ei1pbmRleDogdW5zZXQ7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogbm9uZTtcXG5cXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMCBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KTtcXG5cXHR9XFxuXFxuXFx0LnNpZGViYXIgPiAqLFxcblxcdC5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1jbG9zZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItZm9vdGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdXNlLnR5cGVraXQubmV0L3BrZTNiYmYuY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG5cdGNvbG9yOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcblx0Y29sb3I6IHVuc2V0O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG5cdGZvbnQtZmFtaWx5OiB1bnNldDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuXHRmb250LXNpemU6IHVuc2V0O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290IHtcblx0LS1zYXZlLWJ0bi1iZzogIzAwNGI2Yjtcblx0LS1lZGl0LWJ0bi1iZzogIzQ3MzI2Mjtcblx0LS1oZWFkZXItYmctbGVmdDogaHNsKDIxMCwgNzAlLCA1MCUpO1xuXHQtLWhlYWRlci1iZy1yaWdodDogaHNsKDI2NiwgNTAlLCAzMCUpO1xuXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcblx0LS1lZGl0LW1vZGUtYmc6ICNlMGY2ZmY7XG5cblx0LS10ZXh0LWxpZ2h0OiAjZmJmY2ZmO1xuXHQtLXRleHQtbWVkOiAjNDA0MDQwO1xuXHQtLXRleHQtZGFyazogIzRmNDE2Mjtcblx0LS10ZXh0LXByb2plY3Q6ICM3NjBhMWM7XG5cblx0LS1wcmlvcml0eS1sb3c6ICM4N2JiZjI7XG5cdC0tcHJpb3JpdHktbWVkOiAjZmZjMDAwO1xuXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xuXHQtLXByaW9yaXR5LW5vbmU6ICNhNmE2YTY7XG5cblx0LS1mb290ZXItYmc6ICMyMjJhMzU7XG5cblx0LS1mb250LW1haW46IGZ1dHVyYS1wdDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0aHNsYSgxOTgsIDEwMCUsIDQxJSwgMC43NDUpLFxuXHRcdFx0aHNsYSgyNjYsIDMyJSwgNTAlLCAwLjc0NSlcblx0XHQpLFxuXHRcdG5vLXJlcGVhdCBjZW50ZXIvY292ZXJcblx0XHRcdHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjUvU3RvbmVzX1BvcnRvX0RTQ0YwNTcyLmpwZy8xMDI0cHgtU3RvbmVzX1BvcnRvX0RTQ0YwNTcyLmpwZyk7XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcblx0XHRcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQSxtREFBbUQ7O0FBRW5EOzs7Q0FHQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTs7O0NBR0MsZ0JBQWdCO0FBQ2pCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7QUFDbkU7Q0FDQyxzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLG9DQUFvQztDQUNwQyxxQ0FBcUM7Q0FDckMsMEJBQTBCO0NBQzFCLHVCQUF1Qjs7Q0FFdkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsdUJBQXVCOztDQUV2Qix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0Qix3QkFBd0I7O0NBRXhCLG9CQUFvQjs7Q0FFcEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7Ozs7OzRIQUsySDtDQUMzSDs7WUFFVztBQUNaOztBQUVBLG9FQUFvRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCguL21haW4uY3NzKTtcXG5AaW1wb3J0IHVybCguL3NpZGViYXIuY3NzKTtcXG5AaW1wb3J0IHVybCguL2RpYWxvZy5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vaGVhZGVyLWZvb3Rlci5jc3MpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9wa2UzYmJmLmNzc1xcXCIpO1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHVuc2V0O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdGZvbnQtZmFtaWx5OiB1bnNldDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG5cXHRmb250LXNpemU6IHVuc2V0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuOnJvb3Qge1xcblxcdC0tc2F2ZS1idG4tYmc6ICMwMDRiNmI7XFxuXFx0LS1lZGl0LWJ0bi1iZzogIzQ3MzI2MjtcXG5cXHQtLWhlYWRlci1iZy1sZWZ0OiBoc2woMjEwLCA3MCUsIDUwJSk7XFxuXFx0LS1oZWFkZXItYmctcmlnaHQ6IGhzbCgyNjYsIDUwJSwgMzAlKTtcXG5cXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcXG5cXHQtLWVkaXQtbW9kZS1iZzogI2UwZjZmZjtcXG5cXG5cXHQtLXRleHQtbGlnaHQ6ICNmYmZjZmY7XFxuXFx0LS10ZXh0LW1lZDogIzQwNDA0MDtcXG5cXHQtLXRleHQtZGFyazogIzRmNDE2MjtcXG5cXHQtLXRleHQtcHJvamVjdDogIzc2MGExYztcXG5cXG5cXHQtLXByaW9yaXR5LWxvdzogIzg3YmJmMjtcXG5cXHQtLXByaW9yaXR5LW1lZDogI2ZmYzAwMDtcXG5cXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xcblxcdC0tcHJpb3JpdHktbm9uZTogI2E2YTZhNjtcXG5cXG5cXHQtLWZvb3Rlci1iZzogIzIyMmEzNTtcXG5cXG5cXHQtLWZvbnQtbWFpbjogZnV0dXJhLXB0O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHRoc2xhKDE5OCwgMTAwJSwgNDElLCAwLjc0NSksXFxuXFx0XFx0XFx0aHNsYSgyNjYsIDMyJSwgNTAlLCAwLjc0NSlcXG5cXHRcXHQpLFxcblxcdFxcdG5vLXJlcGVhdCBjZW50ZXIvY292ZXJcXG5cXHRcXHRcXHR1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY1L1N0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcvMTAyNHB4LVN0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcpO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG5cXHRcXHRcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcblxcdFxcdHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3QgVGFza3MgPSAoKCkgPT4ge1xuXHRsZXQgX3Rhc2tMaXN0ID0gbmV3IFNldCgpO1xuXHRsZXQgX2lkQ291bnRlciA9IDE7XG5cblx0Y29uc3QgX2NvbHVtbk5hbWVzID0gW1wiYmFja2xvZ1wiLCBcInRvLWRvXCIsIFwiaW4tcHJvZ3Jlc3NcIiwgXCJkb25lXCJdO1xuXG5cdGxldCBfcHJvcGVydHlOYW1lcyA9IFtcblx0XHRcInRpdGxlXCIsXG5cdFx0XCJzdGF0dXNcIixcblx0XHRcInByb2plY3RcIixcblx0XHRcInByaW9yaXR5XCIsXG5cdFx0XCJub3Rlc1wiLFxuXHRcdFwiZHVlXCIsXG5cdFx0XCJ0YWdzXCIsXG5cdF07XG5cblx0bGV0IF9wcmlvcml0aWVzID0gW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXTtcblxuXHRmdW5jdGlvbiBfZGF0ZVNvcnQob3V0Z29pbmdUYXNrcykge1xuXHRcdHJldHVybiBvdXRnb2luZ1Rhc2tzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGNvbnN0IGRhdGVBID0gK2EuZ2V0UHJvcGVydGllcygpLmR1ZS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcblx0XHRcdGNvbnN0IGRhdGVCID0gK2IuZ2V0UHJvcGVydGllcygpLmR1ZS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcblx0XHRcdHJldHVybiAhZGF0ZUEgPyAxIDogZGF0ZUIgLSBkYXRlQTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9jb2x1bW5Tb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRyZXR1cm4gX2NvbHVtbk5hbWVzLm1hcCgoY29sdW1uTmFtZSkgPT4gW1xuXHRcdFx0Y29sdW1uTmFtZSxcblx0XHRcdF9kYXRlU29ydChcblx0XHRcdFx0b3V0Z29pbmdUYXNrcy5maWx0ZXIoXG5cdFx0XHRcdFx0KHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpLnN0YXR1cyA9PT0gY29sdW1uTmFtZVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdF0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gX3Rhc2tGYWN0b3J5KCkge1xuXHRcdGNvbnN0IF90YXNrID0ge307XG5cdFx0Y29uc3Qgc2V0UHJvcGVydHkgPSAoa2V5LCB2YWx1ZSkgPT4gKF90YXNrW2tleV0gPSB2YWx1ZSk7XG5cdFx0X3Byb3BlcnR5TmFtZXMuZm9yRWFjaCgocHJvcCkgPT4gc2V0UHJvcGVydHkocHJvcCwgXCJcIikpO1xuXHRcdGNvbnN0IGdldFByb3BlcnRpZXMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4geyAuLi5fdGFzayB9O1xuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldFByb3BlcnRpZXMsXG5cdFx0XHRzZXRQcm9wZXJ0eSxcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkVGFzayhpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0Y29uc3QgbmV3VGFzayA9IF90YXNrRmFjdG9yeSgpO1xuXHRcdG5ld1Rhc2suc2V0UHJvcGVydHkoXCJpZFwiLCBfaWRDb3VudGVyKyspO1xuXHRcdGlucHV0VmFsdWVzQXJyYXkuZm9yRWFjaCgocGFpcikgPT4ge1xuXHRcdFx0bmV3VGFzay5zZXRQcm9wZXJ0eShwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHR9KTtcblx0XHRfdGFza0xpc3QuYWRkKG5ld1Rhc2spO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVGFza3MoLi4ucmVtb3ZlSWRzKSB7XG5cdFx0Wy4uLl90YXNrTGlzdF0uZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0aWYgKHJlbW92ZUlkcy5pbmNsdWRlcyh0YXNrLmdldFByb3BlcnRpZXMoKS5pZCkpIHtcblx0XHRcdFx0X3Rhc2tMaXN0LmRlbGV0ZSh0YXNrKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVRhc2sodXBkYXRlSWQsIGlucHV0VmFsdWVzQXJyYXkpIHtcblx0XHRbLi4uX3Rhc2tMaXN0XS5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRpZiAodXBkYXRlSWQgPT09IHRhc2suZ2V0UHJvcGVydGllcygpLmlkKSB7XG5cdFx0XHRcdGlucHV0VmFsdWVzQXJyYXkuZm9yRWFjaCgocGFpcikgPT4ge1xuXHRcdFx0XHRcdHRhc2suc2V0UHJvcGVydHkocGFpclswXSwgcGFpclsxXSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcblx0XHRfdGFza0xpc3QuY2xlYXIoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRhc2tzQnkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gWy4uLl90YXNrTGlzdF0uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKVtwcm9wXSA9PT0gdmFsdWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U29ydGVkVGFza3NCeShwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBfY29sdW1uU29ydChcblx0XHRcdFsuLi5fdGFza0xpc3RdLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKClbcHJvcF0gPT09IHZhbHVlKVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBzdWJBZGRUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX1RBU0ssIGFkZFRhc2spO1xuXHRjb25zdCBzdWJSZW1vdmVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1RBU0ssIHJlbW92ZVRhc2tzKTtcblx0Y29uc3Qgc3ViVXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLlVQREFURV9UQVNLLCB1cGRhdGVUYXNrKTtcblx0Y29uc3Qgc3ViQ2xlYXJUYXNrcyA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkNMRUFSX0FMTCwgY2xlYXJUYXNrcyk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRBbGxUYXNrczogKCkgPT4gWy4uLl90YXNrTGlzdF0sXG5cdFx0Z2V0U29ydGVkVGFza3M6ICgpID0+IF9jb2x1bW5Tb3J0KFsuLi5fdGFza0xpc3RdKSxcblx0XHRnZXRUYXNrc0J5LFxuXHRcdGdldFNvcnRlZFRhc2tzQnksXG5cdFx0Z2V0Q29sdW1uTmFtZXM6ICgpID0+IF9jb2x1bW5OYW1lcyxcblx0XHRnZXRQcmlvcml0eU5hbWVzOiAoKSA9PiBfcHJpb3JpdGllcyxcblx0XHRnZXRQcm9wZXJ0eU5hbWVzOiAoKSA9PiBfcHJvcGVydHlOYW1lcyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG5cdGxldCBfcHJvamVjdExpc3QgPSBuZXcgU2V0KCk7XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0TmFtZSkge1xuXHRcdF9wcm9qZWN0TGlzdC5hZGQobmV3UHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHJlbW92ZU5hbWUpIHtcblx0XHRpZiAoX3Byb2plY3RMaXN0LmhhcyhyZW1vdmVOYW1lKSkge1xuXHRcdFx0Ly8gR2V0IHRhc2suaWQncyBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9qZWN0XG5cdFx0XHRjb25zdCByZW1vdmVJZHMgPSBUYXNrcy5nZXRUYXNrc0J5KFwicHJvamVjdFwiLCByZW1vdmVOYW1lKS5tYXAoXG5cdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKS5pZFxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCB0YXNrcyB3aXRoIHRob3NlIGlkJ3MgZnJvbSBfdGFza0xpc3Rcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5ERUxFVEVfVEFTSywgLi4ucmVtb3ZlSWRzKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3Rcblx0XHRcdF9wcm9qZWN0TGlzdC5kZWxldGUocmVtb3ZlTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xlYXJQcm9qZWN0cygpIHtcblx0XHRfcHJvamVjdExpc3QuY2xlYXIoKTtcblx0fVxuXG5cdGNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfUFJPSkVDVCwgYWRkUHJvamVjdCk7XG5cdGNvbnN0IHN1YlJlbW92ZVByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ERUxFVEVfUFJPSkVDVCwgcmVtb3ZlUHJvamVjdCk7XG5cdGNvbnN0IHN1YkNsZWFyUHJvamVjdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIGNsZWFyUHJvamVjdHMpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0UHJvamVjdHM6ICgpID0+IFsuLi5fcHJvamVjdExpc3RdLnNvcnQoKSxcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFkZERlZmF1bHRzKGFza1VzZXIpIHtcblx0Y29uc3QgcXVlc3Rpb24gPVxuXHRcdFwiRGVmYXVsdHMgcmVwbGFjZSBhbGwgdGFza3MgYW5kIHByb2plY3RzIHdpdGggYW4gZXhhbXBsZSBzZXQuIFxcblRoaXMgd2lsbCBlcmFzZSBhbnl0aGluZyB5b3UgaGF2ZSBzYXZlZC5cIjtcblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGFza1VzZXIgPyBjb25maXJtKHF1ZXN0aW9uKSA6IHRydWU7XG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkNMRUFSX0FMTCk7XG5cdFx0W1wiaG9tZVwiLCBcImZpbmFuY2VzXCIsIFwibGVhcm5pbmdcIl0uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9QUk9KRUNULCBwcm9qZWN0KTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IGRlZmF1bHRUYXNrcyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwicGF5IGJpbGxzXCIsXG5cdFx0XHRcdHN0YXR1czogXCJpbi1wcm9ncmVzc1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImZpbmFuY2VzXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcblx0XHRcdFx0bm90ZXM6IFwidGhlIHJlbnQgaXMgdG9vIGRhbW4gaGlnaFwiLFxuXHRcdFx0XHRkdWU6IFwiMjAyMy0xMS0wMVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiZ3JvY2VyaWVzXCIsXG5cdFx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRcdHRhZ3M6IFwic3RvcmVcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcImZpbGUgdGF4ZXNcIixcblx0XHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcInJlYWQgQ2hla2hvdlwiLFxuXHRcdFx0XHRzdGF0dXM6IFwiYmFja2xvZ1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImxlYXJuaW5nXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcImxvd1wiLFxuXHRcdFx0XHRkdWU6IFwiMjAyMy0xMS0wNVwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwicmVwbGFjZSBsaWdodGJ1bGJcIixcblx0XHRcdFx0c3RhdHVzOiBcInRvLWRvXCIsXG5cdFx0XHRcdHByb2plY3Q6IFwiaG9tZVwiLFxuXHRcdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdFx0bm90ZXM6IFwiYmF0aHJvb20gbGlnaHQgaXMgZmxpY2tlcmluZ1wiLFxuXHRcdFx0XHR0YWdzOiBcInN0b3JlXCIsXG5cdFx0XHR9LFxuXHRcdF0ubWFwKChpdGVtKSA9PiBPYmplY3QuZW50cmllcyhpdGVtKSk7XG5cblx0XHRkZWZhdWx0VGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9UQVNLLCBpdGVtKTtcblx0XHR9KTtcblx0fVxufVxuXG5jb25zdCBzdWJEZWZhdWx0cyA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9ERUZBVUxUUywgYWRkRGVmYXVsdHMpO1xuIiwiaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFN0YXR1cyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IEVWRU5UUywgUHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmxldCBkcmFnZ2VkVGFzayA9IHVuZGVmaW5lZDtcbmxldCBjb3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkRHJhZ0Ryb3AoY2FyZCkge1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcblx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kKTtcbn1cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcblx0ZHJhZ2dlZFRhc2sgPSB0aGlzO1xuXHR0aGlzLnN0eWxlLm9wYWNpdHkgPSBcIjAuNFwiO1xufVxuXG5mdW5jdGlvbiBkcmFnRW5kKGUpIHtcblx0ZHJhZ2dlZFRhc2sgPSB1bmRlZmluZWQ7XG5cdHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXHRjb3VudGVyID0gMDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGF0dXMtY29sdW1uXCIpLmZvckVhY2goKHN0YXR1cykgPT4ge1xuXHRcdHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhdHVzRHJvcCgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGF0dXMtY29sdW1uXCIpLmZvckVhY2goKHN0YXR1cykgPT4ge1xuXHRcdHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXIpO1xuXHRcdHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB1cGRhdGVTdGF0dXMpO1xuXHRcdHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIGRyYWdFbnRlcik7XG5cdFx0c3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZHJhZ0xlYXZlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkcmFnRW50ZXIoKSB7XG5cdGNvdW50ZXIrKztcblx0ZmluZFN0YXR1cyh0aGlzKS5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBkcmFnTGVhdmUoKSB7XG5cdGNvdW50ZXItLTtcblx0aWYgKGNvdW50ZXIgPT09IDApIHtcblx0XHRmaW5kU3RhdHVzKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdHVzKCkge1xuXHRjb25zdCBkcm9wQ29sdW1uID0gZmluZFN0YXR1cyh0aGlzKS5pZC5zbGljZSgwLCAtNyk7XG5cdGNvbnN0IGRyYWdnZWRJZCA9ICtkcmFnZ2VkVGFzay5kYXRhc2V0LnRhc2tJZDtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBkcmFnZ2VkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0dGFzay5zdGF0dXMgPSBkcm9wQ29sdW1uO1xuXG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5VUERBVEVfVEFTSywgZHJhZ2dlZElkLCBPYmplY3QuZW50cmllcyh0YXNrKSk7XG59XG5cbmNvbnN0IHN1YkRyYWdEcm9wID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX0RSQUdfRFJPUCwgYWRkRHJhZ0Ryb3ApO1xuY29uc3Qgc3ViU3RhdHVzRHJvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9TVEFUVVNfRFJPUCwgYWRkU3RhdHVzRHJvcCk7XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBET00gRmFjdG9yaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBlbEZhY3RvcnkodHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gPSBbXSkge1xuXHRyZXR1cm4geyB0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZhY3Rvcnkob2JqKSB7XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcztcblxuXHRmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChrZXkgIT09IFwiZGF0YXNldFwiKSB7XG5cdFx0XHRlbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTcGVjaWFsIGRpcmVjdGlvbnMgbmVlZGVkIHRvIHNldCBcImRhdGEtXCIgcHJvcGVydGllc1xuXHRcdFx0Zm9yIChjb25zdCBwcm9wIGluIGF0dHJpYnV0ZXNba2V5XSkge1xuXHRcdFx0XHRlbC5kYXRhc2V0W3Byb3BdID0gYXR0cmlidXRlc1trZXldW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9iai5jaGlsZHJlbj8uZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHQvLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsbHkgYWRkaW5nIGNoaWxkcmVuIHVwc3RyZWFtIGJ5XG5cdFx0Ly8gc2V0dGluZyBcIlwiIGFzIHRoZSBhbHRlcm5hdGl2ZSB0byBlbEZhY3RvcnkoKVxuXHRcdGlmICghIWNoaWxkKSB7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShjaGlsZCkpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBPdGhlciBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFza0lkKHRhcmdldCkge1xuXHRyZXR1cm4gKyh0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiaWQtYnViYmxlLW1hcmtlclwiKVxuXHRcdD8gdGFyZ2V0LmRhdGFzZXQudGFza0lkXG5cdFx0OiBmaW5kVGFza0lkKHRhcmdldC5wYXJlbnRFbGVtZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvamVjdE5hbWUodGFyZ2V0KSB7XG5cdHJldHVybiB0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwicHJvamVjdC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC5wcm9qZWN0RmlsdGVyXG5cdFx0OiBmaW5kUHJvamVjdE5hbWUodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFN0YXR1cyh0YXJnZXQpIHtcblx0cmV0dXJuIHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJzdGF0dXMtY29sdW1uXCIpXG5cdFx0PyB0YXJnZXRcblx0XHQ6IGZpbmRTdGF0dXModGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZpcnN0VXBwZXIoc3RyaW5nKSB7XG5cdHJldHVybiAhIXN0cmluZ1xuXHRcdD8gc3RyaW5nXG5cdFx0XHRcdC5zcGxpdChcIi1cIilcblx0XHRcdFx0Lm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcblx0XHRcdFx0LmpvaW4oXCIgXCIpXG5cdFx0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlzb0RhdGUpIHtcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke2lzb0RhdGV9VDEyOjAwOjAwLTA0OjAwYCk7XG5cdGNvbnN0IGRheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5cdGNvbnN0IG1vbnRocyA9IFtcblx0XHRcIkphblwiLFxuXHRcdFwiRmViXCIsXG5cdFx0XCJNYXJcIixcblx0XHRcIkFwclwiLFxuXHRcdFwiTWF5XCIsXG5cdFx0XCJKdW5lXCIsXG5cdFx0XCJKdWx5XCIsXG5cdFx0XCJBdWdcIixcblx0XHRcIlNlcHRcIixcblx0XHRcIk9jdFwiLFxuXHRcdFwiTm92XCIsXG5cdFx0XCJEZWNcIixcblx0XTtcblxuXHRyZXR1cm4gYCR7ZGF5c1tkYXRlLmdldERheSgpXX0sICR7ZGF0ZS5nZXREYXRlKCl9ICR7XG5cdFx0bW9udGhzW2RhdGUuZ2V0TW9udGgoKV1cblx0fSAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtYXREYXRlLCBodG1sRmFjdG9yeSwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5kaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcblx0ZGlhbG9nLnRleHRDb250ZW50ID0gXCJcIjtcbn0pO1xuXG5mdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktbW9kZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgaWQ9XCJkaXNwbGF5LXRpdGxlXCI+PC9oMz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuIGRpc3BsYXktY2xvc2UtYnRuXCI+w5c8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1ib2R5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktc2lkZWJhclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5Qcm9qZWN0OiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LXByb2plY3RcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+UHJpb3JpdHk6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktcHJpb3JpdHlcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+RHVlOiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LWR1ZVwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5TdGF0dXM6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktc3RhdHVzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPk5vdGVzOiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LW5vdGVzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPlRhZ3M6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktdGFnc1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiIGRhdGEtdGFzay1pZD1cIlwiPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZWRpdC1idG5cIj5FZGl0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUtYnRuXCI+RGVsZXRlPC9idXR0b24+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRgO1xuXHRkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShzZWxlY3RlZElkKSB7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXHRUYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGlzcGxheS0ke3Byb3B9YCk7XG5cdFx0bGV0IG91dHB1dCA9IHRhc2tbcHJvcF07XG5cblx0XHRpZiAocHJvcCA9PT0gXCJkdWVcIiAmJiAhIW91dHB1dCkge1xuXHRcdFx0b3V0cHV0ID0gZm9ybWF0RGF0ZShvdXRwdXQpO1xuXHRcdH1cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gcHJvcCA9PT0gXCJ0YWdzXCIgPyBvdXRwdXQgOiBtYWtlRmlyc3RVcHBlcihvdXRwdXQpO1xuXHR9KTtcblx0ZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaWQtYnViYmxlLW1hcmtlclwiKS5kYXRhc2V0LnRhc2tJZCA9IHNlbGVjdGVkSWQ7XG5cdGRpYWxvZ1xuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY2xvc2UtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cuY2xvc2UoKSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRWRpdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgPGZvcm0gY2xhc3M9XCJlZGl0LW1vZGVcIiBtZXRob2Q9XCJkaWFsb2dcIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtZGV0YWlsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJvamVjdFwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZHVlXCI+RHVlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwic3RhdHVzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkPjwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgcm93cz1cIjVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdDxwPlNlcGFyYXRlIHRhZ3Mgd2l0aCBjb21tYXMuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFnc1wiPlRhZ3M6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YWdzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIgZGF0YS10YXNrLWlkPVwiXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzYXZlLWJ0blwiPlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkRHJvcGRvd25zKCkge1xuXHRbXG5cdFx0W1wicHJvamVjdFwiLCBQcm9qZWN0cy5nZXRQcm9qZWN0cygpXSxcblx0XHRbXCJwcmlvcml0eVwiLCBUYXNrcy5nZXRQcmlvcml0eU5hbWVzKCldLFxuXHRcdFtcInN0YXR1c1wiLCBUYXNrcy5nZXRDb2x1bW5OYW1lcygpXSxcblx0XS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhaXJbMF0pO1xuXHRcdHBhaXJbMV0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IG9wdGlvbixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihvcHRpb24pLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm0oc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIHNlbGVjdGVkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0VGFza3MuZ2V0UHJvcGVydHlOYW1lcygpLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCk7XG5cblx0XHRzd2l0Y2ggKHByb3ApIHtcblx0XHRcdGNhc2UgXCJwcm9qZWN0XCI6XG5cdFx0XHRjYXNlIFwicHJpb3JpdHlcIjpcblx0XHRcdGNhc2UgXCJzdGF0dXNcIjpcblx0XHRcdFx0Wy4uLmVsZW1lbnQuY2hpbGRyZW5dLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PT0gdGFza1twcm9wXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInRpdGxlXCI6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSBtYWtlRmlyc3RVcHBlcih0YXNrW3Byb3BdKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJub3Rlc1wiOlxuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gbWFrZUZpcnN0VXBwZXIodGFza1twcm9wXSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gdGFza1twcm9wXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KTtcblx0ZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaWQtYnViYmxlLW1hcmtlclwiKS5kYXRhc2V0LnRhc2tJZCA9IHNlbGVjdGVkSWQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0PGZvcm0gY2xhc3M9XCJwcm9qZWN0LW1vZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cIm5ldy1wcm9qZWN0XCI+TmV3IFByb2plY3Q6PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctcHJvamVjdFwiIHJlcXVpcmVkLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwicHJvamVjdC1zYXZlLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInByb2plY3QtY2FuY2VsLWJ0blwiPlxuXHRcdFx0XHRcdENhbmNlbFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L2Zvcm0+YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5jb25zdCBzdWJEaXNwbGF5QnVpbGQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ESVNQTEFZX01PREUsIGJ1aWxkRGlzcGxheU1vZGUpO1xuY29uc3Qgc3ViRGlzcGxheVBvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRJU1BMQVlfTU9ERSwgcG9wdWxhdGVEaXNwbGF5KTtcblxuY29uc3Qgc3ViRWRpdEJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFLCBidWlsZEVkaXRNb2RlKTtcbmNvbnN0IHN1YkVkaXREcm9wZG93bnMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5FRElUX01PREUsIGFkZERyb3Bkb3ducyk7XG5jb25zdCBzdWJGb3JtUG9wID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFX1BPUCwgcG9wdWxhdGVGb3JtKTtcblxuY29uc3Qgc3ViUHJvamVjdEJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuUFJPSkVDVF9NT0RFLCBidWlsZFByb2plY3RNb2RlKTtcbiIsImV4cG9ydCBjb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZXZlbnRzTGlzdCA9IHt9O1xuXHQvLyB7IGtleTogXCJ0cmlnZ2VyRXZlbnRcIiwgdmFsdWU6IFsgYXJyYXkgb2YgZnVuY3Rpb25zIF0gfVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZSh0cmlnZ2VyRXZlbnQsIHN1YnNjcmliZXIpIHtcblx0XHRpZiAoIV9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0pIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0gPSBbc3Vic2NyaWJlcl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0ucHVzaChzdWJzY3JpYmVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVuc3Vic2NyaWJlOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZ1bmN0aW9uTGlzdCA9IF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG5cdFx0XHRcdGNvbnN0IGkgPSBmdW5jdGlvbkxpc3QuaW5kZXhPZihzdWJzY3JpYmVyKTtcblx0XHRcdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0XHRcdGZ1bmN0aW9uTGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1Ymxpc2godHJpZ2dlckV2ZW50LCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25MaXN0ID0gX2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShmdW5jdGlvbkxpc3QpKSB7XG5cdFx0XHRmdW5jdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuXHRcdFx0XHRzdWJzY3JpYmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3Vic2NyaWJlLCBwdWJsaXNoIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRVZFTlRTID0ge1xuXHRJTklUOiBcImluaXRcIixcblx0RElTUExBWV9NT0RFOiBcImRpc3BsYXlNb2RlXCIsXG5cdEVESVRfTU9ERTogXCJlZGl0TW9kZVwiLFxuXHRFRElUX01PREVfUE9QOiBcImVkaXRNb2RlUG9wXCIsXG5cdFBST0pFQ1RfTU9ERTogXCJwcm9qZWN0TW9kZVwiLFxuXHRERUxFVEVfVEFTSzogXCJkZWxldGVUYXNrXCIsXG5cdEFERF9UQVNLOiBcImFkZFRhc2tcIixcblx0VVBEQVRFX1RBU0s6IFwidXBkYXRlVGFza1wiLFxuXHRDQVJEX0NMSUNLOiBcImNhcmRDbGlja1wiLFxuXHRDQVJEX0RFTEVURTogXCJjYXJkRGVsZXRlXCIsXG5cdEFERF9QUk9KRUNUOiBcImFkZFByb2plY3RcIixcblx0REVMRVRFX1BST0pFQ1Q6IFwiZGVsZXRlUHJvamVjdFwiLFxuXHRBRERfREVGQVVMVFM6IFwiYWRkRGVmYXVsdHNcIixcblx0Q0xFQVJfQUxMOiBcImNsZWFyQWxsXCIsXG5cdEFERF9EUkFHX0RST1A6IFwiYWRkRHJhZ0Ryb3BcIixcblx0QUREX1NUQVRVU19EUk9QOiBcImFkZFN0YXR1c0Ryb3BcIixcbn07XG4iLCJpbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZGlhbG9nIH0gZnJvbSBcIi4vbW9kYWxzXCI7XG5pbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSwgbWFrZUZpcnN0VXBwZXIsIGZpbmRQcm9qZWN0TmFtZSB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3Qgc2lkZWJhck9wZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItb3Blbi1idG5cIik7XG5jb25zdCBzaWRlYmFyQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItY2xvc2UtYnRuXCIpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbnNpZGViYXJPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpKTtcbnNpZGViYXJDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKSk7XG5cbmNvbnN0IHByb2plY3REaXNwbGF5ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGlzcGxheWVkXCIpO1xuY29uc3Qgc3RhdHVzZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c2VzLWNvbnRhaW5lclwiKTtcblxuY29uc3QgQUxMX1RBU0tTID0gXCJhbGwtdGFza3NcIjtcbmNvbnN0IE5PX1BST0pFQ1QgPSBcInVuc29ydGVkXCI7XG5sZXQgY3VycmVudFByb2plY3QgPSBBTExfVEFTS1M7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpIHtcblx0aWYgKGN1cnJlbnRQcm9qZWN0ID09PSBBTExfVEFTS1MpIHtcblx0XHRwcm9qZWN0RGlzcGxheWVkLnRleHRDb250ZW50ID0gbWFrZUZpcnN0VXBwZXIoQUxMX1RBU0tTKTtcblx0XHR1cGRhdGVUYXNrQ29sdW1ucyhUYXNrcy5nZXRTb3J0ZWRUYXNrcygpKTtcblx0XHR1cGRhdGVTaWRlYmFyKCk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKGN1cnJlbnRQcm9qZWN0KTtcblx0XHR1cGRhdGVUYXNrQ29sdW1ucyhcblx0XHRcdFRhc2tzLmdldFNvcnRlZFRhc2tzQnkoXG5cdFx0XHRcdFwicHJvamVjdFwiLFxuXHRcdFx0XHRjdXJyZW50UHJvamVjdCA9PT0gTk9fUFJPSkVDVCA/IFwiXCIgOiBjdXJyZW50UHJvamVjdFxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dXBkYXRlU2lkZWJhcigpO1xuXHR9XG5cdGRpYWxvZy5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ29sdW1ucyhkaXNwbGF5VGFza3MpIHtcblx0Ly8gUmVzZXQgdGhlIGNvbHVtbnNcblx0Wy4uLnN0YXR1c2VzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChyb3cpID0+IChyb3cudGV4dENvbnRlbnQgPSBcIlwiKSk7XG5cblx0Ly8gQnVpbGQgY29sdW1uIGNvbnRlbnRcblx0ZGlzcGxheVRhc2tzLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBjb2x1bW5OYW1lID0gY29sdW1uWzBdO1xuXHRcdGNvbnN0IHN0YXR1c05hbWUgPSBtYWtlRmlyc3RVcHBlcihjb2x1bW5OYW1lKTtcblxuXHRcdGNvbnN0IGNvbHVtbkNvbnRlbnQgPSBlbEZhY3RvcnkoXG5cdFx0XHRcInNlY3Rpb25cIixcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NMaXN0OiBcInN0YXR1cy1jb2x1bW5cIixcblx0XHRcdFx0aWQ6IGAke2NvbHVtbk5hbWV9LWNvbHVtbmAsXG5cdFx0XHR9LFxuXHRcdFx0W1xuXHRcdFx0XHRlbEZhY3RvcnkoXCJoMlwiLCB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInN0YXR1cy1uYW1lXCIsXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHN0YXR1c05hbWUgKyBcIjpcIixcblx0XHRcdFx0fSksXG5cdFx0XHRdXG5cdFx0KTtcblxuXHRcdC8vIEJ1aWxkIHRhc2sgY2FyZHNcblx0XHRjb2x1bW5bMV0uZm9yRWFjaCgodGFza0NvbnRhaW5lcikgPT4ge1xuXHRcdFx0Y29uc3QgdGFzayA9IHRhc2tDb250YWluZXIuZ2V0UHJvcGVydGllcygpO1xuXG5cdFx0XHRjb2x1bW5Db250ZW50LmNoaWxkcmVuLnB1c2goXG5cdFx0XHRcdGVsRmFjdG9yeShcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ0YXNrLWNhcmQgaWQtYnViYmxlLW1hcmtlclwiLFxuXHRcdFx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZGF0YXNldDoge1xuXHRcdFx0XHRcdFx0XHRwcmlvcml0eTogdGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdFx0XHR0YXNrSWQ6IHRhc2suaWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImNhcmQtc2VjdGlvblwiIH0sIFtcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaDNcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJ0aXRsZVwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcih0YXNrLnRpdGxlKSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcblx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiY2FyZC1kZWxldGUtYnRuXCIsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJpXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImZhIGZhLXRyYXNoLW8gY2FyZC1kZWxldGUtYnRuXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBcImNhcmQtc2VjdGlvblwiIH0sIFtcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdFwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcih0YXNrLnByb2plY3QpLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiZGl2XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZHVlXCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IHRhc2suZHVlLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdC8vIEFwcGVuZCB0byBjb3JyZWN0IHJvd1xuXHRcdGlmIChpbmRleCA8IDIpIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvL01ha2UgZWFjaCBzdGF0dXMtY29sdW1uIGFibGUgdG8gcmVjZWl2ZSBkcmFnRHJvcHNcblx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9TVEFUVVNfRFJPUCk7XG5cblx0Ly8gTWFrZSBlYWNoIHRhc2sgY2xpY2thYmxlIGFuZCBkcmFnZ2FibGVcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIikuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfRFJBR19EUk9QLCBjYXJkKTtcblx0XHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNhcmQtZGVsZXRlLWJ0blwiKSkge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuQ0FSRF9ERUxFVEUsIGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkNBUkRfQ0xJQ0ssIGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2lkZWJhcigpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIikucmVtb3ZlKCk7XG5cdGNvbnN0IHJlcGxhY2VtZW50Q29udGFpbmVyID0gZWxGYWN0b3J5KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc0xpc3Q6IFwicHJvamVjdHMtY29udGFpbmVyXCIgfSxcblx0XHRbQUxMX1RBU0tTLCBOT19QUk9KRUNULCAuLi5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpXS5tYXAoKHByb2plY3QpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1uYW1lIHByb2plY3QtYnViYmxlLW1hcmtlclwiLFxuXHRcdFx0XHRcdGRhdGFzZXQ6IHsgcHJvamVjdEZpbHRlcjogcHJvamVjdCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIocHJvamVjdCksXG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1maWx0ZXItYnRuXCIsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0W0FMTF9UQVNLUywgTk9fUFJPSkVDVF0uaW5jbHVkZXMocHJvamVjdClcblx0XHRcdFx0XHRcdD8gXCJcIlxuXHRcdFx0XHRcdFx0OiBlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS10cmFzaFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImFyaWEtaGlkZGVuXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHQgICksXG5cdFx0XHRcdF1cblx0XHRcdCk7XG5cdFx0fSlcblx0KTtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tYnV0dG9uc1wiKVxuXHRcdC5iZWZvcmUoaHRtbEZhY3RvcnkocmVwbGFjZW1lbnRDb250YWluZXIpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWZpbHRlci1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaWx0ZXJQcm9qZWN0Vmlldyk7XG5cdFx0aWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gbWFrZUZpcnN0VXBwZXIoY3VycmVudFByb2plY3QpKSB7XG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXHRcdH1cblx0fSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZWxldGUtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdERlbGV0ZSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RGVsZXRlKGUpIHtcblx0Y29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKGUudGFyZ2V0KTtcblxuXHRjb25zdCB1c2VyQ29uZmlybWVkID0gY29uZmlybShcblx0XHRgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiR7bWFrZUZpcnN0VXBwZXIoXG5cdFx0XHRzZWxlY3RlZFByb2plY3Rcblx0XHQpfVwiIGFuZCBhbGwgaXRzIHRhc2tzPyBcXG5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLmBcblx0KTtcblxuXHRpZiAodXNlckNvbmZpcm1lZCkge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5ERUxFVEVfUFJPSkVDVCwgc2VsZWN0ZWRQcm9qZWN0KTtcblx0XHRjdXJyZW50UHJvamVjdCA9XG5cdFx0XHRzZWxlY3RlZFByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0ID8gQUxMX1RBU0tTIDogY3VycmVudFByb2plY3Q7XG5cdFx0dXBkYXRlU2NyZWVuKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyUHJvamVjdFZpZXcoZSkge1xuXHRjdXJyZW50UHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZShlLnRhcmdldCk7XG5cdHVwZGF0ZVNjcmVlbigpO1xuXHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xufVxuXG5jb25zdCBzdWJJbml0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuSU5JVCwgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViRGVsZXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRFTEVURV9UQVNLLCB1cGRhdGVTY3JlZW4pO1xuY29uc3Qgc3ViQWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9UQVNLLCB1cGRhdGVTY3JlZW4pO1xuY29uc3Qgc3ViVXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLlVQREFURV9UQVNLLCB1cGRhdGVTY3JlZW4pO1xuXG5jb25zdCBzdWJBZGRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX1BST0pFQ1QsIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkNsZWFyU2NyZWVuID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQ0xFQVJfQUxMLCB1cGRhdGVTY3JlZW4pO1xuIiwiaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IFByb2plY3RzLCBUYXNrcyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZnJvbSBNRE4gdG8gdGVzdCBpcyBzdG9yYWdlIGlzIGF2YWlsYWJsZSBvbiBvbGRlciBicm93c2Vycy5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuXHRsZXQgc3RvcmFnZTtcblx0dHJ5IHtcblx0XHRzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuXHRcdGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcblx0XHRzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG5cdFx0c3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcblx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcblx0XHRcdChlLmNvZGUgPT09IDIyIHx8XG5cdFx0XHRcdC8vIEZpcmVmb3hcblx0XHRcdFx0ZS5jb2RlID09PSAxMDE0IHx8XG5cdFx0XHRcdC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG5cdFx0XHRcdGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuXHRcdFx0XHQvLyBGaXJlZm94XG5cdFx0XHRcdGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuXHRcdFx0Ly8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcblx0XHRcdHN0b3JhZ2UgJiZcblx0XHRcdHN0b3JhZ2UubGVuZ3RoICE9PSAwXG5cdFx0KTtcblx0fVxufVxuXG5sZXQgc3RvcmFnZVR5cGU7XG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuXHRzdG9yYWdlVHlwZSA9IGxvY2FsU3RvcmFnZTtcbn0gZWxzZSBpZiAoc3RvcmFnZUF2YWlsYWJsZShcInNlc3Npb25TdG9yYWdlXCIpKSB7XG5cdHN0b3JhZ2VUeXBlID0gc2Vzc2lvblN0b3JhZ2U7XG59IGVsc2Uge1xuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuQUREX0RFRkFVTFRTLCBmYWxzZSk7XG59XG5cbmlmICghIXN0b3JhZ2VUeXBlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSkge1xuXHRnZXRTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNldFN0b3JhZ2UoKSB7XG5cdGNvbnN0IGFsbFRhc2tzID0gVGFza3MuZ2V0QWxsVGFza3MoKS5tYXAoKHRhc2spID0+IHtcblx0XHRjb25zdCB0YXNrTm9JZCA9IHRhc2suZ2V0UHJvcGVydGllcygpO1xuXHRcdGRlbGV0ZSB0YXNrTm9JZC5pZDtcblx0XHRyZXR1cm4gdGFza05vSWQ7XG5cdH0pO1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IFByb2plY3RzLmdldFByb2plY3RzKCk7XG5cblx0c3RvcmFnZVR5cGUuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG5cdHN0b3JhZ2VUeXBlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShbLi4uYWxsVGFza3NdKSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG5cdGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yYWdlVHlwZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuXHRjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFRhc2tzXCIpKS5tYXAoKGl0ZW0pID0+XG5cdFx0T2JqZWN0LmVudHJpZXMoaXRlbSlcblx0KTtcblxuXHRzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9QUk9KRUNULCBwcm9qZWN0KTtcblx0fSk7XG5cblx0c3RvcmVkVGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfVEFTSywgaXRlbSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG5cdHN0b3JhZ2VUeXBlLmNsZWFyKCk7XG59XG5cbmNvbnN0IHN1YlNldEFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfVEFTSywgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXREZWxldGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1RBU0ssIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0VXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLlVQREFURV9UQVNLLCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldEFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfUFJPSkVDVCwgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXREZWxldGVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1BST0pFQ1QsIHNldFN0b3JhZ2UpO1xuXG5jb25zdCBzdWJDbGVhclN0b3JhZ2UgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIGNsZWFyU3RvcmFnZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFRhc2tJZCwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tIFwiLi9tb2RhbHNcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi93ZWItc3RvcmFnZVwiO1xuaW1wb3J0IFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL2RyYWctZHJvcFwiO1xuXG5jb25zdCBCb3R0b21CdG5zID0gKCgpID0+IHtcblx0Y29uc3QgYWRkUmV2ZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcmV2ZWFsLWJ0blwiKTtcblx0Y29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuXCIpO1xuXHRjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cblx0Y29uc3Qgc3RvcmFnZVJldmVhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmFnZS1yZXZlYWwtYnRuXCIpO1xuXHRjb25zdCBkZWZhdWx0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdHMtYnRuXCIpO1xuXHRjb25zdCBjbGVhclN0b3JhZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyLXN0b3JhZ2UtYnRuXCIpO1xuXG5cdGFkZFJldmVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGFkZFJldmVhbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRhZGRUYXNrQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0aGlkZVN0b3JhZ2VCdG5zKCk7XG5cdH0pO1xuXG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kZSk7XG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0TW9kZSk7XG5cblx0c3RvcmFnZVJldmVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHN0b3JhZ2VSZXZlYWxCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0ZGVmYXVsdHNCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0Y2xlYXJTdG9yYWdlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGhpZGVBZGRCdG5zKCk7XG5cdH0pO1xuXG5cdGRlZmF1bHRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9ERUZBVUxUUywgdHJ1ZSk7XG5cdH0pO1xuXG5cdGNsZWFyU3RvcmFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdFx0XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCB0YXNrcyBBTkQgcHJvamVjdHM/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXCJcblx0XHQpO1xuXG5cdFx0aWYgKHVzZXJDb25maXJtZWQpIFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5DTEVBUl9BTEwpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBoaWRlQWRkQnRucygpIHtcblx0XHRhZGRSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0YWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGlkZVN0b3JhZ2VCdG5zKCkge1xuXHRcdHN0b3JhZ2VSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0ZGVmYXVsdHNCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0Y2xlYXJTdG9yYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkRGlzcGxheSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRJU1BMQVlfTU9ERSwgaGlkZUFkZEJ0bnMpO1xuXHRjb25zdCBzdWJBZGRFZGl0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFLCBoaWRlQWRkQnRucyk7XG5cdGNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5QUk9KRUNUX01PREUsIGhpZGVBZGRCdG5zKTtcblx0Y29uc3Qgc3ViU3RvckRlZmF1bHRzID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX0RFRkFVTFRTLCBoaWRlU3RvcmFnZUJ0bnMpO1xuXHRjb25zdCBzdWJTdG9yQ2xlYXJBbGwgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIGhpZGVTdG9yYWdlQnRucyk7XG5cdGNvbnN0IHN1YlN0b3JEaXNwbGF5ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRElTUExBWV9NT0RFLCBoaWRlU3RvcmFnZUJ0bnMpO1xuXG5cdHJldHVybiB7IGFkZFRhc2tCdG4gfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIG9wZW5EaXNwbGF5TW9kZShlKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5ESVNQTEFZX01PREUsIGZpbmRUYXNrSWQoZS50YXJnZXQpKTtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdE1vZGUpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tEZWxldGUpO1xufVxuXG5mdW5jdGlvbiBvcGVuRWRpdE1vZGUoZSkge1xuXHRpZiAoZS50YXJnZXQgIT09IEJvdHRvbUJ0bnMuYWRkVGFza0J0bikge1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKVxuXHRcdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdE1vZGUpO1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tEZWxldGUpO1xuXHR9XG5cblx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkVESVRfTU9ERSk7XG5cblx0aWYgKGUudGFyZ2V0LmlkID09PSBcImVkaXQtYnRuXCIpIHtcblx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuRURJVF9NT0RFX1BPUCwgZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXHR9XG5cblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVUYXNrU3VibWl0KTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrQ2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RNb2RlKCkge1xuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuUFJPSkVDVF9NT0RFKTtcblxuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kZVwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdENhbmNlbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tDYW5jZWwoZSkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXG5cdGlmIChmaW5kVGFza0lkKGUudGFyZ2V0KSkge1xuXHRcdG9wZW5EaXNwbGF5TW9kZShlKTtcblx0fSBlbHNlIHtcblx0XHRkaWFsb2cuY2xvc2UoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2FuY2VsKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdENhbmNlbCk7XG5cblx0ZGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tEZWxldGUoZSkge1xuXHRjb25zdCBzZWxlY3RlZElkID0gZmluZFRhc2tJZChlLnRhcmdldCk7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBcIiR7bWFrZUZpcnN0VXBwZXIoXG5cdFx0XHR0YXNrLnRpdGxlXG5cdFx0KX1cIiB0YXNrPyBcXG5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLmBcblx0KTtcblxuXHRpZiAodXNlckNvbmZpcm1lZCkgUHViU3ViLnB1Ymxpc2goRVZFTlRTLkRFTEVURV9UQVNLLCBzZWxlY3RlZElkKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzQXJyYXkoKSB7XG5cdGNvbnN0IHN1Ym1pdHRlZEluZm8gPSBbXTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWJtaXQtaW5mb1wiKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdGxldCBzdWJtaXRWYWx1ZSA9IHtcblx0XHRcdGlucHV0OiBlbC52YWx1ZSxcblx0XHRcdHNlbGVjdDogWy4uLmVsLmNoaWxkcmVuXS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkID09PSB0cnVlKVswXVxuXHRcdFx0XHQ/LnZhbHVlLFxuXHRcdFx0dGV4dGFyZWE6IGVsLnRleHRDb250ZW50LFxuXHRcdH1bZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcblx0XHRzdWJtaXR0ZWRJbmZvLnB1c2goW2VsLmlkLCBzdWJtaXRWYWx1ZV0pO1xuXHR9KTtcblx0cmV0dXJuIHN1Ym1pdHRlZEluZm87XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tTdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHN1Ym1pdElkID0gZmluZFRhc2tJZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnRuXCIpKTtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVUYXNrU3VibWl0KTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnRuXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrQ2FuY2VsKTtcblxuXHRjb25zdCB1c2VyQ29uZmlybWVkID0gY29uZmlybShcblx0XHRgUmVhZHkgdG8gc3VibWl0ICR7c3VibWl0SWQgPT09IDAgPyBcImEgbmV3IHRhc2tcIiA6IFwieW91ciBjaGFuZ2VzXCJ9P2Bcblx0KTtcblxuXHRpZiAodXNlckNvbmZpcm1lZCkge1xuXHRcdGNvbnN0IHZhbHVlc0FycmF5ID0gZ2V0VmFsdWVzQXJyYXkoKTtcblx0XHRpZiAoc3VibWl0SWQgPT09IDApIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfVEFTSywgdmFsdWVzQXJyYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuVVBEQVRFX1RBU0ssIHN1Ym1pdElkLCB2YWx1ZXNBcnJheSk7XG5cdFx0fVxuXHRcdGRpYWxvZy5jbG9zZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RTdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKS52YWx1ZTtcblx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9QUk9KRUNULCBuZXdQcm9qZWN0TmFtZSk7XG59XG5cbmNvbnN0IHN1YkNhcmRDbGljayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkNBUkRfQ0xJQ0ssIG9wZW5EaXNwbGF5TW9kZSk7XG5jb25zdCBzdWJDYXJkRGVsZXRlID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQ0FSRF9ERUxFVEUsIGhhbmRsZVRhc2tEZWxldGUpO1xuUHViU3ViLnB1Ymxpc2goRVZFTlRTLklOSVQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9