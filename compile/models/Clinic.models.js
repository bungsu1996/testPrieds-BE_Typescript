"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var clinicSchema = new mongoose_1.Schema({
    clinicName: { type: String, unique: true, required: true },
    doctor: { type: mongoose_1.Schema.Types.ObjectId, ref: "doctor" },
}, {
    versionKey: false,
});
var Clinic = (0, mongoose_1.model)("clinic", clinicSchema);
exports.default = Clinic;
