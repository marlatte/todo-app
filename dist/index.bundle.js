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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxTQUFTLE1BQU0sWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLGtEQUFrRCxZQUFZLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IseUJBQXlCLGNBQWMsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0NBQXdDLEdBQUcsK0JBQStCLHFCQUFxQiwwQkFBMEIsS0FBSyxvQkFBb0IseUJBQXlCLCtDQUErQyx1QkFBdUIscUJBQXFCLHNCQUFzQixxQ0FBcUMsb0NBQW9DLGdDQUFnQyx1Q0FBdUMsZ0NBQWdDLEtBQUssR0FBRyxnRUFBZ0UsWUFBWSx1QkFBdUIsMENBQTBDLG9CQUFvQiwyQkFBMkIsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcseUJBQXlCLDBCQUEwQixZQUFZLG9CQUFvQixvQkFBb0IsNEJBQTRCLEdBQUcsaUJBQWlCLGVBQWUsNEJBQTRCLG9CQUFvQixvQkFBb0IsNEJBQTRCLEdBQUcsb0ZBQW9GLFlBQVksa0NBQWtDLGdDQUFnQyxvQkFBb0IsMkJBQTJCLDhCQUE4QiwwQkFBMEIsa0NBQWtDLEdBQUcsOEJBQThCLHdCQUF3Qix5Q0FBeUMsR0FBRyxrQkFBa0Isc0JBQXNCLHFCQUFxQixHQUFHLGdCQUFnQiwyQkFBMkIsb0JBQW9CLDJDQUEyQyx1QkFBdUIsbUZBQW1GLG9CQUFvQiwyQkFBMkIsc0pBQXNKLDhCQUE4Qix1QkFBdUIsOEJBQThCLHVCQUF1QixvQkFBb0IseUJBQXlCLEdBQUcsc0JBQXNCLHFDQUFxQyw4QkFBOEIsR0FBRyx3Q0FBd0MseUNBQXlDLEdBQUcsMENBQTBDLDBDQUEwQyxHQUFHLHVDQUF1QywwQ0FBMEMsR0FBRyw2QkFBNkIsNEJBQTRCLEdBQUcsbUJBQW1CLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyx1QkFBdUIsc0JBQXNCLHFCQUFxQixxQkFBcUIsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsOEJBQThCLDJCQUEyQixHQUFHLDJJQUEySTtBQUN6Nkk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RkFBeUYsWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxtQ0FBbUMsdUJBQXVCLGVBQWUsYUFBYSxtQkFBbUIscUJBQXFCLG9CQUFvQiwyQkFBMkIsY0FBYyx5Q0FBeUMsNkJBQTZCLHlCQUF5QixHQUFHLG1CQUFtQixpQkFBaUIsa0JBQWtCLDJCQUEyQixHQUFHLGtCQUFrQixlQUFlLCtCQUErQixHQUFHLHVCQUF1QixlQUFlLDZCQUE2QixHQUFHLGdCQUFnQix5QkFBeUIsb0JBQW9CLHNCQUFzQixHQUFHLDBGQUEwRixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLHlCQUF5QixzQkFBc0IseUJBQXlCLEdBQUcsK0JBQStCLCtCQUErQixHQUFHLGtDQUFrQywrQkFBK0IsK0JBQStCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLHFKQUFxSixxQkFBcUIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIscUNBQXFDLHVCQUF1QixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyx1QkFBdUIsd0NBQXdDLDRCQUE0QixHQUFHLGtCQUFrQixrQkFBa0IsbUNBQW1DLEdBQUcsaUJBQWlCLGdDQUFnQywrQkFBK0Isa0JBQWtCLDBCQUEwQix5Q0FBeUMsbUNBQW1DLG9CQUFvQiwyQkFBMkIsR0FBRywwQkFBMEIsNkJBQTZCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLDhCQUE4Qiw2QkFBNkIsR0FBRyxnR0FBZ0csZ0NBQWdDLHdCQUF3QixtQkFBbUIsb0JBQW9CLGtDQUFrQyxxQkFBcUIseUJBQXlCLDJEQUEyRCxLQUFLLDBDQUEwQyxpQkFBaUIsS0FBSywwQkFBMEIsb0JBQW9CLEtBQUssR0FBRyxxQkFBcUI7QUFDeHBIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS3ZDO0FBQzZHO0FBQ2pCO0FBQ1c7QUFDRztBQUNEO0FBQ087QUFDTDtBQUMzRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBCQUEwQixxRkFBaUM7QUFDM0QsMEJBQTBCLHdGQUFpQztBQUMzRCwwQkFBMEIsdUZBQWlDO0FBQzNELDBCQUEwQiw4RkFBaUM7QUFDM0QsMEJBQTBCLHlGQUFpQztBQUMzRCwyRkFBMkY7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLCtGQUErRixRQUFRLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFVBQVUsT0FBTyxPQUFPLEtBQUssTUFBTSx3REFBd0QsNkJBQTZCLDRCQUE0QixtQ0FBbUMsOEJBQThCLHVEQUF1RCxzRkFBc0YsY0FBYyxlQUFlLDJCQUEyQixHQUFHLE9BQU8saUJBQWlCLEdBQUcsWUFBWSxpQkFBaUIsNEJBQTRCLGlCQUFpQix1QkFBdUIsdUJBQXVCLG9CQUFvQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyx3SUFBd0ksMkJBQTJCLDJCQUEyQix5Q0FBeUMsMENBQTBDLCtCQUErQiw0QkFBNEIsNEJBQTRCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLDhCQUE4Qiw0QkFBNEIsMkJBQTJCLDZCQUE2QiwyQkFBMkIsNkJBQTZCLEdBQUcsVUFBVSx1QkFBdUIsa0JBQWtCLDJCQUEyQiw0UUFBNFEsMExBQTBMLEdBQUcsOEZBQThGO0FBQzkzRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEZBQTBGLFlBQVksdUNBQXVDLHVDQUF1QyxHQUFHLHFCQUFxQjtBQUNuTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBLGVBQWUsS0FBaUQsb0JBQW9CLENBQXVHLENBQUMsaUJBQWlCLG1CQUFtQixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsU0FBUyx1Q0FBdUMscUNBQXFDLG9DQUFvQyxFQUFFLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxpQkFBaUIsa0JBQWtCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxvQkFBb0IsZUFBZSwwWkFBMFoseUJBQXlCLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLHdCQUF3QixZQUFZLGlDQUFpQyw0QkFBNEIsb0NBQW9DLHlDQUF5Qyw2QkFBNkIsb0JBQW9CLCtCQUErQiwwQkFBMEIsK0JBQStCLHdCQUF3Qiw2REFBNkQsNkJBQTZCLGtFQUFrRSwrQkFBK0Isc0NBQXNDLCtCQUErQixtQkFBbUIsOEVBQThFLGlCQUFpQixhQUFhLGNBQWMsZ0RBQWdELHNDQUFzQyxTQUFTLFdBQVcsWUFBWSxxREFBcUQsOEZBQThGLDJMQUEyTCxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLFdBQVcsOENBQThDLE9BQU8sMkRBQTJELG1CQUFtQixJQUFJLG9DQUFvQyxvQkFBb0IsSUFBSSxtQkFBbUIsRUFBRSxxQkFBcUIsb0JBQW9CLGtCQUFrQixVQUFVLDRCQUE0QiwyQkFBMkIsbURBQW1ELHVCQUF1QixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsV0FBVyw2QkFBNkIsSUFBSSxXQUFXLHFDQUFxQyxJQUFJLGtCQUFrQixvQ0FBb0MsV0FBVyxzQkFBc0IsSUFBSSxXQUFXLEVBQUUsZUFBZSxZQUFZLHNCQUFzQixXQUFXLEtBQUssMkJBQTJCLE9BQU8sZ0NBQWdDLGVBQWUsU0FBUyxpQkFBaUIsdUNBQXVDLElBQUksV0FBVyxFQUFFLE1BQU0sbUZBQW1GLE1BQU0sOElBQThJLFVBQVUsZ0NBQWdDLDBCQUEwQiw4TEFBOEwsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSwrRkFBK0YsZ0NBQWdDLHVDQUF1QywyQkFBMkIsa0JBQWtCLCtCQUErQixpQkFBaUIsS0FBSyxrQkFBa0IsdUJBQXVCLCtCQUErQixtQkFBbUIseUhBQXlILGlCQUFpQixtREFBbUQsa0JBQWtCLFlBQVksaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxjQUFjLGlDQUFpQyxZQUFZLG1CQUFtQixJQUFJLHdCQUF3QixrQkFBa0IsSUFBSSw4QkFBOEIsZ0RBQWdELDBCQUEwQixvQkFBb0IsOEJBQThCLDhCQUE4QixRQUFRLEdBQUcsb0NBQW9DLG9CQUFvQiwrQkFBK0IsNEJBQTRCLGFBQWEsRUFBRSxhQUFhLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUseUhBQXlILHVCQUF1QixtREFBbUQsaUJBQWlCLHNEQUFzRCx1QkFBdUIsNkJBQTZCLHFDQUFxQyxzQkFBc0IsZUFBZSw4QkFBOEIsU0FBUyw2QkFBNkIsdUJBQXVCLHNCQUFzQixZQUFZLHlDQUF5QywwQkFBMEIsK0NBQStDLFdBQVcsS0FBSywyQkFBMkIsZUFBZSxNQUFNLGFBQWEsWUFBWSxHQUFHLElBQUksaURBQWlELFNBQVMsb0NBQW9DLFlBQVksaUJBQWlCLGFBQWEsNEJBQTRCLGVBQWUsaUJBQWlCLGFBQWEsdUJBQXVCLGVBQWUsaUJBQWlCLHdDQUF3QyxvQkFBb0IsWUFBWSxpQkFBaUIsWUFBWSxxQ0FBcUMsT0FBTyxnQkFBZ0IsbUJBQW1CLFdBQVcsK0JBQStCLGlCQUFpQix5REFBeUQscUJBQXFCLHVDQUF1QywrQkFBK0IsMEJBQTBCLGtCQUFrQixjQUFjLG1DQUFtQywyQkFBMkIsd0JBQXdCLGtCQUFrQixXQUFXLFdBQVcseUJBQXlCLGNBQWMsU0FBUyxrQkFBa0IsOEJBQThCLGdDQUFnQyx3QkFBd0IsVUFBVSwrQkFBK0IsaUNBQWlDLHlCQUF5QixXQUFXLG9DQUFvQyxHQUFHLGtDQUFrQywwQkFBMEIsVUFBVSxHQUFHLGdDQUFnQyx3QkFBd0IsV0FBVyw0QkFBNEIsR0FBRyxrQ0FBa0MsMEJBQTBCLFVBQVUsR0FBRyxnQ0FBZ0Msd0JBQXdCLFdBQVcsZ0NBQWdDLEdBQUcsNEJBQTRCLG9CQUFvQixnQkFBZ0IsVUFBVSxJQUFJLDRCQUE0QixvQkFBb0IsZ0JBQWdCLFVBQVUsSUFBSSw4QkFBOEIsc0JBQXNCLGdCQUFnQixHQUFHLDJCQUEyQixtQkFBbUIsYUFBYSxXQUFXLHdCQUF3QixHQUFHLDRCQUE0QixvQkFBb0IsZ0JBQWdCLFVBQVUsSUFBSSw0QkFBNEIsb0JBQW9CLGdCQUFnQixVQUFVLElBQUksOEJBQThCLHNCQUFzQixnQkFBZ0IsR0FBRywyQkFBMkIsbUJBQW1CLGFBQWEsV0FBVyxvQkFBb0IscUJBQXFCLHVEQUF1RCwrQ0FBK0MsMEJBQTBCLFVBQVUsWUFBWSxTQUFTLGtCQUFrQixpQkFBaUIsbURBQW1ELGtCQUFrQixTQUFTLHlCQUF5Qix5QkFBeUIsVUFBVSxXQUFXLGtCQUFrQixpQkFBaUIsYUFBYSxnQ0FBZ0MsR0FBRyxxQkFBcUIsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLEdBQUcsc0JBQXNCLG9CQUFvQixxQkFBcUIscURBQXFELFdBQVcsa0JBQWtCLGtCQUFrQixXQUFXLGFBQWEsZ0JBQWdCLGdDQUFnQyx3QkFBd0IsMkJBQTJCLDhCQUE4QixTQUFTLFdBQVcsaUNBQWlDLHlCQUF5QixtQ0FBbUMsMkJBQTJCLDBCQUEwQiw4QkFBOEIsVUFBVSxVQUFVLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLHdCQUF3QixrREFBa0QsMENBQTBDLDBCQUEwQixXQUFXLFlBQVkscUNBQXFDLGtCQUFrQix1QkFBdUIsa0JBQWtCLFVBQVUsU0FBUyxVQUFVLGtDQUFrQyxVQUFVLFlBQVksc0JBQXNCLFlBQVksa0JBQWtCLFVBQVUsUUFBUSxVQUFVLGlDQUFpQyx5QkFBeUIsMEJBQTBCLFdBQVcseUJBQXlCLGNBQWMsa0JBQWtCLGtCQUFrQixVQUFVLCtCQUErQixXQUFXLFVBQVUsU0FBUyxnQ0FBZ0Msd0JBQXdCLHlDQUF5QyxpQ0FBaUMsZ0NBQWdDLFdBQVcsVUFBVSxTQUFTLGlDQUFpQyx5QkFBeUIsMENBQTBDLGtDQUFrQyxxQ0FBcUMsR0FBRyxpQ0FBaUMseUJBQXlCLEdBQUcsaUNBQWlDLHlCQUF5QixJQUFJLGtDQUFrQywwQkFBMEIsR0FBRyxrQ0FBa0MsMkJBQTJCLDZCQUE2QixHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRyxpQ0FBaUMseUJBQXlCLElBQUksa0NBQWtDLDBCQUEwQixHQUFHLGtDQUFrQywyQkFBMkIscUNBQXFDLEdBQUcsUUFBUSxTQUFTLFNBQVMsSUFBSSxRQUFRLFNBQVMsU0FBUyxJQUFJLFdBQVcsVUFBVSxTQUFTLElBQUksV0FBVyxVQUFVLFNBQVMsR0FBRyxXQUFXLFVBQVUsVUFBVSw2QkFBNkIsR0FBRyxRQUFRLFNBQVMsU0FBUyxJQUFJLFFBQVEsU0FBUyxTQUFTLElBQUksV0FBVyxVQUFVLFNBQVMsSUFBSSxXQUFXLFVBQVUsU0FBUyxHQUFHLFdBQVcsVUFBVSxVQUFVLHNDQUFzQyxHQUFHLFFBQVEsV0FBVyxTQUFTLElBQUksUUFBUSxXQUFXLFNBQVMsSUFBSSxXQUFXLFFBQVEsU0FBUyxHQUFHLFdBQVcsVUFBVSxVQUFVLDhCQUE4QixHQUFHLFFBQVEsV0FBVyxTQUFTLElBQUksUUFBUSxXQUFXLFNBQVMsSUFBSSxXQUFXLFFBQVEsU0FBUyxHQUFHLFdBQVcsVUFBVSxVQUFVLGlCQUFpQixxQkFBcUIsd0JBQXdCLFVBQVUsWUFBWSxZQUFZLGtCQUFrQixpQkFBaUIsK0NBQStDLFdBQVcsa0JBQWtCLFNBQVMseUJBQXlCLHVCQUF1QixVQUFVLFdBQVcsa0JBQWtCLGlCQUFpQixTQUFTLFdBQVcsV0FBVyxZQUFZLGlCQUFpQixtQkFBbUIsa0JBQWtCLFVBQVUsa0JBQWtCLHVCQUF1QixpQkFBaUIsdUJBQXVCLGdCQUFnQixtQkFBbUIsV0FBVyxZQUFZLGVBQWUsWUFBWSxnQkFBZ0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLHNCQUFzQixnQkFBZ0Isb0JBQW9CLGtCQUFrQixjQUFjLGtCQUFrQixlQUFlLG1CQUFtQixrQkFBa0IsZ0JBQWdCLHdCQUF3QixnQkFBZ0IsOEJBQThCLGlCQUFpQiw2QkFBNkIsbUJBQW1CLFdBQVcsZUFBZSxrQkFBa0IsV0FBVyxtQkFBbUIsbUJBQW1CLGdCQUFnQixxQkFBcUIsU0FBUyxlQUFlLGdCQUFnQixzQkFBc0IsNEJBQTRCLHlCQUF5QixzQkFBc0IsdUJBQXVCLGdCQUFnQixzQkFBc0IsbUJBQW1CLGFBQWEsaUJBQWlCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHNCQUFzQix5QkFBeUIsMEJBQTBCLHVCQUF1QixXQUFXLHFCQUFxQixrQkFBa0IsYUFBYSx5QkFBeUIsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsZ0JBQWdCLGVBQWUsa0JBQWtCLFNBQVMsZUFBZSxtQ0FBbUMseUJBQXlCLG9CQUFvQix5QkFBeUIsbUJBQW1CLGFBQWEseURBQXlELHVCQUF1QixXQUFXLGVBQWUsK0JBQStCLFNBQVMscUJBQXFCLFdBQVcseUJBQXlCLDJDQUEyQyx5QkFBeUIsNEJBQTRCLHlCQUF5QiwyQkFBMkIsMERBQTBELHFCQUFxQix5QkFBeUIsMkNBQTJDLHlCQUF5Qiw0QkFBNEIseUJBQXlCLDJCQUEyQix3REFBd0QsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIseUJBQXlCLG1CQUFtQiw2Q0FBNkMsd0JBQXdCLHNCQUFzQixZQUFZLGVBQWUsY0FBYyxzQkFBc0IsV0FBVyxpQ0FBaUMsa0JBQWtCLGtCQUFrQiw0QkFBNEIseURBQXlELGFBQWEscUJBQXFCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLGtCQUFrQiwyQ0FBMkMsVUFBVSxxQkFBcUIsa0JBQWtCLFlBQVksV0FBVyxVQUFVLFNBQVMsUUFBUSxvREFBb0QsNENBQTRDLGtCQUFrQixvQkFBb0IsVUFBVSx5QkFBeUIscUJBQXFCLFdBQVcsd0JBQXdCLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLGtCQUFrQixvQ0FBb0MsMEJBQTBCLGdEQUFnRCx3Q0FBd0MseUNBQXlDLDZCQUE2QixxQkFBcUIseUNBQXlDLDRCQUE0QixvQkFBb0IscUNBQXFDLEdBQUcsV0FBVyxJQUFJLFdBQVcsSUFBSSxVQUFVLEdBQUcsWUFBWSw2QkFBNkIsR0FBRyxXQUFXLElBQUksV0FBVyxJQUFJLFVBQVUsR0FBRyxZQUFZLGNBQWMsZUFBZSxNQUFNLFNBQVMsT0FBTyxRQUFRLGtCQUFrQixZQUFZLGdCQUFnQixnQ0FBZ0MsY0FBYyxvQkFBb0IsVUFBVSx1QkFBdUIscUJBQXFCLFlBQVkscUJBQXFCLHNCQUFzQixZQUFZLDBCQUEwQixVQUFVLG9CQUFvQixzQ0FBc0MsVUFBVSxvQkFBb0Isc0JBQXNCLHFDQUFxQyw2QkFBNkIsc0JBQXNCLFlBQVksWUFBWSxVQUFVLG9CQUFvQixzQkFBc0Isa0JBQWtCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixzQkFBc0IsMkJBQTJCLG1CQUFtQixpQ0FBaUMseUJBQXlCLGNBQWMsNkNBQTZDLHFDQUFxQywyREFBMkQseUJBQXlCLFlBQVkseUJBQXlCLGtDQUFrQyxHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyw0QkFBNEIsb0JBQW9CLElBQUksOEJBQThCLHNCQUFzQixJQUFJLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDBCQUEwQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyw0QkFBNEIsb0JBQW9CLElBQUksOEJBQThCLHNCQUFzQixJQUFJLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLE9BQU8sZUFBZSxnQkFBZ0Isc0JBQXNCLGVBQWUsK0JBQStCLFdBQVcsMkNBQTJDLDRDQUE0QywwQkFBMEIscUJBQXFCLGNBQWMsa0RBQWtELGNBQWMscUVBQXFFLHNCQUFzQixTQUFTLDZCQUE2Qiw0QkFBNEIsYUFBYSw2QkFBNkIsTUFBTSxJQUFJLFdBQVcsbUJBQW1CLHNDQUFzQyxZQUFZLEtBQUssY0FBYyxLQUFLLGlCQUFpQiw4QkFBOEIsUUFBUSxXQUFXLEtBQUssV0FBVyxnR0FBZ0csSUFBSSxpQkFBaUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLHFCQUFxQixNQUFNLFNBQVMsWUFBWSxpQkFBaUIsMkJBQTJCLEtBQUssaUJBQWlCLGtDQUFrQyxLQUFLLGlCQUFpQixpQkFBaUIsNEJBQTRCLFNBQVMsMEJBQTBCLGdCQUFnQixpQkFBaUIsS0FBSyxXQUFXLEtBQUssNkRBQTZELDJCQUEyQixxQ0FBcUMsZUFBZSxFQUFFLFNBQVMsZ0JBQWdCLHNCQUFzQixxSUFBcUksb0JBQW9CLGdJQUFnSSxLQUFLLCtHQUErRyxrQkFBa0IsY0FBYyxnQ0FBZ0MsNEJBQTRCLG1CQUFtQixvQkFBb0IsY0FBYyxzQ0FBc0MscURBQXFELGNBQWMscUNBQXFDLDhFQUE4RSxnQkFBZ0IsbUNBQW1DLHVCQUF1QixFQUFFLGdCQUFnQixZQUFZLHVCQUF1QiwrQ0FBK0MsUUFBUSxnQkFBZ0IsVUFBVSwwREFBMEQsbU5BQW1OLHlDQUF5Qyx3Q0FBd0MsS0FBSyxFQUFFLHdCQUF3QixNQUFNLHNFQUFzRSxPQUFPLFVBQVUsb0JBQW9CLGlCQUFpQiw0Q0FBNEMsS0FBSyxnREFBZ0QsNEVBQTRFLGdCQUFnQixzQkFBc0Isb0VBQW9FLEtBQUssS0FBSyxhQUFhLDZCQUE2QiwyQ0FBMkMsa0JBQWtCLGdFQUFnRSw0RkFBNEYsc0VBQXNFLG9CQUFvQixnQkFBZ0IsV0FBVyx3REFBd0QsUUFBUSxlQUFlLE1BQU0sa0JBQWtCLGtEQUFrRCxZQUFZLG9EQUFvRCxnQkFBZ0IsU0FBUyxtQkFBbUIsa0RBQWtELGFBQWEsaUNBQWlDLDBCQUEwQix3QkFBd0IsK0lBQStJLE9BQU8sNENBQTRDLHNHQUFzRyxhQUFhLDBCQUEwQixpQkFBaUIsV0FBVyxLQUFLLHFCQUFxQixtQkFBbUIsTUFBTSxZQUFZLFlBQVksV0FBVyxLQUFLLFdBQVcsZUFBZSxZQUFZLGlCQUFpQixpQkFBaUIsbUJBQW1CLGlCQUFpQixTQUFTLHFCQUFxQiw0Q0FBNEMsR0FBRyxlQUFlLHNCQUFzQixrREFBa0QsMERBQTBELG1DQUFtQyxxRUFBcUUscUZBQXFGLGdEQUFnRCxTQUFTLG1DQUFtQyxTQUFTLEVBQUUsbUVBQW1FLE1BQU0sMkdBQTJHLEdBQUcsaUJBQWlCLFlBQVkseUlBQXlJLGFBQWEsa0ZBQWtGLDhFQUE4RSxvQkFBb0IsbUVBQW1FLGtDQUFrQyxrQkFBa0IsaURBQWlELElBQUksRUFBRSxpQkFBaUIseUVBQXlFLGtCQUFrQixJQUFJLFVBQVUsMENBQTBDLHNCQUFzQiw4REFBOEQsMkRBQTJELG1DQUFtQyxFQUFFLEVBQUUscUVBQXFFLGlCQUFpQixhQUFhLGFBQWEsY0FBYyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixjQUFjLHFGQUFxRiw4REFBOEQsK0VBQStFLGdCQUFnQixLQUFLLGFBQWEsWUFBWSxpREFBaUQsd0NBQXdDLDhDQUE4Qyw4REFBOEQsTUFBTSxJQUFJLGNBQWMsU0FBUywyQkFBMkIsZUFBZSxFQUFFLGdCQUFnQixJQUFJLDBFQUEwRSxrREFBa0QsYUFBYSx5REFBeUQsZ0RBQWdELDJCQUEyQixTQUFTLFFBQVEsZ0JBQWdCLDJCQUEyQixjQUFjLGlFQUFpRSw4Q0FBOEMsRUFBRSxrQ0FBa0MsSUFBSSx5QkFBeUIsa0JBQWtCLGtCQUFrQix3R0FBd0csZ0JBQWdCLFNBQVMsSUFBSSxjQUFjLGlCQUFpQixhQUFhLGlCQUFpQixFQUFFLFNBQVMsWUFBWSxhQUFhLGlCQUFpQiw4QkFBOEIseUJBQXlCLGdDQUFnQyw4QkFBOEIsOEJBQThCLG1CQUFtQixvQ0FBb0MsMkJBQTJCLGdCQUFnQixJQUFJLGtEQUFrRCxhQUFhLHlEQUF5RCxPQUFPLElBQUksb0JBQW9CLFNBQVMsTUFBTSw2QkFBNkIsdUJBQXVCLFdBQVcsY0FBYyxFQUFFLHVCQUF1QixvRUFBb0UsS0FBSyxFQUFFLHNCQUFzQiwyQkFBMkIsS0FBSyxFQUFFLG9CQUFvQiwyQkFBMkIsdUJBQXVCLElBQUksbUJBQW1CLEVBQUUsa0RBQWtELEtBQUssY0FBYyxPQUFPLHFDQUFxQyw4RkFBOEYsK0JBQStCLGlCQUFpQix3Q0FBd0MsMEJBQTBCLDREQUE0RCxPQUFPLDZCQUE2QixpQkFBaUIsZ0JBQWdCLDJCQUEyQiwrQkFBK0Isd0JBQXdCLCtEQUErRCwwQkFBMEIsaUVBQWlFLDRDQUE0QyxhQUFhLCtDQUErQyw4QkFBOEIsb0NBQW9DLHdCQUF3QixnREFBZ0Qsd0JBQXdCLGlEQUFpRCxxQ0FBcUMsK0JBQStCLHFCQUFxQiw4Q0FBOEMsNkJBQTZCLEtBQUssbUVBQW1FLGlCQUFpQixlQUFlLGVBQWUsYUFBYSxjQUFjLDZDQUE2Qyw0Q0FBNEMsV0FBVyx3QkFBd0IsT0FBTyxtQkFBbUIsdUJBQXVCLGNBQWMsWUFBWSxjQUFjLDBCQUEwQixpQkFBaUIsV0FBVyxNQUFNLGVBQWUsTUFBTSxvQkFBb0IsTUFBTSx5QkFBeUIsTUFBTSxzQkFBc0IsY0FBYyx1QkFBdUIsS0FBSyxXQUFXLE1BQU0sS0FBSyxJQUFJLEtBQUssUUFBUSxhQUFhLG9CQUFvQixjQUFjLHFFQUFxRSw2Q0FBNkMscUNBQXFDLGNBQWMsc0JBQXNCLEtBQUssR0FBRyxjQUFjLG9DQUFvQyx1QkFBdUIsOEJBQThCLEtBQUssd0NBQXdDLGNBQWMsc0RBQXNELDBGQUEwRixpR0FBaUcsd0JBQXdCLCtCQUErQix5QkFBeUIsOEJBQThCLFVBQVUsZUFBZSx3QkFBd0Isa0VBQWtFLHdCQUF3QixjQUFjLGdDQUFnQyxnQ0FBZ0MsdURBQXVELG1CQUFtQixjQUFjLGNBQWMsbUJBQW1CLHdDQUF3QyxrREFBa0QscUJBQXFCLGVBQWUsYUFBYSxtREFBbUQsYUFBYSxxREFBcUQsY0FBYyx5Q0FBeUMsK0RBQStELElBQUksY0FBYyxTQUFTLElBQUksd0JBQXdCLFNBQVMsMEJBQTBCLGNBQWMsMkNBQTJDLG1FQUFtRSxJQUFJLFlBQVksU0FBUyxJQUFJLHNCQUFzQixTQUFTLHdCQUF3QixhQUFhLHVEQUF1RCxhQUFhLE9BQU8sV0FBVyxLQUFLLG1CQUFtQixFQUFFLEVBQUUsYUFBYSxNQUFNLGVBQWUsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLGNBQWMsdUJBQXVCLFlBQVksSUFBSSw2Q0FBNkMsU0FBUyxJQUFJLElBQUksaURBQWlELFNBQVMsS0FBSyxHQUFHLHFCQUFxQix1QkFBdUIsb0NBQW9DLGtDQUFrQyxtQkFBbUIsd0JBQXdCLHlDQUF5Qyw0QkFBNEIsZ0NBQWdDLHdDQUF3QyxxQ0FBcUMsZ0tBQWdLLFNBQVMsdUJBQXVCLG9EQUFvRCxrQkFBa0IsVUFBVSxxQkFBcUIsa0RBQWtELG9CQUFvQixVQUFVLGlCQUFpQixhQUFhLGlCQUFpQixpQkFBaUIsYUFBYSxnQkFBZ0IsdUZBQXVGLHdCQUF3QixtQkFBbUIsS0FBSyxtQkFBbUIsd0VBQXdFLElBQUksS0FBSyxrREFBa0QsdUNBQXVDLFNBQVMsYUFBYSxzREFBc0Qsa0RBQWtELEVBQUUsV0FBVyxxQkFBcUIsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSwrQ0FBK0MsaUJBQWlCLG1CQUFtQixzQkFBc0IsK0JBQStCLGdDQUFnQyxpQ0FBaUMsbUJBQW1CLG1CQUFtQixvQ0FBb0MsY0FBYyxFQUFFLElBQUksK0lBQStJLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsa0VBQWtFLG1CQUFtQiw4SkFBOEosa0JBQWtCLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsNkJBQTZCLHNHQUFzRyxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLDBGQUEwRixZQUFZLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsNEJBQTRCLDZCQUE2QiwrQkFBK0IseUpBQXlKLGdDQUFnQyxvQkFBb0Isa0dBQWtHLGdDQUFnQyxvQkFBb0IsbU5BQW1OLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLHdEQUF3RCxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLHFGQUFxRiwyTUFBMk0saUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSw0R0FBNEcsc0ZBQXNGLGlCQUFpQixlQUFlLG1CQUFtQixXQUFXLG1CQUFtQixpQkFBaUIsbUJBQW1CLG9DQUFvQyx5QkFBeUIsZUFBZSxNQUFNLHdDQUF3Qyw4QkFBOEIsWUFBWSxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGdDQUFnQyx5R0FBeUcsd0JBQXdCLE1BQU0seUNBQXlDLHNCQUFzQix3QkFBd0IsTUFBTSx3Q0FBd0Msc0NBQXNDLG9HQUFvRyxFQUFFLHdDQUF3Qyx3QkFBd0IsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxvSEFBb0gseUhBQXlILHlCQUF5QixxREFBcUQsa0JBQWtCLHNCQUFzQixtQkFBbUIsRUFBRSx5REFBeUQsU0FBUywyREFBMkQsYUFBYSx3Q0FBd0MscUJBQXFCLElBQUksaUJBQWlCLDBDQUEwQyxnQkFBZ0Isc0JBQXNCLDRCQUE0QixtQ0FBbUMsWUFBWSxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGdGQUFnRix1Q0FBdUMseUJBQXlCLG9CQUFvQix5Q0FBeUMsb0RBQW9ELHdCQUF3QiwrQkFBK0IsSUFBSSxtQkFBbUIsMkNBQTJDLG1CQUFtQixnQkFBZ0IsV0FBVyxPQUFPLG1DQUFtQyxlQUFlLE1BQU0sc0VBQXNFLCtDQUErQyxZQUFZLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLHNDQUFzQyw4QkFBOEIsWUFBWSxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLDhHQUE4Ryx1QkFBdUIsZUFBZSx1QkFBdUIsZUFBZSxrQ0FBa0MsOENBQThDLGVBQWUsa0NBQWtDLHVCQUF1QixlQUFlLGdFQUFnRSxjQUFjLG1CQUFtQiw0QkFBNEIsY0FBYyxtRUFBbUUsYUFBYSxlQUFlLDRDQUE0QyxlQUFlLG1DQUFtQyxjQUFjLCtDQUErQyxzQkFBc0IsZUFBZSwyREFBMkQsZUFBZSxtQkFBbUIsa0VBQWtFLGVBQWUsZ0dBQWdHLGdDQUFnQyxLQUFLLGVBQWUsd0pBQXdKLFlBQVksaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxxQ0FBcUMscUpBQXFKLG1CQUFtQixJQUFJLDBCQUEwQixrQkFBa0IsT0FBTyxrQkFBa0IsaUNBQWlDLHlHQUF5RyxVQUFVLEdBQUcsZUFBZSw4QkFBOEIsaUJBQWlCLGtEQUFrRCxpQkFBaUIsaUJBQWlCLHdHQUF3RyxpQkFBaUIsaUJBQWlCLCtEQUErRCxxQkFBcUIscURBQXFELE1BQU0sZ0JBQWdCLFFBQVEsZ0JBQWdCLG1CQUFtQix3QkFBd0IsUUFBUSxPQUFPLEtBQUssMkJBQTJCLFdBQVcsc0NBQXNDLFNBQVMscUJBQXFCLGlCQUFpQixtQkFBbUIsc0JBQXNCLFNBQVMsd0JBQXdCLGlCQUFpQixtQkFBbUIsRUFBRSxXQUFXLHVGQUF1RixzQkFBc0IsUUFBUSwwQ0FBMEMsMENBQTBDLEtBQUssaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxjQUFjLDRCQUE0QixpQkFBaUIsNkJBQTZCLFNBQVMsbUVBQW1FLFVBQVUscUJBQXFCLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLCtCQUErQixtS0FBbUssTUFBTSwyREFBMkQsa0NBQWtDLDRGQUE0RixvQkFBb0IsTUFBTSxzQ0FBc0MsV0FBVyxzQ0FBc0MsY0FBYyw4REFBOEQsYUFBYSxtQkFBbUIsNENBQTRDLG9CQUFvQiwwQ0FBMEMsb0JBQW9CLDBDQUEwQyxzQkFBc0IsbUJBQW1CLDRDQUE0QyxpQkFBaUIsaUVBQWlFLGdCQUFnQixtRUFBbUUsc0JBQXNCLHNCQUFzQixhQUFhLFlBQVksNENBQTRDLGFBQWEsNENBQTRDLG1CQUFtQiw0Q0FBNEMsT0FBTyw0Q0FBNEMsaUJBQWlCLGdFQUFnRSxvQkFBb0Isb0ZBQW9GLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWgwdkM7O0FBRS9CO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN2Qyx1QkFBdUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUMxQyx1QkFBdUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUMxQyx1QkFBdUIsMkNBQU0sV0FBVyx1Q0FBRTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLDJDQUFNLFNBQVMsdUNBQUU7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUMxQywwQkFBMEIsMkNBQU0sV0FBVyx1Q0FBRTtBQUM3QywwQkFBMEIsMkNBQU0sV0FBVyx1Q0FBRTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTtBQUNsQjtBQUNBLEVBQUUsMkNBQU0sU0FBUyx1Q0FBRTtBQUNuQixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSwyQ0FBTSxTQUFTLHVDQUFFO0FBQ25CLEVBQUU7QUFDRjs7QUFFQSxvQkFBb0IsMkNBQU0sV0FBVyx1Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNd0M7QUFDNUI7QUFDYjs7QUFFL0I7QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxrREFBSztBQUNuQixDQUFDLGtEQUFLO0FBQ04scURBQXFELEtBQUs7QUFDMUQ7O0FBRUE7QUFDQSxZQUFZLG9EQUFVO0FBQ3RCO0FBQ0EsbURBQW1ELHdEQUFjO0FBQ2pFLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMscURBQVE7QUFDdEIsZUFBZSxrREFBSztBQUNwQixhQUFhLGtEQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmLEtBQUssbURBQVM7QUFDZDtBQUNBLG1CQUFtQix3REFBYztBQUNqQyxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxDQUFDLGtEQUFLO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQWM7QUFDbEM7O0FBRUE7QUFDQSwwQkFBMEIsd0RBQWM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUMzQyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTs7QUFFekMscUJBQXFCLDJDQUFNLFdBQVcsdUNBQUU7QUFDeEMseUJBQXlCLDJDQUFNLFdBQVcsdUNBQUU7QUFDNUMsbUJBQW1CLDJDQUFNLFdBQVcsdUNBQUU7O0FBRXRDLHdCQUF3QiwyQ0FBTSxXQUFXLHVDQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDeExGO0FBQ0Y7QUFDRDs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxvREFBVTtBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCO0FBQ0EsY0FBYyxrREFBSztBQUNuQjs7QUFFQSxDQUFDLDJDQUFNLFNBQVMsdUNBQUU7QUFDbEI7O0FBRUEsb0JBQW9CLDJDQUFNLFdBQVcsdUNBQUU7QUFDdkMsc0JBQXNCLDJDQUFNLFdBQVcsdUNBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHpDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFVBQVU7QUFDVjs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxvQkFBb0IsSUFBSSxnQkFBZ0I7QUFDbkQ7QUFDQSxHQUFHLEVBQUUsbUJBQW1CO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGTztBQUNQO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRW1EO0FBQ2pCO0FBQ0k7QUFPbkI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyx3REFBYztBQUMvQyxvQkFBb0Isa0RBQUs7QUFDekI7QUFDQSxHQUFHO0FBQ0gsaUNBQWlDLHdEQUFjO0FBQy9DO0FBQ0EsR0FBRyxrREFBSztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdEQUFjOztBQUVuQyx3QkFBd0IsbURBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLElBQUk7QUFDSjtBQUNBLElBQUksbURBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLE1BQU0sbURBQVMsVUFBVSwyQkFBMkI7QUFDcEQsT0FBTyxtREFBUztBQUNoQjtBQUNBLHFCQUFxQix3REFBYztBQUNuQyxRQUFRO0FBQ1IsT0FBTyxtREFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsbURBQVM7QUFDbEI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFTLFVBQVUsMkJBQTJCO0FBQ3BELE9BQU8sbURBQVM7QUFDaEI7QUFDQSxxQkFBcUIsd0RBQWM7QUFDbkMsUUFBUTtBQUNSLE9BQU8sbURBQVM7QUFDaEI7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsQ0FBQywyQ0FBTSxTQUFTLHVDQUFFOztBQUVsQjtBQUNBO0FBQ0EsRUFBRSwyQ0FBTSxTQUFTLHVDQUFFO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLDJDQUFNLFNBQVMsdUNBQUU7QUFDckIsS0FBSztBQUNMLElBQUksMkNBQU0sU0FBUyx1Q0FBRSxtQkFBbUIsb0RBQVU7QUFDbEQ7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQVM7QUFDdkM7QUFDQSxJQUFJLGlDQUFpQztBQUNyQyw2QkFBNkIscURBQVE7QUFDckMsVUFBVSxtREFBUztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLEtBQUssbURBQVM7QUFDZDtBQUNBLG1CQUFtQix3REFBYztBQUNqQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUSxtREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsbURBQVM7QUFDbEI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFEQUFXO0FBQ3JCO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQWM7QUFDM0M7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsMkJBQTJCLHlEQUFlO0FBQzFDLEdBQUcsMkNBQU0sU0FBUyx1Q0FBRTtBQUNwQixHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5REFBZTtBQUNqQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDJDQUFNLFdBQVcsdUNBQUU7O0FBRTNDLGdCQUFnQiwyQ0FBTSxXQUFXLHVDQUFFOztBQUVuQyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6QyxtQkFBbUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUN0QyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTs7QUFFekMsc0JBQXNCLDJDQUFNLFdBQVcsdUNBQUU7QUFDekMseUJBQXlCLDJDQUFNLFdBQVcsdUNBQUU7O0FBRTVDLHVCQUF1QiwyQ0FBTSxXQUFXLHVDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFOQztBQUNMO0FBQ1I7O0FBRTlCO0FBQ0EsQ0FBQyxpREFBSTtBQUNMO0FBQ0EsOEJBQThCLHdEQUFjO0FBQzVDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsMkNBQU0sU0FBUyx1Q0FBRTtBQUNwQixHQUFHLGlEQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0osR0FBRyxpREFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsQ0FBQyxpREFBSTtBQUNMO0FBQ0EsNkJBQTZCLHdEQUFjO0FBQzNDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsMkNBQU0sU0FBUyx1Q0FBRTtBQUNwQixHQUFHLGlEQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0osR0FBRyxpREFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsQ0FBQyxpREFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLDJDQUFNLFNBQVMsdUNBQUU7QUFDcEIsR0FBRyxpREFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSTtBQUNKLEdBQUcsaURBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLENBQUMsaURBQUk7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRywyQ0FBTSxTQUFTLHVDQUFFO0FBQ3BCLEdBQUcsaURBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixHQUFHLGlEQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxDQUFDLGlEQUFJO0FBQ0w7QUFDQSwyQkFBMkIsK0NBQStDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsSUFBSSwyQ0FBTSxTQUFTLHVDQUFFO0FBQ3JCLEtBQUs7QUFDTCxJQUFJLDJDQUFNLFNBQVMsdUNBQUU7QUFDckI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTTtBQUNOO0FBQ0EsR0FBRywyQ0FBTSxTQUFTLHVDQUFFO0FBQ3BCO0FBQ0EsRUFBRTtBQUNGOztBQUVBLG9CQUFvQiwyQ0FBTSxXQUFXLHVDQUFFO0FBQ3ZDLHVCQUF1QiwyQ0FBTSxXQUFXLHVDQUFFO0FBQzFDLHNCQUFzQiwyQ0FBTSxXQUFXLHVDQUFFOztBQUV6Qyx3QkFBd0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUMzQyx3QkFBd0IsMkNBQU0sV0FBVyx1Q0FBRTs7Ozs7Ozs7Ozs7Ozs7O0FDeEpMO0FBQ2E7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRixDQUFDLDJDQUFNLFNBQVMsdUNBQUU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtEQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixxQkFBcUIscURBQVE7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwyQ0FBTSxTQUFTLHVDQUFFO0FBQ25CLEVBQUU7O0FBRUY7QUFDQSxFQUFFLDJDQUFNLFNBQVMsdUNBQUU7QUFDbkIsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6Qyx5QkFBeUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUM1Qyx5QkFBeUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUM1Qyx5QkFBeUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUM1Qyw0QkFBNEIsMkNBQU0sV0FBVyx1Q0FBRTs7QUFFL0Msd0JBQXdCLDJDQUFNLFdBQVcsdUNBQUU7Ozs7Ozs7VUNqRjNDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDRztBQUNGO0FBQ0w7QUFDTjtBQUNMO0FBQ0s7QUFDUDtBQUNEOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLEVBQUUsMkNBQU0sU0FBUyx1Q0FBRTtBQUNuQixFQUFFOztBQUVGO0FBQ0EsRUFBRSwyQ0FBTSxTQUFTLHVDQUFFO0FBQ25CLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyQ0FBTSxXQUFXLHVDQUFFO0FBQzFDLG9CQUFvQiwyQ0FBTSxXQUFXLHVDQUFFO0FBQ3ZDLHVCQUF1QiwyQ0FBTSxXQUFXLHVDQUFFO0FBQzFDLHlCQUF5QiwyQ0FBTSxXQUFXLHVDQUFFO0FBQzVDLHlCQUF5QiwyQ0FBTSxXQUFXLHVDQUFFO0FBQzVDLHdCQUF3QiwyQ0FBTSxXQUFXLHVDQUFFOztBQUUzQyxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJDQUFNO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMkNBQU07O0FBRTdDLGVBQWUsa0RBQUssa0JBQWtCLG9EQUFVO0FBQ2hEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTtBQUNsQjtBQUNBLEVBQUUsMkNBQU0sU0FBUyx1Q0FBRTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVU7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDJDQUFNO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDJDQUFNO0FBQ1A7O0FBRUE7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUIsY0FBYyxrREFBSztBQUNuQixDQUFDLDJDQUFNLFNBQVMsdUNBQUU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJDQUFNO0FBQ1Asa0JBQWtCLG9EQUFVO0FBQzVCO0FBQ0EsQ0FBQywyQ0FBTSxTQUFTLHVDQUFFO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQU0sU0FBUyx1Q0FBRTtBQUNsQjs7QUFFQSxxQkFBcUIsMkNBQU0sV0FBVyx1Q0FBRTtBQUN4QyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6QyxzQkFBc0IsMkNBQU0sV0FBVyx1Q0FBRTtBQUN6QywyQ0FBTSxTQUFTLHVDQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvd2FybmluZ3MuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZHJhZy1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2FybmluZ3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2ViLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG5cdC0tbW9kYWwtc3BhY2VyOiBtaW4oNHZ3LCAxOHB4KTtcblxuXHR3aWR0aDogbWluKDg4dncsIDUwMHB4KTtcblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXI6IG5vbmU7XG5cblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogNHB4IDVweCAxMHB4ICMwMDAwMDA5OTtcblx0Zm9udC1zaXplOiAxLjNyZW07XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbmRpYWxvZyA+ICoge1xuXHRwYWRkaW5nOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG59XG5cbmRpYWxvZyAuYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuZGlhbG9nIC5idXR0b25zID4gKiB7XG5cdGZsZXg6IDE7XG5cblx0cGFkZGluZzogNnB4O1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZGlzcGxheS1tb2RlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1tb2RlLWJnKTtcbn1cblxuLmRpc3BsYXktaGVhZGVyIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Zm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5kaXNwbGF5LWRpdmlkZXIge1xuXHRoZWlnaHQ6IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZGlzcGxheS1kZXRhaWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xufVxuXG4uZGlzcGxheS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxMHB4O1xufVxuXG4uZGlzcGxheS1sYWJlbCB7XG5cdHdpZHRoOiA2MnB4O1xuXHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kaXNwbGF5LXZhbHVlIHtcblx0ZmxleDogMTtcbn1cblxuI2VkaXQtYnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1idG4tYmcpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbiNkaXNwbGF5LWNsb3NlLWJ0biB7XG5cdGNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRGlzcGxheSBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLmVkaXQtbW9kZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtbW9kZS1iZyk7XG5cdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XG59XG5cbi5lZGl0LW1vZGUtZGV0YWlscyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLmZvcm0tcm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG59XG5cbi5mb3JtLWl0ZW0ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsZXg6IDE7XG5cblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA2cHg7XG59XG5cbi5mb3JtLXJvdyBwIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogdmFyKC0tbW9kYWwtc3BhY2VyKSAwIDAgNzZweDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5lZGl0LW1vZGUgbGFiZWwge1xuXHR3aWR0aDogNzBweDtcblx0dGV4dC1hbGlnbjogZW5kO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcblx0ZmxleDogMTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0cGFkZGluZzogMXB4IDhweDtcblx0d2lkdGg6IDEwMHB4O1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNhdmUtYnRuLWJnKTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXG5cdGZvbnQtZmFtaWx5OiB1bnNldDtcblx0Zm9udC1zaXplOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZvcm0gLmZhLWNoZXZyb24tZG93biB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDQlO1xuXHR0b3A6IDM2JTtcblxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTBweDtcbn1cblxuI3NhdmUtYnRuIHtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XG59XG5cbiNjYW5jZWwtYnRuIHtcblx0Y29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcblx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnByb2plY3QtbW9kZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG5cbiNwcm9qZWN0LXNhdmUtYnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcblx0Y29sb3I6IHBpbms7XG59XG5cbiNwcm9qZWN0LWNhbmNlbC1idG4ge1xuXHRjb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1wcm9qZWN0KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsOEJBQThCOztDQUU5Qix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLFlBQVk7O0NBRVosbUJBQW1CO0NBQ25CLGtDQUFrQztDQUNsQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsT0FBTzs7Q0FFUCxZQUFZOztDQUVaLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtBQUMxQjs7QUFFQSx5REFBeUQ7O0FBRXpEO0NBQ0Msd0NBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQ0FBa0M7Q0FDbEMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDhCQUE4QjtBQUMvQjs7QUFFQSwwREFBMEQ7QUFDMUQsc0RBQXNEOztBQUV0RDtDQUNDLHFDQUFxQztDQUNyQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87O0NBRVAsYUFBYTtDQUNiLFFBQVE7QUFDVDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxvQ0FBb0M7Q0FDcEMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7OztDQUdDLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFlBQVk7O0NBRVosb0NBQW9DO0NBQ3BDLGtCQUFrQjs7Q0FFbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTs7Q0FFUixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsOEJBQThCO0FBQy9CO0FBQ0EsdURBQXVEO0FBQ3ZELHlEQUF5RDs7QUFFekQ7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxxQ0FBcUM7Q0FDckMsV0FBVztBQUNaOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLHFDQUFxQztBQUN0Qzs7QUFFQSwwREFBMERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG5cXHQtLW1vZGFsLXNwYWNlcjogbWluKDR2dywgMThweCk7XFxuXFxuXFx0d2lkdGg6IG1pbig4OHZ3LCA1MDBweCk7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjMDAwMDAwOTk7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuZGlhbG9nID4gKiB7XFxuXFx0cGFkZGluZzogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbnMgPiAqIHtcXG5cXHRmbGV4OiAxO1xcblxcblxcdHBhZGRpbmc6IDZweDtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRGlzcGxheSBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZGlzcGxheS1tb2RlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXNwbGF5LW1vZGUtYmcpO1xcbn1cXG5cXG4uZGlzcGxheS1oZWFkZXIge1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5kaXNwbGF5LWRpdmlkZXIge1xcblxcdGhlaWdodDogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uZGlzcGxheS1kZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1pdGVtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLmRpc3BsYXktbGFiZWwge1xcblxcdHdpZHRoOiA2MnB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZGlzcGxheS12YWx1ZSB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuI2VkaXQtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbn1cXG5cXG4jZGlzcGxheS1jbG9zZS1idG4ge1xcblxcdGNvbG9yOiB2YXIoLS1lZGl0LWJ0bi1iZyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9EaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uZWRpdC1tb2RlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LW1vZGUtYmcpO1xcblxcdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XFxufVxcblxcbi5lZGl0LW1vZGUtZGV0YWlscyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA2cHg7XFxufVxcblxcbi5mb3JtLXJvdyBwIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IHZhcigtLW1vZGFsLXNwYWNlcikgMCAwIDc2cHg7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5lZGl0LW1vZGUgbGFiZWwge1xcblxcdHdpZHRoOiA3MHB4O1xcblxcdHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmbGV4OiAxO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0cGFkZGluZzogMXB4IDhweDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2F2ZS1idG4tYmcpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXHRmb250LWZhbWlseTogdW5zZXQ7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuZm9ybSAuZmEtY2hldnJvbi1kb3duIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDQlO1xcblxcdHRvcDogMzYlO1xcblxcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXNpemU6IDEwcHg7XFxufVxcblxcbiNzYXZlLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhdmUtYnRuLWJnKTtcXG59XFxuXFxuI2NhbmNlbC1idG4ge1xcblxcdGNvbG9yOiB2YXIoLS1zYXZlLWJ0bi1iZyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdC1tb2RlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4jcHJvamVjdC1zYXZlLWJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG5cXHRjb2xvcjogcGluaztcXG59XFxuXFxuI3Byb2plY3QtY2FuY2VsLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtcHJvamVjdCk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0dmFyKC0taGVhZGVyLWJnLWxlZnQpLFxuXHRcdHZhcigtLWhlYWRlci1iZy1yaWdodClcblx0KTtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGJveC1zaGFkb3c6IDAgM3B4IDNweCAjMDAwMDAwNGU7XG59XG5cbmhlYWRlciBoMSB7XG5cdG1hcmdpbjogMTBweCAxOHB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtc2hhZG93OiAtM3B4IDNweCBibGFjaztcbn1cblxuI3NpZGViYXItb3Blbi1idG4ge1xuXHRtYXJnaW4tdG9wOiAtNnB4O1xuXHRwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdGhlYWRlciB7XG5cdFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNikgY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNikgMFxuXHRcdFx0MDtcblx0XHRib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0fVxuXG5cdCNzaWRlYmFyLW9wZW4tYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0aGVpZ2h0OiA2MHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogOHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZhLmZhLWdpdGh1YiB7XG5cdGNvbG9yOiBjdXJyZW50Q29sb3I7XG5cdGZvbnQtc2l6ZTogMzBweDtcblxuXHQmOmhvdmVyIHtcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xuXHR9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci1mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTs7Q0FFWixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjs7Q0FFbkI7Ozs7RUFJQztDQUNELHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0M7RUFDQztJQUNFO0VBQ0YsOEJBQThCO0VBQzlCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtDQUNDLFlBQVk7O0NBRVosYUFBYTtDQUNiLFFBQVE7Q0FDUix1QkFBdUI7Q0FDdkIsbUJBQW1COztDQUVuQixrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTs7Q0FFZjtFQUNDLHNDQUFzQztFQUN0QyxxQ0FBcUM7Q0FDdEM7QUFDRDtBQUNBLG9EQUFvRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuaGVhZGVyIHtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGhlaWdodDogNjBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCxcXG5cXHRcXHR2YXIoLS1oZWFkZXItYmctbGVmdCksXFxuXFx0XFx0dmFyKC0taGVhZGVyLWJnLXJpZ2h0KVxcblxcdCk7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAzcHggIzAwMDAwMDRlO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcblxcdG1hcmdpbjogMTBweCAxOHB4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHR0ZXh0LXNoYWRvdzogLTNweCAzcHggYmxhY2s7XFxufVxcblxcbiNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRtYXJnaW4tdG9wOiAtNnB4O1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIDBcXG5cXHRcXHRcXHQwO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG5cXHRcXHRib3gtc2hhZG93OiBub25lO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1vcGVuLWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mYS5mYS1naXRodWIge1xcblxcdGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XFxuXFx0fVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZsZXgtY29udGFpbmVyIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtY29udGVudCB7XG5cdC0tbWFpbi1zcGFjZXI6IDIwcHg7XG5cdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xuXG5cdGZsZXg6IDE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuZmxleC1jb250YWluZXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblxuXHQuYXBwLWNvbnRlbnQge1xuXHRcdC0tYXBwLWJkLXJhZDogMTBweDtcblxuXHRcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xuXHRcdG1pbi1oZWlnaHQ6IDgwdmg7XG5cdFx0ZmxleDogMCAwIGF1dG87XG5cblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcblxuXHRcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1iZC1yYWQpO1xuXHRcdGJveC1zaGFkb3c6IDhweCA2cHggYmxhY2s7XG5cdH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxubWFpbiB7XG5cdGZsZXg6IDE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogY2FsYyh2YXIoLS1tYWluLXNwYWNlcikgLyAyKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdC1kaXNwbGF5ZWQge1xuXHRmb250LXNpemU6IDEuOHJlbTtcbn1cblxuI3N0YXR1c2VzLWNvbnRhaW5lciB7XG5cdC0tc3RhdHVzLXNwYWNlcjogMTBweDtcblx0ZmxleDogMTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xufVxuXG4uc3RhdHVzLXJvdyB7XG5cdGZsZXg6IGF1dG87XG5cdHdpZHRoOiBtaW4oNDgwcHgsIDEwMCUpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc3RhdHVzLWNvbHVtbiB7XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xuXHRtaW4td2lkdGg6IG1pbigyMzBweCwgMTAwJSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnN0YXR1cy1jb2x1bW4uZHJhZy1vdmVyIHtcblx0Ym9yZGVyLWNvbG9yOiBibGFjaztcblx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDI3OSwgMzMlLCA5MiUpO1xufVxuXG4uc3RhdHVzLW5hbWUge1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhc2stY2FyZCB7XG5cdC0tcHJpb3JpdHktd2lkdGg6IDE2cHg7XG5cdC0tc2lkZS1wYWQ6IDlweDtcblx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZSk7XG5cblx0bWluLWhlaWdodDogNjBweDtcblx0cGFkZGluZzogNHB4IHZhcigtLXNpZGUtcGFkKSA0cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyB2YXIoLS1zaWRlLXBhZCkpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXG5cdFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXG5cdCk7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym94LXNoYWRvdzogNnB4IDRweCBibGFjaztcblxuXHRmb250LXdlaWdodDogNTAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4udGFzay1jYXJkOmhvdmVyIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCk7XG5cdGJveC1zaGFkb3c6IDdweCA1cHggYmxhY2s7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaSk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cIm1lZGl1bVwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZCk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XG59XG5cbiNkb25lLWNvbHVtbiAudGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XG59XG5cbi5jYXJkLXNlY3Rpb24ge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNhcmQgLnRpdGxlIHtcblx0Zm9udC1zaXplOiAxLjRyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5cbi5jYXJkLWRlbGV0ZS1idG4ge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkLXNlY3Rpb246bGFzdC1jaGlsZCB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LW1lZCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7O0NBRXBCLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGtCQUFrQjs7RUFFbEIsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCOztFQUU3Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBLGlEQUFpRDs7QUFFakQ7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLHFDQUFxQzs7Q0FFckMsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixPQUFPOztDQUVQLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUEsMkRBQTJEOztBQUUzRDtDQUNDLE9BQU87Q0FDUCw2QkFBNkI7Q0FDN0IsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHlCQUF5Qjs7Q0FFekIsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixzQ0FBc0M7O0NBRXRDLGdCQUFnQjtDQUNoQiw4RUFBOEU7O0NBRTlFLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCOzs7O0VBSUM7O0NBRUQsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQix5QkFBeUI7O0NBRXpCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQSw0REFBNEQ7QUFDNUQsa0RBQWtEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGV4LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250ZW50IHtcXG5cXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xcblxcdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xcblxcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0LmZsZXgtY29udGFpbmVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQuYXBwLWNvbnRlbnQge1xcblxcdFxcdC0tYXBwLWJkLXJhZDogMTBweDtcXG5cXG5cXHRcXHR3aWR0aDogbWluKGNhbGMoMTAwdncgLSA0MHB4KSwgMTQwMHB4KTtcXG5cXHRcXHRtaW4taGVpZ2h0OiA4MHZoO1xcblxcdFxcdGZsZXg6IDAgMCBhdXRvO1xcblxcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcblxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1iZC1yYWQpO1xcblxcdFxcdGJveC1zaGFkb3c6IDhweCA2cHggYmxhY2s7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpIC8gMik7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdC1kaXNwbGF5ZWQge1xcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcXG5cXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLnN0YXR1cy1yb3cge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zdGF0dXMtY29sdW1uIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3RhdHVzLWNvbHVtbi5kcmFnLW92ZXIge1xcblxcdGJvcmRlci1jb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDI3OSwgMzMlLCA5MiUpO1xcbn1cXG5cXG4uc3RhdHVzLW5hbWUge1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktd2lkdGg6IDE2cHg7XFxuXFx0LS1zaWRlLXBhZDogOXB4O1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW5vbmUpO1xcblxcblxcdG1pbi1oZWlnaHQ6IDYwcHg7XFxuXFx0cGFkZGluZzogNHB4IHZhcigtLXNpZGUtcGFkKSA0cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyB2YXIoLS1zaWRlLXBhZCkpO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0dmFyKC0tcHJpb3JpdHktY29sb3IpIHZhcigtLXByaW9yaXR5LXdpZHRoKSxcXG5cXHRcXHR0cmFuc3BhcmVudCB2YXIoLS1wcmlvcml0eS13aWR0aClcXG5cXHQpO1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3gtc2hhZG93OiA2cHggNHB4IGJsYWNrO1xcblxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcXG5cXHRib3gtc2hhZG93OiA3cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGkpO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1lZGl1bVxcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQpO1xcbn1cXG5cXG4udGFzay1jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4jZG9uZS1jb2x1bW4gLnRhc2stY2FyZCB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jYXJkLXNlY3Rpb24ge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY2FyZCAudGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS40cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDkwJTtcXG59XFxuXFxuLmNhcmQtZGVsZXRlLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC1zZWN0aW9uOmxhc3QtY2hpbGQge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LW1lZCk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlYmFyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAxMDBzdmg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5zaWRlYmFyLm9wZW4ge1xuXHR3aWR0aDogMTAwdnc7XG5cdHBhZGRpbmc6IDIwcHg7XG5cblx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5zaWRlYmFyID4gKiB7XG5cdG9wYWNpdHk6IDA7XG5cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uc2lkZWJhci5vcGVuID4gKiB7XG5cdG9wYWNpdHk6IDE7XG5cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbn1cblxuLmNsb3NlLWJ0biB7XG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFByb2plY3QgQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDMwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LWZpbHRlci1idG4ge1xuXHRmb250LXNpemU6IDEuNHJlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5wcm9qZWN0LWZpbHRlci1idG46aG92ZXIge1xuXHRjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcbn1cblxuLnByb2plY3QtZmlsdGVyLWJ0bi5zZWxlY3RlZCB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLnByb2plY3QtZGVsZXRlLWJ0biB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm90dG9tIEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uYm90dG9tLWJ1dHRvbnMge1xuXHRtYXJnaW4tdG9wOiBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDEycHg7XG59XG5cbi5oaWRkZW4tYnRuIHtcblx0ZGlzcGxheTogbm9uZTtcblx0cGFkZGluZzogNXB4O1xuXG5cdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaGlkZGVuLWJ0bi5vcGVuIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRkZW4tYnRuOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xufVxuXG4ucmV2ZWFsLWJ0bnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZXZlYWwtYnRuIHtcblx0aGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcblx0Zm9udC1zaXplOiA0MHB4O1xuXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4jYWRkLXJldmVhbC1idG4ub3BlbiB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuI3N0b3JhZ2UtcmV2ZWFsLWJ0biB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3N0b3JhZ2UtcmV2ZWFsLWJ0bi5vcGVuIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb3R0b20gQnV0dG9ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuc2lkZWJhcixcblx0LnNpZGViYXIub3BlbiB7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0d2lkdGg6IHVuc2V0O1xuXHRcdGhlaWdodDogdW5zZXQ7XG5cdFx0cGFkZGluZzogMjBweCBtaW4oMjBweCwgNiUpO1xuXHRcdHotaW5kZXg6IHVuc2V0O1xuXG5cdFx0dHJhbnNpdGlvbjogbm9uZTtcblxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAwIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpO1xuXHR9XG5cblx0LnNpZGViYXIgPiAqLFxuXHQuc2lkZWJhci5vcGVuID4gKiB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdCNzaWRlYmFyLWNsb3NlLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixRQUFRO0NBQ1IsY0FBYztDQUNkLGdCQUFnQjs7Q0FFaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTOztDQUVULGtDQUFrQztDQUNsQyx3QkFBd0I7O0NBRXhCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhOztDQUViLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFVBQVU7O0NBRVYsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsVUFBVTs7Q0FFVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQSw0REFBNEQ7O0FBRTVEO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBLDZEQUE2RDtBQUM3RCwyREFBMkQ7O0FBRTNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7O0NBRVosOEJBQThCO0NBQzlCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IscUJBQXFCOztDQUVyQixrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCLGVBQWU7O0NBRWYsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQSw0REFBNEQ7O0FBRTVEO0NBQ0M7O0VBRUMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7O0VBRWQsZ0JBQWdCOztFQUVoQixrREFBa0Q7Q0FDbkQ7O0NBRUE7O0VBRUMsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5zaWRlYmFyLm9wZW4ge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcblxcdG9wYWNpdHk6IDA7XFxuXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG5cXG4uc2lkZWJhci5vcGVuID4gKiB7XFxuXFx0b3BhY2l0eTogMTtcXG5cXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUHJvamVjdCBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtZmlsdGVyLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAxLjRyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5wcm9qZWN0LWZpbHRlci1idG46aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4ucHJvamVjdC1maWx0ZXItYnRuLnNlbGVjdGVkIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm90dG9tIEJ1dHRvbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5ib3R0b20tYnV0dG9ucyB7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMnB4O1xcbn1cXG5cXG4uaGlkZGVuLWJ0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhpZGRlbi1idG4ub3BlbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oaWRkZW4tYnRuOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRjb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG59XFxuXFxuLnJldmVhbC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJldmVhbC1idG4ge1xcblxcdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHR3aWR0aDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbiNhZGQtcmV2ZWFsLWJ0bi5vcGVuIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNzdG9yYWdlLXJldmVhbC1idG4ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3N0b3JhZ2UtcmV2ZWFsLWJ0bi5vcGVuIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0JvdHRvbSBCdXR0b25zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuc2lkZWJhcixcXG5cXHQuc2lkZWJhci5vcGVuIHtcXG5cXHRcXHRwb3NpdGlvbjogaW5oZXJpdDtcXG5cXHRcXHR3aWR0aDogdW5zZXQ7XFxuXFx0XFx0aGVpZ2h0OiB1bnNldDtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IG1pbigyMHB4LCA2JSk7XFxuXFx0XFx0ei1pbmRleDogdW5zZXQ7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogbm9uZTtcXG5cXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMCBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KTtcXG5cXHR9XFxuXFxuXFx0LnNpZGViYXIgPiAqLFxcblxcdC5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1jbG9zZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItZm9vdGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhcm5pbmdzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdXNlLnR5cGVraXQubmV0L3BrZTNiYmYuY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG5cdGNvbG9yOiB1bnNldDtcbn1cblxuYnV0dG9uIHtcblx0Y29sb3I6IHVuc2V0O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG5cdGZvbnQtZmFtaWx5OiB1bnNldDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuXHRmb250LXNpemU6IHVuc2V0O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290IHtcblx0LS1zYXZlLWJ0bi1iZzogIzAwNGI2Yjtcblx0LS1lZGl0LWJ0bi1iZzogIzQ3MzI2Mjtcblx0LS1oZWFkZXItYmctbGVmdDogaHNsKDIxMCwgNzAlLCA1MCUpO1xuXHQtLWhlYWRlci1iZy1yaWdodDogaHNsKDI2NiwgNTAlLCAzMCUpO1xuXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcblx0LS1lZGl0LW1vZGUtYmc6ICNlMGY2ZmY7XG5cblx0LS10ZXh0LWxpZ2h0OiAjZmJmY2ZmO1xuXHQtLXRleHQtbWVkOiAjNDA0MDQwO1xuXHQtLXRleHQtZGFyazogIzRmNDE2Mjtcblx0LS10ZXh0LXByb2plY3Q6ICM3NjBhMWM7XG5cblx0LS1wcmlvcml0eS1sb3c6ICM4N2JiZjI7XG5cdC0tcHJpb3JpdHktbWVkOiAjZmZjMDAwO1xuXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xuXHQtLXByaW9yaXR5LW5vbmU6ICNhNmE2YTY7XG5cblx0LS1mb290ZXItYmc6ICMyMjJhMzU7XG5cblx0LS1mb250LW1haW46IGZ1dHVyYS1wdDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0aHNsYSgxOTgsIDEwMCUsIDQxJSwgMC43NDUpLFxuXHRcdFx0aHNsYSgyNjYsIDMyJSwgNTAlLCAwLjc0NSlcblx0XHQpLFxuXHRcdG5vLXJlcGVhdCBjZW50ZXIvY292ZXJcblx0XHRcdHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjUvU3RvbmVzX1BvcnRvX0RTQ0YwNTcyLmpwZy8xMDI0cHgtU3RvbmVzX1BvcnRvX0RTQ0YwNTcyLmpwZyk7XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcblx0XHRcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQSxtREFBbUQ7O0FBRW5EOzs7Q0FHQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTs7O0NBR0MsZ0JBQWdCO0FBQ2pCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7QUFDbkU7Q0FDQyxzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLG9DQUFvQztDQUNwQyxxQ0FBcUM7Q0FDckMsMEJBQTBCO0NBQzFCLHVCQUF1Qjs7Q0FFdkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsdUJBQXVCOztDQUV2Qix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0Qix3QkFBd0I7O0NBRXhCLG9CQUFvQjs7Q0FFcEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7Ozs7OzRIQUsySDtDQUMzSDs7WUFFVztBQUNaOztBQUVBLG9FQUFvRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCguL21haW4uY3NzKTtcXG5AaW1wb3J0IHVybCguL3NpZGViYXIuY3NzKTtcXG5AaW1wb3J0IHVybCguL2RpYWxvZy5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vaGVhZGVyLWZvb3Rlci5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vd2FybmluZ3MuY3NzKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvcGtlM2JiZi5jc3NcXFwiKTtcXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcblxcdGNvbG9yOiB1bnNldDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRjb2xvcjogdW5zZXQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cXHRmb250LWZhbWlseTogdW5zZXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuXFx0Zm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbjpyb290IHtcXG5cXHQtLXNhdmUtYnRuLWJnOiAjMDA0YjZiO1xcblxcdC0tZWRpdC1idG4tYmc6ICM0NzMyNjI7XFxuXFx0LS1oZWFkZXItYmctbGVmdDogaHNsKDIxMCwgNzAlLCA1MCUpO1xcblxcdC0taGVhZGVyLWJnLXJpZ2h0OiBoc2woMjY2LCA1MCUsIDMwJSk7XFxuXFx0LS1kaXNwbGF5LW1vZGUtYmc6ICNlZWUwZmY7XFxuXFx0LS1lZGl0LW1vZGUtYmc6ICNlMGY2ZmY7XFxuXFxuXFx0LS10ZXh0LWxpZ2h0OiAjZmJmY2ZmO1xcblxcdC0tdGV4dC1tZWQ6ICM0MDQwNDA7XFxuXFx0LS10ZXh0LWRhcms6ICM0ZjQxNjI7XFxuXFx0LS10ZXh0LXByb2plY3Q6ICM3NjBhMWM7XFxuXFxuXFx0LS1wcmlvcml0eS1sb3c6ICM4N2JiZjI7XFxuXFx0LS1wcmlvcml0eS1tZWQ6ICNmZmMwMDA7XFxuXFx0LS1wcmlvcml0eS1oaTogI2MwMDAwMDtcXG5cXHQtLXByaW9yaXR5LW5vbmU6ICNhNmE2YTY7XFxuXFxuXFx0LS1mb290ZXItYmc6ICMyMjJhMzU7XFxuXFxuXFx0LS1mb250LW1haW46IGZ1dHVyYS1wdDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwc3ZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0aHNsYSgxOTgsIDEwMCUsIDQxJSwgMC43NDUpLFxcblxcdFxcdFxcdGhzbGEoMjY2LCAzMiUsIDUwJSwgMC43NDUpXFxuXFx0XFx0KSxcXG5cXHRcXHRuby1yZXBlYXQgY2VudGVyL2NvdmVyXFxuXFx0XFx0XFx0dXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNi82NS9TdG9uZXNfUG9ydG9fRFNDRjA1NzIuanBnLzEwMjRweC1TdG9uZXNfUG9ydG9fRFNDRjA1NzIuanBnKTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuXFx0XFx0XFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG5cXHRcXHRzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zd2FsLW1vZGFsIHtcblx0Ym94LXNoYWRvdzogNHB4IDVweCAxMHB4ICMwMDAwMDA5OTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93YXJuaW5ncy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQ0FBa0M7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN3YWwtbW9kYWwge1xcblxcdGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjMDAwMDAwOTk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnN3YWw9ZSgpOnQuc3dhbD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIHI9bltvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsZSksci5sPSEwLHIuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixvKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om99KX0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LGUucD1cIlwiLGUoZS5zPTgpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPVwic3dhbC1idXR0b25cIjtlLkNMQVNTX05BTUVTPXtNT0RBTDpcInN3YWwtbW9kYWxcIixPVkVSTEFZOlwic3dhbC1vdmVybGF5XCIsU0hPV19NT0RBTDpcInN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbFwiLE1PREFMX1RJVExFOlwic3dhbC10aXRsZVwiLE1PREFMX1RFWFQ6XCJzd2FsLXRleHRcIixJQ09OOlwic3dhbC1pY29uXCIsSUNPTl9DVVNUT006XCJzd2FsLWljb24tLWN1c3RvbVwiLENPTlRFTlQ6XCJzd2FsLWNvbnRlbnRcIixGT09URVI6XCJzd2FsLWZvb3RlclwiLEJVVFRPTl9DT05UQUlORVI6XCJzd2FsLWJ1dHRvbi1jb250YWluZXJcIixCVVRUT046byxDT05GSVJNX0JVVFRPTjpvK1wiLS1jb25maXJtXCIsQ0FOQ0VMX0JVVFRPTjpvK1wiLS1jYW5jZWxcIixEQU5HRVJfQlVUVE9OOm8rXCItLWRhbmdlclwiLEJVVFRPTl9MT0FESU5HOm8rXCItLWxvYWRpbmdcIixCVVRUT05fTE9BREVSOm8rXCJfX2xvYWRlclwifSxlLmRlZmF1bHQ9ZS5DTEFTU19OQU1FU30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZ2V0Tm9kZT1mdW5jdGlvbih0KXt2YXIgZT1cIi5cIit0O3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxlLnN0cmluZ1RvTm9kZT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmlubmVySFRNTD10LnRyaW0oKSxlLmZpcnN0Q2hpbGR9LGUuaW5zZXJ0QWZ0ZXI9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLm5leHRTaWJsaW5nO2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxuKX0sZS5yZW1vdmVOb2RlPWZ1bmN0aW9uKHQpe3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KX0sZS50aHJvd0Vycj1mdW5jdGlvbih0KXt0aHJvdyB0PXQucmVwbGFjZSgvICsoPz0gKS9nLFwiXCIpLFwiU3dlZXRBbGVydDogXCIrKHQ9dC50cmltKCkpfSxlLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24odCl7aWYoXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4hMTt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7cmV0dXJuIG51bGw9PT1lfHxlPT09T2JqZWN0LnByb3RvdHlwZX0sZS5vcmRpbmFsU3VmZml4T2Y9ZnVuY3Rpb24odCl7dmFyIGU9dCUxMCxuPXQlMTAwO3JldHVybiAxPT09ZSYmMTEhPT1uP3QrXCJzdFwiOjI9PT1lJiYxMiE9PW4/dCtcIm5kXCI6Mz09PWUmJjEzIT09bj90K1wicmRcIjp0K1widGhcIn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8obigyNSkpO3ZhciByPW4oMjYpO2Uub3ZlcmxheU1hcmt1cD1yLmRlZmF1bHQsbyhuKDI3KSksbyhuKDI4KSksbyhuKDI5KSk7dmFyIGk9bigwKSxhPWkuZGVmYXVsdC5NT0RBTF9USVRMRSxzPWkuZGVmYXVsdC5NT0RBTF9URVhULGM9aS5kZWZhdWx0LklDT04sbD1pLmRlZmF1bHQuRk9PVEVSO2UuaWNvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytjKydcIj48L2Rpdj4nLGUudGl0bGVNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrYSsnXCI+PC9kaXY+XFxuJyxlLnRleHRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcysnXCI+PC9kaXY+JyxlLmZvb3Rlck1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytsKydcIj48L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKTtlLkNPTkZJUk1fS0VZPVwiY29uZmlybVwiLGUuQ0FOQ0VMX0tFWT1cImNhbmNlbFwiO3ZhciByPXt2aXNpYmxlOiEwLHRleHQ6bnVsbCx2YWx1ZTpudWxsLGNsYXNzTmFtZTpcIlwiLGNsb3NlTW9kYWw6ITB9LGk9T2JqZWN0LmFzc2lnbih7fSxyLHt2aXNpYmxlOiExLHRleHQ6XCJDYW5jZWxcIix2YWx1ZTpudWxsfSksYT1PYmplY3QuYXNzaWduKHt9LHIse3RleHQ6XCJPS1wiLHZhbHVlOiEwfSk7ZS5kZWZhdWx0QnV0dG9uTGlzdD17Y2FuY2VsOmksY29uZmlybTphfTt2YXIgcz1mdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZSBlLkNPTkZJUk1fS0VZOnJldHVybiBhO2Nhc2UgZS5DQU5DRUxfS0VZOnJldHVybiBpO2RlZmF1bHQ6dmFyIG49dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO3JldHVybiBPYmplY3QuYXNzaWduKHt9LHIse3RleHQ6bix2YWx1ZTp0fSl9fSxjPWZ1bmN0aW9uKHQsZSl7dmFyIG49cyh0KTtyZXR1cm4hMD09PWU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwfSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwLHRleHQ6ZX0pOm8uaXNQbGFpbk9iamVjdChlKT9PYmplY3QuYXNzaWduKHt2aXNpYmxlOiEwfSxuLGUpOk9iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMX0pfSxsPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTAsbz1PYmplY3Qua2V5cyh0KTtuPG8ubGVuZ3RoO24rKyl7dmFyIHI9b1tuXSxhPXRbcl0scz1jKHIsYSk7ZVtyXT1zfXJldHVybiBlLmNhbmNlbHx8KGUuY2FuY2VsPWkpLGV9LHU9ZnVuY3Rpb24odCl7dmFyIG49e307c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDE6bltlLkNBTkNFTF9LRVldPU9iamVjdC5hc3NpZ24oe30saSx7dmlzaWJsZTohMX0pO2JyZWFrO2Nhc2UgMjpuW2UuQ0FOQ0VMX0tFWV09YyhlLkNBTkNFTF9LRVksdFswXSksbltlLkNPTkZJUk1fS0VZXT1jKGUuQ09ORklSTV9LRVksdFsxXSk7YnJlYWs7ZGVmYXVsdDpvLnRocm93RXJyKFwiSW52YWxpZCBudW1iZXIgb2YgJ2J1dHRvbnMnIGluIGFycmF5IChcIit0Lmxlbmd0aCtcIikuXFxuICAgICAgSWYgeW91IHdhbnQgbW9yZSB0aGFuIDIgYnV0dG9ucywgeW91IG5lZWQgdG8gdXNlIGFuIG9iamVjdCFcIil9cmV0dXJuIG59O2UuZ2V0QnV0dG9uTGlzdE9wdHM9ZnVuY3Rpb24odCl7dmFyIG49ZS5kZWZhdWx0QnV0dG9uTGlzdDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uW2UuQ09ORklSTV9LRVldPWMoZS5DT05GSVJNX0tFWSx0KTpBcnJheS5pc0FycmF5KHQpP249dSh0KTpvLmlzUGxhaW5PYmplY3QodCk/bj1sKHQpOiEwPT09dD9uPXUoWyEwLCEwXSk6ITE9PT10P249dShbITEsITFdKTp2b2lkIDA9PT10JiYobj1lLmRlZmF1bHRCdXR0b25MaXN0KSxufX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGk9bigwKSxhPWkuZGVmYXVsdC5NT0RBTCxzPWkuZGVmYXVsdC5PVkVSTEFZLGM9bigzMCksbD1uKDMxKSx1PW4oMzIpLGY9bigzMyk7ZS5pbmplY3RFbEludG9Nb2RhbD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoYSksbj1vLnN0cmluZ1RvTm9kZSh0KTtyZXR1cm4gZS5hcHBlbmRDaGlsZChuKSxufTt2YXIgZD1mdW5jdGlvbih0KXt0LmNsYXNzTmFtZT1hLHQudGV4dENvbnRlbnQ9XCJcIn0scD1mdW5jdGlvbih0LGUpe2QodCk7dmFyIG49ZS5jbGFzc05hbWU7biYmdC5jbGFzc0xpc3QuYWRkKG4pfTtlLmluaXRNb2RhbENvbnRlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXROb2RlKGEpO3AoZSx0KSxjLmRlZmF1bHQodC5pY29uKSxsLmluaXRUaXRsZSh0LnRpdGxlKSxsLmluaXRUZXh0KHQudGV4dCksZi5kZWZhdWx0KHQuY29udGVudCksdS5kZWZhdWx0KHQuYnV0dG9ucyx0LmRhbmdlck1vZGUpfTt2YXIgbT1mdW5jdGlvbigpe3ZhciB0PW8uZ2V0Tm9kZShzKSxlPW8uc3RyaW5nVG9Ob2RlKHIubW9kYWxNYXJrdXApO3QuYXBwZW5kQ2hpbGQoZSl9O2UuZGVmYXVsdD1tfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigzKSxyPXtpc09wZW46ITEscHJvbWlzZTpudWxsLGFjdGlvbnM6e30sdGltZXI6bnVsbH0saT1PYmplY3QuYXNzaWduKHt9LHIpO2UucmVzZXRTdGF0ZT1mdW5jdGlvbigpe2k9T2JqZWN0LmFzc2lnbih7fSxyKX0sZS5zZXRBY3Rpb25WYWx1ZT1mdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gYShvLkNPTkZJUk1fS0VZLHQpO2Zvcih2YXIgZSBpbiB0KWEoZSx0W2VdKX07dmFyIGE9ZnVuY3Rpb24odCxlKXtpLmFjdGlvbnNbdF18fChpLmFjdGlvbnNbdF09e30pLE9iamVjdC5hc3NpZ24oaS5hY3Rpb25zW3RdLHt2YWx1ZTplfSl9O2Uuc2V0QWN0aW9uT3B0aW9uc0Zvcj1mdW5jdGlvbih0LGUpe3ZhciBuPSh2b2lkIDA9PT1lP3t9OmUpLmNsb3NlTW9kYWwsbz12b2lkIDA9PT1ufHxuO09iamVjdC5hc3NpZ24oaS5hY3Rpb25zW3RdLHtjbG9zZU1vZGFsOm99KX0sZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxpPW4oMCksYT1pLmRlZmF1bHQuT1ZFUkxBWSxzPWkuZGVmYXVsdC5TSE9XX01PREFMLGM9aS5kZWZhdWx0LkJVVFRPTixsPWkuZGVmYXVsdC5CVVRUT05fTE9BRElORyx1PW4oNSk7ZS5vcGVuTW9kYWw9ZnVuY3Rpb24oKXtvLmdldE5vZGUoYSkuY2xhc3NMaXN0LmFkZChzKSx1LmRlZmF1bHQuaXNPcGVuPSEwfTt2YXIgZj1mdW5jdGlvbigpe28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QucmVtb3ZlKHMpLHUuZGVmYXVsdC5pc09wZW49ITF9O2Uub25BY3Rpb249ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ci5DQU5DRUxfS0VZKTt2YXIgZT11LmRlZmF1bHQuYWN0aW9uc1t0XSxuPWUudmFsdWU7aWYoITE9PT1lLmNsb3NlTW9kYWwpe3ZhciBpPWMrXCItLVwiK3Q7by5nZXROb2RlKGkpLmNsYXNzTGlzdC5hZGQobCl9ZWxzZSBmKCk7dS5kZWZhdWx0LnByb21pc2UucmVzb2x2ZShuKX0sZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5hc3NpZ24oe30sdS5kZWZhdWx0KTtyZXR1cm4gZGVsZXRlIHQucHJvbWlzZSxkZWxldGUgdC50aW1lcix0fSxlLnN0b3BMb2FkaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYyksZT0wO2U8dC5sZW5ndGg7ZSsrKXt0W2VdLmNsYXNzTGlzdC5yZW1vdmUobCl9fX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2godCl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX10LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2VldEFsZXJ0PW4oOSl9KS5jYWxsKGUsbig3KSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7dC5leHBvcnRzPWUuc3dhbD1uKDEwKX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm4oMTEpLG4oMTYpO3ZhciBvPW4oMjMpLmRlZmF1bHQ7dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDEyKTtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1t0LmksbyxcIlwiXV0pO3ZhciByPXtpbnNlcnRBdDpcInRvcFwifTtyLnRyYW5zZm9ybT12b2lkIDA7bigxNCkobyxyKTtvLmxvY2FscyYmKHQuZXhwb3J0cz1vLmxvY2Fscyl9LGZ1bmN0aW9uKHQsZSxuKXtlPXQuZXhwb3J0cz1uKDEzKSh2b2lkIDApLGUucHVzaChbdC5pLCcuc3dhbC1pY29uLS1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41czthbmltYXRpb246YW5pbWF0ZUVycm9ySWNvbiAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX3gtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXM7YW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmV7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjVweDt3aWR0aDo0N3B4O2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtkaXNwbGF5OmJsb2NrO3RvcDozN3B4O2JvcmRlci1yYWRpdXM6MnB4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1sZWZ0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bGVmdDoxN3B4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1yaWdodHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7cmlnaHQ6MTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19LnN3YWwtaWNvbi0td2FybmluZ3tib3JkZXItY29sb3I6I2Y4YmI4Njstd2Via2l0LWFuaW1hdGlvbjpwdWxzZVdhcm5pbmcgLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGU7YW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZX0uc3dhbC1pY29uLS13YXJuaW5nX19ib2R5e3dpZHRoOjVweDtoZWlnaHQ6NDdweDt0b3A6MTBweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHksLnN3YWwtaWNvbi0td2FybmluZ19fZG90e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2Y4YmI4Nn0uc3dhbC1pY29uLS13YXJuaW5nX19kb3R7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTRweDtib3R0b206LTExcHh9QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19QGtleWZyYW1lcyBwdWxzZVdhcm5pbmd7MCV7Ym9yZGVyLWNvbG9yOiNmOGQ0ODZ9dG97Ym9yZGVyLWNvbG9yOiNmOGJiODZ9fS5zd2FsLWljb24tLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwtaWNvbi0tc3VjY2VzczphZnRlciwuc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtjb250ZW50OlwiXCI7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NjBweDtoZWlnaHQ6MTIwcHg7YmFja2dyb3VuZDojZmZmOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2VzczpiZWZvcmV7Ym9yZGVyLXJhZGl1czoxMjBweCAwIDAgMTIwcHg7dG9wOi03cHg7bGVmdDotMzNweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweH0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVye2JvcmRlci1yYWRpdXM6MCAxMjBweCAxMjBweCAwO3RvcDotMTFweDtsZWZ0OjMwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7dHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7LXdlYmtpdC1hbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjthbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbn0uc3dhbC1pY29uLS1zdWNjZXNzX19yaW5ne3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyOjRweCBzb2xpZCBoc2xhKDk4LDU1JSw2OSUsLjIpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaXppbmc6Y29udGVudC1ib3g7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNHB4O3RvcDotNHB4O3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19oaWRlLWNvcm5lcnN7d2lkdGg6NXB4O2hlaWdodDo5MHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjI4cHg7dG9wOjhweDt6LWluZGV4OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmV7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODY7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjJ9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZS0tdGlwe3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1c30uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS1sb25ne3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXN9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzVGlwezAle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NTQle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NzAle3dpZHRoOjUwcHg7bGVmdDotOHB4O3RvcDozN3B4fTg0JXt3aWR0aDoxN3B4O2xlZnQ6MjFweDt0b3A6NDhweH10b3t3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDVweH19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX0uc3dhbC1pY29uLS1pbmZve2JvcmRlci1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YmVmb3Jle3dpZHRoOjVweDtoZWlnaHQ6MjlweDtib3R0b206MTdweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLWluZm86YWZ0ZXIsLnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2M5ZGFlMX0uc3dhbC1pY29uLS1pbmZvOmFmdGVye3dpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0Oi0zcHg7dG9wOjE5cHh9LnN3YWwtaWNvbnt3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlci13aWR0aDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6NTAlO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O21hcmdpbjoyMHB4IGF1dG99LnN3YWwtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjMycHh9LnN3YWwtaWNvbi0tY3VzdG9te3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowfS5zd2FsLWljb24gaW1ne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uc3dhbC10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC42NSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEzcHggMTZweDtmb250LXNpemU6MjdweDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTowfS5zd2FsLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MjZweH0uc3dhbC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWJvdHRvbTowfS5zd2FsLXRpdGxlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxM3B4fS5zd2FsLXRleHR7Zm9udC1zaXplOjE2cHg7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bm9uZTtsaW5lLWhlaWdodDpub3JtYWw7dmVydGljYWwtYWxpZ246dG9wO3RleHQtYWxpZ246bGVmdDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjAgMTBweDtmb250LXdlaWdodDo0MDA7Y29sb3I6cmdiYSgwLDAsMCwuNjQpO21heC13aWR0aDpjYWxjKDEwMCUgLSAyMHB4KTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym94LXNpemluZzpib3JkZXItYm94fS5zd2FsLXRleHQ6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo0NXB4fS5zd2FsLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjQ1cHh9LnN3YWwtZm9vdGVye3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy10b3A6MTNweDttYXJnaW4tdG9wOjEzcHg7cGFkZGluZzoxM3B4IDE2cHg7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zd2FsLWJ1dHRvbi1jb250YWluZXJ7bWFyZ2luOjVweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojN2NkMWY5O2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpub25lO2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMjRweDttYXJnaW46MDtjdXJzb3I6cG9pbnRlcn0uc3dhbC1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc4Y2JmMn0uc3dhbC1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzcwYmNlMH0uc3dhbC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoNDMsMTE0LDE2NSwuMjkpfS5zd2FsLWJ1dHRvbltkaXNhYmxlZF17b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH0uc3dhbC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwtYnV0dG9uLS1jYW5jZWx7Y29sb3I6IzU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWZ9LnN3YWwtYnV0dG9uLS1jYW5jZWw6bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlOH0uc3dhbC1idXR0b24tLWNhbmNlbDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkN2Q3fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTE2LDEzNiwxNTAsLjI5KX0uc3dhbC1idXR0b24tLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNlNjQ5NDJ9LnN3YWwtYnV0dG9uLS1kYW5nZXI6bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RmNDc0MH0uc3dhbC1idXR0b24tLWRhbmdlcjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojY2Y0MjNifS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTY1LDQzLDQzLC4yOSl9LnN3YWwtY29udGVudHtwYWRkaW5nOjAgMjBweDttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOm1lZGl1bX0uc3dhbC1jb250ZW50Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbToyMHB4fS5zd2FsLWNvbnRlbnRfX2lucHV0LC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6bm9uZTtmb250LXNpemU6MTRweDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTQpO3BhZGRpbmc6MTBweCAxM3B4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yc30uc3dhbC1jb250ZW50X19pbnB1dDpmb2N1cywuc3dhbC1jb250ZW50X190ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiM2ZGI4ZmZ9LnN3YWwtY29udGVudF9fdGV4dGFyZWF7cmVzaXplOnZlcnRpY2FsfS5zd2FsLWJ1dHRvbi0tbG9hZGluZ3tjb2xvcjp0cmFuc3BhcmVudH0uc3dhbC1idXR0b24tLWxvYWRpbmd+LnN3YWwtYnV0dG9uX19sb2FkZXJ7b3BhY2l0eToxfS5zd2FsLWJ1dHRvbl9fbG9hZGVye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDphdXRvO3dpZHRoOjQzcHg7ei1pbmRleDoyO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjB9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2lkdGg6OXB4O2hlaWdodDo5cHg7cGFkZGluZzowO2JvcmRlcjpub25lO21hcmdpbjoycHg7b3BhY2l0eTouNDtib3JkZXItcmFkaXVzOjdweDtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC45KTt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlO2FuaW1hdGlvbjpzd2FsLWxvYWRpbmctYW5pbSAxcyBpbmZpbml0ZX0uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4xNXM7YW5pbWF0aW9uLWRlbGF5Oi4xNXN9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2Om50aC1jaGlsZCgzbiszKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouM3M7YW5pbWF0aW9uLWRlbGF5Oi4zc31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fUBrZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fS5zd2FsLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjA7b3ZlcmZsb3cteTphdXRvO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCk7ei1pbmRleDoxMDAwMDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzfS5zd2FsLW92ZXJsYXk6YmVmb3Jle2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2hlaWdodDoxMDAlfS5zd2FsLW92ZXJsYXktLXNob3ctbW9kYWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbCAuc3dhbC1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hbmltYXRpb246c2hvd1N3ZWV0QWxlcnQgLjNzO2FuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5zd2FsLW1vZGFse3dpZHRoOjQ3OHB4O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjVweDtwb3NpdGlvbjpzdGF0aWM7bWFyZ2luOjIwcHggYXV0bztkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt6LWluZGV4OjEwMDAxO3RyYW5zaXRpb246b3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msb3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzfUBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXsuc3dhbC1tb2RhbHt3aWR0aDpjYWxjKDEwMCUgLSAyMHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fScsXCJcIl0pfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlKXt2YXIgbj10WzFdfHxcIlwiLHI9dFszXTtpZighcilyZXR1cm4gbjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgaT1vKHIpO3JldHVybltuXS5jb25jYXQoci5zb3VyY2VzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K3QrXCIgKi9cIn0pKS5jb25jYXQoW2ldKS5qb2luKFwiXFxuXCIpfXJldHVybltuXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIG8odCl7cmV0dXJuXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodCkpKSkrXCIgKi9cIn10LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7dmFyIG89bihlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbytcIn1cIjpvfSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBvPXt9LHI9MDtyPHRoaXMubGVuZ3RoO3IrKyl7dmFyIGk9dGhpc1tyXVswXTtcIm51bWJlclwiPT10eXBlb2YgaSYmKG9baV09ITApfWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBhPXRbcl07XCJudW1iZXJcIj09dHlwZW9mIGFbMF0mJm9bYVswXV18fChuJiYhYVsyXT9hWzJdPW46biYmKGFbMl09XCIoXCIrYVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goYSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl0scj1tW28uaWRdO2lmKHIpe3IucmVmcysrO2Zvcih2YXIgaT0wO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHNbaV0oby5wYXJ0c1tpXSk7Zm9yKDtpPG8ucGFydHMubGVuZ3RoO2krKylyLnBhcnRzLnB1c2godShvLnBhcnRzW2ldLGUpKX1lbHNle2Zvcih2YXIgYT1bXSxpPTA7aTxvLnBhcnRzLmxlbmd0aDtpKyspYS5wdXNoKHUoby5wYXJ0c1tpXSxlKSk7bVtvLmlkXT17aWQ6by5pZCxyZWZzOjEscGFydHM6YX19fX1mdW5jdGlvbiByKHQsZSl7Zm9yKHZhciBuPVtdLG89e30scj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdLGE9ZS5iYXNlP2lbMF0rZS5iYXNlOmlbMF0scz1pWzFdLGM9aVsyXSxsPWlbM10sdT17Y3NzOnMsbWVkaWE6Yyxzb3VyY2VNYXA6bH07b1thXT9vW2FdLnBhcnRzLnB1c2godSk6bi5wdXNoKG9bYV09e2lkOmEscGFydHM6W3VdfSl9cmV0dXJuIG59ZnVuY3Rpb24gaSh0LGUpe3ZhciBuPXYodC5pbnNlcnRJbnRvKTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt2YXIgbz13W3cubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT10Lmluc2VydEF0KW8/by5uZXh0U2libGluZz9uLmluc2VydEJlZm9yZShlLG8ubmV4dFNpYmxpbmcpOm4uYXBwZW5kQ2hpbGQoZSk6bi5pbnNlcnRCZWZvcmUoZSxuLmZpcnN0Q2hpbGQpLHcucHVzaChlKTtlbHNle2lmKFwiYm90dG9tXCIhPT10Lmluc2VydEF0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtuLmFwcGVuZENoaWxkKGUpfX1mdW5jdGlvbiBhKHQpe2lmKG51bGw9PT10LnBhcmVudE5vZGUpcmV0dXJuITE7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpO3ZhciBlPXcuaW5kZXhPZih0KTtlPj0wJiZ3LnNwbGljZShlLDEpfWZ1bmN0aW9uIHModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLGwoZSx0LmF0dHJzKSxpKHQsZSksZX1mdW5jdGlvbiBjKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLHQuYXR0cnMucmVsPVwic3R5bGVzaGVldFwiLGwoZSx0LmF0dHJzKSxpKHQsZSksZX1mdW5jdGlvbiBsKHQsZSl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXt0LnNldEF0dHJpYnV0ZShuLGVbbl0pfSl9ZnVuY3Rpb24gdSh0LGUpe3ZhciBuLG8scixpO2lmKGUudHJhbnNmb3JtJiZ0LmNzcyl7aWYoIShpPWUudHJhbnNmb3JtKHQuY3NzKSkpcmV0dXJuIGZ1bmN0aW9uKCl7fTt0LmNzcz1pfWlmKGUuc2luZ2xldG9uKXt2YXIgbD1oKys7bj1nfHwoZz1zKGUpKSxvPWYuYmluZChudWxsLG4sbCwhMSkscj1mLmJpbmQobnVsbCxuLGwsITApfWVsc2UgdC5zb3VyY2VNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgQmxvYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYT8obj1jKGUpLG89cC5iaW5kKG51bGwsbixlKSxyPWZ1bmN0aW9uKCl7YShuKSxuLmhyZWYmJlVSTC5yZXZva2VPYmplY3RVUkwobi5ocmVmKX0pOihuPXMoZSksbz1kLmJpbmQobnVsbCxuKSxyPWZ1bmN0aW9uKCl7YShuKX0pO3JldHVybiBvKHQpLGZ1bmN0aW9uKGUpe2lmKGUpe2lmKGUuY3NzPT09dC5jc3MmJmUubWVkaWE9PT10Lm1lZGlhJiZlLnNvdXJjZU1hcD09PXQuc291cmNlTWFwKXJldHVybjtvKHQ9ZSl9ZWxzZSByKCl9fWZ1bmN0aW9uIGYodCxlLG4sbyl7dmFyIHI9bj9cIlwiOm8uY3NzO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD14KGUscik7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyKSxhPXQuY2hpbGROb2RlczthW2VdJiZ0LnJlbW92ZUNoaWxkKGFbZV0pLGEubGVuZ3RoP3QuaW5zZXJ0QmVmb3JlKGksYVtlXSk6dC5hcHBlbmRDaGlsZChpKX19ZnVuY3Rpb24gZCh0LGUpe3ZhciBuPWUuY3NzLG89ZS5tZWRpYTtpZihvJiZ0LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbyksdC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PW47ZWxzZXtmb3IoO3QuZmlyc3RDaGlsZDspdC5yZW1vdmVDaGlsZCh0LmZpcnN0Q2hpbGQpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfX1mdW5jdGlvbiBwKHQsZSxuKXt2YXIgbz1uLmNzcyxyPW4uc291cmNlTWFwLGk9dm9pZCAwPT09ZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHMmJnI7KGUuY29udmVydFRvQWJzb2x1dGVVcmxzfHxpKSYmKG89eShvKSksciYmKG8rPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyKSkpKStcIiAqL1wiKTt2YXIgYT1uZXcgQmxvYihbb10se3R5cGU6XCJ0ZXh0L2Nzc1wifSkscz10LmhyZWY7dC5ocmVmPVVSTC5jcmVhdGVPYmplY3RVUkwoYSkscyYmVVJMLnJldm9rZU9iamVjdFVSTChzKX12YXIgbT17fSxiPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1lJiYoZT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKSksZX19KGZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9ifSksdj1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHZvaWQgMD09PWVbbl0mJihlW25dPXQuY2FsbCh0aGlzLG4pKSxlW25dfX0oZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9KSxnPW51bGwsaD0wLHc9W10seT1uKDE1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO2U9ZXx8e30sZS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgZS5hdHRycz9lLmF0dHJzOnt9LGUuc2luZ2xldG9ufHwoZS5zaW5nbGV0b249YigpKSxlLmluc2VydEludG98fChlLmluc2VydEludG89XCJoZWFkXCIpLGUuaW5zZXJ0QXR8fChlLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBuPXIodCxlKTtyZXR1cm4gbyhuLGUpLGZ1bmN0aW9uKHQpe2Zvcih2YXIgaT1bXSxhPTA7YTxuLmxlbmd0aDthKyspe3ZhciBzPW5bYV0sYz1tW3MuaWRdO2MucmVmcy0tLGkucHVzaChjKX1pZih0KXtvKHIodCxlKSxlKX1mb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIGM9aVthXTtpZigwPT09Yy5yZWZzKXtmb3IodmFyIGw9MDtsPGMucGFydHMubGVuZ3RoO2wrKyljLnBhcnRzW2xdKCk7ZGVsZXRlIG1bYy5pZF19fX19O3ZhciB4PWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIGZ1bmN0aW9uKGUsbil7cmV0dXJuIHRbZV09bix0LmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmxvY2F0aW9uO2lmKCFlKXRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO2lmKCF0fHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gdDt2YXIgbj1lLnByb3RvY29sK1wiLy9cIitlLmhvc3Qsbz1uK2UucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLFwiL1wiKTtyZXR1cm4gdC5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSxmdW5jdGlvbih0LGUpe3ZhciByPWUudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KS5yZXBsYWNlKC9eJyguKiknJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pO2lmKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QocikpcmV0dXJuIHQ7dmFyIGk7cmV0dXJuIGk9MD09PXIuaW5kZXhPZihcIi8vXCIpP3I6MD09PXIuaW5kZXhPZihcIi9cIik/bityOm8rci5yZXBsYWNlKC9eXFwuXFwvLyxcIlwiKSxcInVybChcIitKU09OLnN0cmluZ2lmeShpKStcIilcIn0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTcpO1widW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fHdpbmRvdy5Qcm9taXNlfHwod2luZG93LlByb21pc2U9byksbigyMSksU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc3x8KFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXM9ZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgZSYmKGU9MCksIShlK3QubGVuZ3RoPnRoaXMubGVuZ3RoKSYmLTEhPT10aGlzLmluZGV4T2YodCxlKX0pLEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc3x8T2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxcImluY2x1ZGVzXCIse3ZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7dmFyIG49T2JqZWN0KHRoaXMpLG89bi5sZW5ndGg+Pj4wO2lmKDA9PT1vKXJldHVybiExO2Zvcih2YXIgcj0wfGUsaT1NYXRoLm1heChyPj0wP3I6by1NYXRoLmFicyhyKSwwKTtpPG87KXtpZihmdW5jdGlvbih0LGUpe3JldHVybiB0PT09ZXx8XCJudW1iZXJcIj09dHlwZW9mIHQmJlwibnVtYmVyXCI9PXR5cGVvZiBlJiZpc05hTih0KSYmaXNOYU4oZSl9KG5baV0sdCkpcmV0dXJuITA7aSsrfXJldHVybiExfX0pLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJmZ1bmN0aW9uKHQpe3QuZm9yRWFjaChmdW5jdGlvbih0KXt0Lmhhc093blByb3BlcnR5KFwicmVtb3ZlXCIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInJlbW92ZVwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3RoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKX19KX0pfShbRWxlbWVudC5wcm90b3R5cGUsQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihuKXtmdW5jdGlvbiBvKCl7fWZ1bmN0aW9uIHIodCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt0LmFwcGx5KGUsYXJndW1lbnRzKX19ZnVuY3Rpb24gaSh0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPTAsdGhpcy5faGFuZGxlZD0hMSx0aGlzLl92YWx1ZT12b2lkIDAsdGhpcy5fZGVmZXJyZWRzPVtdLGYodCx0aGlzKX1mdW5jdGlvbiBhKHQsZSl7Zm9yKDszPT09dC5fc3RhdGU7KXQ9dC5fdmFsdWU7aWYoMD09PXQuX3N0YXRlKXJldHVybiB2b2lkIHQuX2RlZmVycmVkcy5wdXNoKGUpO3QuX2hhbmRsZWQ9ITAsaS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt2YXIgbj0xPT09dC5fc3RhdGU/ZS5vbkZ1bGZpbGxlZDplLm9uUmVqZWN0ZWQ7aWYobnVsbD09PW4pcmV0dXJuIHZvaWQoMT09PXQuX3N0YXRlP3M6YykoZS5wcm9taXNlLHQuX3ZhbHVlKTt2YXIgbzt0cnl7bz1uKHQuX3ZhbHVlKX1jYXRjaCh0KXtyZXR1cm4gdm9pZCBjKGUucHJvbWlzZSx0KX1zKGUucHJvbWlzZSxvKX0pfWZ1bmN0aW9uIHModCxlKXt0cnl7aWYoZT09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciBuPWUudGhlbjtpZihlIGluc3RhbmNlb2YgaSlyZXR1cm4gdC5fc3RhdGU9Myx0Ll92YWx1ZT1lLHZvaWQgbCh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiB2b2lkIGYocihuLGUpLHQpfXQuX3N0YXRlPTEsdC5fdmFsdWU9ZSxsKHQpfWNhdGNoKGUpe2ModCxlKX19ZnVuY3Rpb24gYyh0LGUpe3QuX3N0YXRlPTIsdC5fdmFsdWU9ZSxsKHQpfWZ1bmN0aW9uIGwodCl7Mj09PXQuX3N0YXRlJiYwPT09dC5fZGVmZXJyZWRzLmxlbmd0aCYmaS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt0Ll9oYW5kbGVkfHxpLl91bmhhbmRsZWRSZWplY3Rpb25Gbih0Ll92YWx1ZSl9KTtmb3IodmFyIGU9MCxuPXQuX2RlZmVycmVkcy5sZW5ndGg7ZTxuO2UrKylhKHQsdC5fZGVmZXJyZWRzW2VdKTt0Ll9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiB1KHQsZSxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLnByb21pc2U9bn1mdW5jdGlvbiBmKHQsZSl7dmFyIG49ITE7dHJ5e3QoZnVuY3Rpb24odCl7bnx8KG49ITAscyhlLHQpKX0sZnVuY3Rpb24odCl7bnx8KG49ITAsYyhlLHQpKX0pfWNhdGNoKHQpe2lmKG4pcmV0dXJuO249ITAsYyhlLHQpfX12YXIgZD1zZXRUaW1lb3V0O2kucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0saS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe3ZhciBuPW5ldyB0aGlzLmNvbnN0cnVjdG9yKG8pO3JldHVybiBhKHRoaXMsbmV3IHUodCxlLG4pKSxufSxpLmFsbD1mdW5jdGlvbih0KXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBvKGksYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBzPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXJldHVybiB2b2lkIHMuY2FsbChhLGZ1bmN0aW9uKHQpe28oaSx0KX0sbil9ZVtpXT1hLDA9PS0tciYmdChlKX1jYXRjaCh0KXtuKHQpfX1pZigwPT09ZS5sZW5ndGgpcmV0dXJuIHQoW10pO2Zvcih2YXIgcj1lLmxlbmd0aCxpPTA7aTxlLmxlbmd0aDtpKyspbyhpLGVbaV0pfSl9LGkucmVzb2x2ZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQuY29uc3RydWN0b3I9PT1pP3Q6bmV3IGkoZnVuY3Rpb24oZSl7ZSh0KX0pfSxpLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24oZSxuKXtuKHQpfSl9LGkucmFjZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24oZSxuKXtmb3IodmFyIG89MCxyPXQubGVuZ3RoO288cjtvKyspdFtvXS50aGVuKGUsbil9KX0saS5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZnVuY3Rpb24odCl7ZSh0KX18fGZ1bmN0aW9uKHQpe2QodCwwKX0saS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIix0KX0saS5fc2V0SW1tZWRpYXRlRm49ZnVuY3Rpb24odCl7aS5faW1tZWRpYXRlRm49dH0saS5fc2V0VW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7aS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49dH0sdm9pZCAwIT09dCYmdC5leHBvcnRzP3QuZXhwb3J0cz1pOm4uUHJvbWlzZXx8KG4uUHJvbWlzZT1pKX0odGhpcyl9KS5jYWxsKGUsbigxOCkuc2V0SW1tZWRpYXRlKX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXt0aGlzLl9pZD10LHRoaXMuX2NsZWFyRm49ZX12YXIgcj1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZS5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBvKHIuY2FsbChzZXRUaW1lb3V0LHdpbmRvdyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LGUuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG8oci5jYWxsKHNldEludGVydmFsLHdpbmRvdyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSxlLmNsZWFyVGltZW91dD1lLmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24odCl7dCYmdC5jbG9zZSgpfSxvLnByb3RvdHlwZS51bnJlZj1vLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LG8ucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdyx0aGlzLl9pZCl9LGUuZW5yb2xsPWZ1bmN0aW9uKHQsZSl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpLHQuX2lkbGVUaW1lb3V0PWV9LGUudW5lbnJvbGw9ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpLHQuX2lkbGVUaW1lb3V0PS0xfSxlLl91bnJlZkFjdGl2ZT1lLmFjdGl2ZT1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCk7dmFyIGU9dC5faWRsZVRpbWVvdXQ7ZT49MCYmKHQuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe3QuX29uVGltZW91dCYmdC5fb25UaW1lb3V0KCl9LGUpKX0sbigxOSksZS5zZXRJbW1lZGlhdGU9c2V0SW1tZWRpYXRlLGUuY2xlYXJJbW1lZGlhdGU9Y2xlYXJJbW1lZGlhdGV9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24odCxlKXshZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJih0PW5ldyBGdW5jdGlvbihcIlwiK3QpKTtmb3IodmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksbj0wO248ZS5sZW5ndGg7bisrKWVbbl09YXJndW1lbnRzW24rMV07dmFyIG89e2NhbGxiYWNrOnQsYXJnczplfTtyZXR1cm4gbFtjXT1vLHMoYyksYysrfWZ1bmN0aW9uIHIodCl7ZGVsZXRlIGxbdF19ZnVuY3Rpb24gaSh0KXt2YXIgZT10LmNhbGxiYWNrLG89dC5hcmdzO3N3aXRjaChvLmxlbmd0aCl7Y2FzZSAwOmUoKTticmVhaztjYXNlIDE6ZShvWzBdKTticmVhaztjYXNlIDI6ZShvWzBdLG9bMV0pO2JyZWFrO2Nhc2UgMzplKG9bMF0sb1sxXSxvWzJdKTticmVhaztkZWZhdWx0OmUuYXBwbHkobixvKX19ZnVuY3Rpb24gYSh0KXtpZih1KXNldFRpbWVvdXQoYSwwLHQpO2Vsc2V7dmFyIGU9bFt0XTtpZihlKXt1PSEwO3RyeXtpKGUpfWZpbmFsbHl7cih0KSx1PSExfX19fWlmKCF0LnNldEltbWVkaWF0ZSl7dmFyIHMsYz0xLGw9e30sdT0hMSxmPXQuZG9jdW1lbnQsZD1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtkPWQmJmQuc2V0VGltZW91dD9kOnQsXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHQucHJvY2Vzcyk/ZnVuY3Rpb24oKXtzPWZ1bmN0aW9uKHQpe2UubmV4dFRpY2soZnVuY3Rpb24oKXthKHQpfSl9fSgpOmZ1bmN0aW9uKCl7aWYodC5wb3N0TWVzc2FnZSYmIXQuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsbj10Lm9ubWVzc2FnZTtyZXR1cm4gdC5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSx0LnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHQub25tZXNzYWdlPW4sZX19KCk/ZnVuY3Rpb24oKXt2YXIgZT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLG49ZnVuY3Rpb24obil7bi5zb3VyY2U9PT10JiZcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYwPT09bi5kYXRhLmluZGV4T2YoZSkmJmEoK24uZGF0YS5zbGljZShlLmxlbmd0aCkpfTt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixuKSxzPWZ1bmN0aW9uKG4pe3QucG9zdE1lc3NhZ2UoZStuLFwiKlwiKX19KCk6dC5NZXNzYWdlQ2hhbm5lbD9mdW5jdGlvbigpe3ZhciB0PW5ldyBNZXNzYWdlQ2hhbm5lbDt0LnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbih0KXthKHQuZGF0YSl9LHM9ZnVuY3Rpb24oZSl7dC5wb3J0Mi5wb3N0TWVzc2FnZShlKX19KCk6ZiYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGYuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciB0PWYuZG9jdW1lbnRFbGVtZW50O3M9ZnVuY3Rpb24oZSl7dmFyIG49Zi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7YShlKSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQucmVtb3ZlQ2hpbGQobiksbj1udWxsfSx0LmFwcGVuZENoaWxkKG4pfX0oKTpmdW5jdGlvbigpe3M9ZnVuY3Rpb24odCl7c2V0VGltZW91dChhLDAsdCl9fSgpLGQuc2V0SW1tZWRpYXRlPW8sZC5jbGVhckltbWVkaWF0ZT1yfX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09dD90aGlzOnQ6c2VsZil9KS5jYWxsKGUsbig3KSxuKDIwKSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gbygpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKHQpe2lmKHU9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKHU9PT1ufHwhdSkmJnNldFRpbWVvdXQpcmV0dXJuIHU9c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiB1KHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiB1LmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiB1LmNhbGwodGhpcyx0LDApfX19ZnVuY3Rpb24gaSh0KXtpZihmPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQodCk7aWYoKGY9PT1vfHwhZikmJmNsZWFyVGltZW91dClyZXR1cm4gZj1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KHQpO3RyeXtyZXR1cm4gZih0KX1jYXRjaChlKXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiBmLmNhbGwodGhpcyx0KX19fWZ1bmN0aW9uIGEoKXtiJiZwJiYoYj0hMSxwLmxlbmd0aD9tPXAuY29uY2F0KG0pOnY9LTEsbS5sZW5ndGgmJnMoKSl9ZnVuY3Rpb24gcygpe2lmKCFiKXt2YXIgdD1yKGEpO2I9ITA7Zm9yKHZhciBlPW0ubGVuZ3RoO2U7KXtmb3IocD1tLG09W107Kyt2PGU7KXAmJnBbdl0ucnVuKCk7dj0tMSxlPW0ubGVuZ3RofXA9bnVsbCxiPSExLGkodCl9fWZ1bmN0aW9uIGModCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBsKCl7fXZhciB1LGYsZD10LmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e3U9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2godCl7dT1ufXRyeXtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6b31jYXRjaCh0KXtmPW99fSgpO3ZhciBwLG09W10sYj0hMSx2PS0xO2QubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTttLnB1c2gobmV3IGModCxlKSksMSE9PW0ubGVuZ3RofHxifHxyKHMpfSxjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxkLnRpdGxlPVwiYnJvd3NlclwiLGQuYnJvd3Nlcj0hMCxkLmVudj17fSxkLmFyZ3Y9W10sZC52ZXJzaW9uPVwiXCIsZC52ZXJzaW9ucz17fSxkLm9uPWwsZC5hZGRMaXN0ZW5lcj1sLGQub25jZT1sLGQub2ZmPWwsZC5yZW1vdmVMaXN0ZW5lcj1sLGQucmVtb3ZlQWxsTGlzdGVuZXJzPWwsZC5lbWl0PWwsZC5wcmVwZW5kTGlzdGVuZXI9bCxkLnByZXBlbmRPbmNlTGlzdGVuZXI9bCxkLmxpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm5bXX0sZC5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxkLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxkLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0sZC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24oMjIpLnBvbHlmaWxsKCl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQsZSl7aWYodm9pZCAwPT09dHx8bnVsbD09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdFwiKTtmb3IodmFyIG49T2JqZWN0KHQpLG89MTtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXt2YXIgcj1hcmd1bWVudHNbb107aWYodm9pZCAwIT09ciYmbnVsbCE9PXIpZm9yKHZhciBpPU9iamVjdC5rZXlzKE9iamVjdChyKSksYT0wLHM9aS5sZW5ndGg7YTxzO2ErKyl7dmFyIGM9aVthXSxsPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixjKTt2b2lkIDAhPT1sJiZsLmVudW1lcmFibGUmJihuW2NdPXJbY10pfX1yZXR1cm4gbn1mdW5jdGlvbiByKCl7T2JqZWN0LmFzc2lnbnx8T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCxcImFzc2lnblwiLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpvfSl9dC5leHBvcnRzPXthc3NpZ246byxwb2x5ZmlsbDpyfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMjQpLHI9big2KSxpPW4oNSksYT1uKDM2KSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe3ZhciBuPWEuZ2V0T3B0cy5hcHBseSh2b2lkIDAsdCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsZSl7aS5kZWZhdWx0LnByb21pc2U9e3Jlc29sdmU6dCxyZWplY3Q6ZX0sby5kZWZhdWx0KG4pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLm9wZW5Nb2RhbCgpfSl9KX19O3MuY2xvc2U9ci5vbkFjdGlvbixzLmdldFN0YXRlPXIuZ2V0U3RhdGUscy5zZXRBY3Rpb25WYWx1ZT1pLnNldEFjdGlvblZhbHVlLHMuc3RvcExvYWRpbmc9ci5zdG9wTG9hZGluZyxzLnNldERlZmF1bHRzPWEuc2V0RGVmYXVsdHMsZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigwKSxpPXIuZGVmYXVsdC5NT0RBTCxhPW4oNCkscz1uKDM0KSxjPW4oMzUpLGw9bigxKTtlLmluaXQ9ZnVuY3Rpb24odCl7by5nZXROb2RlKGkpfHwoZG9jdW1lbnQuYm9keXx8bC50aHJvd0VycihcIllvdSBjYW4gb25seSB1c2UgU3dlZXRBbGVydCBBRlRFUiB0aGUgRE9NIGhhcyBsb2FkZWQhXCIpLHMuZGVmYXVsdCgpLGEuZGVmYXVsdCgpKSxhLmluaXRNb2RhbENvbnRlbnQodCksYy5kZWZhdWx0KHQpfSxlLmRlZmF1bHQ9ZS5pbml0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5NT0RBTDtlLm1vZGFsTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPjwvZGl2PicsZS5kZWZhdWx0PWUubW9kYWxNYXJrdXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk9WRVJMQVksaT0nPGRpdiBcXG4gICAgY2xhc3M9XCInK3IrJ1wiXFxuICAgIHRhYkluZGV4PVwiLTFcIj5cXG4gIDwvZGl2Pic7ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LklDT047ZS5lcnJvckljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS1lcnJvclwiLGU9dCtcIl9fbGluZVwiO3JldHVybidcXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX194LW1hcmtcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLWxlZnRcIj48L3NwYW4+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK2UrXCIgXCIrZSsnLS1yaWdodFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAnfSxlLndhcm5pbmdJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0td2FybmluZ1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fYm9keVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJyt0KydfX2RvdFwiPjwvc3Bhbj5cXG4gICAgPC9zcGFuPlxcbiAgJ30sZS5zdWNjZXNzSWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLXN1Y2Nlc3NcIjtyZXR1cm4nXFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0K1wiX19saW5lIFwiK3QrJ19fbGluZS0tbG9uZ1wiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS10aXBcIj48L3NwYW4+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19fcmluZ1wiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX2hpZGUtY29ybmVyc1wiPjwvZGl2PlxcbiAgJ319LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LkNPTlRFTlQ7ZS5jb250ZW50TWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQlVUVE9OX0NPTlRBSU5FUixpPW8uZGVmYXVsdC5CVVRUT04sYT1vLmRlZmF1bHQuQlVUVE9OX0xPQURFUjtlLmJ1dHRvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj5cXG5cXG4gICAgPGJ1dHRvblxcbiAgICAgIGNsYXNzPVwiJytpKydcIlxcbiAgICA+PC9idXR0b24+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK2ErJ1wiPlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDQpLHI9bigyKSxpPW4oMCksYT1pLmRlZmF1bHQuSUNPTixzPWkuZGVmYXVsdC5JQ09OX0NVU1RPTSxjPVtcImVycm9yXCIsXCJ3YXJuaW5nXCIsXCJzdWNjZXNzXCIsXCJpbmZvXCJdLGw9e2Vycm9yOnIuZXJyb3JJY29uTWFya3VwKCksd2FybmluZzpyLndhcm5pbmdJY29uTWFya3VwKCksc3VjY2VzczpyLnN1Y2Nlc3NJY29uTWFya3VwKCl9LHU9ZnVuY3Rpb24odCxlKXt2YXIgbj1hK1wiLS1cIit0O2UuY2xhc3NMaXN0LmFkZChuKTt2YXIgbz1sW3RdO28mJihlLmlubmVySFRNTD1vKX0sZj1mdW5jdGlvbih0LGUpe2UuY2xhc3NMaXN0LmFkZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO24uc3JjPXQsZS5hcHBlbmRDaGlsZChuKX0sZD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1vLmluamVjdEVsSW50b01vZGFsKHIuaWNvbk1hcmt1cCk7Yy5pbmNsdWRlcyh0KT91KHQsZSk6Zih0LGUpfX07ZS5kZWZhdWx0PWR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDIpLHI9big0KSxpPWZ1bmN0aW9uKHQpe25hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJBcHBsZVdlYktpdFwiKSYmKHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0Lm9mZnNldEhlaWdodCx0LnN0eWxlLmRpc3BsYXk9XCJcIil9O2UuaW5pdFRpdGxlPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoby50aXRsZU1hcmt1cCk7ZS50ZXh0Q29udGVudD10LGkoZSl9fSxlLmluaXRUZXh0PWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt0LnNwbGl0KFwiXFxuXCIpLmZvckVhY2goZnVuY3Rpb24odCxuLG8pe2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpLG48by5sZW5ndGgtMSYmZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpfSk7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChvLnRleHRNYXJrdXApO24uYXBwZW5kQ2hpbGQoZSksaShuKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oNCksaT1uKDApLGE9aS5kZWZhdWx0LkJVVFRPTixzPWkuZGVmYXVsdC5EQU5HRVJfQlVUVE9OLGM9bigzKSxsPW4oMiksdT1uKDYpLGY9big1KSxkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnRleHQsaT1lLnZhbHVlLGQ9ZS5jbGFzc05hbWUscD1lLmNsb3NlTW9kYWwsbT1vLnN0cmluZ1RvTm9kZShsLmJ1dHRvbk1hcmt1cCksYj1tLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrYSksdj1hK1wiLS1cIit0O2lmKGIuY2xhc3NMaXN0LmFkZCh2KSxkKXsoQXJyYXkuaXNBcnJheShkKT9kOmQuc3BsaXQoXCIgXCIpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RoPjB9KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2IuY2xhc3NMaXN0LmFkZCh0KX0pfW4mJnQ9PT1jLkNPTkZJUk1fS0VZJiZiLmNsYXNzTGlzdC5hZGQocyksYi50ZXh0Q29udGVudD1yO3ZhciBnPXt9O3JldHVybiBnW3RdPWksZi5zZXRBY3Rpb25WYWx1ZShnKSxmLnNldEFjdGlvbk9wdGlvbnNGb3IodCx7Y2xvc2VNb2RhbDpwfSksYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiB1Lm9uQWN0aW9uKHQpfSksbX0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXIuaW5qZWN0RWxJbnRvTW9kYWwobC5mb290ZXJNYXJrdXApO2Zvcih2YXIgbyBpbiB0KXt2YXIgaT10W29dLGE9ZChvLGksZSk7aS52aXNpYmxlJiZuLmFwcGVuZENoaWxkKGEpfTA9PT1uLmNoaWxkcmVuLmxlbmd0aCYmbi5yZW1vdmUoKX07ZS5kZWZhdWx0PXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9big0KSxpPW4oMiksYT1uKDUpLHM9big2KSxjPW4oMCksbD1jLmRlZmF1bHQuQ09OVEVOVCx1PWZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQsbj1lLnZhbHVlO2Euc2V0QWN0aW9uVmFsdWUobil9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKHQpe2lmKFwiRW50ZXJcIj09PXQua2V5KXJldHVybiBzLm9uQWN0aW9uKG8uQ09ORklSTV9LRVkpfSksc2V0VGltZW91dChmdW5jdGlvbigpe3QuZm9jdXMoKSxhLnNldEFjdGlvblZhbHVlKFwiXCIpfSwwKX0sZj1mdW5jdGlvbih0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKSxyPWwrXCJfX1wiK2U7by5jbGFzc0xpc3QuYWRkKHIpO2Zvcih2YXIgaSBpbiBuKXt2YXIgYT1uW2ldO29baV09YX1cImlucHV0XCI9PT1lJiZ1KG8pLHQuYXBwZW5kQ2hpbGQobyl9LGQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChpLmNvbnRlbnRNYXJrdXApLG49dC5lbGVtZW50LG89dC5hdHRyaWJ1dGVzO1wic3RyaW5nXCI9PXR5cGVvZiBuP2YoZSxuLG8pOmUuYXBwZW5kQ2hpbGQobil9fTtlLmRlZmF1bHQ9ZH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGk9ZnVuY3Rpb24oKXt2YXIgdD1vLnN0cmluZ1RvTm9kZShyLm92ZXJsYXlNYXJrdXApO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9O2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big1KSxyPW4oNiksaT1uKDEpLGE9bigzKSxzPW4oMCksYz1zLmRlZmF1bHQuTU9EQUwsbD1zLmRlZmF1bHQuQlVUVE9OLHU9cy5kZWZhdWx0Lk9WRVJMQVksZj1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdigpfSxkPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxnKCl9LHA9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIkVzY2FwZVwiOnJldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9fSxtPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pc3dpdGNoKHQua2V5KXtjYXNlXCJUYWJcIjpyZXR1cm4gZih0KX19LGI9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3BlbilyZXR1cm5cIlRhYlwiPT09dC5rZXkmJnQuc2hpZnRLZXk/ZCh0KTp2b2lkIDB9LHY9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUobCk7dCYmKHQudGFiSW5kZXg9MCx0LmZvY3VzKCkpfSxnPWZ1bmN0aW9uKCl7dmFyIHQ9aS5nZXROb2RlKGMpLGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2wpLG49ZS5sZW5ndGgtMSxvPWVbbl07byYmby5mb2N1cygpfSxoPWZ1bmN0aW9uKHQpe3RbdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixtKX0sdz1mdW5jdGlvbih0KXt0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsYil9LHk9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUoYyksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCk7ZS5sZW5ndGgmJihoKGUpLHcoZSkpfSx4PWZ1bmN0aW9uKHQpe2lmKGkuZ2V0Tm9kZSh1KT09PXQudGFyZ2V0KXJldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9LF89ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXROb2RlKHUpO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseCksdCYmZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4KX0saz1mdW5jdGlvbih0KXtvLmRlZmF1bHQudGltZXImJmNsZWFyVGltZW91dChvLmRlZmF1bHQudGltZXIpLHQmJihvLmRlZmF1bHQudGltZXI9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gci5vbkFjdGlvbihhLkNBTkNFTF9LRVkpfSx0KSl9LE89ZnVuY3Rpb24odCl7dC5jbG9zZU9uRXNjP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApLHQuZGFuZ2VyTW9kZT92KCk6ZygpLHkoKSxfKHQuY2xvc2VPbkNsaWNrT3V0c2lkZSksayh0LnRpbWVyKX07ZS5kZWZhdWx0PU99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxpPW4oMzcpLGE9bigzOCkscz17dGl0bGU6bnVsbCx0ZXh0Om51bGwsaWNvbjpudWxsLGJ1dHRvbnM6ci5kZWZhdWx0QnV0dG9uTGlzdCxjb250ZW50Om51bGwsY2xhc3NOYW1lOm51bGwsY2xvc2VPbkNsaWNrT3V0c2lkZTohMCxjbG9zZU9uRXNjOiEwLGRhbmdlck1vZGU6ITEsdGltZXI6bnVsbH0sYz1PYmplY3QuYXNzaWduKHt9LHMpO2Uuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7Yz1PYmplY3QuYXNzaWduKHt9LHMsdCl9O3ZhciBsPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuYnV0dG9uLG49dCYmdC5idXR0b25zO3JldHVybiB2b2lkIDAhPT1lJiZ2b2lkIDAhPT1uJiZvLnRocm93RXJyKFwiQ2Fubm90IHNldCBib3RoICdidXR0b24nIGFuZCAnYnV0dG9ucycgb3B0aW9ucyFcIiksdm9pZCAwIT09ZT97Y29uZmlybTplfTpufSx1PWZ1bmN0aW9uKHQpe3JldHVybiBvLm9yZGluYWxTdWZmaXhPZih0KzEpfSxmPWZ1bmN0aW9uKHQsZSl7by50aHJvd0Vycih1KGUpK1wiIGFyZ3VtZW50ICgnXCIrdCtcIicpIGlzIGludmFsaWRcIil9LGQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO28uaXNQbGFpbk9iamVjdChyKXx8dm9pZCAwPT09cnx8by50aHJvd0VycihcIkV4cGVjdGVkIFwiK3UobikrXCIgYXJndW1lbnQgKCdcIityK1wiJykgdG8gYmUgYSBwbGFpbiBvYmplY3RcIil9LHA9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO3ZvaWQgMCE9PXImJm8udGhyb3dFcnIoXCJVbmV4cGVjdGVkIFwiK3UobikrXCIgYXJndW1lbnQgKFwiK3IrXCIpXCIpfSxtPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXR5cGVvZiBlLGE9XCJzdHJpbmdcIj09PWkscz1lIGluc3RhbmNlb2YgRWxlbWVudDtpZihhKXtpZigwPT09bilyZXR1cm57dGV4dDplfTtpZigxPT09bilyZXR1cm57dGV4dDplLHRpdGxlOnJbMF19O2lmKDI9PT1uKXJldHVybiBkKG4scikse2ljb246ZX07ZihlLG4pfWVsc2V7aWYocyYmMD09PW4pcmV0dXJuIGQobixyKSx7Y29udGVudDplfTtpZihvLmlzUGxhaW5PYmplY3QoZSkpcmV0dXJuIHAobixyKSxlO2YoZSxuKX19O2UuZ2V0T3B0cz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTt2YXIgbj17fTt0LmZvckVhY2goZnVuY3Rpb24oZSxvKXt2YXIgcj1tKDAsZSxvLHQpO09iamVjdC5hc3NpZ24obixyKX0pO3ZhciBvPWwobik7bi5idXR0b25zPXIuZ2V0QnV0dG9uTGlzdE9wdHMobyksZGVsZXRlIG4uYnV0dG9uLG4uY29udGVudD1pLmdldENvbnRlbnRPcHRzKG4uY29udGVudCk7dmFyIHU9T2JqZWN0LmFzc2lnbih7fSxzLGMsbik7cmV0dXJuIE9iamVjdC5rZXlzKHUpLmZvckVhY2goZnVuY3Rpb24odCl7YS5ERVBSRUNBVEVEX09QVFNbdF0mJmEubG9nRGVwcmVjYXRpb24odCl9KSx1fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj17ZWxlbWVudDpcImlucHV0XCIsYXR0cmlidXRlczp7cGxhY2Vob2xkZXI6XCJcIn19O2UuZ2V0Q29udGVudE9wdHM9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIG8uaXNQbGFpbk9iamVjdCh0KT9PYmplY3QuYXNzaWduKGUsdCk6dCBpbnN0YW5jZW9mIEVsZW1lbnQ/e2VsZW1lbnQ6dH06XCJpbnB1dFwiPT09dD9yOm51bGx9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5sb2dEZXByZWNhdGlvbj1mdW5jdGlvbih0KXt2YXIgbj1lLkRFUFJFQ0FURURfT1BUU1t0XSxvPW4ub25seVJlbmFtZSxyPW4ucmVwbGFjZW1lbnQsaT1uLnN1Yk9wdGlvbixhPW4ubGluayxzPW8/XCJyZW5hbWVkXCI6XCJkZXByZWNhdGVkXCIsYz0nU3dlZXRBbGVydCB3YXJuaW5nOiBcIicrdCsnXCIgb3B0aW9uIGhhcyBiZWVuICcrcytcIi5cIjtpZihyKXtjKz1cIiBQbGVhc2UgdXNlXCIrKGk/JyBcIicraSsnXCIgaW4gJzpcIiBcIikrJ1wiJytyKydcIiBpbnN0ZWFkLid9dmFyIGw9XCJodHRwczovL3N3ZWV0YWxlcnQuanMub3JnXCI7Yys9YT9cIiBNb3JlIGRldGFpbHM6IFwiK2wrYTpcIiBNb3JlIGRldGFpbHM6IFwiK2wrXCIvZ3VpZGVzLyN1cGdyYWRpbmctZnJvbS0xeFwiLGNvbnNvbGUud2FybihjKX0sZS5ERVBSRUNBVEVEX09QVFM9e3R5cGU6e3JlcGxhY2VtZW50OlwiaWNvblwiLGxpbms6XCIvZG9jcy8jaWNvblwifSxpbWFnZVVybDp7cmVwbGFjZW1lbnQ6XCJpY29uXCIsbGluazpcIi9kb2NzLyNpY29uXCJ9LGN1c3RvbUNsYXNzOntyZXBsYWNlbWVudDpcImNsYXNzTmFtZVwiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbGFzc25hbWVcIn0saW1hZ2VTaXplOnt9LHNob3dDYW5jZWxCdXR0b246e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLGxpbms6XCIvZG9jcy8jYnV0dG9uc1wifSxzaG93Q29uZmlybUJ1dHRvbjp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjb25maXJtQnV0dG9uVGV4dDp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjb25maXJtQnV0dG9uQ29sb3I6e30sY2FuY2VsQnV0dG9uVGV4dDp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LGNsb3NlT25Db25maXJtOntyZXBsYWNlbWVudDpcImJ1dHRvblwiLHN1Yk9wdGlvbjpcImNsb3NlTW9kYWxcIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjbG9zZU9uQ2FuY2VsOntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixzdWJPcHRpb246XCJjbG9zZU1vZGFsXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LHNob3dMb2FkZXJPbkNvbmZpcm06e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wifSxhbmltYXRpb246e30saW5wdXRUeXBlOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saW5wdXRWYWx1ZTp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGlucHV0UGxhY2Vob2xkZXI6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxodG1sOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0sYWxsb3dFc2NhcGVLZXk6e3JlcGxhY2VtZW50OlwiY2xvc2VPbkVzY1wiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbG9zZW9uZXNjXCJ9LGFsbG93Q2xpY2tPdXRzaWRlOntyZXBsYWNlbWVudDpcImNsb3NlT25DbGlja091dHNpZGVcIixvbmx5UmVuYW1lOiEwLGxpbms6XCIvZG9jcy8jY2xvc2VvbmNsaWNrb3V0c2lkZVwifX19XSl9KTsiLCJpbXBvcnQgeyBQdWJTdWIsIEVWIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrcyA9ICgoKSA9PiB7XG5cdGxldCBfdGFza0xpc3QgPSBuZXcgU2V0KCk7XG5cdGxldCBfaWRDb3VudGVyID0gMTtcblxuXHRjb25zdCBfY29sdW1uTmFtZXMgPSBbXCJiYWNrbG9nXCIsIFwidG8tZG9cIiwgXCJpbi1wcm9ncmVzc1wiLCBcImRvbmVcIl07XG5cblx0bGV0IF9wcm9wZXJ0eU5hbWVzID0gW1xuXHRcdFwidGl0bGVcIixcblx0XHRcInN0YXR1c1wiLFxuXHRcdFwicHJvamVjdFwiLFxuXHRcdFwicHJpb3JpdHlcIixcblx0XHRcIm5vdGVzXCIsXG5cdFx0XCJkdWVcIixcblx0XHRcInRhZ3NcIixcblx0XTtcblxuXHRsZXQgX3ByaW9yaXRpZXMgPSBbXCJoaWdoXCIsIFwibWVkaXVtXCIsIFwibG93XCJdO1xuXG5cdGZ1bmN0aW9uIF9kYXRlU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIG91dGdvaW5nVGFza3Muc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0Y29uc3QgZGF0ZUEgPSArYS5nZXRQcm9wZXJ0aWVzKCkuZHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xuXHRcdFx0Y29uc3QgZGF0ZUIgPSArYi5nZXRQcm9wZXJ0aWVzKCkuZHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xuXHRcdFx0cmV0dXJuICFkYXRlQSA/IDEgOiBkYXRlQiAtIGRhdGVBO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2NvbHVtblNvcnQob3V0Z29pbmdUYXNrcykge1xuXHRcdHJldHVybiBfY29sdW1uTmFtZXMubWFwKChjb2x1bW5OYW1lKSA9PiBbXG5cdFx0XHRjb2x1bW5OYW1lLFxuXHRcdFx0X2RhdGVTb3J0KFxuXHRcdFx0XHRvdXRnb2luZ1Rhc2tzLmZpbHRlcihcblx0XHRcdFx0XHQodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKCkuc3RhdHVzID09PSBjb2x1bW5OYW1lXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XSk7XG5cdH1cblxuXHRmdW5jdGlvbiBfdGFza0ZhY3RvcnkoKSB7XG5cdFx0Y29uc3QgX3Rhc2sgPSB7fTtcblx0XHRjb25zdCBzZXRQcm9wZXJ0eSA9IChrZXksIHZhbHVlKSA9PiAoX3Rhc2tba2V5XSA9IHZhbHVlKTtcblx0XHRfcHJvcGVydHlOYW1lcy5mb3JFYWNoKChwcm9wKSA9PiBzZXRQcm9wZXJ0eShwcm9wLCBcIlwiKSk7XG5cdFx0Y29uc3QgZ2V0UHJvcGVydGllcyA9ICgpID0+IHtcblx0XHRcdHJldHVybiB7IC4uLl90YXNrIH07XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0UHJvcGVydGllcyxcblx0XHRcdHNldFByb3BlcnR5LFxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRUYXNrKGlucHV0VmFsdWVzQXJyYXkpIHtcblx0XHRjb25zdCBuZXdUYXNrID0gX3Rhc2tGYWN0b3J5KCk7XG5cdFx0bmV3VGFzay5zZXRQcm9wZXJ0eShcImlkXCIsIF9pZENvdW50ZXIrKyk7XG5cdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRuZXdUYXNrLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdH0pO1xuXHRcdF90YXNrTGlzdC5hZGQobmV3VGFzayk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVUYXNrcyguLi5yZW1vdmVJZHMpIHtcblx0XHRbLi4uX3Rhc2tMaXN0XS5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRpZiAocmVtb3ZlSWRzLmluY2x1ZGVzKHRhc2suZ2V0UHJvcGVydGllcygpLmlkKSkge1xuXHRcdFx0XHRfdGFza0xpc3QuZGVsZXRlKHRhc2spO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVGFzayh1cGRhdGVJZCwgaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdFsuLi5fdGFza0xpc3RdLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGlmICh1cGRhdGVJZCA9PT0gdGFzay5nZXRQcm9wZXJ0aWVzKCkuaWQpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZXNBcnJheS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0XHRcdFx0dGFzay5zZXRQcm9wZXJ0eShwYWlyWzBdLCBwYWlyWzFdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuXHRcdF90YXNrTGlzdC5jbGVhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGFza3NCeShwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBbLi4uX3Rhc2tMaXN0XS5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpW3Byb3BdID09PSB2YWx1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRTb3J0ZWRUYXNrc0J5KHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIF9jb2x1bW5Tb3J0KFxuXHRcdFx0Wy4uLl90YXNrTGlzdF0uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFByb3BlcnRpZXMoKVtwcm9wXSA9PT0gdmFsdWUpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHN1YkFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suQURELCBhZGRUYXNrKTtcblx0Y29uc3Qgc3ViUmVtb3ZlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5ERUxFVEUsIHJlbW92ZVRhc2tzKTtcblx0Y29uc3Qgc3ViVXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5VUERBVEUsIHVwZGF0ZVRhc2spO1xuXHRjb25zdCBzdWJDbGVhclRhc2tzID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5DTEVBUl9BTEwsIGNsZWFyVGFza3MpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0QWxsVGFza3M6ICgpID0+IFsuLi5fdGFza0xpc3RdLFxuXHRcdGdldFNvcnRlZFRhc2tzOiAoKSA9PiBfY29sdW1uU29ydChbLi4uX3Rhc2tMaXN0XSksXG5cdFx0Z2V0VGFza3NCeSxcblx0XHRnZXRTb3J0ZWRUYXNrc0J5LFxuXHRcdGdldENvbHVtbk5hbWVzOiAoKSA9PiBfY29sdW1uTmFtZXMsXG5cdFx0Z2V0UHJpb3JpdHlOYW1lczogKCkgPT4gX3ByaW9yaXRpZXMsXG5cdFx0Z2V0UHJvcGVydHlOYW1lczogKCkgPT4gX3Byb3BlcnR5TmFtZXMsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuXHRsZXQgX3Byb2plY3RMaXN0ID0gbmV3IFNldCgpO1xuXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdE5hbWUpIHtcblx0XHRfcHJvamVjdExpc3QuYWRkKG5ld1Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChyZW1vdmVOYW1lKSB7XG5cdFx0aWYgKF9wcm9qZWN0TGlzdC5oYXMocmVtb3ZlTmFtZSkpIHtcblx0XHRcdC8vIEdldCB0YXNrLmlkJ3MgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcHJvamVjdFxuXHRcdFx0Y29uc3QgcmVtb3ZlSWRzID0gVGFza3MuZ2V0VGFza3NCeShcInByb2plY3RcIiwgcmVtb3ZlTmFtZSkubWFwKFxuXHRcdFx0XHQodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKCkuaWRcblx0XHRcdCk7XG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgdGFza3Mgd2l0aCB0aG9zZSBpZCdzIGZyb20gX3Rhc2tMaXN0XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5UQVNLLkRFTEVURSwgLi4ucmVtb3ZlSWRzKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG5hbWUgZnJvbSBwcm9qZWN0IGxpc3Rcblx0XHRcdF9wcm9qZWN0TGlzdC5kZWxldGUocmVtb3ZlTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xlYXJQcm9qZWN0cygpIHtcblx0XHRfcHJvamVjdExpc3QuY2xlYXIoKTtcblx0fVxuXG5cdGNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlBST0pFQ1QuQURELCBhZGRQcm9qZWN0KTtcblx0Y29uc3Qgc3ViUmVtb3ZlUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5ERUxFVEUsIHJlbW92ZVByb2plY3QpO1xuXHRjb25zdCBzdWJDbGVhclByb2plY3RzID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5DTEVBUl9BTEwsIGNsZWFyUHJvamVjdHMpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0UHJvamVjdHM6ICgpID0+IFsuLi5fcHJvamVjdExpc3RdLnNvcnQoKSxcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFkZERlZmF1bHRzKCkge1xuXHRQdWJTdWIucHVibGlzaChFVi5SRVNFVC5DTEVBUl9BTEwpO1xuXHRbXCJob21lXCIsIFwiZmluYW5jZXNcIiwgXCJsZWFybmluZ1wiXS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuUFJPSkVDVC5BREQsIHByb2plY3QpO1xuXHR9KTtcblxuXHRjb25zdCBkZWZhdWx0VGFza3MgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwicGF5IGJpbGxzXCIsXG5cdFx0XHRzdGF0dXM6IFwiaW4tcHJvZ3Jlc3NcIixcblx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdHByaW9yaXR5OiBcImhpZ2hcIixcblx0XHRcdG5vdGVzOiBcInRoZSByZW50IGlzIHRvbyBkYW1uIGhpZ2hcIixcblx0XHRcdGR1ZTogXCIyMDIzLTExLTAxXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJncm9jZXJpZXNcIixcblx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0cHJvamVjdDogXCJob21lXCIsXG5cdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHRcdHRhZ3M6IFwic3RvcmVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcImZpbGUgdGF4ZXNcIixcblx0XHRcdHN0YXR1czogXCJiYWNrbG9nXCIsXG5cdFx0XHRwcm9qZWN0OiBcImZpbmFuY2VzXCIsXG5cdFx0XHRwcmlvcml0eTogXCJtZWRpdW1cIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInJlYWQgQ2hla2hvdlwiLFxuXHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdHByb2plY3Q6IFwibGVhcm5pbmdcIixcblx0XHRcdHByaW9yaXR5OiBcImxvd1wiLFxuXHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcInJlcGxhY2UgbGlnaHRidWxiXCIsXG5cdFx0XHRzdGF0dXM6IFwidG8tZG9cIixcblx0XHRcdHByb2plY3Q6IFwiaG9tZVwiLFxuXHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRub3RlczogXCJiYXRocm9vbSBsaWdodCBpcyBmbGlja2VyaW5nXCIsXG5cdFx0XHR0YWdzOiBcInN0b3JlXCIsXG5cdFx0fSxcblx0XS5tYXAoKGl0ZW0pID0+IE9iamVjdC5lbnRyaWVzKGl0ZW0pKTtcblxuXHRkZWZhdWx0VGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlRBU0suQURELCBpdGVtKTtcblx0fSk7XG59XG5cbmNvbnN0IHN1YkRlZmF1bHRzID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5BRERfREVGQVVMVFMsIGFkZERlZmF1bHRzKTtcbiIsImltcG9ydCB7IGVsRmFjdG9yeSwgZm9ybWF0RGF0ZSwgaHRtbEZhY3RvcnksIG1ha2VGaXJzdFVwcGVyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgVGFza3MsIFByb2plY3RzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFB1YlN1YiwgRVYgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5kaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcblx0ZGlhbG9nLnRleHRDb250ZW50ID0gXCJcIjtcbn0pO1xuXG5mdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LW1vZGVcIj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlzcGxheS1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMyBpZD1cImRpc3BsYXktdGl0bGVcIj48L2gzPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRpdmlkZXJcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRldGFpbHNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+UHJvamVjdDogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS1wcm9qZWN0XCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5Qcmlvcml0eTogPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGlzcGxheS12YWx1ZVwiIGlkPVwiZGlzcGxheS1wcmlvcml0eVwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+RHVlOiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LWR1ZVwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+U3RhdHVzOiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LXN0YXR1c1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+Tm90ZXM6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktbm90ZXNcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPlRhZ3M6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktdGFnc1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiIGRhdGEtdGFzay1pZD1cIlwiPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRpc3BsYXktY2xvc2UtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZWRpdC1idG5cIj5FZGl0PC9idXR0b24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9kaXY+XG5cdGA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KHNlbGVjdGVkSWQpIHtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBzZWxlY3RlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cdFRhc2tzLmdldFByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChwcm9wKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkaXNwbGF5LSR7cHJvcH1gKTtcblx0XHRsZXQgb3V0cHV0ID0gdGFza1twcm9wXTtcblxuXHRcdGlmIChwcm9wID09PSBcImR1ZVwiICYmICEhb3V0cHV0KSB7XG5cdFx0XHRvdXRwdXQgPSBmb3JtYXREYXRlKG91dHB1dCk7XG5cdFx0fVxuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9wID09PSBcInRhZ3NcIiA/IG91dHB1dCA6IG1ha2VGaXJzdFVwcGVyKG91dHB1dCk7XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gc2VsZWN0ZWRJZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRFZGl0TW9kZSgpIHtcblx0ZGlhbG9nLmlubmVySFRNTCA9IGBcblx0XHQ8Zm9ybSBjbGFzcz1cImVkaXQtbW9kZVwiIG1ldGhvZD1cImRpYWxvZ1wiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtZGV0YWlsc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwic3VibWl0LWluZm9cIiByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3Q6PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9XCJwcm9qZWN0XCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImR1ZVwiPkR1ZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBpZD1cInN0YXR1c1wiIGNsYXNzPVwic3VibWl0LWluZm9cIiByZXF1aXJlZD48L3NlbGVjdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIHJvd3M9XCI1XCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiPjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0PHA+U2VwYXJhdGUgdGFncyB3aXRoIGNvbW1hcy48L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRhZ3NcIj5UYWdzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhZ3NcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIgZGF0YS10YXNrLWlkPVwiXCI+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWJ0blwiPkJhY2s8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzYXZlLWJ0blwiPlNhdmU8L2J1dHRvbj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L2Zvcm0+XG5cdGA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkRHJvcGRvd25zKCkge1xuXHRbXG5cdFx0W1wicHJvamVjdFwiLCBQcm9qZWN0cy5nZXRQcm9qZWN0cygpXSxcblx0XHRbXCJwcmlvcml0eVwiLCBUYXNrcy5nZXRQcmlvcml0eU5hbWVzKCldLFxuXHRcdFtcInN0YXR1c1wiLCBUYXNrcy5nZXRDb2x1bW5OYW1lcygpXSxcblx0XS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhaXJbMF0pO1xuXHRcdHBhaXJbMV0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IG9wdGlvbixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihvcHRpb24pLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm0odGFzaykge1xuXHRUYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKTtcblxuXHRcdHN3aXRjaCAocHJvcCkge1xuXHRcdFx0Y2FzZSBcInByb2plY3RcIjpcblx0XHRcdGNhc2UgXCJwcmlvcml0eVwiOlxuXHRcdFx0Y2FzZSBcInN0YXR1c1wiOlxuXHRcdFx0XHRbLi4uZWxlbWVudC5jaGlsZHJlbl0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09PSB0YXNrW3Byb3BdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidGl0bGVcIjpcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9IG1ha2VGaXJzdFVwcGVyKHRhc2tbcHJvcF0pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcIm5vdGVzXCI6XG5cdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcih0YXNrW3Byb3BdKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSB0YXNrW3Byb3BdO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXHRkaWFsb2cucXVlcnlTZWxlY3RvcihcIi5pZC1idWJibGUtbWFya2VyXCIpLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcm9qZWN0TW9kZSgpIHtcblx0ZGlhbG9nLmlubmVySFRNTCA9IGBcblx0XHQ8Zm9ybSBjbGFzcz1cInByb2plY3QtbW9kZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwibmV3LXByb2plY3RcIj5OZXcgUHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1wcm9qZWN0XCIgcmVxdWlyZWQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImJ1dHRvbnNcIj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJwcm9qZWN0LXNhdmUtYnRuXCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicHJvamVjdC1jYW5jZWwtYnRuXCI+XG5cdFx0XHRcdFx0Q2FuY2VsXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvZm9ybT5gO1xuXHRkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmNvbnN0IHN1YkRpc3BsYXlCdWlsZCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkRJU1BMQVlfTU9ERSwgYnVpbGREaXNwbGF5TW9kZSk7XG5jb25zdCBzdWJEaXNwbGF5UG9wID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRElTUExBWV9NT0RFLCBwb3B1bGF0ZURpc3BsYXkpO1xuXG5jb25zdCBzdWJFZGl0QnVpbGQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5FRElUX01PREUsIGJ1aWxkRWRpdE1vZGUpO1xuY29uc3Qgc3ViRWRpdERyb3Bkb3ducyA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkVESVRfTU9ERSwgYWRkRHJvcGRvd25zKTtcbmNvbnN0IHN1YkZvcm1Qb3AgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5FRElUX01PREVfUE9QLCBwb3B1bGF0ZUZvcm0pO1xuXG5jb25zdCBzdWJQcm9qZWN0QnVpbGQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5QUk9KRUNUX01PREUsIGJ1aWxkUHJvamVjdE1vZGUpO1xuIiwiaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFN0YXR1cyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IEVWLCBQdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxubGV0IGRyYWdnZWRUYXNrID0gdW5kZWZpbmVkO1xubGV0IGNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGREcmFnRHJvcChjYXJkKSB7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnQpO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmQpO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuXHRkcmFnZ2VkVGFzayA9IHRoaXM7XG5cdHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCI7XG59XG5cbmZ1bmN0aW9uIGRyYWdFbmQoZSkge1xuXHRkcmFnZ2VkVGFzayA9IHVuZGVmaW5lZDtcblx0dGhpcy5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cdGNvdW50ZXIgPSAwO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YXR1cy1jb2x1bW5cIikuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XG5cdFx0c3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdGF0dXNEcm9wKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YXR1cy1jb2x1bW5cIikuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XG5cdFx0c3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcik7XG5cdFx0c3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHVwZGF0ZVN0YXR1cyk7XG5cdFx0c3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZHJhZ0VudGVyKTtcblx0XHRzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBkcmFnTGVhdmUpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdFbnRlcigpIHtcblx0Y291bnRlcisrO1xuXHRmaW5kU3RhdHVzKHRoaXMpLmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGRyYWdMZWF2ZSgpIHtcblx0Y291bnRlci0tO1xuXHRpZiAoY291bnRlciA9PT0gMCkge1xuXHRcdGZpbmRTdGF0dXModGhpcykuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0dXMoKSB7XG5cdGNvbnN0IGRyb3BDb2x1bW4gPSBmaW5kU3RhdHVzKHRoaXMpLmlkLnNsaWNlKDAsIC03KTtcblx0Y29uc3QgZHJhZ2dlZElkID0gK2RyYWdnZWRUYXNrLmRhdGFzZXQudGFza0lkO1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIGRyYWdnZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXHR0YXNrLnN0YXR1cyA9IGRyb3BDb2x1bW47XG5cblx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5VUERBVEUsIGRyYWdnZWRJZCwgT2JqZWN0LmVudHJpZXModGFzaykpO1xufVxuXG5jb25zdCBzdWJEcmFnRHJvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuQUREX0RSQUdfRFJPUCwgYWRkRHJhZ0Ryb3ApO1xuY29uc3Qgc3ViU3RhdHVzRHJvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuQUREX1NUQVRVU19EUk9QLCBhZGRTdGF0dXNEcm9wKTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERPTSBGYWN0b3JpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG5cdHJldHVybiB7IHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRmFjdG9yeShvYmopIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcblx0Y29uc3QgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuXG5cdGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSAhPT0gXCJkYXRhc2V0XCIpIHtcblx0XHRcdGVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFNwZWNpYWwgZGlyZWN0aW9ucyBuZWVkZWQgdG8gc2V0IFwiZGF0YS1cIiBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKGNvbnN0IHByb3AgaW4gYXR0cmlidXRlc1trZXldKSB7XG5cdFx0XHRcdGVsLmRhdGFzZXRbcHJvcF0gPSBhdHRyaWJ1dGVzW2tleV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdC8vIEFsbG93cyBmb3IgY29uZGl0aW9uYWxseSBhZGRpbmcgY2hpbGRyZW4gdXBzdHJlYW0gYnlcblx0XHQvLyBzZXR0aW5nIFwiXCIgYXMgdGhlIGFsdGVybmF0aXZlIHRvIGVsRmFjdG9yeSgpXG5cdFx0aWYgKCEhY2hpbGQpIHtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE90aGVyIEhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYXNrSWQodGFyZ2V0KSB7XG5cdHJldHVybiArKHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJpZC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC50YXNrSWRcblx0XHQ6IGZpbmRUYXNrSWQodGFyZ2V0LnBhcmVudEVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9qZWN0TmFtZSh0YXJnZXQpIHtcblx0cmV0dXJuIHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJwcm9qZWN0LWJ1YmJsZS1tYXJrZXJcIilcblx0XHQ/IHRhcmdldC5kYXRhc2V0LnByb2plY3RGaWx0ZXJcblx0XHQ6IGZpbmRQcm9qZWN0TmFtZSh0YXJnZXQucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU3RhdHVzKHRhcmdldCkge1xuXHRyZXR1cm4gdGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcInN0YXR1cy1jb2x1bW5cIilcblx0XHQ/IHRhcmdldFxuXHRcdDogZmluZFN0YXR1cyh0YXJnZXQucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmlyc3RVcHBlcihzdHJpbmcpIHtcblx0cmV0dXJuICEhc3RyaW5nXG5cdFx0PyBzdHJpbmdcblx0XHRcdFx0LnNwbGl0KFwiLVwiKVxuXHRcdFx0XHQubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuXHRcdFx0XHQuam9pbihcIiBcIilcblx0XHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoaXNvRGF0ZSkge1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7aXNvRGF0ZX1UMTI6MDA6MDAtMDQ6MDBgKTtcblx0Y29uc3QgZGF5cyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcblx0Y29uc3QgbW9udGhzID0gW1xuXHRcdFwiSmFuXCIsXG5cdFx0XCJGZWJcIixcblx0XHRcIk1hclwiLFxuXHRcdFwiQXByXCIsXG5cdFx0XCJNYXlcIixcblx0XHRcIkp1bmVcIixcblx0XHRcIkp1bHlcIixcblx0XHRcIkF1Z1wiLFxuXHRcdFwiU2VwdFwiLFxuXHRcdFwiT2N0XCIsXG5cdFx0XCJOb3ZcIixcblx0XHRcIkRlY1wiLFxuXHRdO1xuXG5cdHJldHVybiBgJHtkYXlzW2RhdGUuZ2V0RGF5KCldfSwgJHtkYXRlLmdldERhdGUoKX0gJHtcblx0XHRtb250aHNbZGF0ZS5nZXRNb250aCgpXVxuXHR9ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG59XG4iLCJleHBvcnQgY29uc3QgUHViU3ViID0gKCgpID0+IHtcblx0Y29uc3QgX2V2ZW50c0xpc3QgPSB7fTtcblx0Ly8geyBrZXk6IFwidHJpZ2dlckV2ZW50XCIsIHZhbHVlOiBbIGFycmF5IG9mIGZ1bmN0aW9ucyBdIH1cblxuXHRmdW5jdGlvbiBzdWJzY3JpYmUodHJpZ2dlckV2ZW50LCBzdWJzY3JpYmVyKSB7XG5cdFx0aWYgKCFfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdKSB7XG5cdFx0XHRfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdID0gW3N1YnNjcmliZXJdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdLnB1c2goc3Vic2NyaWJlcik7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR1bnN1YnNjcmliZTogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBmdW5jdGlvbkxpc3QgPSBfZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdO1xuXHRcdFx0XHRjb25zdCBpID0gZnVuY3Rpb25MaXN0LmluZGV4T2Yoc3Vic2NyaWJlcik7XG5cdFx0XHRcdGlmIChpID4gLTEpIHtcblx0XHRcdFx0XHRmdW5jdGlvbkxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBwdWJsaXNoKHRyaWdnZXJFdmVudCwgLi4uYXJncykge1xuXHRcdGNvbnN0IGZ1bmN0aW9uTGlzdCA9IF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZnVuY3Rpb25MaXN0KSkge1xuXHRcdFx0ZnVuY3Rpb25MaXN0LmZvckVhY2goKHN1YnNjcmliZXIpID0+IHtcblx0XHRcdFx0c3Vic2NyaWJlci5hcHBseShudWxsLCBhcmdzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN1YnNjcmliZSwgcHVibGlzaCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEVWID0ge1xuXHRJTklUOiBcImluaXRcIixcblx0RElBTE9HOiB7XG5cdFx0RElTUExBWV9NT0RFOiBcImRpc3BsYXlNb2RlXCIsXG5cdFx0RURJVF9NT0RFOiBcImVkaXRNb2RlXCIsXG5cdFx0RURJVF9NT0RFX1BPUDogXCJlZGl0TW9kZVBvcHVsYXRlXCIsXG5cdFx0UFJPSkVDVF9NT0RFOiBcInByb2plY3RNb2RlXCIsXG5cdH0sXG5cdFRBU0s6IHtcblx0XHRERUxFVEU6IFwiZGVsZXRlVGFza1wiLFxuXHRcdEFERDogXCJhZGRUYXNrXCIsXG5cdFx0VVBEQVRFOiBcInVwZGF0ZVRhc2tcIixcblx0fSxcblx0SU5ERVg6IHtcblx0XHRDQVJEX0NMSUNLOiBcImNhcmRDbGlja1wiLFxuXHRcdENBUkRfREVMRVRFOiBcImNhcmREZWxldGVcIixcblx0XHRSRU9QRU5fRURJVDogXCJyZW9wZW5FZGl0TW9kZVwiLFxuXHR9LFxuXHRQUk9KRUNUOiB7XG5cdFx0QUREOiBcImFkZFByb2plY3RcIixcblx0XHRERUxFVEU6IFwiZGVsZXRlUHJvamVjdFwiLFxuXHR9LFxuXHRSRVNFVDoge1xuXHRcdEFERF9ERUZBVUxUUzogXCJhZGREZWZhdWx0c1wiLFxuXHRcdENMRUFSX0FMTDogXCJjbGVhckFsbFwiLFxuXHR9LFxuXHRXQVJOOiB7XG5cdFx0VEFTS19TVUJNSVQ6IFwid2FyblRhc2tTdWJtaXRcIixcblx0XHRUQVNLX0RFTEVURTogXCJ3YXJuVGFza0RlbGV0ZVwiLFxuXHRcdFBST0pFQ1RfREVMRVRFOiBcIndhcm5Qcm9qZWN0RGVsZXRlXCIsXG5cdFx0REVGQVVMVFM6IFwid2FybkRlZmF1bHRzXCIsXG5cdFx0Q0xFQVJfQUxMOiBcIndhcm5DbGVhckFsbFwiLFxuXHR9LFxuXHRBRERfRFJBR19EUk9QOiBcImFkZERyYWdEcm9wXCIsXG5cdEFERF9TVEFUVVNfRFJPUDogXCJhZGRTdGF0dXNEcm9wXCIsXG59O1xuIiwiaW1wb3J0IHsgVGFza3MsIFByb2plY3RzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ1wiO1xuaW1wb3J0IHsgUHViU3ViLCBFViB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHtcblx0ZWxGYWN0b3J5LFxuXHRodG1sRmFjdG9yeSxcblx0bWFrZUZpcnN0VXBwZXIsXG5cdGZpbmRQcm9qZWN0TmFtZSxcblx0ZmluZFRhc2tJZCxcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jb25zdCBzaWRlYmFyT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1vcGVuLWJ0blwiKTtcbmNvbnN0IHNpZGViYXJDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1jbG9zZS1idG5cIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuc2lkZWJhck9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNpZGViYXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIikpO1xuc2lkZWJhckNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpKTtcblxuY29uc3QgcHJvamVjdERpc3BsYXllZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kaXNwbGF5ZWRcIik7XG5jb25zdCBzdGF0dXNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzZXMtY29udGFpbmVyXCIpO1xuXG5jb25zdCBBTExfVEFTS1MgPSBcImFsbC10YXNrc1wiO1xuY29uc3QgTk9fUFJPSkVDVCA9IFwidW5zb3J0ZWRcIjtcbmxldCBjdXJyZW50UHJvamVjdCA9IEFMTF9UQVNLUztcblxuZnVuY3Rpb24gdXBkYXRlU2NyZWVuKCkge1xuXHRpZiAoY3VycmVudFByb2plY3QgPT09IEFMTF9UQVNLUykge1xuXHRcdHByb2plY3REaXNwbGF5ZWQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcihBTExfVEFTS1MpO1xuXHRcdHVwZGF0ZVRhc2tDb2x1bW5zKFRhc2tzLmdldFNvcnRlZFRhc2tzKCkpO1xuXHRcdHVwZGF0ZVNpZGViYXIoKTtcblx0fSBlbHNlIHtcblx0XHRwcm9qZWN0RGlzcGxheWVkLnRleHRDb250ZW50ID0gbWFrZUZpcnN0VXBwZXIoY3VycmVudFByb2plY3QpO1xuXHRcdHVwZGF0ZVRhc2tDb2x1bW5zKFxuXHRcdFx0VGFza3MuZ2V0U29ydGVkVGFza3NCeShcblx0XHRcdFx0XCJwcm9qZWN0XCIsXG5cdFx0XHRcdGN1cnJlbnRQcm9qZWN0ID09PSBOT19QUk9KRUNUID8gXCJcIiA6IGN1cnJlbnRQcm9qZWN0XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR1cGRhdGVTaWRlYmFyKCk7XG5cdH1cblx0ZGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tDb2x1bW5zKGRpc3BsYXlUYXNrcykge1xuXHQvLyBSZXNldCB0aGUgY29sdW1uc1xuXHRbLi4uc3RhdHVzZXNDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKHJvdykgPT4gKHJvdy50ZXh0Q29udGVudCA9IFwiXCIpKTtcblxuXHQvLyBCdWlsZCBjb2x1bW4gY29udGVudFxuXHRkaXNwbGF5VGFza3MuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IGNvbHVtbk5hbWUgPSBjb2x1bW5bMF07XG5cdFx0Y29uc3Qgc3RhdHVzTmFtZSA9IG1ha2VGaXJzdFVwcGVyKGNvbHVtbk5hbWUpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29udGVudCA9IGVsRmFjdG9yeShcblx0XHRcdFwic2VjdGlvblwiLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc0xpc3Q6IFwic3RhdHVzLWNvbHVtblwiLFxuXHRcdFx0XHRpZDogYCR7Y29sdW1uTmFtZX0tY29sdW1uYCxcblx0XHRcdH0sXG5cdFx0XHRbXG5cdFx0XHRcdGVsRmFjdG9yeShcImgyXCIsIHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwic3RhdHVzLW5hbWVcIixcblx0XHRcdFx0XHR0ZXh0Q29udGVudDogc3RhdHVzTmFtZSArIFwiOlwiLFxuXHRcdFx0XHR9KSxcblx0XHRcdF1cblx0XHQpO1xuXG5cdFx0Ly8gQnVpbGQgdGFzayBjYXJkc1xuXHRcdGNvbHVtblsxXS5mb3JFYWNoKCh0YXNrQ29udGFpbmVyKSA9PiB7XG5cdFx0XHRjb25zdCB0YXNrID0gdGFza0NvbnRhaW5lci5nZXRQcm9wZXJ0aWVzKCk7XG5cblx0XHRcdGNvbHVtbkNvbnRlbnQuY2hpbGRyZW4ucHVzaChcblx0XHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInRhc2stY2FyZCBpZC1idWJibGUtbWFya2VyXCIsXG5cdFx0XHRcdFx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRkYXRhc2V0OiB7XG5cdFx0XHRcdFx0XHRcdHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHRcdHRhc2tJZDogdGFzay5pZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiY2FyZC1zZWN0aW9uXCIgfSwgW1xuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJoM1wiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHRhc2sudGl0bGUpLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFxuXHRcdFx0XHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJjYXJkLWRlbGV0ZS1idG5cIixcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImlcIiwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwiZmEgZmEtdHJhc2gtbyBjYXJkLWRlbGV0ZS1idG5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc0xpc3Q6IFwiY2FyZC1zZWN0aW9uXCIgfSwgW1xuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbnRlbnQ6IG1ha2VGaXJzdFVwcGVyKHRhc2sucHJvamVjdCksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXCJkaXZcIiwge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJkdWVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogdGFzay5kdWUsXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGNvcnJlY3Qgcm93XG5cdFx0aWYgKGluZGV4IDwgMikge1xuXHRcdFx0c3RhdHVzZXNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KGNvbHVtbkNvbnRlbnQpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGF0dXNlc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShjb2x1bW5Db250ZW50KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vTWFrZSBlYWNoIHN0YXR1cy1jb2x1bW4gYWJsZSB0byByZWNlaXZlIGRyYWdEcm9wc1xuXHRQdWJTdWIucHVibGlzaChFVi5BRERfU1RBVFVTX0RST1ApO1xuXG5cdC8vIE1ha2UgZWFjaCB0YXNrIGNsaWNrYWJsZSBhbmQgZHJhZ2dhYmxlXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpLmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5BRERfRFJBR19EUk9QLCBjYXJkKTtcblx0XHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNhcmQtZGVsZXRlLWJ0blwiKSkge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVi5JTkRFWC5DQVJEX0RFTEVURSwgZSwgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuSU5ERVguQ0FSRF9DTElDSywgZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2lkZWJhcigpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIikucmVtb3ZlKCk7XG5cdGNvbnN0IHJlcGxhY2VtZW50Q29udGFpbmVyID0gZWxGYWN0b3J5KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc0xpc3Q6IFwicHJvamVjdHMtY29udGFpbmVyXCIgfSxcblx0XHRbQUxMX1RBU0tTLCBOT19QUk9KRUNULCAuLi5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpXS5tYXAoKHByb2plY3QpID0+IHtcblx0XHRcdHJldHVybiBlbEZhY3RvcnkoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1uYW1lIHByb2plY3QtYnViYmxlLW1hcmtlclwiLFxuXHRcdFx0XHRcdGRhdGFzZXQ6IHsgcHJvamVjdEZpbHRlcjogcHJvamVjdCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIocHJvamVjdCksXG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1maWx0ZXItYnRuXCIsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0W0FMTF9UQVNLUywgTk9fUFJPSkVDVF0uaW5jbHVkZXMocHJvamVjdClcblx0XHRcdFx0XHRcdD8gXCJcIlxuXHRcdFx0XHRcdFx0OiBlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS10cmFzaFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImFyaWEtaGlkZGVuXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHQgICksXG5cdFx0XHRcdF1cblx0XHRcdCk7XG5cdFx0fSlcblx0KTtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tYnV0dG9uc1wiKVxuXHRcdC5iZWZvcmUoaHRtbEZhY3RvcnkocmVwbGFjZW1lbnRDb250YWluZXIpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWZpbHRlci1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaWx0ZXJQcm9qZWN0Vmlldyk7XG5cdFx0aWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gbWFrZUZpcnN0VXBwZXIoY3VycmVudFByb2plY3QpKSB7XG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXHRcdH1cblx0fSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZWxldGUtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGZpbmRQcm9qZWN0TmFtZShlLnRhcmdldCk7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5XQVJOLlBST0pFQ1RfREVMRVRFLCBzZWxlY3RlZFByb2plY3QpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpIHtcblx0Y3VycmVudFByb2plY3QgPSBzZWxlY3RlZFByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0ID8gQUxMX1RBU0tTIDogY3VycmVudFByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclByb2plY3RWaWV3KGUpIHtcblx0Y3VycmVudFByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUoZS50YXJnZXQpO1xuXHR1cGRhdGVTY3JlZW4oKTtcblx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbn1cblxuY29uc3Qgc3ViUmVzZXRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkRFTEVURSwgcmVzZXRDdXJyZW50UHJvamVjdCk7XG5cbmNvbnN0IHN1YkluaXQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLklOSVQsIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkRlbGV0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suREVMRVRFLCB1cGRhdGVTY3JlZW4pO1xuY29uc3Qgc3ViQWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuVEFTSy5BREQsIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVi5UQVNLLlVQREFURSwgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUFJPSkVDVC5BREQsIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJEZWxldGVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5QUk9KRUNULkRFTEVURSwgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViQ2xlYXJTY3JlZW4gPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlJFU0VULkNMRUFSX0FMTCwgdXBkYXRlU2NyZWVuKTtcbiIsImltcG9ydCB7IG1ha2VGaXJzdFVwcGVyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgRVYsIFB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcblxuZnVuY3Rpb24gd2FyblRhc2tEZWxldGUoc2VsZWN0ZWRJZCwgdGFza1RpdGxlKSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcblx0XHR0ZXh0OiBgT25jZSBkZWxldGVkLCB0aGUgXCIke21ha2VGaXJzdFVwcGVyKFxuXHRcdFx0dGFza1RpdGxlXG5cdFx0KX1cIiB0YXNrIGNhbm5vdCBiZSByZWNvdmVyZWQuYCxcblx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRidXR0b25zOiB0cnVlLFxuXHRcdGRhbmdlck1vZGU6IHRydWUsXG5cdH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcblx0XHRpZiAod2lsbERlbGV0ZSkge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5ERUxFVEUsIHNlbGVjdGVkSWQpO1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIlBvb2YhIFRhc2sgZGVsZXRlZCFcIixcblx0XHRcdFx0dGV4dDogXCJXYXkgdG8gZ2V0IGl0IGRvbmUuXCIsXG5cdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDIwMDAsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIk5ldmVybWluZCFcIixcblx0XHRcdFx0dGV4dDogXCJXZSdsbCBsZWF2ZSB0aGF0IG9uZSBmb3Igbm93LlwiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDIwMDAsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuUHJvamVjdERlbGV0ZShzZWxlY3RlZFByb2plY3QpIHtcblx0c3dhbCh7XG5cdFx0dGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxuXHRcdHRleHQ6IGBEZWxldGluZyBwcm9qZWN0IFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHNlbGVjdGVkUHJvamVjdFxuXHRcdCl9XCIgd2lsbCBhbHNvIHBlcm1hbmVudGx5IGRlbGV0ZSBhbGwgaXRzIHRhc2tzLmAsXG5cdFx0aWNvbjogXCJ3YXJuaW5nXCIsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRkYW5nZXJNb2RlOiB0cnVlLFxuXHR9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG5cdFx0aWYgKHdpbGxEZWxldGUpIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlBST0pFQ1QuREVMRVRFLCBzZWxlY3RlZFByb2plY3QpO1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIlBvb2YhXCIsXG5cdFx0XHRcdHRleHQ6IFwiR29vZGJ5ZSBjaG9yZXMsIGhlbGxvIGZyZWVkb20uXCIsXG5cdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDMwMDAsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIlN0aWxsIHdvcmtpbmchXCIsXG5cdFx0XHRcdHRleHQ6IFwiUGxlbnR5IGxlZnQgdG8gZG8sIGVoP1wiLFxuXHRcdFx0XHRidXR0b25zOiBmYWxzZSxcblx0XHRcdFx0dGltZXI6IDIwMDAsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuRGVmYXVsdHMoKSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcblx0XHR0ZXh0OiBcIkRlZmF1bHRzIHJlcGxhY2UgYWxsIHRhc2tzIGFuZCBwcm9qZWN0cyB3aXRoIGFuIGV4YW1wbGUgc2V0LiBcXG5UaGlzIHdpbGwgZXJhc2UgYW55dGhpbmcgeW91IGhhdmUgc2F2ZWQuXCIsXG5cdFx0aWNvbjogXCJ3YXJuaW5nXCIsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRkYW5nZXJNb2RlOiB0cnVlLFxuXHR9KS50aGVuKCh3aWxsUmVzdG9yZURlZmF1bHRzKSA9PiB7XG5cdFx0aWYgKHdpbGxSZXN0b3JlRGVmYXVsdHMpIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlJFU0VULkFERF9ERUZBVUxUUyk7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiQmFjayB0byBCYXNpY3MhXCIsXG5cdFx0XHRcdHRleHQ6IFwiUGxheSBhcm91bmQgLSB5b3UgY2FuIGFsd2F5cyBjbGljayB0aGUgYnV0dG9uIGFnYWluLlwiLFxuXHRcdFx0XHRpY29uOiBcInN1Y2Nlc3NcIixcblx0XHRcdFx0YnV0dG9uczogZmFsc2UsXG5cdFx0XHRcdHRpbWVyOiAzMDAwLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3YWwoe1xuXHRcdFx0XHR0aXRsZTogXCJOZXZlcm1pbmQhXCIsXG5cdFx0XHRcdHRleHQ6IFwiWWVhaCwgd2UgZGlkbid0IHdhbnQgdG8geW91IHRvIGVpdGhlci5cIixcblx0XHRcdFx0YnV0dG9uczogZmFsc2UsXG5cdFx0XHRcdHRpbWVyOiAyNTAwLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gd2FybkNsZWFyQWxsKCkge1xuXHRzd2FsKHtcblx0XHR0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXG5cdFx0dGV4dDogXCJEZWxldGluZyBhbGwgdGFza3MgQU5EIHByb2plY3RzIGNhbm5vdCBiZSB1bmRvbmUuXCIsXG5cdFx0aWNvbjogXCJ3YXJuaW5nXCIsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRkYW5nZXJNb2RlOiB0cnVlLFxuXHR9KS50aGVuKCh3aWxsQ2xlYXJBbGwpID0+IHtcblx0XHRpZiAod2lsbENsZWFyQWxsKSB7XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVi5SRVNFVC5DTEVBUl9BTEwpO1xuXHRcdFx0c3dhbCh7XG5cdFx0XHRcdHRpdGxlOiBcIldIT09TSCFcIixcblx0XHRcdFx0dGV4dDogXCJBbGwgZ29uZS5cIixcblx0XHRcdFx0aWNvbjogXCJzdWNjZXNzXCIsXG5cdFx0XHRcdGJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0XHR0aW1lcjogMjAwMCxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2FsKHtcblx0XHRcdFx0dGl0bGU6IFwiUGhldyFcIixcblx0XHRcdFx0dGV4dDogXCJUaGF0IHdhcyBhIGNsb3NlIG9uZS5cIixcblx0XHRcdFx0YnV0dG9uczogZmFsc2UsXG5cdFx0XHRcdHRpbWVyOiAyMDAwLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gd2FyblRhc2tTdWJtaXQoc3VibWl0SWQsIHZhbHVlc0FycmF5KSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBcIkFsbCBzZXQ/XCIsXG5cdFx0dGV4dDogYFJlYWR5IHRvIHN1Ym1pdCAke3N1Ym1pdElkID09PSAwID8gXCJhIG5ldyB0YXNrXCIgOiBcInlvdXIgY2hhbmdlc1wifT9gLFxuXHRcdGljb246IFwid2FybmluZ1wiLFxuXHRcdGJ1dHRvbnM6IHRydWUsXG5cdFx0ZGFuZ2VyTW9kZTogdHJ1ZSxcblx0fSkudGhlbigod2lsbFN1Ym1pdCkgPT4ge1xuXHRcdGlmICh3aWxsU3VibWl0KSB7XG5cdFx0XHRpZiAoc3VibWl0SWQgPT09IDApIHtcblx0XHRcdFx0UHViU3ViLnB1Ymxpc2goRVYuVEFTSy5BREQsIHZhbHVlc0FycmF5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLlRBU0suVVBEQVRFLCBzdWJtaXRJZCwgdmFsdWVzQXJyYXkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZWJ1aWx0VGFzayA9IHZhbHVlc0FycmF5LnJlZHVjZShcblx0XHRcdFx0KGFjYywgY3VycmVudCkgPT4ge1xuXHRcdFx0XHRcdGFjY1tjdXJyZW50WzBdXSA9IGN1cnJlbnRbMV07XG5cdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBpZDogc3VibWl0SWQgfVxuXHRcdFx0KTtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWLklOREVYLlJFT1BFTl9FRElULCByZWJ1aWx0VGFzayk7XG5cdFx0fVxuXHR9KTtcbn1cblxuY29uc3Qgc3ViV2FyblRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLldBUk4uVEFTS19ERUxFVEUsIHdhcm5UYXNrRGVsZXRlKTtcbmNvbnN0IHN1Yldhcm5Qcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVi5XQVJOLlBST0pFQ1RfREVMRVRFLCB3YXJuUHJvamVjdERlbGV0ZSk7XG5jb25zdCBzdWJXYXJuU3VibWl0ID0gUHViU3ViLnN1YnNjcmliZShFVi5XQVJOLlRBU0tfU1VCTUlULCB3YXJuVGFza1N1Ym1pdCk7XG5cbmNvbnN0IHN1Yldhcm5EZWZhdWx0cyA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuV0FSTi5ERUZBVUxUUywgd2FybkRlZmF1bHRzKTtcbmNvbnN0IHN1Yldhcm5DbGVhckFsbCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuV0FSTi5DTEVBUl9BTEwsIHdhcm5DbGVhckFsbCk7XG4iLCJpbXBvcnQgeyBQdWJTdWIsIEVWIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBQcm9qZWN0cywgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGZyb20gTUROIHRvIHRlc3QgaXMgc3RvcmFnZSBpcyBhdmFpbGFibGUgb24gb2xkZXIgYnJvd3NlcnMuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcblx0bGV0IHN0b3JhZ2U7XG5cdHRyeSB7XG5cdFx0c3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcblx0XHRjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG5cdFx0c3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuXHRcdHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG5cdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG5cdFx0XHQoZS5jb2RlID09PSAyMiB8fFxuXHRcdFx0XHQvLyBGaXJlZm94XG5cdFx0XHRcdGUuY29kZSA9PT0gMTAxNCB8fFxuXHRcdFx0XHQvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcblx0XHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuXHRcdFx0XHRlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcblx0XHRcdFx0Ly8gRmlyZWZveFxuXHRcdFx0XHRlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcblx0XHRcdC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG5cdFx0XHRzdG9yYWdlICYmXG5cdFx0XHRzdG9yYWdlLmxlbmd0aCAhPT0gMFxuXHRcdCk7XG5cdH1cbn1cblxubGV0IHN0b3JhZ2VUeXBlO1xuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcblx0c3RvcmFnZVR5cGUgPSBsb2NhbFN0b3JhZ2U7XG59IGVsc2UgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJzZXNzaW9uU3RvcmFnZVwiKSkge1xuXHRzdG9yYWdlVHlwZSA9IHNlc3Npb25TdG9yYWdlO1xufSBlbHNlIHtcblx0UHViU3ViLnB1Ymxpc2goRVYuUkVTRVQuQUREX0RFRkFVTFRTKTtcbn1cblxuaWYgKCEhc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFRhc2tzXCIpKSB7XG5cdGdldFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gc2V0U3RvcmFnZSgpIHtcblx0Y29uc3QgYWxsVGFza3MgPSBUYXNrcy5nZXRBbGxUYXNrcygpLm1hcCgodGFzaykgPT4ge1xuXHRcdGNvbnN0IHRhc2tOb0lkID0gdGFzay5nZXRQcm9wZXJ0aWVzKCk7XG5cdFx0ZGVsZXRlIHRhc2tOb0lkLmlkO1xuXHRcdHJldHVybiB0YXNrTm9JZDtcblx0fSk7XG5cdGNvbnN0IGFsbFByb2plY3RzID0gUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcblxuXHRzdG9yYWdlVHlwZS5zZXRJdGVtKFwiYWxsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcblx0c3RvcmFnZVR5cGUuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFsuLi5hbGxUYXNrc10pKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmFnZSgpIHtcblx0Y29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VUeXBlLmdldEl0ZW0oXCJhbGxQcm9qZWN0c1wiKSk7XG5cdGNvbnN0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShzdG9yYWdlVHlwZS5nZXRJdGVtKFwiYWxsVGFza3NcIikpLm1hcCgoaXRlbSkgPT5cblx0XHRPYmplY3QuZW50cmllcyhpdGVtKVxuXHQpO1xuXG5cdHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5QUk9KRUNULkFERCwgcHJvamVjdCk7XG5cdH0pO1xuXG5cdHN0b3JlZFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5UQVNLLkFERCwgaXRlbSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG5cdHN0b3JhZ2VUeXBlLmNsZWFyKCk7XG59XG5cbmNvbnN0IHN1YlNldEFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suQURELCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldERlbGV0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suREVMRVRFLCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldFVwZGF0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlRBU0suVVBEQVRFLCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldEFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlBST0pFQ1QuQURELCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldERlbGV0ZVByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLlBST0pFQ1QuREVMRVRFLCBzZXRTdG9yYWdlKTtcblxuY29uc3Qgc3ViQ2xlYXJTdG9yYWdlID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5DTEVBUl9BTEwsIGNsZWFyU3RvcmFnZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQdWJTdWIsIEVWIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL2FwcC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBmaW5kVGFza0lkIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgZGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9nXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vd2ViLXN0b3JhZ2VcIjtcbmltcG9ydCBcIi4vc2NyZWVuQ29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9kcmFnLWRyb3BcIjtcbmltcG9ydCBcIi4vd2FybmluZ3NcIjtcblxuY29uc3QgQm90dG9tQnRucyA9ICgoKSA9PiB7XG5cdGNvbnN0IGFkZFJldmVhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXJldmVhbC1idG5cIik7XG5cdGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0blwiKTtcblx0Y29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG5cdGNvbnN0IHN0b3JhZ2VSZXZlYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3JhZ2UtcmV2ZWFsLWJ0blwiKTtcblx0Y29uc3QgZGVmYXVsdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRzLWJ0blwiKTtcblx0Y29uc3QgY2xlYXJTdG9yYWdlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhci1zdG9yYWdlLWJ0blwiKTtcblxuXHRhZGRSZXZlYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRhZGRSZXZlYWxCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0YWRkVGFza0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGhpZGVTdG9yYWdlQnRucygpO1xuXHR9KTtcblxuXHRhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0VkaXRNb2RlKTtcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RNb2RlKTtcblxuXHRzdG9yYWdlUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0c3RvcmFnZVJldmVhbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRkZWZhdWx0c0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRjbGVhclN0b3JhZ2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0aGlkZUFkZEJ0bnMoKTtcblx0fSk7XG5cblx0ZGVmYXVsdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5XQVJOLkRFRkFVTFRTKTtcblx0fSk7XG5cblx0Y2xlYXJTdG9yYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVYuV0FSTi5DTEVBUl9BTEwpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBoaWRlQWRkQnRucygpIHtcblx0XHRhZGRSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0YWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGlkZVN0b3JhZ2VCdG5zKCkge1xuXHRcdHN0b3JhZ2VSZXZlYWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0ZGVmYXVsdHNCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0Y2xlYXJTdG9yYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkRGlzcGxheSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkRJU1BMQVlfTU9ERSwgaGlkZUFkZEJ0bnMpO1xuXHRjb25zdCBzdWJBZGRFZGl0ID0gUHViU3ViLnN1YnNjcmliZShFVi5ESUFMT0cuRURJVF9NT0RFLCBoaWRlQWRkQnRucyk7XG5cdGNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLkRJQUxPRy5QUk9KRUNUX01PREUsIGhpZGVBZGRCdG5zKTtcblx0Y29uc3Qgc3ViU3RvckRlZmF1bHRzID0gUHViU3ViLnN1YnNjcmliZShFVi5SRVNFVC5BRERfREVGQVVMVFMsIGhpZGVTdG9yYWdlQnRucyk7XG5cdGNvbnN0IHN1YlN0b3JDbGVhckFsbCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuUkVTRVQuQ0xFQVJfQUxMLCBoaWRlU3RvcmFnZUJ0bnMpO1xuXHRjb25zdCBzdWJTdG9yRGlzcGxheSA9IFB1YlN1Yi5zdWJzY3JpYmUoRVYuRElBTE9HLkRJU1BMQVlfTU9ERSwgaGlkZVN0b3JhZ2VCdG5zKTtcblxuXHRyZXR1cm4geyBhZGRUYXNrQnRuIH07XG59KSgpO1xuXG5mdW5jdGlvbiBvcGVuRGlzcGxheU1vZGUoc2VsZWN0ZWRJZCkge1xuXHRQdWJTdWIucHVibGlzaChFVi5ESUFMT0cuRElTUExBWV9NT0RFLCBzZWxlY3RlZElkKTtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0VkaXRNb2RlKTtcblx0ZG9jdW1lbnRcblx0XHQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LWNsb3NlLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9nLmNsb3NlKCkpO1xufVxuXG5mdW5jdGlvbiBjaGVja0VkaXRNb2RlKGUpIHtcblx0Ly8gQ2hlY2sgaWYgb3BlbmVkIGZyb20gZGlzcGxheU1vZGVcblx0aWYgKGUudGFyZ2V0ICE9PSBCb3R0b21CdG5zLmFkZFRhc2tCdG4pIHtcblx0XHRkb2N1bWVudFxuXHRcdFx0LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idG5cIilcblx0XHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tFZGl0TW9kZSk7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktY2xvc2UtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpYWxvZy5jbG9zZSgpKTtcblxuXHRcdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgZmluZFRhc2tJZChlLnRhcmdldCkpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0XHRvcGVuRWRpdE1vZGUodGFzayk7XG5cdH0gZWxzZSB7XG5cdFx0b3BlbkVkaXRNb2RlKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RlKHRhc2spIHtcblx0UHViU3ViLnB1Ymxpc2goRVYuRElBTE9HLkVESVRfTU9ERSk7XG5cdGlmICghIXRhc2spIHtcblx0XHRQdWJTdWIucHVibGlzaChFVi5ESUFMT0cuRURJVF9NT0RFX1BPUCwgdGFzayk7XG5cdH1cblxuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGUoKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWLkRJQUxPRy5QUk9KRUNUX01PREUpO1xuXG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NhbmNlbChlKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cdGNvbnN0IHRhc2tJZCA9IGZpbmRUYXNrSWQoZS50YXJnZXQpO1xuXHRpZiAoISF0YXNrSWQpIHtcblx0XHRvcGVuRGlzcGxheU1vZGUodGFza0lkKTtcblx0fSBlbHNlIHtcblx0XHRkaWFsb2cuY2xvc2UoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2FuY2VsKCkge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2plY3RTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdENhbmNlbCk7XG5cblx0ZGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tEZWxldGUoZSkge1xuXHRjb25zdCBzZWxlY3RlZElkID0gZmluZFRhc2tJZChlLnRhcmdldCk7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXHRQdWJTdWIucHVibGlzaChFVi5XQVJOLlRBU0tfREVMRVRFLCBzZWxlY3RlZElkLCB0YXNrLnRpdGxlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzQXJyYXkoKSB7XG5cdGNvbnN0IHN1Ym1pdHRlZEluZm8gPSBbXTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWJtaXQtaW5mb1wiKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdGxldCBzdWJtaXRWYWx1ZSA9IHtcblx0XHRcdGlucHV0OiBlbC52YWx1ZSxcblx0XHRcdHNlbGVjdDogWy4uLmVsLmNoaWxkcmVuXS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkID09PSB0cnVlKVswXVxuXHRcdFx0XHQ/LnZhbHVlLFxuXHRcdFx0dGV4dGFyZWE6IGVsLnRleHRDb250ZW50LFxuXHRcdH1bZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcblx0XHRzdWJtaXR0ZWRJbmZvLnB1c2goW2VsLmlkLCBzdWJtaXRWYWx1ZV0pO1xuXHR9KTtcblx0cmV0dXJuIHN1Ym1pdHRlZEluZm87XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tTdWJtaXQoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cdGRpYWxvZy5jbG9zZSgpO1xuXHRjb25zdCBzdWJtaXRJZCA9IGZpbmRUYXNrSWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ0blwiKSk7XG5cdGNvbnN0IHZhbHVlc0FycmF5ID0gZ2V0VmFsdWVzQXJyYXkoKTtcblx0UHViU3ViLnB1Ymxpc2goRVYuV0FSTi5UQVNLX1NVQk1JVCwgc3VibWl0SWQsIHZhbHVlc0FycmF5KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFN1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpLnZhbHVlO1xuXHRQdWJTdWIucHVibGlzaChFVi5QUk9KRUNULkFERCwgbmV3UHJvamVjdE5hbWUpO1xufVxuXG5jb25zdCBzdWJDYXJkQ2xpY2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWLklOREVYLkNBUkRfQ0xJQ0ssIG9wZW5EaXNwbGF5TW9kZSk7XG5jb25zdCBzdWJDYXJkRGVsZXRlID0gUHViU3ViLnN1YnNjcmliZShFVi5JTkRFWC5DQVJEX0RFTEVURSwgaGFuZGxlVGFza0RlbGV0ZSk7XG5jb25zdCBzdWJSZW9wZW5FZGl0ID0gUHViU3ViLnN1YnNjcmliZShFVi5JTkRFWC5SRU9QRU5fRURJVCwgb3BlbkVkaXRNb2RlKTtcblB1YlN1Yi5wdWJsaXNoKEVWLklOSVQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9