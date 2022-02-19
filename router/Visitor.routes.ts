import { Router } from "express";
import VisitorController from "../controller/Visitor.controller";

class VisitorRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.visitorInput();
    this.listVisitor();
  }
  protected visitorInput = () => {
    this.router.post("/input-visitor", VisitorController.inputVisitor);
  };
  protected listVisitor = () => {
    this.router.get("/", VisitorController.listVisitors);
  };
}

const VisitorRouter = new VisitorRoutes().router;
export { VisitorRouter };
