"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Clinic_routes_1 = require("./Clinic.routes");
var Doctor_routes_1 = require("./Doctor.routes");
var Ticket_routes_1 = require("./Ticket.routes");
var Visitor_routes_1 = require("./Visitor.routes");
var Routes = /** @class */ (function () {
    function Routes() {
        var _this = this;
        this.route = function () {
            _this.router.get("/", function (req, res) {
                res.status(200).json({ Message: "Succes!" });
            });
        };
        this.visitorRoute = function () {
            _this.router.use("/visitors", Visitor_routes_1.VisitorRouter);
        };
        this.clinicRoute = function () {
            _this.router.use("/clinic", Clinic_routes_1.ClinicRouter);
        };
        this.doctorRoute = function () {
            _this.router.use("/doctor", Doctor_routes_1.DoctorRouter);
        };
        this.ticketRoute = function () {
            _this.router.use("/ticket", Ticket_routes_1.TicketRouter);
        };
        this.router = (0, express_1.Router)();
        this.route();
        this.visitorRoute();
        this.clinicRoute();
        this.doctorRoute();
        this.ticketRoute();
    }
    return Routes;
}());
exports.default = new Routes().router;
