import { Router } from "express";
import ClinicController from "../controller/Clinic.controller";

class ClinicRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.clinicCreate();
  }
  protected clinicCreate = () => {
    this.router.post("/create", ClinicController.newClinic);
  };
}

const ClinicRouter = new ClinicRoutes().router;
export { ClinicRouter };
