"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var visitorSchema = new mongoose_1.Schema({
    visitorId: { type: String },
    visitorName: { type: String, required: true },
    visitorBirthDate: { type: String },
    visitorAge: { type: String },
    visitorContact: { type: String },
    clinic: { type: mongoose_1.Schema.Types.ObjectId, ref: "clinic" },
    visitorWeight: { type: String },
    visitorHeight: { type: String },
    visitorBlood: { type: String },
    visitorAdres: { type: String },
    visitorAdres2: { type: String },
    visitorAnamnesis: { type: String },
    visitorTreatment: { type: String },
}, {
    versionKey: false,
    timestamps: true,
});
var Visitor = (0, mongoose_1.model)("visitor", visitorSchema);
exports.default = Visitor;
