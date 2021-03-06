(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
class AppConfig {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_tickets_view_tickets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-tickets/view-tickets.component */ "./src/app/view-tickets/view-tickets.component.ts");






const routes = [
    { path: 'Home', component: _view_tickets_view_tickets_component__WEBPACK_IMPORTED_MODULE_3__["ViewTicketsComponent"] },
    //{ path: '',   redirectTo: '/Home', pathMatch: 'full' }, // redirect to `Home page`
    { path: '**', component: _view_tickets_view_tickets_component__WEBPACK_IMPORTED_MODULE_3__["ViewTicketsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.title = 'ticket-system';
        this.GetConfig().subscribe((config) => {
            _app_config__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].Config = JSON.parse(config);
        }, error => { alert(error); });
    }
    GetConfig() {
        const jsonFile = `assets/config/config.json`;
        return this.httpClient.get(jsonFile, { responseType: "text" });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _view_tickets_view_tickets_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-tickets/view-tickets.module */ "./src/app/view-tickets/view-tickets.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _view_tickets_view_tickets_module__WEBPACK_IMPORTED_MODULE_5__["ViewTicketsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _view_tickets_view_tickets_module__WEBPACK_IMPORTED_MODULE_5__["ViewTicketsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _view_tickets_view_tickets_module__WEBPACK_IMPORTED_MODULE_5__["ViewTicketsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/base-service.ts":
/*!****************************************!*\
  !*** ./src/app/models/base-service.ts ***!
  \****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BaseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.appSettings = _app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].Config;
    }
    PostReturn(controllerInfo, info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const requestInfo = JSON.stringify(info);
            return yield this.httpClient.post(this.appSettings.BaseUrl + controllerInfo, requestInfo, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json') }).toPromise();
        });
    }
    Post(controllerInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.post(this.appSettings.BaseUrl + controllerInfo, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json') }).toPromise();
        });
    }
    Get(controllerInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(this.appSettings.BaseUrl + controllerInfo, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json') }).toPromise();
        });
    }
    GetWithRowId(controllerInfo, RowId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(this.appSettings.BaseUrl + controllerInfo + `/${RowId}`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json') }).toPromise();
        });
    }
    Put(controllerInfo, info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const requestInfo = JSON.stringify(info);
            return yield this.httpClient.put(this.appSettings.BaseUrl + controllerInfo, requestInfo, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json') }).toPromise();
        });
    }
    Delete(controllerInfo, RowId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.delete(this.appSettings.BaseUrl + controllerInfo + `?Id=${RowId}`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json') }).toPromise();
        });
    }
}


/***/ }),

/***/ "./src/app/models/bug.ts":
/*!*******************************!*\
  !*** ./src/app/models/bug.ts ***!
  \*******************************/
/*! exports provided: Bug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bug", function() { return Bug; });
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket */ "./src/app/models/ticket.ts");

class Bug extends _ticket__WEBPACK_IMPORTED_MODULE_0__["Ticket"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    Save() {
        console.log(this);
        let response = super.Put("/Ticket/create", this);
        return response;
    }
    Update() {
        console.log(this);
        let response = super.PostReturn("/Ticket/update", this);
        return response;
    }
}


/***/ }),

/***/ "./src/app/models/enhancement.ts":
/*!***************************************!*\
  !*** ./src/app/models/enhancement.ts ***!
  \***************************************/
/*! exports provided: Enhancement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enhancement", function() { return Enhancement; });
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket */ "./src/app/models/ticket.ts");

class Enhancement extends _ticket__WEBPACK_IMPORTED_MODULE_0__["Ticket"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    Save() {
        console.log(this);
        let response = super.Put("/Ticket/create", this);
        return response;
    }
    Update() {
        console.log(this);
        let response = super.PostReturn("/Ticket/update", this);
        return response;
    }
    GetAllTickets() {
        let response = super.PostReturn("/Ticket/findAll", this);
        return response;
    }
}


/***/ }),

/***/ "./src/app/models/ticket.ts":
/*!**********************************!*\
  !*** ./src/app/models/ticket.ts ***!
  \**********************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-service */ "./src/app/models/base-service.ts");

class Ticket extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    DeleteTicket(id) {
        let response = super.Delete("/Ticket/delete", id);
        return response;
    }
    GetAllTickets() {
        let response = super.PostReturn("/Ticket/findAll", this);
        return response;
    }
}


/***/ }),

/***/ "./src/app/view-tickets/view-tickets.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-tickets/view-tickets.component.ts ***!
  \********************************************************/
/*! exports provided: ViewTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTicketsComponent", function() { return ViewTicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_bug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bug */ "./src/app/models/bug.ts");
/* harmony import */ var _models_enhancement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/enhancement */ "./src/app/models/enhancement.ts");
/* harmony import */ var _models_ticket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/ticket */ "./src/app/models/ticket.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ViewTicketsComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ticketType_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ticketType_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticketType_r4);
} }
function ViewTicketsComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ticketState_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ticketState_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticketState_r5);
} }
function ViewTicketsComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ViewTicketsComponent_tr_85_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ticket_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.EditTicket(ticket_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ViewTicketsComponent_tr_85_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ticket_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.DeleteTicket(ticket_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ticket_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.createDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.effort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ticket_r6.clientDescription);
} }
class ViewTicketsComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.viewTicketList = [];
        this.ticketTypes = ["Bug", "Enhancment"];
        this.ticketStates = ["Not yet started", "Working on", "Testing", "Done"];
        this.ticketIsNew = true;
        this.editTicketIsVissible = false;
        this.viewTicketListIsVissible = true;
    }
    ;
    ngOnInit() {
        this.InitializeTicketItem();
    }
    IsBugType(type) {
        return type === "Bug";
    }
    InitializeTicketItem() {
        this.ticketTitle = "";
        this.ticketType = "Bug";
        this.ticketDescription = "";
        this.ticketEffort = "";
        this.ticketProduct = "";
        this.ticketClientDescription = "";
        this.ticketState = "Not yet started";
        this.ticketIsNew = true;
    }
    NewTicket() {
        this.InitializeTicketItem();
        this.viewTicketListIsVissible = false;
        this.editTicketIsVissible = true;
        this.viewTicketList = [];
    }
    EditTicket(ticket) {
        let jsonString = JSON.stringify(ticket);
        let ticketReq = JSON.parse(jsonString);
        this.ticketTitle = ticketReq.title;
        this.ticketType = ticketReq.type;
        this.ticketDescription = ticketReq.description;
        this.ticketEffort = ticketReq.effort;
        this.ticketProduct = ticketReq.product;
        this.ticketClientDescription = ticketReq.clientDescription;
        this.ticketState = ticketReq.state;
        this.ticketIsNew = false;
        this.ticketId = Number(ticketReq.id);
        this.viewTicketListIsVissible = false;
        this.editTicketIsVissible = true;
        this.viewTicketList = [];
    }
    SaveTicket() {
        if (this.ticketType === "Bug") {
            let ticket = new _models_bug__WEBPACK_IMPORTED_MODULE_2__["Bug"](this.httpClient);
            ticket.appSettings.BaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
            ticket.Title = this.ticketTitle;
            ticket.Type = this.ticketType;
            ticket.Description = this.ticketDescription;
            ticket.State = this.ticketState;
            ticket.Effort = this.ticketEffort;
            ticket.Id = this.ticketId;
            if (this.ticketIsNew) {
                let response = ticket.Save();
                response.then(val => {
                    this.InitializeTicketItem();
                    this.GetAllTickets();
                }, error => {
                    Promise.reject(error);
                });
            }
            else {
                let response = ticket.Update();
                response.then(val => {
                    this.GetAllTickets();
                }, error => {
                    Promise.reject(error);
                });
            }
        }
        else {
            let ticket = new _models_enhancement__WEBPACK_IMPORTED_MODULE_3__["Enhancement"](this.httpClient);
            ticket.appSettings.BaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
            ticket.Title = this.ticketTitle;
            ticket.Type = this.ticketType;
            ticket.Description = this.ticketDescription;
            ticket.Product = this.ticketProduct;
            ticket.ClientDescription = this.ticketClientDescription;
            ticket.State = this.ticketState;
            ticket.Effort = this.ticketEffort;
            ticket.Id = this.ticketId;
            if (this.ticketIsNew) {
                let response = ticket.Save();
                response.then(val => {
                    this.InitializeTicketItem();
                    this.GetAllTickets();
                }, error => {
                    Promise.reject(error);
                });
            }
            else {
                let response = ticket.Update();
                response.then(val => {
                    this.GetAllTickets();
                }, error => {
                    Promise.reject(error);
                });
            }
        }
        this.viewTicketListIsVissible = true;
        this.editTicketIsVissible = false;
    }
    GetAllTickets() {
        let ticketRequest = new _models_ticket__WEBPACK_IMPORTED_MODULE_4__["Ticket"](this.httpClient);
        ticketRequest.appSettings.BaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
        let response = ticketRequest.GetAllTickets();
        response.then(value => {
            let jsonString = JSON.stringify(value);
            this.viewTicketList = new Array();
            this.viewTicketList = JSON.parse(jsonString);
            console.log(this.viewTicketList);
        });
    }
    DeleteTicket(id) {
        let ticketRequest = new _models_ticket__WEBPACK_IMPORTED_MODULE_4__["Ticket"](this.httpClient);
        ticketRequest.appSettings.BaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
        let response = ticketRequest.DeleteTicket(id);
        response.then(val => {
            this.GetAllTickets();
        }, error => {
            Promise.reject(error);
        });
    }
}
ViewTicketsComponent.??fac = function ViewTicketsComponent_Factory(t) { return new (t || ViewTicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ViewTicketsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ViewTicketsComponent, selectors: [["app-view-tickets"]], decls: 86, vars: 16, consts: [[1, "btn", "btn-primary", 3, "click"], [1, "container"], [1, "row", "ticket-edit", 3, "ngClass"], [3, "ngSubmit"], ["f", "ngForm"], ["id", "user-data"], [2, "width", "30%"], ["for", "tickettype"], ["id", "tickettype", "name", "tickettype", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "ticketTitle"], ["type", "text", "id", "ticketTitle", "name", "ticketTitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "ticketstate", "name", "ticketstate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ticketdescription"], ["type", "text", "id", "ticketdescription", "name", "ticketdescription", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ticketeffort"], ["type", "text", "id", "ticketeffort", "name", "ticketeffort", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngClass"], ["for", "ticketproduct"], ["type", "text", "id", "ticketproduct", "name", "ticketproduct", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ticketclientdescription"], ["type", "text", "id", "ticketclientdescription", "name", "ticketclientdescription", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "hidden", "id", "ticketisnew", "name", "ticketisnew", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "ticket-list", 3, "ngClass"], [1, "table", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", "value", "edit", 3, "click"], ["type", "button", "value", "delete", 3, "click"]], template: function ViewTicketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ViewTicketsComponent_Template_button_click_0_listener() { return ctx.GetAllTickets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "View Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ViewTicketsComponent_Template_button_click_2_listener() { return ctx.NewTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Edit Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ViewTicketsComponent_Template_form_ngSubmit_8_listener() { return ctx.SaveTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Ticket type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_select_ngModelChange_17_listener($event) { return ctx.ticketType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ViewTicketsComponent_option_18_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Ticket Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_input_ngModelChange_24_listener($event) { return ctx.ticketTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Ticket state:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_select_ngModelChange_30_listener($event) { return ctx.ticketState = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ViewTicketsComponent_option_31_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_input_ngModelChange_37_listener($event) { return ctx.ticketDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Effort:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_input_ngModelChange_43_listener($event) { return ctx.ticketEffort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Product:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_input_ngModelChange_49_listener($event) { return ctx.ticketProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Client Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_input_ngModelChange_55_listener($event) { return ctx.ticketClientDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ViewTicketsComponent_Template_input_ngModelChange_56_listener($event) { return ctx.ticketIsNew = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Ticket List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Create Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Effort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Client Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](85, ViewTicketsComponent_tr_85_Template, 22, 9, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", !ctx.editTicketIsVissible ? "hide" : "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ticketTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ticketStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketEffort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.IsBugType(ctx.ticketType) ? "hide" : "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.IsBugType(ctx.ticketType) ? "hide" : "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketClientDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.ticketIsNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.viewTicketListIsVissible ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.viewTicketList.length > 0 ? "show table" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.viewTicketList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"]], styles: [".hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n}\n\n.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  height: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdGlja2V0cy92aWV3LXRpY2tldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy10aWNrZXRzL3ZpZXctdGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewTicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-tickets',
                templateUrl: './view-tickets.component.html',
                styleUrls: ['./view-tickets.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-tickets/view-tickets.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-tickets/view-tickets.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewTicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTicketsModule", function() { return ViewTicketsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _view_tickets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-tickets.component */ "./src/app/view-tickets/view-tickets.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class ViewTicketsModule {
}
ViewTicketsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ViewTicketsModule });
ViewTicketsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ViewTicketsModule_Factory(t) { return new (t || ViewTicketsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ViewTicketsModule, { declarations: [_view_tickets_component__WEBPACK_IMPORTED_MODULE_3__["ViewTicketsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewTicketsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_tickets_component__WEBPACK_IMPORTED_MODULE_3__["ViewTicketsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: "http://localhost:57867"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Etonde\Documents\Securities-Trading-Technology-Assessment\ticket-system\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map