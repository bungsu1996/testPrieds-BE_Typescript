import { Router } from "express";

class DoctorRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
  }
  protected doctorCreate = () => {};
}

const DoctorRouter = new DoctorRoutes().router;
export { DoctorRouter };
