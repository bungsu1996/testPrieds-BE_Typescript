"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var path_1 = __importDefault(require("path"));
var connectDB_1 = __importDefault(require("./configs/connectDB"));
var router_1 = __importDefault(require("./router/router"));
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.plugin = function () {
            connectDB_1.default.connectDB();
            _this.app.set("views", path_1.default.join(__dirname, "views"));
            _this.app.set("view engine", "jade");
            _this.app.use((0, morgan_1.default)("dev"));
            _this.app.use(express_1.default.json());
            _this.app.use(express_1.default.urlencoded({ extended: false }));
            _this.app.use(function (req, res, next) {
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
                next();
            });
            _this.app.use((0, cookie_parser_1.default)());
            _this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        };
        this.router = function () {
            _this.app.use("/api", router_1.default);
        };
        this.errorHandler = function () {
            _this.app.use(function (req, res, next) {
                next((0, http_errors_1.default)(404));
            });
            _this.app.use(function (err, req, res, next) {
                res.locals.message = err.message;
                res.locals.error = req.app.get("env") === "development" ? err : {};
                res.status(err.status || 500);
                res.render("error");
            });
        };
        this.app = (0, express_1.default)();
        this.plugin();
        this.router();
        this.errorHandler();
    }
    return App;
}());
var app = new App().app;
exports.default = app;
