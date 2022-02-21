import { Router } from "express";
import ClinicController from "../controller/Clinic.controller";

class ClinicRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.clinicCreate();
    this.clinicList();
  }
  protected clinicCreate = () => {
    this.router.post("/create", ClinicController.newClinic);
  };
  protected clinicList = () => {
    this.router.get("/", ClinicController.listClinic);
  };
}

const ClinicRouter = new ClinicRoutes().router;
export { ClinicRouter };
