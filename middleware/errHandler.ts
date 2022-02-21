import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

class errorHandler {
  static error(
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let name: string = err.name;
    let code: number = 0;
    let message: string = "";

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
    res.status(code).json({ Success: false, Message: message })
  }
}

export { errorHandler }