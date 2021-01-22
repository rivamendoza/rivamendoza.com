"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./stylesheets/Main.scss");
var jquery_1 = require("jquery");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.underConstruction = true;
        _this.expandedSection = react_1["default"].createElement(react_1["default"].Fragment, null);
        return _this;
    }
    Main.prototype.render = function () {
        var _this = this;
        if (this.underConstruction) {
            return {};
        }
        else {
            return (react_1["default"].createElement("section", null,
                react_1["default"].createElement("div", { id: "pers", className: "split pers", onClick: function () { return _this.expandPers(); } },
                    react_1["default"].createElement("div", { className: "centered" },
                        react_1["default"].createElement("h1", null, "personal riva"))),
                react_1["default"].createElement("div", { id: "prof", className: "split prof", onClick: function () { return _this.expandProf(); } },
                    react_1["default"].createElement("div", { className: "centered" },
                        react_1["default"].createElement("h1", null, "Professional Riva.")))));
        }
    };
    Main.prototype.expandPers = function () {
        jquery_1["default"]("#pers").on('click', function () {
            jquery_1["default"](this).toggleClass('clicked');
        });
    };
    Main.prototype.expandProf = function () {
        jquery_1["default"]("#prof").on('click', function () {
            jquery_1["default"](this).toggleClass('clicked');
        });
    };
    __decorate([
        mobx_1.observable
    ], Main.prototype, "expandedSection");
    Main = __decorate([
        mobx_react_1.observer
    ], Main);
    return Main;
}(react_1.Component));
exports["default"] = Main;
