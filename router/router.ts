import { Request, Response, Router } from "express";
import { ClinicRouter } from "./Clinic.routes";
import { VisitorRouter } from "./Visitor.routes";

class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.route();
    this.visitorRoute();
    this.clinicRoute();
    this.doctorRoute();
  }
  protected route = () => {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).json({ Message: "Succes!" });
    });
  };
  protected visitorRoute = () => {
    this.router.use("/visitors", VisitorRouter);
  };
  protected clinicRoute = () => {
    this.router.use("/clinic", ClinicRouter);
  };
  protected doctorRoute = () => {};
}

export default new Routes().router;
