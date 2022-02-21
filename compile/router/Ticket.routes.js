"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRouter = void 0;
var express_1 = require("express");
var Ticket_controller_1 = __importDefault(require("../controller/Ticket.controller"));
var TicketRoutes = /** @class */ (function () {
    function TicketRoutes() {
        var _this = this;
        this.printTicket = function () {
            _this.router.get("/print", Ticket_controller_1.default.dynamicPrintTicket);
        };
        this.listTicket = function () {
            _this.router.get("/", Ticket_controller_1.default.listTicketToday);
        };
        this.router = (0, express_1.Router)();
        this.printTicket();
        this.listTicket();
    }
    return TicketRoutes;
}());
var TicketRouter = new TicketRoutes().router;
exports.TicketRouter = TicketRouter;
