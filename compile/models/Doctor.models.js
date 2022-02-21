"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var doctorSchema = new mongoose_1.Schema({
    doctorName: { type: String, required: true },
    clinic: { type: mongoose_1.Schema.Types.ObjectId, ref: "clinic" },
}, {
    versionKey: false,
});
var Doctor = (0, mongoose_1.model)("doctor", doctorSchema);
exports.default = Doctor;
