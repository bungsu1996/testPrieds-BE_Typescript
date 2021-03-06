"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Clinic_models_1 = __importDefault(require("../models/Clinic.models"));
var Visitor_models_1 = __importDefault(require("../models/Visitor.models"));
var VisitorController = /** @class */ (function () {
    function VisitorController() {
    }
    VisitorController.inputVisitor = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, visitorName, visitorBirthDate, visitorAge, visitorContact, clinic, visitorWeight, visitorHeight, visitorBlood, visitorAdres, visitorAdres2, visitorAnamnesis, visitorTreatment, visitorId, getID, n, n, findClinic, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, visitorName = _a.visitorName, visitorBirthDate = _a.visitorBirthDate, visitorAge = _a.visitorAge, visitorContact = _a.visitorContact, clinic = _a.clinic, visitorWeight = _a.visitorWeight, visitorHeight = _a.visitorHeight, visitorBlood = _a.visitorBlood, visitorAdres = _a.visitorAdres, visitorAdres2 = _a.visitorAdres2, visitorAnamnesis = _a.visitorAnamnesis, visitorTreatment = _a.visitorTreatment;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        visitorId = "";
                        return [4 /*yield*/, Visitor_models_1.default.find({}).sort({ _id: -1 }).limit(1)];
                    case 2:
                        getID = _b.sent();
                        if (getID.length < 1) {
                            n = 1;
                            visitorId = String(n).padStart(4, "0");
                        }
                        else {
                            n = parseInt(getID[0].visitorId);
                            visitorId = String(n + 1).padStart(4, "0");
                        }
                        return [4 /*yield*/, Clinic_models_1.default.findOne({ clinicName: clinic })];
                    case 3:
                        findClinic = _b.sent();
                        if (!findClinic) {
                            throw { name: "NOT_FOUND_CLINIC" };
                        }
                        return [4 /*yield*/, Visitor_models_1.default.create({
                                visitorId: visitorId,
                                visitorName: visitorName,
                                visitorBirthDate: visitorBirthDate,
                                visitorAge: visitorAge,
                                visitorContact: visitorContact,
                                clinic: findClinic,
                                visitorWeight: visitorWeight,
                                visitorHeight: visitorHeight,
                                visitorBlood: visitorBlood,
                                visitorAdres: visitorAdres,
                                visitorAdres2: visitorAdres2,
                                visitorAnamnesis: visitorAnamnesis,
                                visitorTreatment: visitorTreatment,
                            })];
                    case 4:
                        result = _b.sent();
                        res.status(201).json(result);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.log(error_1.message);
                        next(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.listVisitors = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Visitor_models_1.default.find().populate("clinic")];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2.message);
                        next(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.searchByName = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var visitorName, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visitorName = req.body.visitorName;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Visitor_models_1.default.find({
                                visitorName: { $regex: visitorName, $options: "$i" },
                            }).populate("clinic")];
                    case 2:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3.message);
                        next(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return VisitorController;
}());
exports.default = VisitorController;
