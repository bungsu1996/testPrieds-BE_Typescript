"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRouter = void 0;
var express_1 = require("express");
var Doctor_controller_1 = __importDefault(require("../controller/Doctor.controller"));
var DoctorRoutes = /** @class */ (function () {
    function DoctorRoutes() {
        var _this = this;
        this.doctorCreate = function () {
            _this.router.post("/create", Doctor_controller_1.default.newDoctor);
        };
        this.doctorList = function () {
            _this.router.get("/", Doctor_controller_1.default.listDoctor);
        };
        this.router = (0, express_1.Router)();
        this.doctorCreate();
        this.doctorList();
    }
    return DoctorRoutes;
}());
var DoctorRouter = new DoctorRoutes().router;
exports.DoctorRouter = DoctorRouter;
