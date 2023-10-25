/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
	font-size: 1.5rem;
	box-shadow: 0 3px 3px #0000004e;
}

header h1 {
	margin: 10px;
	font-style: italic;
}

#sidebar-open-btn {
	margin: 10px;
	padding: 5px 8px;
}

@media (min-width: 700px) {
	header {
		border-radius: calc(var(--app-bd-rad) * 0.6) calc(var(--app-bd-rad) * 0.6) 0
			0;
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
`, "",{"version":3,"sources":["webpack://./src/styles/header-footer.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;CACC,mBAAmB;CACnB,YAAY;;CAEZ,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;;CAEnB;;;;EAIC;CACD,wBAAwB;CACxB,iBAAiB;CACjB,+BAA+B;AAChC;;AAEA;CACC,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC;EACC;IACE;CACH;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,oDAAoD;;AAEpD,mDAAmD;;AAEnD;CACC,YAAY;;CAEZ,aAAa;CACb,QAAQ;CACR,uBAAuB;CACvB,mBAAmB;;CAEnB,kCAAkC;CAClC,wBAAwB;CACxB,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,eAAe;;CAEf;EACC,sCAAsC;EACtC,qCAAqC;CACtC;AACD;AACA,oDAAoD","sourcesContent":["/* ---------------     Header     --------------- */\n\nheader {\n\tgrid-column: span 2;\n\theight: 60px;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--header-bg-left),\n\t\tvar(--header-bg-right)\n\t);\n\tcolor: var(--text-light);\n\tfont-size: 1.5rem;\n\tbox-shadow: 0 3px 3px #0000004e;\n}\n\nheader h1 {\n\tmargin: 10px;\n\tfont-style: italic;\n}\n\n#sidebar-open-btn {\n\tmargin: 10px;\n\tpadding: 5px 8px;\n}\n\n@media (min-width: 700px) {\n\theader {\n\t\tborder-radius: calc(var(--app-bd-rad) * 0.6) calc(var(--app-bd-rad) * 0.6) 0\n\t\t\t0;\n\t}\n\n\t#sidebar-open-btn {\n\t\tdisplay: none;\n\t}\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n\theight: 60px;\n\n\tdisplay: flex;\n\tgap: 8px;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground-color: var(--footer-bg);\n\tcolor: var(--text-light);\n\tfont-size: 20px;\n}\n\n.fa.fa-github {\n\tcolor: currentColor;\n\tfont-size: 30px;\n\n\t&:hover {\n\t\ttransition: transform 0.4s ease-in-out;\n\t\ttransform: rotate(-360deg) scale(1.3);\n\t}\n}\n/* ---------------     /Footer     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modals.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modals.css ***!
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
	background-color: var(--header-bg-right);
	color: var(--text-light);
}

#delete-btn {
	color: var(--header-bg-right);
	border: 2px solid currentColor;
}

/* ---------------     /Display Mode     --------------- */
/* ---------------     Edit Mode     --------------- */

.edit-mode {
	display: flex;
	background-color: var(--edit-mode-bg);
	color: var(--header-bg-left);
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

	border: 1px solid var(--header-bg-left);
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
	background-color: var(--header-bg-left);
}

#cancel-btn {
	color: var(--header-bg-left);
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
`, "",{"version":3,"sources":["webpack://./src/styles/modals.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;;CAEpB,uBAAuB;CACvB,YAAY;CACZ,YAAY;;CAEZ,mBAAmB;CACnB,kCAAkC;CAClC,iBAAiB;AAClB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,uBAAuB;CACvB,wBAAwB;CACxB,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,OAAO;;CAEP,YAAY;;CAEZ,mBAAmB;CACnB,iBAAiB;CACjB,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA,yDAAyD;;AAEzD;CACC,aAAa;CACb,wCAAwC;AACzC;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,sBAAsB;CACtB,qBAAqB;;CAErB,kCAAkC;CAClC,wBAAwB;CACxB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,UAAU;CACV,kBAAkB;CAClB,sBAAsB;AACvB;;AAEA;CACC,OAAO;CACP,aAAa;;CAEb,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,wCAAwC;CACxC,wBAAwB;AACzB;;AAEA;CACC,6BAA6B;CAC7B,8BAA8B;AAC/B;;AAEA,0DAA0D;AAC1D,sDAAsD;;AAEtD;CACC,aAAa;CACb,qCAAqC;CACrC,4BAA4B;AAC7B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,OAAO;;CAEP,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,oCAAoC;CACpC,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,eAAe;AAChB;;AAEA;;;CAGC,OAAO;CACP,gBAAgB;CAChB,gBAAgB;CAChB,YAAY;;CAEZ,uCAAuC;CACvC,kBAAkB;;CAElB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,QAAQ;;CAER,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,wBAAwB;CACxB,uCAAuC;AACxC;;AAEA;CACC,4BAA4B;CAC5B,8BAA8B;AAC/B;AACA,uDAAuD;AACvD,yDAAyD;;AAEzD;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,qCAAqC;CACrC,WAAW;AACZ;;AAEA;CACC,0BAA0B;CAC1B,qCAAqC;AACtC;;AAEA,0DAA0D","sourcesContent":["dialog {\n\t--modal-spacer: 12px;\n\n\twidth: min(88vw, 500px);\n\tmargin: auto;\n\tborder: none;\n\n\tborder-radius: 10px;\n\tbox-shadow: 4px 5px 10px #00000099;\n\tfont-size: 1.3rem;\n}\n\ndialog::backdrop {\n\tbackground-color: #59595980;\n}\n\ndialog > * {\n\tpadding: min(4vw, 18px);\n\tgap: var(--modal-spacer);\n\tflex-direction: column;\n}\n\ndialog .buttons {\n\tdisplay: flex;\n\tgap: var(--modal-spacer);\n}\n\ndialog .buttons > * {\n\tflex: 1;\n\n\tpadding: 6px;\n\n\tborder-radius: 10px;\n\tfont-size: 1.6rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n}\n\n/* ---------------     Display Mode     --------------- */\n\n.display-mode {\n\tdisplay: flex;\n\tbackground-color: var(--display-mode-bg);\n}\n\n.display-mode-header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 1.6rem;\n}\n\n.display-close-btn {\n\t--btn-dim: 33px;\n\talign-self: center;\n\theight: var(--btn-dim);\n\twidth: var(--btn-dim);\n\n\tbackground-color: var(--text-dark);\n\tcolor: var(--text-light);\n\tborder-radius: 20px;\n\tfont-weight: 500;\n}\n\n.display-mode-body {\n\tdisplay: flex;\n}\n\n.display-sidebar {\n\twidth: 6px;\n\tborder-radius: 5px;\n\tbackground-color: grey;\n}\n\n.display-details {\n\tflex: 1;\n\tmargin: 8px 0;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.display-item {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.display-label {\n\twidth: 70px;\n\tpadding-left: 10px;\n\tcolor: var(--text-dark);\n}\n\n.display-value {\n\tflex: 1;\n}\n\n#edit-btn {\n\tbackground-color: var(--header-bg-right);\n\tcolor: var(--text-light);\n}\n\n#delete-btn {\n\tcolor: var(--header-bg-right);\n\tborder: 2px solid currentColor;\n}\n\n/* ---------------     /Display Mode     --------------- */\n/* ---------------     Edit Mode     --------------- */\n\n.edit-mode {\n\tdisplay: flex;\n\tbackground-color: var(--edit-mode-bg);\n\tcolor: var(--header-bg-left);\n}\n\n.edit-mode-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--modal-spacer);\n}\n\n.form-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--modal-spacer);\n}\n\n.form-item {\n\tposition: relative;\n\tflex: 1;\n\n\tdisplay: flex;\n\tgap: 6px;\n}\n\n.form-row p {\n\twidth: 100%;\n\tmargin: var(--modal-spacer) 0 0 76px;\n\tfont-size: 1.2rem;\n}\n\n.edit-mode label {\n\twidth: 70px;\n\ttext-align: end;\n}\n\ninput,\nselect,\ntextarea {\n\tflex: 1;\n\tappearance: none;\n\tpadding: 1px 8px;\n\twidth: 100px;\n\n\tborder: 1px solid var(--header-bg-left);\n\tborder-radius: 5px;\n\n\tfont-family: unset;\n\tfont-size: inherit;\n}\n\ntextarea {\n\tresize: vertical;\n}\n\nform .fa-chevron-down {\n\tposition: absolute;\n\tright: 4%;\n\ttop: 36%;\n\n\tcolor: black;\n\tfont-size: 10px;\n}\n\n#save-btn {\n\tcolor: var(--text-light);\n\tbackground-color: var(--header-bg-left);\n}\n\n#cancel-btn {\n\tcolor: var(--header-bg-left);\n\tborder: 2px solid currentColor;\n}\n/* ---------------     /Edit Mode     --------------- */\n/* ---------------     Project Mode     --------------- */\n\n.project-mode {\n\tdisplay: flex;\n\tbackground-color: pink;\n}\n\n#project-save-btn {\n\tbackground-color: var(--text-project);\n\tcolor: pink;\n}\n\n#project-cancel-btn {\n\tcolor: var(--text-project);\n\tborder: 2px solid var(--text-project);\n}\n\n/* ---------------     /Project Mode     --------------- */\n"],"sourceRoot":""}]);
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
}

.project-filter-btn:hover {
	color: var(--priority-low);
}

.project-filter-btn.selected {
	text-decoration: underline;
	text-underline-offset: 3px;
}

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
		border-right: 2px solid black;
	}

	.sidebar > *,
	.sidebar.open > * {
		opacity: 1;
	}

	#sidebar-close-btn {
		display: none;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,UAAU;CACV,QAAQ;CACR,cAAc;CACd,gBAAgB;;CAEhB,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET,kCAAkC;CAClC,wBAAwB;;CAExB,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,aAAa;;CAEb,oBAAoB;AACrB;;AAEA;CACC,UAAU;;CAEV,wBAAwB;AACzB;;AAEA;CACC,UAAU;;CAEV,sBAAsB;AACvB;;AAEA;CACC,oBAAoB;CACpB,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,0BAA0B;CAC1B,0BAA0B;AAC3B;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,YAAY;;CAEZ,8BAA8B;CAC9B,kBAAkB;AACnB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,mCAAmC;CACnC,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,2BAA2B;CAC3B,0BAA0B;CAC1B,aAAa;CACb,qBAAqB;;CAErB,kCAAkC;CAClC,8BAA8B;CAC9B,eAAe;;CAEf,oBAAoB;AACrB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC;;EAEC,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,cAAc;;EAEd,gBAAgB;;EAEhB,kDAAkD;EAClD,6BAA6B;CAC9B;;CAEA;;EAEC,UAAU;CACX;;CAEA;EACC,aAAa;CACd;AACD","sourcesContent":[".sidebar {\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 0;\n\theight: 100svh;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\n\tbackground-color: var(--footer-bg);\n\tcolor: var(--text-light);\n\n\ttransition: all 1s;\n}\n\n.sidebar.open {\n\twidth: 100vw;\n\tpadding: 20px;\n\n\ttransition: all 0.5s;\n}\n\n.sidebar > * {\n\topacity: 0;\n\n\ttransition: opacity 0.2s;\n}\n\n.sidebar.open > * {\n\topacity: 1;\n\n\ttransition: opacity 1s;\n}\n\n.close-btn {\n\talign-self: flex-end;\n\tfont-size: 40px;\n\tline-height: 22px;\n}\n\n.projects-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n}\n\n.project-name {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.project-filter-btn {\n\tfont-size: 1.4rem;\n}\n\n.project-filter-btn:hover {\n\tcolor: var(--priority-low);\n}\n\n.project-filter-btn.selected {\n\ttext-decoration: underline;\n\ttext-underline-offset: 3px;\n}\n\n.bottom-buttons {\n\tmargin-top: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n}\n\n.hidden-btn {\n\tdisplay: none;\n\tpadding: 5px;\n\n\tborder: 1px solid currentColor;\n\tborder-radius: 5px;\n}\n\n.hidden-btn.open {\n\tdisplay: block;\n}\n\n.hidden-btn:hover {\n\tbackground-color: var(--text-light);\n\tcolor: var(--footer-bg);\n}\n\n.reveal-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.reveal-btn {\n\theight: var(--add-btn-dims);\n\twidth: var(--add-btn-dims);\n\tdisplay: grid;\n\tplace-content: center;\n\n\tborder-radius: var(--add-btn-dims);\n\tborder: 2px solid currentColor;\n\tfont-size: 40px;\n\n\ttransition: all 0.4s;\n}\n\n#add-reveal-btn.open {\n\ttransform: rotate(45deg);\n}\n\n#storage-reveal-btn {\n\tfont-size: 20px;\n}\n\n#storage-reveal-btn.open {\n\ttransform: rotate(90deg);\n}\n\n@media (min-width: 700px) {\n\t.sidebar,\n\t.sidebar.open {\n\t\tposition: inherit;\n\t\twidth: unset;\n\t\theight: unset;\n\t\tpadding: 20px min(20px, 6%);\n\t\tz-index: unset;\n\n\t\ttransition: none;\n\n\t\tborder-radius: 0 0 0 calc(var(--app-bd-rad) * 0.6);\n\t\tborder-right: 2px solid black;\n\t}\n\n\t.sidebar > *,\n\t.sidebar.open > * {\n\t\topacity: 1;\n\t}\n\n\t#sidebar-close-btn {\n\t\tdisplay: none;\n\t}\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modals.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modals.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header-footer.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
	--header-bg-left: #004b6b;
	--header-bg-right: #473262;
	--display-mode-bg: #eee0ff;
	--edit-mode-bg: #e0f6ff;

	--text-light: #fbfcff;
	--text-med: #404040;
	--text-dark: #4f4162;
	--text-project: #821729;

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
	background: linear-gradient(#004b6bbe, #473262be),
		no-repeat center/cover
			url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stones_Porto_DSCF0572.jpg/1024px-Stones_Porto_DSCF0572.jpg);
	font-family: var(--font-main), system-ui, -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
		sans-serif;
}

/* ---------------     /Utilities & Universals     --------------- */
/* ---------------     CONTENT     --------------- */

.flex-container {
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
	background-color: #fff;
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
	}
}

/* ---------------     Main     --------------- */

main {
	flex: 1;
	position: relative;
	padding: calc(var(--main-spacer) / 2);

	display: flex;
	flex-direction: column;
	gap: var(--main-spacer);
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
/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAKA,mDAAmD;;AAEnD;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,uBAAuB;CACvB,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;;;CAGC,gBAAgB;AACjB;;AAEA,oDAAoD;AACpD,mEAAmE;AACnE;CACC,yBAAyB;CACzB,0BAA0B;CAC1B,0BAA0B;CAC1B,uBAAuB;;CAEvB,qBAAqB;CACrB,mBAAmB;CACnB,oBAAoB;CACpB,uBAAuB;;CAEvB,uBAAuB;CACvB,uBAAuB;CACvB,sBAAsB;CACtB,wBAAwB;;CAExB,oBAAoB;;CAEpB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB;;4HAE2H;CAC3H;;YAEW;AACZ;;AAEA,oEAAoE;AACpE,oDAAoD;;AAEpD;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;;CAEpB,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,sBAAsB;AACvB;;AAEA;CACC;EACC,mBAAmB;CACpB;;CAEA;EACC,kBAAkB;;EAElB,sCAAsC;EACtC,gBAAgB;EAChB,cAAc;;EAEd,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;;EAE7B,uBAAuB;EACvB,gCAAgC;CACjC;AACD;;AAEA,iDAAiD;;AAEjD;CACC,OAAO;CACP,kBAAkB;CAClB,qCAAqC;;CAErC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,OAAO;;CAEP,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,UAAU;CACV,uBAAuB;;CAEvB,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA,2DAA2D;;AAE3D;CACC,OAAO;CACP,6BAA6B;CAC7B,2BAA2B;;CAE3B,aAAa;CACb,sBAAsB;CACtB,yBAAyB;AAC1B;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,sBAAsB;CACtB,eAAe;CACf,sCAAsC;;CAEtC,gBAAgB;CAChB,8EAA8E;;CAE9E,aAAa;CACb,sBAAsB;;CAEtB;;;;EAIC;;CAED,uBAAuB;CACvB,kBAAkB;CAClB,yBAAyB;;CAEzB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,sBAAsB;AACvB;;AAEA,4DAA4D;AAC5D,kDAAkD;AAClD,qDAAqD","sourcesContent":["@import url(./sidebar.css);\n@import url(./modals.css);\n@import url(./header-footer.css);\n@import url(\"https://use.typekit.net/pke3bbf.css\");\n\n/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\na {\n\tcolor: unset;\n}\n\nbutton {\n\tcolor: unset;\n\tbackground-color: unset;\n\tborder: none;\n\tfont-size: inherit;\n\tfont-family: unset;\n\tcursor: pointer;\n}\n\nh1,\nh2,\nh3 {\n\tfont-size: unset;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n:root {\n\t--header-bg-left: #004b6b;\n\t--header-bg-right: #473262;\n\t--display-mode-bg: #eee0ff;\n\t--edit-mode-bg: #e0f6ff;\n\n\t--text-light: #fbfcff;\n\t--text-med: #404040;\n\t--text-dark: #4f4162;\n\t--text-project: #821729;\n\n\t--priority-low: #87bbf2;\n\t--priority-med: #ffc000;\n\t--priority-hi: #c00000;\n\t--priority-none: #a6a6a6;\n\n\t--footer-bg: #222a35;\n\n\t--font-main: futura-pt;\n}\n\nbody {\n\tmin-height: 100svh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: linear-gradient(#004b6bbe, #473262be),\n\t\tno-repeat center/cover\n\t\t\turl(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stones_Porto_DSCF0572.jpg/1024px-Stones_Porto_DSCF0572.jpg);\n\tfont-family: var(--font-main), system-ui, -apple-system, BlinkMacSystemFont,\n\t\t\"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n.flex-container {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.app-content {\n\t--main-spacer: 20px;\n\t--add-btn-dims: 50px;\n\n\tflex: 1;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #fff;\n}\n\n@media (min-width: 700px) {\n\t.flex-container {\n\t\tflex-direction: row;\n\t}\n\n\t.app-content {\n\t\t--app-bd-rad: 10px;\n\n\t\twidth: min(calc(100vw - 40px), 1400px);\n\t\tmin-height: 80vh;\n\t\tflex: 0 0 auto;\n\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tgrid-template-rows: 60px auto;\n\n\t\tborder: 3px solid black;\n\t\tborder-radius: var(--app-bd-rad);\n\t}\n}\n\n/* ---------------     Main     --------------- */\n\nmain {\n\tflex: 1;\n\tposition: relative;\n\tpadding: calc(var(--main-spacer) / 2);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--main-spacer);\n}\n\n#project-displayed {\n\tfont-size: 1.8rem;\n}\n\n#statuses-container {\n\t--status-spacer: 10px;\n\tflex: 1;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n.status-row {\n\tflex: auto;\n\twidth: min(480px, 100%);\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: var(--main-spacer);\n}\n\n/* ---------------     Status columns     --------------- */\n\n.status-column {\n\tflex: 1;\n\tpadding: var(--status-spacer);\n\tmin-width: min(230px, 100%);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--status-spacer);\n}\n\n.status-name {\n\tfont-size: 1.6rem;\n\tfont-weight: 500;\n}\n\n.task-card {\n\t--priority-width: 16px;\n\t--side-pad: 9px;\n\t--priority-color: var(--priority-none);\n\n\tmin-height: 60px;\n\tpadding: 4px var(--side-pad) 4px calc(var(--priority-width) + var(--side-pad));\n\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\tvar(--priority-color) var(--priority-width),\n\t\ttransparent var(--priority-width)\n\t);\n\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\tbox-shadow: 6px 4px black;\n\n\tfont-weight: 500;\n\tcursor: pointer;\n}\n\n.task-card[data-priority=\"high\"] {\n\t--priority-color: var(--priority-hi);\n}\n\n.task-card[data-priority=\"medium\"] {\n\t--priority-color: var(--priority-med);\n}\n\n.task-card[data-priority=\"low\"] {\n\t--priority-color: var(--priority-low);\n}\n\n#done-column .task-card {\n\t--priority-color: green;\n}\n\n.card-section {\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.task-card .title {\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tline-height: 90%;\n}\n\n.card-delete-btn {\n\tfont-size: 20px;\n}\n\n.card-section:last-child {\n\tcolor: var(--text-med);\n}\n\n/* ---------------     /Status columns     --------------- */\n/* ---------------     /Main     --------------- */\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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
	DISPLAY_MODE: "displayMode",
	EDIT_MODE: "editMode",
	EDIT_MODE_POP: "editModePop",
	PROJECT_MODE: "projectMode",
	DELETE_TASK: "deleteTask",
	ADD_TASK: "addTask",
	UPDATE_TASK: "updateTask",
	CARD_CLICK: "cardClick",
	CARD_DELETE: "cardDelete",
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

	// Make each task clickable
	const TaskCards = document.querySelectorAll(".task-card");
	TaskCards.forEach((card) => {
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
						: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)(
								"button",
								{
									type: "button",
									classList: "project-delete-btn",
								},
								[
									(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)("i", {
										classList: "fa fa-trash-o",
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
		const taskNoId = JSON.parse(JSON.stringify(task.getProperties()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLHdGQUF3RixhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxL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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywrRkFBK0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssTUFBTSxZQUFZLGNBQWMsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksY0FB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O0FBQ0E7O0FBRUEsQ0FBQywyQ0FBTTtBQUNQOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCLGNBQWMsa0RBQUs7O0FBRW5CO0FBQ0EsMENBQTBDLHdEQUFjO0FBQ3hEO0FBQ0EsSUFBSTtBQUNKOztBQUVBLG9CQUFvQiwyQ0FBTSxTQUFTLDJDQUFNO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRywyQ0FBTSxTQUFTLDJDQUFNO0FBQ3hCLElBQUk7QUFDSixHQUFHLDJDQUFNLFNBQVMsMkNBQU07QUFDeEI7QUFDQSxFQUFFLDJDQUFNO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJDQUFNLFNBQVMsMkNBQU07QUFDdEI7O0FBRUEscUJBQXFCLDJDQUFNLFdBQVcsMkNBQU07QUFDNUMsc0JBQXNCLDJDQUFNLFdBQVcsMkNBQU07QUFDN0MsMkNBQU0sU0FBUywyQ0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9oZWFkZXItZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvbW9kYWxzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGFscy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy93ZWItc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuXHRoZWlnaHQ6IDYwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHR2YXIoLS1oZWFkZXItYmctbGVmdCksXG5cdFx0dmFyKC0taGVhZGVyLWJnLXJpZ2h0KVxuXHQpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRib3gtc2hhZG93OiAwIDNweCAzcHggIzAwMDAwMDRlO1xufVxuXG5oZWFkZXIgaDEge1xuXHRtYXJnaW46IDEwcHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuI3NpZGViYXItb3Blbi1idG4ge1xuXHRtYXJnaW46IDEwcHg7XG5cdHBhZGRpbmc6IDVweCA4cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHRoZWFkZXIge1xuXHRcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIGNhbGModmFyKC0tYXBwLWJkLXJhZCkgKiAwLjYpIDBcblx0XHRcdDA7XG5cdH1cblxuXHQjc2lkZWJhci1vcGVuLWJ0biB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG5cdGhlaWdodDogNjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDhweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcblx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5mYS5mYS1naXRodWIge1xuXHRjb2xvcjogY3VycmVudENvbG9yO1xuXHRmb250LXNpemU6IDMwcHg7XG5cblx0Jjpob3ZlciB7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcblx0fVxufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXItZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtREFBbUQ7O0FBRW5EO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7O0NBRVosYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7O0NBRW5COzs7O0VBSUM7Q0FDRCx3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0M7RUFDQztJQUNFO0NBQ0g7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQSxvREFBb0Q7O0FBRXBELG1EQUFtRDs7QUFFbkQ7Q0FDQyxZQUFZOztDQUVaLGFBQWE7Q0FDYixRQUFRO0NBQ1IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsa0NBQWtDO0NBQ2xDLHdCQUF3QjtDQUN4QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7O0NBRWY7RUFDQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0NBQ3RDO0FBQ0Q7QUFDQSxvREFBb0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmhlYWRlciB7XFxuXFx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0dmFyKC0taGVhZGVyLWJnLWxlZnQpLFxcblxcdFxcdHZhcigtLWhlYWRlci1iZy1yaWdodClcXG5cXHQpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAzcHggIzAwMDAwMDRlO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNzaWRlYmFyLW9wZW4tYnRuIHtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0cGFkZGluZzogNXB4IDhweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KSBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KSAwXFxuXFx0XFx0XFx0MDtcXG5cXHR9XFxuXFxuXFx0I3NpZGViYXItb3Blbi1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNjBweDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogOHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZmEuZmEtZ2l0aHViIHtcXG5cXHRjb2xvcjogY3VycmVudENvbG9yO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjMpO1xcblxcdH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG5cdC0tbW9kYWwtc3BhY2VyOiAxMnB4O1xuXG5cdHdpZHRoOiBtaW4oODh2dywgNTAwcHgpO1xuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlcjogbm9uZTtcblxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiA0cHggNXB4IDEwcHggIzAwMDAwMDk5O1xuXHRmb250LXNpemU6IDEuM3JlbTtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk4MDtcbn1cblxuZGlhbG9nID4gKiB7XG5cdHBhZGRpbmc6IG1pbig0dncsIDE4cHgpO1xuXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmRpYWxvZyAuYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuZGlhbG9nIC5idXR0b25zID4gKiB7XG5cdGZsZXg6IDE7XG5cblx0cGFkZGluZzogNnB4O1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZGlzcGxheS1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1tb2RlLWJnKTtcbn1cblxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uZGlzcGxheS1jbG9zZS1idG4ge1xuXHQtLWJ0bi1kaW06IDMzcHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0aGVpZ2h0OiB2YXIoLS1idG4tZGltKTtcblx0d2lkdGg6IHZhcigtLWJ0bi1kaW0pO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRpc3BsYXktbW9kZS1ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLmRpc3BsYXktc2lkZWJhciB7XG5cdHdpZHRoOiA2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmRpc3BsYXktZGV0YWlscyB7XG5cdGZsZXg6IDE7XG5cdG1hcmdpbjogOHB4IDA7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xufVxuXG4uZGlzcGxheS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxMHB4O1xufVxuXG4uZGlzcGxheS1sYWJlbCB7XG5cdHdpZHRoOiA3MHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuXG4uZGlzcGxheS12YWx1ZSB7XG5cdGZsZXg6IDE7XG59XG5cbiNlZGl0LWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1yaWdodCk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuI2RlbGV0ZS1idG4ge1xuXHRjb2xvcjogdmFyKC0taGVhZGVyLWJnLXJpZ2h0KTtcblx0Ym9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9EaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZWRpdC1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1tb2RlLWJnKTtcblx0Y29sb3I6IHZhcigtLWhlYWRlci1iZy1sZWZ0KTtcbn1cblxuLmVkaXQtbW9kZS1kZXRhaWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xufVxuXG4uZm9ybS1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogdmFyKC0tbW9kYWwtc3BhY2VyKTtcbn1cblxuLmZvcm0taXRlbSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZmxleDogMTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDZweDtcbn1cblxuLmZvcm0tcm93IHAge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiB2YXIoLS1tb2RhbC1zcGFjZXIpIDAgMCA3NnB4O1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmVkaXQtbW9kZSBsYWJlbCB7XG5cdHdpZHRoOiA3MHB4O1xuXHR0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuXHRmbGV4OiAxO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRwYWRkaW5nOiAxcHggOHB4O1xuXHR3aWR0aDogMTAwcHg7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWJnLWxlZnQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cblx0Zm9udC1mYW1pbHk6IHVuc2V0O1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhIHtcblx0cmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuZm9ybSAuZmEtY2hldnJvbi1kb3duIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogNCU7XG5cdHRvcDogMzYlO1xuXG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxMHB4O1xufVxuXG4jc2F2ZS1idG4ge1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1sZWZ0KTtcbn1cblxuI2NhbmNlbC1idG4ge1xuXHRjb2xvcjogdmFyKC0taGVhZGVyLWJnLWxlZnQpO1xuXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBQcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ucHJvamVjdC1tb2RlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cblxuI3Byb2plY3Qtc2F2ZS1idG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXByb2plY3QpO1xuXHRjb2xvcjogcGluaztcbn1cblxuI3Byb2plY3QtY2FuY2VsLWJ0biB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LXByb2plY3QpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LXByb2plY3QpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Qcm9qZWN0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21vZGFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxvQkFBb0I7O0NBRXBCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osWUFBWTs7Q0FFWixtQkFBbUI7Q0FDbkIsa0NBQWtDO0NBQ2xDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLE9BQU87O0NBRVAsWUFBWTs7Q0FFWixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBRUEseURBQXlEOztBQUV6RDtDQUNDLGFBQWE7Q0FDYix3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLHFCQUFxQjs7Q0FFckIsa0NBQWtDO0NBQ2xDLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTs7Q0FFYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLHdDQUF3QztDQUN4Qyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0IsOEJBQThCO0FBQy9COztBQUVBLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FBRXREO0NBQ0MsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87O0NBRVAsYUFBYTtDQUNiLFFBQVE7QUFDVDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxvQ0FBb0M7Q0FDcEMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7OztDQUdDLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFlBQVk7O0NBRVosdUNBQXVDO0NBQ3ZDLGtCQUFrQjs7Q0FFbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTs7Q0FFUixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4Qix1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsOEJBQThCO0FBQy9CO0FBQ0EsdURBQXVEO0FBQ3ZELHlEQUF5RDs7QUFFekQ7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MscUNBQXFDO0NBQ3JDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixxQ0FBcUM7QUFDdEM7O0FBRUEsMERBQTBEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZyB7XFxuXFx0LS1tb2RhbC1zcGFjZXI6IDEycHg7XFxuXFxuXFx0d2lkdGg6IG1pbig4OHZ3LCA1MDBweCk7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJveC1zaGFkb3c6IDRweCA1cHggMTBweCAjMDAwMDAwOTk7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk4MDtcXG59XFxuXFxuZGlhbG9nID4gKiB7XFxuXFx0cGFkZGluZzogbWluKDR2dywgMThweCk7XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpYWxvZyAuYnV0dG9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbmRpYWxvZyAuYnV0dG9ucyA+ICoge1xcblxcdGZsZXg6IDE7XFxuXFxuXFx0cGFkZGluZzogNnB4O1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBEaXNwbGF5IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5kaXNwbGF5LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1tb2RlLWJnKTtcXG59XFxuXFxuLmRpc3BsYXktbW9kZS1oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uZGlzcGxheS1jbG9zZS1idG4ge1xcblxcdC0tYnRuLWRpbTogMzNweDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiB2YXIoLS1idG4tZGltKTtcXG5cXHR3aWR0aDogdmFyKC0tYnRuLWRpbSk7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGlzcGxheS1tb2RlLWJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5LXNpZGViYXIge1xcblxcdHdpZHRoOiA2cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5kaXNwbGF5LWRldGFpbHMge1xcblxcdGZsZXg6IDE7XFxuXFx0bWFyZ2luOiA4cHggMDtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1pdGVtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLmRpc3BsYXktbGFiZWwge1xcblxcdHdpZHRoOiA3MHB4O1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG59XFxuXFxuLmRpc3BsYXktdmFsdWUge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbiNlZGl0LWJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLXJpZ2h0KTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbiNkZWxldGUtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0taGVhZGVyLWJnLXJpZ2h0KTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Rpc3BsYXkgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFZGl0IE1vZGUgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5lZGl0LW1vZGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1tb2RlLWJnKTtcXG5cXHRjb2xvcjogdmFyKC0taGVhZGVyLWJnLWxlZnQpO1xcbn1cXG5cXG4uZWRpdC1tb2RlLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1vZGFsLXNwYWNlcik7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tb2RhbC1zcGFjZXIpO1xcbn1cXG5cXG4uZm9ybS1pdGVtIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogNnB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgcCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiB2YXIoLS1tb2RhbC1zcGFjZXIpIDAgMCA3NnB4O1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZWRpdC1tb2RlIGxhYmVsIHtcXG5cXHR3aWR0aDogNzBweDtcXG5cXHR0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0ZmxleDogMTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdHBhZGRpbmc6IDFweCA4cHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1iZy1sZWZ0KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0Zm9udC1mYW1pbHk6IHVuc2V0O1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxudGV4dGFyZWEge1xcblxcdHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmZvcm0gLmZhLWNoZXZyb24tZG93biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiA0JTtcXG5cXHR0b3A6IDM2JTtcXG5cXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4jc2F2ZS1idG4ge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctbGVmdCk7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG5cXHRjb2xvcjogdmFyKC0taGVhZGVyLWJnLWxlZnQpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRWRpdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFByb2plY3QgTW9kZSAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3QtbW9kZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4jcHJvamVjdC1zYXZlLWJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG5cXHRjb2xvcjogcGluaztcXG59XFxuXFxuI3Byb2plY3QtY2FuY2VsLWJ0biB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtcHJvamVjdCk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1wcm9qZWN0KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUHJvamVjdCBNb2RlICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlYmFyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAxMDBzdmg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5zaWRlYmFyLm9wZW4ge1xuXHR3aWR0aDogMTAwdnc7XG5cdHBhZGRpbmc6IDIwcHg7XG5cblx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5zaWRlYmFyID4gKiB7XG5cdG9wYWNpdHk6IDA7XG5cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uc2lkZWJhci5vcGVuID4gKiB7XG5cdG9wYWNpdHk6IDE7XG5cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbn1cblxuLmNsb3NlLWJ0biB7XG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdC1maWx0ZXItYnRuIHtcblx0Zm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5wcm9qZWN0LWZpbHRlci1idG46aG92ZXIge1xuXHRjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcbn1cblxuLnByb2plY3QtZmlsdGVyLWJ0bi5zZWxlY3RlZCB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLmJvdHRvbS1idXR0b25zIHtcblx0bWFyZ2luLXRvcDogYXV0bztcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxMnB4O1xufVxuXG4uaGlkZGVuLWJ0biB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHBhZGRpbmc6IDVweDtcblxuXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhpZGRlbi1idG4ub3BlbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGlkZGVuLWJ0bjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRjb2xvcjogdmFyKC0tZm9vdGVyLWJnKTtcbn1cblxuLnJldmVhbC1idG5zIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmV2ZWFsLWJ0biB7XG5cdGhlaWdodDogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcblx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1hZGQtYnRuLWRpbXMpO1xuXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG5cdGZvbnQtc2l6ZTogNDBweDtcblxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuI2FkZC1yZXZlYWwtYnRuLm9wZW4ge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbiNzdG9yYWdlLXJldmVhbC1idG4ge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbiNzdG9yYWdlLXJldmVhbC1idG4ub3BlbiB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG5cdC5zaWRlYmFyLFxuXHQuc2lkZWJhci5vcGVuIHtcblx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0aGVpZ2h0OiB1bnNldDtcblx0XHRwYWRkaW5nOiAyMHB4IG1pbigyMHB4LCA2JSk7XG5cdFx0ei1pbmRleDogdW5zZXQ7XG5cblx0XHR0cmFuc2l0aW9uOiBub25lO1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDAgY2FsYyh2YXIoLS1hcHAtYmQtcmFkKSAqIDAuNik7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG5cdH1cblxuXHQuc2lkZWJhciA+ICosXG5cdC5zaWRlYmFyLm9wZW4gPiAqIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0I3NpZGViYXItY2xvc2UtYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FDUixjQUFjO0NBQ2QsZ0JBQWdCOztDQUVoQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7O0NBRVQsa0NBQWtDO0NBQ2xDLHdCQUF3Qjs7Q0FFeEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7O0NBRWIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTs7Q0FFVix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxVQUFVOztDQUVWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZOztDQUVaLDhCQUE4QjtDQUM5QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHFCQUFxQjs7Q0FFckIsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5QixlQUFlOztDQUVmLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsY0FBYzs7RUFFZCxnQkFBZ0I7O0VBRWhCLGtEQUFrRDtFQUNsRCw2QkFBNkI7Q0FDOUI7O0NBRUE7O0VBRUMsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmcpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG5cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5zaWRlYmFyLm9wZW4ge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcblxcdG9wYWNpdHk6IDA7XFxuXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG5cXG4uc2lkZWJhci5vcGVuID4gKiB7XFxuXFx0b3BhY2l0eTogMTtcXG5cXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRmb250LXNpemU6IDQwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1maWx0ZXItYnRuIHtcXG5cXHRmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnByb2plY3QtZmlsdGVyLWJ0bjpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi5wcm9qZWN0LWZpbHRlci1idG4uc2VsZWN0ZWQge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xcbn1cXG5cXG4uYm90dG9tLWJ1dHRvbnMge1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTJweDtcXG59XFxuXFxuLmhpZGRlbi1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oaWRkZW4tYnRuLm9wZW4ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVuLWJ0bjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuXFx0Y29sb3I6IHZhcigtLWZvb3Rlci1iZyk7XFxufVxcblxcbi5yZXZlYWwtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZXZlYWwtYnRuIHtcXG5cXHRoZWlnaHQ6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0d2lkdGg6IHZhcigtLWFkZC1idG4tZGltcyk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYWRkLWJ0bi1kaW1zKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcblxcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4jYWRkLXJldmVhbC1idG4ub3BlbiB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jc3RvcmFnZS1yZXZlYWwtYnRuIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzdG9yYWdlLXJldmVhbC1idG4ub3BlbiB7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuc2lkZWJhcixcXG5cXHQuc2lkZWJhci5vcGVuIHtcXG5cXHRcXHRwb3NpdGlvbjogaW5oZXJpdDtcXG5cXHRcXHR3aWR0aDogdW5zZXQ7XFxuXFx0XFx0aGVpZ2h0OiB1bnNldDtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IG1pbigyMHB4LCA2JSk7XFxuXFx0XFx0ei1pbmRleDogdW5zZXQ7XFxuXFxuXFx0XFx0dHJhbnNpdGlvbjogbm9uZTtcXG5cXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMCBjYWxjKHZhcigtLWFwcC1iZC1yYWQpICogMC42KTtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG5cXHR9XFxuXFxuXFx0LnNpZGViYXIgPiAqLFxcblxcdC5zaWRlYmFyLm9wZW4gPiAqIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQjc2lkZWJhci1jbG9zZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLWZvb3Rlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VzZS50eXBla2l0Lm5ldC9wa2UzYmJmLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHRjb2xvcjogdW5zZXQ7XG59XG5cbmJ1dHRvbiB7XG5cdGNvbG9yOiB1bnNldDtcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Zm9udC1zaXplOiBpbmhlcml0O1xuXHRmb250LWZhbWlseTogdW5zZXQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG5oMixcbmgzIHtcblx0Zm9udC1zaXplOiB1bnNldDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG46cm9vdCB7XG5cdC0taGVhZGVyLWJnLWxlZnQ6ICMwMDRiNmI7XG5cdC0taGVhZGVyLWJnLXJpZ2h0OiAjNDczMjYyO1xuXHQtLWRpc3BsYXktbW9kZS1iZzogI2VlZTBmZjtcblx0LS1lZGl0LW1vZGUtYmc6ICNlMGY2ZmY7XG5cblx0LS10ZXh0LWxpZ2h0OiAjZmJmY2ZmO1xuXHQtLXRleHQtbWVkOiAjNDA0MDQwO1xuXHQtLXRleHQtZGFyazogIzRmNDE2Mjtcblx0LS10ZXh0LXByb2plY3Q6ICM4MjE3Mjk7XG5cblx0LS1wcmlvcml0eS1sb3c6ICM4N2JiZjI7XG5cdC0tcHJpb3JpdHktbWVkOiAjZmZjMDAwO1xuXHQtLXByaW9yaXR5LWhpOiAjYzAwMDAwO1xuXHQtLXByaW9yaXR5LW5vbmU6ICNhNmE2YTY7XG5cblx0LS1mb290ZXItYmc6ICMyMjJhMzU7XG5cblx0LS1mb250LW1haW46IGZ1dHVyYS1wdDtcbn1cblxuYm9keSB7XG5cdG1pbi1oZWlnaHQ6IDEwMHN2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDRiNmJiZSwgIzQ3MzI2MmJlKSxcblx0XHRuby1yZXBlYXQgY2VudGVyL2NvdmVyXG5cdFx0XHR1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY1L1N0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcvMTAyNHB4LVN0b25lc19Qb3J0b19EU0NGMDU3Mi5qcGcpO1xuXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG5cdFx0XCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcblx0XHRzYW5zLXNlcmlmO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5mbGV4LWNvbnRhaW5lciB7XG5cdGZsZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLWNvbnRlbnQge1xuXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xuXHQtLWFkZC1idG4tZGltczogNTBweDtcblxuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuZmxleC1jb250YWluZXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblxuXHQuYXBwLWNvbnRlbnQge1xuXHRcdC0tYXBwLWJkLXJhZDogMTBweDtcblxuXHRcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xuXHRcdG1pbi1oZWlnaHQ6IDgwdmg7XG5cdFx0ZmxleDogMCAwIGF1dG87XG5cblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcblxuXHRcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1iZC1yYWQpO1xuXHR9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpIC8gMik7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbiNwcm9qZWN0LWRpc3BsYXllZCB7XG5cdGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcblx0LS1zdGF0dXMtc3BhY2VyOiAxMHB4O1xuXHRmbGV4OiAxO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XG59XG5cbi5zdGF0dXMtcm93IHtcblx0ZmxleDogYXV0bztcblx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zdGF0dXMtY29sdW1uIHtcblx0ZmxleDogMTtcblx0cGFkZGluZzogdmFyKC0tc3RhdHVzLXNwYWNlcik7XG5cdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xufVxuXG4uc3RhdHVzLW5hbWUge1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhc2stY2FyZCB7XG5cdC0tcHJpb3JpdHktd2lkdGg6IDE2cHg7XG5cdC0tc2lkZS1wYWQ6IDlweDtcblx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbm9uZSk7XG5cblx0bWluLWhlaWdodDogNjBweDtcblx0cGFkZGluZzogNHB4IHZhcigtLXNpZGUtcGFkKSA0cHggY2FsYyh2YXIoLS1wcmlvcml0eS13aWR0aCkgKyB2YXIoLS1zaWRlLXBhZCkpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXG5cdFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXG5cdCk7XG5cblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym94LXNoYWRvdzogNnB4IDRweCBibGFjaztcblxuXHRmb250LXdlaWdodDogNTAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaSk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cIm1lZGl1bVwiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZCk7XG59XG5cbi50YXNrLWNhcmRbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG5cdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XG59XG5cbiNkb25lLWNvbHVtbiAudGFzay1jYXJkIHtcblx0LS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XG59XG5cbi5jYXJkLXNlY3Rpb24ge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNhcmQgLnRpdGxlIHtcblx0Zm9udC1zaXplOiAxLjRyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5cbi5jYXJkLWRlbGV0ZS1idG4ge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkLXNlY3Rpb246bGFzdC1jaGlsZCB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LW1lZCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1N0YXR1cyBjb2x1bW5zICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBLG1EQUFtRDs7QUFFbkQ7OztDQUdDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBOzs7Q0FHQyxnQkFBZ0I7QUFDakI7O0FBRUEsb0RBQW9EO0FBQ3BELG1FQUFtRTtBQUNuRTtDQUNDLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCLHVCQUF1Qjs7Q0FFdkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsdUJBQXVCOztDQUV2Qix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0Qix3QkFBd0I7O0NBRXhCLG9CQUFvQjs7Q0FFcEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEI7OzRIQUUySDtDQUMzSDs7WUFFVztBQUNaOztBQUVBLG9FQUFvRTtBQUNwRSxvREFBb0Q7O0FBRXBEO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7O0NBRXBCLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGtCQUFrQjs7RUFFbEIsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCOztFQUU3Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0NBQ2pDO0FBQ0Q7O0FBRUEsaURBQWlEOztBQUVqRDtDQUNDLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIscUNBQXFDOztDQUVyQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixPQUFPOztDQUVQLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUEsMkRBQTJEOztBQUUzRDtDQUNDLE9BQU87Q0FDUCw2QkFBNkI7Q0FDN0IsMkJBQTJCOztDQUUzQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLHNDQUFzQzs7Q0FFdEMsZ0JBQWdCO0NBQ2hCLDhFQUE4RTs7Q0FFOUUsYUFBYTtDQUNiLHNCQUFzQjs7Q0FFdEI7Ozs7RUFJQzs7Q0FFRCx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLHlCQUF5Qjs7Q0FFekIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUEsNERBQTREO0FBQzVELGtEQUFrRDtBQUNsRCxxREFBcURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9zaWRlYmFyLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9tb2RhbHMuY3NzKTtcXG5AaW1wb3J0IHVybCguL2hlYWRlci1mb290ZXIuY3NzKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvcGtlM2JiZi5jc3NcXFwiKTtcXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcblxcdGNvbG9yOiB1bnNldDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRjb2xvcjogdW5zZXQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cXHRmb250LWZhbWlseTogdW5zZXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuXFx0Zm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbjpyb290IHtcXG5cXHQtLWhlYWRlci1iZy1sZWZ0OiAjMDA0YjZiO1xcblxcdC0taGVhZGVyLWJnLXJpZ2h0OiAjNDczMjYyO1xcblxcdC0tZGlzcGxheS1tb2RlLWJnOiAjZWVlMGZmO1xcblxcdC0tZWRpdC1tb2RlLWJnOiAjZTBmNmZmO1xcblxcblxcdC0tdGV4dC1saWdodDogI2ZiZmNmZjtcXG5cXHQtLXRleHQtbWVkOiAjNDA0MDQwO1xcblxcdC0tdGV4dC1kYXJrOiAjNGY0MTYyO1xcblxcdC0tdGV4dC1wcm9qZWN0OiAjODIxNzI5O1xcblxcblxcdC0tcHJpb3JpdHktbG93OiAjODdiYmYyO1xcblxcdC0tcHJpb3JpdHktbWVkOiAjZmZjMDAwO1xcblxcdC0tcHJpb3JpdHktaGk6ICNjMDAwMDA7XFxuXFx0LS1wcmlvcml0eS1ub25lOiAjYTZhNmE2O1xcblxcblxcdC0tZm9vdGVyLWJnOiAjMjIyYTM1O1xcblxcblxcdC0tZm9udC1tYWluOiBmdXR1cmEtcHQ7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDRiNmJiZSwgIzQ3MzI2MmJlKSxcXG5cXHRcXHRuby1yZXBlYXQgY2VudGVyL2NvdmVyXFxuXFx0XFx0XFx0dXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNi82NS9TdG9uZXNfUG9ydG9fRFNDRjA1NzIuanBnLzEwMjRweC1TdG9uZXNfUG9ydG9fRFNDRjA1NzIuanBnKTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuXFx0XFx0XFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG5cXHRcXHRzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250ZW50IHtcXG5cXHQtLW1haW4tc3BhY2VyOiAyMHB4O1xcblxcdC0tYWRkLWJ0bi1kaW1zOiA1MHB4O1xcblxcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG5cXHQuZmxleC1jb250YWluZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcblxcblxcdC5hcHAtY29udGVudCB7XFxuXFx0XFx0LS1hcHAtYmQtcmFkOiAxMHB4O1xcblxcblxcdFxcdHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIDQwcHgpLCAxNDAwcHgpO1xcblxcdFxcdG1pbi1oZWlnaHQ6IDgwdmg7XFxuXFx0XFx0ZmxleDogMCAwIGF1dG87XFxuXFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuXFxuXFx0XFx0Ym9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJkLXJhZCk7XFxuXFx0fVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcblxcdGZsZXg6IDE7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjZXIpIC8gMik7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogdmFyKC0tbWFpbi1zcGFjZXIpO1xcbn1cXG5cXG4jcHJvamVjdC1kaXNwbGF5ZWQge1xcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4jc3RhdHVzZXMtY29udGFpbmVyIHtcXG5cXHQtLXN0YXR1cy1zcGFjZXI6IDEwcHg7XFxuXFx0ZmxleDogMTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IHZhcigtLW1haW4tc3BhY2VyKTtcXG59XFxuXFxuLnN0YXR1cy1yb3cge1xcblxcdGZsZXg6IGF1dG87XFxuXFx0d2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiB2YXIoLS1tYWluLXNwYWNlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU3RhdHVzIGNvbHVtbnMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zdGF0dXMtY29sdW1uIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IHZhcigtLXN0YXR1cy1zcGFjZXIpO1xcblxcdG1pbi13aWR0aDogbWluKDIzMHB4LCAxMDAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiB2YXIoLS1zdGF0dXMtc3BhY2VyKTtcXG59XFxuXFxuLnN0YXR1cy1uYW1lIHtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG5cXHQtLXByaW9yaXR5LXdpZHRoOiAxNnB4O1xcblxcdC0tc2lkZS1wYWQ6IDlweDtcXG5cXHQtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1ub25lKTtcXG5cXG5cXHRtaW4taGVpZ2h0OiA2MHB4O1xcblxcdHBhZGRpbmc6IDRweCB2YXIoLS1zaWRlLXBhZCkgNHB4IGNhbGModmFyKC0tcHJpb3JpdHktd2lkdGgpICsgdmFyKC0tc2lkZS1wYWQpKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0LFxcblxcdFxcdHZhcigtLXByaW9yaXR5LWNvbG9yKSB2YXIoLS1wcmlvcml0eS13aWR0aCksXFxuXFx0XFx0dHJhbnNwYXJlbnQgdmFyKC0tcHJpb3JpdHktd2lkdGgpXFxuXFx0KTtcXG5cXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym94LXNoYWRvdzogNnB4IDRweCBibGFjaztcXG5cXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IHZhcigtLXByaW9yaXR5LWhpKTtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkKTtcXG59XFxuXFxuLnRhc2stY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxuXFx0LS1wcmlvcml0eS1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcXG59XFxuXFxuI2RvbmUtY29sdW1uIC50YXNrLWNhcmQge1xcblxcdC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2FyZC1zZWN0aW9uIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNhcmQgLnRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNHJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGxpbmUtaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5jYXJkLWRlbGV0ZS1idG4ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNhcmQtc2VjdGlvbjpsYXN0LWNoaWxkIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1tZWQpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TdGF0dXMgY29sdW1ucyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFB1YlN1YiwgRVZFTlRTIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrcyA9ICgoKSA9PiB7XG5cdGxldCBfdGFza0xpc3QgPSBuZXcgU2V0KCk7XG5cdGxldCBfaWRDb3VudGVyID0gMTtcblxuXHRjb25zdCBfY29sdW1uTmFtZXMgPSBbXCJiYWNrbG9nXCIsIFwidG8tZG9cIiwgXCJpbi1wcm9ncmVzc1wiLCBcImRvbmVcIl07XG5cblx0bGV0IF9wcm9wZXJ0eU5hbWVzID0gW1xuXHRcdFwidGl0bGVcIixcblx0XHRcInN0YXR1c1wiLFxuXHRcdFwicHJvamVjdFwiLFxuXHRcdFwicHJpb3JpdHlcIixcblx0XHRcIm5vdGVzXCIsXG5cdFx0XCJkdWVcIixcblx0XHRcInRhZ3NcIixcblx0XTtcblxuXHRsZXQgX3ByaW9yaXRpZXMgPSBbXCJoaWdoXCIsIFwibWVkaXVtXCIsIFwibG93XCJdO1xuXG5cdGZ1bmN0aW9uIF9kYXRlU29ydChvdXRnb2luZ1Rhc2tzKSB7XG5cdFx0cmV0dXJuIG91dGdvaW5nVGFza3Muc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0Y29uc3QgZGF0ZUEgPSArYS5nZXRQcm9wZXJ0aWVzKCkuZHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xuXHRcdFx0Y29uc3QgZGF0ZUIgPSArYi5nZXRQcm9wZXJ0aWVzKCkuZHVlLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xuXHRcdFx0cmV0dXJuICFkYXRlQSA/IDEgOiBkYXRlQiAtIGRhdGVBO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2NvbHVtblNvcnQob3V0Z29pbmdUYXNrcykge1xuXHRcdHJldHVybiBfY29sdW1uTmFtZXMubWFwKChjb2x1bW5OYW1lKSA9PiBbXG5cdFx0XHRjb2x1bW5OYW1lLFxuXHRcdFx0X2RhdGVTb3J0KFxuXHRcdFx0XHRvdXRnb2luZ1Rhc2tzLmZpbHRlcihcblx0XHRcdFx0XHQodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKCkuc3RhdHVzID09PSBjb2x1bW5OYW1lXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XSk7XG5cdH1cblxuXHRmdW5jdGlvbiBfdGFza0ZhY3RvcnkoKSB7XG5cdFx0Y29uc3QgX3Rhc2sgPSB7fTtcblx0XHRjb25zdCBzZXRQcm9wZXJ0eSA9IChrZXksIHZhbHVlKSA9PiAoX3Rhc2tba2V5XSA9IHZhbHVlKTtcblx0XHRfcHJvcGVydHlOYW1lcy5mb3JFYWNoKChwcm9wKSA9PiBzZXRQcm9wZXJ0eShwcm9wLCBcIlwiKSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldFByb3BlcnRpZXM6ICgpID0+IF90YXNrLFxuXHRcdFx0c2V0UHJvcGVydHksXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2soaW5wdXRWYWx1ZXNBcnJheSkge1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBfdGFza0ZhY3RvcnkoKTtcblx0XHRuZXdUYXNrLnNldFByb3BlcnR5KFwiaWRcIiwgX2lkQ291bnRlcisrKTtcblx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdG5ld1Rhc2suc2V0UHJvcGVydHkocGFpclswXSwgcGFpclsxXSk7XG5cdFx0fSk7XG5cdFx0X3Rhc2tMaXN0LmFkZChuZXdUYXNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRhc2tzKC4uLnJlbW92ZUlkcykge1xuXHRcdFsuLi5fdGFza0xpc3RdLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGlmIChyZW1vdmVJZHMuaW5jbHVkZXModGFzay5nZXRQcm9wZXJ0aWVzKCkuaWQpKSB7XG5cdFx0XHRcdF90YXNrTGlzdC5kZWxldGUodGFzayk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVUYXNrKHVwZGF0ZUlkLCBpbnB1dFZhbHVlc0FycmF5KSB7XG5cdFx0Wy4uLl90YXNrTGlzdF0uZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0aWYgKHVwZGF0ZUlkID09PSB0YXNrLmdldFByb3BlcnRpZXMoKS5pZCkge1xuXHRcdFx0XHRpbnB1dFZhbHVlc0FycmF5LmZvckVhY2goKHBhaXIpID0+IHtcblx0XHRcdFx0XHR0YXNrLnNldFByb3BlcnR5KHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdFx0X3Rhc2tMaXN0LmNsZWFyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUYXNrc0J5KHByb3AsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIFsuLi5fdGFza0xpc3RdLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKClbcHJvcF0gPT09IHZhbHVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNvcnRlZFRhc2tzQnkocHJvcCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gX2NvbHVtblNvcnQoXG5cdFx0XHRbLi4uX3Rhc2tMaXN0XS5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0UHJvcGVydGllcygpW3Byb3BdID09PSB2YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qgc3ViQWRkVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkFERF9UQVNLLCBhZGRUYXNrKTtcblx0Y29uc3Qgc3ViUmVtb3ZlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRFTEVURV9UQVNLLCByZW1vdmVUYXNrcyk7XG5cdGNvbnN0IHN1YlVwZGF0ZVRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5VUERBVEVfVEFTSywgdXBkYXRlVGFzayk7XG5cdGNvbnN0IHN1YkNsZWFyVGFza3MgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIGNsZWFyVGFza3MpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0QWxsVGFza3M6ICgpID0+IFsuLi5fdGFza0xpc3RdLFxuXHRcdGdldFNvcnRlZFRhc2tzOiAoKSA9PiBfY29sdW1uU29ydChbLi4uX3Rhc2tMaXN0XSksXG5cdFx0Z2V0VGFza3NCeSxcblx0XHRnZXRTb3J0ZWRUYXNrc0J5LFxuXHRcdGdldENvbHVtbk5hbWVzOiAoKSA9PiBfY29sdW1uTmFtZXMsXG5cdFx0Z2V0UHJpb3JpdHlOYW1lczogKCkgPT4gX3ByaW9yaXRpZXMsXG5cdFx0Z2V0UHJvcGVydHlOYW1lczogKCkgPT4gX3Byb3BlcnR5TmFtZXMsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuXHRsZXQgX3Byb2plY3RMaXN0ID0gbmV3IFNldCgpO1xuXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdE5hbWUpIHtcblx0XHRfcHJvamVjdExpc3QuYWRkKG5ld1Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChyZW1vdmVOYW1lKSB7XG5cdFx0aWYgKF9wcm9qZWN0TGlzdC5oYXMocmVtb3ZlTmFtZSkpIHtcblx0XHRcdC8vIEdldCB0YXNrLmlkJ3MgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcHJvamVjdFxuXHRcdFx0Y29uc3QgcmVtb3ZlSWRzID0gVGFza3MuZ2V0VGFza3NCeShcInByb2plY3RcIiwgcmVtb3ZlTmFtZSkubWFwKFxuXHRcdFx0XHQodGFzaykgPT4gdGFzay5nZXRQcm9wZXJ0aWVzKCkuaWRcblx0XHRcdCk7XG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgdGFza3Mgd2l0aCB0aG9zZSBpZCdzIGZyb20gX3Rhc2tMaXN0XG5cdFx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuREVMRVRFX1RBU0ssIC4uLnJlbW92ZUlkcyk7XG5cblx0XHRcdC8vIFJlbW92ZSBuYW1lIGZyb20gcHJvamVjdCBsaXN0XG5cdFx0XHRfcHJvamVjdExpc3QuZGVsZXRlKHJlbW92ZU5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyUHJvamVjdHMoKSB7XG5cdFx0X3Byb2plY3RMaXN0LmNsZWFyKCk7XG5cdH1cblxuXHRjb25zdCBzdWJBZGRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX1BST0pFQ1QsIGFkZFByb2plY3QpO1xuXHRjb25zdCBzdWJSZW1vdmVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1BST0pFQ1QsIHJlbW92ZVByb2plY3QpO1xuXHRjb25zdCBzdWJDbGVhclByb2plY3RzID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQ0xFQVJfQUxMLCBjbGVhclByb2plY3RzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldFByb2plY3RzOiAoKSA9PiBbLi4uX3Byb2plY3RMaXN0XS5zb3J0KCksXG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhZGREZWZhdWx0cyhhc2tVc2VyKSB7XG5cdGNvbnN0IHF1ZXN0aW9uID1cblx0XHRcIkRlZmF1bHRzIHJlcGxhY2UgYWxsIHRhc2tzIGFuZCBwcm9qZWN0cyB3aXRoIGFuIGV4YW1wbGUgc2V0LiBcXG5UaGlzIHdpbGwgZXJhc2UgYW55dGhpbmcgeW91IGhhdmUgc2F2ZWQuXCI7XG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBhc2tVc2VyID8gY29uZmlybShxdWVzdGlvbikgOiB0cnVlO1xuXHRpZiAodXNlckNvbmZpcm1lZCkge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5DTEVBUl9BTEwpO1xuXHRcdFtcImhvbWVcIiwgXCJmaW5hbmNlc1wiLCBcImxlYXJuaW5nXCJdLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfUFJPSkVDVCwgcHJvamVjdCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBkZWZhdWx0VGFza3MgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcInBheSBiaWxsc1wiLFxuXHRcdFx0XHRzdGF0dXM6IFwiaW4tcHJvZ3Jlc3NcIixcblx0XHRcdFx0cHJvamVjdDogXCJmaW5hbmNlc1wiLFxuXHRcdFx0XHRwcmlvcml0eTogXCJoaWdoXCIsXG5cdFx0XHRcdG5vdGVzOiBcInRoZSByZW50IGlzIHRvbyBkYW1uIGhpZ2hcIixcblx0XHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDFcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcImdyb2Nlcmllc1wiLFxuXHRcdFx0XHRzdGF0dXM6IFwidG8tZG9cIixcblx0XHRcdFx0cHJvamVjdDogXCJob21lXCIsXG5cdFx0XHRcdHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuXHRcdFx0XHR0YWdzOiBcInN0b3JlXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJmaWxlIHRheGVzXCIsXG5cdFx0XHRcdHN0YXR1czogXCJiYWNrbG9nXCIsXG5cdFx0XHRcdHByb2plY3Q6IFwiZmluYW5jZXNcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJyZWFkIENoZWtob3ZcIixcblx0XHRcdFx0c3RhdHVzOiBcImJhY2tsb2dcIixcblx0XHRcdFx0cHJvamVjdDogXCJsZWFybmluZ1wiLFxuXHRcdFx0XHRwcmlvcml0eTogXCJsb3dcIixcblx0XHRcdFx0ZHVlOiBcIjIwMjMtMTEtMDVcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcInJlcGxhY2UgbGlnaHRidWxiXCIsXG5cdFx0XHRcdHN0YXR1czogXCJ0by1kb1wiLFxuXHRcdFx0XHRwcm9qZWN0OiBcImhvbWVcIixcblx0XHRcdFx0cHJpb3JpdHk6IFwibWVkaXVtXCIsXG5cdFx0XHRcdG5vdGVzOiBcImJhdGhyb29tIGxpZ2h0IGlzIGZsaWNrZXJpbmdcIixcblx0XHRcdFx0dGFnczogXCJzdG9yZVwiLFxuXHRcdFx0fSxcblx0XHRdLm1hcCgoaXRlbSkgPT4gT2JqZWN0LmVudHJpZXMoaXRlbSkpO1xuXG5cdFx0ZGVmYXVsdFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfVEFTSywgaXRlbSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuY29uc3Qgc3ViRGVmYXVsdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfREVGQVVMVFMsIGFkZERlZmF1bHRzKTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERPTSBGYWN0b3JpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG5cdHJldHVybiB7IHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRmFjdG9yeShvYmopIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcblx0Y29uc3QgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuXG5cdGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSAhPT0gXCJkYXRhc2V0XCIpIHtcblx0XHRcdGVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFNwZWNpYWwgZGlyZWN0aW9ucyBuZWVkZWQgdG8gc2V0IFwiZGF0YS1cIiBwcm9wZXJ0aWVzXG5cdFx0XHRmb3IgKGNvbnN0IHByb3AgaW4gYXR0cmlidXRlc1trZXldKSB7XG5cdFx0XHRcdGVsLmRhdGFzZXRbcHJvcF0gPSBhdHRyaWJ1dGVzW2tleV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdC8vIEFsbG93cyBmb3IgY29uZGl0aW9uYWxseSBhZGRpbmcgY2hpbGRyZW4gdXBzdHJlYW0gYnlcblx0XHQvLyBzZXR0aW5nIFwiXCIgYXMgdGhlIGFsdGVybmF0aXZlIHRvIGVsRmFjdG9yeSgpXG5cdFx0aWYgKCEhY2hpbGQpIHtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE90aGVyIEhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYXNrSWQodGFyZ2V0KSB7XG5cdHJldHVybiArKHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJpZC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC50YXNrSWRcblx0XHQ6IGZpbmRUYXNrSWQodGFyZ2V0LnBhcmVudEVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9qZWN0TmFtZSh0YXJnZXQpIHtcblx0cmV0dXJuIHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJpZC1idWJibGUtbWFya2VyXCIpXG5cdFx0PyB0YXJnZXQuZGF0YXNldC5wcm9qZWN0RmlsdGVyXG5cdFx0OiBmaW5kUHJvamVjdE5hbWUodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZpcnN0VXBwZXIoc3RyaW5nKSB7XG5cdHJldHVybiAhIXN0cmluZ1xuXHRcdD8gc3RyaW5nXG5cdFx0XHRcdC5zcGxpdChcIi1cIilcblx0XHRcdFx0Lm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcblx0XHRcdFx0LmpvaW4oXCIgXCIpXG5cdFx0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlzb0RhdGUpIHtcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke2lzb0RhdGV9VDEyOjAwOjAwLTA0OjAwYCk7XG5cdGNvbnN0IGRheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5cdGNvbnN0IG1vbnRocyA9IFtcblx0XHRcIkphblwiLFxuXHRcdFwiRmViXCIsXG5cdFx0XCJNYXJcIixcblx0XHRcIkFwclwiLFxuXHRcdFwiTWF5XCIsXG5cdFx0XCJKdW5lXCIsXG5cdFx0XCJKdWx5XCIsXG5cdFx0XCJBdWdcIixcblx0XHRcIlNlcHRcIixcblx0XHRcIk9jdFwiLFxuXHRcdFwiTm92XCIsXG5cdFx0XCJEZWNcIixcblx0XTtcblxuXHRyZXR1cm4gYCR7ZGF5c1tkYXRlLmdldERheSgpXX0sICR7ZGF0ZS5nZXREYXRlKCl9ICR7XG5cdFx0bW9udGhzW2RhdGUuZ2V0TW9udGgoKV1cblx0fSAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xufVxuIiwiaW1wb3J0IHsgZWxGYWN0b3J5LCBmb3JtYXREYXRlLCBodG1sRmFjdG9yeSwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBUYXNrcywgUHJvamVjdHMgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5kaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcblx0ZGlhbG9nLnRleHRDb250ZW50ID0gXCJcIjtcbn0pO1xuXG5mdW5jdGlvbiBidWlsZERpc3BsYXlNb2RlKCkge1xuXHRkaWFsb2cuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktbW9kZVwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDMgaWQ9XCJkaXNwbGF5LXRpdGxlXCI+PC9oMz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuIGRpc3BsYXktY2xvc2UtYnRuXCI+w5c8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpc3BsYXktbW9kZS1ib2R5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktc2lkZWJhclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5Qcm9qZWN0OiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LXByb2plY3RcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+UHJpb3JpdHk6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktcHJpb3JpdHlcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheS1pdGVtXCI+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LWxhYmVsXCI+RHVlOiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LWR1ZVwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkaXNwbGF5LWl0ZW1cIj48c3BhbiBjbGFzcz1cImRpc3BsYXktbGFiZWxcIj5TdGF0dXM6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktc3RhdHVzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPk5vdGVzOiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJkaXNwbGF5LXZhbHVlXCIgaWQ9XCJkaXNwbGF5LW5vdGVzXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRpc3BsYXktaXRlbVwiPjxzcGFuIGNsYXNzPVwiZGlzcGxheS1sYWJlbFwiPlRhZ3M6IDwvc3Bhbj48c3BhbiBjbGFzcz1cImRpc3BsYXktdmFsdWVcIiBpZD1cImRpc3BsYXktdGFnc1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImJ1dHRvbnMgaWQtYnViYmxlLW1hcmtlclwiIGRhdGEtdGFzay1pZD1cIlwiPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZWRpdC1idG5cIj5FZGl0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUtYnRuXCI+RGVsZXRlPC9idXR0b24+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRgO1xuXHRkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheShzZWxlY3RlZElkKSB7XG5cdGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrc0J5KFwiaWRcIiwgc2VsZWN0ZWRJZClbMF0uZ2V0UHJvcGVydGllcygpO1xuXHRUYXNrcy5nZXRQcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGlzcGxheS0ke3Byb3B9YCk7XG5cdFx0bGV0IG91dHB1dCA9IHRhc2tbcHJvcF07XG5cblx0XHRpZiAocHJvcCA9PT0gXCJkdWVcIiAmJiAhIW91dHB1dCkge1xuXHRcdFx0b3V0cHV0ID0gZm9ybWF0RGF0ZShvdXRwdXQpO1xuXHRcdH1cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gcHJvcCA9PT0gXCJ0YWdzXCIgPyBvdXRwdXQgOiBtYWtlRmlyc3RVcHBlcihvdXRwdXQpO1xuXHR9KTtcblx0ZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaWQtYnViYmxlLW1hcmtlclwiKS5kYXRhc2V0LnRhc2tJZCA9IHNlbGVjdGVkSWQ7XG5cdGRpYWxvZ1xuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY2xvc2UtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cuY2xvc2UoKSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRWRpdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgPGZvcm0gY2xhc3M9XCJlZGl0LW1vZGVcIiBtZXRob2Q9XCJkaWFsb2dcIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJlZGl0LW1vZGUtZGV0YWlsc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJvamVjdFwiIGNsYXNzPVwic3VibWl0LWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZHVlXCI+RHVlOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPVwic3RhdHVzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiIHJlcXVpcmVkPjwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgcm93cz1cIjVcIiBjbGFzcz1cInN1Ym1pdC1pbmZvXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdDxwPlNlcGFyYXRlIHRhZ3Mgd2l0aCBjb21tYXMuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFnc1wiPlRhZ3M6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YWdzXCIgY2xhc3M9XCJzdWJtaXQtaW5mb1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9ucyBpZC1idWJibGUtbWFya2VyXCIgZGF0YS10YXNrLWlkPVwiXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzYXZlLWJ0blwiPlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9mb3JtPmA7XG5cdGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkRHJvcGRvd25zKCkge1xuXHRbXG5cdFx0W1wicHJvamVjdFwiLCBQcm9qZWN0cy5nZXRQcm9qZWN0cygpXSxcblx0XHRbXCJwcmlvcml0eVwiLCBUYXNrcy5nZXRQcmlvcml0eU5hbWVzKCldLFxuXHRcdFtcInN0YXR1c1wiLCBUYXNrcy5nZXRDb2x1bW5OYW1lcygpXSxcblx0XS5mb3JFYWNoKChwYWlyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhaXJbMF0pO1xuXHRcdHBhaXJbMV0uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKFxuXHRcdFx0XHRodG1sRmFjdG9yeShcblx0XHRcdFx0XHRlbEZhY3RvcnkoXCJvcHRpb25cIiwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IG9wdGlvbixcblx0XHRcdFx0XHRcdHRleHRDb250ZW50OiBtYWtlRmlyc3RVcHBlcihvcHRpb24pLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm0oc2VsZWN0ZWRJZCkge1xuXHRjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza3NCeShcImlkXCIsIHNlbGVjdGVkSWQpWzBdLmdldFByb3BlcnRpZXMoKTtcblx0VGFza3MuZ2V0UHJvcGVydHlOYW1lcygpLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCk7XG5cblx0XHRzd2l0Y2ggKHByb3ApIHtcblx0XHRcdGNhc2UgXCJwcm9qZWN0XCI6XG5cdFx0XHRjYXNlIFwicHJpb3JpdHlcIjpcblx0XHRcdGNhc2UgXCJzdGF0dXNcIjpcblx0XHRcdFx0Wy4uLmVsZW1lbnQuY2hpbGRyZW5dLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PT0gdGFza1twcm9wXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInRpdGxlXCI6XG5cdFx0XHRcdGVsZW1lbnQudmFsdWUgPSBtYWtlRmlyc3RVcHBlcih0YXNrW3Byb3BdKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJub3Rlc1wiOlxuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gbWFrZUZpcnN0VXBwZXIodGFza1twcm9wXSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gdGFza1twcm9wXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KTtcblx0ZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaWQtYnViYmxlLW1hcmtlclwiKS5kYXRhc2V0LnRhc2tJZCA9IHNlbGVjdGVkSWQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvamVjdE1vZGUoKSB7XG5cdGRpYWxvZy5pbm5lckhUTUwgPSBgXG5cdFx0PGZvcm0gY2xhc3M9XCJwcm9qZWN0LW1vZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cIm5ldy1wcm9qZWN0XCI+TmV3IFByb2plY3Q6PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctcHJvamVjdFwiIHJlcXVpcmVkLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwicHJvamVjdC1zYXZlLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInByb2plY3QtY2FuY2VsLWJ0blwiPlxuXHRcdFx0XHRcdENhbmNlbFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L2Zvcm0+YDtcblx0ZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5jb25zdCBzdWJEaXNwbGF5QnVpbGQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ESVNQTEFZX01PREUsIGJ1aWxkRGlzcGxheU1vZGUpO1xuY29uc3Qgc3ViRGlzcGxheVBvcCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkRJU1BMQVlfTU9ERSwgcG9wdWxhdGVEaXNwbGF5KTtcblxuY29uc3Qgc3ViRWRpdEJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFLCBidWlsZEVkaXRNb2RlKTtcbmNvbnN0IHN1YkVkaXREcm9wZG93bnMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5FRElUX01PREUsIGFkZERyb3Bkb3ducyk7XG5jb25zdCBzdWJGb3JtUG9wID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRURJVF9NT0RFX1BPUCwgcG9wdWxhdGVGb3JtKTtcblxuY29uc3Qgc3ViUHJvamVjdEJ1aWxkID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuUFJPSkVDVF9NT0RFLCBidWlsZFByb2plY3RNb2RlKTtcbiIsImV4cG9ydCBjb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZXZlbnRzTGlzdCA9IHt9O1xuXHQvLyB7IGtleTogXCJ0cmlnZ2VyRXZlbnRcIiwgdmFsdWU6IFsgYXJyYXkgb2YgZnVuY3Rpb25zIF0gfVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZSh0cmlnZ2VyRXZlbnQsIHN1YnNjcmliZXIpIHtcblx0XHRpZiAoIV9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0pIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0gPSBbc3Vic2NyaWJlcl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF0ucHVzaChzdWJzY3JpYmVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVuc3Vic2NyaWJlOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZ1bmN0aW9uTGlzdCA9IF9ldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG5cdFx0XHRcdGNvbnN0IGkgPSBmdW5jdGlvbkxpc3QuaW5kZXhPZihzdWJzY3JpYmVyKTtcblx0XHRcdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0XHRcdGZ1bmN0aW9uTGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1Ymxpc2godHJpZ2dlckV2ZW50LCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25MaXN0ID0gX2V2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShmdW5jdGlvbkxpc3QpKSB7XG5cdFx0XHRmdW5jdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuXHRcdFx0XHRzdWJzY3JpYmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3Vic2NyaWJlLCBwdWJsaXNoIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRVZFTlRTID0ge1xuXHRESVNQTEFZX01PREU6IFwiZGlzcGxheU1vZGVcIixcblx0RURJVF9NT0RFOiBcImVkaXRNb2RlXCIsXG5cdEVESVRfTU9ERV9QT1A6IFwiZWRpdE1vZGVQb3BcIixcblx0UFJPSkVDVF9NT0RFOiBcInByb2plY3RNb2RlXCIsXG5cdERFTEVURV9UQVNLOiBcImRlbGV0ZVRhc2tcIixcblx0QUREX1RBU0s6IFwiYWRkVGFza1wiLFxuXHRVUERBVEVfVEFTSzogXCJ1cGRhdGVUYXNrXCIsXG5cdENBUkRfQ0xJQ0s6IFwiY2FyZENsaWNrXCIsXG5cdENBUkRfREVMRVRFOiBcImNhcmREZWxldGVcIixcblx0SU5JVDogXCJpbml0XCIsXG5cdEFERF9QUk9KRUNUOiBcImFkZFByb2plY3RcIixcblx0REVMRVRFX1BST0pFQ1Q6IFwiZGVsZXRlUHJvamVjdFwiLFxuXHRBRERfREVGQVVMVFM6IFwiYWRkRGVmYXVsdHNcIixcblx0Q0xFQVJfQUxMOiBcImNsZWFyQWxsXCIsXG59O1xuIiwiaW1wb3J0IHsgVGFza3MsIFByb2plY3RzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpYWxvZyB9IGZyb20gXCIuL21vZGFsc1wiO1xuaW1wb3J0IHsgUHViU3ViLCBFVkVOVFMgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IGVsRmFjdG9yeSwgaHRtbEZhY3RvcnksIG1ha2VGaXJzdFVwcGVyLCBmaW5kUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHNpZGViYXJPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLW9wZW4tYnRuXCIpO1xuY29uc3Qgc2lkZWJhckNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNsb3NlLWJ0blwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5zaWRlYmFyT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKSk7XG5zaWRlYmFyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIikpO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpc3BsYXllZFwiKTtcbmNvbnN0IHN0YXR1c2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNlcy1jb250YWluZXJcIik7XG5cbmNvbnN0IEFMTF9UQVNLUyA9IFwiYWxsLXRhc2tzXCI7XG5jb25zdCBOT19QUk9KRUNUID0gXCJ1bnNvcnRlZFwiO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gQUxMX1RBU0tTO1xuXG5mdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG5cdGlmIChjdXJyZW50UHJvamVjdCA9PT0gQUxMX1RBU0tTKSB7XG5cdFx0cHJvamVjdERpc3BsYXllZC50ZXh0Q29udGVudCA9IG1ha2VGaXJzdFVwcGVyKEFMTF9UQVNLUyk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoVGFza3MuZ2V0U29ydGVkVGFza3MoKSk7XG5cdFx0dXBkYXRlU2lkZWJhcigpO1xuXHR9IGVsc2Uge1xuXHRcdHByb2plY3REaXNwbGF5ZWQudGV4dENvbnRlbnQgPSBtYWtlRmlyc3RVcHBlcihjdXJyZW50UHJvamVjdCk7XG5cdFx0dXBkYXRlVGFza0NvbHVtbnMoXG5cdFx0XHRUYXNrcy5nZXRTb3J0ZWRUYXNrc0J5KFxuXHRcdFx0XHRcInByb2plY3RcIixcblx0XHRcdFx0Y3VycmVudFByb2plY3QgPT09IE5PX1BST0pFQ1QgPyBcIlwiIDogY3VycmVudFByb2plY3Rcblx0XHRcdClcblx0XHQpO1xuXHRcdHVwZGF0ZVNpZGViYXIoKTtcblx0fVxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbHVtbnMoZGlzcGxheVRhc2tzKSB7XG5cdC8vIFJlc2V0IHRoZSBjb2x1bW5zXG5cdFsuLi5zdGF0dXNlc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocm93KSA9PiAocm93LnRleHRDb250ZW50ID0gXCJcIikpO1xuXG5cdC8vIEJ1aWxkIGNvbHVtbiBjb250ZW50XG5cdGRpc3BsYXlUYXNrcy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgY29sdW1uTmFtZSA9IGNvbHVtblswXTtcblx0XHRjb25zdCBzdGF0dXNOYW1lID0gbWFrZUZpcnN0VXBwZXIoY29sdW1uTmFtZSk7XG5cblx0XHRjb25zdCBjb2x1bW5Db250ZW50ID0gZWxGYWN0b3J5KFxuXHRcdFx0XCJzZWN0aW9uXCIsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtY29sdW1uXCIsXG5cdFx0XHRcdGlkOiBgJHtjb2x1bW5OYW1lfS1jb2x1bW5gLFxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0ZWxGYWN0b3J5KFwiaDJcIiwge1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJzdGF0dXMtbmFtZVwiLFxuXHRcdFx0XHRcdHRleHRDb250ZW50OiBzdGF0dXNOYW1lICsgXCI6XCIsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XVxuXHRcdCk7XG5cblx0XHQvLyBCdWlsZCB0YXNrIGNhcmRzXG5cdFx0Y29sdW1uWzFdLmZvckVhY2goKHRhc2tDb250YWluZXIpID0+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSB0YXNrQ29udGFpbmVyLmdldFByb3BlcnRpZXMoKTtcblxuXHRcdFx0Y29sdW1uQ29udGVudC5jaGlsZHJlbi5wdXNoKFxuXHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGFzay1jYXJkIGlkLWJ1YmJsZS1tYXJrZXJcIixcblx0XHRcdFx0XHRcdGRhdGFzZXQ6IHtcblx0XHRcdFx0XHRcdFx0cHJpb3JpdHk6IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdFx0dGFza0lkOiB0YXNrLmlkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYXJkLXNlY3Rpb25cIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImgzXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwidGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay50aXRsZSksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImNhcmQtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS10cmFzaC1vIGNhcmQtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImFyaWEtaGlkZGVuXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTGlzdDogXCJjYXJkLXNlY3Rpb25cIiB9LCBbXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3RcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIodGFzay5wcm9qZWN0KSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGVsRmFjdG9yeShcImRpdlwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcImR1ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb250ZW50OiB0YXNrLmR1ZSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQvLyBBcHBlbmQgdG8gY29ycmVjdCByb3dcblx0XHRpZiAoaW5kZXggPCAyKSB7XG5cdFx0XHRzdGF0dXNlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcblx0XHRcdFx0aHRtbEZhY3RvcnkoY29sdW1uQ29udGVudClcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YXR1c2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGh0bWxGYWN0b3J5KGNvbHVtbkNvbnRlbnQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gTWFrZSBlYWNoIHRhc2sgY2xpY2thYmxlXG5cdGNvbnN0IFRhc2tDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpO1xuXHRUYXNrQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiY2FyZC1kZWxldGUtYnRuXCIpKSB7XG5cdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5DQVJEX0RFTEVURSwgZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuQ0FSRF9DTElDSywgZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTaWRlYmFyKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcblx0Y29uc3QgcmVwbGFjZW1lbnRDb250YWluZXIgPSBlbEZhY3RvcnkoXG5cdFx0XCJkaXZcIixcblx0XHR7IGNsYXNzTGlzdDogXCJwcm9qZWN0cy1jb250YWluZXJcIiB9LFxuXHRcdFtBTExfVEFTS1MsIE5PX1BST0pFQ1QsIC4uLlByb2plY3RzLmdldFByb2plY3RzKCldLm1hcCgocHJvamVjdCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsRmFjdG9yeShcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTGlzdDogXCJwcm9qZWN0LW5hbWUgaWQtYnViYmxlLW1hcmtlclwiLFxuXHRcdFx0XHRcdGRhdGFzZXQ6IHsgcHJvamVjdEZpbHRlcjogcHJvamVjdCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0ZWxGYWN0b3J5KFwiYnV0dG9uXCIsIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHR0ZXh0Q29udGVudDogbWFrZUZpcnN0VXBwZXIocHJvamVjdCksXG5cdFx0XHRcdFx0XHRjbGFzc0xpc3Q6IFwicHJvamVjdC1maWx0ZXItYnRuXCIsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0W0FMTF9UQVNLUywgTk9fUFJPSkVDVF0uaW5jbHVkZXMocHJvamVjdClcblx0XHRcdFx0XHRcdD8gXCJcIlxuXHRcdFx0XHRcdFx0OiBlbEZhY3RvcnkoXG5cdFx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NMaXN0OiBcInByb2plY3QtZGVsZXRlLWJ0blwiLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxGYWN0b3J5KFwiaVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTGlzdDogXCJmYSBmYS10cmFzaC1vXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdCAgKSxcblx0XHRcdFx0XVxuXHRcdFx0KTtcblx0XHR9KVxuXHQpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1idXR0b25zXCIpXG5cdFx0LmJlZm9yZShodG1sRmFjdG9yeShyZXBsYWNlbWVudENvbnRhaW5lcikpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZmlsdGVyLWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbHRlclByb2plY3RWaWV3KTtcblx0XHRpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSBtYWtlRmlyc3RVcHBlcihjdXJyZW50UHJvamVjdCkpIHtcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cdFx0fVxuXHR9KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRlbGV0ZS1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0RGVsZXRlKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3REZWxldGUoZSkge1xuXHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBmaW5kUHJvamVjdE5hbWUoZS50YXJnZXQpO1xuXG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHNlbGVjdGVkUHJvamVjdFxuXHRcdCl9XCIgYW5kIGFsbCBpdHMgdGFza3M/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuYFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRFTEVURV9QUk9KRUNULCBzZWxlY3RlZFByb2plY3QpO1xuXHRcdGN1cnJlbnRQcm9qZWN0ID1cblx0XHRcdHNlbGVjdGVkUHJvamVjdCA9PT0gY3VycmVudFByb2plY3QgPyBBTExfVEFTS1MgOiBjdXJyZW50UHJvamVjdDtcblx0XHR1cGRhdGVTY3JlZW4oKTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJQcm9qZWN0VmlldyhlKSB7XG5cdGN1cnJlbnRQcm9qZWN0ID0gZmluZFByb2plY3ROYW1lKGUudGFyZ2V0KTtcblx0dXBkYXRlU2NyZWVuKCk7XG5cdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG59XG5cbmNvbnN0IHN1YkluaXQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5JTklULCB1cGRhdGVTY3JlZW4pO1xuXG5jb25zdCBzdWJEZWxldGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1RBU0ssIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJBZGRUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQUREX1RBU0ssIHVwZGF0ZVNjcmVlbik7XG5jb25zdCBzdWJVcGRhdGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuVVBEQVRFX1RBU0ssIHVwZGF0ZVNjcmVlbik7XG5cbmNvbnN0IHN1YkFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfUFJPSkVDVCwgdXBkYXRlU2NyZWVuKTtcblxuY29uc3Qgc3ViQ2xlYXJTY3JlZW4gPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIHVwZGF0ZVNjcmVlbik7XG4iLCJpbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgUHJvamVjdHMsIFRhc2tzIH0gZnJvbSBcIi4vYXBwLWNvbnRyb2xsZXJcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBmcm9tIE1ETiB0byB0ZXN0IGlzIHN0b3JhZ2UgaXMgYXZhaWxhYmxlIG9uIG9sZGVyIGJyb3dzZXJzLlxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG5cdGxldCBzdG9yYWdlO1xuXHR0cnkge1xuXHRcdHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG5cdFx0Y29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuXHRcdHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcblx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuXHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuXHRcdFx0KGUuY29kZSA9PT0gMjIgfHxcblx0XHRcdFx0Ly8gRmlyZWZveFxuXHRcdFx0XHRlLmNvZGUgPT09IDEwMTQgfHxcblx0XHRcdFx0Ly8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcblx0XHRcdFx0ZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG5cdFx0XHRcdC8vIEZpcmVmb3hcblx0XHRcdFx0ZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG5cdFx0XHQvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuXHRcdFx0c3RvcmFnZSAmJlxuXHRcdFx0c3RvcmFnZS5sZW5ndGggIT09IDBcblx0XHQpO1xuXHR9XG59XG5cbmxldCBzdG9yYWdlVHlwZTtcbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG5cdHN0b3JhZ2VUeXBlID0gbG9jYWxTdG9yYWdlO1xufSBlbHNlIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwic2Vzc2lvblN0b3JhZ2VcIikpIHtcblx0c3RvcmFnZVR5cGUgPSBzZXNzaW9uU3RvcmFnZTtcbn0gZWxzZSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfREVGQVVMVFMsIGZhbHNlKTtcbn1cblxuaWYgKCEhc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFRhc2tzXCIpKSB7XG5cdGdldFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gc2V0U3RvcmFnZSgpIHtcblx0Y29uc3QgYWxsVGFza3MgPSBUYXNrcy5nZXRBbGxUYXNrcygpLm1hcCgodGFzaykgPT4ge1xuXHRcdGNvbnN0IHRhc2tOb0lkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0YXNrLmdldFByb3BlcnRpZXMoKSkpO1xuXHRcdGRlbGV0ZSB0YXNrTm9JZC5pZDtcblx0XHRyZXR1cm4gdGFza05vSWQ7XG5cdH0pO1xuXHRjb25zdCBhbGxQcm9qZWN0cyA9IFByb2plY3RzLmdldFByb2plY3RzKCk7XG5cblx0c3RvcmFnZVR5cGUuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG5cdHN0b3JhZ2VUeXBlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeShbLi4uYWxsVGFza3NdKSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG5cdGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yYWdlVHlwZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuXHRjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVR5cGUuZ2V0SXRlbShcImFsbFRhc2tzXCIpKS5tYXAoKGl0ZW0pID0+XG5cdFx0T2JqZWN0LmVudHJpZXMoaXRlbSlcblx0KTtcblxuXHRzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9QUk9KRUNULCBwcm9qZWN0KTtcblx0fSk7XG5cblx0c3RvcmVkVGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5BRERfVEFTSywgaXRlbSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG5cdHN0b3JhZ2VUeXBlLmNsZWFyKCk7XG59XG5cbmNvbnN0IHN1YlNldEFkZFRhc2sgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfVEFTSywgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXREZWxldGVUYXNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1RBU0ssIHNldFN0b3JhZ2UpO1xuY29uc3Qgc3ViU2V0VXBkYXRlVGFzayA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLlVQREFURV9UQVNLLCBzZXRTdG9yYWdlKTtcbmNvbnN0IHN1YlNldEFkZFByb2plY3QgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfUFJPSkVDVCwgc2V0U3RvcmFnZSk7XG5jb25zdCBzdWJTZXREZWxldGVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuREVMRVRFX1BST0pFQ1QsIHNldFN0b3JhZ2UpO1xuXG5jb25zdCBzdWJDbGVhclN0b3JhZ2UgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DTEVBUl9BTEwsIGNsZWFyU3RvcmFnZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQdWJTdWIsIEVWRU5UUyB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi9hcHAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgZmluZFRhc2tJZCwgbWFrZUZpcnN0VXBwZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tIFwiLi9tb2RhbHNcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi93ZWItc3RvcmFnZVwiO1xuaW1wb3J0IFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmNvbnN0IEJvdHRvbUJ0bnMgPSAoKCkgPT4ge1xuXHRjb25zdCBhZGRSZXZlYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1yZXZlYWwtYnRuXCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuXHRjb25zdCBzdG9yYWdlUmV2ZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yYWdlLXJldmVhbC1idG5cIik7XG5cdGNvbnN0IGRlZmF1bHRzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0cy1idG5cIik7XG5cdGNvbnN0IGNsZWFyU3RvcmFnZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItc3RvcmFnZS1idG5cIik7XG5cblx0YWRkUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0YWRkUmV2ZWFsQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuXHRcdGFkZFRhc2tCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0YWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRoaWRlU3RvcmFnZUJ0bnMoKTtcblx0fSk7XG5cblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RlKTtcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RNb2RlKTtcblxuXHRzdG9yYWdlUmV2ZWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0c3RvcmFnZVJldmVhbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRkZWZhdWx0c0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcblx0XHRjbGVhclN0b3JhZ2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG5cdFx0aGlkZUFkZEJ0bnMoKTtcblx0fSk7XG5cblx0ZGVmYXVsdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRQdWJTdWIucHVibGlzaChFVkVOVFMuQUREX0RFRkFVTFRTLCB0cnVlKTtcblx0fSk7XG5cblx0Y2xlYXJTdG9yYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0XHRcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzIEFORCBwcm9qZWN0cz8gXFxuVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5cIlxuXHRcdCk7XG5cblx0XHRpZiAodXNlckNvbmZpcm1lZCkgUHViU3ViLnB1Ymxpc2goRVZFTlRTLkNMRUFSX0FMTCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGhpZGVBZGRCdG5zKCkge1xuXHRcdGFkZFJldmVhbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlU3RvcmFnZUJ0bnMoKSB7XG5cdFx0c3RvcmFnZVJldmVhbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRkZWZhdWx0c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRjbGVhclN0b3JhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdH1cblxuXHRjb25zdCBzdWJBZGREaXNwbGF5ID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuRElTUExBWV9NT0RFLCBoaWRlQWRkQnRucyk7XG5cdGNvbnN0IHN1YkFkZEVkaXQgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5FRElUX01PREUsIGhpZGVBZGRCdG5zKTtcblx0Y29uc3Qgc3ViQWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLlBST0pFQ1RfTU9ERSwgaGlkZUFkZEJ0bnMpO1xuXHRjb25zdCBzdWJTdG9yRGVmYXVsdHMgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5BRERfREVGQVVMVFMsIGhpZGVTdG9yYWdlQnRucyk7XG5cdGNvbnN0IHN1YlN0b3JDbGVhckFsbCA9IFB1YlN1Yi5zdWJzY3JpYmUoRVZFTlRTLkNMRUFSX0FMTCwgaGlkZVN0b3JhZ2VCdG5zKTtcblx0Y29uc3Qgc3ViU3RvckRpc3BsYXkgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5ESVNQTEFZX01PREUsIGhpZGVTdG9yYWdlQnRucyk7XG5cblx0cmV0dXJuIHsgYWRkVGFza0J0biB9O1xufSkoKTtcblxuZnVuY3Rpb24gb3BlbkRpc3BsYXlNb2RlKGUpIHtcblx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkRJU1BMQVlfTU9ERSwgZmluZFRhc2tJZChlLnRhcmdldCkpO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kZSk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ0blwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0RlbGV0ZSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0TW9kZShlKSB7XG5cdGlmIChlLnRhcmdldCAhPT0gQm90dG9tQnRucy5hZGRUYXNrQnRuKSB7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnRuXCIpXG5cdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kZSk7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1idG5cIilcblx0XHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0RlbGV0ZSk7XG5cdH1cblxuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuRURJVF9NT0RFKTtcblxuXHRpZiAoZS50YXJnZXQuaWQgPT09IFwiZWRpdC1idG5cIikge1xuXHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5FRElUX01PREVfUE9QLCBmaW5kVGFza0lkKGUudGFyZ2V0KSk7XG5cdH1cblxuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGUoKSB7XG5cdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5QUk9KRUNUX01PREUpO1xuXG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NhbmNlbChlKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ0blwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NhbmNlbCk7XG5cblx0aWYgKGZpbmRUYXNrSWQoZS50YXJnZXQpKSB7XG5cdFx0b3BlbkRpc3BsYXlNb2RlKGUpO1xuXHR9IGVsc2Uge1xuXHRcdGRpYWxvZy5jbG9zZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDYW5jZWwoKSB7XG5cdGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RlXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5cdGRvY3VtZW50XG5cdFx0LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnRuXCIpXG5cdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcblxuXHRkaWFsb2cuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0RlbGV0ZShlKSB7XG5cdGNvbnN0IHNlbGVjdGVkSWQgPSBmaW5kVGFza0lkKGUudGFyZ2V0KTtcblx0Y29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tzQnkoXCJpZFwiLCBzZWxlY3RlZElkKVswXS5nZXRQcm9wZXJ0aWVzKCk7XG5cblx0Y29uc3QgdXNlckNvbmZpcm1lZCA9IGNvbmZpcm0oXG5cdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIFwiJHttYWtlRmlyc3RVcHBlcihcblx0XHRcdHRhc2sudGl0bGVcblx0XHQpfVwiIHRhc2s/IFxcblRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuYFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSBQdWJTdWIucHVibGlzaChFVkVOVFMuREVMRVRFX1RBU0ssIHNlbGVjdGVkSWQpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNBcnJheSgpIHtcblx0Y29uc3Qgc3VibWl0dGVkSW5mbyA9IFtdO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Ym1pdC1pbmZvXCIpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0bGV0IHN1Ym1pdFZhbHVlID0ge1xuXHRcdFx0aW5wdXQ6IGVsLnZhbHVlLFxuXHRcdFx0c2VsZWN0OiBbLi4uZWwuY2hpbGRyZW5dLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQgPT09IHRydWUpWzBdXG5cdFx0XHRcdD8udmFsdWUsXG5cdFx0XHR0ZXh0YXJlYTogZWwudGV4dENvbnRlbnQsXG5cdFx0fVtlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCldO1xuXHRcdHN1Ym1pdHRlZEluZm8ucHVzaChbZWwuaWQsIHN1Ym1pdFZhbHVlXSk7XG5cdH0pO1xuXHRyZXR1cm4gc3VibWl0dGVkSW5mbztcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza1N1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3Qgc3VibWl0SWQgPSBmaW5kVGFza0lkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idG5cIikpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbW9kZVwiKVxuXHRcdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVRhc2tTdWJtaXQpO1xuXHRkb2N1bWVudFxuXHRcdC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idG5cIilcblx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tDYW5jZWwpO1xuXG5cdGNvbnN0IHVzZXJDb25maXJtZWQgPSBjb25maXJtKFxuXHRcdGBSZWFkeSB0byBzdWJtaXQgJHtzdWJtaXRJZCA9PT0gMCA/IFwiYSBuZXcgdGFza1wiIDogXCJ5b3VyIGNoYW5nZXNcIn0/YFxuXHQpO1xuXG5cdGlmICh1c2VyQ29uZmlybWVkKSB7XG5cdFx0Y29uc3QgdmFsdWVzQXJyYXkgPSBnZXRWYWx1ZXNBcnJheSgpO1xuXHRcdGlmIChzdWJtaXRJZCA9PT0gMCkge1xuXHRcdFx0UHViU3ViLnB1Ymxpc2goRVZFTlRTLkFERF9UQVNLLCB2YWx1ZXNBcnJheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFB1YlN1Yi5wdWJsaXNoKEVWRU5UUy5VUERBVEVfVEFTSywgc3VibWl0SWQsIHZhbHVlc0FycmF5KTtcblx0XHR9XG5cdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFN1Ym1pdChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpLnZhbHVlO1xuXHRQdWJTdWIucHVibGlzaChFVkVOVFMuQUREX1BST0pFQ1QsIG5ld1Byb2plY3ROYW1lKTtcbn1cblxuY29uc3Qgc3ViQ2FyZENsaWNrID0gUHViU3ViLnN1YnNjcmliZShFVkVOVFMuQ0FSRF9DTElDSywgb3BlbkRpc3BsYXlNb2RlKTtcbmNvbnN0IHN1YkNhcmREZWxldGUgPSBQdWJTdWIuc3Vic2NyaWJlKEVWRU5UUy5DQVJEX0RFTEVURSwgaGFuZGxlVGFza0RlbGV0ZSk7XG5QdWJTdWIucHVibGlzaChFVkVOVFMuSU5JVCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=