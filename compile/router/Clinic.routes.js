"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicRouter = void 0;
var express_1 = require("express");
var Clinic_controller_1 = __importDefault(require("../controller/Clinic.controller"));
var ClinicRoutes = /** @class */ (function () {
    function ClinicRoutes() {
        var _this = this;
        this.clinicCreate = function () {
            _this.router.post("/create", Clinic_controller_1.default.newClinic);
        };
        this.clinicList = function () {
            _this.router.get("/", Clinic_controller_1.default.listClinic);
        };
        this.router = (0, express_1.Router)();
        this.clinicCreate();
        this.clinicList();
    }
    return ClinicRoutes;
}());
var ClinicRouter = new ClinicRoutes().router;
exports.ClinicRouter = ClinicRouter;
