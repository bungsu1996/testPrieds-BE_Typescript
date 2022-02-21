"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = /** @class */ (function () {
    function errorHandler() {
    }
    errorHandler.error = function (err, req, res, next) {
        var name = err.name;
        var code = 0;
        var message = "";
        switch (name) {
            case "NOT_FOUND_CLINIC":
                code = 404;
                message = "Clinic Data Not Found";
                break;
            default:
                code = 500;
                message = "Internal Server Error";
                break;
        }
        res.status(code).json({ Success: false, Message: message });
    };
    return errorHandler;
}());
exports.errorHandler = errorHandler;
