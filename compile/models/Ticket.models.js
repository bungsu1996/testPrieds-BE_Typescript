"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ticketSchema = new mongoose_1.Schema({
    numberTicket: { type: String },
}, {
    versionKey: false,
    timestamps: true,
});
var Ticket = (0, mongoose_1.model)("ticket", ticketSchema);
exports.default = Ticket;
