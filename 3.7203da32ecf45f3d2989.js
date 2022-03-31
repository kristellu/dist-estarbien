(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/usuario-rol/pages/diario-autocuidado/diario-autocuidado.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/usuario-rol/pages/diario-autocuidado/diario-autocuidado.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DiarioAutocuidadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiarioAutocuidadoModule", function() { return DiarioAutocuidadoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _diario_autocuidado_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diario-autocuidado.routing */ "./src/app/usuario-rol/pages/diario-autocuidado/diario-autocuidado.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let DiarioAutocuidadoModule = /*@__PURE__*/ (() => {
    class DiarioAutocuidadoModule {
    }
    DiarioAutocuidadoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiarioAutocuidadoModule });
    DiarioAutocuidadoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiarioAutocuidadoModule_Factory(t) { return new (t || DiarioAutocuidadoModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_diario_autocuidado_routing__WEBPACK_IMPORTED_MODULE_2__["DiarioAutocuidadoRoutes"])
            ]] });
    return DiarioAutocuidadoModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiarioAutocuidadoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/usuario-rol/pages/diario-autocuidado/diario-autocuidado.routing.ts":
/*!************************************************************************************!*\
  !*** ./src/app/usuario-rol/pages/diario-autocuidado/diario-autocuidado.routing.ts ***!
  \************************************************************************************/
/*! exports provided: DiarioAutocuidadoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiarioAutocuidadoRoutes", function() { return DiarioAutocuidadoRoutes; });
/* harmony import */ var _diario_autocuidado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diario-autocuidado.component */ "./src/app/usuario-rol/pages/diario-autocuidado/diario-autocuidado.component.ts");

const DiarioAutocuidadoRoutes = [
    {
        path: '',
        component: _diario_autocuidado_component__WEBPACK_IMPORTED_MODULE_0__["DiarioAutocuidadoComponent"],
        data: {
            title: 'Daily',
            urls: [{ title: 'Daily', url: '/daily' }, { title: 'Daily' }],
        },
    }
];


/***/ })

}]);