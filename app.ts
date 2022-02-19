import createHttpError, { HttpError } from "http-errors";
import express, { Application, NextFunction, Request, Response } from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import connectDBMongoose from "./configs/connectDB";

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.plugin();
    this.router();
    this.errorHandler();
  }
  protected plugin = () => {
    connectDBMongoose.connectDB();
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "jade");
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      );
      next();
    });
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));
  };
  protected router = () => {};
  protected errorHandler = () => {
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      next(createHttpError(404));
    });
    this.app.use(function (
      err: HttpError,
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};
      res.status(err.status || 500);
      res.render("error");
    });
  };
}

const app = new App().app;
export default app;
