import { NextFunction, Request, Response } from "express";
import Ticket from "../models/Ticket.models";

class TicketController {
  static async dynamicPrintTicket(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let numberTicket: string = "";
      const getNumberTicket = await Ticket.find({}).sort({ _id: -1 }).limit(1);
      if (getNumberTicket.length < 1) {
        const n = 1;
        numberTicket = String(n).padStart(3, "0");
      } else {
        const n = parseInt(getNumberTicket[0].numberTicket);
        numberTicket = String(n + 1).padStart(3, "0");
      }
      const result = await Ticket.create({ numberTicket: numberTicket });
      res.status(201).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }
  // static async dynamicPrintTicket(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     let numberTicket: string = "";
  //     const getNumberTicket = await Ticket.find({}).sort({ _id: -1 }).limit(1);
  //     if (getNumberTicket.length < 1) {
  //       const n = 1;
  //       numberTicket = String(n).padStart(3, "0");
  //     } else {
  //       const n = parseInt(getNumberTicket[0].numberTicket);
  //       numberTicket = String(n + 1).padStart(3, "0");
  //     }
  //     const result = await Ticket.create({ numberTicket: numberTicket });
  //     res.status(201).json(result);
  //   } catch (error) {
  //     console.log((error as Error).message);
  //     next(error);
  //   }
  // }

  static async listTicketToday(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await Ticket.find();
      res.status(200).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }
}

export default TicketController;
