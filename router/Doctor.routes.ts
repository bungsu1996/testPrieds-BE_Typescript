import { Router } from "express";
import DoctorController from "../controller/Doctor.controller";

class DoctorRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.doctorCreate();
    this.doctorList();
  }
  protected doctorCreate = () => {
    this.router.post("/create", DoctorController.newDoctor);
  };
  protected doctorList = () => {
    this.router.get("/", DoctorController.listDoctor);
  }
}

const DoctorRouter = new DoctorRoutes().router;
export { DoctorRouter };
