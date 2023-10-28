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
	--modal-spacer: min(4vw, 18px);

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
	padding: var(--modal-spacer);
	display: flex;
	flex-direction: column;
	gap: var(--modal-spacer);
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
	background-color: var(--display-mode-bg);
}

.display-header {
	margin-bottom: 10px;
	font-size: 1.6rem;
}

.display-divider {
	height: 2px;
	background-color: var(--text-dark);
	border-radius: 2px;
}

.display-details {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.display-item {
	display: flex;
	gap: 10px;
}

.display-label {
	width: 62px;
	color: var(--text-dark);
	text-align: right;
}

.display-value {
	flex: 1;
}

#edit-btn {
	background-color: var(--edit-btn-bg);
	color: var(--text-light);
}

#display-close-btn {
	color: var(--edit-btn-bg);
	border: 2px solid currentColor;
}

/* ---------------     /Display Mode     --------------- */
/* ---------------     Edit Mode     --------------- */

.edit-mode {
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
`, "",{"version":3,"sources":["webpack://./src/styles/dialog.css"],"names":[],"mappings":"AAAA;CACC,8BAA8B;;CAE9B,uBAAuB;CACvB,YAAY;CACZ,YAAY;;CAEZ,mBAAmB;CACnB,kCAAkC;CAClC,iBAAiB;AAClB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,4BAA4B;CAC5B,aAAa;CACb,sBAAsB;CACtB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,OAAO;;CAEP,YAAY;;CAEZ,mBAAmB;CACnB,iBAAiB;CACjB,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA,yDAAyD;;AAEzD;CACC,wCAAwC;AACzC;;AAEA;CACC,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,kCAAkC;CAClC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,oCAAoC;CACpC,wBAAwB;AACzB;;AAEA;CACC,yBAAyB;CACzB,8BAA8B;AAC/B;;AAEA,0DAA0D;AAC1D,sDAAsD;;AAEtD;CACC,qCAAqC;CACrC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,OAAO;;CAEP,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,oCAAoC;CACpC,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,eAAe;AAChB;;AAEA;;;CAGC,OAAO;CACP,gBAAgB;CAChB,gBAAgB;CAChB,YAAY;;CAEZ,oCAAoC;CACpC,kBAAkB;;CAElB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,QAAQ;;CAER,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,wBAAwB;CACxB,oCAAoC;AACrC;;AAEA;CACC,yBAAyB;CACzB,8BAA8B;AAC/B;AACA,uDAAuD;AACvD,yDAAyD;;AAEzD;CACC,sBAAsB;AACvB;;AAEA;CACC,qCAAqC;CACrC,WAAW;AACZ;;AAEA;CACC,0BAA0B;CAC1B,qCAAqC;AACtC;;AAEA,0DAA0D","sourcesContent":["dialog {\n\t--modal-spacer: min(4vw, 18px);\n\n\twidth: min(88vw, 500px);\n\tmargin: auto;\n\tborder: none;\n\n\tborder-radius: 10px;\n\tbox-shadow: 4px 5px 10px #00000099;\n\tfont-size: 1.3rem;\n}\n\ndialog::backdrop {\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\ndialog > * {\n\tpadding: var(--modal-spacer);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\ndialog .buttons {\n\tdisplay: flex;\n\tgap: var(--modal-spacer);\n}\n\ndialog .buttons > * {\n\tflex: 1;\n\n\tpadding: 6px;\n\n\tborder-radius: 10px;\n\tfont-size: 1.6rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n}\n\n/* ---------------     Display Mode     --------------- */\n\n.display-mode {\n\tbackground-color: var(--display-mode-bg);\n}\n\n.display-header {\n\tmargin-bottom: 10px;\n\tfont-size: 1.6rem;\n}\n\n.display-divider {\n\theight: 2px;\n\tbackground-color: var(--text-dark);\n\tborder-radius: 2px;\n}\n\n.display-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.display-item {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.display-label {\n\twidth: 62px;\n\tcolor: var(--text-dark);\n\ttext-align: right;\n}\n\n.display-value {\n\tflex: 1;\n}\n\n#edit-btn {\n\tbackground-color: var(--edit-btn-bg);\n\tcolor: var(--text-light);\n}\n\n#display-close-btn {\n\tcolor: var(--edit-btn-bg);\n\tborder: 2px solid currentColor;\n}\n\n/* ---------------     /Display Mode     --------------- */\n/* ---------------     Edit Mode     --------------- */\n\n.edit-mode {\n\tbackground-color: var(--edit-mode-bg);\n\tcolor: var(--save-btn-bg);\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--modal-spacer);\n}\n\n.form-item {\n\tposition: relative;\n\tflex: 1;\n\n\tdisplay: flex;\n\tgap: 6px;\n}\n\n.form-row p {\n\twidth: 100%;\n\tmargin: var(--modal-spacer) 0 0 76px;\n\tfont-size: 1.2rem;\n}\n\n.edit-mode label {\n\twidth: 70px;\n\ttext-align: end;\n}\n\ninput,\nselect,\ntextarea {\n\tflex: 1;\n\tappearance: none;\n\tpadding: 1px 8px;\n\twidth: 100px;\n\n\tborder: 1px solid var(--save-btn-bg);\n\tborder-radius: 5px;\n\n\tfont-family: unset;\n\tfont-size: inherit;\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform .fa-chevron-down {\n\tposition: absolute;\n\tright: 4%;\n\ttop: 36%;\n\n\tcolor: black;\n\tfont-size: 10px;\n}\n\n#save-btn {\n\tcolor: var(--text-light);\n\tbackground-color: var(--save-btn-bg);\n}\n\n#cancel-btn {\n\tcolor: var(--save-btn-bg);\n\tborder: 2px solid currentColor;\n}\n/* ---------------     /Edit Mode     --------------- */\n/* ---------------     Project Mode     --------------- */\n\n.project-mode {\n\tbackground-color: pink;\n}\n\n#project-save-btn {\n\tbackground-color: var(--text-project);\n\tcolor: pink;\n}\n\n#project-cancel-btn {\n\tcolor: var(--text-project);\n\tborder: 2px solid var(--text-project);\n}\n\n/* ---------------     /Project Mode     --------------- */\n"],"sourceRoot":""}]);
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

.logo-container {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	margin-left: 18px;
}

#logo {
	height: 50px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/header-footer.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;CACC,mBAAmB;CACnB,YAAY;;CAEZ,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;;CAEnB;;;;EAIC;CACD,wBAAwB;CACxB,eAAe;CACf,+BAA+B;AAChC;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,sBAAsB;CACtB,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC;EACC;IACE;EACF,8BAA8B;EAC9B,gBAAgB;CACjB;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,oDAAoD;;AAEpD,mDAAmD;;AAEnD;CACC,YAAY;;CAEZ,aAAa;CACb,QAAQ;CACR,uBAAuB;CACvB,mBAAmB;;CAEnB,kCAAkC;CAClC,wBAAwB;CACxB,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;AACD;AACA,oDAAoD","sourcesContent":["/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--header-bg-left),\n\t\tvar(--header-bg-right)\n\t);\n\tcolor: var(--text-light);\n\tfont-size: 2rem;\n\tbox-shadow: 0 3px 3px #0000004e;\n}\n\n.logo-container {\n\tdisplay: flex;\n\theight: 100%;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmargin-left: 18px;\n}\n\n#logo {\n\theight: 50px;\n}\n\nheader h1 {\n\tmargin: 10px 18px;\n\tfont-style: italic;\n\ttext-shadow: -3px 3px black;\n}\n\n#sidebar-open-btn {\n\tmargin-top: -6px;\n\tpadding: 5px 20px;\n}\n\n@media (min-width: 700px) {\n\theader {\n\t\tborder-radius: calc(var(--app-bd-rad) * 0.6) calc(var(--app-bd-rad) * 0.6) 0\n\t\t\t0;\n\t\tborder-bottom: 3px solid black;\n\t\tbox-shadow: none;\n\t}\n\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tgap: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: var(--footer-bg);\n\tcolor: var(--text-light);\n\tfont-size: 20px;\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n/* ---------------     /Footer     --------------- */\n"],"sourceRoot":""}]);
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
	--header-bg-left: #2680d9;
	--header-bg-right: #472673;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAOA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,uBAAuB;CACvB,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;;;CAGC,gBAAgB;AACjB;;AAEA,oDAAoD;AACpD,mEAAmE;AACnE;CACC,sBAAsB;CACtB,sBAAsB;CACtB,yBAAyB;CACzB,0BAA0B;CAC1B,0BAA0B;CAC1B,uBAAuB;;CAEvB,qBAAqB;CACrB,mBAAmB;CACnB,oBAAoB;CACpB,uBAAuB;;CAEvB,uBAAuB;CACvB,uBAAuB;CACvB,sBAAsB;CACtB,wBAAwB;;CAExB,oBAAoB;;CAEpB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB;;;;;4HAK2H;CAC3H;;YAEW;AACZ;;AAEA,oEAAoE","sourcesContent":["@import url(./main.css);\n@import url(./sidebar.css);\n@import url(./dialog.css);\n@import url(./header-footer.css);\n@import url(./warnings.css);\n@import url(\"https://use.typekit.net/pke3bbf.css\");\n\n/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\na {\n\tcolor: unset;\n}\n\nbutton {\n\tcolor: unset;\n\tbackground-color: unset;\n\tborder: none;\n\tfont-size: inherit;\n\tfont-family: unset;\n\tcursor: pointer;\n}\n\nh1,\nh2,\nh3 {\n\tfont-size: unset;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n:root {\n\t--save-btn-bg: #004b6b;\n\t--edit-btn-bg: #473262;\n\t--header-bg-left: #2680d9;\n\t--header-bg-right: #472673;\n\t--display-mode-bg: #eee0ff;\n\t--edit-mode-bg: #e0f6ff;\n\n\t--text-light: #fbfcff;\n\t--text-med: #404040;\n\t--text-dark: #4f4162;\n\t--text-project: #760a1c;\n\n\t--priority-low: #87bbf2;\n\t--priority-med: #ffc000;\n\t--priority-hi: #c00000;\n\t--priority-none: #a6a6a6;\n\n\t--footer-bg: #222a35;\n\n\t--font-main: futura-pt;\n}\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: linear-gradient(\n\t\t\thsla(198, 100%, 41%, 0.745),\n\t\t\thsla(266, 32%, 50%, 0.745)\n\t\t),\n\t\tno-repeat center/cover\n\t\t\turl(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stones_Porto_DSCF0572.jpg/1024px-Stones_Porto_DSCF0572.jpg);\n\tfont-family: var(--font-main), system-ui, -apple-system, BlinkMacSystemFont,\n\t\t\"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `.swal-modal {
	box-shadow: 4px 5px 10px #00000099;
}
`, "",{"version":3,"sources":["webpack://./src/styles/warnings.css"],"names":[],"mappings":"AAAA;CACC,kCAAkC;AACnC","sourcesContent":[".swal-modal {\n\tbox-shadow: 4px 5px 10px #00000099;\n}\n"],"sourceRoot":""}]);
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
			<section class="display-body">
				<div class="display-header">
					<h3 id="display-title"></h3>
					<div class="display-divider"></div>
				</div>
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
				<button type="button" id="display-close-btn">Cancel</button>
				<button type="button" id="edit-btn">Edit</button>
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
}

function buildEditMode() {
	dialog.innerHTML = `
		<form class="edit-mode" method="dialog">
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
				<button type="button" id="cancel-btn">Back</button>
				<button type="submit" id="save-btn">Save</button>
			</section>
		</form>
	`;
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
	INDEX: {
		CARD_CLICK: "cardClick",
		CARD_DELETE: "cardDelete",
		REOPEN_EDIT: "reopenEditMode",
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
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.INDEX.CARD_DELETE, e, false);
			} else {
				_pubsub__WEBPACK_IMPORTED_MODULE_2__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_2__.EV.INDEX.CARD_CLICK, (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findTaskId)(e.target));
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);




function warnTaskDelete(selectedId, taskTitle) {
	sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
		title: "Are you sure?",
		text: `Once deleted, the "${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(
			taskTitle
		)}" task cannot be recovered.`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.TASK.DELETE, selectedId);
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Poof! Task deleted!",
				text: "Way to get it done.",
				icon: "success",
				buttons: false,
				timer: 2000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Nevermind!",
				text: "We'll leave that one for now.",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnProjectDelete(selectedProject) {
	sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
		title: "Are you sure?",
		text: `Deleting project "${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeFirstUpper)(
			selectedProject
		)}" will also permanently delete all its tasks.`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.PROJECT.DELETE, selectedProject);
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Poof!",
				text: "Goodbye chores, hello freedom.",
				icon: "success",
				buttons: false,
				timer: 3000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Still working!",
				text: "Plenty left to do, eh?",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnDefaults() {
	sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
		title: "Are you sure?",
		text: "Defaults replace all tasks and projects with an example set. \nThis will erase anything you have saved.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willRestoreDefaults) => {
		if (willRestoreDefaults) {
			_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.RESET.ADD_DEFAULTS);
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Back to Basics!",
				text: "Play around - you can always click the button again.",
				icon: "success",
				buttons: false,
				timer: 3000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Nevermind!",
				text: "Yeah, we didn't want to you to either.",
				buttons: false,
				timer: 2500,
			});
		}
	});
}

function warnClearAll() {
	sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
		title: "Are you sure?",
		text: "Deleting all tasks AND projects cannot be undone.",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willClearAll) => {
		if (willClearAll) {
			_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.RESET.CLEAR_ALL);
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "WHOOSH!",
				text: "All gone.",
				icon: "success",
				buttons: false,
				timer: 2000,
			});
		} else {
			sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
				title: "Phew!",
				text: "That was a close one.",
				buttons: false,
				timer: 2000,
			});
		}
	});
}

function warnTaskSubmit(submitId, valuesArray) {
	sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
		title: "All set?",
		text: `Ready to submit ${submitId === 0 ? "a new task" : "your changes"}?`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willSubmit) => {
		if (willSubmit) {
			if (submitId === 0) {
				_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.TASK.ADD, valuesArray);
			} else {
				_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.TASK.UPDATE, submitId, valuesArray);
			}
		} else {
			const rebuiltTask = valuesArray.reduce(
				(acc, current) => {
					acc[current[0]] = current[1];
					return acc;
				},
				{ id: submitId }
			);
			_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.INDEX.REOPEN_EDIT, rebuiltTask);
		}
	});
}

const subWarnTask = _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.WARN.TASK_DELETE, warnTaskDelete);
const subWarnProject = _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.WARN.PROJECT_DELETE, warnProjectDelete);
const subWarnSubmit = _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.WARN.TASK_SUBMIT, warnTaskSubmit);

const subWarnDefaults = _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.WARN.DEFAULTS, warnDefaults);
const subWarnClearAll = _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_1__.EV.WARN.CLEAR_ALL, warnClearAll);


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


/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a2a665260e989ae67e2b.png";

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
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");











document.getElementById("logo").src = _img_logo_png__WEBPACK_IMPORTED_MODULE_9__;

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

	addTaskBtn.addEventListener("click", checkEditMode);
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

function openDisplayMode(selectedId) {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.DISPLAY_MODE, selectedId);

	document.getElementById("edit-btn").addEventListener("click", checkEditMode);
	document
		.getElementById("display-close-btn")
		.addEventListener("click", () => _dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close());
}

function checkEditMode(e) {
	// Check if opened from displayMode
	if (e.target !== BottomBtns.addTaskBtn) {
		document
			.getElementById("edit-btn")
			.removeEventListener("click", checkEditMode);
		document
			.getElementById("display-close-btn")
			.removeEventListener("click", () => _dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close());

		const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target))[0].getProperties();
		openEditMode(task);
	} else {
		openEditMode();
	}
}

function openEditMode(task) {
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.DIALOG.EDIT_MODE);
	if (!!task) {
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
	const taskId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target);
	if (!!taskId) {
		openDisplayMode(taskId);
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

function handleTaskDelete(e) {
	const selectedId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(e.target);
	const task = _app_controller__WEBPACK_IMPORTED_MODULE_1__.Tasks.getTasksBy("id", selectedId)[0].getProperties();
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.WARN.TASK_DELETE, selectedId, task.title);
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
	document
		.querySelector(".edit-mode")
		.removeEventListener("submit", handleTaskSubmit);
	document
		.getElementById("cancel-btn")
		.removeEventListener("click", handleTaskCancel);
	_dialog__WEBPACK_IMPORTED_MODULE_3__.dialog.close();
	const submitId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.findTaskId)(document.getElementById("save-btn"));
	const valuesArray = getValuesArray();
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.WARN.TASK_SUBMIT, submitId, valuesArray);
}

function handleProjectSubmit(e) {
	e.preventDefault();
	const newProjectName = document.getElementById("new-project").value;
	_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.PROJECT.ADD, newProjectName);
}

const subCardClick = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.INDEX.CARD_CLICK, openDisplayMode);
const subCardDelete = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.INDEX.CARD_DELETE, handleTaskDelete);
const subReopenEdit = _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.INDEX.REOPEN_EDIT, openEditMode);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.EV.INIT);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUZBQXlGLFlBQVksV0FBVyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxV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QUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTtBQUNsQjs7QUFFQSxxQkFBcUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUN4QyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6QyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6QywyQ0FBTSxTQUFTLHVDQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvd2FybmluZ3MuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZHJhZy1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2FybmluZ3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2ViLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcblx0LS1tb2RhbC1zcGFjZXI6IG1pbig0dncsIDE4cHgpO1xuXG5cdHdpZHRoOiBtaW4oODh2dywgNTAwcHgpO1xuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlcjogbm9uZTtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzAwMDAwMDk5O1xuXHRmb250LXNpemU6IDEuM3JlbTtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuZGlhbG9nID4gKiB7XG5cdHBhZGRpbmc6IHZhcigtLW1vZGFsLXNwYWNlcik7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuZGlhbG9nIC5idXR0b25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xufVxuXG5kaWFsb2cgLmJ1dHRvbnMgPiAqIHtcblx0ZmxleDogMTtcblxuXHRwYWRkaW5nOiA2cHg7XG5cblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Zm9udC1zaXplOiAxLjZyZW07XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIERpc3BsYXkgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5kaXNwbGF5LW1vZGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXNwbGF5LW1vZGUtYmcpO1xufVxuXG4uZGlzcGxheS1oZWFkZXIge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmRpc3BsYXktZGl2aWRlciB7XG5cdGhlaWdodDogMnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5kaXNwbGF5LWRldGFpbHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDIwcHg7XG59XG5cbi5kaXNwbGF5LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDEwcHg7XG59XG5cbi5kaXNwbGF5LWxhYmVsIHtcblx0d2lkdGg6IDYycHg7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpc3BsYXktdmFsdWUge1xuXHRmbGV4OiAxO1xufVxuXG4jZWRpdC1idG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuI2Rpc3BsYXktY2xvc2UtYnRuIHtcblx0Y29sb3I6IHZhcigtLWVkaXQtYnRuLWJnKTtcblx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9EaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZWRpdC1tb2RlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1tb2RlLWJnKTtcblx0Y29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcbn1cblxuLmVkaXQtbW9kZS1kZXRhaWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xufVxuXG4uZm9ybS1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLmZvcm0taXRlbSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZmxleDogMTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDZweDtcbn1cblxuLmZvcm0tcm93IHAge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiB2YXIoLS1tb2RhbC1zcGFjZXIpIDAgMCA3NnB4O1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmVkaXQtbW9kZSBsYWJlbCB7XG5cdHdpZHRoOiA3MHB4O1xuXHR0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuXHRmbGV4OiAxO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRwYWRkaW5nOiAxcHggOHB4O1xuXHR3aWR0aDogMTAwcHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2F2ZS1idG4tYmcpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0Zm9udC1mYW1pbHk6IHVuc2V0O1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhIHtcblx0cmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuZm9ybSAuZmEtY2hldnJvbi1kb3duIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogNCU7XG5cdHRvcDogMzYlO1xuXG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxMHB4O1xufVxuXG4jc2F2ZS1idG4ge1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcbn1cblxuI2NhbmNlbC1idG4ge1xuXHRjb2xvcjogdmFyKC0tc2F2ZS1idG4tYmcpO1xuXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBQcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ucHJvamVjdC1tb2RlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cblxuI3Byb2plY3Qtc2F2ZS1idG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXByb2plY3QpO1xuXHRjb2xvcjogcGluaztcbn1cblxuI3Byb2plY3QtY2FuY2VsLWJ0biB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LXByb2plY3QpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LXByb2plY3QpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyw4QkFBOEI7O0NBRTlCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osWUFBWTs7Q0FFWixtQkFBbUI7Q0FDbkIsa0NBQWtDO0NBQ2xDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxPQUFPOztDQUVQLFlBQVk7O0NBRVosbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIseUJBQXlCO0FBQzFCOztBQUVBLHlEQUF5RDs7QUFFekQ7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtDQUFrQztDQUNsQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsOEJBQThCO0FBQy9COztBQUVBLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FBRXREO0NBQ0MscUNBQXFDO0NBQ3JDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsT0FBTzs7Q0FFUCxhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0MsV0FBVztDQUNYLG9DQUFvQztDQUNwQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTs7O0NBR0MsT0FBTztDQUNQLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsWUFBWTs7Q0FFWixvQ0FBb0M7Q0FDcEMsa0JBQWtCOztDQUVsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxRQUFROztDQUVSLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw4QkFBOEI7QUFDL0I7QUFDQSx1REFBdUQ7QUFDdkQseURBQXlEOztBQUV6RDtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIscUNBQXFDO0FBQ3RDOztBQUVBLDBEQUEwRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2cge1xcblxcdC0tbW9kYWwtc3BhY2VyOiBtaW4oNHZ3LCAxOHB4KTtcXG5cXG5cXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDVweCAxMHB4ICMwMDAwMDA5OTtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5kaWFsb2cgPiAqIHtcXG5cXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbmRpYWxvZyAuYnV0dG9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbmRpYWxvZyAuYnV0dG9ucyA+ICoge1xcblxcdGZsZXg6IDE7XFxuXFxuXFx0cGFkZGluZzogNnB4O1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5kaXNwbGF5LW1vZGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpc3BsYXktbW9kZS1iZyk7XFxufVxcblxcbi5kaXNwbGF5LWhlYWRlciB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmRpc3BsYXktZGl2aWRlciB7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5kaXNwbGF5LWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5kaXNwbGF5LWl0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1sYWJlbCB7XFxuXFx0d2lkdGg6IDYycHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5kaXNwbGF5LXZhbHVlIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4jZWRpdC1idG4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtYnRuLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbiNkaXNwbGF5LWNsb3NlLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLWVkaXQtYnRuLWJnKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Rpc3BsYXkgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5lZGl0LW1vZGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtbW9kZS1iZyk7XFxuXFx0Y29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcXG59XFxuXFxuLmVkaXQtbW9kZS1kZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXg6IDE7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDZweDtcXG59XFxuXFxuLmZvcm0tcm93IHAge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogdmFyKC0tbW9kYWwtc3BhY2VyKSAwIDAgNzZweDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmVkaXQtbW9kZSBsYWJlbCB7XFxuXFx0d2lkdGg6IDcwcHg7XFxuXFx0dGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZsZXg6IDE7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAxcHggOHB4O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zYXZlLWJ0bi1iZyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcdGZvbnQtZmFtaWx5OiB1bnNldDtcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbnRleHRhcmVhIHtcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5mb3JtIC5mYS1jaGV2cm9uLWRvd24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogNCU7XFxuXFx0dG9wOiAzNiU7XFxuXFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuI3NhdmUtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2F2ZS1idG4tYmcpO1xcbn1cXG5cXG4jY2FuY2VsLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0VkaXQgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBQcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5wcm9qZWN0LW1vZGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbiNwcm9qZWN0LXNhdmUtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXByb2plY3QpO1xcblxcdGNvbG9yOiBwaW5rO1xcbn1cXG5cXG4jcHJvamVjdC1jYW5jZWwtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LXByb2plY3QpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHR2YXIoLS1oZWFkZXItYmctbGVmdCksXG5cdFx0dmFyKC0taGVhZGVyLWJnLXJpZ2h0KVxuXHQpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Ym94LXNoYWRvdzogMCAzcHggM3B4ICMwMDAwMDA0ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDE4cHg7XG59XG5cbiNsb2dvIHtcblx0aGVpZ2h0OiA1MHB4O1xufVxuXG5oZWFkZXIgaDEge1xuXHRtYXJnaW46IDEwcHggMThweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHR0ZXh0LXNoYWRvdzogLTNweCAzcHggYmxhY2s7XG59XG5cbiNzaWRlYmFyLW9wZW4tYnRuIHtcblx0bWFyZ2luLXRvcDogLTZweDtcblx0cGFkZGluZzogNXB4IDIwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRoZWFkZXIge1xuXHRcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIDBcblx0XHRcdDA7XG5cdFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdH1cblxuXHQjc2lkZWJhci1vcGVuLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG5cdGhlaWdodDogNjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDhweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5mYS5mYS1naXRodWIge1xuXHRjb2xvcjogY3VycmVudENvbG9yO1xuXHRmb250LXNpemU6IDMwcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcblx0fVxufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXItZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtREFBbUQ7O0FBRW5EO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7O0NBRVosYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7O0NBRW5COzs7O0VBSUM7Q0FDRCx3QkFBd0I7Q0FDeEIsZUFBZTtDQUNmLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQztFQUNDO0lBQ0U7RUFDRiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7O0FBRUEsb0RBQW9EOztBQUVwRCxtREFBbUQ7O0FBRW5EO0NBQ0MsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsUUFBUTtDQUNSLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLGtDQUFrQztDQUNsQyx3QkFBd0I7Q0FDeEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlOztDQUVmO0VBQ0Msc0NBQXNDO0VBQ3RDLHFDQUFxQztDQUN0QztBQUNEO0FBQ0Esb0RBQW9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oZWFkZXIge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0LFxcblxcdFxcdHZhcigtLWhlYWRlci1iZy1sZWZ0KSxcXG5cXHRcXHR2YXIoLS1oZWFkZXItYmctcmlnaHQpXFxuXFx0KTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDNweCAjMDAwMDAwNGU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRtYXJnaW4tbGVmdDogMThweDtcXG59XFxuXFxuI2xvZ28ge1xcblxcdGhlaWdodDogNTBweDtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG5cXHRtYXJnaW46IDEwcHggMThweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0dGV4dC1zaGFkb3c6IC0zcHggM3B4IGJsYWNrO1xcbn1cXG5cXG4jc2lkZWJhci1vcGVuLWJ0biB7XFxuXFx0bWFyZ2luLXRvcDogLTZweDtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KSBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KSAwXFxuXFx0XFx0XFx0MDtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuXFx0XFx0Ym94LXNoYWRvdzogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I3NpZGViYXItb3Blbi1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNjBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogOHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZmEuZmEtZ2l0aHViIHtcXG5cXHRjb2xvcjogY3VycmVudENvbG9yO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xcblxcdH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mbGV4LWNvbnRhaW5lciB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLWNvbnRlbnQge1xuXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xuXHQtLWFkZC1idG4tZGltczogNTBweDtcblxuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0LmZsZXgtY29udGFpbmVyIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XG5cblx0LmFwcC1jb250ZW50IHtcblx0XHQtLWFwcC1iZC1yYWQ6IDEwcHg7XG5cblx0XHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcblx0XHRtaW4taGVpZ2h0OiA4MHZoO1xuXHRcdGZsZXg6IDAgMCBhdXRvO1xuXG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XG5cblx0XHRib3JkZXI6IDNweCBzb2xpZCBibGFjaztcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYmQtcmFkKTtcblx0XHRib3gtc2hhZG93OiA4cHggNnB4IGJsYWNrO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpIC8gMik7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3Byb2plY3QtZGlzcGxheWVkIHtcblx0Zm9udC1zaXplOiAxLjhyZW07XG59XG5cbiNzdGF0dXNlcy1jb250YWluZXIge1xuXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLnN0YXR1cy1yb3cge1xuXHRmbGV4OiBhdXRvO1xuXHR3aWR0aDogbWluKDQ4MHB4LCAxMDAlKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFN0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnN0YXR1cy1jb2x1bW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblx0bWluLXdpZHRoOiBtaW4oMjMwcHgsIDEwMCUpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tc3RhdHVzLXNwYWNlcik7XG5cblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5zdGF0dXMtY29sdW1uLmRyYWctb3ZlciB7XG5cdGJvcmRlci1jb2xvcjogYmxhY2s7XG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzksIDMzJSwgOTIlKTtcbn1cblxuLnN0YXR1cy1uYW1lIHtcblx0Zm9udC1zaXplOiAxLjZyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YXNrLWNhcmQge1xuXHQtLXByaW9yaXR5LXdpZHRoOiAxNnB4O1xuXHQtLXNpZGUtcGFkOiA5cHg7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUpO1xuXG5cdG1pbi1oZWlnaHQ6IDYwcHg7XG5cdHBhZGRpbmc6IDRweCB2YXIoLS1zaWRlLXBhZCkgNHB4IGNhbGModmFyKC0tcHJpb3JpdHktd2lkdGgpICsgdmFyKC0tc2lkZS1wYWQpKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHR2YXIoLS1wcmlvcml0eS1jb2xvcikgdmFyKC0tcHJpb3JpdHktd2lkdGgpLFxuXHRcdHRyYW5zcGFyZW50IHZhcigtLXByaW9yaXR5LXdpZHRoKVxuXHQpO1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJveC1zaGFkb3c6IDZweCA0cHggYmxhY2s7XG5cblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnRhc2stY2FyZDpob3ZlciB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xuXHRib3gtc2hhZG93OiA3cHggNXB4IGJsYWNrO1xufVxuXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XCJoaWdoXCJdIHtcblx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGkpO1xufVxuXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XCJtZWRpdW1cIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQpO1xufVxuXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XCJsb3dcIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3cpO1xufVxuXG4jZG9uZS1jb2x1bW4gLnRhc2stY2FyZCB7XG5cdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xufVxuXG4uY2FyZC1zZWN0aW9uIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1jYXJkIC50aXRsZSB7XG5cdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRsaW5lLWhlaWdodDogOTAlO1xufVxuXG4uY2FyZC1kZWxldGUtYnRuIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZC1zZWN0aW9uOmxhc3QtY2hpbGQge1xuXHRjb2xvcjogdmFyKC0tdGV4dC1tZWQpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9COztDQUVwQixPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0M7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxrQkFBa0I7O0VBRWxCLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2Qjs7RUFFN0IsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyx5QkFBeUI7Q0FDMUI7QUFDRDs7QUFFQSxpREFBaUQ7O0FBRWpEO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixxQ0FBcUM7O0NBRXJDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsT0FBTzs7Q0FFUCxhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVix1QkFBdUI7O0NBRXZCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBLDJEQUEyRDs7QUFFM0Q7Q0FDQyxPQUFPO0NBQ1AsNkJBQTZCO0NBQzdCLDJCQUEyQjs7Q0FFM0IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix5QkFBeUI7O0NBRXpCLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2Ysc0NBQXNDOztDQUV0QyxnQkFBZ0I7Q0FDaEIsOEVBQThFOztDQUU5RSxhQUFhO0NBQ2Isc0JBQXNCOztDQUV0Qjs7OztFQUlDOztDQUVELHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIseUJBQXlCOztDQUV6QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUEsNERBQTREO0FBQzVELGtEQUFrRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmxleC1jb250YWluZXIge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtY29udGVudCB7XFxuXFx0LS1tYWluLXNwYWNlcjogMjBweDtcXG5cXHQtLWFkZC1idG4tZGltczogNTBweDtcXG5cXG5cXHRmbGV4OiAxO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcblxcdC5mbGV4LWNvbnRhaW5lciB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHR9XFxuXFxuXFx0LmFwcC1jb250ZW50IHtcXG5cXHRcXHQtLWFwcC1iZC1yYWQ6IDEwcHg7XFxuXFxuXFx0XFx0d2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gNDBweCksIDE0MDBweCk7XFxuXFx0XFx0bWluLWhlaWdodDogODB2aDtcXG5cXHRcXHRmbGV4OiAwIDAgYXV0bztcXG5cXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG5cXG5cXHRcXHRib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG5cXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYmQtcmFkKTtcXG5cXHRcXHRib3gtc2hhZG93OiA4cHggNnB4IGJsYWNrO1xcblxcdH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5tYWluIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2VyKSAvIDIpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3QtZGlzcGxheWVkIHtcXG5cXHRmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuI3N0YXR1c2VzLWNvbnRhaW5lciB7XFxuXFx0LS1zdGF0dXMtc3BhY2VyOiAxMHB4O1xcblxcdGZsZXg6IDE7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi5zdGF0dXMtcm93IHtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdHdpZHRoOiBtaW4oNDgwcHgsIDEwMCUpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFN0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc3RhdHVzLWNvbHVtbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG5cXHRtaW4td2lkdGg6IG1pbigyMzBweCwgMTAwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tc3RhdHVzLXNwYWNlcik7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnN0YXR1cy1jb2x1bW4uZHJhZy1vdmVyIHtcXG5cXHRib3JkZXItY29sb3I6IGJsYWNrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbCgyNzksIDMzJSwgOTIlKTtcXG59XFxuXFxuLnN0YXR1cy1uYW1lIHtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG5cXHQtLXByaW9yaXR5LXdpZHRoOiAxNnB4O1xcblxcdC0tc2lkZS1wYWQ6IDlweDtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1ub25lKTtcXG5cXG5cXHRtaW4taGVpZ2h0OiA2MHB4O1xcblxcdHBhZGRpbmc6IDRweCB2YXIoLS1zaWRlLXBhZCkgNHB4IGNhbGModmFyKC0tcHJpb3JpdHktd2lkdGgpICsgdmFyKC0tc2lkZS1wYWQpKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0LFxcblxcdFxcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXFxuXFx0XFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXFxuXFx0KTtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym94LXNoYWRvdzogNnB4IDRweCBibGFjaztcXG5cXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLnRhc2stY2FyZDpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCk7XFxuXFx0Ym94LXNoYWRvdzogN3B4IDVweCBibGFjaztcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWhpKTtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkKTtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcXG59XFxuXFxuI2RvbmUtY29sdW1uIC50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2FyZC1zZWN0aW9uIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNhcmQgLnRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNHJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGxpbmUtaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5jYXJkLWRlbGV0ZS1idG4ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNhcmQtc2VjdGlvbjpsYXN0LWNoaWxkIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1tZWQpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2lkZWJhciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0d2lkdGg6IDA7XG5cdGhlaWdodDogMTAwc3ZoO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cblx0dHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcblx0d2lkdGg6IDEwMHZ3O1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uc2lkZWJhciA+ICoge1xuXHRvcGFjaXR5OiAwO1xuXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnNpZGViYXIub3BlbiA+ICoge1xuXHRvcGFjaXR5OiAxO1xuXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG59XG5cbi5jbG9zZS1idG4ge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0Zm9udC1zaXplOiA0MHB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBQcm9qZWN0IEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdC1maWx0ZXItYnRuIHtcblx0Zm9udC1zaXplOiAxLjRyZW07XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4ucHJvamVjdC1maWx0ZXItYnRuOmhvdmVyIHtcblx0Y29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XG59XG5cbi5wcm9qZWN0LWZpbHRlci1idG4uc2VsZWN0ZWQge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1Byb2plY3QgQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvdHRvbSBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmJvdHRvbS1idXR0b25zIHtcblx0bWFyZ2luLXRvcDogYXV0bztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxMnB4O1xufVxuXG4uaGlkZGVuLWJ0biB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHBhZGRpbmc6IDVweDtcblxuXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhpZGRlbi1idG4ub3BlbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGlkZGVuLWJ0bjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRjb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcbn1cblxuLnJldmVhbC1idG5zIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmV2ZWFsLWJ0biB7XG5cdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG5cdGZvbnQtc2l6ZTogNDBweDtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuI2FkZC1yZXZlYWwtYnRuLm9wZW4ge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbiNzdG9yYWdlLXJldmVhbC1idG4ge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbiNzdG9yYWdlLXJldmVhbC1idG4ub3BlbiB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQm90dG9tIEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcblx0LnNpZGViYXIsXG5cdC5zaWRlYmFyLm9wZW4ge1xuXHRcdHBvc2l0aW9uOiBpbmhlcml0O1xuXHRcdHdpZHRoOiB1bnNldDtcblx0XHRoZWlnaHQ6IHVuc2V0O1xuXHRcdHBhZGRpbmc6IDIwcHggbWluKDIwcHgsIDYlKTtcblx0XHR6LWluZGV4OiB1bnNldDtcblxuXHRcdHRyYW5zaXRpb246IG5vbmU7XG5cblx0XHRib3JkZXItcmFkaXVzOiAwIDAgMCBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KTtcblx0fVxuXG5cdC5zaWRlYmFyID4gKixcblx0LnNpZGViYXIub3BlbiA+ICoge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQjc2lkZWJhci1jbG9zZS1idG4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLGNBQWM7Q0FDZCxnQkFBZ0I7O0NBRWhCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUzs7Q0FFVCxrQ0FBa0M7Q0FDbEMsd0JBQXdCOztDQUV4QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTs7Q0FFYixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxVQUFVOztDQUVWLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFVBQVU7O0NBRVYsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUEsNERBQTREOztBQUU1RDtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSw2REFBNkQ7QUFDN0QsMkRBQTJEOztBQUUzRDtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZOztDQUVaLDhCQUE4QjtDQUM5QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHFCQUFxQjs7Q0FFckIsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5QixlQUFlOztDQUVmLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUEsNERBQTREOztBQUU1RDtDQUNDOztFQUVDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixjQUFjOztFQUVkLGdCQUFnQjs7RUFFaEIsa0RBQWtEO0NBQ25EOztDQUVBOztFQUVDLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaWRlYmFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDEwMHN2aDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2lkZWJhci5vcGVuIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnNpZGViYXIgPiAqIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuXFxuLnNpZGViYXIub3BlbiA+ICoge1xcblxcdG9wYWNpdHk6IDE7XFxuXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFByb2plY3QgQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0LWZpbHRlci1idG4ge1xcblxcdGZvbnQtc2l6ZTogMS40cmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ucHJvamVjdC1maWx0ZXItYnRuOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcXG59XFxuXFxuLnByb2plY3QtZmlsdGVyLWJ0bi5zZWxlY3RlZCB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvdHRvbSBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uYm90dG9tLWJ1dHRvbnMge1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTJweDtcXG59XFxuXFxuLmhpZGRlbi1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oaWRkZW4tYnRuLm9wZW4ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVuLWJ0bjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Y29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XFxufVxcblxcbi5yZXZlYWwtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZXZlYWwtYnRuIHtcXG5cXHRoZWlnaHQ6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4jYWRkLXJldmVhbC1idG4ub3BlbiB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jc3RvcmFnZS1yZXZlYWwtYnRuIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzdG9yYWdlLXJldmVhbC1idG4ub3BlbiB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb3R0b20gQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0LnNpZGViYXIsXFxuXFx0LnNpZGViYXIub3BlbiB7XFxuXFx0XFx0cG9zaXRpb246IGluaGVyaXQ7XFxuXFx0XFx0d2lkdGg6IHVuc2V0O1xcblxcdFxcdGhlaWdodDogdW5zZXQ7XFxuXFx0XFx0cGFkZGluZzogMjBweCBtaW4oMjBweCwgNiUpO1xcblxcdFxcdHotaW5kZXg6IHVuc2V0O1xcblxcblxcdFxcdHRyYW5zaXRpb246IG5vbmU7XFxuXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCAwIDAgY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNik7XFxuXFx0fVxcblxcblxcdC5zaWRlYmFyID4gKixcXG5cXHQuc2lkZWJhci5vcGVuID4gKiB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFxuXFx0I3NpZGViYXItY2xvc2UtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLWZvb3Rlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93YXJuaW5ncy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VzZS50eXBla2l0Lm5ldC9wa2UzYmJmLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHRjb2xvcjogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG5cdGNvbG9yOiB1bnNldDtcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Zm9udC1zaXplOiBpbmhlcml0O1xuXHRmb250LWZhbWlseTogdW5zZXQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG5oMixcbmgzIHtcblx0Zm9udC1zaXplOiB1bnNldDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG46cm9vdCB7XG5cdC0tc2F2ZS1idG4tYmc6ICMwMDRiNmI7XG5cdC0tZWRpdC1idG4tYmc6ICM0NzMyNjI7XG5cdC0taGVhZGVyLWJnLWxlZnQ6ICMyNjgwZDk7XG5cdC0taGVhZGVyLWJnLXJpZ2h0OiAjNDcyNjczO1xuXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcblx0LS1lZGl0LW1vZGUtYmc6ICNlMGY2ZmY7XG5cblx0LS10ZXh0LWxpZ2h0OiAjZmJmY2ZmO1xuXHQtLXRleHQtbWVkOiAjNDA0MDQwO1xuXHQtLXRleHQtZGFyazogIzRmNDE2Mjtcblx0LS10ZXh0LXByb2plY3Q6ICM3NjBhMWM7XG5cblx0LS1wcmlvcml0eS1sb3c6ICM4N2JiZjI7XG5cdC0tcHJpb3JpdHktbWVkOiAjZmZjMDAwO1xuXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xuXHQtLXByaW9yaXR5LW5vbmU6ICNhNmE2YTY7XG5cblx0LS1mb290ZXItYmc6ICMyMjJhMzU7XG5cblx0LS1mb250LW1haW46IGZ1dHVyYS1wdDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0aHNsYSgxOTgsIDEwMCUsIDQxJSwgMC43NDUpLFxuXHRcdFx0aHNsYSgyNjYsIDMyJSwgNTAlLCAwLjc0NSlcblx0XHQpLFxuXHRcdG5vLXJlcGVhdCBjZW50ZXIvY292ZXJcblx0XHRcdHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjUvU3RvbmVzX1BvcnRvX0RTQ0YwNTcyLmpwZy8xMDI0cHgtU3RvbmVzX1BvcnRvX0RTQ0YwNTcyLmpwZyk7XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcblx0XHRcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQSxtREFBbUQ7O0FBRW5EOzs7Q0FHQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTs7O0NBR0MsZ0JBQWdCO0FBQ2pCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7QUFDbkU7Q0FDQyxzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCLHVCQUF1Qjs7Q0FFdkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsdUJBQXVCOztDQUV2Qix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0Qix3QkFBd0I7O0NBRXhCLG9CQUFvQjs7Q0FFcEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7Ozs7OzRIQUsySDtDQUMzSDs7WUFFVztBQUNaOztBQUVBLG9FQUFvRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCguL21haW4uY3NzKTtcXG5AaW1wb3J0IHVybCguL3NpZGViYXIuY3NzKTtcXG5AaW1wb3J0IHVybCguL2RpYWxvZy5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vaGVhZGVyLWZvb3Rlci5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vd2FybmluZ3MuY3NzKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvcGtlM2JiZi5jc3NcXFwiKTtcXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcblxcdGNvbG9yOiB1bnNldDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRjb2xvcjogdW5zZXQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cXHRmb250LWZhbWlseTogdW5zZXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuXFx0Zm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbjpyb290IHtcXG5cXHQtLXNhdmUtYnRuLWJnOiAjMDA0YjZiO1xcblxcdC0tZWRpdC1idG4tYmc6ICM0NzMyNjI7XFxuXFx0LS1oZWFkZXItYmctbGVmdDogIzI2ODBkOTtcXG5cXHQtLWhlYWRlci1iZy1yaWdodDogIzQ3MjY3MztcXG5cXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcXG5cXHQtLWVkaXQtbW9kZS1iZzogI2UwZjZmZjtcXG5cXG5cXHQtLXRleHQtbGlnaHQ6ICNmYmZjZmY7XFxuXFx0LS10ZXh0LW1lZDogIzQwNDA0MDtcXG5cXHQtLXRleHQtZGFyazogIzRmNDE2MjtcXG5cXHQtLXRleHQtcHJvamVjdDogIzc2MGExYztcXG5cXG5cXHQtLXByaW9yaXR5LWxvdzogIzg3YmJmMjtcXG5cXHQtLXByaW9yaXR5LW1lZDogI2ZmYzAwMDtcXG5cXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xcblxcdC0tcHJpb3JpdHktbm9uZTogI2E2YTZhNjtcXG5cXG5cXHQtLWZvb3Rlci1iZzogIzIyMmEzNTtcXG5cXG5cXHQtLWZvbnQtbWFpbjogZnV0dXJhLXB0O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHRoc2xhKDE5OCwgMTAwJSwgNDElLCAwLjc0NSksXFxuXFx0XFx0XFx0aHNsYSgyNjYsIDMyJSwgNTAlLCAwLjc0NSlcXG5cXHRcXHQpLFxcblxcdFxcdG5vLXJlcGVhdCBjZW50ZXIvY292ZXJcXG5cXHRcXHRcXHR1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY1L1N0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcvMTAyNHB4LVN0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcpO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG5cXHRcXHRcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcblxcdFxcdHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN3YWwtbW9kYWwge1xuXHRib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzAwMDAwMDk5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dhcm5pbmdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGtDQUFrQztBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3dhbC1tb2RhbCB7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDVweCAxMHB4ICMwMDAwMDA5OTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3dhbD1lKCk6dC5zd2FsPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgcj1uW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmw9ITAsci5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLG8pe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6b30pfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sZS5wPVwiXCIsZShlLnM9OCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89XCJzd2FsLWJ1dHRvblwiO2UuQ0xBU1NfTkFNRVM9e01PREFMOlwic3dhbC1tb2RhbFwiLE9WRVJMQVk6XCJzd2FsLW92ZXJsYXlcIixTSE9XX01PREFMOlwic3dhbC1vdmVybGF5LS1zaG93LW1vZGFsXCIsTU9EQUxfVElUTEU6XCJzd2FsLXRpdGxlXCIsTU9EQUxfVEVYVDpcInN3YWwtdGV4dFwiLElDT046XCJzd2FsLWljb25cIixJQ09OX0NVU1RPTTpcInN3YWwtaWNvbi0tY3VzdG9tXCIsQ09OVEVOVDpcInN3YWwtY29udGVudFwiLEZPT1RFUjpcInN3YWwtZm9vdGVyXCIsQlVUVE9OX0NPTlRBSU5FUjpcInN3YWwtYnV0dG9uLWNvbnRhaW5lclwiLEJVVFRPTjpvLENPTkZJUk1fQlVUVE9OOm8rXCItLWNvbmZpcm1cIixDQU5DRUxfQlVUVE9OOm8rXCItLWNhbmNlbFwiLERBTkdFUl9CVVRUT046bytcIi0tZGFuZ2VyXCIsQlVUVE9OX0xPQURJTkc6bytcIi0tbG9hZGluZ1wiLEJVVFRPTl9MT0FERVI6bytcIl9fbG9hZGVyXCJ9LGUuZGVmYXVsdD1lLkNMQVNTX05BTUVTfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5nZXROb2RlPWZ1bmN0aW9uKHQpe3ZhciBlPVwiLlwiK3Q7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LGUuc3RyaW5nVG9Ob2RlPWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPXQudHJpbSgpLGUuZmlyc3RDaGlsZH0sZS5pbnNlcnRBZnRlcj1mdW5jdGlvbih0LGUpe3ZhciBuPWUubmV4dFNpYmxpbmc7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LG4pfSxlLnJlbW92ZU5vZGU9ZnVuY3Rpb24odCl7dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpfSxlLnRocm93RXJyPWZ1bmN0aW9uKHQpe3Rocm93IHQ9dC5yZXBsYWNlKC8gKyg/PSApL2csXCJcIiksXCJTd2VldEFsZXJ0OiBcIisodD10LnRyaW0oKSl9LGUuaXNQbGFpbk9iamVjdD1mdW5jdGlvbih0KXtpZihcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiExO3ZhciBlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbD09PWV8fGU9PT1PYmplY3QucHJvdG90eXBlfSxlLm9yZGluYWxTdWZmaXhPZj1mdW5jdGlvbih0KXt2YXIgZT10JTEwLG49dCUxMDA7cmV0dXJuIDE9PT1lJiYxMSE9PW4/dCtcInN0XCI6Mj09PWUmJjEyIT09bj90K1wibmRcIjozPT09ZSYmMTMhPT1uP3QrXCJyZFwiOnQrXCJ0aFwifX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyhuKDI1KSk7dmFyIHI9bigyNik7ZS5vdmVybGF5TWFya3VwPXIuZGVmYXVsdCxvKG4oMjcpKSxvKG4oMjgpKSxvKG4oMjkpKTt2YXIgaT1uKDApLGE9aS5kZWZhdWx0Lk1PREFMX1RJVExFLHM9aS5kZWZhdWx0Lk1PREFMX1RFWFQsYz1pLmRlZmF1bHQuSUNPTixsPWkuZGVmYXVsdC5GT09URVI7ZS5pY29uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2MrJ1wiPjwvZGl2PicsZS50aXRsZU1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJythKydcIj48L2Rpdj5cXG4nLGUudGV4dE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytzKydcIj48L2Rpdj4nLGUuZm9vdGVyTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2wrJ1wiPjwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpO2UuQ09ORklSTV9LRVk9XCJjb25maXJtXCIsZS5DQU5DRUxfS0VZPVwiY2FuY2VsXCI7dmFyIHI9e3Zpc2libGU6ITAsdGV4dDpudWxsLHZhbHVlOm51bGwsY2xhc3NOYW1lOlwiXCIsY2xvc2VNb2RhbDohMH0saT1PYmplY3QuYXNzaWduKHt9LHIse3Zpc2libGU6ITEsdGV4dDpcIkNhbmNlbFwiLHZhbHVlOm51bGx9KSxhPU9iamVjdC5hc3NpZ24oe30scix7dGV4dDpcIk9LXCIsdmFsdWU6ITB9KTtlLmRlZmF1bHRCdXR0b25MaXN0PXtjYW5jZWw6aSxjb25maXJtOmF9O3ZhciBzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlIGUuQ09ORklSTV9LRVk6cmV0dXJuIGE7Y2FzZSBlLkNBTkNFTF9LRVk6cmV0dXJuIGk7ZGVmYXVsdDp2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30scix7dGV4dDpuLHZhbHVlOnR9KX19LGM9ZnVuY3Rpb24odCxlKXt2YXIgbj1zKHQpO3JldHVybiEwPT09ZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITB9KTpcInN0cmluZ1wiPT10eXBlb2YgZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITAsdGV4dDplfSk6by5pc1BsYWluT2JqZWN0KGUpP09iamVjdC5hc3NpZ24oe3Zpc2libGU6ITB9LG4sZSk6T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiExfSl9LGw9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LG49MCxvPU9iamVjdC5rZXlzKHQpO248by5sZW5ndGg7bisrKXt2YXIgcj1vW25dLGE9dFtyXSxzPWMocixhKTtlW3JdPXN9cmV0dXJuIGUuY2FuY2VsfHwoZS5jYW5jZWw9aSksZX0sdT1mdW5jdGlvbih0KXt2YXIgbj17fTtzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMTpuW2UuQ0FOQ0VMX0tFWV09T2JqZWN0LmFzc2lnbih7fSxpLHt2aXNpYmxlOiExfSk7YnJlYWs7Y2FzZSAyOm5bZS5DQU5DRUxfS0VZXT1jKGUuQ0FOQ0VMX0tFWSx0WzBdKSxuW2UuQ09ORklSTV9LRVldPWMoZS5DT05GSVJNX0tFWSx0WzFdKTticmVhaztkZWZhdWx0Om8udGhyb3dFcnIoXCJJbnZhbGlkIG51bWJlciBvZiAnYnV0dG9ucycgaW4gYXJyYXkgKFwiK3QubGVuZ3RoK1wiKS5cXG4gICAgICBJZiB5b3Ugd2FudCBtb3JlIHRoYW4gMiBidXR0b25zLCB5b3UgbmVlZCB0byB1c2UgYW4gb2JqZWN0IVwiKX1yZXR1cm4gbn07ZS5nZXRCdXR0b25MaXN0T3B0cz1mdW5jdGlvbih0KXt2YXIgbj1lLmRlZmF1bHRCdXR0b25MaXN0O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P25bZS5DT05GSVJNX0tFWV09YyhlLkNPTkZJUk1fS0VZLHQpOkFycmF5LmlzQXJyYXkodCk/bj11KHQpOm8uaXNQbGFpbk9iamVjdCh0KT9uPWwodCk6ITA9PT10P249dShbITAsITBdKTohMT09PXQ/bj11KFshMSwhMV0pOnZvaWQgMD09PXQmJihuPWUuZGVmYXVsdEJ1dHRvbkxpc3QpLG59fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksaT1uKDApLGE9aS5kZWZhdWx0Lk1PREFMLHM9aS5kZWZhdWx0Lk9WRVJMQVksYz1uKDMwKSxsPW4oMzEpLHU9bigzMiksZj1uKDMzKTtlLmluamVjdEVsSW50b01vZGFsPWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0Tm9kZShhKSxuPW8uc3RyaW5nVG9Ob2RlKHQpO3JldHVybiBlLmFwcGVuZENoaWxkKG4pLG59O3ZhciBkPWZ1bmN0aW9uKHQpe3QuY2xhc3NOYW1lPWEsdC50ZXh0Q29udGVudD1cIlwifSxwPWZ1bmN0aW9uKHQsZSl7ZCh0KTt2YXIgbj1lLmNsYXNzTmFtZTtuJiZ0LmNsYXNzTGlzdC5hZGQobil9O2UuaW5pdE1vZGFsQ29udGVudD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoYSk7cChlLHQpLGMuZGVmYXVsdCh0Lmljb24pLGwuaW5pdFRpdGxlKHQudGl0bGUpLGwuaW5pdFRleHQodC50ZXh0KSxmLmRlZmF1bHQodC5jb250ZW50KSx1LmRlZmF1bHQodC5idXR0b25zLHQuZGFuZ2VyTW9kZSl9O3ZhciBtPWZ1bmN0aW9uKCl7dmFyIHQ9by5nZXROb2RlKHMpLGU9by5zdHJpbmdUb05vZGUoci5tb2RhbE1hcmt1cCk7dC5hcHBlbmRDaGlsZChlKX07ZS5kZWZhdWx0PW19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9e2lzT3BlbjohMSxwcm9taXNlOm51bGwsYWN0aW9uczp7fSx0aW1lcjpudWxsfSxpPU9iamVjdC5hc3NpZ24oe30scik7ZS5yZXNldFN0YXRlPWZ1bmN0aW9uKCl7aT1PYmplY3QuYXNzaWduKHt9LHIpfSxlLnNldEFjdGlvblZhbHVlPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBhKG8uQ09ORklSTV9LRVksdCk7Zm9yKHZhciBlIGluIHQpYShlLHRbZV0pfTt2YXIgYT1mdW5jdGlvbih0LGUpe2kuYWN0aW9uc1t0XXx8KGkuYWN0aW9uc1t0XT17fSksT2JqZWN0LmFzc2lnbihpLmFjdGlvbnNbdF0se3ZhbHVlOmV9KX07ZS5zZXRBY3Rpb25PcHRpb25zRm9yPWZ1bmN0aW9uKHQsZSl7dmFyIG49KHZvaWQgMD09PWU/e306ZSkuY2xvc2VNb2RhbCxvPXZvaWQgMD09PW58fG47T2JqZWN0LmFzc2lnbihpLmFjdGlvbnNbdF0se2Nsb3NlTW9kYWw6b30pfSxlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGk9bigwKSxhPWkuZGVmYXVsdC5PVkVSTEFZLHM9aS5kZWZhdWx0LlNIT1dfTU9EQUwsYz1pLmRlZmF1bHQuQlVUVE9OLGw9aS5kZWZhdWx0LkJVVFRPTl9MT0FESU5HLHU9big1KTtlLm9wZW5Nb2RhbD1mdW5jdGlvbigpe28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QuYWRkKHMpLHUuZGVmYXVsdC5pc09wZW49ITB9O3ZhciBmPWZ1bmN0aW9uKCl7by5nZXROb2RlKGEpLmNsYXNzTGlzdC5yZW1vdmUocyksdS5kZWZhdWx0LmlzT3Blbj0hMX07ZS5vbkFjdGlvbj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1yLkNBTkNFTF9LRVkpO3ZhciBlPXUuZGVmYXVsdC5hY3Rpb25zW3RdLG49ZS52YWx1ZTtpZighMT09PWUuY2xvc2VNb2RhbCl7dmFyIGk9YytcIi0tXCIrdDtvLmdldE5vZGUoaSkuY2xhc3NMaXN0LmFkZChsKX1lbHNlIGYoKTt1LmRlZmF1bHQucHJvbWlzZS5yZXNvbHZlKG4pfSxlLmdldFN0YXRlPWZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSx1LmRlZmF1bHQpO3JldHVybiBkZWxldGUgdC5wcm9taXNlLGRlbGV0ZSB0LnRpbWVyLHR9LGUuc3RvcExvYWRpbmc9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjKSxlPTA7ZTx0Lmxlbmd0aDtlKyspe3RbZV0uY2xhc3NMaXN0LnJlbW92ZShsKX19fSxmdW5jdGlvbih0LGUpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl8fCgwLGV2YWwpKFwidGhpc1wiKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfXQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe3QuZXhwb3J0cz1lLnN3ZWV0QWxlcnQ9big5KX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2FsPW4oMTApfSkuY2FsbChlLG4oNykpfSxmdW5jdGlvbih0LGUsbil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbigxMSksbigxNik7dmFyIG89bigyMykuZGVmYXVsdDt0LmV4cG9ydHM9b30sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTIpO1wic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1bW3QuaSxvLFwiXCJdXSk7dmFyIHI9e2luc2VydEF0OlwidG9wXCJ9O3IudHJhbnNmb3JtPXZvaWQgMDtuKDE0KShvLHIpO28ubG9jYWxzJiYodC5leHBvcnRzPW8ubG9jYWxzKX0sZnVuY3Rpb24odCxlLG4pe2U9dC5leHBvcnRzPW4oMTMpKHZvaWQgMCksZS5wdXNoKFt0LmksJy5zd2FsLWljb24tLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0Oy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVFcnJvckljb24gLjVzO2FuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41c30uc3dhbC1pY29uLS1lcnJvcl9feC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVhNYXJrIC41czthbmltYXRpb246YW5pbWF0ZVhNYXJrIC41c30uc3dhbC1pY29uLS1lcnJvcl9fbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O3dpZHRoOjQ3cHg7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2Rpc3BsYXk6YmxvY2s7dG9wOjM3cHg7Ym9yZGVyLXJhZGl1czoycHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLWxlZnR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtsZWZ0OjE3cHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLXJpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtyaWdodDoxNnB4fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX0uc3dhbC1pY29uLS13YXJuaW5ne2JvcmRlci1jb2xvcjojZjhiYjg2Oy13ZWJraXQtYW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZTthbmltYXRpb246cHVsc2VXYXJuaW5nIC43NXMgaW5maW5pdGUgYWx0ZXJuYXRlfS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHl7d2lkdGg6NXB4O2hlaWdodDo0N3B4O3RvcDoxMHB4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0td2FybmluZ19fYm9keSwuc3dhbC1pY29uLS13YXJuaW5nX19kb3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjhiYjg2fS5zd2FsLWljb24tLXdhcm5pbmdfX2RvdHt3aWR0aDo3cHg7aGVpZ2h0OjdweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDotNHB4O2JvdHRvbTotMTFweH1ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2VXYXJuaW5nezAle2JvcmRlci1jb2xvcjojZjhkNDg2fXRve2JvcmRlci1jb2xvcjojZjhiYjg2fX1Aa2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19LnN3YWwtaWNvbi0tc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVyLC5zd2FsLWljb24tLXN1Y2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcIjtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2MHB4O2hlaWdodDoxMjBweDtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtib3JkZXItcmFkaXVzOjEyMHB4IDAgMCAxMjBweDt0b3A6LTdweDtsZWZ0Oi0zM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4fS5zd2FsLWljb24tLXN1Y2Nlc3M6YWZ0ZXJ7Ym9yZGVyLXJhZGl1czowIDEyMHB4IDEyMHB4IDA7dG9wOi0xMXB4O2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO2FuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWlufS5zd2FsLWljb24tLXN1Y2Nlc3NfX3Jpbmd7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6NHB4IHNvbGlkIGhzbGEoOTgsNTUlLDY5JSwuMik7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00cHg7dG9wOi00cHg7ei1pbmRleDoyfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2hpZGUtY29ybmVyc3t3aWR0aDo1cHg7aGVpZ2h0OjkwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MXB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjhweDt0b3A6OHB4O3otaW5kZXg6MTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZXtoZWlnaHQ6NXB4O2JhY2tncm91bmQtY29sb3I6I2E1ZGM4NjtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS10aXB7d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ2cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmUtLWxvbmd7d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzTG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1c31ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fS5zd2FsLWljb24tLWluZm97Ym9yZGVyLWNvbG9yOiNjOWRhZTF9LnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7d2lkdGg6NXB4O2hlaWdodDoyOXB4O2JvdHRvbToxN3B4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0taW5mbzphZnRlciwuc3dhbC1pY29uLS1pbmZvOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YWZ0ZXJ7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTNweDt0b3A6MTlweH0uc3dhbC1pY29ue3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyLXdpZHRoOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7bWFyZ2luOjIwcHggYXV0b30uc3dhbC1pY29uOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MzJweH0uc3dhbC1pY29uLS1jdXN0b217d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjB9LnN3YWwtaWNvbiBpbWd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5zd2FsLXRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjY1KTtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTNweCAxNnB4O2ZvbnQtc2l6ZToyN3B4O2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjB9LnN3YWwtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDoyNnB4fS5zd2FsLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpe3BhZGRpbmctYm90dG9tOjB9LnN3YWwtdGl0bGU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEzcHh9LnN3YWwtdGV4dHtmb250LXNpemU6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDt2ZXJ0aWNhbC1hbGlnbjp0b3A7dGV4dC1hbGlnbjpsZWZ0O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowO3BhZGRpbmc6MCAxMHB4O2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjpyZ2JhKDAsMCwwLC42NCk7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnN3YWwtdGV4dDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjQ1cHh9LnN3YWwtdGV4dDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206NDVweH0uc3dhbC1mb290ZXJ7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXRvcDoxM3B4O21hcmdpbi10b3A6MTNweDtwYWRkaW5nOjEzcHggMTZweDtib3JkZXItcmFkaXVzOmluaGVyaXQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnN3YWwtYnV0dG9uLWNvbnRhaW5lcnttYXJnaW46NXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2FsLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiM3Y2QxZjk7Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtib3gtc2hhZG93Om5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MTBweCAyNHB4O21hcmdpbjowO2N1cnNvcjpwb2ludGVyfS5zd2FsLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzhjYmYyfS5zd2FsLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNzBiY2UwfS5zd2FsLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSg0MywxMTQsMTY1LC4yOSl9LnN3YWwtYnV0dG9uW2Rpc2FibGVkXXtvcGFjaXR5Oi41O2N1cnNvcjpkZWZhdWx0fS5zd2FsLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbC1idXR0b24tLWNhbmNlbHtjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZn0uc3dhbC1idXR0b24tLWNhbmNlbDpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q3ZDd9LnN3YWwtYnV0dG9uLS1jYW5jZWw6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxMTYsMTM2LDE1MCwuMjkpfS5zd2FsLWJ1dHRvbi0tZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2U2NDk0Mn0uc3dhbC1idXR0b24tLWRhbmdlcjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGY0NzQwfS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNjZjQyM2J9LnN3YWwtYnV0dG9uLS1kYW5nZXI6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxNjUsNDMsNDMsLjI5KX0uc3dhbC1jb250ZW50e3BhZGRpbmc6MCAyMHB4O21hcmdpbi10b3A6MjBweDtmb250LXNpemU6bWVkaXVtfS5zd2FsLWNvbnRlbnQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjIwcHh9LnN3YWwtY29udGVudF9faW5wdXQsLnN3YWwtY29udGVudF9fdGV4dGFyZWF7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxNHB4O2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNCk7cGFkZGluZzoxMHB4IDEzcHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzfS5zd2FsLWNvbnRlbnRfX2lucHV0OmZvY3VzLC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6IzZkYjhmZn0uc3dhbC1jb250ZW50X190ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9LnN3YWwtYnV0dG9uLS1sb2FkaW5ne2NvbG9yOnRyYW5zcGFyZW50fS5zd2FsLWJ1dHRvbi0tbG9hZGluZ34uc3dhbC1idXR0b25fX2xvYWRlcntvcGFjaXR5OjF9LnN3YWwtYnV0dG9uX19sb2FkZXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmF1dG87d2lkdGg6NDNweDt6LWluZGV4OjI7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MH0uc3dhbC1idXR0b25fX2xvYWRlciBkaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7bWFyZ2luOjJweDtvcGFjaXR5Oi40O2JvcmRlci1yYWRpdXM6N3B4O2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMnM7LXdlYmtpdC1hbmltYXRpb246c3dhbC1sb2FkaW5nLWFuaW0gMXMgaW5maW5pdGU7YW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdjpudGgtY2hpbGQoM24rMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjE1czthbmltYXRpb24tZGVsYXk6LjE1c30uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zczthbmltYXRpb24tZGVsYXk6LjNzfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19QGtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19LnN3YWwtb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MDtvdmVyZmxvdy15OmF1dG87YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40KTt6LWluZGV4OjEwMDAwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3N9LnN3YWwtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcIiBcIjtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7aGVpZ2h0OjEwMCV9LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30uc3dhbC1vdmVybGF5LS1zaG93LW1vZGFsIC5zd2FsLW1vZGFse29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7YW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnN3YWwtbW9kYWx7d2lkdGg6NDc4cHg7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NXB4O3Bvc2l0aW9uOnN0YXRpYzttYXJnaW46MjBweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3otaW5kZXg6MTAwMDE7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLG9wYWNpdHkgLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3N9QG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpey5zd2FsLW1vZGFse3dpZHRoOmNhbGMoMTAwJSAtIDIwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUpe3ZhciBuPXRbMV18fFwiXCIscj10WzNdO2lmKCFyKXJldHVybiBuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBpPW8ocik7cmV0dXJuW25dLmNvbmNhdChyLnNvdXJjZXMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIityLnNvdXJjZVJvb3QrdCtcIiAqL1wifSkpLmNvbmNhdChbaV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0KSkpKStcIiAqL1wifXQuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXt2YXIgbz1uKGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIitvK1wifVwiOm99KS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG89e30scj0wO3I8dGhpcy5sZW5ndGg7cisrKXt2YXIgaT10aGlzW3JdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYob1tpXT0hMCl9Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTtcIm51bWJlclwiPT10eXBlb2YgYVswXSYmb1thWzBdXXx8KG4mJiFhWzJdP2FbMl09bjpuJiYoYVsyXT1cIihcIithWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChhKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXSxyPW1bby5pZF07aWYocil7ci5yZWZzKys7Zm9yKHZhciBpPTA7aTxyLnBhcnRzLmxlbmd0aDtpKyspci5wYXJ0c1tpXShvLnBhcnRzW2ldKTtmb3IoO2k8by5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHMucHVzaCh1KG8ucGFydHNbaV0sZSkpfWVsc2V7Zm9yKHZhciBhPVtdLGk9MDtpPG8ucGFydHMubGVuZ3RoO2krKylhLnB1c2godShvLnBhcnRzW2ldLGUpKTttW28uaWRdPXtpZDpvLmlkLHJlZnM6MSxwYXJ0czphfX19fWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49W10sbz17fSxyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl0sYT1lLmJhc2U/aVswXStlLmJhc2U6aVswXSxzPWlbMV0sYz1pWzJdLGw9aVszXSx1PXtjc3M6cyxtZWRpYTpjLHNvdXJjZU1hcDpsfTtvW2FdP29bYV0ucGFydHMucHVzaCh1KTpuLnB1c2gob1thXT17aWQ6YSxwYXJ0czpbdV19KX1yZXR1cm4gbn1mdW5jdGlvbiBpKHQsZSl7dmFyIG49dih0Lmluc2VydEludG8pO2lmKCFuKXRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO3ZhciBvPXdbdy5sZW5ndGgtMV07aWYoXCJ0b3BcIj09PXQuaW5zZXJ0QXQpbz9vLm5leHRTaWJsaW5nP24uaW5zZXJ0QmVmb3JlKGUsby5uZXh0U2libGluZyk6bi5hcHBlbmRDaGlsZChlKTpuLmluc2VydEJlZm9yZShlLG4uZmlyc3RDaGlsZCksdy5wdXNoKGUpO2Vsc2V7aWYoXCJib3R0b21cIiE9PXQuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO24uYXBwZW5kQ2hpbGQoZSl9fWZ1bmN0aW9uIGEodCl7aWYobnVsbD09PXQucGFyZW50Tm9kZSlyZXR1cm4hMTt0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7dmFyIGU9dy5pbmRleE9mKHQpO2U+PTAmJncuc3BsaWNlKGUsMSl9ZnVuY3Rpb24gcyh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsbChlLHQuYXR0cnMpLGkodCxlKSxlfWZ1bmN0aW9uIGModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsdC5hdHRycy5yZWw9XCJzdHlsZXNoZWV0XCIsbChlLHQuYXR0cnMpLGkodCxlKSxlfWZ1bmN0aW9uIGwodCxlKXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Quc2V0QXR0cmlidXRlKG4sZVtuXSl9KX1mdW5jdGlvbiB1KHQsZSl7dmFyIG4sbyxyLGk7aWYoZS50cmFuc2Zvcm0mJnQuY3NzKXtpZighKGk9ZS50cmFuc2Zvcm0odC5jc3MpKSlyZXR1cm4gZnVuY3Rpb24oKXt9O3QuY3NzPWl9aWYoZS5zaW5nbGV0b24pe3ZhciBsPWgrKztuPWd8fChnPXMoZSkpLG89Zi5iaW5kKG51bGwsbixsLCExKSxyPWYuYmluZChudWxsLG4sbCwhMCl9ZWxzZSB0LnNvdXJjZU1hcCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBCbG9iJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hPyhuPWMoZSksbz1wLmJpbmQobnVsbCxuLGUpLHI9ZnVuY3Rpb24oKXthKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49cyhlKSxvPWQuYmluZChudWxsLG4pLHI9ZnVuY3Rpb24oKXthKG4pfSk7cmV0dXJuIG8odCksZnVuY3Rpb24oZSl7aWYoZSl7aWYoZS5jc3M9PT10LmNzcyYmZS5tZWRpYT09PXQubWVkaWEmJmUuc291cmNlTWFwPT09dC5zb3VyY2VNYXApcmV0dXJuO28odD1lKX1lbHNlIHIoKX19ZnVuY3Rpb24gZih0LGUsbixvKXt2YXIgcj1uP1wiXCI6by5jc3M7aWYodC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PXgoZSxyKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHIpLGE9dC5jaGlsZE5vZGVzO2FbZV0mJnQucmVtb3ZlQ2hpbGQoYVtlXSksYS5sZW5ndGg/dC5pbnNlcnRCZWZvcmUoaSxhW2VdKTp0LmFwcGVuZENoaWxkKGkpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIG49ZS5jc3Msbz1lLm1lZGlhO2lmKG8mJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixvKSx0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fWZ1bmN0aW9uIHAodCxlLG4pe3ZhciBvPW4uY3NzLHI9bi5zb3VyY2VNYXAsaT12b2lkIDA9PT1lLmNvbnZlcnRUb0Fic29sdXRlVXJscyYmcjsoZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHN8fGkpJiYobz15KG8pKSxyJiYobys9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHIpKSkpK1wiICovXCIpO3ZhciBhPW5ldyBCbG9iKFtvXSx7dHlwZTpcInRleHQvY3NzXCJ9KSxzPXQuaHJlZjt0LmhyZWY9VVJMLmNyZWF0ZU9iamVjdFVSTChhKSxzJiZVUkwucmV2b2tlT2JqZWN0VVJMKHMpfXZhciBtPXt9LGI9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxlfX0oZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9KSx2PWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09ZVtuXSYmKGVbbl09dC5jYWxsKHRoaXMsbikpLGVbbl19fShmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX0pLGc9bnVsbCxoPTAsdz1bXSx5PW4oMTUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBERUJVRyYmREVCVUcmJlwib2JqZWN0XCIhPXR5cGVvZiBkb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7ZT1lfHx7fSxlLmF0dHJzPVwib2JqZWN0XCI9PXR5cGVvZiBlLmF0dHJzP2UuYXR0cnM6e30sZS5zaW5nbGV0b258fChlLnNpbmdsZXRvbj1iKCkpLGUuaW5zZXJ0SW50b3x8KGUuaW5zZXJ0SW50bz1cImhlYWRcIiksZS5pbnNlcnRBdHx8KGUuaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIG49cih0LGUpO3JldHVybiBvKG4sZSksZnVuY3Rpb24odCl7Zm9yKHZhciBpPVtdLGE9MDthPG4ubGVuZ3RoO2ErKyl7dmFyIHM9blthXSxjPW1bcy5pZF07Yy5yZWZzLS0saS5wdXNoKGMpfWlmKHQpe28ocih0LGUpLGUpfWZvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgYz1pW2FdO2lmKDA9PT1jLnJlZnMpe2Zvcih2YXIgbD0wO2w8Yy5wYXJ0cy5sZW5ndGg7bCsrKWMucGFydHNbbF0oKTtkZWxldGUgbVtjLmlkXX19fX07dmFyIHg9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gdFtlXT1uLHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIil9fSgpfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubG9jYXRpb247aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7aWYoIXR8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiB0O3ZhciBuPWUucHJvdG9jb2wrXCIvL1wiK2UuaG9zdCxvPW4rZS5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sXCIvXCIpO3JldHVybiB0LnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS50cmltKCkucmVwbGFjZSgvXlwiKC4qKVwiJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pLnJlcGxhY2UoL14nKC4qKSckLyxmdW5jdGlvbih0LGUpe3JldHVybiBlfSk7aWYoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdChyKSlyZXR1cm4gdDt2YXIgaTtyZXR1cm4gaT0wPT09ci5pbmRleE9mKFwiLy9cIik/cjowPT09ci5pbmRleE9mKFwiL1wiKT9uK3I6bytyLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLFwidXJsKFwiK0pTT04uc3RyaW5naWZ5KGkpK1wiKVwifSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIG89bigxNyk7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8d2luZG93LlByb21pc2V8fCh3aW5kb3cuUHJvbWlzZT1vKSxuKDIxKSxTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzfHwoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcz1mdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3JldHVyblwibnVtYmVyXCIhPXR5cGVvZiBlJiYoZT0wKSwhKGUrdC5sZW5ndGg+dGhpcy5sZW5ndGgpJiYtMSE9PXRoaXMuaW5kZXhPZih0LGUpfSksQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLFwiaW5jbHVkZXNcIix7dmFsdWU6ZnVuY3Rpb24odCxlKXtpZihudWxsPT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTt2YXIgbj1PYmplY3QodGhpcyksbz1uLmxlbmd0aD4+PjA7aWYoMD09PW8pcmV0dXJuITE7Zm9yKHZhciByPTB8ZSxpPU1hdGgubWF4KHI+PTA/cjpvLU1hdGguYWJzKHIpLDApO2k8bzspe2lmKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT1lfHxcIm51bWJlclwiPT10eXBlb2YgdCYmXCJudW1iZXJcIj09dHlwZW9mIGUmJmlzTmFOKHQpJiZpc05hTihlKX0obltpXSx0KSlyZXR1cm4hMDtpKyt9cmV0dXJuITF9fSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmZnVuY3Rpb24odCl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuaGFzT3duUHJvcGVydHkoXCJyZW1vdmVcIil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwicmVtb3ZlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfX0pfSl9KFtFbGVtZW50LnByb3RvdHlwZSxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSxEb2N1bWVudFR5cGUucHJvdG90eXBlXSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gcih0LGUpe3JldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBpKHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sZih0LHRoaXMpfWZ1bmN0aW9uIGEodCxlKXtmb3IoOzM9PT10Ll9zdGF0ZTspdD10Ll92YWx1ZTtpZigwPT09dC5fc3RhdGUpcmV0dXJuIHZvaWQgdC5fZGVmZXJyZWRzLnB1c2goZSk7dC5faGFuZGxlZD0hMCxpLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3ZhciBuPTE9PT10Ll9zdGF0ZT9lLm9uRnVsZmlsbGVkOmUub25SZWplY3RlZDtpZihudWxsPT09bilyZXR1cm4gdm9pZCgxPT09dC5fc3RhdGU/czpjKShlLnByb21pc2UsdC5fdmFsdWUpO3ZhciBvO3RyeXtvPW4odC5fdmFsdWUpfWNhdGNoKHQpe3JldHVybiB2b2lkIGMoZS5wcm9taXNlLHQpfXMoZS5wcm9taXNlLG8pfSl9ZnVuY3Rpb24gcyh0LGUpe3RyeXtpZihlPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYoZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSl7dmFyIG49ZS50aGVuO2lmKGUgaW5zdGFuY2VvZiBpKXJldHVybiB0Ll9zdGF0ZT0zLHQuX3ZhbHVlPWUsdm9pZCBsKHQpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIHZvaWQgZihyKG4sZSksdCl9dC5fc3RhdGU9MSx0Ll92YWx1ZT1lLGwodCl9Y2F0Y2goZSl7Yyh0LGUpfX1mdW5jdGlvbiBjKHQsZSl7dC5fc3RhdGU9Mix0Ll92YWx1ZT1lLGwodCl9ZnVuY3Rpb24gbCh0KXsyPT09dC5fc3RhdGUmJjA9PT10Ll9kZWZlcnJlZHMubGVuZ3RoJiZpLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3QuX2hhbmRsZWR8fGkuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHQuX3ZhbHVlKX0pO2Zvcih2YXIgZT0wLG49dC5fZGVmZXJyZWRzLmxlbmd0aDtlPG47ZSsrKWEodCx0Ll9kZWZlcnJlZHNbZV0pO3QuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIHUodCxlLG4pe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMucHJvbWlzZT1ufWZ1bmN0aW9uIGYodCxlKXt2YXIgbj0hMTt0cnl7dChmdW5jdGlvbih0KXtufHwobj0hMCxzKGUsdCkpfSxmdW5jdGlvbih0KXtufHwobj0hMCxjKGUsdCkpfSl9Y2F0Y2godCl7aWYobilyZXR1cm47bj0hMCxjKGUsdCl9fXZhciBkPXNldFRpbWVvdXQ7aS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfSxpLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHQsZSl7dmFyIG49bmV3IHRoaXMuY29uc3RydWN0b3Iobyk7cmV0dXJuIGEodGhpcyxuZXcgdSh0LGUsbikpLG59LGkuYWxsPWZ1bmN0aW9uKHQpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpO3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIG8oaSxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIHM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpcmV0dXJuIHZvaWQgcy5jYWxsKGEsZnVuY3Rpb24odCl7byhpLHQpfSxuKX1lW2ldPWEsMD09LS1yJiZ0KGUpfWNhdGNoKHQpe24odCl9fWlmKDA9PT1lLmxlbmd0aClyZXR1cm4gdChbXSk7Zm9yKHZhciByPWUubGVuZ3RoLGk9MDtpPGUubGVuZ3RoO2krKylvKGksZVtpXSl9KX0saS5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PWk/dDpuZXcgaShmdW5jdGlvbihlKXtlKHQpfSl9LGkucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShmdW5jdGlvbihlLG4pe24odCl9KX0saS5yYWNlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShmdW5jdGlvbihlLG4pe2Zvcih2YXIgbz0wLHI9dC5sZW5ndGg7bzxyO28rKyl0W29dLnRoZW4oZSxuKX0pfSxpLl9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZmdW5jdGlvbih0KXtlKHQpfXx8ZnVuY3Rpb24odCl7ZCh0LDApfSxpLl91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLHQpfSxpLl9zZXRJbW1lZGlhdGVGbj1mdW5jdGlvbih0KXtpLl9pbW1lZGlhdGVGbj10fSxpLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtpLl91bmhhbmRsZWRSZWplY3Rpb25Gbj10fSx2b2lkIDAhPT10JiZ0LmV4cG9ydHM/dC5leHBvcnRzPWk6bi5Qcm9taXNlfHwobi5Qcm9taXNlPWkpfSh0aGlzKX0pLmNhbGwoZSxuKDE4KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbyh0LGUpe3RoaXMuX2lkPXQsdGhpcy5fY2xlYXJGbj1lfXZhciByPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtlLnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG8oci5jYWxsKHNldFRpbWVvdXQsd2luZG93LGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sZS5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgbyhyLmNhbGwoc2V0SW50ZXJ2YWwsd2luZG93LGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LGUuY2xlYXJUaW1lb3V0PWUuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbih0KXt0JiZ0LmNsb3NlKCl9LG8ucHJvdG90eXBlLnVucmVmPW8ucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30sby5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LHRoaXMuX2lkKX0sZS5lbnJvbGw9ZnVuY3Rpb24odCxlKXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCksdC5faWRsZVRpbWVvdXQ9ZX0sZS51bmVucm9sbD1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCksdC5faWRsZVRpbWVvdXQ9LTF9LGUuX3VucmVmQWN0aXZlPWUuYWN0aXZlPWZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKTt2YXIgZT10Ll9pZGxlVGltZW91dDtlPj0wJiYodC5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5fb25UaW1lb3V0JiZ0Ll9vblRpbWVvdXQoKX0sZSkpfSxuKDE5KSxlLnNldEltbWVkaWF0ZT1zZXRJbW1lZGlhdGUsZS5jbGVhckltbWVkaWF0ZT1jbGVhckltbWVkaWF0ZX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbih0LGUpeyFmdW5jdGlvbih0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7XCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9bmV3IEZ1bmN0aW9uKFwiXCIrdCkpO2Zvcih2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXT1hcmd1bWVudHNbbisxXTt2YXIgbz17Y2FsbGJhY2s6dCxhcmdzOmV9O3JldHVybiBsW2NdPW8scyhjKSxjKyt9ZnVuY3Rpb24gcih0KXtkZWxldGUgbFt0XX1mdW5jdGlvbiBpKHQpe3ZhciBlPXQuY2FsbGJhY2ssbz10LmFyZ3M7c3dpdGNoKG8ubGVuZ3RoKXtjYXNlIDA6ZSgpO2JyZWFrO2Nhc2UgMTplKG9bMF0pO2JyZWFrO2Nhc2UgMjplKG9bMF0sb1sxXSk7YnJlYWs7Y2FzZSAzOmUob1swXSxvWzFdLG9bMl0pO2JyZWFrO2RlZmF1bHQ6ZS5hcHBseShuLG8pfX1mdW5jdGlvbiBhKHQpe2lmKHUpc2V0VGltZW91dChhLDAsdCk7ZWxzZXt2YXIgZT1sW3RdO2lmKGUpe3U9ITA7dHJ5e2koZSl9ZmluYWxseXtyKHQpLHU9ITF9fX19aWYoIXQuc2V0SW1tZWRpYXRlKXt2YXIgcyxjPTEsbD17fSx1PSExLGY9dC5kb2N1bWVudCxkPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2Q9ZCYmZC5zZXRUaW1lb3V0P2Q6dCxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwodC5wcm9jZXNzKT9mdW5jdGlvbigpe3M9ZnVuY3Rpb24odCl7ZS5uZXh0VGljayhmdW5jdGlvbigpe2EodCl9KX19KCk6ZnVuY3Rpb24oKXtpZih0LnBvc3RNZXNzYWdlJiYhdC5pbXBvcnRTY3JpcHRzKXt2YXIgZT0hMCxuPXQub25tZXNzYWdlO3JldHVybiB0Lm9ubWVzc2FnZT1mdW5jdGlvbigpe2U9ITF9LHQucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksdC5vbm1lc3NhZ2U9bixlfX0oKT9mdW5jdGlvbigpe3ZhciBlPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsbj1mdW5jdGlvbihuKXtuLnNvdXJjZT09PXQmJlwic3RyaW5nXCI9PXR5cGVvZiBuLmRhdGEmJjA9PT1uLmRhdGEuaW5kZXhPZihlKSYmYSgrbi5kYXRhLnNsaWNlKGUubGVuZ3RoKSl9O3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiwhMSk6dC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLG4pLHM9ZnVuY3Rpb24obil7dC5wb3N0TWVzc2FnZShlK24sXCIqXCIpfX0oKTp0Lk1lc3NhZ2VDaGFubmVsP2Z1bmN0aW9uKCl7dmFyIHQ9bmV3IE1lc3NhZ2VDaGFubmVsO3QucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKHQpe2EodC5kYXRhKX0scz1mdW5jdGlvbihlKXt0LnBvcnQyLnBvc3RNZXNzYWdlKGUpfX0oKTpmJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIHQ9Zi5kb2N1bWVudEVsZW1lbnQ7cz1mdW5jdGlvbihlKXt2YXIgbj1mLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXthKGUpLG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdC5yZW1vdmVDaGlsZChuKSxuPW51bGx9LHQuYXBwZW5kQ2hpbGQobil9fSgpOmZ1bmN0aW9uKCl7cz1mdW5jdGlvbih0KXtzZXRUaW1lb3V0KGEsMCx0KX19KCksZC5zZXRJbW1lZGlhdGU9byxkLmNsZWFySW1tZWRpYXRlPXJ9fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT10P3RoaXM6dDpzZWxmKX0pLmNhbGwoZSxuKDcpLG4oMjApKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBvKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHIodCl7aWYodT09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigodT09PW58fCF1KSYmc2V0VGltZW91dClyZXR1cm4gdT1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIHUodCwwKX1jYXRjaChlKXt0cnl7cmV0dXJuIHUuY2FsbChudWxsLHQsMCl9Y2F0Y2goZSl7cmV0dXJuIHUuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGY9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigoZj09PW98fCFmKSYmY2xlYXJUaW1lb3V0KXJldHVybiBmPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBmKHQpfWNhdGNoKGUpe3RyeXtyZXR1cm4gZi5jYWxsKG51bGwsdCl9Y2F0Y2goZSl7cmV0dXJuIGYuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gYSgpe2ImJnAmJihiPSExLHAubGVuZ3RoP209cC5jb25jYXQobSk6dj0tMSxtLmxlbmd0aCYmcygpKX1mdW5jdGlvbiBzKCl7aWYoIWIpe3ZhciB0PXIoYSk7Yj0hMDtmb3IodmFyIGU9bS5sZW5ndGg7ZTspe2ZvcihwPW0sbT1bXTsrK3Y8ZTspcCYmcFt2XS5ydW4oKTt2PS0xLGU9bS5sZW5ndGh9cD1udWxsLGI9ITEsaSh0KX19ZnVuY3Rpb24gYyh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIGwoKXt9dmFyIHUsZixkPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7dT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bn1jYXRjaCh0KXt1PW59dHJ5e2Y9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpvfWNhdGNoKHQpe2Y9b319KCk7dmFyIHAsbT1bXSxiPSExLHY9LTE7ZC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO20ucHVzaChuZXcgYyh0LGUpKSwxIT09bS5sZW5ndGh8fGJ8fHIocyl9LGMucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LGQudGl0bGU9XCJicm93c2VyXCIsZC5icm93c2VyPSEwLGQuZW52PXt9LGQuYXJndj1bXSxkLnZlcnNpb249XCJcIixkLnZlcnNpb25zPXt9LGQub249bCxkLmFkZExpc3RlbmVyPWwsZC5vbmNlPWwsZC5vZmY9bCxkLnJlbW92ZUxpc3RlbmVyPWwsZC5yZW1vdmVBbGxMaXN0ZW5lcnM9bCxkLmVtaXQ9bCxkLnByZXBlbmRMaXN0ZW5lcj1sLGQucHJlcGVuZE9uY2VMaXN0ZW5lcj1sLGQubGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybltdfSxkLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGQuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LGQuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxkLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bigyMikucG9seWZpbGwoKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCxlKXtpZih2b2lkIDA9PT10fHxudWxsPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XCIpO2Zvcih2YXIgbj1PYmplY3QodCksbz0xO288YXJndW1lbnRzLmxlbmd0aDtvKyspe3ZhciByPWFyZ3VtZW50c1tvXTtpZih2b2lkIDAhPT1yJiZudWxsIT09cilmb3IodmFyIGk9T2JqZWN0LmtleXMoT2JqZWN0KHIpKSxhPTAscz1pLmxlbmd0aDthPHM7YSsrKXt2YXIgYz1pW2FdLGw9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLGMpO3ZvaWQgMCE9PWwmJmwuZW51bWVyYWJsZSYmKG5bY109cltjXSl9fXJldHVybiBufWZ1bmN0aW9uIHIoKXtPYmplY3QuYXNzaWdufHxPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LFwiYXNzaWduXCIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm99KX10LmV4cG9ydHM9e2Fzc2lnbjpvLHBvbHlmaWxsOnJ9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigyNCkscj1uKDYpLGk9big1KSxhPW4oMzYpLHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIG49YS5nZXRPcHRzLmFwcGx5KHZvaWQgMCx0KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxlKXtpLmRlZmF1bHQucHJvbWlzZT17cmVzb2x2ZTp0LHJlamVjdDplfSxvLmRlZmF1bHQobiksc2V0VGltZW91dChmdW5jdGlvbigpe3Iub3Blbk1vZGFsKCl9KX0pfX07cy5jbG9zZT1yLm9uQWN0aW9uLHMuZ2V0U3RhdGU9ci5nZXRTdGF0ZSxzLnNldEFjdGlvblZhbHVlPWkuc2V0QWN0aW9uVmFsdWUscy5zdG9wTG9hZGluZz1yLnN0b3BMb2FkaW5nLHMuc2V0RGVmYXVsdHM9YS5zZXREZWZhdWx0cyxlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDApLGk9ci5kZWZhdWx0Lk1PREFMLGE9big0KSxzPW4oMzQpLGM9bigzNSksbD1uKDEpO2UuaW5pdD1mdW5jdGlvbih0KXtvLmdldE5vZGUoaSl8fChkb2N1bWVudC5ib2R5fHxsLnRocm93RXJyKFwiWW91IGNhbiBvbmx5IHVzZSBTd2VldEFsZXJ0IEFGVEVSIHRoZSBET00gaGFzIGxvYWRlZCFcIikscy5kZWZhdWx0KCksYS5kZWZhdWx0KCkpLGEuaW5pdE1vZGFsQ29udGVudCh0KSxjLmRlZmF1bHQodCl9LGUuZGVmYXVsdD1lLmluaXR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk1PREFMO2UubW9kYWxNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+PC9kaXY+JyxlLmRlZmF1bHQ9ZS5tb2RhbE1hcmt1cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuT1ZFUkxBWSxpPSc8ZGl2IFxcbiAgICBjbGFzcz1cIicrcisnXCJcXG4gICAgdGFiSW5kZXg9XCItMVwiPlxcbiAgPC9kaXY+JztlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuSUNPTjtlLmVycm9ySWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLWVycm9yXCIsZT10K1wiX19saW5lXCI7cmV0dXJuJ1xcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX3gtbWFya1wiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJytlK1wiIFwiK2UrJy0tbGVmdFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLXJpZ2h0XCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICd9LGUud2FybmluZ0ljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS13YXJuaW5nXCI7cmV0dXJuJ1xcbiAgICA8c3BhbiBjbGFzcz1cIicrdCsnX19ib2R5XCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fZG90XCI+PC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuICAnfSxlLnN1Y2Nlc3NJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0tc3VjY2Vzc1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS1sb25nXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cIicrdCtcIl9fbGluZSBcIit0KydfX2xpbmUtLXRpcFwiPjwvc3Bhbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX19yaW5nXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19faGlkZS1jb3JuZXJzXCI+PC9kaXY+XFxuICAnfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQ09OVEVOVDtlLmNvbnRlbnRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+XFxuXFxuICA8L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5CVVRUT05fQ09OVEFJTkVSLGk9by5kZWZhdWx0LkJVVFRPTixhPW8uZGVmYXVsdC5CVVRUT05fTE9BREVSO2UuYnV0dG9uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgICA8YnV0dG9uXFxuICAgICAgY2xhc3M9XCInK2krJ1wiXFxuICAgID48L2J1dHRvbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrYSsnXCI+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNCkscj1uKDIpLGk9bigwKSxhPWkuZGVmYXVsdC5JQ09OLHM9aS5kZWZhdWx0LklDT05fQ1VTVE9NLGM9W1wiZXJyb3JcIixcIndhcm5pbmdcIixcInN1Y2Nlc3NcIixcImluZm9cIl0sbD17ZXJyb3I6ci5lcnJvckljb25NYXJrdXAoKSx3YXJuaW5nOnIud2FybmluZ0ljb25NYXJrdXAoKSxzdWNjZXNzOnIuc3VjY2Vzc0ljb25NYXJrdXAoKX0sdT1mdW5jdGlvbih0LGUpe3ZhciBuPWErXCItLVwiK3Q7ZS5jbGFzc0xpc3QuYWRkKG4pO3ZhciBvPWxbdF07byYmKGUuaW5uZXJIVE1MPW8pfSxmPWZ1bmN0aW9uKHQsZSl7ZS5jbGFzc0xpc3QuYWRkKHMpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7bi5zcmM9dCxlLmFwcGVuZENoaWxkKG4pfSxkPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPW8uaW5qZWN0RWxJbnRvTW9kYWwoci5pY29uTWFya3VwKTtjLmluY2x1ZGVzKHQpP3UodCxlKTpmKHQsZSl9fTtlLmRlZmF1bHQ9ZH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMikscj1uKDQpLGk9ZnVuY3Rpb24odCl7bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIkFwcGxlV2ViS2l0XCIpJiYodC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQub2Zmc2V0SGVpZ2h0LHQuc3R5bGUuZGlzcGxheT1cIlwiKX07ZS5pbml0VGl0bGU9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChvLnRpdGxlTWFya3VwKTtlLnRleHRDb250ZW50PXQsaShlKX19LGUuaW5pdFRleHQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3Quc3BsaXQoXCJcXG5cIikuZm9yRWFjaChmdW5jdGlvbih0LG4sbyl7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSksbjxvLmxlbmd0aC0xJiZlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSl9KTt2YXIgbj1yLmluamVjdEVsSW50b01vZGFsKG8udGV4dE1hcmt1cCk7bi5hcHBlbmRDaGlsZChlKSxpKG4pfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9big0KSxpPW4oMCksYT1pLmRlZmF1bHQuQlVUVE9OLHM9aS5kZWZhdWx0LkRBTkdFUl9CVVRUT04sYz1uKDMpLGw9bigyKSx1PW4oNiksZj1uKDUpLGQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudGV4dCxpPWUudmFsdWUsZD1lLmNsYXNzTmFtZSxwPWUuY2xvc2VNb2RhbCxtPW8uc3RyaW5nVG9Ob2RlKGwuYnV0dG9uTWFya3VwKSxiPW0ucXVlcnlTZWxlY3RvcihcIi5cIithKSx2PWErXCItLVwiK3Q7aWYoYi5jbGFzc0xpc3QuYWRkKHYpLGQpeyhBcnJheS5pc0FycmF5KGQpP2Q6ZC5zcGxpdChcIiBcIikpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5sZW5ndGg+MH0pLmZvckVhY2goZnVuY3Rpb24odCl7Yi5jbGFzc0xpc3QuYWRkKHQpfSl9biYmdD09PWMuQ09ORklSTV9LRVkmJmIuY2xhc3NMaXN0LmFkZChzKSxiLnRleHRDb250ZW50PXI7dmFyIGc9e307cmV0dXJuIGdbdF09aSxmLnNldEFjdGlvblZhbHVlKGcpLGYuc2V0QWN0aW9uT3B0aW9uc0Zvcih0LHtjbG9zZU1vZGFsOnB9KSxiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHUub25BY3Rpb24odCl9KSxtfSxwPWZ1bmN0aW9uKHQsZSl7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChsLmZvb3Rlck1hcmt1cCk7Zm9yKHZhciBvIGluIHQpe3ZhciBpPXRbb10sYT1kKG8saSxlKTtpLnZpc2libGUmJm4uYXBwZW5kQ2hpbGQoYSl9MD09PW4uY2hpbGRyZW4ubGVuZ3RoJiZuLnJlbW92ZSgpfTtlLmRlZmF1bHQ9cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMykscj1uKDQpLGk9bigyKSxhPW4oNSkscz1uKDYpLGM9bigwKSxsPWMuZGVmYXVsdC5DT05URU5ULHU9ZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxuPWUudmFsdWU7YS5zZXRBY3Rpb25WYWx1ZShuKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24odCl7aWYoXCJFbnRlclwiPT09dC5rZXkpcmV0dXJuIHMub25BY3Rpb24oby5DT05GSVJNX0tFWSl9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5mb2N1cygpLGEuc2V0QWN0aW9uVmFsdWUoXCJcIil9LDApfSxmPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpLHI9bCtcIl9fXCIrZTtvLmNsYXNzTGlzdC5hZGQocik7Zm9yKHZhciBpIGluIG4pe3ZhciBhPW5baV07b1tpXT1hfVwiaW5wdXRcIj09PWUmJnUobyksdC5hcHBlbmRDaGlsZChvKX0sZD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKGkuY29udGVudE1hcmt1cCksbj10LmVsZW1lbnQsbz10LmF0dHJpYnV0ZXM7XCJzdHJpbmdcIj09dHlwZW9mIG4/ZihlLG4sbyk6ZS5hcHBlbmRDaGlsZChuKX19O2UuZGVmYXVsdD1kfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksaT1mdW5jdGlvbigpe3ZhciB0PW8uc3RyaW5nVG9Ob2RlKHIub3ZlcmxheU1hcmt1cCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX07ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDUpLHI9big2KSxpPW4oMSksYT1uKDMpLHM9bigwKSxjPXMuZGVmYXVsdC5NT0RBTCxsPXMuZGVmYXVsdC5CVVRUT04sdT1zLmRlZmF1bHQuT1ZFUkxBWSxmPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx2KCl9LGQ9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGcoKX0scD1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXN3aXRjaCh0LmtleSl7Y2FzZVwiRXNjYXBlXCI6cmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX19LG09ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIlRhYlwiOnJldHVybiBmKHQpfX0sYj1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXJldHVyblwiVGFiXCI9PT10LmtleSYmdC5zaGlmdEtleT9kKHQpOnZvaWQgMH0sdj1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShsKTt0JiYodC50YWJJbmRleD0wLHQuZm9jdXMoKSl9LGc9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUoYyksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCksbj1lLmxlbmd0aC0xLG89ZVtuXTtvJiZvLmZvY3VzKCl9LGg9ZnVuY3Rpb24odCl7dFt0Lmxlbmd0aC0xXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLG0pfSx3PWZ1bmN0aW9uKHQpe3RbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixiKX0seT1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShjKSxlPXQucXVlcnlTZWxlY3RvckFsbChcIi5cIitsKTtlLmxlbmd0aCYmKGgoZSksdyhlKSl9LHg9ZnVuY3Rpb24odCl7aWYoaS5nZXROb2RlKHUpPT09dC50YXJnZXQpcmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX0sXz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldE5vZGUodSk7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4KSx0JiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHgpfSxrPWZ1bmN0aW9uKHQpe28uZGVmYXVsdC50aW1lciYmY2xlYXJUaW1lb3V0KG8uZGVmYXVsdC50aW1lciksdCYmKG8uZGVmYXVsdC50aW1lcj13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9LHQpKX0sTz1mdW5jdGlvbih0KXt0LmNsb3NlT25Fc2M/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCk6ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCksdC5kYW5nZXJNb2RlP3YoKTpnKCkseSgpLF8odC5jbG9zZU9uQ2xpY2tPdXRzaWRlKSxrKHQudGltZXIpfTtlLmRlZmF1bHQ9T30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGk9bigzNyksYT1uKDM4KSxzPXt0aXRsZTpudWxsLHRleHQ6bnVsbCxpY29uOm51bGwsYnV0dG9uczpyLmRlZmF1bHRCdXR0b25MaXN0LGNvbnRlbnQ6bnVsbCxjbGFzc05hbWU6bnVsbCxjbG9zZU9uQ2xpY2tPdXRzaWRlOiEwLGNsb3NlT25Fc2M6ITAsZGFuZ2VyTW9kZTohMSx0aW1lcjpudWxsfSxjPU9iamVjdC5hc3NpZ24oe30scyk7ZS5zZXREZWZhdWx0cz1mdW5jdGlvbih0KXtjPU9iamVjdC5hc3NpZ24oe30scyx0KX07dmFyIGw9ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5idXR0b24sbj10JiZ0LmJ1dHRvbnM7cmV0dXJuIHZvaWQgMCE9PWUmJnZvaWQgMCE9PW4mJm8udGhyb3dFcnIoXCJDYW5ub3Qgc2V0IGJvdGggJ2J1dHRvbicgYW5kICdidXR0b25zJyBvcHRpb25zIVwiKSx2b2lkIDAhPT1lP3tjb25maXJtOmV9Om59LHU9ZnVuY3Rpb24odCl7cmV0dXJuIG8ub3JkaW5hbFN1ZmZpeE9mKHQrMSl9LGY9ZnVuY3Rpb24odCxlKXtvLnRocm93RXJyKHUoZSkrXCIgYXJndW1lbnQgKCdcIit0K1wiJykgaXMgaW52YWxpZFwiKX0sZD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07by5pc1BsYWluT2JqZWN0KHIpfHx2b2lkIDA9PT1yfHxvLnRocm93RXJyKFwiRXhwZWN0ZWQgXCIrdShuKStcIiBhcmd1bWVudCAoJ1wiK3IrXCInKSB0byBiZSBhIHBsYWluIG9iamVjdFwiKX0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07dm9pZCAwIT09ciYmby50aHJvd0VycihcIlVuZXhwZWN0ZWQgXCIrdShuKStcIiBhcmd1bWVudCAoXCIrcitcIilcIil9LG09ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9dHlwZW9mIGUsYT1cInN0cmluZ1wiPT09aSxzPWUgaW5zdGFuY2VvZiBFbGVtZW50O2lmKGEpe2lmKDA9PT1uKXJldHVybnt0ZXh0OmV9O2lmKDE9PT1uKXJldHVybnt0ZXh0OmUsdGl0bGU6clswXX07aWYoMj09PW4pcmV0dXJuIGQobixyKSx7aWNvbjplfTtmKGUsbil9ZWxzZXtpZihzJiYwPT09bilyZXR1cm4gZChuLHIpLHtjb250ZW50OmV9O2lmKG8uaXNQbGFpbk9iamVjdChlKSlyZXR1cm4gcChuLHIpLGU7ZihlLG4pfX07ZS5nZXRPcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3ZhciBuPXt9O3QuZm9yRWFjaChmdW5jdGlvbihlLG8pe3ZhciByPW0oMCxlLG8sdCk7T2JqZWN0LmFzc2lnbihuLHIpfSk7dmFyIG89bChuKTtuLmJ1dHRvbnM9ci5nZXRCdXR0b25MaXN0T3B0cyhvKSxkZWxldGUgbi5idXR0b24sbi5jb250ZW50PWkuZ2V0Q29udGVudE9wdHMobi5jb250ZW50KTt2YXIgdT1PYmplY3QuYXNzaWduKHt9LHMsYyxuKTtyZXR1cm4gT2JqZWN0LmtleXModSkuZm9yRWFjaChmdW5jdGlvbih0KXthLkRFUFJFQ0FURURfT1BUU1t0XSYmYS5sb2dEZXByZWNhdGlvbih0KX0pLHV9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPXtlbGVtZW50OlwiaW5wdXRcIixhdHRyaWJ1dGVzOntwbGFjZWhvbGRlcjpcIlwifX07ZS5nZXRDb250ZW50T3B0cz1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gby5pc1BsYWluT2JqZWN0KHQpP09iamVjdC5hc3NpZ24oZSx0KTp0IGluc3RhbmNlb2YgRWxlbWVudD97ZWxlbWVudDp0fTpcImlucHV0XCI9PT10P3I6bnVsbH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmxvZ0RlcHJlY2F0aW9uPWZ1bmN0aW9uKHQpe3ZhciBuPWUuREVQUkVDQVRFRF9PUFRTW3RdLG89bi5vbmx5UmVuYW1lLHI9bi5yZXBsYWNlbWVudCxpPW4uc3ViT3B0aW9uLGE9bi5saW5rLHM9bz9cInJlbmFtZWRcIjpcImRlcHJlY2F0ZWRcIixjPSdTd2VldEFsZXJ0IHdhcm5pbmc6IFwiJyt0KydcIiBvcHRpb24gaGFzIGJlZW4gJytzK1wiLlwiO2lmKHIpe2MrPVwiIFBsZWFzZSB1c2VcIisoaT8nIFwiJytpKydcIiBpbiAnOlwiIFwiKSsnXCInK3IrJ1wiIGluc3RlYWQuJ312YXIgbD1cImh0dHBzOi8vc3dlZXRhbGVydC5qcy5vcmdcIjtjKz1hP1wiIE1vcmUgZGV0YWlsczogXCIrbCthOlwiIE1vcmUgZGV0YWlsczogXCIrbCtcIi9ndWlkZXMvI3VwZ3JhZGluZy1mcm9tLTF4XCIsY29uc29sZS53YXJuKGMpfSxlLkRFUFJFQ0FURURfT1BUUz17dHlwZTp7cmVwbGFjZW1lbnQ6XCJpY29uXCIsbGluazpcIi9kb2NzLyNpY29uXCJ9LGltYWdlVXJsOntyZXBsYWNlbWVudDpcImljb25cIixsaW5rOlwiL2RvY3MvI2ljb25cIn0sY3VzdG9tQ2xhc3M6e3JlcGxhY2VtZW50OlwiY2xhc3NOYW1lXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2NsYXNzbmFtZVwifSxpbWFnZVNpemU6e30sc2hvd0NhbmNlbEJ1dHRvbjp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LHNob3dDb25maXJtQnV0dG9uOntyZXBsYWNlbWVudDpcImJ1dHRvblwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNvbmZpcm1CdXR0b25UZXh0OntyZXBsYWNlbWVudDpcImJ1dHRvblwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNvbmZpcm1CdXR0b25Db2xvcjp7fSxjYW5jZWxCdXR0b25UZXh0OntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sY2xvc2VPbkNvbmZpcm06e3JlcGxhY2VtZW50OlwiYnV0dG9uXCIsc3ViT3B0aW9uOlwiY2xvc2VNb2RhbFwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNsb3NlT25DYW5jZWw6e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLHN1Yk9wdGlvbjpcImNsb3NlTW9kYWxcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sc2hvd0xvYWRlck9uQ29uZmlybTp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCJ9LGFuaW1hdGlvbjp7fSxpbnB1dFR5cGU6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxpbnB1dFZhbHVlOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saW5wdXRQbGFjZWhvbGRlcjp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGh0bWw6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxhbGxvd0VzY2FwZUtleTp7cmVwbGFjZW1lbnQ6XCJjbG9zZU9uRXNjXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2Nsb3Nlb25lc2NcIn0sYWxsb3dDbGlja091dHNpZGU6e3JlcGxhY2VtZW50OlwiY2xvc2VPbkNsaWNrT3V0c2lkZVwiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbG9zZW9uY2xpY2tvdXRzaWRlXCJ9fX1dKX0pOyIsImltcG9ydCB7IFB1YlN1YiwgRVYgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IFRhc2tzID0gKCgpID0+IHtcblx0bGV0IF90YXNrTGlzdCA9IG5ldyBTZXQoKTtcblx0bGV0IF9pZENvdW50ZXIgPSAxO1xuXG5cdGNvbnN0IF9jb2x1bW5OYW1lcyA9IFtcImJhY2tsb2dcIiwgXCJ0by1kb1wiLCBcImluLXByb2dyZXNzXCIsIFwiZG9uZVwiXTtcblxuXHRsZXQgX3Byb3BlcnR5TmFtZXMgPSBbXG5cdFx0XCJ0aXRsZVwiLFxuXHRcdFwic3RhdHVzXCIsXG5cdFx0XCJwcm9qZWN0XCIsXG5cdFx0XCJwcmlvcml0eVwiLFxuXHRcdFwibm90ZXNcIixcblx0XHRcImR1ZVwiLFxuXHRcdFwidGFnc1wiLFxuXHRdO1xuXG5cdGxldCBfcHJpb3JpdGllcyA9IFtcImhpZ2hcIiwgXCJtZWRpdW1cIiwgXCJsb3dcIl07XG5cblx0ZnVuY3Rpb24gX2RhdGVTb3J0KG91dGdvaW5nVGFza3MpIHtcblx0XHRyZXR1cm4gb3V0Z29pbmdUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRlQSA9ICthLmdldFByb3BlcnRpZXMoKS5kdWUuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XG5cdFx0XHRjb25zdCBkYXRlQiA9ICtiLmdldFByb3BlcnRpZXMoKS5kdWUuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XG5cdFx0XHRyZXR1cm4gIWRhdGVBID8gMSA6IGRhdGVCIC0gZGF0ZUE7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBfY29sdW1uU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIF9jb2x1bW5OYW1lcy5tYXAoKGNvbHVtbk5hbWUpID0+IFtcblx0XHRcdGNvbHVtbk5hbWUsXG5cdFx0XHRfZGF0ZVNvcnQoXG5cdFx0XHRcdG91dGdvaW5nVGFza3MuZmlsdGVyKFxuXHRcdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKS5zdGF0dXMgPT09IGNvbHVtbk5hbWVcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRdKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF90YXNrRmFjdG9yeSgpIHtcblx0XHRjb25zdCBfdGFzayA9IHt9O1xuXHRcdGNvbnN0IHNldFByb3BlcnR5ID0gKGtleSwgdmFsdWUpID0+IChfdGFza1trZXldID0gdmFsdWUpO1xuXHRcdF9wcm9wZXJ0eU5hbWVzLmZvckVhY2goKHByb3ApID0+IHNldFByb3BlcnR5KHByb3AsIFwiXCIpKTtcblx0XHRjb25zdCBnZXRQcm9wZXJ0aWVzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgLi4uX3Rhc2sgfTtcblx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRQcm9wZXJ0aWVzLFxuXHRcdFx0c2V0UHJvcGVydHksXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2soaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBfdGFza0ZhY3RvcnkoKTtcblx0XHRuZXdUYXNrLnNldFByb3BlcnR5KFwiaWRcIiwgX2lkQ291bnRlcisrKTtcblx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdG5ld1Rhc2suc2V0UHJvcGVydHkocGFpclswXSwgcGFpclsxXSk7XG5cdFx0fSk7XG5cdFx0X3Rhc2tMaXN0LmFkZChuZXdUYXNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRhc2tzKC4uLnJlbW92ZUlkcykge1xuXHRcdFsuLi5fdGFza0xpc3RdLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGlmIChyZW1vdmVJZHMuaW5jbHVkZXModGFzay5nZXRQcm9wZXJ0aWVzKCkuaWQpKSB7XG5cdFx0XHRcdF90YXNrTGlzdC5kZWxldGUodGFzayk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVUYXNrKHVwZGF0ZUlkLCBpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0Wy4uLl90YXNrTGlzdF0uZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0aWYgKHVwZGF0ZUlkID09PSB0YXNrLmdldFByb3BlcnRpZXMoKS5pZCkge1xuXHRcdFx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdFx0XHR0YXNrLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdFx0X3Rhc2tMaXN0LmNsZWFyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUYXNrc0J5KHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIFsuLi5fdGFza0xpc3RdLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKClbcHJvcF0gPT09IHZhbHVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNvcnRlZFRhc2tzQnkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gX2NvbHVtblNvcnQoXG5cdFx0XHRbLi4uX3Rhc2tMaXN0XS5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpW3Byb3BdID09PSB2YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5BREQsIGFkZFRhc2spO1xuXHRjb25zdCBzdWJSZW1vdmVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLkRFTEVURSwgcmVtb3ZlVGFza3MpO1xuXHRjb25zdCBzdWJVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLlVQREFURSwgdXBkYXRlVGFzayk7XG5cdGNvbnN0IHN1YkNsZWFyVGFza3MgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgY2xlYXJUYXNrcyk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRBbGxUYXNrczogKCkgPT4gWy4uLl90YXNrTGlzdF0sXG5cdFx0Z2V0U29ydGVkVGFza3M6ICgpID0+IF9jb2x1bW5Tb3J0KFsuLi5fdGFza0xpc3RdKSxcblx0XHRnZXRUYXNrc0J5LFxuXHRcdGdldFNvcnRlZFRhc2tzQnksXG5cdFx0Z2V0Q29sdW1uTmFtZXM6ICgpID0+IF9jb2x1bW5OYW1lcyxcblx0XHRnZXRQcmlvcml0eU5hbWVzOiAoKSA9PiBfcHJpb3JpdGllcyxcblx0XHRnZXRQcm9wZXJ0eU5hbWVzOiAoKSA9PiBfcHJvcGVydHlOYW1lcyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG5cdGxldCBfcHJvamVjdExpc3QgPSBuZXcgU2V0KCk7XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0TmFtZSkge1xuXHRcdF9wcm9qZWN0TGlzdC5hZGQobmV3UHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHJlbW92ZU5hbWUpIHtcblx0XHRpZiAoX3Byb2plY3RMaXN0LmhhcyhyZW1vdmVOYW1lKSkge1xuXHRcdFx0Ly8gR2V0IHRhc2suaWQncyBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9qZWN0XG5cdFx0XHRjb25zdCByZW1vdmVJZHMgPSBUYXNrcy5nZXRUYXNrc0J5KFwicHJvamVjdFwiLCByZW1vdmVOYW1lKS5tYXAoXG5cdFx0XHRcdCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKS5pZFxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCB0YXNrcyB3aXRoIHRob3NlIGlkJ3MgZnJvbSBfdGFza0xpc3Rcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlRBU0suREVMRVRFLCAuLi5yZW1vdmVJZHMpO1xuXG5cdFx0XHQvLyBSZW1vdmUgbmFtZSBmcm9tIHByb2plY3QgbGlzdFxuXHRcdFx0X3Byb2plY3RMaXN0LmRlbGV0ZShyZW1vdmVOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhclByb2plY3RzKCkge1xuXHRcdF9wcm9qZWN0TGlzdC5jbGVhcigpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5BREQsIGFkZFByb2plY3QpO1xuXHRjb25zdCBzdWJSZW1vdmVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkRFTEVURSwgcmVtb3ZlUHJvamVjdCk7XG5cdGNvbnN0IHN1YkNsZWFyUHJvamVjdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgY2xlYXJQcm9qZWN0cyk7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRQcm9qZWN0czogKCkgPT4gWy4uLl9wcm9qZWN0TGlzdF0uc29ydCgpLFxuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYWRkRGVmYXVsdHMoKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLlJFU0VULkNMRUFSX0FMTCk7XG5cdFtcImhvbWVcIiwgXCJmaW5hbmNlc1wiLCBcImxlYXJuaW5nXCJdLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5QUk9KRUNULkFERCwgcHJvamVjdCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRlZmF1bHRUYXNrcyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJwYXkgYmlsbHNcIixcblx0XHRcdHN0YXR1czogXCJpbi1wcm9ncmVzc1wiLFxuXHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxuXHRcdFx0bm90ZXM6IFwidGhlIHJlbnQgaXMgdG9vIGRhbW4gaGlnaFwiLFxuXHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDFcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcImdyb2Nlcmllc1wiLFxuXHRcdFx0c3RhdHVzOiBcInRvLWRvXCIsXG5cdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiZmlsZSB0YXhlc1wiLFxuXHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwicmVhZCBDaGVraG92XCIsXG5cdFx0XHRzdGF0dXM6IFwiYmFja2xvZ1wiLFxuXHRcdFx0cHJvamVjdDogXCJsZWFybmluZ1wiLFxuXHRcdFx0cHJpb3JpdHk6IFwibG93XCIsXG5cdFx0XHRkdWU6IFwiMjAyMy0xMS0wNVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwicmVwbGFjZSBsaWdodGJ1bGJcIixcblx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0cHJvamVjdDogXCJob21lXCIsXG5cdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdG5vdGVzOiBcImJhdGhyb29tIGxpZ2h0IGlzIGZsaWNrZXJpbmdcIixcblx0XHRcdHRhZ3M6IFwic3RvcmVcIixcblx0XHR9LFxuXHRdLm1hcCgoaXRlbSkgPT4gT2JqZWN0LmVudHJpZXMoaXRlbSkpO1xuXG5cdGRlZmF1bHRUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5BREQsIGl0ZW0pO1xuXHR9KTtcbn1cblxuY29uc3Qgc3ViRGVmYXVsdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkFERF9ERUZBVUxUUywgYWRkRGVmYXVsdHMpO1xuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtYXREYXRlLCBodG1sRmFjdG9yeSwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHViU3ViLCBFViB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQgPT09IGRpYWxvZykgZGlhbG9nLmNsb3NlKCk7XG59KTtcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuXHRkaWFsb2cudGV4dENvbnRlbnQgPSBcIlwiO1xufSk7XG5cbmZ1bmN0aW9uIGJ1aWxkRGlzcGxheU1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktbW9kZVwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJkaXNwbGF5LWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaGVhZGVyXCI+XG5cdFx0XHRcdFx0PGgzIGlkPVwiZGlzcGxheS10aXRsZVwiPjwvaDM+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktZGl2aWRlclwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktZGV0YWlsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5Qcm9qZWN0OiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LXByb2plY3RcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPlByaW9yaXR5OiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LXByaW9yaXR5XCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5EdWU6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktZHVlXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5TdGF0dXM6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktc3RhdHVzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5Ob3RlczogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS1ub3Rlc1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+VGFnczogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS10YWdzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIgZGF0YS10YXNrLWlkPVwiXCI+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGlzcGxheS1jbG9zZS1idG5cIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJlZGl0LWJ0blwiPkVkaXQ8L2J1dHRvbj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L2Rpdj5cblx0YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkoc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIHNlbGVjdGVkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0VGFza3MuZ2V0UHJvcGVydHlOYW1lcygpLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRpc3BsYXktJHtwcm9wfWApO1xuXHRcdGxldCBvdXRwdXQgPSB0YXNrW3Byb3BdO1xuXG5cdFx0aWYgKHByb3AgPT09IFwiZHVlXCIgJiYgISFvdXRwdXQpIHtcblx0XHRcdG91dHB1dCA9IGZvcm1hdERhdGUob3V0cHV0KTtcblx0XHR9XG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IHByb3AgPT09IFwidGFnc1wiID8gb3V0cHV0IDogbWFrZUZpcnN0VXBwZXIob3V0cHV0KTtcblx0fSk7XG5cdGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmlkLWJ1YmJsZS1tYXJrZXJcIikuZGF0YXNldC50YXNrSWQgPSBzZWxlY3RlZElkO1xufVxuXG5mdW5jdGlvbiBidWlsZEVkaXRNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdDxmb3JtIGNsYXNzPVwiZWRpdC1tb2RlXCIgbWV0aG9kPVwiZGlhbG9nXCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImVkaXQtbW9kZS1kZXRhaWxzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBpZD1cInByb2plY3RcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZHVlXCI+RHVlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZVwiIGNsYXNzPVwic3VibWl0LWluZm9cIi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwic3RhdHVzXCI+U3RhdHVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwic3RhdHVzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkPjwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgcm93cz1cIjVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHQ8cD5TZXBhcmF0ZSB0YWdzIHdpdGggY29tbWFzLjwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFnc1wiPlRhZ3M6PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFnc1wiIGNsYXNzPVwic3VibWl0LWluZm9cIi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJidXR0b25zIGlkLWJ1YmJsZS1tYXJrZXJcIiBkYXRhLXRhc2staWQ9XCJcIj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+QmFjazwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNhdmUtYnRuXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvZm9ybT5cblx0YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBhZGREcm9wZG93bnMoKSB7XG5cdFtcblx0XHRbXCJwcm9qZWN0XCIsIFByb2plY3RzLmdldFByb2plY3RzKCldLFxuXHRcdFtcInByaW9yaXR5XCIsIFRhc2tzLmdldFByaW9yaXR5TmFtZXMoKV0sXG5cdFx0W1wic3RhdHVzXCIsIFRhc2tzLmdldENvbHVtbk5hbWVzKCldLFxuXHRdLmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFpclswXSk7XG5cdFx0cGFpclsxXS5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KFxuXHRcdFx0XHRcdGVsRmFjdG9yeShcIm9wdGlvblwiLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogb3B0aW9uLFxuXHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKG9wdGlvbiksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybSh0YXNrKSB7XG5cdFRhc2tzLmdldFByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApO1xuXG5cdFx0c3dpdGNoIChwcm9wKSB7XG5cdFx0XHRjYXNlIFwicHJvamVjdFwiOlxuXHRcdFx0Y2FzZSBcInByaW9yaXR5XCI6XG5cdFx0XHRjYXNlIFwic3RhdHVzXCI6XG5cdFx0XHRcdFsuLi5lbGVtZW50LmNoaWxkcmVuXS5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT09IHRhc2tbcHJvcF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ0aXRsZVwiOlxuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gbWFrZUZpcnN0VXBwZXIodGFza1twcm9wXSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwibm90ZXNcIjpcblx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKHRhc2tbcHJvcF0pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IHRhc2tbcHJvcF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cdGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmlkLWJ1YmJsZS1tYXJrZXJcIikuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xufVxuXG5mdW5jdGlvbiBidWlsZFByb2plY3RNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdDxmb3JtIGNsYXNzPVwicHJvamVjdC1tb2RlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJuZXctcHJvamVjdFwiPk5ldyBQcm9qZWN0OjwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3LXByb2plY3RcIiByZXF1aXJlZC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInByb2plY3Qtc2F2ZS1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm9qZWN0LWNhbmNlbC1idG5cIj5cblx0XHRcdFx0XHRDYW5jZWxcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuY29uc3Qgc3ViRGlzcGxheUJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRElTUExBWV9NT0RFLCBidWlsZERpc3BsYXlNb2RlKTtcbmNvbnN0IHN1YkRpc3BsYXlQb3AgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5ESVNQTEFZX01PREUsIHBvcHVsYXRlRGlzcGxheSk7XG5cbmNvbnN0IHN1YkVkaXRCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkVESVRfTU9ERSwgYnVpbGRFZGl0TW9kZSk7XG5jb25zdCBzdWJFZGl0RHJvcGRvd25zID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRURJVF9NT0RFLCBhZGREcm9wZG93bnMpO1xuY29uc3Qgc3ViRm9ybVBvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkVESVRfTU9ERV9QT1AsIHBvcHVsYXRlRm9ybSk7XG5cbmNvbnN0IHN1YlByb2plY3RCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLlBST0pFQ1RfTU9ERSwgYnVpbGRQcm9qZWN0TW9kZSk7XG4iLCJpbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBmaW5kU3RhdHVzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgRVYsIFB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5sZXQgZHJhZ2dlZFRhc2sgPSB1bmRlZmluZWQ7XG5sZXQgY291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZERyYWdEcm9wKGNhcmQpIHtcblx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydCk7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG5cdGRyYWdnZWRUYXNrID0gdGhpcztcblx0dGhpcy5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcbn1cblxuZnVuY3Rpb24gZHJhZ0VuZChlKSB7XG5cdGRyYWdnZWRUYXNrID0gdW5kZWZpbmVkO1xuXHR0aGlzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0Y291bnRlciA9IDA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhdHVzLWNvbHVtblwiKS5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0XHRzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0YXR1c0Ryb3AoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhdHVzLWNvbHVtblwiKS5mb3JFYWNoKChzdGF0dXMpID0+IHtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdXBkYXRlU3RhdHVzKTtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBkcmFnRW50ZXIpO1xuXHRcdHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIGRyYWdMZWF2ZSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VudGVyKCkge1xuXHRjb3VudGVyKys7XG5cdGZpbmRTdGF0dXModGhpcykuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0xlYXZlKCkge1xuXHRjb3VudGVyLS07XG5cdGlmIChjb3VudGVyID09PSAwKSB7XG5cdFx0ZmluZFN0YXR1cyh0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXR1cygpIHtcblx0Y29uc3QgZHJvcENvbHVtbiA9IGZpbmRTdGF0dXModGhpcykuaWQuc2xpY2UoMCwgLTcpO1xuXHRjb25zdCBkcmFnZ2VkSWQgPSArZHJhZ2dlZFRhc2suZGF0YXNldC50YXNrSWQ7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgZHJhZ2dlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdHRhc2suc3RhdHVzID0gZHJvcENvbHVtbjtcblxuXHRQdWJTdWIucHVibGlzaChFVi5UQVNLLlVQREFURSwgZHJhZ2dlZElkLCBPYmplY3QuZW50cmllcyh0YXNrKSk7XG59XG5cbmNvbnN0IHN1YkRyYWdEcm9wID0gUHViU3ViLnN1YnNjcmliZShFVi5BRERfRFJBR19EUk9QLCBhZGREcmFnRHJvcCk7XG5jb25zdCBzdWJTdGF0dXNEcm9wID0gUHViU3ViLnN1YnNjcmliZShFVi5BRERfU1RBVFVTX0RST1AsIGFkZFN0YXR1c0Ryb3ApO1xuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gRE9NIEZhY3RvcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcblx0cmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXM7XG5cblx0Zm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5ICE9PSBcImRhdGFzZXRcIikge1xuXHRcdFx0ZWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gU3BlY2lhbCBkaXJlY3Rpb25zIG5lZWRlZCB0byBzZXQgXCJkYXRhLVwiIHByb3BlcnRpZXNcblx0XHRcdGZvciAoY29uc3QgcHJvcCBpbiBhdHRyaWJ1dGVzW2tleV0pIHtcblx0XHRcdFx0ZWwuZGF0YXNldFtwcm9wXSA9IGF0dHJpYnV0ZXNba2V5XVtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvYmouY2hpbGRyZW4/LmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0Ly8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IGFkZGluZyBjaGlsZHJlbiB1cHN0cmVhbSBieVxuXHRcdC8vIHNldHRpbmcgXCJcIiBhcyB0aGUgYWx0ZXJuYXRpdmUgdG8gZWxGYWN0b3J5KClcblx0XHRpZiAoISFjaGlsZCkge1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoY2hpbGQpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBlbDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3RoZXIgSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2tJZCh0YXJnZXQpIHtcblx0cmV0dXJuICsodGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImlkLWJ1YmJsZS1tYXJrZXJcIilcblx0XHQ/IHRhcmdldC5kYXRhc2V0LnRhc2tJZFxuXHRcdDogZmluZFRhc2tJZCh0YXJnZXQucGFyZW50RWxlbWVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFByb2plY3ROYW1lKHRhcmdldCkge1xuXHRyZXR1cm4gdGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcInByb2plY3QtYnViYmxlLW1hcmtlclwiKVxuXHRcdD8gdGFyZ2V0LmRhdGFzZXQucHJvamVjdEZpbHRlclxuXHRcdDogZmluZFByb2plY3ROYW1lKHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTdGF0dXModGFyZ2V0KSB7XG5cdHJldHVybiB0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwic3RhdHVzLWNvbHVtblwiKVxuXHRcdD8gdGFyZ2V0XG5cdFx0OiBmaW5kU3RhdHVzKHRhcmdldC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGaXJzdFVwcGVyKHN0cmluZykge1xuXHRyZXR1cm4gISFzdHJpbmdcblx0XHQ/IHN0cmluZ1xuXHRcdFx0XHQuc3BsaXQoXCItXCIpXG5cdFx0XHRcdC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG5cdFx0XHRcdC5qb2luKFwiIFwiKVxuXHRcdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29EYXRlKSB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHtpc29EYXRlfVQxMjowMDowMC0wNDowMGApO1xuXHRjb25zdCBkYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuXHRjb25zdCBtb250aHMgPSBbXG5cdFx0XCJKYW5cIixcblx0XHRcIkZlYlwiLFxuXHRcdFwiTWFyXCIsXG5cdFx0XCJBcHJcIixcblx0XHRcIk1heVwiLFxuXHRcdFwiSnVuZVwiLFxuXHRcdFwiSnVseVwiLFxuXHRcdFwiQXVnXCIsXG5cdFx0XCJTZXB0XCIsXG5cdFx0XCJPY3RcIixcblx0XHRcIk5vdlwiLFxuXHRcdFwiRGVjXCIsXG5cdF07XG5cblx0cmV0dXJuIGAke2RheXNbZGF0ZS5nZXREYXkoKV19LCAke2RhdGUuZ2V0RGF0ZSgpfSAke1xuXHRcdG1vbnRoc1tkYXRlLmdldE1vbnRoKCldXG5cdH0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbn1cbiIsImV4cG9ydCBjb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZXZlbnRzTGlzdCA9IHt9O1xuXHQvLyB7IGtleTogXCJ0cmlnZ2VyRXZlbnRcIiwgdmFsdWU6IFsgYXJyYXkgb2YgZnVuY3Rpb25zIF0gfVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZSh0cmlnZ2VyRXZlbnQsIHN1YnNjcmliZXIpIHtcblx0XHRpZiAoIV9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0pIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0gPSBbc3Vic2NyaWJlcl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0ucHVzaChzdWJzY3JpYmVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVuc3Vic2NyaWJlOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZ1bmN0aW9uTGlzdCA9IF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG5cdFx0XHRcdGNvbnN0IGkgPSBmdW5jdGlvbkxpc3QuaW5kZXhPZihzdWJzY3JpYmVyKTtcblx0XHRcdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0XHRcdGZ1bmN0aW9uTGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1Ymxpc2godHJpZ2dlckV2ZW50LCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25MaXN0ID0gX2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShmdW5jdGlvbkxpc3QpKSB7XG5cdFx0XHRmdW5jdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuXHRcdFx0XHRzdWJzY3JpYmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3Vic2NyaWJlLCBwdWJsaXNoIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRVYgPSB7XG5cdElOSVQ6IFwiaW5pdFwiLFxuXHRESUFMT0c6IHtcblx0XHRESVNQTEFZX01PREU6IFwiZGlzcGxheU1vZGVcIixcblx0XHRFRElUX01PREU6IFwiZWRpdE1vZGVcIixcblx0XHRFRElUX01PREVfUE9QOiBcImVkaXRNb2RlUG9wdWxhdGVcIixcblx0XHRQUk9KRUNUX01PREU6IFwicHJvamVjdE1vZGVcIixcblx0fSxcblx0VEFTSzoge1xuXHRcdERFTEVURTogXCJkZWxldGVUYXNrXCIsXG5cdFx0QUREOiBcImFkZFRhc2tcIixcblx0XHRVUERBVEU6IFwidXBkYXRlVGFza1wiLFxuXHR9LFxuXHRJTkRFWDoge1xuXHRcdENBUkRfQ0xJQ0s6IFwiY2FyZENsaWNrXCIsXG5cdFx0Q0FSRF9ERUxFVEU6IFwiY2FyZERlbGV0ZVwiLFxuXHRcdFJFT1BFTl9FRElUOiBcInJlb3BlbkVkaXRNb2RlXCIsXG5cdH0sXG5cdFBST0pFQ1Q6IHtcblx0XHRBREQ6IFwiYWRkUHJvamVjdFwiLFxuXHRcdERFTEVURTogXCJkZWxldGVQcm9qZWN0XCIsXG5cdH0sXG5cdFJFU0VUOiB7XG5cdFx0QUREX0RFRkFVTFRTOiBcImFkZERlZmF1bHRzXCIsXG5cdFx0Q0xFQVJfQUxMOiBcImNsZWFyQWxsXCIsXG5cdH0sXG5cdFdBUk46IHtcblx0XHRUQVNLX1NVQk1JVDogXCJ3YXJuVGFza1N1Ym1pdFwiLFxuXHRcdFRBU0tfREVMRVRFOiBcIndhcm5UYXNrRGVsZXRlXCIsXG5cdFx0UFJPSkVDVF9ERUxFVEU6IFwid2FyblByb2plY3REZWxldGVcIixcblx0XHRERUZBVUxUUzogXCJ3YXJuRGVmYXVsdHNcIixcblx0XHRDTEVBUl9BTEw6IFwid2FybkNsZWFyQWxsXCIsXG5cdH0sXG5cdEFERF9EUkFHX0RST1A6IFwiYWRkRHJhZ0Ryb3BcIixcblx0QUREX1NUQVRVU19EUk9QOiBcImFkZFN0YXR1c0Ryb3BcIixcbn07XG4iLCJpbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9nXCI7XG5pbXBvcnQgeyBQdWJTdWIsIEVWIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQge1xuXHRlbEZhY3RvcnksXG5cdGh0bWxGYWN0b3J5LFxuXHRtYWtlRmlyc3RVcHBlcixcblx0ZmluZFByb2plY3ROYW1lLFxuXHRmaW5kVGFza0lkLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHNpZGViYXJPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLW9wZW4tYnRuXCIpO1xuY29uc3Qgc2lkZWJhckNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNsb3NlLWJ0blwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5zaWRlYmFyT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKSk7XG5zaWRlYmFyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIikpO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpc3BsYXllZFwiKTtcbmNvbnN0IHN0YXR1c2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNlcy1jb250YWluZXJcIik7XG5cbmNvbnN0IEFMTF9UQVNLUyA9IFwiYWxsLXRhc2tzXCI7XG5jb25zdCBOT19QUk9KRUNUID0gXCJ1bnNvcnRlZFwiO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gQUxMX1RBU0tTO1xuXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG5cdGlmIChjdXJyZW50UHJvamVjdCA9PT0gQUxMX1RBU0tTKSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKEFMTF9UQVNLUyk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoVGFza3MuZ2V0U29ydGVkVGFza3MoKSk7XG5cdFx0dXBkYXRlU2lkZWJhcigpO1xuXHR9IGVsc2Uge1xuXHRcdHByb2plY3REaXNwbGF5ZWQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcihjdXJyZW50UHJvamVjdCk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoXG5cdFx0XHRUYXNrcy5nZXRTb3J0ZWRUYXNrc0J5KFxuXHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0Y3VycmVudFByb2plY3QgPT09IE5PX1BST0pFQ1QgPyBcIlwiIDogY3VycmVudFByb2plY3Rcblx0XHRcdClcblx0XHQpO1xuXHRcdHVwZGF0ZVNpZGViYXIoKTtcblx0fVxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbHVtbnMoZGlzcGxheVRhc2tzKSB7XG5cdC8vIFJlc2V0IHRoZSBjb2x1bW5zXG5cdFsuLi5zdGF0dXNlc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocm93KSA9PiAocm93LnRleHRDb250ZW50ID0gXCJcIikpO1xuXG5cdC8vIEJ1aWxkIGNvbHVtbiBjb250ZW50XG5cdGRpc3BsYXlUYXNrcy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgY29sdW1uTmFtZSA9IGNvbHVtblswXTtcblx0XHRjb25zdCBzdGF0dXNOYW1lID0gbWFrZUZpcnN0VXBwZXIoY29sdW1uTmFtZSk7XG5cblx0XHRjb25zdCBjb2x1bW5Db250ZW50ID0gZWxGYWN0b3J5KFxuXHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtY29sdW1uXCIsXG5cdFx0XHRcdGlkOiBgJHtjb2x1bW5OYW1lfS1jb2x1bW5gLFxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDJcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtbmFtZVwiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBzdGF0dXNOYW1lICsgXCI6XCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XVxuXHRcdCk7XG5cblx0XHQvLyBCdWlsZCB0YXNrIGNhcmRzXG5cdFx0Y29sdW1uWzFdLmZvckVhY2goKHRhc2tDb250YWluZXIpID0+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSB0YXNrQ29udGFpbmVyLmdldFByb3BlcnRpZXMoKTtcblxuXHRcdFx0Y29sdW1uQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGFzay1jYXJkIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRcdFx0cHJpb3JpdHk6IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0dGFza0lkOiB0YXNrLmlkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYXJkLXNlY3Rpb25cIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImgzXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay50aXRsZSksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImNhcmQtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS10cmFzaC1vIGNhcmQtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImFyaWEtaGlkZGVuXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYXJkLXNlY3Rpb25cIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3RcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay5wcm9qZWN0KSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImR1ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiB0YXNrLmR1ZSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQvLyBBcHBlbmQgdG8gY29ycmVjdCByb3dcblx0XHRpZiAoaW5kZXggPCAyKSB7XG5cdFx0XHRzdGF0dXNlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KGNvbHVtbkNvbnRlbnQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly9NYWtlIGVhY2ggc3RhdHVzLWNvbHVtbiBhYmxlIHRvIHJlY2VpdmUgZHJhZ0Ryb3BzXG5cdFB1YlN1Yi5wdWJsaXNoKEVWLkFERF9TVEFUVVNfRFJPUCk7XG5cblx0Ly8gTWFrZSBlYWNoIHRhc2sgY2xpY2thYmxlIGFuZCBkcmFnZ2FibGVcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIikuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWLkFERF9EUkFHX0RST1AsIGNhcmQpO1xuXHRcdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiY2FyZC1kZWxldGUtYnRuXCIpKSB7XG5cdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLklOREVYLkNBUkRfREVMRVRFLCBlLCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVi5JTkRFWC5DQVJEX0NMSUNLLCBmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTaWRlYmFyKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcblx0Y29uc3QgcmVwbGFjZW1lbnRDb250YWluZXIgPSBlbEZhY3RvcnkoXG5cdFx0XCJkaXZcIixcblx0XHR7IGNsYXNzTGlzdDogXCJwcm9qZWN0cy1jb250YWluZXJcIiB9LFxuXHRcdFtBTExfVEFTS1MsIE5PX1BST0pFQ1QsIC4uLlByb2plY3RzLmdldFByb2plY3RzKCldLm1hcCgocHJvamVjdCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0LW5hbWUgcHJvamVjdC1idWJibGUtbWFya2VyXCIsXG5cdFx0XHRcdFx0ZGF0YXNldDogeyBwcm9qZWN0RmlsdGVyOiBwcm9qZWN0IH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJidXR0b25cIiwge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihwcm9qZWN0KSxcblx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0LWZpbHRlci1idG5cIixcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRbQUxMX1RBU0tTLCBOT19QUk9KRUNUXS5pbmNsdWRlcyhwcm9qZWN0KVxuXHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHQ6IGVsRmFjdG9yeShcblx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1kZWxldGUtYnRuXCIsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJpXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImZhIGZhLXRyYXNoXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdCAgKSxcblx0XHRcdFx0XVxuXHRcdFx0KTtcblx0XHR9KVxuXHQpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1idXR0b25zXCIpXG5cdFx0LmJlZm9yZShodG1sRmFjdG9yeShyZXBsYWNlbWVudENvbnRhaW5lcikpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZmlsdGVyLWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbHRlclByb2plY3RWaWV3KTtcblx0XHRpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSBtYWtlRmlyc3RVcHBlcihjdXJyZW50UHJvamVjdCkpIHtcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cdFx0fVxuXHR9KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRlbGV0ZS1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKGUudGFyZ2V0KTtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLldBUk4uUFJPSkVDVF9ERUxFVEUsIHNlbGVjdGVkUHJvamVjdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEN1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCkge1xuXHRjdXJyZW50UHJvamVjdCA9IHNlbGVjdGVkUHJvamVjdCA9PT0gY3VycmVudFByb2plY3QgPyBBTExfVEFTS1MgOiBjdXJyZW50UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUHJvamVjdFZpZXcoZSkge1xuXHRjdXJyZW50UHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZShlLnRhcmdldCk7XG5cdHVwZGF0ZVNjcmVlbigpO1xuXHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xufVxuXG5jb25zdCBzdWJSZXNldFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlBST0pFQ1QuREVMRVRFLCByZXNldEN1cnJlbnRQcm9qZWN0KTtcblxuY29uc3Qgc3ViSW5pdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuSU5JVCwgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViRGVsZXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5ERUxFVEUsIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJBZGRUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLkFERCwgdXBkYXRlU2NyZWVuKTtcbmNvbnN0IHN1YlVwZGF0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suVVBEQVRFLCB1cGRhdGVTY3JlZW4pO1xuXG5jb25zdCBzdWJBZGRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkFERCwgdXBkYXRlU2NyZWVuKTtcbmNvbnN0IHN1YkRlbGV0ZVByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlBST0pFQ1QuREVMRVRFLCB1cGRhdGVTY3JlZW4pO1xuXG5jb25zdCBzdWJDbGVhclNjcmVlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUkVTRVQuQ0xFQVJfQUxMLCB1cGRhdGVTY3JlZW4pO1xuIiwiaW1wb3J0IHsgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBFViwgUHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xuXG5mdW5jdGlvbiB3YXJuVGFza0RlbGV0ZShzZWxlY3RlZElkLCB0YXNrVGl0bGUpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxuXHRcdHRleHQ6IGBPbmNlIGRlbGV0ZWQsIHRoZSBcIiR7bWFrZUZpcnN0VXBwZXIoXG5cdFx0XHR0YXNrVGl0bGVcblx0XHQpfVwiIHRhc2sgY2Fubm90IGJlIHJlY292ZXJlZC5gLFxuXHRcdGljb246IFwid2FybmluZ1wiLFxuXHRcdGJ1dHRvbnM6IHRydWUsXG5cdFx0ZGFuZ2VyTW9kZTogdHJ1ZSxcblx0fSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuXHRcdGlmICh3aWxsRGVsZXRlKSB7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5UQVNLLkRFTEVURSwgc2VsZWN0ZWRJZCk7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiUG9vZiEgVGFzayBkZWxldGVkIVwiLFxuXHRcdFx0XHR0ZXh0OiBcIldheSB0byBnZXQgaXQgZG9uZS5cIixcblx0XHRcdFx0aWNvbjogXCJzdWNjZXNzXCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiTmV2ZXJtaW5kIVwiLFxuXHRcdFx0XHR0ZXh0OiBcIldlJ2xsIGxlYXZlIHRoYXQgb25lIGZvciBub3cuXCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5Qcm9qZWN0RGVsZXRlKHNlbGVjdGVkUHJvamVjdCkge1xuXHRzd2FsKHtcblx0XHR0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXG5cdFx0dGV4dDogYERlbGV0aW5nIHByb2plY3QgXCIke21ha2VGaXJzdFVwcGVyKFxuXHRcdFx0c2VsZWN0ZWRQcm9qZWN0XG5cdFx0KX1cIiB3aWxsIGFsc28gcGVybWFuZW50bHkgZGVsZXRlIGFsbCBpdHMgdGFza3MuYCxcblx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRidXR0b25zOiB0cnVlLFxuXHRcdGRhbmdlck1vZGU6IHRydWUsXG5cdH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcblx0XHRpZiAod2lsbERlbGV0ZSkge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuUFJPSkVDVC5ERUxFVEUsIHNlbGVjdGVkUHJvamVjdCk7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiUG9vZiFcIixcblx0XHRcdFx0dGV4dDogXCJHb29kYnllIGNob3JlcywgaGVsbG8gZnJlZWRvbS5cIixcblx0XHRcdFx0aWNvbjogXCJzdWNjZXNzXCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMzAwMCxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiU3RpbGwgd29ya2luZyFcIixcblx0XHRcdFx0dGV4dDogXCJQbGVudHkgbGVmdCB0byBkbywgZWg/XCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5EZWZhdWx0cygpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxuXHRcdHRleHQ6IFwiRGVmYXVsdHMgcmVwbGFjZSBhbGwgdGFza3MgYW5kIHByb2plY3RzIHdpdGggYW4gZXhhbXBsZSBzZXQuIFxcblRoaXMgd2lsbCBlcmFzZSBhbnl0aGluZyB5b3UgaGF2ZSBzYXZlZC5cIixcblx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRidXR0b25zOiB0cnVlLFxuXHRcdGRhbmdlck1vZGU6IHRydWUsXG5cdH0pLnRoZW4oKHdpbGxSZXN0b3JlRGVmYXVsdHMpID0+IHtcblx0XHRpZiAod2lsbFJlc3RvcmVEZWZhdWx0cykge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuUkVTRVQuQUREX0RFRkFVTFRTKTtcblx0XHRcdHN3YWwoe1xuXHRcdFx0XHR0aXRsZTogXCJCYWNrIHRvIEJhc2ljcyFcIixcblx0XHRcdFx0dGV4dDogXCJQbGF5IGFyb3VuZCAtIHlvdSBjYW4gYWx3YXlzIGNsaWNrIHRoZSBidXR0b24gYWdhaW4uXCIsXG5cdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDMwMDAsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIk5ldmVybWluZCFcIixcblx0XHRcdFx0dGV4dDogXCJZZWFoLCB3ZSBkaWRuJ3Qgd2FudCB0byB5b3UgdG8gZWl0aGVyLlwiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDI1MDAsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuQ2xlYXJBbGwoKSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcblx0XHR0ZXh0OiBcIkRlbGV0aW5nIGFsbCB0YXNrcyBBTkQgcHJvamVjdHMgY2Fubm90IGJlIHVuZG9uZS5cIixcblx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRidXR0b25zOiB0cnVlLFxuXHRcdGRhbmdlck1vZGU6IHRydWUsXG5cdH0pLnRoZW4oKHdpbGxDbGVhckFsbCkgPT4ge1xuXHRcdGlmICh3aWxsQ2xlYXJBbGwpIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlJFU0VULkNMRUFSX0FMTCk7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiV0hPT1NIIVwiLFxuXHRcdFx0XHR0ZXh0OiBcIkFsbCBnb25lLlwiLFxuXHRcdFx0XHRpY29uOiBcInN1Y2Nlc3NcIixcblx0XHRcdFx0YnV0dG9uczogZmFsc2UsXG5cdFx0XHRcdHRpbWVyOiAyMDAwLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3YWwoe1xuXHRcdFx0XHR0aXRsZTogXCJQaGV3IVwiLFxuXHRcdFx0XHR0ZXh0OiBcIlRoYXQgd2FzIGEgY2xvc2Ugb25lLlwiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDIwMDAsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuVGFza1N1Ym1pdChzdWJtaXRJZCwgdmFsdWVzQXJyYXkpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQWxsIHNldD9cIixcblx0XHR0ZXh0OiBgUmVhZHkgdG8gc3VibWl0ICR7c3VibWl0SWQgPT09IDAgPyBcImEgbmV3IHRhc2tcIiA6IFwieW91ciBjaGFuZ2VzXCJ9P2AsXG5cdFx0aWNvbjogXCJ3YXJuaW5nXCIsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRkYW5nZXJNb2RlOiB0cnVlLFxuXHR9KS50aGVuKCh3aWxsU3VibWl0KSA9PiB7XG5cdFx0aWYgKHdpbGxTdWJtaXQpIHtcblx0XHRcdGlmIChzdWJtaXRJZCA9PT0gMCkge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVi5UQVNLLkFERCwgdmFsdWVzQXJyYXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5VUERBVEUsIHN1Ym1pdElkLCB2YWx1ZXNBcnJheSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlYnVpbHRUYXNrID0gdmFsdWVzQXJyYXkucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdFx0YWNjW2N1cnJlbnRbMF1dID0gY3VycmVudFsxXTtcblx0XHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IGlkOiBzdWJtaXRJZCB9XG5cdFx0XHQpO1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuSU5ERVguUkVPUEVOX0VESVQsIHJlYnVpbHRUYXNrKTtcblx0XHR9XG5cdH0pO1xufVxuXG5jb25zdCBzdWJXYXJuVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuV0FSTi5UQVNLX0RFTEVURSwgd2FyblRhc2tEZWxldGUpO1xuY29uc3Qgc3ViV2FyblByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLldBUk4uUFJPSkVDVF9ERUxFVEUsIHdhcm5Qcm9qZWN0RGVsZXRlKTtcbmNvbnN0IHN1Yldhcm5TdWJtaXQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLldBUk4uVEFTS19TVUJNSVQsIHdhcm5UYXNrU3VibWl0KTtcblxuY29uc3Qgc3ViV2FybkRlZmF1bHRzID0gUHViU3ViLnN1YnNjcmliZShFVi5XQVJOLkRFRkFVTFRTLCB3YXJuRGVmYXVsdHMpO1xuY29uc3Qgc3ViV2FybkNsZWFyQWxsID0gUHViU3ViLnN1YnNjcmliZShFVi5XQVJOLkNMRUFSX0FMTCwgd2FybkNsZWFyQWxsKTtcbiIsImltcG9ydCB7IFB1YlN1YiwgRVYgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IFByb2plY3RzLCBUYXNrcyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZnJvbSBNRE4gdG8gdGVzdCBpcyBzdG9yYWdlIGlzIGF2YWlsYWJsZSBvbiBvbGRlciBicm93c2Vycy5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuXHRsZXQgc3RvcmFnZTtcblx0dHJ5IHtcblx0XHRzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuXHRcdGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcblx0XHRzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG5cdFx0c3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcblx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcblx0XHRcdChlLmNvZGUgPT09IDIyIHx8XG5cdFx0XHRcdC8vIEZpcmVmb3hcblx0XHRcdFx0ZS5jb2RlID09PSAxMDE0IHx8XG5cdFx0XHRcdC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG5cdFx0XHRcdGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuXHRcdFx0XHQvLyBGaXJlZm94XG5cdFx0XHRcdGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuXHRcdFx0Ly8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcblx0XHRcdHN0b3JhZ2UgJiZcblx0XHRcdHN0b3JhZ2UubGVuZ3RoICE9PSAwXG5cdFx0KTtcblx0fVxufVxuXG5sZXQgc3RvcmFnZVR5cGU7XG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuXHRzdG9yYWdlVHlwZSA9IGxvY2FsU3RvcmFnZTtcbn0gZWxzZSBpZiAoc3RvcmFnZUF2YWlsYWJsZShcInNlc3Npb25TdG9yYWdlXCIpKSB7XG5cdHN0b3JhZ2VUeXBlID0gc2Vzc2lvblN0b3JhZ2U7XG59IGVsc2Uge1xuXHRQdWJTdWIucHVibGlzaChFVi5SRVNFVC5BRERfREVGQVVMVFMpO1xufVxuXG5pZiAoISFzdG9yYWdlVHlwZS5nZXRJdGVtKFwiYWxsVGFza3NcIikpIHtcblx0Z2V0U3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBzZXRTdG9yYWdlKCkge1xuXHRjb25zdCBhbGxUYXNrcyA9IFRhc2tzLmdldEFsbFRhc2tzKCkubWFwKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgdGFza05vSWQgPSB0YXNrLmdldFByb3BlcnRpZXMoKTtcblx0XHRkZWxldGUgdGFza05vSWQuaWQ7XG5cdFx0cmV0dXJuIHRhc2tOb0lkO1xuXHR9KTtcblx0Y29uc3QgYWxsUHJvamVjdHMgPSBQcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xuXG5cdHN0b3JhZ2VUeXBlLnNldEl0ZW0oXCJhbGxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xuXHRzdG9yYWdlVHlwZS5zZXRJdGVtKFwiYWxsVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoWy4uLmFsbFRhc2tzXSkpO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yYWdlKCkge1xuXHRjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcblx0Y29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKHN0b3JhZ2VUeXBlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSkubWFwKChpdGVtKSA9PlxuXHRcdE9iamVjdC5lbnRyaWVzKGl0ZW0pXG5cdCk7XG5cblx0c3RvcmVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlBST0pFQ1QuQURELCBwcm9qZWN0KTtcblx0fSk7XG5cblx0c3RvcmVkVGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlRBU0suQURELCBpdGVtKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHtcblx0c3RvcmFnZVR5cGUuY2xlYXIoKTtcbn1cblxuY29uc3Qgc3ViU2V0QWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5BREQsIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0RGVsZXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5ERUxFVEUsIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0VXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5VUERBVEUsIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0QWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5BREQsIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0RGVsZXRlUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5ERUxFVEUsIHNldFN0b3JhZ2UpO1xuXG5jb25zdCBzdWJDbGVhclN0b3JhZ2UgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgY2xlYXJTdG9yYWdlKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHViU3ViLCBFViB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFRhc2tJZCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL3dlYi1zdG9yYWdlXCI7XG5pbXBvcnQgXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vZHJhZy1kcm9wXCI7XG5pbXBvcnQgXCIuL3dhcm5pbmdzXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWcvbG9nby5wbmdcIjtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLnNyYyA9IGxvZ287XG5cbmNvbnN0IEJvdHRvbUJ0bnMgPSAoKCkgPT4ge1xuXHRjb25zdCBhZGRSZXZlYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1yZXZlYWwtYnRuXCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuXHRjb25zdCBzdG9yYWdlUmV2ZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yYWdlLXJldmVhbC1idG5cIik7XG5cdGNvbnN0IGRlZmF1bHRzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0cy1idG5cIik7XG5cdGNvbnN0IGNsZWFyU3RvcmFnZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItc3RvcmFnZS1idG5cIik7XG5cblx0YWRkUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0YWRkUmV2ZWFsQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGFkZFRhc2tCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0YWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRoaWRlU3RvcmFnZUJ0bnMoKTtcblx0fSk7XG5cblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tFZGl0TW9kZSk7XG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0TW9kZSk7XG5cblx0c3RvcmFnZVJldmVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHN0b3JhZ2VSZXZlYWxCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0ZGVmYXVsdHNCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0Y2xlYXJTdG9yYWdlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGhpZGVBZGRCdG5zKCk7XG5cdH0pO1xuXG5cdGRlZmF1bHRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuV0FSTi5ERUZBVUxUUyk7XG5cdH0pO1xuXG5cdGNsZWFyU3RvcmFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWLldBUk4uQ0xFQVJfQUxMKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gaGlkZUFkZEJ0bnMoKSB7XG5cdFx0YWRkUmV2ZWFsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0YWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhpZGVTdG9yYWdlQnRucygpIHtcblx0XHRzdG9yYWdlUmV2ZWFsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdGRlZmF1bHRzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdGNsZWFyU3RvcmFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0fVxuXG5cdGNvbnN0IHN1YkFkZERpc3BsYXkgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5ESVNQTEFZX01PREUsIGhpZGVBZGRCdG5zKTtcblx0Y29uc3Qgc3ViQWRkRWRpdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkVESVRfTU9ERSwgaGlkZUFkZEJ0bnMpO1xuXHRjb25zdCBzdWJBZGRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuUFJPSkVDVF9NT0RFLCBoaWRlQWRkQnRucyk7XG5cdGNvbnN0IHN1YlN0b3JEZWZhdWx0cyA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUkVTRVQuQUREX0RFRkFVTFRTLCBoaWRlU3RvcmFnZUJ0bnMpO1xuXHRjb25zdCBzdWJTdG9yQ2xlYXJBbGwgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgaGlkZVN0b3JhZ2VCdG5zKTtcblx0Y29uc3Qgc3ViU3RvckRpc3BsYXkgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5ESVNQTEFZX01PREUsIGhpZGVTdG9yYWdlQnRucyk7XG5cblx0cmV0dXJuIHsgYWRkVGFza0J0biB9O1xufSkoKTtcblxuZnVuY3Rpb24gb3BlbkRpc3BsYXlNb2RlKHNlbGVjdGVkSWQpIHtcblx0UHViU3ViLnB1Ymxpc2goRVYuRElBTE9HLkRJU1BMQVlfTU9ERSwgc2VsZWN0ZWRJZCk7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tFZGl0TW9kZSk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS1jbG9zZS1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpYWxvZy5jbG9zZSgpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tFZGl0TW9kZShlKSB7XG5cdC8vIENoZWNrIGlmIG9wZW5lZCBmcm9tIGRpc3BsYXlNb2RlXG5cdGlmIChlLnRhcmdldCAhPT0gQm90dG9tQnRucy5hZGRUYXNrQnRuKSB7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrRWRpdE1vZGUpO1xuXHRcdGRvY3VtZW50XG5cdFx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LWNsb3NlLWJ0blwiKVxuXHRcdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cuY2xvc2UoKSk7XG5cblx0XHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIGZpbmRUYXNrSWQoZS50YXJnZXQpKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdFx0b3BlbkVkaXRNb2RlKHRhc2spO1xuXHR9IGVsc2Uge1xuXHRcdG9wZW5FZGl0TW9kZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0TW9kZSh0YXNrKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLkRJQUxPRy5FRElUX01PREUpO1xuXHRpZiAoISF0YXNrKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuRElBTE9HLkVESVRfTU9ERV9QT1AsIHRhc2spO1xuXHR9XG5cblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVUYXNrU3VibWl0KTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrQ2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RNb2RlKCkge1xuXHRQdWJTdWIucHVibGlzaChFVi5ESUFMT0cuUFJPSkVDVF9NT0RFKTtcblxuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kZVwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdENhbmNlbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tDYW5jZWwoZSkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXHRjb25zdCB0YXNrSWQgPSBmaW5kVGFza0lkKGUudGFyZ2V0KTtcblx0aWYgKCEhdGFza0lkKSB7XG5cdFx0b3BlbkRpc3BsYXlNb2RlKHRhc2tJZCk7XG5cdH0gZWxzZSB7XG5cdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENhbmNlbCgpIHtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW1vZGVcIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVQcm9qZWN0U3VibWl0KTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RDYW5jZWwpO1xuXG5cdGRpYWxvZy5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrRGVsZXRlKGUpIHtcblx0Y29uc3Qgc2VsZWN0ZWRJZCA9IGZpbmRUYXNrSWQoZS50YXJnZXQpO1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIHNlbGVjdGVkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0UHViU3ViLnB1Ymxpc2goRVYuV0FSTi5UQVNLX0RFTEVURSwgc2VsZWN0ZWRJZCwgdGFzay50aXRsZSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlc0FycmF5KCkge1xuXHRjb25zdCBzdWJtaXR0ZWRJbmZvID0gW107XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3VibWl0LWluZm9cIikuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRsZXQgc3VibWl0VmFsdWUgPSB7XG5cdFx0XHRpbnB1dDogZWwudmFsdWUsXG5cdFx0XHRzZWxlY3Q6IFsuLi5lbC5jaGlsZHJlbl0uZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZCA9PT0gdHJ1ZSlbMF1cblx0XHRcdFx0Py52YWx1ZSxcblx0XHRcdHRleHRhcmVhOiBlbC50ZXh0Q29udGVudCxcblx0XHR9W2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKV07XG5cdFx0c3VibWl0dGVkSW5mby5wdXNoKFtlbC5pZCwgc3VibWl0VmFsdWVdKTtcblx0fSk7XG5cdHJldHVybiBzdWJtaXR0ZWRJbmZvO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrU3VibWl0KGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXHRkaWFsb2cuY2xvc2UoKTtcblx0Y29uc3Qgc3VibWl0SWQgPSBmaW5kVGFza0lkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idG5cIikpO1xuXHRjb25zdCB2YWx1ZXNBcnJheSA9IGdldFZhbHVlc0FycmF5KCk7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLldBUk4uVEFTS19TVUJNSVQsIHN1Ym1pdElkLCB2YWx1ZXNBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RTdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKS52YWx1ZTtcblx0UHViU3ViLnB1Ymxpc2goRVYuUFJPSkVDVC5BREQsIG5ld1Byb2plY3ROYW1lKTtcbn1cblxuY29uc3Qgc3ViQ2FyZENsaWNrID0gUHViU3ViLnN1YnNjcmliZShFVi5JTkRFWC5DQVJEX0NMSUNLLCBvcGVuRGlzcGxheU1vZGUpO1xuY29uc3Qgc3ViQ2FyZERlbGV0ZSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuSU5ERVguQ0FSRF9ERUxFVEUsIGhhbmRsZVRhc2tEZWxldGUpO1xuY29uc3Qgc3ViUmVvcGVuRWRpdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuSU5ERVguUkVPUEVOX0VESVQsIG9wZW5FZGl0TW9kZSk7XG5QdWJTdWIucHVibGlzaChFVi5JTklUKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==