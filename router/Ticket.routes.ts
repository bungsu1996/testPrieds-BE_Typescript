import { Router } from "express";
import TicketController from "../controller/Ticket.controller";

class TicketRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.printTicket();
    this.listTicket();
  }
  protected printTicket = () => {
    this.router.get("/print", TicketController.dynamicPrintTicket);
  };
  protected listTicket = () => {
    this.router.get("/", TicketController.listTicketToday);
  };
}

const TicketRouter = new TicketRoutes().router;
export { TicketRouter };
