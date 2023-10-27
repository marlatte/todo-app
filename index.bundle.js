/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
	background-color: rgba(0, 0, 0, 0.4);
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
`, "",{"version":3,"sources":["webpack://./src/styles/dialog.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;;CAEpB,uBAAuB;CACvB,YAAY;CACZ,YAAY;;CAEZ,mBAAmB;CACnB,kCAAkC;CAClC,iBAAiB;AAClB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,uBAAuB;CACvB,wBAAwB;CACxB,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,OAAO;;CAEP,YAAY;;CAEZ,mBAAmB;CACnB,iBAAiB;CACjB,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA,yDAAyD;;AAEzD;CACC,aAAa;CACb,wCAAwC;AACzC;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,sBAAsB;CACtB,qBAAqB;;CAErB,kCAAkC;CAClC,wBAAwB;CACxB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,UAAU;CACV,kBAAkB;CAClB,sBAAsB;AACvB;;AAEA;CACC,OAAO;CACP,aAAa;;CAEb,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,oCAAoC;CACpC,wBAAwB;AACzB;;AAEA;CACC,yBAAyB;CACzB,8BAA8B;AAC/B;;AAEA,0DAA0D;AAC1D,sDAAsD;;AAEtD;CACC,aAAa;CACb,qCAAqC;CACrC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,OAAO;;CAEP,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,oCAAoC;CACpC,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,eAAe;AAChB;;AAEA;;;CAGC,OAAO;CACP,gBAAgB;CAChB,gBAAgB;CAChB,YAAY;;CAEZ,oCAAoC;CACpC,kBAAkB;;CAElB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,QAAQ;;CAER,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,wBAAwB;CACxB,oCAAoC;AACrC;;AAEA;CACC,yBAAyB;CACzB,8BAA8B;AAC/B;AACA,uDAAuD;AACvD,yDAAyD;;AAEzD;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,qCAAqC;CACrC,WAAW;AACZ;;AAEA;CACC,0BAA0B;CAC1B,qCAAqC;AACtC;;AAEA,0DAA0D","sourcesContent":["dialog {\n\t--modal-spacer: 12px;\n\n\twidth: min(88vw, 500px);\n\tmargin: auto;\n\tborder: none;\n\n\tborder-radius: 10px;\n\tbox-shadow: 4px 5px 10px #00000099;\n\tfont-size: 1.3rem;\n}\n\ndialog::backdrop {\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\ndialog > * {\n\tpadding: min(4vw, 18px);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\ndialog .buttons {\n\tdisplay: flex;\n\tgap: var(--modal-spacer);\n}\n\ndialog .buttons > * {\n\tflex: 1;\n\n\tpadding: 6px;\n\n\tborder-radius: 10px;\n\tfont-size: 1.6rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n}\n\n/* ---------------     Display Mode     --------------- */\n\n.display-mode {\n\tdisplay: flex;\n\tbackground-color: var(--display-mode-bg);\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 1.6rem;\n}\n\n.display-close-btn {\n\t--btn-dim: 33px;\n\talign-self: center;\n\theight: var(--btn-dim);\n\twidth: var(--btn-dim);\n\n\tbackground-color: var(--text-dark);\n\tcolor: var(--text-light);\n\tborder-radius: 20px;\n\tfont-weight: 500;\n}\n\n.display-mode-body {\n\tdisplay: flex;\n}\n\n.display-sidebar {\n\twidth: 6px;\n\tborder-radius: 5px;\n\tbackground-color: grey;\n}\n\n.display-details {\n\tflex: 1;\n\tmargin: 8px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.display-item {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.display-label {\n\twidth: 70px;\n\tpadding-left: 10px;\n\tcolor: var(--text-dark);\n}\n\n.display-value {\n\tflex: 1;\n}\n\n#edit-btn {\n\tbackground-color: var(--edit-btn-bg);\n\tcolor: var(--text-light);\n}\n\n#delete-btn {\n\tcolor: var(--edit-btn-bg);\n\tborder: 2px solid currentColor;\n}\n\n/* ---------------     /Display Mode     --------------- */\n/* ---------------     Edit Mode     --------------- */\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: var(--edit-mode-bg);\n\tcolor: var(--save-btn-bg);\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--modal-spacer);\n}\n\n.form-item {\n\tposition: relative;\n\tflex: 1;\n\n\tdisplay: flex;\n\tgap: 6px;\n}\n\n.form-row p {\n\twidth: 100%;\n\tmargin: var(--modal-spacer) 0 0 76px;\n\tfont-size: 1.2rem;\n}\n\n.edit-mode label {\n\twidth: 70px;\n\ttext-align: end;\n}\n\ninput,\nselect,\ntextarea {\n\tflex: 1;\n\tappearance: none;\n\tpadding: 1px 8px;\n\twidth: 100px;\n\n\tborder: 1px solid var(--save-btn-bg);\n\tborder-radius: 5px;\n\n\tfont-family: unset;\n\tfont-size: inherit;\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform .fa-chevron-down {\n\tposition: absolute;\n\tright: 4%;\n\ttop: 36%;\n\n\tcolor: black;\n\tfont-size: 10px;\n}\n\n#save-btn {\n\tcolor: var(--text-light);\n\tbackground-color: var(--save-btn-bg);\n}\n\n#cancel-btn {\n\tcolor: var(--save-btn-bg);\n\tborder: 2px solid currentColor;\n}\n/* ---------------     /Edit Mode     --------------- */\n/* ---------------     Project Mode     --------------- */\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n#project-save-btn {\n\tbackground-color: var(--text-project);\n\tcolor: pink;\n}\n\n#project-cancel-btn {\n\tcolor: var(--text-project);\n\tborder: 2px solid var(--text-project);\n}\n\n/* ---------------     /Project Mode     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_warnings_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./warnings.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/warnings.css");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_warnings_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAOA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,uBAAuB;CACvB,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;;;CAGC,gBAAgB;AACjB;;AAEA,oDAAoD;AACpD,mEAAmE;AACnE;CACC,sBAAsB;CACtB,sBAAsB;CACtB,oCAAoC;CACpC,qCAAqC;CACrC,0BAA0B;CAC1B,uBAAuB;;CAEvB,qBAAqB;CACrB,mBAAmB;CACnB,oBAAoB;CACpB,uBAAuB;;CAEvB,uBAAuB;CACvB,uBAAuB;CACvB,sBAAsB;CACtB,wBAAwB;;CAExB,oBAAoB;;CAEpB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB;;;;;4HAK2H;CAC3H;;YAEW;AACZ;;AAEA,oEAAoE","sourcesContent":["@import url(./main.css);\n@import url(./sidebar.css);\n@import url(./dialog.css);\n@import url(./header-footer.css);\n@import url(./warnings.css);\n@import url(\"https://use.typekit.net/pke3bbf.css\");\n\n/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\na {\n\tcolor: unset;\n}\n\nbutton {\n\tcolor: unset;\n\tbackground-color: unset;\n\tborder: none;\n\tfont-size: inherit;\n\tfont-family: unset;\n\tcursor: pointer;\n}\n\nh1,\nh2,\nh3 {\n\tfont-size: unset;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n:root {\n\t--save-btn-bg: #004b6b;\n\t--edit-btn-bg: #473262;\n\t--header-bg-left: hsl(210, 70%, 50%);\n\t--header-bg-right: hsl(266, 50%, 30%);\n\t--display-mode-bg: #eee0ff;\n\t--edit-mode-bg: #e0f6ff;\n\n\t--text-light: #fbfcff;\n\t--text-med: #404040;\n\t--text-dark: #4f4162;\n\t--text-project: #760a1c;\n\n\t--priority-low: #87bbf2;\n\t--priority-med: #ffc000;\n\t--priority-hi: #c00000;\n\t--priority-none: #a6a6a6;\n\n\t--footer-bg: #222a35;\n\n\t--font-main: futura-pt;\n}\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: linear-gradient(\n\t\t\thsla(198, 100%, 41%, 0.745),\n\t\t\thsla(266, 32%, 50%, 0.745)\n\t\t),\n\t\tno-repeat center/cover\n\t\t\turl(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stones_Porto_DSCF0572.jpg/1024px-Stones_Porto_DSCF0572.jpg);\n\tfont-family: var(--font-main), system-ui, -apple-system, BlinkMacSystemFont,\n\t\t\"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/warnings.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/warnings.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/* .swal-modal {
	padding: 20px;
} */
`, "",{"version":3,"sources":["webpack://./src/styles/warnings.css"],"names":[],"mappings":"AAAA;;GAEG","sourcesContent":["/* .swal-modal {\n\tpadding: 20px;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./src/app-controller.js":
/*!*******************************!*\
  !*** ./src/app-controller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

	const subAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.ADD, addTask);
	const subRemoveTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.DELETE, removeTasks);
	const subUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.UPDATE, updateTask);
	const subClearTasks = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.CLEAR_ALL, clearTasks);

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
			_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.DELETE, ...removeIds);

			// Remove name from project list
			_projectList.delete(removeName);
		}
	}

	function clearProjects() {
		_projectList.clear();
	}

	const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.ADD, addProject);
	const subRemoveProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.DELETE, removeProject);
	const subClearProjects = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.CLEAR_ALL, clearProjects);

	return {
		getProjects: () => [..._projectList].sort(),
	};
})();

function addDefaults() {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.CLEAR_ALL);
	["home", "finances", "learning"].forEach((project) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.ADD, project);
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
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.ADD, item);
	});
}

const subDefaults = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.ADD_DEFAULTS, addDefaults);


/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

function populateForm(task) {
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
	dialog.querySelector(".id-bubble-marker").dataset.taskId = task.id;
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

const subDisplayBuild = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.DISPLAY_MODE, buildDisplayMode);
const subDisplayPop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.DISPLAY_MODE, populateDisplay);

const subEditBuild = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.EDIT_MODE, buildEditMode);
const subEditDropdowns = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.EDIT_MODE, addDropdowns);
const subFormPop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.EDIT_MODE_POP, populateForm);

const subProjectBuild = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.PROJECT_MODE, buildProjectMode);


/***/ }),

/***/ "./src/drag-drop.js":
/*!**************************!*\
  !*** ./src/drag-drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

	_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.UPDATE, draggedId, Object.entries(task));
}

const subDragDrop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.ADD_DRAG_DROP, addDragDrop);
const subStatusDrop = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.ADD_STATUS_DROP, addStatusDrop);


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EV: () => (/* binding */ EV),
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

const EV = {
	INIT: "init",
	DIALOG: {
		DISPLAY_MODE: "displayMode",
		EDIT_MODE: "editMode",
		EDIT_MODE_POP: "editModePopulate",
		PROJECT_MODE: "projectMode",
	},
	TASK: {
		DELETE: "deleteTask",
		ADD: "addTask",
		UPDATE: "updateTask",
	},
	CARD: {
		CLICK: "cardClick",
		DELETE: "cardDelete",
	},
	PROJECT: {
		ADD: "addProject",
		DELETE: "deleteProject",
	},
	RESET: {
		ADD_DEFAULTS: "addDefaults",
		CLEAR_ALL: "clearAll",
	},
	WARN: {
		TASK_SUBMIT: "warnTaskSubmit",
		TASK_DELETE: "warnTaskDelete",
		PROJECT_DELETE: "warnProjectDelete",
		DEFAULTS: "warnDefaults",
		CLEAR_ALL: "warnClearAll",
	},
	ADD_DRAG_DROP: "addDragDrop",
	ADD_STATUS_DROP: "addStatusDrop",
};


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
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
	_dialog__WEBPACK_IMPORTED_MODULE_1__.dialog.close();
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
	_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.ADD_STATUS_DROP);

	// Make each task clickable and draggable
	document.querySelectorAll(".task-card").forEach((card) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.ADD_DRAG_DROP, card);
		card.addEventListener("click", (e) => {
			if (e.target.classList.value.includes("card-delete-btn")) {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.CARD.DELETE, e, false);
			} else {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.CARD.CLICK, e);
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
		button.addEventListener("click", (e) => {
			const selectedProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findProjectName)(e.target);
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.WARN.PROJECT_DELETE, selectedProject);
		});
	});
}

function resetCurrentProject(selectedProject) {
	currentProject = selectedProject === currentProject ? ALL_TASKS : currentProject;
}

function filterProjectView(e) {
	currentProject = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findProjectName)(e.target);
	updateScreen();
	sidebar.classList.remove("open");
}

const subResetProject = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.PROJECT.DELETE, resetCurrentProject);

const subInit = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.INIT, updateScreen);

const subDeleteTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.DELETE, updateScreen);
const subAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.ADD, updateScreen);
const subUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.UPDATE, updateScreen);

const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.PROJECT.ADD, updateScreen);
const subDeleteProject = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.PROJECT.DELETE, updateScreen);

const subClearScreen = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.RESET.CLEAR_ALL, updateScreen);


/***/ }),

/***/ "./src/warnings.js":
/*!*************************!*\
  !*** ./src/warnings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);





function warnTaskDelete(selectedId, taskTitle, reopenDialog) {
	sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
		title: "Are you sure?",
		text: `Once deleted, the "${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(
			taskTitle
		)}" task cannot be recovered.`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.DELETE, selectedId);
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "Poof! Task deleted!",
				text: "Way to get it done.",
				icon: "success",
				buttons: false,
				timer: 2000,
			});
		} else {
			if (reopenDialog) {
				const fakeEvent = {
					target: {
						classList: { value: "id-bubble-marker" },
						dataset: { taskId: selectedId },
					},
				};
				setTimeout(() => {
					_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.CARD.CLICK, fakeEvent);
				}, 60);
			} else {
				sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
					title: "Nevermind!",
					text: "We'll leave that one for now.",
					buttons: false,
					timer: 2000,
				});
			}
		}
	});
}

function warnProjectDelete(selectedProject) {
	sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
		title: "Are you sure?",
		text: `Deleting project "${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(
			selectedProject
		)}" will also permanently delete all its tasks.`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.PROJECT.DELETE, selectedProject);
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "Poof! Project deleted!",
				text: "Goodbye chores, hello freedom.",
				icon: "success",
				buttons: false,
				timer: 3000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "Nevermind!",
				text: "Plenty left to do, eh?",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnDefaults() {
	sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
		title: "Are you sure?",
		text: "Defaults replace all tasks and projects with an example set. \nThis will erase anything you have saved.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willRestoreDefaults) => {
		if (willRestoreDefaults) {
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.RESET.ADD_DEFAULTS);
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "Back to Basics!",
				text: "Play around - you can always click the button again.",
				icon: "success",
				buttons: false,
				timer: 3000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "Nevermind!",
				text: "Yeah, we didn't want to you to either.",
				buttons: false,
				timer: 2500,
			});
		}
	});
}

function warnClearAll() {
	sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
		title: "Are you sure?",
		text: "Deleting all tasks AND projects cannot be undone.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willClearAll) => {
		if (willClearAll) {
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.RESET.CLEAR_ALL);
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "WHOOSH!",
				text: "All gone.",
				icon: "success",
				buttons: false,
				timer: 2000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
				title: "Phew!",
				text: "That was a close one.",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnTaskSubmit(submitId, valuesArray) {
	sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
		title: "All set?",
		text: `Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willSubmit) => {
		if (willSubmit) {
			if (submitId === 0) {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.ADD, valuesArray);
			} else {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.TASK.UPDATE, submitId, valuesArray);
			}
		} else {
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.EDIT_MODE);
			const rebuiltTask = valuesArray.reduce(
				(acc, current) => {
					acc[current[0]] = current[1];
					return acc;
				},
				{ id: submitId }
			);
			_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.DIALOG.EDIT_MODE_POP, rebuiltTask);
		}
	});
}

const subWarnTask = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.WARN.TASK_DELETE, warnTaskDelete);
const subWarnProject = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.WARN.PROJECT_DELETE, warnProjectDelete);
const subWarnSubmit = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.WARN.TASK_SUBMIT, warnTaskSubmit);

const subWarnDefaults = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.WARN.DEFAULTS, warnDefaults);
const subWarnClearAll = _pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.WARN.CLEAR_ALL, warnClearAll);


/***/ }),

/***/ "./src/web-storage.js":
/*!****************************!*\
  !*** ./src/web-storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.ADD_DEFAULTS);
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
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.ADD, project);
	});

	storedTasks.forEach((item) => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.ADD, item);
	});
}

function clearStorage() {
	storageType.clear();
}

const subSetAddTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.ADD, setStorage);
const subSetDeleteTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.DELETE, setStorage);
const subSetUpdateTask = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.TASK.UPDATE, setStorage);
const subSetAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.ADD, setStorage);
const subSetDeleteProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.DELETE, setStorage);

const subClearStorage = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.CLEAR_ALL, clearStorage);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-controller */ "./src/app-controller.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-storage */ "./src/web-storage.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");
/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drag-drop */ "./src/drag-drop.js");
/* harmony import */ var _warnings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./warnings */ "./src/warnings.js");










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
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.WARN.DEFAULTS);
	});

	clearStorageBtn.addEventListener("click", () => {
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.WARN.CLEAR_ALL);
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

	const subAddDisplay = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.DISPLAY_MODE, hideAddBtns);
	const subAddEdit = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.EDIT_MODE, hideAddBtns);
	const subAddProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.PROJECT_MODE, hideAddBtns);
	const subStorDefaults = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.ADD_DEFAULTS, hideStorageBtns);
	const subStorClearAll = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.RESET.CLEAR_ALL, hideStorageBtns);
	const subStorDisplay = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.DISPLAY_MODE, hideStorageBtns);

	return { addTaskBtn };
})();

function openDisplayMode(e) {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.DISPLAY_MODE, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target));

	document.getElementById("edit-btn").addEventListener("click", openEditMode);
	document.getElementById("delete-btn").addEventListener("click", (e) => {
		handleTaskDelete(e, true);
	});
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

	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.EDIT_MODE);

	if (e.target.id === "edit-btn") {
		const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target))[0].getProperties();
		_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.EDIT_MODE_POP, task);
	}

	document
		.querySelector(".edit-mode")
		.addEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.addEventListener("click", handleTaskCancel);
}

function openProjectMode() {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.PROJECT_MODE);

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
		_dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
	}
}

function handleProjectCancel() {
	document
		.querySelector(".project-mode")
		.removeEventListener("submit", handleProjectSubmit);
	document
		.getElementById("project-cancel-btn")
		.removeEventListener("click", handleProjectCancel);

	_dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
}

function handleTaskDelete(e, reopenDialog) {
	const selectedId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target);
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", selectedId)[0].getProperties();
	_dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.WARN.TASK_DELETE, selectedId, task.title, reopenDialog);
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
	_dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
	const valuesArray = getValuesArray();
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.WARN.TASK_SUBMIT, submitId, valuesArray);
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.ADD, newProjectName);
}

const subCardClick = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.CARD.CLICK, openDisplayMode);
const subCardDelete = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.CARD.DELETE, handleTaskDelete);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.INIT);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyx3RkFBd0YsYUFBYSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyx3Q0FBd0MseUJBQXlCLDhCQUE4QixpQkFBaUIsaUJBQWlCLDBCQUEwQix1Q0FBdUMsc0JBQXNCLEdBQUcsc0JBQXNCLHlDQUF5QyxHQUFHLGdCQUFnQiw0QkFBNEIsNkJBQTZCLDJCQUEyQixHQUFHLHFCQUFxQixrQkFBa0IsNkJBQTZCLEdBQUcseUJBQXlCLFlBQVksbUJBQW1CLDBCQUEwQixzQkFBc0Isc0JBQXNCLDhCQUE4QixHQUFHLGlGQUFpRixrQkFBa0IsNkNBQTZDLEdBQUcsMEJBQTBCLGtCQUFrQixtQ0FBbUMsc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQix1QkFBdUIsMkJBQTJCLDBCQUEwQix5Q0FBeUMsNkJBQTZCLHdCQUF3QixxQkFBcUIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsc0JBQXNCLGVBQWUsdUJBQXVCLDJCQUEyQixHQUFHLHNCQUFzQixZQUFZLGtCQUFrQixvQkFBb0IsMkJBQTJCLGNBQWMsR0FBRyxtQkFBbUIsa0JBQWtCLGNBQWMsR0FBRyxvQkFBb0IsZ0JBQWdCLHVCQUF1Qiw0QkFBNEIsR0FBRyxvQkFBb0IsWUFBWSxHQUFHLGVBQWUseUNBQXlDLDZCQUE2QixHQUFHLGlCQUFpQiw4QkFBOEIsbUNBQW1DLEdBQUcsd0lBQXdJLGtCQUFrQiwwQ0FBMEMsOEJBQThCLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLEdBQUcsZUFBZSxrQkFBa0Isb0JBQW9CLDZCQUE2QixHQUFHLGdCQUFnQix1QkFBdUIsWUFBWSxvQkFBb0IsYUFBYSxHQUFHLGlCQUFpQixnQkFBZ0IseUNBQXlDLHNCQUFzQixHQUFHLHNCQUFzQixnQkFBZ0Isb0JBQW9CLEdBQUcsK0JBQStCLFlBQVkscUJBQXFCLHFCQUFxQixpQkFBaUIsMkNBQTJDLHVCQUF1Qix5QkFBeUIsdUJBQXVCLEdBQUcsY0FBYyxxQkFBcUIsR0FBRywyQkFBMkIsdUJBQXVCLGNBQWMsYUFBYSxtQkFBbUIsb0JBQW9CLEdBQUcsZUFBZSw2QkFBNkIseUNBQXlDLEdBQUcsaUJBQWlCLDhCQUE4QixtQ0FBbUMsR0FBRyx5SUFBeUksa0JBQWtCLDJCQUEyQixHQUFHLHVCQUF1QiwwQ0FBMEMsZ0JBQWdCLEdBQUcseUJBQXlCLCtCQUErQiwwQ0FBMEMsR0FBRyxvRkFBb0Y7QUFDajNKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE52QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVHQUF1RyxNQUFNLFlBQVksWUFBWSxVQUFVLFlBQVksY0FBYyxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sYUFBYSxjQUFjLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLGdHQUFnRyx3QkFBd0IsaUJBQWlCLG9CQUFvQixtQ0FBbUMsd0JBQXdCLHFIQUFxSCw2QkFBNkIsb0JBQW9CLG9DQUFvQyxHQUFHLGVBQWUsc0JBQXNCLHVCQUF1QixnQ0FBZ0MsR0FBRyx1QkFBdUIscUJBQXFCLHNCQUFzQixHQUFHLCtCQUErQixZQUFZLDRGQUE0RixxQ0FBcUMsdUJBQXVCLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLEdBQUcsNkhBQTZILGlCQUFpQixvQkFBb0IsYUFBYSw0QkFBNEIsd0JBQXdCLHlDQUF5Qyw2QkFBNkIsb0JBQW9CLEdBQUcsbUJBQW1CLHdCQUF3QixvQkFBb0IsZUFBZSw2Q0FBNkMsNENBQTRDLEtBQUssR0FBRyw0RUFBNEU7QUFDMTlEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUV2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLFNBQVMsTUFBTSxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksa0RBQWtELFlBQVksa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3Qix5QkFBeUIsY0FBYyx1QkFBdUIsa0JBQWtCLDJCQUEyQix3Q0FBd0MsR0FBRywrQkFBK0IscUJBQXFCLDBCQUEwQixLQUFLLG9CQUFvQix5QkFBeUIsK0NBQStDLHVCQUF1QixxQkFBcUIsc0JBQXNCLHFDQUFxQyxvQ0FBb0MsZ0NBQWdDLHVDQUF1QyxnQ0FBZ0MsS0FBSyxHQUFHLGdFQUFnRSxZQUFZLHVCQUF1QiwwQ0FBMEMsb0JBQW9CLDJCQUEyQixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyx5QkFBeUIsMEJBQTBCLFlBQVksb0JBQW9CLG9CQUFvQiw0QkFBNEIsR0FBRyxpQkFBaUIsZUFBZSw0QkFBNEIsb0JBQW9CLG9CQUFvQiw0QkFBNEIsR0FBRyxvRkFBb0YsWUFBWSxrQ0FBa0MsZ0NBQWdDLG9CQUFvQiwyQkFBMkIsOEJBQThCLDBCQUEwQixrQ0FBa0MsR0FBRyw4QkFBOEIsd0JBQXdCLHlDQUF5QyxHQUFHLGtCQUFrQixzQkFBc0IscUJBQXFCLEdBQUcsZ0JBQWdCLDJCQUEyQixvQkFBb0IsMkNBQTJDLHVCQUF1QixtRkFBbUYsb0JBQW9CLDJCQUEyQixzSkFBc0osOEJBQThCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLG9CQUFvQix5QkFBeUIsR0FBRyxzQkFBc0IscUNBQXFDLDhCQUE4QixHQUFHLHdDQUF3Qyx5Q0FBeUMsR0FBRywwQ0FBMEMsMENBQTBDLEdBQUcsdUNBQXVDLDBDQUEwQyxHQUFHLDZCQUE2Qiw0QkFBNEIsR0FBRyxtQkFBbUIsWUFBWSxrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IscUJBQXFCLHFCQUFxQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsMklBQTJJO0FBQ3o2STtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlGQUF5RixZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcs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QTtBQUNBO0FBQ0EsQ0FBQywyQ0FBTTtBQUNQO0FBQ0EsQ0FBQywyQ0FBTSxTQUFTLHVDQUFFO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTtBQUNsQjs7QUFFQSxxQkFBcUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUN4QyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6QywyQ0FBTSxTQUFTLHVDQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvd2FybmluZ3MuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZHJhZy1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2FybmluZ3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2ViLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG5cdC0tbW9kYWwtc3BhY2VyOiAxMnB4O1xuXG5cdHdpZHRoOiBtaW4oODh2dywgNTAwcHgpO1xuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlcjogbm9uZTtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzAwMDAwMDk5O1xuXHRmb250LXNpemU6IDEuM3JlbTtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuZGlhbG9nID4gKiB7XG5cdHBhZGRpbmc6IG1pbig0dncsIDE4cHgpO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmRpYWxvZyAuYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuZGlhbG9nIC5idXR0b25zID4gKiB7XG5cdGZsZXg6IDE7XG5cblx0cGFkZGluZzogNnB4O1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZGlzcGxheS1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1tb2RlLWJnKTtcbn1cblxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZGlzcGxheS1jbG9zZS1idG4ge1xuXHQtLWJ0bi1kaW06IDMzcHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0aGVpZ2h0OiB2YXIoLS1idG4tZGltKTtcblx0d2lkdGg6IHZhcigtLWJ0bi1kaW0pO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRpc3BsYXktbW9kZS1ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLmRpc3BsYXktc2lkZWJhciB7XG5cdHdpZHRoOiA2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmRpc3BsYXktZGV0YWlscyB7XG5cdGZsZXg6IDE7XG5cdG1hcmdpbjogOHB4IDA7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xufVxuXG4uZGlzcGxheS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxMHB4O1xufVxuXG4uZGlzcGxheS1sYWJlbCB7XG5cdHdpZHRoOiA3MHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuXG4uZGlzcGxheS12YWx1ZSB7XG5cdGZsZXg6IDE7XG59XG5cbiNlZGl0LWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnRuLWJnKTtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuXG4jZGVsZXRlLWJ0biB7XG5cdGNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlzcGxheSBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmVkaXQtbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtbW9kZS1iZyk7XG5cdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XG59XG5cbi5lZGl0LW1vZGUtZGV0YWlscyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLmZvcm0tcm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG59XG5cbi5mb3JtLWl0ZW0ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA2cHg7XG59XG5cbi5mb3JtLXJvdyBwIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogdmFyKC0tbW9kYWwtc3BhY2VyKSAwIDAgNzZweDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5lZGl0LW1vZGUgbGFiZWwge1xuXHR3aWR0aDogNzBweDtcblx0dGV4dC1hbGlnbjogZW5kO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcblx0ZmxleDogMTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0cGFkZGluZzogMXB4IDhweDtcblx0d2lkdGg6IDEwMHB4O1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNhdmUtYnRuLWJnKTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXG5cdGZvbnQtZmFtaWx5OiB1bnNldDtcblx0Zm9udC1zaXplOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZvcm0gLmZhLWNoZXZyb24tZG93biB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDQlO1xuXHR0b3A6IDM2JTtcblxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTBweDtcbn1cblxuI3NhdmUtYnRuIHtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XG59XG5cbiNjYW5jZWwtYnRuIHtcblx0Y29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcblx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnByb2plY3QtbW9kZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG5cbiNwcm9qZWN0LXNhdmUtYnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcblx0Y29sb3I6IHBpbms7XG59XG5cbiNwcm9qZWN0LWNhbmNlbC1idG4ge1xuXHRjb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1wcm9qZWN0KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msb0JBQW9COztDQUVwQix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLFlBQVk7O0NBRVosbUJBQW1CO0NBQ25CLGtDQUFrQztDQUNsQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxPQUFPOztDQUVQLFlBQVk7O0NBRVosbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIseUJBQXlCO0FBQzFCOztBQUVBLHlEQUF5RDs7QUFFekQ7Q0FDQyxhQUFhO0NBQ2Isd0NBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixxQkFBcUI7O0NBRXJCLGtDQUFrQztDQUNsQyx3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7O0NBRWIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDhCQUE4QjtBQUMvQjs7QUFFQSwwREFBMEQ7QUFDMUQsc0RBQXNEOztBQUV0RDtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPOztDQUVQLGFBQWE7Q0FDYixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsb0NBQW9DO0NBQ3BDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBOzs7Q0FHQyxPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixZQUFZOztDQUVaLG9DQUFvQztDQUNwQyxrQkFBa0I7O0NBRWxCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7O0NBRVIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDhCQUE4QjtBQUMvQjtBQUNBLHVEQUF1RDtBQUN2RCx5REFBeUQ7O0FBRXpEO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIscUNBQXFDO0FBQ3RDOztBQUVBLDBEQUEwRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2cge1xcblxcdC0tbW9kYWwtc3BhY2VyOiAxMnB4O1xcblxcblxcdHdpZHRoOiBtaW4oODh2dywgNTAwcHgpO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzAwMDAwMDk5O1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbmRpYWxvZyA+ICoge1xcblxcdHBhZGRpbmc6IG1pbig0dncsIDE4cHgpO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbnMgPiAqIHtcXG5cXHRmbGV4OiAxO1xcblxcblxcdHBhZGRpbmc6IDZweDtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRGlzcGxheSBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZGlzcGxheS1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpc3BsYXktbW9kZS1iZyk7XFxufVxcblxcbi5kaXNwbGF5LW1vZGUtaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmRpc3BsYXktY2xvc2UtYnRuIHtcXG5cXHQtLWJ0bi1kaW06IDMzcHg7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGhlaWdodDogdmFyKC0tYnRuLWRpbSk7XFxuXFx0d2lkdGg6IHZhcigtLWJ0bi1kaW0pO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRpc3BsYXktbW9kZS1ib2R5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheS1zaWRlYmFyIHtcXG5cXHR3aWR0aDogNnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZGlzcGxheS1kZXRhaWxzIHtcXG5cXHRmbGV4OiAxO1xcblxcdG1hcmdpbjogOHB4IDA7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLmRpc3BsYXktaXRlbSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi5kaXNwbGF5LWxhYmVsIHtcXG5cXHR3aWR0aDogNzBweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxufVxcblxcbi5kaXNwbGF5LXZhbHVlIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4jZWRpdC1idG4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnRuLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0tZWRpdC1idG4tYmcpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlzcGxheSBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEVkaXQgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmVkaXQtbW9kZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LW1vZGUtYmcpO1xcblxcdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XFxufVxcblxcbi5lZGl0LW1vZGUtZGV0YWlscyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA2cHg7XFxufVxcblxcbi5mb3JtLXJvdyBwIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IHZhcigtLW1vZGFsLXNwYWNlcikgMCAwIDc2cHg7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5lZGl0LW1vZGUgbGFiZWwge1xcblxcdHdpZHRoOiA3MHB4O1xcblxcdHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmbGV4OiAxO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0cGFkZGluZzogMXB4IDhweDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2F2ZS1idG4tYmcpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXHRmb250LWZhbWlseTogdW5zZXQ7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuZm9ybSAuZmEtY2hldnJvbi1kb3duIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDQlO1xcblxcdHRvcDogMzYlO1xcblxcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDEwcHg7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcXG59XFxuXFxuI2NhbmNlbC1idG4ge1xcblxcdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdC1tb2RlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbiNwcm9qZWN0LXNhdmUtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXByb2plY3QpO1xcblxcdGNvbG9yOiBwaW5rO1xcbn1cXG5cXG4jcHJvamVjdC1jYW5jZWwtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LXByb2plY3QpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHR2YXIoLS1oZWFkZXItYmctbGVmdCksXG5cdFx0dmFyKC0taGVhZGVyLWJnLXJpZ2h0KVxuXHQpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Ym94LXNoYWRvdzogMCAzcHggM3B4ICMwMDAwMDA0ZTtcbn1cblxuaGVhZGVyIGgxIHtcblx0bWFyZ2luOiAxMHB4IDE4cHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC1zaGFkb3c6IC0zcHggM3B4IGJsYWNrO1xufVxuXG4jc2lkZWJhci1vcGVuLWJ0biB7XG5cdG1hcmdpbi10b3A6IC02cHg7XG5cdHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0aGVhZGVyIHtcblx0XHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KSBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KSAwXG5cdFx0XHQwO1xuXHRcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHR9XG5cblx0I3NpZGViYXItb3Blbi1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA4cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZmEuZmEtZ2l0aHViIHtcblx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcblx0Zm9udC1zaXplOiAzMHB4O1xuXG5cdCY6aG92ZXIge1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XG5cdH1cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLWZvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDtDQUNDLG1CQUFtQjtDQUNuQixZQUFZOztDQUVaLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1COztDQUVuQjs7OztFQUlDO0NBQ0Qsd0JBQXdCO0NBQ3hCLGVBQWU7Q0FDZiwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQztFQUNDO0lBQ0U7RUFDRiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUEsb0RBQW9EOztBQUVwRCxtREFBbUQ7O0FBRW5EO0NBQ0MsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsUUFBUTtDQUNSLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLGtDQUFrQztDQUNsQyx3QkFBd0I7Q0FDeEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlOztDQUVmO0VBQ0Msc0NBQXNDO0VBQ3RDLHFDQUFxQztDQUN0QztBQUNEO0FBQ0Esb0RBQW9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oZWFkZXIge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0LFxcblxcdFxcdHZhcigtLWhlYWRlci1iZy1sZWZ0KSxcXG5cXHRcXHR2YXIoLS1oZWFkZXItYmctcmlnaHQpXFxuXFx0KTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDNweCAjMDAwMDAwNGU7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuXFx0bWFyZ2luOiAxMHB4IDE4cHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdHRleHQtc2hhZG93OiAtM3B4IDNweCBibGFjaztcXG59XFxuXFxuI3NpZGViYXItb3Blbi1idG4ge1xcblxcdG1hcmdpbi10b3A6IC02cHg7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNikgY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNikgMFxcblxcdFxcdFxcdDA7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcblxcdFxcdGJveC1zaGFkb3c6IG5vbmU7XFxuXFx0fVxcblxcblxcdCNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDhweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZhLmZhLWdpdGh1YiB7XFxuXFx0Y29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcXG5cXHR9XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZmxleC1jb250YWluZXIge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1jb250ZW50IHtcblx0LS1tYWluLXNwYWNlcjogMjBweDtcblx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XG5cblx0ZmxleDogMTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5mbGV4LWNvbnRhaW5lciB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXG5cdC5hcHAtY29udGVudCB7XG5cdFx0LS1hcHAtYmQtcmFkOiAxMHB4O1xuXG5cdFx0d2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gNDBweCksIDE0MDBweCk7XG5cdFx0bWluLWhlaWdodDogODB2aDtcblx0XHRmbGV4OiAwIDAgYXV0bztcblxuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xuXG5cdFx0Ym9yZGVyOiAzcHggc29saWQgYmxhY2s7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJkLXJhZCk7XG5cdFx0Ym94LXNoYWRvdzogOHB4IDZweCBibGFjaztcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5tYWluIHtcblx0ZmxleDogMTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSAvIDIpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNwcm9qZWN0LWRpc3BsYXllZCB7XG5cdGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcblx0LS1zdGF0dXMtc3BhY2VyOiAxMHB4O1xuXHRmbGV4OiAxO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbi5zdGF0dXMtcm93IHtcblx0ZmxleDogYXV0bztcblx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zdGF0dXMtY29sdW1uIHtcblx0ZmxleDogMTtcblx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XG5cdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uc3RhdHVzLWNvbHVtbi5kcmFnLW92ZXIge1xuXHRib3JkZXItY29sb3I6IGJsYWNrO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjc5LCAzMyUsIDkyJSk7XG59XG5cbi5zdGF0dXMtbmFtZSB7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS13aWR0aDogMTZweDtcblx0LS1zaWRlLXBhZDogOXB4O1xuXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1ub25lKTtcblxuXHRtaW4taGVpZ2h0OiA2MHB4O1xuXHRwYWRkaW5nOiA0cHggdmFyKC0tc2lkZS1wYWQpIDRweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIHZhcigtLXNpZGUtcGFkKSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0dmFyKC0tcHJpb3JpdHktY29sb3IpIHZhcigtLXByaW9yaXR5LXdpZHRoKSxcblx0XHR0cmFuc3BhcmVudCB2YXIoLS1wcmlvcml0eS13aWR0aClcblx0KTtcblxuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3gtc2hhZG93OiA2cHggNHB4IGJsYWNrO1xuXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi50YXNrLWNhcmQ6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcblx0Ym94LXNoYWRvdzogN3B4IDVweCBibGFjaztcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwiaGlnaFwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWhpKTtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkKTtcbn1cblxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVwibG93XCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcbn1cblxuI2RvbmUtY29sdW1uIC50YXNrLWNhcmQge1xuXHQtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcbn1cblxuLmNhcmQtc2VjdGlvbiB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stY2FyZCAudGl0bGUge1xuXHRmb250LXNpemU6IDEuNHJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bGluZS1oZWlnaHQ6IDkwJTtcbn1cblxuLmNhcmQtZGVsZXRlLWJ0biB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmQtc2VjdGlvbjpsYXN0LWNoaWxkIHtcblx0Y29sb3I6IHZhcigtLXRleHQtbWVkKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLG9CQUFvQjs7Q0FFcEIsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0Msa0JBQWtCOztFQUVsQixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7O0VBRTdCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0NBQzFCO0FBQ0Q7O0FBRUEsaURBQWlEOztBQUVqRDtDQUNDLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIscUNBQXFDOztDQUVyQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLE9BQU87O0NBRVAsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsdUJBQXVCOztDQUV2QixhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtBQUN4Qjs7QUFFQSwyREFBMkQ7O0FBRTNEO0NBQ0MsT0FBTztDQUNQLDZCQUE2QjtDQUM3QiwyQkFBMkI7O0NBRTNCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIseUJBQXlCOztDQUV6QixtQkFBbUI7Q0FDbkIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLHNDQUFzQzs7Q0FFdEMsZ0JBQWdCO0NBQ2hCLDhFQUE4RTs7Q0FFOUUsYUFBYTtDQUNiLHNCQUFzQjs7Q0FFdEI7Ozs7RUFJQzs7Q0FFRCx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLHlCQUF5Qjs7Q0FFekIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBLDREQUE0RDtBQUM1RCxrREFBa0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZsZXgtY29udGFpbmVyIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRlbnQge1xcblxcdC0tbWFpbi1zcGFjZXI6IDIwcHg7XFxuXFx0LS1hZGQtYnRuLWRpbXM6IDUwcHg7XFxuXFxuXFx0ZmxleDogMTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuZmxleC1jb250YWluZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcblxcblxcdC5hcHAtY29udGVudCB7XFxuXFx0XFx0LS1hcHAtYmQtcmFkOiAxMHB4O1xcblxcblxcdFxcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xcblxcdFxcdG1pbi1oZWlnaHQ6IDgwdmg7XFxuXFx0XFx0ZmxleDogMCAwIGF1dG87XFxuXFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuXFxuXFx0XFx0Ym9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJkLXJhZCk7XFxuXFx0XFx0Ym94LXNoYWRvdzogOHB4IDZweCBibGFjaztcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxubWFpbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYWluLXNwYWNlcikgLyAyKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0LWRpc3BsYXllZCB7XFxuXFx0Zm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbiNzdGF0dXNlcy1jb250YWluZXIge1xcblxcdC0tc3RhdHVzLXNwYWNlcjogMTBweDtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4uc3RhdHVzLXJvdyB7XFxuXFx0ZmxleDogYXV0bztcXG5cXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnN0YXR1cy1jb2x1bW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XFxuXFx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zdGF0dXMtY29sdW1uLmRyYWctb3ZlciB7XFxuXFx0Ym9yZGVyLWNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjc5LCAzMyUsIDkyJSk7XFxufVxcblxcbi5zdGF0dXMtbmFtZSB7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuXFx0LS1wcmlvcml0eS13aWR0aDogMTZweDtcXG5cXHQtLXNpZGUtcGFkOiA5cHg7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZSk7XFxuXFxuXFx0bWluLWhlaWdodDogNjBweDtcXG5cXHRwYWRkaW5nOiA0cHggdmFyKC0tc2lkZS1wYWQpIDRweCBjYWxjKHZhcigtLXByaW9yaXR5LXdpZHRoKSArIHZhcigtLXNpZGUtcGFkKSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCxcXG5cXHRcXHR2YXIoLS1wcmlvcml0eS1jb2xvcikgdmFyKC0tcHJpb3JpdHktd2lkdGgpLFxcblxcdFxcdHRyYW5zcGFyZW50IHZhcigtLXByaW9yaXR5LXdpZHRoKVxcblxcdCk7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDZweCA0cHggYmxhY2s7XFxuXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi50YXNrLWNhcmQ6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xcblxcdGJveC1zaGFkb3c6IDdweCA1cHggYmxhY2s7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaSk7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWVkaXVtXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZCk7XFxufVxcblxcbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbiNkb25lLWNvbHVtbiAudGFzay1jYXJkIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNhcmQtc2VjdGlvbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jYXJkIC50aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjRyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5cXG4uY2FyZC1kZWxldGUtYnRuIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jYXJkLXNlY3Rpb246bGFzdC1jaGlsZCB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbWVkKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNpZGViYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDEwMHN2aDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXG5cdHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLnNpZGViYXIub3BlbiB7XG5cdHdpZHRoOiAxMDB2dztcblx0cGFkZGluZzogMjBweDtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnNpZGViYXIgPiAqIHtcblx0b3BhY2l0eTogMDtcblxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5zaWRlYmFyLm9wZW4gPiAqIHtcblx0b3BhY2l0eTogMTtcblxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xufVxuXG4uY2xvc2UtYnRuIHtcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2plY3QtZmlsdGVyLWJ0biB7XG5cdGZvbnQtc2l6ZTogMS40cmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnByb2plY3QtZmlsdGVyLWJ0bjpob3ZlciB7XG5cdGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3cpO1xufVxuXG4ucHJvamVjdC1maWx0ZXItYnRuLnNlbGVjdGVkIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xufVxuXG4ucHJvamVjdC1kZWxldGUtYnRuIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBCb3R0b20gQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5ib3R0b20tYnV0dG9ucyB7XG5cdG1hcmdpbi10b3A6IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTJweDtcbn1cblxuLmhpZGRlbi1idG4ge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwYWRkaW5nOiA1cHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oaWRkZW4tYnRuLm9wZW4ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmhpZGRlbi1idG46aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0Y29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG59XG5cbi5yZXZlYWwtYnRucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJldmVhbC1idG4ge1xuXHRoZWlnaHQ6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdHdpZHRoOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cblx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xuXHRmb250LXNpemU6IDQwcHg7XG5cblx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbiNhZGQtcmV2ZWFsLWJ0bi5vcGVuIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jc3RvcmFnZS1yZXZlYWwtYnRuIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4jc3RvcmFnZS1yZXZlYWwtYnRuLm9wZW4ge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0JvdHRvbSBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5zaWRlYmFyLFxuXHQuc2lkZWJhci5vcGVuIHtcblx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0aGVpZ2h0OiB1bnNldDtcblx0XHRwYWRkaW5nOiAyMHB4IG1pbigyMHB4LCA2JSk7XG5cdFx0ei1pbmRleDogdW5zZXQ7XG5cblx0XHR0cmFuc2l0aW9uOiBub25lO1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDAgY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNik7XG5cdH1cblxuXHQuc2lkZWJhciA+ICosXG5cdC5zaWRlYmFyLm9wZW4gPiAqIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0I3NpZGViYXItY2xvc2UtYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FDUixjQUFjO0NBQ2QsZ0JBQWdCOztDQUVoQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7O0NBRVQsa0NBQWtDO0NBQ2xDLHdCQUF3Qjs7Q0FFeEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7O0NBRWIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTs7Q0FFVix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxVQUFVOztDQUVWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBLDREQUE0RDs7QUFFNUQ7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUEsNkRBQTZEO0FBQzdELDJEQUEyRDs7QUFFM0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTs7Q0FFWiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixxQkFBcUI7O0NBRXJCLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsZUFBZTs7Q0FFZixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBLDREQUE0RDs7QUFFNUQ7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsY0FBYzs7RUFFZCxnQkFBZ0I7O0VBRWhCLGtEQUFrRDtDQUNuRDs7Q0FFQTs7RUFFQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2lkZWJhciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAxMDBzdmg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAyMHB4O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuXFxuLnNpZGViYXIub3BlbiB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi5zaWRlYmFyID4gKiB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxufVxcblxcbi5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXHRsaW5lLWhlaWdodDogMjJweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBQcm9qZWN0IEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1maWx0ZXItYnRuIHtcXG5cXHRmb250LXNpemU6IDEuNHJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLnByb2plY3QtZmlsdGVyLWJ0bjpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi5wcm9qZWN0LWZpbHRlci1idG4uc2VsZWN0ZWQge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1Byb2plY3QgQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBCb3R0b20gQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmJvdHRvbS1idXR0b25zIHtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEycHg7XFxufVxcblxcbi5oaWRkZW4tYnRuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGlkZGVuLWJ0bi5vcGVuIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhpZGRlbi1idG46aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcbn1cXG5cXG4ucmV2ZWFsLWJ0bnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucmV2ZWFsLWJ0biB7XFxuXFx0aGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdHdpZHRoOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuXFxuI2FkZC1yZXZlYWwtYnRuLm9wZW4ge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuI3N0b3JhZ2UtcmV2ZWFsLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc3RvcmFnZS1yZXZlYWwtYnRuLm9wZW4ge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQm90dG9tIEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5zaWRlYmFyLFxcblxcdC5zaWRlYmFyLm9wZW4ge1xcblxcdFxcdHBvc2l0aW9uOiBpbmhlcml0O1xcblxcdFxcdHdpZHRoOiB1bnNldDtcXG5cXHRcXHRoZWlnaHQ6IHVuc2V0O1xcblxcdFxcdHBhZGRpbmc6IDIwcHggbWluKDIwcHgsIDYlKTtcXG5cXHRcXHR6LWluZGV4OiB1bnNldDtcXG5cXG5cXHRcXHR0cmFuc2l0aW9uOiBub25lO1xcblxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCAwIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpO1xcblxcdH1cXG5cXG5cXHQuc2lkZWJhciA+ICosXFxuXFx0LnNpZGViYXIub3BlbiA+ICoge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdCNzaWRlYmFyLWNsb3NlLWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci1mb290ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2FybmluZ3MuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvcGtlM2JiZi5jc3MpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcblx0Y29sb3I6IHVuc2V0O1xufVxuXG5idXR0b24ge1xuXHRjb2xvcjogdW5zZXQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuXHRib3JkZXI6IG5vbmU7XG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcblx0Zm9udC1mYW1pbHk6IHVuc2V0O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG5cdGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuOnJvb3Qge1xuXHQtLXNhdmUtYnRuLWJnOiAjMDA0YjZiO1xuXHQtLWVkaXQtYnRuLWJnOiAjNDczMjYyO1xuXHQtLWhlYWRlci1iZy1sZWZ0OiBoc2woMjEwLCA3MCUsIDUwJSk7XG5cdC0taGVhZGVyLWJnLXJpZ2h0OiBoc2woMjY2LCA1MCUsIDMwJSk7XG5cdC0tZGlzcGxheS1tb2RlLWJnOiAjZWVlMGZmO1xuXHQtLWVkaXQtbW9kZS1iZzogI2UwZjZmZjtcblxuXHQtLXRleHQtbGlnaHQ6ICNmYmZjZmY7XG5cdC0tdGV4dC1tZWQ6ICM0MDQwNDA7XG5cdC0tdGV4dC1kYXJrOiAjNGY0MTYyO1xuXHQtLXRleHQtcHJvamVjdDogIzc2MGExYztcblxuXHQtLXByaW9yaXR5LWxvdzogIzg3YmJmMjtcblx0LS1wcmlvcml0eS1tZWQ6ICNmZmMwMDA7XG5cdC0tcHJpb3JpdHktaGk6ICNjMDAwMDA7XG5cdC0tcHJpb3JpdHktbm9uZTogI2E2YTZhNjtcblxuXHQtLWZvb3Rlci1iZzogIzIyMmEzNTtcblxuXHQtLWZvbnQtbWFpbjogZnV0dXJhLXB0O1xufVxuXG5ib2R5IHtcblx0bWluLWhlaWdodDogMTAwc3ZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0XHRoc2xhKDE5OCwgMTAwJSwgNDElLCAwLjc0NSksXG5cdFx0XHRoc2xhKDI2NiwgMzIlLCA1MCUsIDAuNzQ1KVxuXHRcdCksXG5cdFx0bm8tcmVwZWF0IGNlbnRlci9jb3ZlclxuXHRcdFx0dXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNi82NS9TdG9uZXNfUG9ydG9fRFNDRjA1NzIuanBnLzEwMjRweC1TdG9uZXNfUG9ydG9fRFNDRjA1NzIuanBnKTtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbiksIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuXHRcdFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG5cdFx0c2Fucy1zZXJpZjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBOzs7Q0FHQyxnQkFBZ0I7QUFDakI7O0FBRUEsb0RBQW9EO0FBQ3BELG1FQUFtRTtBQUNuRTtDQUNDLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsb0NBQW9DO0NBQ3BDLHFDQUFxQztDQUNyQywwQkFBMEI7Q0FDMUIsdUJBQXVCOztDQUV2QixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQix1QkFBdUI7O0NBRXZCLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLHdCQUF3Qjs7Q0FFeEIsb0JBQW9COztDQUVwQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qjs7Ozs7NEhBSzJIO0NBQzNIOztZQUVXO0FBQ1o7O0FBRUEsb0VBQW9FXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC4vbWFpbi5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vc2lkZWJhci5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vZGlhbG9nLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9oZWFkZXItZm9vdGVyLmNzcyk7XFxuQGltcG9ydCB1cmwoLi93YXJuaW5ncy5jc3MpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9wa2UzYmJmLmNzc1xcXCIpO1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHVuc2V0O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGNvbG9yOiB1bnNldDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdGZvbnQtZmFtaWx5OiB1bnNldDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG5cXHRmb250LXNpemU6IHVuc2V0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuOnJvb3Qge1xcblxcdC0tc2F2ZS1idG4tYmc6ICMwMDRiNmI7XFxuXFx0LS1lZGl0LWJ0bi1iZzogIzQ3MzI2MjtcXG5cXHQtLWhlYWRlci1iZy1sZWZ0OiBoc2woMjEwLCA3MCUsIDUwJSk7XFxuXFx0LS1oZWFkZXItYmctcmlnaHQ6IGhzbCgyNjYsIDUwJSwgMzAlKTtcXG5cXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcXG5cXHQtLWVkaXQtbW9kZS1iZzogI2UwZjZmZjtcXG5cXG5cXHQtLXRleHQtbGlnaHQ6ICNmYmZjZmY7XFxuXFx0LS10ZXh0LW1lZDogIzQwNDA0MDtcXG5cXHQtLXRleHQtZGFyazogIzRmNDE2MjtcXG5cXHQtLXRleHQtcHJvamVjdDogIzc2MGExYztcXG5cXG5cXHQtLXByaW9yaXR5LWxvdzogIzg3YmJmMjtcXG5cXHQtLXByaW9yaXR5LW1lZDogI2ZmYzAwMDtcXG5cXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xcblxcdC0tcHJpb3JpdHktbm9uZTogI2E2YTZhNjtcXG5cXG5cXHQtLWZvb3Rlci1iZzogIzIyMmEzNTtcXG5cXG5cXHQtLWZvbnQtbWFpbjogZnV0dXJhLXB0O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHRoc2xhKDE5OCwgMTAwJSwgNDElLCAwLjc0NSksXFxuXFx0XFx0XFx0aHNsYSgyNjYsIDMyJSwgNTAlLCAwLjc0NSlcXG5cXHRcXHQpLFxcblxcdFxcdG5vLXJlcGVhdCBjZW50ZXIvY292ZXJcXG5cXHRcXHRcXHR1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY1L1N0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcvMTAyNHB4LVN0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcpO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG5cXHRcXHRcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcblxcdFxcdHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLnN3YWwtbW9kYWwge1xuXHRwYWRkaW5nOiAyMHB4O1xufSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dhcm5pbmdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAuc3dhbC1tb2RhbCB7XFxuXFx0cGFkZGluZzogMjBweDtcXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3dhbD1lKCk6dC5zd2FsPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgcj1uW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmw9ITAsci5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLG8pe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6b30pfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sZS5wPVwiXCIsZShlLnM9OCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89XCJzd2FsLWJ1dHRvblwiO2UuQ0xBU1NfTkFNRVM9e01PREFMOlwic3dhbC1tb2RhbFwiLE9WRVJMQVk6XCJzd2FsLW92ZXJsYXlcIixTSE9XX01PREFMOlwic3dhbC1vdmVybGF5LS1zaG93LW1vZGFsXCIsTU9EQUxfVElUTEU6XCJzd2FsLXRpdGxlXCIsTU9EQUxfVEVYVDpcInN3YWwtdGV4dFwiLElDT046XCJzd2FsLWljb25cIixJQ09OX0NVU1RPTTpcInN3YWwtaWNvbi0tY3VzdG9tXCIsQ09OVEVOVDpcInN3YWwtY29udGVudFwiLEZPT1RFUjpcInN3YWwtZm9vdGVyXCIsQlVUVE9OX0NPTlRBSU5FUjpcInN3YWwtYnV0dG9uLWNvbnRhaW5lclwiLEJVVFRPTjpvLENPTkZJUk1fQlVUVE9OOm8rXCItLWNvbmZpcm1cIixDQU5DRUxfQlVUVE9OOm8rXCItLWNhbmNlbFwiLERBTkdFUl9CVVRUT046bytcIi0tZGFuZ2VyXCIsQlVUVE9OX0xPQURJTkc6bytcIi0tbG9hZGluZ1wiLEJVVFRPTl9MT0FERVI6bytcIl9fbG9hZGVyXCJ9LGUuZGVmYXVsdD1lLkNMQVNTX05BTUVTfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5nZXROb2RlPWZ1bmN0aW9uKHQpe3ZhciBlPVwiLlwiK3Q7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LGUuc3RyaW5nVG9Ob2RlPWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPXQudHJpbSgpLGUuZmlyc3RDaGlsZH0sZS5pbnNlcnRBZnRlcj1mdW5jdGlvbih0LGUpe3ZhciBuPWUubmV4dFNpYmxpbmc7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LG4pfSxlLnJlbW92ZU5vZGU9ZnVuY3Rpb24odCl7dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpfSxlLnRocm93RXJyPWZ1bmN0aW9uKHQpe3Rocm93IHQ9dC5yZXBsYWNlKC8gKyg/PSApL2csXCJcIiksXCJTd2VldEFsZXJ0OiBcIisodD10LnRyaW0oKSl9LGUuaXNQbGFpbk9iamVjdD1mdW5jdGlvbih0KXtpZihcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiExO3ZhciBlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbD09PWV8fGU9PT1PYmplY3QucHJvdG90eXBlfSxlLm9yZGluYWxTdWZmaXhPZj1mdW5jdGlvbih0KXt2YXIgZT10JTEwLG49dCUxMDA7cmV0dXJuIDE9PT1lJiYxMSE9PW4/dCtcInN0XCI6Mj09PWUmJjEyIT09bj90K1wibmRcIjozPT09ZSYmMTMhPT1uP3QrXCJyZFwiOnQrXCJ0aFwifX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyhuKDI1KSk7dmFyIHI9bigyNik7ZS5vdmVybGF5TWFya3VwPXIuZGVmYXVsdCxvKG4oMjcpKSxvKG4oMjgpKSxvKG4oMjkpKTt2YXIgaT1uKDApLGE9aS5kZWZhdWx0Lk1PREFMX1RJVExFLHM9aS5kZWZhdWx0Lk1PREFMX1RFWFQsYz1pLmRlZmF1bHQuSUNPTixsPWkuZGVmYXVsdC5GT09URVI7ZS5pY29uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2MrJ1wiPjwvZGl2PicsZS50aXRsZU1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJythKydcIj48L2Rpdj5cXG4nLGUudGV4dE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytzKydcIj48L2Rpdj4nLGUuZm9vdGVyTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2wrJ1wiPjwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpO2UuQ09ORklSTV9LRVk9XCJjb25maXJtXCIsZS5DQU5DRUxfS0VZPVwiY2FuY2VsXCI7dmFyIHI9e3Zpc2libGU6ITAsdGV4dDpudWxsLHZhbHVlOm51bGwsY2xhc3NOYW1lOlwiXCIsY2xvc2VNb2RhbDohMH0saT1PYmplY3QuYXNzaWduKHt9LHIse3Zpc2libGU6ITEsdGV4dDpcIkNhbmNlbFwiLHZhbHVlOm51bGx9KSxhPU9iamVjdC5hc3NpZ24oe30scix7dGV4dDpcIk9LXCIsdmFsdWU6ITB9KTtlLmRlZmF1bHRCdXR0b25MaXN0PXtjYW5jZWw6aSxjb25maXJtOmF9O3ZhciBzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlIGUuQ09ORklSTV9LRVk6cmV0dXJuIGE7Y2FzZSBlLkNBTkNFTF9LRVk6cmV0dXJuIGk7ZGVmYXVsdDp2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30scix7dGV4dDpuLHZhbHVlOnR9KX19LGM9ZnVuY3Rpb24odCxlKXt2YXIgbj1zKHQpO3JldHVybiEwPT09ZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITB9KTpcInN0cmluZ1wiPT10eXBlb2YgZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITAsdGV4dDplfSk6by5pc1BsYWluT2JqZWN0KGUpP09iamVjdC5hc3NpZ24oe3Zpc2libGU6ITB9LG4sZSk6T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiExfSl9LGw9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LG49MCxvPU9iamVjdC5rZXlzKHQpO248by5sZW5ndGg7bisrKXt2YXIgcj1vW25dLGE9dFtyXSxzPWMocixhKTtlW3JdPXN9cmV0dXJuIGUuY2FuY2VsfHwoZS5jYW5jZWw9aSksZX0sdT1mdW5jdGlvbih0KXt2YXIgbj17fTtzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMTpuW2UuQ0FOQ0VMX0tFWV09T2JqZWN0LmFzc2lnbih7fSxpLHt2aXNpYmxlOiExfSk7YnJlYWs7Y2FzZSAyOm5bZS5DQU5DRUxfS0VZXT1jKGUuQ0FOQ0VMX0tFWSx0WzBdKSxuW2UuQ09ORklSTV9LRVldPWMoZS5DT05GSVJNX0tFWSx0WzFdKTticmVhaztkZWZhdWx0Om8udGhyb3dFcnIoXCJJbnZhbGlkIG51bWJlciBvZiAnYnV0dG9ucycgaW4gYXJyYXkgKFwiK3QubGVuZ3RoK1wiKS5cXG4gICAgICBJZiB5b3Ugd2FudCBtb3JlIHRoYW4gMiBidXR0b25zLCB5b3UgbmVlZCB0byB1c2UgYW4gb2JqZWN0IVwiKX1yZXR1cm4gbn07ZS5nZXRCdXR0b25MaXN0T3B0cz1mdW5jdGlvbih0KXt2YXIgbj1lLmRlZmF1bHRCdXR0b25MaXN0O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P25bZS5DT05GSVJNX0tFWV09YyhlLkNPTkZJUk1fS0VZLHQpOkFycmF5LmlzQXJyYXkodCk/bj11KHQpOm8uaXNQbGFpbk9iamVjdCh0KT9uPWwodCk6ITA9PT10P249dShbITAsITBdKTohMT09PXQ/bj11KFshMSwhMV0pOnZvaWQgMD09PXQmJihuPWUuZGVmYXVsdEJ1dHRvbkxpc3QpLG59fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksaT1uKDApLGE9aS5kZWZhdWx0Lk1PREFMLHM9aS5kZWZhdWx0Lk9WRVJMQVksYz1uKDMwKSxsPW4oMzEpLHU9bigzMiksZj1uKDMzKTtlLmluamVjdEVsSW50b01vZGFsPWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0Tm9kZShhKSxuPW8uc3RyaW5nVG9Ob2RlKHQpO3JldHVybiBlLmFwcGVuZENoaWxkKG4pLG59O3ZhciBkPWZ1bmN0aW9uKHQpe3QuY2xhc3NOYW1lPWEsdC50ZXh0Q29udGVudD1cIlwifSxwPWZ1bmN0aW9uKHQsZSl7ZCh0KTt2YXIgbj1lLmNsYXNzTmFtZTtuJiZ0LmNsYXNzTGlzdC5hZGQobil9O2UuaW5pdE1vZGFsQ29udGVudD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoYSk7cChlLHQpLGMuZGVmYXVsdCh0Lmljb24pLGwuaW5pdFRpdGxlKHQudGl0bGUpLGwuaW5pdFRleHQodC50ZXh0KSxmLmRlZmF1bHQodC5jb250ZW50KSx1LmRlZmF1bHQodC5idXR0b25zLHQuZGFuZ2VyTW9kZSl9O3ZhciBtPWZ1bmN0aW9uKCl7dmFyIHQ9by5nZXROb2RlKHMpLGU9by5zdHJpbmdUb05vZGUoci5tb2RhbE1hcmt1cCk7dC5hcHBlbmRDaGlsZChlKX07ZS5kZWZhdWx0PW19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9e2lzT3BlbjohMSxwcm9taXNlOm51bGwsYWN0aW9uczp7fSx0aW1lcjpudWxsfSxpPU9iamVjdC5hc3NpZ24oe30scik7ZS5yZXNldFN0YXRlPWZ1bmN0aW9uKCl7aT1PYmplY3QuYXNzaWduKHt9LHIpfSxlLnNldEFjdGlvblZhbHVlPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBhKG8uQ09ORklSTV9LRVksdCk7Zm9yKHZhciBlIGluIHQpYShlLHRbZV0pfTt2YXIgYT1mdW5jdGlvbih0LGUpe2kuYWN0aW9uc1t0XXx8KGkuYWN0aW9uc1t0XT17fSksT2JqZWN0LmFzc2lnbihpLmFjdGlvbnNbdF0se3ZhbHVlOmV9KX07ZS5zZXRBY3Rpb25PcHRpb25zRm9yPWZ1bmN0aW9uKHQsZSl7dmFyIG49KHZvaWQgMD09PWU/e306ZSkuY2xvc2VNb2RhbCxvPXZvaWQgMD09PW58fG47T2JqZWN0LmFzc2lnbihpLmFjdGlvbnNbdF0se2Nsb3NlTW9kYWw6b30pfSxlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGk9bigwKSxhPWkuZGVmYXVsdC5PVkVSTEFZLHM9aS5kZWZhdWx0LlNIT1dfTU9EQUwsYz1pLmRlZmF1bHQuQlVUVE9OLGw9aS5kZWZhdWx0LkJVVFRPTl9MT0FESU5HLHU9big1KTtlLm9wZW5Nb2RhbD1mdW5jdGlvbigpe28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QuYWRkKHMpLHUuZGVmYXVsdC5pc09wZW49ITB9O3ZhciBmPWZ1bmN0aW9uKCl7by5nZXROb2RlKGEpLmNsYXNzTGlzdC5yZW1vdmUocyksdS5kZWZhdWx0LmlzT3Blbj0hMX07ZS5vbkFjdGlvbj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1yLkNBTkNFTF9LRVkpO3ZhciBlPXUuZGVmYXVsdC5hY3Rpb25zW3RdLG49ZS52YWx1ZTtpZighMT09PWUuY2xvc2VNb2RhbCl7dmFyIGk9YytcIi0tXCIrdDtvLmdldE5vZGUoaSkuY2xhc3NMaXN0LmFkZChsKX1lbHNlIGYoKTt1LmRlZmF1bHQucHJvbWlzZS5yZXNvbHZlKG4pfSxlLmdldFN0YXRlPWZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSx1LmRlZmF1bHQpO3JldHVybiBkZWxldGUgdC5wcm9taXNlLGRlbGV0ZSB0LnRpbWVyLHR9LGUuc3RvcExvYWRpbmc9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjKSxlPTA7ZTx0Lmxlbmd0aDtlKyspe3RbZV0uY2xhc3NMaXN0LnJlbW92ZShsKX19fSxmdW5jdGlvbih0LGUpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl8fCgwLGV2YWwpKFwidGhpc1wiKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfXQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe3QuZXhwb3J0cz1lLnN3ZWV0QWxlcnQ9big5KX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2FsPW4oMTApfSkuY2FsbChlLG4oNykpfSxmdW5jdGlvbih0LGUsbil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbigxMSksbigxNik7dmFyIG89bigyMykuZGVmYXVsdDt0LmV4cG9ydHM9b30sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTIpO1wic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1bW3QuaSxvLFwiXCJdXSk7dmFyIHI9e2luc2VydEF0OlwidG9wXCJ9O3IudHJhbnNmb3JtPXZvaWQgMDtuKDE0KShvLHIpO28ubG9jYWxzJiYodC5leHBvcnRzPW8ubG9jYWxzKX0sZnVuY3Rpb24odCxlLG4pe2U9dC5leHBvcnRzPW4oMTMpKHZvaWQgMCksZS5wdXNoKFt0LmksJy5zd2FsLWljb24tLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0Oy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVFcnJvckljb24gLjVzO2FuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41c30uc3dhbC1pY29uLS1lcnJvcl9feC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVhNYXJrIC41czthbmltYXRpb246YW5pbWF0ZVhNYXJrIC41c30uc3dhbC1pY29uLS1lcnJvcl9fbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O3dpZHRoOjQ3cHg7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2Rpc3BsYXk6YmxvY2s7dG9wOjM3cHg7Ym9yZGVyLXJhZGl1czoycHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLWxlZnR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtsZWZ0OjE3cHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLXJpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtyaWdodDoxNnB4fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX0uc3dhbC1pY29uLS13YXJuaW5ne2JvcmRlci1jb2xvcjojZjhiYjg2Oy13ZWJraXQtYW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZTthbmltYXRpb246cHVsc2VXYXJuaW5nIC43NXMgaW5maW5pdGUgYWx0ZXJuYXRlfS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHl7d2lkdGg6NXB4O2hlaWdodDo0N3B4O3RvcDoxMHB4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0td2FybmluZ19fYm9keSwuc3dhbC1pY29uLS13YXJuaW5nX19kb3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjhiYjg2fS5zd2FsLWljb24tLXdhcm5pbmdfX2RvdHt3aWR0aDo3cHg7aGVpZ2h0OjdweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDotNHB4O2JvdHRvbTotMTFweH1ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2VXYXJuaW5nezAle2JvcmRlci1jb2xvcjojZjhkNDg2fXRve2JvcmRlci1jb2xvcjojZjhiYjg2fX1Aa2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19LnN3YWwtaWNvbi0tc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVyLC5zd2FsLWljb24tLXN1Y2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcIjtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2MHB4O2hlaWdodDoxMjBweDtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtib3JkZXItcmFkaXVzOjEyMHB4IDAgMCAxMjBweDt0b3A6LTdweDtsZWZ0Oi0zM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4fS5zd2FsLWljb24tLXN1Y2Nlc3M6YWZ0ZXJ7Ym9yZGVyLXJhZGl1czowIDEyMHB4IDEyMHB4IDA7dG9wOi0xMXB4O2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO2FuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWlufS5zd2FsLWljb24tLXN1Y2Nlc3NfX3Jpbmd7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6NHB4IHNvbGlkIGhzbGEoOTgsNTUlLDY5JSwuMik7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00cHg7dG9wOi00cHg7ei1pbmRleDoyfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2hpZGUtY29ybmVyc3t3aWR0aDo1cHg7aGVpZ2h0OjkwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MXB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjhweDt0b3A6OHB4O3otaW5kZXg6MTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZXtoZWlnaHQ6NXB4O2JhY2tncm91bmQtY29sb3I6I2E1ZGM4NjtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS10aXB7d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ2cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmUtLWxvbmd7d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzTG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1c31ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fS5zd2FsLWljb24tLWluZm97Ym9yZGVyLWNvbG9yOiNjOWRhZTF9LnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7d2lkdGg6NXB4O2hlaWdodDoyOXB4O2JvdHRvbToxN3B4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0taW5mbzphZnRlciwuc3dhbC1pY29uLS1pbmZvOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YWZ0ZXJ7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTNweDt0b3A6MTlweH0uc3dhbC1pY29ue3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyLXdpZHRoOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7bWFyZ2luOjIwcHggYXV0b30uc3dhbC1pY29uOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MzJweH0uc3dhbC1pY29uLS1jdXN0b217d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjB9LnN3YWwtaWNvbiBpbWd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5zd2FsLXRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjY1KTtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTNweCAxNnB4O2ZvbnQtc2l6ZToyN3B4O2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjB9LnN3YWwtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDoyNnB4fS5zd2FsLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpe3BhZGRpbmctYm90dG9tOjB9LnN3YWwtdGl0bGU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEzcHh9LnN3YWwtdGV4dHtmb250LXNpemU6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDt2ZXJ0aWNhbC1hbGlnbjp0b3A7dGV4dC1hbGlnbjpsZWZ0O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowO3BhZGRpbmc6MCAxMHB4O2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjpyZ2JhKDAsMCwwLC42NCk7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnN3YWwtdGV4dDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjQ1cHh9LnN3YWwtdGV4dDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206NDVweH0uc3dhbC1mb290ZXJ7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXRvcDoxM3B4O21hcmdpbi10b3A6MTNweDtwYWRkaW5nOjEzcHggMTZweDtib3JkZXItcmFkaXVzOmluaGVyaXQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnN3YWwtYnV0dG9uLWNvbnRhaW5lcnttYXJnaW46NXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2FsLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiM3Y2QxZjk7Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtib3gtc2hhZG93Om5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MTBweCAyNHB4O21hcmdpbjowO2N1cnNvcjpwb2ludGVyfS5zd2FsLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzhjYmYyfS5zd2FsLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNzBiY2UwfS5zd2FsLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSg0MywxMTQsMTY1LC4yOSl9LnN3YWwtYnV0dG9uW2Rpc2FibGVkXXtvcGFjaXR5Oi41O2N1cnNvcjpkZWZhdWx0fS5zd2FsLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbC1idXR0b24tLWNhbmNlbHtjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZn0uc3dhbC1idXR0b24tLWNhbmNlbDpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q3ZDd9LnN3YWwtYnV0dG9uLS1jYW5jZWw6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxMTYsMTM2LDE1MCwuMjkpfS5zd2FsLWJ1dHRvbi0tZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2U2NDk0Mn0uc3dhbC1idXR0b24tLWRhbmdlcjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGY0NzQwfS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNjZjQyM2J9LnN3YWwtYnV0dG9uLS1kYW5nZXI6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxNjUsNDMsNDMsLjI5KX0uc3dhbC1jb250ZW50e3BhZGRpbmc6MCAyMHB4O21hcmdpbi10b3A6MjBweDtmb250LXNpemU6bWVkaXVtfS5zd2FsLWNvbnRlbnQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjIwcHh9LnN3YWwtY29udGVudF9faW5wdXQsLnN3YWwtY29udGVudF9fdGV4dGFyZWF7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxNHB4O2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNCk7cGFkZGluZzoxMHB4IDEzcHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzfS5zd2FsLWNvbnRlbnRfX2lucHV0OmZvY3VzLC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6IzZkYjhmZn0uc3dhbC1jb250ZW50X190ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9LnN3YWwtYnV0dG9uLS1sb2FkaW5ne2NvbG9yOnRyYW5zcGFyZW50fS5zd2FsLWJ1dHRvbi0tbG9hZGluZ34uc3dhbC1idXR0b25fX2xvYWRlcntvcGFjaXR5OjF9LnN3YWwtYnV0dG9uX19sb2FkZXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmF1dG87d2lkdGg6NDNweDt6LWluZGV4OjI7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MH0uc3dhbC1idXR0b25fX2xvYWRlciBkaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7bWFyZ2luOjJweDtvcGFjaXR5Oi40O2JvcmRlci1yYWRpdXM6N3B4O2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMnM7LXdlYmtpdC1hbmltYXRpb246c3dhbC1sb2FkaW5nLWFuaW0gMXMgaW5maW5pdGU7YW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdjpudGgtY2hpbGQoM24rMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjE1czthbmltYXRpb24tZGVsYXk6LjE1c30uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zczthbmltYXRpb24tZGVsYXk6LjNzfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19QGtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19LnN3YWwtb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MDtvdmVyZmxvdy15OmF1dG87YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40KTt6LWluZGV4OjEwMDAwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3N9LnN3YWwtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcIiBcIjtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7aGVpZ2h0OjEwMCV9LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30uc3dhbC1vdmVybGF5LS1zaG93LW1vZGFsIC5zd2FsLW1vZGFse29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7YW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnN3YWwtbW9kYWx7d2lkdGg6NDc4cHg7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NXB4O3Bvc2l0aW9uOnN0YXRpYzttYXJnaW46MjBweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3otaW5kZXg6MTAwMDE7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLG9wYWNpdHkgLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3N9QG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpey5zd2FsLW1vZGFse3dpZHRoOmNhbGMoMTAwJSAtIDIwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUpe3ZhciBuPXRbMV18fFwiXCIscj10WzNdO2lmKCFyKXJldHVybiBuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBpPW8ocik7cmV0dXJuW25dLmNvbmNhdChyLnNvdXJjZXMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIityLnNvdXJjZVJvb3QrdCtcIiAqL1wifSkpLmNvbmNhdChbaV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0KSkpKStcIiAqL1wifXQuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXt2YXIgbz1uKGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIitvK1wifVwiOm99KS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG89e30scj0wO3I8dGhpcy5sZW5ndGg7cisrKXt2YXIgaT10aGlzW3JdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYob1tpXT0hMCl9Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTtcIm51bWJlclwiPT10eXBlb2YgYVswXSYmb1thWzBdXXx8KG4mJiFhWzJdP2FbMl09bjpuJiYoYVsyXT1cIihcIithWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChhKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXSxyPW1bby5pZF07aWYocil7ci5yZWZzKys7Zm9yKHZhciBpPTA7aTxyLnBhcnRzLmxlbmd0aDtpKyspci5wYXJ0c1tpXShvLnBhcnRzW2ldKTtmb3IoO2k8by5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHMucHVzaCh1KG8ucGFydHNbaV0sZSkpfWVsc2V7Zm9yKHZhciBhPVtdLGk9MDtpPG8ucGFydHMubGVuZ3RoO2krKylhLnB1c2godShvLnBhcnRzW2ldLGUpKTttW28uaWRdPXtpZDpvLmlkLHJlZnM6MSxwYXJ0czphfX19fWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49W10sbz17fSxyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl0sYT1lLmJhc2U/aVswXStlLmJhc2U6aVswXSxzPWlbMV0sYz1pWzJdLGw9aVszXSx1PXtjc3M6cyxtZWRpYTpjLHNvdXJjZU1hcDpsfTtvW2FdP29bYV0ucGFydHMucHVzaCh1KTpuLnB1c2gob1thXT17aWQ6YSxwYXJ0czpbdV19KX1yZXR1cm4gbn1mdW5jdGlvbiBpKHQsZSl7dmFyIG49dih0Lmluc2VydEludG8pO2lmKCFuKXRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO3ZhciBvPXdbdy5sZW5ndGgtMV07aWYoXCJ0b3BcIj09PXQuaW5zZXJ0QXQpbz9vLm5leHRTaWJsaW5nP24uaW5zZXJ0QmVmb3JlKGUsby5uZXh0U2libGluZyk6bi5hcHBlbmRDaGlsZChlKTpuLmluc2VydEJlZm9yZShlLG4uZmlyc3RDaGlsZCksdy5wdXNoKGUpO2Vsc2V7aWYoXCJib3R0b21cIiE9PXQuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO24uYXBwZW5kQ2hpbGQoZSl9fWZ1bmN0aW9uIGEodCl7aWYobnVsbD09PXQucGFyZW50Tm9kZSlyZXR1cm4hMTt0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7dmFyIGU9dy5pbmRleE9mKHQpO2U+PTAmJncuc3BsaWNlKGUsMSl9ZnVuY3Rpb24gcyh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsbChlLHQuYXR0cnMpLGkodCxlKSxlfWZ1bmN0aW9uIGModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsdC5hdHRycy5yZWw9XCJzdHlsZXNoZWV0XCIsbChlLHQuYXR0cnMpLGkodCxlKSxlfWZ1bmN0aW9uIGwodCxlKXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Quc2V0QXR0cmlidXRlKG4sZVtuXSl9KX1mdW5jdGlvbiB1KHQsZSl7dmFyIG4sbyxyLGk7aWYoZS50cmFuc2Zvcm0mJnQuY3NzKXtpZighKGk9ZS50cmFuc2Zvcm0odC5jc3MpKSlyZXR1cm4gZnVuY3Rpb24oKXt9O3QuY3NzPWl9aWYoZS5zaW5nbGV0b24pe3ZhciBsPWgrKztuPWd8fChnPXMoZSkpLG89Zi5iaW5kKG51bGwsbixsLCExKSxyPWYuYmluZChudWxsLG4sbCwhMCl9ZWxzZSB0LnNvdXJjZU1hcCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBCbG9iJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hPyhuPWMoZSksbz1wLmJpbmQobnVsbCxuLGUpLHI9ZnVuY3Rpb24oKXthKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49cyhlKSxvPWQuYmluZChudWxsLG4pLHI9ZnVuY3Rpb24oKXthKG4pfSk7cmV0dXJuIG8odCksZnVuY3Rpb24oZSl7aWYoZSl7aWYoZS5jc3M9PT10LmNzcyYmZS5tZWRpYT09PXQubWVkaWEmJmUuc291cmNlTWFwPT09dC5zb3VyY2VNYXApcmV0dXJuO28odD1lKX1lbHNlIHIoKX19ZnVuY3Rpb24gZih0LGUsbixvKXt2YXIgcj1uP1wiXCI6by5jc3M7aWYodC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PXgoZSxyKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHIpLGE9dC5jaGlsZE5vZGVzO2FbZV0mJnQucmVtb3ZlQ2hpbGQoYVtlXSksYS5sZW5ndGg/dC5pbnNlcnRCZWZvcmUoaSxhW2VdKTp0LmFwcGVuZENoaWxkKGkpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIG49ZS5jc3Msbz1lLm1lZGlhO2lmKG8mJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixvKSx0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fWZ1bmN0aW9uIHAodCxlLG4pe3ZhciBvPW4uY3NzLHI9bi5zb3VyY2VNYXAsaT12b2lkIDA9PT1lLmNvbnZlcnRUb0Fic29sdXRlVXJscyYmcjsoZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHN8fGkpJiYobz15KG8pKSxyJiYobys9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHIpKSkpK1wiICovXCIpO3ZhciBhPW5ldyBCbG9iKFtvXSx7dHlwZTpcInRleHQvY3NzXCJ9KSxzPXQuaHJlZjt0LmhyZWY9VVJMLmNyZWF0ZU9iamVjdFVSTChhKSxzJiZVUkwucmV2b2tlT2JqZWN0VVJMKHMpfXZhciBtPXt9LGI9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxlfX0oZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9KSx2PWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09ZVtuXSYmKGVbbl09dC5jYWxsKHRoaXMsbikpLGVbbl19fShmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX0pLGc9bnVsbCxoPTAsdz1bXSx5PW4oMTUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBERUJVRyYmREVCVUcmJlwib2JqZWN0XCIhPXR5cGVvZiBkb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7ZT1lfHx7fSxlLmF0dHJzPVwib2JqZWN0XCI9PXR5cGVvZiBlLmF0dHJzP2UuYXR0cnM6e30sZS5zaW5nbGV0b258fChlLnNpbmdsZXRvbj1iKCkpLGUuaW5zZXJ0SW50b3x8KGUuaW5zZXJ0SW50bz1cImhlYWRcIiksZS5pbnNlcnRBdHx8KGUuaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIG49cih0LGUpO3JldHVybiBvKG4sZSksZnVuY3Rpb24odCl7Zm9yKHZhciBpPVtdLGE9MDthPG4ubGVuZ3RoO2ErKyl7dmFyIHM9blthXSxjPW1bcy5pZF07Yy5yZWZzLS0saS5wdXNoKGMpfWlmKHQpe28ocih0LGUpLGUpfWZvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgYz1pW2FdO2lmKDA9PT1jLnJlZnMpe2Zvcih2YXIgbD0wO2w8Yy5wYXJ0cy5sZW5ndGg7bCsrKWMucGFydHNbbF0oKTtkZWxldGUgbVtjLmlkXX19fX07dmFyIHg9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gdFtlXT1uLHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIil9fSgpfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubG9jYXRpb247aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7aWYoIXR8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiB0O3ZhciBuPWUucHJvdG9jb2wrXCIvL1wiK2UuaG9zdCxvPW4rZS5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sXCIvXCIpO3JldHVybiB0LnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS50cmltKCkucmVwbGFjZSgvXlwiKC4qKVwiJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pLnJlcGxhY2UoL14nKC4qKSckLyxmdW5jdGlvbih0LGUpe3JldHVybiBlfSk7aWYoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdChyKSlyZXR1cm4gdDt2YXIgaTtyZXR1cm4gaT0wPT09ci5pbmRleE9mKFwiLy9cIik/cjowPT09ci5pbmRleE9mKFwiL1wiKT9uK3I6bytyLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLFwidXJsKFwiK0pTT04uc3RyaW5naWZ5KGkpK1wiKVwifSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIG89bigxNyk7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8d2luZG93LlByb21pc2V8fCh3aW5kb3cuUHJvbWlzZT1vKSxuKDIxKSxTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzfHwoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcz1mdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3JldHVyblwibnVtYmVyXCIhPXR5cGVvZiBlJiYoZT0wKSwhKGUrdC5sZW5ndGg+dGhpcy5sZW5ndGgpJiYtMSE9PXRoaXMuaW5kZXhPZih0LGUpfSksQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLFwiaW5jbHVkZXNcIix7dmFsdWU6ZnVuY3Rpb24odCxlKXtpZihudWxsPT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTt2YXIgbj1PYmplY3QodGhpcyksbz1uLmxlbmd0aD4+PjA7aWYoMD09PW8pcmV0dXJuITE7Zm9yKHZhciByPTB8ZSxpPU1hdGgubWF4KHI+PTA/cjpvLU1hdGguYWJzKHIpLDApO2k8bzspe2lmKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT1lfHxcIm51bWJlclwiPT10eXBlb2YgdCYmXCJudW1iZXJcIj09dHlwZW9mIGUmJmlzTmFOKHQpJiZpc05hTihlKX0obltpXSx0KSlyZXR1cm4hMDtpKyt9cmV0dXJuITF9fSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmZnVuY3Rpb24odCl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuaGFzT3duUHJvcGVydHkoXCJyZW1vdmVcIil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwicmVtb3ZlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfX0pfSl9KFtFbGVtZW50LnByb3RvdHlwZSxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSxEb2N1bWVudFR5cGUucHJvdG90eXBlXSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gcih0LGUpe3JldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBpKHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sZih0LHRoaXMpfWZ1bmN0aW9uIGEodCxlKXtmb3IoOzM9PT10Ll9zdGF0ZTspdD10Ll92YWx1ZTtpZigwPT09dC5fc3RhdGUpcmV0dXJuIHZvaWQgdC5fZGVmZXJyZWRzLnB1c2goZSk7dC5faGFuZGxlZD0hMCxpLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3ZhciBuPTE9PT10Ll9zdGF0ZT9lLm9uRnVsZmlsbGVkOmUub25SZWplY3RlZDtpZihudWxsPT09bilyZXR1cm4gdm9pZCgxPT09dC5fc3RhdGU/czpjKShlLnByb21pc2UsdC5fdmFsdWUpO3ZhciBvO3RyeXtvPW4odC5fdmFsdWUpfWNhdGNoKHQpe3JldHVybiB2b2lkIGMoZS5wcm9taXNlLHQpfXMoZS5wcm9taXNlLG8pfSl9ZnVuY3Rpb24gcyh0LGUpe3RyeXtpZihlPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYoZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSl7dmFyIG49ZS50aGVuO2lmKGUgaW5zdGFuY2VvZiBpKXJldHVybiB0Ll9zdGF0ZT0zLHQuX3ZhbHVlPWUsdm9pZCBsKHQpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIHZvaWQgZihyKG4sZSksdCl9dC5fc3RhdGU9MSx0Ll92YWx1ZT1lLGwodCl9Y2F0Y2goZSl7Yyh0LGUpfX1mdW5jdGlvbiBjKHQsZSl7dC5fc3RhdGU9Mix0Ll92YWx1ZT1lLGwodCl9ZnVuY3Rpb24gbCh0KXsyPT09dC5fc3RhdGUmJjA9PT10Ll9kZWZlcnJlZHMubGVuZ3RoJiZpLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3QuX2hhbmRsZWR8fGkuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHQuX3ZhbHVlKX0pO2Zvcih2YXIgZT0wLG49dC5fZGVmZXJyZWRzLmxlbmd0aDtlPG47ZSsrKWEodCx0Ll9kZWZlcnJlZHNbZV0pO3QuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIHUodCxlLG4pe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMucHJvbWlzZT1ufWZ1bmN0aW9uIGYodCxlKXt2YXIgbj0hMTt0cnl7dChmdW5jdGlvbih0KXtufHwobj0hMCxzKGUsdCkpfSxmdW5jdGlvbih0KXtufHwobj0hMCxjKGUsdCkpfSl9Y2F0Y2godCl7aWYobilyZXR1cm47bj0hMCxjKGUsdCl9fXZhciBkPXNldFRpbWVvdXQ7aS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfSxpLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHQsZSl7dmFyIG49bmV3IHRoaXMuY29uc3RydWN0b3Iobyk7cmV0dXJuIGEodGhpcyxuZXcgdSh0LGUsbikpLG59LGkuYWxsPWZ1bmN0aW9uKHQpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpO3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIG8oaSxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIHM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpcmV0dXJuIHZvaWQgcy5jYWxsKGEsZnVuY3Rpb24odCl7byhpLHQpfSxuKX1lW2ldPWEsMD09LS1yJiZ0KGUpfWNhdGNoKHQpe24odCl9fWlmKDA9PT1lLmxlbmd0aClyZXR1cm4gdChbXSk7Zm9yKHZhciByPWUubGVuZ3RoLGk9MDtpPGUubGVuZ3RoO2krKylvKGksZVtpXSl9KX0saS5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PWk/dDpuZXcgaShmdW5jdGlvbihlKXtlKHQpfSl9LGkucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShmdW5jdGlvbihlLG4pe24odCl9KX0saS5yYWNlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShmdW5jdGlvbihlLG4pe2Zvcih2YXIgbz0wLHI9dC5sZW5ndGg7bzxyO28rKyl0W29dLnRoZW4oZSxuKX0pfSxpLl9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZmdW5jdGlvbih0KXtlKHQpfXx8ZnVuY3Rpb24odCl7ZCh0LDApfSxpLl91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLHQpfSxpLl9zZXRJbW1lZGlhdGVGbj1mdW5jdGlvbih0KXtpLl9pbW1lZGlhdGVGbj10fSxpLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtpLl91bmhhbmRsZWRSZWplY3Rpb25Gbj10fSx2b2lkIDAhPT10JiZ0LmV4cG9ydHM/dC5leHBvcnRzPWk6bi5Qcm9taXNlfHwobi5Qcm9taXNlPWkpfSh0aGlzKX0pLmNhbGwoZSxuKDE4KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbyh0LGUpe3RoaXMuX2lkPXQsdGhpcy5fY2xlYXJGbj1lfXZhciByPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtlLnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG8oci5jYWxsKHNldFRpbWVvdXQsd2luZG93LGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sZS5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgbyhyLmNhbGwoc2V0SW50ZXJ2YWwsd2luZG93LGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LGUuY2xlYXJUaW1lb3V0PWUuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbih0KXt0JiZ0LmNsb3NlKCl9LG8ucHJvdG90eXBlLnVucmVmPW8ucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30sby5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LHRoaXMuX2lkKX0sZS5lbnJvbGw9ZnVuY3Rpb24odCxlKXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCksdC5faWRsZVRpbWVvdXQ9ZX0sZS51bmVucm9sbD1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCksdC5faWRsZVRpbWVvdXQ9LTF9LGUuX3VucmVmQWN0aXZlPWUuYWN0aXZlPWZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKTt2YXIgZT10Ll9pZGxlVGltZW91dDtlPj0wJiYodC5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5fb25UaW1lb3V0JiZ0Ll9vblRpbWVvdXQoKX0sZSkpfSxuKDE5KSxlLnNldEltbWVkaWF0ZT1zZXRJbW1lZGlhdGUsZS5jbGVhckltbWVkaWF0ZT1jbGVhckltbWVkaWF0ZX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbih0LGUpeyFmdW5jdGlvbih0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7XCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9bmV3IEZ1bmN0aW9uKFwiXCIrdCkpO2Zvcih2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXT1hcmd1bWVudHNbbisxXTt2YXIgbz17Y2FsbGJhY2s6dCxhcmdzOmV9O3JldHVybiBsW2NdPW8scyhjKSxjKyt9ZnVuY3Rpb24gcih0KXtkZWxldGUgbFt0XX1mdW5jdGlvbiBpKHQpe3ZhciBlPXQuY2FsbGJhY2ssbz10LmFyZ3M7c3dpdGNoKG8ubGVuZ3RoKXtjYXNlIDA6ZSgpO2JyZWFrO2Nhc2UgMTplKG9bMF0pO2JyZWFrO2Nhc2UgMjplKG9bMF0sb1sxXSk7YnJlYWs7Y2FzZSAzOmUob1swXSxvWzFdLG9bMl0pO2JyZWFrO2RlZmF1bHQ6ZS5hcHBseShuLG8pfX1mdW5jdGlvbiBhKHQpe2lmKHUpc2V0VGltZW91dChhLDAsdCk7ZWxzZXt2YXIgZT1sW3RdO2lmKGUpe3U9ITA7dHJ5e2koZSl9ZmluYWxseXtyKHQpLHU9ITF9fX19aWYoIXQuc2V0SW1tZWRpYXRlKXt2YXIgcyxjPTEsbD17fSx1PSExLGY9dC5kb2N1bWVudCxkPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2Q9ZCYmZC5zZXRUaW1lb3V0P2Q6dCxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwodC5wcm9jZXNzKT9mdW5jdGlvbigpe3M9ZnVuY3Rpb24odCl7ZS5uZXh0VGljayhmdW5jdGlvbigpe2EodCl9KX19KCk6ZnVuY3Rpb24oKXtpZih0LnBvc3RNZXNzYWdlJiYhdC5pbXBvcnRTY3JpcHRzKXt2YXIgZT0hMCxuPXQub25tZXNzYWdlO3JldHVybiB0Lm9ubWVzc2FnZT1mdW5jdGlvbigpe2U9ITF9LHQucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksdC5vbm1lc3NhZ2U9bixlfX0oKT9mdW5jdGlvbigpe3ZhciBlPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsbj1mdW5jdGlvbihuKXtuLnNvdXJjZT09PXQmJlwic3RyaW5nXCI9PXR5cGVvZiBuLmRhdGEmJjA9PT1uLmRhdGEuaW5kZXhPZihlKSYmYSgrbi5kYXRhLnNsaWNlKGUubGVuZ3RoKSl9O3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiwhMSk6dC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLG4pLHM9ZnVuY3Rpb24obil7dC5wb3N0TWVzc2FnZShlK24sXCIqXCIpfX0oKTp0Lk1lc3NhZ2VDaGFubmVsP2Z1bmN0aW9uKCl7dmFyIHQ9bmV3IE1lc3NhZ2VDaGFubmVsO3QucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKHQpe2EodC5kYXRhKX0scz1mdW5jdGlvbihlKXt0LnBvcnQyLnBvc3RNZXNzYWdlKGUpfX0oKTpmJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIHQ9Zi5kb2N1bWVudEVsZW1lbnQ7cz1mdW5jdGlvbihlKXt2YXIgbj1mLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXthKGUpLG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdC5yZW1vdmVDaGlsZChuKSxuPW51bGx9LHQuYXBwZW5kQ2hpbGQobil9fSgpOmZ1bmN0aW9uKCl7cz1mdW5jdGlvbih0KXtzZXRUaW1lb3V0KGEsMCx0KX19KCksZC5zZXRJbW1lZGlhdGU9byxkLmNsZWFySW1tZWRpYXRlPXJ9fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT10P3RoaXM6dDpzZWxmKX0pLmNhbGwoZSxuKDcpLG4oMjApKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBvKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHIodCl7aWYodT09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigodT09PW58fCF1KSYmc2V0VGltZW91dClyZXR1cm4gdT1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIHUodCwwKX1jYXRjaChlKXt0cnl7cmV0dXJuIHUuY2FsbChudWxsLHQsMCl9Y2F0Y2goZSl7cmV0dXJuIHUuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGY9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigoZj09PW98fCFmKSYmY2xlYXJUaW1lb3V0KXJldHVybiBmPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBmKHQpfWNhdGNoKGUpe3RyeXtyZXR1cm4gZi5jYWxsKG51bGwsdCl9Y2F0Y2goZSl7cmV0dXJuIGYuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gYSgpe2ImJnAmJihiPSExLHAubGVuZ3RoP209cC5jb25jYXQobSk6dj0tMSxtLmxlbmd0aCYmcygpKX1mdW5jdGlvbiBzKCl7aWYoIWIpe3ZhciB0PXIoYSk7Yj0hMDtmb3IodmFyIGU9bS5sZW5ndGg7ZTspe2ZvcihwPW0sbT1bXTsrK3Y8ZTspcCYmcFt2XS5ydW4oKTt2PS0xLGU9bS5sZW5ndGh9cD1udWxsLGI9ITEsaSh0KX19ZnVuY3Rpb24gYyh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIGwoKXt9dmFyIHUsZixkPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7dT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bn1jYXRjaCh0KXt1PW59dHJ5e2Y9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpvfWNhdGNoKHQpe2Y9b319KCk7dmFyIHAsbT1bXSxiPSExLHY9LTE7ZC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO20ucHVzaChuZXcgYyh0LGUpKSwxIT09bS5sZW5ndGh8fGJ8fHIocyl9LGMucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LGQudGl0bGU9XCJicm93c2VyXCIsZC5icm93c2VyPSEwLGQuZW52PXt9LGQuYXJndj1bXSxkLnZlcnNpb249XCJcIixkLnZlcnNpb25zPXt9LGQub249bCxkLmFkZExpc3RlbmVyPWwsZC5vbmNlPWwsZC5vZmY9bCxkLnJlbW92ZUxpc3RlbmVyPWwsZC5yZW1vdmVBbGxMaXN0ZW5lcnM9bCxkLmVtaXQ9bCxkLnByZXBlbmRMaXN0ZW5lcj1sLGQucHJlcGVuZE9uY2VMaXN0ZW5lcj1sLGQubGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybltdfSxkLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGQuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LGQuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxkLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bigyMikucG9seWZpbGwoKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCxlKXtpZih2b2lkIDA9PT10fHxudWxsPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XCIpO2Zvcih2YXIgbj1PYmplY3QodCksbz0xO288YXJndW1lbnRzLmxlbmd0aDtvKyspe3ZhciByPWFyZ3VtZW50c1tvXTtpZih2b2lkIDAhPT1yJiZudWxsIT09cilmb3IodmFyIGk9T2JqZWN0LmtleXMoT2JqZWN0KHIpKSxhPTAscz1pLmxlbmd0aDthPHM7YSsrKXt2YXIgYz1pW2FdLGw9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLGMpO3ZvaWQgMCE9PWwmJmwuZW51bWVyYWJsZSYmKG5bY109cltjXSl9fXJldHVybiBufWZ1bmN0aW9uIHIoKXtPYmplY3QuYXNzaWdufHxPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LFwiYXNzaWduXCIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm99KX10LmV4cG9ydHM9e2Fzc2lnbjpvLHBvbHlmaWxsOnJ9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigyNCkscj1uKDYpLGk9big1KSxhPW4oMzYpLHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIG49YS5nZXRPcHRzLmFwcGx5KHZvaWQgMCx0KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxlKXtpLmRlZmF1bHQucHJvbWlzZT17cmVzb2x2ZTp0LHJlamVjdDplfSxvLmRlZmF1bHQobiksc2V0VGltZW91dChmdW5jdGlvbigpe3Iub3Blbk1vZGFsKCl9KX0pfX07cy5jbG9zZT1yLm9uQWN0aW9uLHMuZ2V0U3RhdGU9ci5nZXRTdGF0ZSxzLnNldEFjdGlvblZhbHVlPWkuc2V0QWN0aW9uVmFsdWUscy5zdG9wTG9hZGluZz1yLnN0b3BMb2FkaW5nLHMuc2V0RGVmYXVsdHM9YS5zZXREZWZhdWx0cyxlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDApLGk9ci5kZWZhdWx0Lk1PREFMLGE9big0KSxzPW4oMzQpLGM9bigzNSksbD1uKDEpO2UuaW5pdD1mdW5jdGlvbih0KXtvLmdldE5vZGUoaSl8fChkb2N1bWVudC5ib2R5fHxsLnRocm93RXJyKFwiWW91IGNhbiBvbmx5IHVzZSBTd2VldEFsZXJ0IEFGVEVSIHRoZSBET00gaGFzIGxvYWRlZCFcIikscy5kZWZhdWx0KCksYS5kZWZhdWx0KCkpLGEuaW5pdE1vZGFsQ29udGVudCh0KSxjLmRlZmF1bHQodCl9LGUuZGVmYXVsdD1lLmluaXR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk1PREFMO2UubW9kYWxNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+PC9kaXY+JyxlLmRlZmF1bHQ9ZS5tb2RhbE1hcmt1cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuT1ZFUkxBWSxpPSc8ZGl2IFxcbiAgICBjbGFzcz1cIicrcisnXCJcXG4gICAgdGFiSW5kZXg9XCItMVwiPlxcbiAgPC9kaXY+JztlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuSUNPTjtlLmVycm9ySWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLWVycm9yXCIsZT10K1wiX19saW5lXCI7cmV0dXJuJ1xcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX3gtbWFya1wiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJytlK1wiIFwiK2UrJy0tbGVmdFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLXJpZ2h0XCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICd9LGUud2FybmluZ0ljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS13YXJuaW5nXCI7cmV0dXJuJ1xcbiAgICA8c3BhbiBjbGFzcz1cIicrdCsnX19ib2R5XCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fZG90XCI+PC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuICAnfSxlLnN1Y2Nlc3NJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0tc3VjY2Vzc1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS1sb25nXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cIicrdCtcIl9fbGluZSBcIit0KydfX2xpbmUtLXRpcFwiPjwvc3Bhbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX19yaW5nXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19faGlkZS1jb3JuZXJzXCI+PC9kaXY+XFxuICAnfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQ09OVEVOVDtlLmNvbnRlbnRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+XFxuXFxuICA8L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5CVVRUT05fQ09OVEFJTkVSLGk9by5kZWZhdWx0LkJVVFRPTixhPW8uZGVmYXVsdC5CVVRUT05fTE9BREVSO2UuYnV0dG9uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgICA8YnV0dG9uXFxuICAgICAgY2xhc3M9XCInK2krJ1wiXFxuICAgID48L2J1dHRvbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrYSsnXCI+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNCkscj1uKDIpLGk9bigwKSxhPWkuZGVmYXVsdC5JQ09OLHM9aS5kZWZhdWx0LklDT05fQ1VTVE9NLGM9W1wiZXJyb3JcIixcIndhcm5pbmdcIixcInN1Y2Nlc3NcIixcImluZm9cIl0sbD17ZXJyb3I6ci5lcnJvckljb25NYXJrdXAoKSx3YXJuaW5nOnIud2FybmluZ0ljb25NYXJrdXAoKSxzdWNjZXNzOnIuc3VjY2Vzc0ljb25NYXJrdXAoKX0sdT1mdW5jdGlvbih0LGUpe3ZhciBuPWErXCItLVwiK3Q7ZS5jbGFzc0xpc3QuYWRkKG4pO3ZhciBvPWxbdF07byYmKGUuaW5uZXJIVE1MPW8pfSxmPWZ1bmN0aW9uKHQsZSl7ZS5jbGFzc0xpc3QuYWRkKHMpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7bi5zcmM9dCxlLmFwcGVuZENoaWxkKG4pfSxkPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPW8uaW5qZWN0RWxJbnRvTW9kYWwoci5pY29uTWFya3VwKTtjLmluY2x1ZGVzKHQpP3UodCxlKTpmKHQsZSl9fTtlLmRlZmF1bHQ9ZH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMikscj1uKDQpLGk9ZnVuY3Rpb24odCl7bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIkFwcGxlV2ViS2l0XCIpJiYodC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQub2Zmc2V0SGVpZ2h0LHQuc3R5bGUuZGlzcGxheT1cIlwiKX07ZS5pbml0VGl0bGU9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChvLnRpdGxlTWFya3VwKTtlLnRleHRDb250ZW50PXQsaShlKX19LGUuaW5pdFRleHQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3Quc3BsaXQoXCJcXG5cIikuZm9yRWFjaChmdW5jdGlvbih0LG4sbyl7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSksbjxvLmxlbmd0aC0xJiZlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSl9KTt2YXIgbj1yLmluamVjdEVsSW50b01vZGFsKG8udGV4dE1hcmt1cCk7bi5hcHBlbmRDaGlsZChlKSxpKG4pfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9big0KSxpPW4oMCksYT1pLmRlZmF1bHQuQlVUVE9OLHM9aS5kZWZhdWx0LkRBTkdFUl9CVVRUT04sYz1uKDMpLGw9bigyKSx1PW4oNiksZj1uKDUpLGQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudGV4dCxpPWUudmFsdWUsZD1lLmNsYXNzTmFtZSxwPWUuY2xvc2VNb2RhbCxtPW8uc3RyaW5nVG9Ob2RlKGwuYnV0dG9uTWFya3VwKSxiPW0ucXVlcnlTZWxlY3RvcihcIi5cIithKSx2PWErXCItLVwiK3Q7aWYoYi5jbGFzc0xpc3QuYWRkKHYpLGQpeyhBcnJheS5pc0FycmF5KGQpP2Q6ZC5zcGxpdChcIiBcIikpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5sZW5ndGg+MH0pLmZvckVhY2goZnVuY3Rpb24odCl7Yi5jbGFzc0xpc3QuYWRkKHQpfSl9biYmdD09PWMuQ09ORklSTV9LRVkmJmIuY2xhc3NMaXN0LmFkZChzKSxiLnRleHRDb250ZW50PXI7dmFyIGc9e307cmV0dXJuIGdbdF09aSxmLnNldEFjdGlvblZhbHVlKGcpLGYuc2V0QWN0aW9uT3B0aW9uc0Zvcih0LHtjbG9zZU1vZGFsOnB9KSxiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHUub25BY3Rpb24odCl9KSxtfSxwPWZ1bmN0aW9uKHQsZSl7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChsLmZvb3Rlck1hcmt1cCk7Zm9yKHZhciBvIGluIHQpe3ZhciBpPXRbb10sYT1kKG8saSxlKTtpLnZpc2libGUmJm4uYXBwZW5kQ2hpbGQoYSl9MD09PW4uY2hpbGRyZW4ubGVuZ3RoJiZuLnJlbW92ZSgpfTtlLmRlZmF1bHQ9cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMykscj1uKDQpLGk9bigyKSxhPW4oNSkscz1uKDYpLGM9bigwKSxsPWMuZGVmYXVsdC5DT05URU5ULHU9ZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxuPWUudmFsdWU7YS5zZXRBY3Rpb25WYWx1ZShuKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24odCl7aWYoXCJFbnRlclwiPT09dC5rZXkpcmV0dXJuIHMub25BY3Rpb24oby5DT05GSVJNX0tFWSl9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5mb2N1cygpLGEuc2V0QWN0aW9uVmFsdWUoXCJcIil9LDApfSxmPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpLHI9bCtcIl9fXCIrZTtvLmNsYXNzTGlzdC5hZGQocik7Zm9yKHZhciBpIGluIG4pe3ZhciBhPW5baV07b1tpXT1hfVwiaW5wdXRcIj09PWUmJnUobyksdC5hcHBlbmRDaGlsZChvKX0sZD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKGkuY29udGVudE1hcmt1cCksbj10LmVsZW1lbnQsbz10LmF0dHJpYnV0ZXM7XCJzdHJpbmdcIj09dHlwZW9mIG4/ZihlLG4sbyk6ZS5hcHBlbmRDaGlsZChuKX19O2UuZGVmYXVsdD1kfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksaT1mdW5jdGlvbigpe3ZhciB0PW8uc3RyaW5nVG9Ob2RlKHIub3ZlcmxheU1hcmt1cCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX07ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDUpLHI9big2KSxpPW4oMSksYT1uKDMpLHM9bigwKSxjPXMuZGVmYXVsdC5NT0RBTCxsPXMuZGVmYXVsdC5CVVRUT04sdT1zLmRlZmF1bHQuT1ZFUkxBWSxmPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx2KCl9LGQ9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGcoKX0scD1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXN3aXRjaCh0LmtleSl7Y2FzZVwiRXNjYXBlXCI6cmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX19LG09ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIlRhYlwiOnJldHVybiBmKHQpfX0sYj1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXJldHVyblwiVGFiXCI9PT10LmtleSYmdC5zaGlmdEtleT9kKHQpOnZvaWQgMH0sdj1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShsKTt0JiYodC50YWJJbmRleD0wLHQuZm9jdXMoKSl9LGc9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUoYyksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCksbj1lLmxlbmd0aC0xLG89ZVtuXTtvJiZvLmZvY3VzKCl9LGg9ZnVuY3Rpb24odCl7dFt0Lmxlbmd0aC0xXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLG0pfSx3PWZ1bmN0aW9uKHQpe3RbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixiKX0seT1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShjKSxlPXQucXVlcnlTZWxlY3RvckFsbChcIi5cIitsKTtlLmxlbmd0aCYmKGgoZSksdyhlKSl9LHg9ZnVuY3Rpb24odCl7aWYoaS5nZXROb2RlKHUpPT09dC50YXJnZXQpcmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX0sXz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldE5vZGUodSk7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4KSx0JiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHgpfSxrPWZ1bmN0aW9uKHQpe28uZGVmYXVsdC50aW1lciYmY2xlYXJUaW1lb3V0KG8uZGVmYXVsdC50aW1lciksdCYmKG8uZGVmYXVsdC50aW1lcj13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9LHQpKX0sTz1mdW5jdGlvbih0KXt0LmNsb3NlT25Fc2M/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCk6ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCksdC5kYW5nZXJNb2RlP3YoKTpnKCkseSgpLF8odC5jbG9zZU9uQ2xpY2tPdXRzaWRlKSxrKHQudGltZXIpfTtlLmRlZmF1bHQ9T30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGk9bigzNyksYT1uKDM4KSxzPXt0aXRsZTpudWxsLHRleHQ6bnVsbCxpY29uOm51bGwsYnV0dG9uczpyLmRlZmF1bHRCdXR0b25MaXN0LGNvbnRlbnQ6bnVsbCxjbGFzc05hbWU6bnVsbCxjbG9zZU9uQ2xpY2tPdXRzaWRlOiEwLGNsb3NlT25Fc2M6ITAsZGFuZ2VyTW9kZTohMSx0aW1lcjpudWxsfSxjPU9iamVjdC5hc3NpZ24oe30scyk7ZS5zZXREZWZhdWx0cz1mdW5jdGlvbih0KXtjPU9iamVjdC5hc3NpZ24oe30scyx0KX07dmFyIGw9ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5idXR0b24sbj10JiZ0LmJ1dHRvbnM7cmV0dXJuIHZvaWQgMCE9PWUmJnZvaWQgMCE9PW4mJm8udGhyb3dFcnIoXCJDYW5ub3Qgc2V0IGJvdGggJ2J1dHRvbicgYW5kICdidXR0b25zJyBvcHRpb25zIVwiKSx2b2lkIDAhPT1lP3tjb25maXJtOmV9Om59LHU9ZnVuY3Rpb24odCl7cmV0dXJuIG8ub3JkaW5hbFN1ZmZpeE9mKHQrMSl9LGY9ZnVuY3Rpb24odCxlKXtvLnRocm93RXJyKHUoZSkrXCIgYXJndW1lbnQgKCdcIit0K1wiJykgaXMgaW52YWxpZFwiKX0sZD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07by5pc1BsYWluT2JqZWN0KHIpfHx2b2lkIDA9PT1yfHxvLnRocm93RXJyKFwiRXhwZWN0ZWQgXCIrdShuKStcIiBhcmd1bWVudCAoJ1wiK3IrXCInKSB0byBiZSBhIHBsYWluIG9iamVjdFwiKX0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07dm9pZCAwIT09ciYmby50aHJvd0VycihcIlVuZXhwZWN0ZWQgXCIrdShuKStcIiBhcmd1bWVudCAoXCIrcitcIilcIil9LG09ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9dHlwZW9mIGUsYT1cInN0cmluZ1wiPT09aSxzPWUgaW5zdGFuY2VvZiBFbGVtZW50O2lmKGEpe2lmKDA9PT1uKXJldHVybnt0ZXh0OmV9O2lmKDE9PT1uKXJldHVybnt0ZXh0OmUsdGl0bGU6clswXX07aWYoMj09PW4pcmV0dXJuIGQobixyKSx7aWNvbjplfTtmKGUsbil9ZWxzZXtpZihzJiYwPT09bilyZXR1cm4gZChuLHIpLHtjb250ZW50OmV9O2lmKG8uaXNQbGFpbk9iamVjdChlKSlyZXR1cm4gcChuLHIpLGU7ZihlLG4pfX07ZS5nZXRPcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3ZhciBuPXt9O3QuZm9yRWFjaChmdW5jdGlvbihlLG8pe3ZhciByPW0oMCxlLG8sdCk7T2JqZWN0LmFzc2lnbihuLHIpfSk7dmFyIG89bChuKTtuLmJ1dHRvbnM9ci5nZXRCdXR0b25MaXN0T3B0cyhvKSxkZWxldGUgbi5idXR0b24sbi5jb250ZW50PWkuZ2V0Q29udGVudE9wdHMobi5jb250ZW50KTt2YXIgdT1PYmplY3QuYXNzaWduKHt9LHMsYyxuKTtyZXR1cm4gT2JqZWN0LmtleXModSkuZm9yRWFjaChmdW5jdGlvbih0KXthLkRFUFJFQ0FURURfT1BUU1t0XSYmYS5sb2dEZXByZWNhdGlvbih0KX0pLHV9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPXtlbGVtZW50OlwiaW5wdXRcIixhdHRyaWJ1dGVzOntwbGFjZWhvbGRlcjpcIlwifX07ZS5nZXRDb250ZW50T3B0cz1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gby5pc1BsYWluT2JqZWN0KHQpP09iamVjdC5hc3NpZ24oZSx0KTp0IGluc3RhbmNlb2YgRWxlbWVudD97ZWxlbWVudDp0fTpcImlucHV0XCI9PT10P3I6bnVsbH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmxvZ0RlcHJlY2F0aW9uPWZ1bmN0aW9uKHQpe3ZhciBuPWUuREVQUkVDQVRFRF9PUFRTW3RdLG89bi5vbmx5UmVuYW1lLHI9bi5yZXBsYWNlbWVudCxpPW4uc3ViT3B0aW9uLGE9bi5saW5rLHM9bz9cInJlbmFtZWRcIjpcImRlcHJlY2F0ZWRcIixjPSdTd2VldEFsZXJ0IHdhcm5pbmc6IFwiJyt0KydcIiBvcHRpb24gaGFzIGJlZW4gJytzK1wiLlwiO2lmKHIpe2MrPVwiIFBsZWFzZSB1c2VcIisoaT8nIFwiJytpKydcIiBpbiAnOlwiIFwiKSsnXCInK3IrJ1wiIGluc3RlYWQuJ312YXIgbD1cImh0dHBzOi8vc3dlZXRhbGVydC5qcy5vcmdcIjtjKz1hP1wiIE1vcmUgZGV0YWlsczogXCIrbCthOlwiIE1vcmUgZGV0YWlsczogXCIrbCtcIi9ndWlkZXMvI3VwZ3JhZGluZy1mcm9tLTF4XCIsY29uc29sZS53YXJuKGMpfSxlLkRFUFJFQ0FURURfT1BUUz17dHlwZTp7cmVwbGFjZW1lbnQ6XCJpY29uXCIsbGluazpcIi9kb2NzLyNpY29uXCJ9LGltYWdlVXJsOntyZXBsYWNlbWVudDpcImljb25cIixsaW5rOlwiL2RvY3MvI2ljb25cIn0sY3VzdG9tQ2xhc3M6e3JlcGxhY2VtZW50OlwiY2xhc3NOYW1lXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2NsYXNzbmFtZVwifSxpbWFnZVNpemU6e30sc2hvd0NhbmNlbEJ1dHRvbjp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LHNob3dDb25maXJtQnV0dG9uOntyZXBsYWNlbWVudDpcImJ1dHRvblwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNvbmZpcm1CdXR0b25UZXh0OntyZXBsYWNlbWVudDpcImJ1dHRvblwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNvbmZpcm1CdXR0b25Db2xvcjp7fSxjYW5jZWxCdXR0b25UZXh0OntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sY2xvc2VPbkNvbmZpcm06e3JlcGxhY2VtZW50OlwiYnV0dG9uXCIsc3ViT3B0aW9uOlwiY2xvc2VNb2RhbFwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNsb3NlT25DYW5jZWw6e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLHN1Yk9wdGlvbjpcImNsb3NlTW9kYWxcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sc2hvd0xvYWRlck9uQ29uZmlybTp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCJ9LGFuaW1hdGlvbjp7fSxpbnB1dFR5cGU6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxpbnB1dFZhbHVlOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saW5wdXRQbGFjZWhvbGRlcjp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGh0bWw6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxhbGxvd0VzY2FwZUtleTp7cmVwbGFjZW1lbnQ6XCJjbG9zZU9uRXNjXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2Nsb3Nlb25lc2NcIn0sYWxsb3dDbGlja091dHNpZGU6e3JlcGxhY2VtZW50OlwiY2xvc2VPbkNsaWNrT3V0c2lkZVwiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbG9zZW9uY2xpY2tvdXRzaWRlXCJ9fX1dKX0pOyIsImltcG9ydCB7IFB1YlN1YiwgRVYgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IFRhc2tzID0gKCgpID0+IHtcblx0bGV0IF90YXNrTGlzdCA9IG5ldyBTZXQoKTtcblx0bGV0IF9pZENvdW50ZXIgPSAxO1xuXG5cdGNvbnN0IF9jb2x1bW5OYW1lcyA9IFtcImJhY2tsb2dcIiwgXCJ0by1kb1wiLCBcImluLXByb2dyZXNzXCIsIFwiZG9uZVwiXTtcblxuXHRsZXQgX3Byb3BlcnR5TmFtZXMgPSBbXG5cdFx0XCJ0aXRsZVwiLFxuXHRcdFwic3RhdHVzXCIsXG5cdFx0XCJwcm9qZWN0XCIsXG5cdFx0XCJwcmlvcml0eVwiLFxuXHRcdFwibm90ZXNcIixcblx0XHRcImR1ZVwiLFxuXHRcdFwidGFnc1wiLFxuXHRdO1xuXG5cdGxldCBfcHJpb3JpdGllcyA9IFtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl07XG5cblx0ZnVuY3Rpb24gX2RhdGVTb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRyZXR1cm4gb3V0Z29pbmdUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRlQSA9ICthLmdldFByb3BlcnRpZXMoKS5kdWUuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XG5cdFx0XHRjb25zdCBkYXRlQiA9ICtiLmdldFByb3BlcnRpZXMoKS5kdWUuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XG5cdFx0XHRyZXR1cm4gIWRhdGVBID8gMSA6IGRhdGVCIC0gZGF0ZUE7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBfY29sdW1uU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIF9jb2x1bW5OYW1lcy5tYXAoKGNvbHVtbk5hbWUpID0+IFtcblx0XHRcdGNvbHVtbk5hbWUsXG5cdFx0XHRfZGF0ZVNvcnQoXG5cdFx0XHRcdG91dGdvaW5nVGFza3MuZmlsdGVyKFxuXHRcdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKS5zdGF0dXMgPT09IGNvbHVtbk5hbWVcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRdKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF90YXNrRmFjdG9yeSgpIHtcblx0XHRjb25zdCBfdGFzayA9IHt9O1xuXHRcdGNvbnN0IHNldFByb3BlcnR5ID0gKGtleSwgdmFsdWUpID0+IChfdGFza1trZXldID0gdmFsdWUpO1xuXHRcdF9wcm9wZXJ0eU5hbWVzLmZvckVhY2goKHByb3ApID0+IHNldFByb3BlcnR5KHByb3AsIFwiXCIpKTtcblx0XHRjb25zdCBnZXRQcm9wZXJ0aWVzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgLi4uX3Rhc2sgfTtcblx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRQcm9wZXJ0aWVzLFxuXHRcdFx0c2V0UHJvcGVydHksXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2soaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBfdGFza0ZhY3RvcnkoKTtcblx0XHRuZXdUYXNrLnNldFByb3BlcnR5KFwiaWRcIiwgX2lkQ291bnRlcisrKTtcblx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdG5ld1Rhc2suc2V0UHJvcGVydHkocGFpclswXSwgcGFpclsxXSk7XG5cdFx0fSk7XG5cdFx0X3Rhc2tMaXN0LmFkZChuZXdUYXNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRhc2tzKC4uLnJlbW92ZUlkcykge1xuXHRcdFsuLi5fdGFza0xpc3RdLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGlmIChyZW1vdmVJZHMuaW5jbHVkZXModGFzay5nZXRQcm9wZXJ0aWVzKCkuaWQpKSB7XG5cdFx0XHRcdF90YXNrTGlzdC5kZWxldGUodGFzayk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVUYXNrKHVwZGF0ZUlkLCBpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0Wy4uLl90YXNrTGlzdF0uZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0aWYgKHVwZGF0ZUlkID09PSB0YXNrLmdldFByb3BlcnRpZXMoKS5pZCkge1xuXHRcdFx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdFx0XHR0YXNrLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdFx0X3Rhc2tMaXN0LmNsZWFyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUYXNrc0J5KHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIFsuLi5fdGFza0xpc3RdLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKClbcHJvcF0gPT09IHZhbHVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNvcnRlZFRhc2tzQnkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gX2NvbHVtblNvcnQoXG5cdFx0XHRbLi4uX3Rhc2tMaXN0XS5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpW3Byb3BdID09PSB2YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5BREQsIGFkZFRhc2spO1xuXHRjb25zdCBzdWJSZW1vdmVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLkRFTEVURSwgcmVtb3ZlVGFza3MpO1xuXHRjb25zdCBzdWJVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLlVQREFURSwgdXBkYXRlVGFzayk7XG5cdGNvbnN0IHN1YkNsZWFyVGFza3MgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgY2xlYXJUYXNrcyk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRBbGxUYXNrczogKCkgPT4gWy4uLl90YXNrTGlzdF0sXG5cdFx0Z2V0U29ydGVkVGFza3M6ICgpID0+IF9jb2x1bW5Tb3J0KFsuLi5fdGFza0xpc3RdKSxcblx0XHRnZXRUYXNrc0J5LFxuXHRcdGdldFNvcnRlZFRhc2tzQnksXG5cdFx0Z2V0Q29sdW1uTmFtZXM6ICgpID0+IF9jb2x1bW5OYW1lcyxcblx0XHRnZXRQcmlvcml0eU5hbWVzOiAoKSA9PiBfcHJpb3JpdGllcyxcblx0XHRnZXRQcm9wZXJ0eU5hbWVzOiAoKSA9PiBfcHJvcGVydHlOYW1lcyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG5cdGxldCBfcHJvamVjdExpc3QgPSBuZXcgU2V0KCk7XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0TmFtZSkge1xuXHRcdF9wcm9qZWN0TGlzdC5hZGQobmV3UHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHJlbW92ZU5hbWUpIHtcblx0XHRpZiAoX3Byb2plY3RMaXN0LmhhcyhyZW1vdmVOYW1lKSkge1xuXHRcdFx0Ly8gR2V0IHRhc2suaWQncyBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9qZWN0XG5cdFx0XHRjb25zdCByZW1vdmVJZHMgPSBUYXNrcy5nZXRUYXNrc0J5KFwicHJvamVjdFwiLCByZW1vdmVOYW1lKS5tYXAoXG5cdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKS5pZFxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCB0YXNrcyB3aXRoIHRob3NlIGlkJ3MgZnJvbSBfdGFza0xpc3Rcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlRBU0suREVMRVRFLCAuLi5yZW1vdmVJZHMpO1xuXG5cdFx0XHQvLyBSZW1vdmUgbmFtZSBmcm9tIHByb2plY3QgbGlzdFxuXHRcdFx0X3Byb2plY3RMaXN0LmRlbGV0ZShyZW1vdmVOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhclByb2plY3RzKCkge1xuXHRcdF9wcm9qZWN0TGlzdC5jbGVhcigpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5BREQsIGFkZFByb2plY3QpO1xuXHRjb25zdCBzdWJSZW1vdmVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkRFTEVURSwgcmVtb3ZlUHJvamVjdCk7XG5cdGNvbnN0IHN1YkNsZWFyUHJvamVjdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgY2xlYXJQcm9qZWN0cyk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRQcm9qZWN0czogKCkgPT4gWy4uLl9wcm9qZWN0TGlzdF0uc29ydCgpLFxuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYWRkRGVmYXVsdHMoKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLlJFU0VULkNMRUFSX0FMTCk7XG5cdFtcImhvbWVcIiwgXCJmaW5hbmNlc1wiLCBcImxlYXJuaW5nXCJdLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5QUk9KRUNULkFERCwgcHJvamVjdCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRlZmF1bHRUYXNrcyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJwYXkgYmlsbHNcIixcblx0XHRcdHN0YXR1czogXCJpbi1wcm9ncmVzc1wiLFxuXHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxuXHRcdFx0bm90ZXM6IFwidGhlIHJlbnQgaXMgdG9vIGRhbW4gaGlnaFwiLFxuXHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDFcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcImdyb2Nlcmllc1wiLFxuXHRcdFx0c3RhdHVzOiBcInRvLWRvXCIsXG5cdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiZmlsZSB0YXhlc1wiLFxuXHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwicmVhZCBDaGVraG92XCIsXG5cdFx0XHRzdGF0dXM6IFwiYmFja2xvZ1wiLFxuXHRcdFx0cHJvamVjdDogXCJsZWFybmluZ1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwibG93XCIsXG5cdFx0XHRkdWU6IFwiMjAyMy0xMS0wNVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwicmVwbGFjZSBsaWdodGJ1bGJcIixcblx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0cHJvamVjdDogXCJob21lXCIsXG5cdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdG5vdGVzOiBcImJhdGhyb29tIGxpZ2h0IGlzIGZsaWNrZXJpbmdcIixcblx0XHRcdHRhZ3M6IFwic3RvcmVcIixcblx0XHR9LFxuXHRdLm1hcCgoaXRlbSkgPT4gT2JqZWN0LmVudHJpZXMoaXRlbSkpO1xuXG5cdGRlZmF1bHRUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5BREQsIGl0ZW0pO1xuXHR9KTtcbn1cblxuY29uc3Qgc3ViRGVmYXVsdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkFERF9ERUZBVUxUUywgYWRkRGVmYXVsdHMpO1xuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtYXREYXRlLCBodG1sRmFjdG9yeSwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHViU3ViLCBFViB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQgPT09IGRpYWxvZykgZGlhbG9nLmNsb3NlKCk7XG59KTtcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuXHRkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xufSk7XG5cbmZ1bmN0aW9uIGJ1aWxkRGlzcGxheU1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1tb2RlXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1tb2RlLWhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMyBpZD1cImRpc3BsYXktdGl0bGVcIj48L2gzPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG4gZGlzcGxheS1jbG9zZS1idG5cIj7DlzwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1tb2RlLWJvZHlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1zaWRlYmFyXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPlByb2plY3Q6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktcHJvamVjdFwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5Qcmlvcml0eTogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS1wcmlvcml0eVwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5EdWU6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktZHVlXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPlN0YXR1czogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS1zdGF0dXNcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+Tm90ZXM6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktbm90ZXNcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+VGFnczogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS10YWdzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIgZGF0YS10YXNrLWlkPVwiXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJlZGl0LWJ0blwiPkVkaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlbGV0ZS1idG5cIj5EZWxldGU8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdGA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KHNlbGVjdGVkSWQpIHtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBzZWxlY3RlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdFRhc2tzLmdldFByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkaXNwbGF5LSR7cHJvcH1gKTtcblx0XHRsZXQgb3V0cHV0ID0gdGFza1twcm9wXTtcblxuXHRcdGlmIChwcm9wID09PSBcImR1ZVwiICYmICEhb3V0cHV0KSB7XG5cdFx0XHRvdXRwdXQgPSBmb3JtYXREYXRlKG91dHB1dCk7XG5cdFx0fVxuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9wID09PSBcInRhZ3NcIiA/IG91dHB1dCA6IG1ha2VGaXJzdFVwcGVyKG91dHB1dCk7XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcblx0ZGlhbG9nXG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jbG9zZS1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpYWxvZy5jbG9zZSgpKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRFZGl0TW9kZSgpIHtcblx0ZGlhbG9nLmlubmVySFRNTCA9IGA8Zm9ybSBjbGFzcz1cImVkaXQtbW9kZVwiIG1ldGhvZD1cImRpYWxvZ1wiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImVkaXQtbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcm9qZWN0XCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJkdWVcIj5EdWU6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwic3RhdHVzXCI+U3RhdHVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJzdGF0dXNcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIgcmVxdWlyZWQ+PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGlkPVwibm90ZXNcIiByb3dzPVwiNVwiIGNsYXNzPVwic3VibWl0LWluZm9cIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0PHA+U2VwYXJhdGUgdGFncyB3aXRoIGNvbW1hcy48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0YWdzXCI+VGFnczo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhZ3NcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJidXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIiBkYXRhLXRhc2staWQ9XCJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNhdmUtYnRuXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Zvcm0+YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBhZGREcm9wZG93bnMoKSB7XG5cdFtcblx0XHRbXCJwcm9qZWN0XCIsIFByb2plY3RzLmdldFByb2plY3RzKCldLFxuXHRcdFtcInByaW9yaXR5XCIsIFRhc2tzLmdldFByaW9yaXR5TmFtZXMoKV0sXG5cdFx0W1wic3RhdHVzXCIsIFRhc2tzLmdldENvbHVtbk5hbWVzKCldLFxuXHRdLmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFpclswXSk7XG5cdFx0cGFpclsxXS5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogb3B0aW9uLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKG9wdGlvbiksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybSh0YXNrKSB7XG5cdFRhc2tzLmdldFByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApO1xuXG5cdFx0c3dpdGNoIChwcm9wKSB7XG5cdFx0XHRjYXNlIFwicHJvamVjdFwiOlxuXHRcdFx0Y2FzZSBcInByaW9yaXR5XCI6XG5cdFx0XHRjYXNlIFwic3RhdHVzXCI6XG5cdFx0XHRcdFsuLi5lbGVtZW50LmNoaWxkcmVuXS5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT09IHRhc2tbcHJvcF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ0aXRsZVwiOlxuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gbWFrZUZpcnN0VXBwZXIodGFza1twcm9wXSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwibm90ZXNcIjpcblx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKHRhc2tbcHJvcF0pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IHRhc2tbcHJvcF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cdGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmlkLWJ1YmJsZS1tYXJrZXJcIikuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xufVxuXG5mdW5jdGlvbiBidWlsZFByb2plY3RNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdDxmb3JtIGNsYXNzPVwicHJvamVjdC1tb2RlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJuZXctcHJvamVjdFwiPk5ldyBQcm9qZWN0OjwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3LXByb2plY3RcIiByZXF1aXJlZC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInByb2plY3Qtc2F2ZS1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm9qZWN0LWNhbmNlbC1idG5cIj5cblx0XHRcdFx0XHRDYW5jZWxcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuY29uc3Qgc3ViRGlzcGxheUJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRElTUExBWV9NT0RFLCBidWlsZERpc3BsYXlNb2RlKTtcbmNvbnN0IHN1YkRpc3BsYXlQb3AgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5ESVNQTEFZX01PREUsIHBvcHVsYXRlRGlzcGxheSk7XG5cbmNvbnN0IHN1YkVkaXRCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkVESVRfTU9ERSwgYnVpbGRFZGl0TW9kZSk7XG5jb25zdCBzdWJFZGl0RHJvcGRvd25zID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRURJVF9NT0RFLCBhZGREcm9wZG93bnMpO1xuY29uc3Qgc3ViRm9ybVBvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkVESVRfTU9ERV9QT1AsIHBvcHVsYXRlRm9ybSk7XG5cbmNvbnN0IHN1YlByb2plY3RCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLlBST0pFQ1RfTU9ERSwgYnVpbGRQcm9qZWN0TW9kZSk7XG4iLCJpbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBmaW5kU3RhdHVzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgRVYsIFB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5sZXQgZHJhZ2dlZFRhc2sgPSB1bmRlZmluZWQ7XG5sZXQgY291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZERyYWdEcm9wKGNhcmQpIHtcblx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydCk7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG5cdGRyYWdnZWRUYXNrID0gdGhpcztcblx0dGhpcy5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcbn1cblxuZnVuY3Rpb24gZHJhZ0VuZChlKSB7XG5cdGRyYWdnZWRUYXNrID0gdW5kZWZpbmVkO1xuXHR0aGlzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0Y291bnRlciA9IDA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhdHVzLWNvbHVtblwiKS5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0XHRzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0YXR1c0Ryb3AoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhdHVzLWNvbHVtblwiKS5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdXBkYXRlU3RhdHVzKTtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBkcmFnRW50ZXIpO1xuXHRcdHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGRyYWdMZWF2ZSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VudGVyKCkge1xuXHRjb3VudGVyKys7XG5cdGZpbmRTdGF0dXModGhpcykuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0xlYXZlKCkge1xuXHRjb3VudGVyLS07XG5cdGlmIChjb3VudGVyID09PSAwKSB7XG5cdFx0ZmluZFN0YXR1cyh0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXR1cygpIHtcblx0Y29uc3QgZHJvcENvbHVtbiA9IGZpbmRTdGF0dXModGhpcykuaWQuc2xpY2UoMCwgLTcpO1xuXHRjb25zdCBkcmFnZ2VkSWQgPSArZHJhZ2dlZFRhc2suZGF0YXNldC50YXNrSWQ7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgZHJhZ2dlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdHRhc2suc3RhdHVzID0gZHJvcENvbHVtbjtcblxuXHRQdWJTdWIucHVibGlzaChFVi5UQVNLLlVQREFURSwgZHJhZ2dlZElkLCBPYmplY3QuZW50cmllcyh0YXNrKSk7XG59XG5cbmNvbnN0IHN1YkRyYWdEcm9wID0gUHViU3ViLnN1YnNjcmliZShFVi5BRERfRFJBR19EUk9QLCBhZGREcmFnRHJvcCk7XG5jb25zdCBzdWJTdGF0dXNEcm9wID0gUHViU3ViLnN1YnNjcmliZShFVi5BRERfU1RBVFVTX0RST1AsIGFkZFN0YXR1c0Ryb3ApO1xuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gRE9NIEZhY3RvcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcblx0cmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG5cblx0Zm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5ICE9PSBcImRhdGFzZXRcIikge1xuXHRcdFx0ZWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gU3BlY2lhbCBkaXJlY3Rpb25zIG5lZWRlZCB0byBzZXQgXCJkYXRhLVwiIHByb3BlcnRpZXNcblx0XHRcdGZvciAoY29uc3QgcHJvcCBpbiBhdHRyaWJ1dGVzW2tleV0pIHtcblx0XHRcdFx0ZWwuZGF0YXNldFtwcm9wXSA9IGF0dHJpYnV0ZXNba2V5XVtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvYmouY2hpbGRyZW4/LmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0Ly8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IGFkZGluZyBjaGlsZHJlbiB1cHN0cmVhbSBieVxuXHRcdC8vIHNldHRpbmcgXCJcIiBhcyB0aGUgYWx0ZXJuYXRpdmUgdG8gZWxGYWN0b3J5KClcblx0XHRpZiAoISFjaGlsZCkge1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoY2hpbGQpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3RoZXIgSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2tJZCh0YXJnZXQpIHtcblx0cmV0dXJuICsodGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImlkLWJ1YmJsZS1tYXJrZXJcIilcblx0XHQ/IHRhcmdldC5kYXRhc2V0LnRhc2tJZFxuXHRcdDogZmluZFRhc2tJZCh0YXJnZXQucGFyZW50RWxlbWVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFByb2plY3ROYW1lKHRhcmdldCkge1xuXHRyZXR1cm4gdGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcInByb2plY3QtYnViYmxlLW1hcmtlclwiKVxuXHRcdD8gdGFyZ2V0LmRhdGFzZXQucHJvamVjdEZpbHRlclxuXHRcdDogZmluZFByb2plY3ROYW1lKHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTdGF0dXModGFyZ2V0KSB7XG5cdHJldHVybiB0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwic3RhdHVzLWNvbHVtblwiKVxuXHRcdD8gdGFyZ2V0XG5cdFx0OiBmaW5kU3RhdHVzKHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGaXJzdFVwcGVyKHN0cmluZykge1xuXHRyZXR1cm4gISFzdHJpbmdcblx0XHQ/IHN0cmluZ1xuXHRcdFx0XHQuc3BsaXQoXCItXCIpXG5cdFx0XHRcdC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG5cdFx0XHRcdC5qb2luKFwiIFwiKVxuXHRcdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29EYXRlKSB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHtpc29EYXRlfVQxMjowMDowMC0wNDowMGApO1xuXHRjb25zdCBkYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuXHRjb25zdCBtb250aHMgPSBbXG5cdFx0XCJKYW5cIixcblx0XHRcIkZlYlwiLFxuXHRcdFwiTWFyXCIsXG5cdFx0XCJBcHJcIixcblx0XHRcIk1heVwiLFxuXHRcdFwiSnVuZVwiLFxuXHRcdFwiSnVseVwiLFxuXHRcdFwiQXVnXCIsXG5cdFx0XCJTZXB0XCIsXG5cdFx0XCJPY3RcIixcblx0XHRcIk5vdlwiLFxuXHRcdFwiRGVjXCIsXG5cdF07XG5cblx0cmV0dXJuIGAke2RheXNbZGF0ZS5nZXREYXkoKV19LCAke2RhdGUuZ2V0RGF0ZSgpfSAke1xuXHRcdG1vbnRoc1tkYXRlLmdldE1vbnRoKCldXG5cdH0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbn1cbiIsImV4cG9ydCBjb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZXZlbnRzTGlzdCA9IHt9O1xuXHQvLyB7IGtleTogXCJ0cmlnZ2VyRXZlbnRcIiwgdmFsdWU6IFsgYXJyYXkgb2YgZnVuY3Rpb25zIF0gfVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZSh0cmlnZ2VyRXZlbnQsIHN1YnNjcmliZXIpIHtcblx0XHRpZiAoIV9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0pIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0gPSBbc3Vic2NyaWJlcl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0ucHVzaChzdWJzY3JpYmVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVuc3Vic2NyaWJlOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZ1bmN0aW9uTGlzdCA9IF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG5cdFx0XHRcdGNvbnN0IGkgPSBmdW5jdGlvbkxpc3QuaW5kZXhPZihzdWJzY3JpYmVyKTtcblx0XHRcdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0XHRcdGZ1bmN0aW9uTGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1Ymxpc2godHJpZ2dlckV2ZW50LCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25MaXN0ID0gX2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShmdW5jdGlvbkxpc3QpKSB7XG5cdFx0XHRmdW5jdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuXHRcdFx0XHRzdWJzY3JpYmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3Vic2NyaWJlLCBwdWJsaXNoIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRVYgPSB7XG5cdElOSVQ6IFwiaW5pdFwiLFxuXHRESUFMT0c6IHtcblx0XHRESVNQTEFZX01PREU6IFwiZGlzcGxheU1vZGVcIixcblx0XHRFRElUX01PREU6IFwiZWRpdE1vZGVcIixcblx0XHRFRElUX01PREVfUE9QOiBcImVkaXRNb2RlUG9wdWxhdGVcIixcblx0XHRQUk9KRUNUX01PREU6IFwicHJvamVjdE1vZGVcIixcblx0fSxcblx0VEFTSzoge1xuXHRcdERFTEVURTogXCJkZWxldGVUYXNrXCIsXG5cdFx0QUREOiBcImFkZFRhc2tcIixcblx0XHRVUERBVEU6IFwidXBkYXRlVGFza1wiLFxuXHR9LFxuXHRDQVJEOiB7XG5cdFx0Q0xJQ0s6IFwiY2FyZENsaWNrXCIsXG5cdFx0REVMRVRFOiBcImNhcmREZWxldGVcIixcblx0fSxcblx0UFJPSkVDVDoge1xuXHRcdEFERDogXCJhZGRQcm9qZWN0XCIsXG5cdFx0REVMRVRFOiBcImRlbGV0ZVByb2plY3RcIixcblx0fSxcblx0UkVTRVQ6IHtcblx0XHRBRERfREVGQVVMVFM6IFwiYWRkRGVmYXVsdHNcIixcblx0XHRDTEVBUl9BTEw6IFwiY2xlYXJBbGxcIixcblx0fSxcblx0V0FSTjoge1xuXHRcdFRBU0tfU1VCTUlUOiBcIndhcm5UYXNrU3VibWl0XCIsXG5cdFx0VEFTS19ERUxFVEU6IFwid2FyblRhc2tEZWxldGVcIixcblx0XHRQUk9KRUNUX0RFTEVURTogXCJ3YXJuUHJvamVjdERlbGV0ZVwiLFxuXHRcdERFRkFVTFRTOiBcIndhcm5EZWZhdWx0c1wiLFxuXHRcdENMRUFSX0FMTDogXCJ3YXJuQ2xlYXJBbGxcIixcblx0fSxcblx0QUREX0RSQUdfRFJPUDogXCJhZGREcmFnRHJvcFwiLFxuXHRBRERfU1RBVFVTX0RST1A6IFwiYWRkU3RhdHVzRHJvcFwiLFxufTtcbiIsImltcG9ydCB7IFRhc2tzLCBQcm9qZWN0cyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tIFwiLi9kaWFsb2dcIjtcbmltcG9ydCB7IFB1YlN1YiwgRVYgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnksIG1ha2VGaXJzdFVwcGVyLCBmaW5kUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHNpZGViYXJPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLW9wZW4tYnRuXCIpO1xuY29uc3Qgc2lkZWJhckNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNsb3NlLWJ0blwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5zaWRlYmFyT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKSk7XG5zaWRlYmFyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIikpO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpc3BsYXllZFwiKTtcbmNvbnN0IHN0YXR1c2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNlcy1jb250YWluZXJcIik7XG5cbmNvbnN0IEFMTF9UQVNLUyA9IFwiYWxsLXRhc2tzXCI7XG5jb25zdCBOT19QUk9KRUNUID0gXCJ1bnNvcnRlZFwiO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gQUxMX1RBU0tTO1xuXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG5cdGlmIChjdXJyZW50UHJvamVjdCA9PT0gQUxMX1RBU0tTKSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKEFMTF9UQVNLUyk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoVGFza3MuZ2V0U29ydGVkVGFza3MoKSk7XG5cdFx0dXBkYXRlU2lkZWJhcigpO1xuXHR9IGVsc2Uge1xuXHRcdHByb2plY3REaXNwbGF5ZWQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcihjdXJyZW50UHJvamVjdCk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoXG5cdFx0XHRUYXNrcy5nZXRTb3J0ZWRUYXNrc0J5KFxuXHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0Y3VycmVudFByb2plY3QgPT09IE5PX1BST0pFQ1QgPyBcIlwiIDogY3VycmVudFByb2plY3Rcblx0XHRcdClcblx0XHQpO1xuXHRcdHVwZGF0ZVNpZGViYXIoKTtcblx0fVxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbHVtbnMoZGlzcGxheVRhc2tzKSB7XG5cdC8vIFJlc2V0IHRoZSBjb2x1bW5zXG5cdFsuLi5zdGF0dXNlc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocm93KSA9PiAocm93LnRleHRDb250ZW50ID0gXCJcIikpO1xuXG5cdC8vIEJ1aWxkIGNvbHVtbiBjb250ZW50XG5cdGRpc3BsYXlUYXNrcy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgY29sdW1uTmFtZSA9IGNvbHVtblswXTtcblx0XHRjb25zdCBzdGF0dXNOYW1lID0gbWFrZUZpcnN0VXBwZXIoY29sdW1uTmFtZSk7XG5cblx0XHRjb25zdCBjb2x1bW5Db250ZW50ID0gZWxGYWN0b3J5KFxuXHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtY29sdW1uXCIsXG5cdFx0XHRcdGlkOiBgJHtjb2x1bW5OYW1lfS1jb2x1bW5gLFxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDJcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtbmFtZVwiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBzdGF0dXNOYW1lICsgXCI6XCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XVxuXHRcdCk7XG5cblx0XHQvLyBCdWlsZCB0YXNrIGNhcmRzXG5cdFx0Y29sdW1uWzFdLmZvckVhY2goKHRhc2tDb250YWluZXIpID0+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSB0YXNrQ29udGFpbmVyLmdldFByb3BlcnRpZXMoKTtcblxuXHRcdFx0Y29sdW1uQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGFzay1jYXJkIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRcdFx0cHJpb3JpdHk6IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0dGFza0lkOiB0YXNrLmlkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYXJkLXNlY3Rpb25cIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImgzXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay50aXRsZSksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImNhcmQtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS10cmFzaC1vIGNhcmQtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImFyaWEtaGlkZGVuXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYXJkLXNlY3Rpb25cIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3RcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay5wcm9qZWN0KSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImR1ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiB0YXNrLmR1ZSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQvLyBBcHBlbmQgdG8gY29ycmVjdCByb3dcblx0XHRpZiAoaW5kZXggPCAyKSB7XG5cdFx0XHRzdGF0dXNlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KGNvbHVtbkNvbnRlbnQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly9NYWtlIGVhY2ggc3RhdHVzLWNvbHVtbiBhYmxlIHRvIHJlY2VpdmUgZHJhZ0Ryb3BzXG5cdFB1YlN1Yi5wdWJsaXNoKEVWLkFERF9TVEFUVVNfRFJPUCk7XG5cblx0Ly8gTWFrZSBlYWNoIHRhc2sgY2xpY2thYmxlIGFuZCBkcmFnZ2FibGVcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIikuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWLkFERF9EUkFHX0RST1AsIGNhcmQpO1xuXHRcdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiY2FyZC1kZWxldGUtYnRuXCIpKSB7XG5cdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLkNBUkQuREVMRVRFLCBlLCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVi5DQVJELkNMSUNLLCBlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpZGViYXIoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuXHRjb25zdCByZXBsYWNlbWVudENvbnRhaW5lciA9IGVsRmFjdG9yeShcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NMaXN0OiBcInByb2plY3RzLWNvbnRhaW5lclwiIH0sXG5cdFx0W0FMTF9UQVNLUywgTk9fUFJPSkVDVCwgLi4uUHJvamVjdHMuZ2V0UHJvamVjdHMoKV0ubWFwKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxGYWN0b3J5KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtbmFtZSBwcm9qZWN0LWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRkYXRhc2V0OiB7IHByb2plY3RGaWx0ZXI6IHByb2plY3QgfSxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGVsRmFjdG9yeShcImJ1dHRvblwiLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHByb2plY3QpLFxuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZmlsdGVyLWJ0blwiLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFtBTExfVEFTS1MsIE5PX1BST0pFQ1RdLmluY2x1ZGVzKHByb2plY3QpXG5cdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0XHRcdDogZWxGYWN0b3J5KFxuXHRcdFx0XHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0LWRlbGV0ZS1idG5cIixcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImlcIiwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZmEgZmEtdHJhc2hcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0ICApLFxuXHRcdFx0XHRdXG5cdFx0XHQpO1xuXHRcdH0pXG5cdCk7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWJ1dHRvbnNcIilcblx0XHQuYmVmb3JlKGh0bWxGYWN0b3J5KHJlcGxhY2VtZW50Q29udGFpbmVyKSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1maWx0ZXItYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsdGVyUHJvamVjdFZpZXcpO1xuXHRcdGlmIChidXR0b24udGV4dENvbnRlbnQgPT09IG1ha2VGaXJzdFVwcGVyKGN1cnJlbnRQcm9qZWN0KSkge1xuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblx0XHR9XG5cdH0pO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGVsZXRlLWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUoZS50YXJnZXQpO1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuV0FSTi5QUk9KRUNUX0RFTEVURSwgc2VsZWN0ZWRQcm9qZWN0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Q3VycmVudFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KSB7XG5cdGN1cnJlbnRQcm9qZWN0ID0gc2VsZWN0ZWRQcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdCA/IEFMTF9UQVNLUyA6IGN1cnJlbnRQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJQcm9qZWN0VmlldyhlKSB7XG5cdGN1cnJlbnRQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKGUudGFyZ2V0KTtcblx0dXBkYXRlU2NyZWVuKCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG59XG5cbmNvbnN0IHN1YlJlc2V0UHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5ERUxFVEUsIHJlc2V0Q3VycmVudFByb2plY3QpO1xuXG5jb25zdCBzdWJJbml0ID0gUHViU3ViLnN1YnNjcmliZShFVi5JTklULCB1cGRhdGVTY3JlZW4pO1xuXG5jb25zdCBzdWJEZWxldGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLkRFTEVURSwgdXBkYXRlU2NyZWVuKTtcbmNvbnN0IHN1YkFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suQURELCB1cGRhdGVTY3JlZW4pO1xuY29uc3Qgc3ViVXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5VUERBVEUsIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlBST0pFQ1QuQURELCB1cGRhdGVTY3JlZW4pO1xuY29uc3Qgc3ViRGVsZXRlUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5ERUxFVEUsIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkNsZWFyU2NyZWVuID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5DTEVBUl9BTEwsIHVwZGF0ZVNjcmVlbik7XG4iLCJpbXBvcnQgeyBtYWtlRmlyc3RVcHBlciB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xuaW1wb3J0IHsgRVYsIFB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcblxuZnVuY3Rpb24gd2FyblRhc2tEZWxldGUoc2VsZWN0ZWRJZCwgdGFza1RpdGxlLCByZW9wZW5EaWFsb2cpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxuXHRcdHRleHQ6IGBPbmNlIGRlbGV0ZWQsIHRoZSBcIiR7bWFrZUZpcnN0VXBwZXIoXG5cdFx0XHR0YXNrVGl0bGVcblx0XHQpfVwiIHRhc2sgY2Fubm90IGJlIHJlY292ZXJlZC5gLFxuXHRcdGljb246IFwid2FybmluZ1wiLFxuXHRcdGJ1dHRvbnM6IHRydWUsXG5cdFx0ZGFuZ2VyTW9kZTogdHJ1ZSxcblx0fSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuXHRcdGlmICh3aWxsRGVsZXRlKSB7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5UQVNLLkRFTEVURSwgc2VsZWN0ZWRJZCk7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiUG9vZiEgVGFzayBkZWxldGVkIVwiLFxuXHRcdFx0XHR0ZXh0OiBcIldheSB0byBnZXQgaXQgZG9uZS5cIixcblx0XHRcdFx0aWNvbjogXCJzdWNjZXNzXCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocmVvcGVuRGlhbG9nKSB7XG5cdFx0XHRcdGNvbnN0IGZha2VFdmVudCA9IHtcblx0XHRcdFx0XHR0YXJnZXQ6IHtcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogeyB2YWx1ZTogXCJpZC1idWJibGUtbWFya2VyXCIgfSxcblx0XHRcdFx0XHRcdGRhdGFzZXQ6IHsgdGFza0lkOiBzZWxlY3RlZElkIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuQ0FSRC5DTElDSywgZmFrZUV2ZW50KTtcblx0XHRcdFx0fSwgNjApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3dhbCh7XG5cdFx0XHRcdFx0dGl0bGU6IFwiTmV2ZXJtaW5kIVwiLFxuXHRcdFx0XHRcdHRleHQ6IFwiV2UnbGwgbGVhdmUgdGhhdCBvbmUgZm9yIG5vdy5cIixcblx0XHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gd2FyblByb2plY3REZWxldGUoc2VsZWN0ZWRQcm9qZWN0KSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcblx0XHR0ZXh0OiBgRGVsZXRpbmcgcHJvamVjdCBcIiR7bWFrZUZpcnN0VXBwZXIoXG5cdFx0XHRzZWxlY3RlZFByb2plY3Rcblx0XHQpfVwiIHdpbGwgYWxzbyBwZXJtYW5lbnRseSBkZWxldGUgYWxsIGl0cyB0YXNrcy5gLFxuXHRcdGljb246IFwid2FybmluZ1wiLFxuXHRcdGJ1dHRvbnM6IHRydWUsXG5cdFx0ZGFuZ2VyTW9kZTogdHJ1ZSxcblx0fSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuXHRcdGlmICh3aWxsRGVsZXRlKSB7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5QUk9KRUNULkRFTEVURSwgc2VsZWN0ZWRQcm9qZWN0KTtcblx0XHRcdHN3YWwoe1xuXHRcdFx0XHR0aXRsZTogXCJQb29mISBQcm9qZWN0IGRlbGV0ZWQhXCIsXG5cdFx0XHRcdHRleHQ6IFwiR29vZGJ5ZSBjaG9yZXMsIGhlbGxvIGZyZWVkb20uXCIsXG5cdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDMwMDAsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIk5ldmVybWluZCFcIixcblx0XHRcdFx0dGV4dDogXCJQbGVudHkgbGVmdCB0byBkbywgZWg/XCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5EZWZhdWx0cygpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxuXHRcdHRleHQ6IFwiRGVmYXVsdHMgcmVwbGFjZSBhbGwgdGFza3MgYW5kIHByb2plY3RzIHdpdGggYW4gZXhhbXBsZSBzZXQuIFxcblRoaXMgd2lsbCBlcmFzZSBhbnl0aGluZyB5b3UgaGF2ZSBzYXZlZC5cIixcblx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRidXR0b25zOiB0cnVlLFxuXHRcdGRhbmdlck1vZGU6IHRydWUsXG5cdH0pLnRoZW4oKHdpbGxSZXN0b3JlRGVmYXVsdHMpID0+IHtcblx0XHRpZiAod2lsbFJlc3RvcmVEZWZhdWx0cykge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuUkVTRVQuQUREX0RFRkFVTFRTKTtcblx0XHRcdHN3YWwoe1xuXHRcdFx0XHR0aXRsZTogXCJCYWNrIHRvIEJhc2ljcyFcIixcblx0XHRcdFx0dGV4dDogXCJQbGF5IGFyb3VuZCAtIHlvdSBjYW4gYWx3YXlzIGNsaWNrIHRoZSBidXR0b24gYWdhaW4uXCIsXG5cdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDMwMDAsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIk5ldmVybWluZCFcIixcblx0XHRcdFx0dGV4dDogXCJZZWFoLCB3ZSBkaWRuJ3Qgd2FudCB0byB5b3UgdG8gZWl0aGVyLlwiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDI1MDAsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuQ2xlYXJBbGwoKSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcblx0XHR0ZXh0OiBcIkRlbGV0aW5nIGFsbCB0YXNrcyBBTkQgcHJvamVjdHMgY2Fubm90IGJlIHVuZG9uZS5cIixcblx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRidXR0b25zOiB0cnVlLFxuXHRcdGRhbmdlck1vZGU6IHRydWUsXG5cdH0pLnRoZW4oKHdpbGxDbGVhckFsbCkgPT4ge1xuXHRcdGlmICh3aWxsQ2xlYXJBbGwpIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlJFU0VULkNMRUFSX0FMTCk7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiV0hPT1NIIVwiLFxuXHRcdFx0XHR0ZXh0OiBcIkFsbCBnb25lLlwiLFxuXHRcdFx0XHRpY29uOiBcInN1Y2Nlc3NcIixcblx0XHRcdFx0YnV0dG9uczogZmFsc2UsXG5cdFx0XHRcdHRpbWVyOiAyMDAwLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3YWwoe1xuXHRcdFx0XHR0aXRsZTogXCJQaGV3IVwiLFxuXHRcdFx0XHR0ZXh0OiBcIlRoYXQgd2FzIGEgY2xvc2Ugb25lLlwiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDIwMDAsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuVGFza1N1Ym1pdChzdWJtaXRJZCwgdmFsdWVzQXJyYXkpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQWxsIHNldD9cIixcblx0XHR0ZXh0OiBgUmVhZHkgdG8gc3VibWl0ICR7c3VibWl0SWQgPT09IDAgPyBcImEgbmV3IHRhc2tcIiA6IFwieW91ciBjaGFuZ2VzXCJ9P2AsXG5cdFx0aWNvbjogXCJ3YXJuaW5nXCIsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRkYW5nZXJNb2RlOiB0cnVlLFxuXHR9KS50aGVuKCh3aWxsU3VibWl0KSA9PiB7XG5cdFx0aWYgKHdpbGxTdWJtaXQpIHtcblx0XHRcdGlmIChzdWJtaXRJZCA9PT0gMCkge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVi5UQVNLLkFERCwgdmFsdWVzQXJyYXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5VUERBVEUsIHN1Ym1pdElkLCB2YWx1ZXNBcnJheSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLkRJQUxPRy5FRElUX01PREUpO1xuXHRcdFx0Y29uc3QgcmVidWlsdFRhc2sgPSB2YWx1ZXNBcnJheS5yZWR1Y2UoXG5cdFx0XHRcdChhY2MsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0XHRhY2NbY3VycmVudFswXV0gPSBjdXJyZW50WzFdO1xuXHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgaWQ6IHN1Ym1pdElkIH1cblx0XHRcdCk7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5ESUFMT0cuRURJVF9NT0RFX1BPUCwgcmVidWlsdFRhc2spO1xuXHRcdH1cblx0fSk7XG59XG5cbmNvbnN0IHN1Yldhcm5UYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5XQVJOLlRBU0tfREVMRVRFLCB3YXJuVGFza0RlbGV0ZSk7XG5jb25zdCBzdWJXYXJuUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuV0FSTi5QUk9KRUNUX0RFTEVURSwgd2FyblByb2plY3REZWxldGUpO1xuY29uc3Qgc3ViV2FyblN1Ym1pdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuV0FSTi5UQVNLX1NVQk1JVCwgd2FyblRhc2tTdWJtaXQpO1xuXG5jb25zdCBzdWJXYXJuRGVmYXVsdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLldBUk4uREVGQVVMVFMsIHdhcm5EZWZhdWx0cyk7XG5jb25zdCBzdWJXYXJuQ2xlYXJBbGwgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLldBUk4uQ0xFQVJfQUxMLCB3YXJuQ2xlYXJBbGwpO1xuIiwiaW1wb3J0IHsgUHViU3ViLCBFViB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgUHJvamVjdHMsIFRhc2tzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBmcm9tIE1ETiB0byB0ZXN0IGlzIHN0b3JhZ2UgaXMgYXZhaWxhYmxlIG9uIG9sZGVyIGJyb3dzZXJzLlxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG5cdGxldCBzdG9yYWdlO1xuXHR0cnkge1xuXHRcdHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG5cdFx0Y29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuXHRcdHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcblx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuXHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuXHRcdFx0KGUuY29kZSA9PT0gMjIgfHxcblx0XHRcdFx0Ly8gRmlyZWZveFxuXHRcdFx0XHRlLmNvZGUgPT09IDEwMTQgfHxcblx0XHRcdFx0Ly8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcblx0XHRcdFx0ZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG5cdFx0XHRcdC8vIEZpcmVmb3hcblx0XHRcdFx0ZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG5cdFx0XHQvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuXHRcdFx0c3RvcmFnZSAmJlxuXHRcdFx0c3RvcmFnZS5sZW5ndGggIT09IDBcblx0XHQpO1xuXHR9XG59XG5cbmxldCBzdG9yYWdlVHlwZTtcbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG5cdHN0b3JhZ2VUeXBlID0gbG9jYWxTdG9yYWdlO1xufSBlbHNlIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwic2Vzc2lvblN0b3JhZ2VcIikpIHtcblx0c3RvcmFnZVR5cGUgPSBzZXNzaW9uU3RvcmFnZTtcbn0gZWxzZSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLlJFU0VULkFERF9ERUZBVUxUUyk7XG59XG5cbmlmICghIXN0b3JhZ2VUeXBlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSkge1xuXHRnZXRTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNldFN0b3JhZ2UoKSB7XG5cdGNvbnN0IGFsbFRhc2tzID0gVGFza3MuZ2V0QWxsVGFza3MoKS5tYXAoKHRhc2spID0+IHtcblx0XHRjb25zdCB0YXNrTm9JZCA9IHRhc2suZ2V0UHJvcGVydGllcygpO1xuXHRcdGRlbGV0ZSB0YXNrTm9JZC5pZDtcblx0XHRyZXR1cm4gdGFza05vSWQ7XG5cdH0pO1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IFByb2plY3RzLmdldFByb2plY3RzKCk7XG5cblx0c3RvcmFnZVR5cGUuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG5cdHN0b3JhZ2VUeXBlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShbLi4uYWxsVGFza3NdKSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG5cdGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yYWdlVHlwZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuXHRjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFRhc2tzXCIpKS5tYXAoKGl0ZW0pID0+XG5cdFx0T2JqZWN0LmVudHJpZXMoaXRlbSlcblx0KTtcblxuXHRzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuUFJPSkVDVC5BREQsIHByb2plY3QpO1xuXHR9KTtcblxuXHRzdG9yZWRUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5BREQsIGl0ZW0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuXHRzdG9yYWdlVHlwZS5jbGVhcigpO1xufVxuXG5jb25zdCBzdWJTZXRBZGRUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLkFERCwgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXREZWxldGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLkRFTEVURSwgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXRVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLlVQREFURSwgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXRBZGRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkFERCwgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXREZWxldGVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkRFTEVURSwgc2V0U3RvcmFnZSk7XG5cbmNvbnN0IHN1YkNsZWFyU3RvcmFnZSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUkVTRVQuQ0xFQVJfQUxMLCBjbGVhclN0b3JhZ2UpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHViU3ViLCBFViB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFRhc2tJZCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL3dlYi1zdG9yYWdlXCI7XG5pbXBvcnQgXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vZHJhZy1kcm9wXCI7XG5pbXBvcnQgXCIuL3dhcm5pbmdzXCI7XG5cbmNvbnN0IEJvdHRvbUJ0bnMgPSAoKCkgPT4ge1xuXHRjb25zdCBhZGRSZXZlYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1yZXZlYWwtYnRuXCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuXHRjb25zdCBzdG9yYWdlUmV2ZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yYWdlLXJldmVhbC1idG5cIik7XG5cdGNvbnN0IGRlZmF1bHRzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0cy1idG5cIik7XG5cdGNvbnN0IGNsZWFyU3RvcmFnZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItc3RvcmFnZS1idG5cIik7XG5cblx0YWRkUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0YWRkUmV2ZWFsQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGFkZFRhc2tCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0YWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRoaWRlU3RvcmFnZUJ0bnMoKTtcblx0fSk7XG5cblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RNb2RlKTtcblxuXHRzdG9yYWdlUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0c3RvcmFnZVJldmVhbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRkZWZhdWx0c0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRjbGVhclN0b3JhZ2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0aGlkZUFkZEJ0bnMoKTtcblx0fSk7XG5cblx0ZGVmYXVsdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5XQVJOLkRFRkFVTFRTKTtcblx0fSk7XG5cblx0Y2xlYXJTdG9yYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuV0FSTi5DTEVBUl9BTEwpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBoaWRlQWRkQnRucygpIHtcblx0XHRhZGRSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0YWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGlkZVN0b3JhZ2VCdG5zKCkge1xuXHRcdHN0b3JhZ2VSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0ZGVmYXVsdHNCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0Y2xlYXJTdG9yYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkRGlzcGxheSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkRJU1BMQVlfTU9ERSwgaGlkZUFkZEJ0bnMpO1xuXHRjb25zdCBzdWJBZGRFZGl0ID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRURJVF9NT0RFLCBoaWRlQWRkQnRucyk7XG5cdGNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5QUk9KRUNUX01PREUsIGhpZGVBZGRCdG5zKTtcblx0Y29uc3Qgc3ViU3RvckRlZmF1bHRzID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5BRERfREVGQVVMVFMsIGhpZGVTdG9yYWdlQnRucyk7XG5cdGNvbnN0IHN1YlN0b3JDbGVhckFsbCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUkVTRVQuQ0xFQVJfQUxMLCBoaWRlU3RvcmFnZUJ0bnMpO1xuXHRjb25zdCBzdWJTdG9yRGlzcGxheSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkRJU1BMQVlfTU9ERSwgaGlkZVN0b3JhZ2VCdG5zKTtcblxuXHRyZXR1cm4geyBhZGRUYXNrQnRuIH07XG59KSgpO1xuXG5mdW5jdGlvbiBvcGVuRGlzcGxheU1vZGUoZSkge1xuXHRQdWJTdWIucHVibGlzaChFVi5ESUFMT0cuRElTUExBWV9NT0RFLCBmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGhhbmRsZVRhc2tEZWxldGUoZSwgdHJ1ZSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRWRpdE1vZGUoZSkge1xuXHRpZiAoZS50YXJnZXQgIT09IEJvdHRvbUJ0bnMuYWRkVGFza0J0bikge1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKVxuXHRcdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdE1vZGUpO1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tEZWxldGUpO1xuXHR9XG5cblx0UHViU3ViLnB1Ymxpc2goRVYuRElBTE9HLkVESVRfTU9ERSk7XG5cblx0aWYgKGUudGFyZ2V0LmlkID09PSBcImVkaXQtYnRuXCIpIHtcblx0XHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIGZpbmRUYXNrSWQoZS50YXJnZXQpKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuRElBTE9HLkVESVRfTU9ERV9QT1AsIHRhc2spO1xuXHR9XG5cblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVUYXNrU3VibWl0KTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrQ2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RNb2RlKCkge1xuXHRQdWJTdWIucHVibGlzaChFVi5ESUFMT0cuUFJPSkVDVF9NT0RFKTtcblxuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kZVwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdENhbmNlbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tDYW5jZWwoZSkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXG5cdGlmIChmaW5kVGFza0lkKGUudGFyZ2V0KSkge1xuXHRcdG9wZW5EaXNwbGF5TW9kZShlKTtcblx0fSBlbHNlIHtcblx0XHRkaWFsb2cuY2xvc2UoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2FuY2VsKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdENhbmNlbCk7XG5cblx0ZGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tEZWxldGUoZSwgcmVvcGVuRGlhbG9nKSB7XG5cdGNvbnN0IHNlbGVjdGVkSWQgPSBmaW5kVGFza0lkKGUudGFyZ2V0KTtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBzZWxlY3RlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdGRpYWxvZy5jbG9zZSgpO1xuXHRQdWJTdWIucHVibGlzaChFVi5XQVJOLlRBU0tfREVMRVRFLCBzZWxlY3RlZElkLCB0YXNrLnRpdGxlLCByZW9wZW5EaWFsb2cpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNBcnJheSgpIHtcblx0Y29uc3Qgc3VibWl0dGVkSW5mbyA9IFtdO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Ym1pdC1pbmZvXCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0bGV0IHN1Ym1pdFZhbHVlID0ge1xuXHRcdFx0aW5wdXQ6IGVsLnZhbHVlLFxuXHRcdFx0c2VsZWN0OiBbLi4uZWwuY2hpbGRyZW5dLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQgPT09IHRydWUpWzBdXG5cdFx0XHRcdD8udmFsdWUsXG5cdFx0XHR0ZXh0YXJlYTogZWwudGV4dENvbnRlbnQsXG5cdFx0fVtlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCldO1xuXHRcdHN1Ym1pdHRlZEluZm8ucHVzaChbZWwuaWQsIHN1Ym1pdFZhbHVlXSk7XG5cdH0pO1xuXHRyZXR1cm4gc3VibWl0dGVkSW5mbztcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza1N1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3Qgc3VibWl0SWQgPSBmaW5kVGFza0lkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idG5cIikpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXHRkaWFsb2cuY2xvc2UoKTtcblx0Y29uc3QgdmFsdWVzQXJyYXkgPSBnZXRWYWx1ZXNBcnJheSgpO1xuXHRQdWJTdWIucHVibGlzaChFVi5XQVJOLlRBU0tfU1VCTUlULCBzdWJtaXRJZCwgdmFsdWVzQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIikudmFsdWU7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLlBST0pFQ1QuQURELCBuZXdQcm9qZWN0TmFtZSk7XG59XG5cbmNvbnN0IHN1YkNhcmRDbGljayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuQ0FSRC5DTElDSywgb3BlbkRpc3BsYXlNb2RlKTtcbmNvbnN0IHN1YkNhcmREZWxldGUgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkNBUkQuREVMRVRFLCBoYW5kbGVUYXNrRGVsZXRlKTtcblB1YlN1Yi5wdWJsaXNoKEVWLklOSVQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9