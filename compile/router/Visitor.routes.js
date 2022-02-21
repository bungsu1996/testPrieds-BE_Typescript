"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorRouter = void 0;
var express_1 = require("express");
var Visitor_controller_1 = __importDefault(require("../controller/Visitor.controller"));
var VisitorRoutes = /** @class */ (function () {
    function VisitorRoutes() {
        var _this = this;
        this.visitorInput = function () {
            _this.router.post("/input-visitor", Visitor_controller_1.default.inputVisitor);
        };
        this.listVisitor = function () {
            _this.router.get("/", Visitor_controller_1.default.listVisitors);
        };
        this.searchVisitors = function () {
            _this.router.post("/search-byname", Visitor_controller_1.default.searchByName);
        };
        this.router = (0, express_1.Router)();
        this.visitorInput();
        this.listVisitor();
        this.searchVisitors();
    }
    return VisitorRoutes;
}());
var VisitorRouter = new VisitorRoutes().router;
exports.VisitorRouter = VisitorRouter;
