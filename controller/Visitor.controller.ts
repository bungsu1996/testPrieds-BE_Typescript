import { NextFunction, Request, Response } from "express";
import Clinic from "../models/Clinic.models";
import Visitor from "../models/Visitor.models";

class VisitorController {
  static async inputVisitor(req: Request, res: Response, next: NextFunction) {
    const {
      visitorName,
      visitorBirthDate,
      visitorAge,
      visitorContact,
      clinic,
      visitorWeight,
      visitorHeight,
      visitorBlood,
      visitorAdres,
      visitorAdres2,
      visitorAnamnesis,
      visitorTreatment,
    } = req.body;
    try {
      let visitorId: string = "";
      const getID = await Visitor.find({}).sort({ _id: -1 }).limit(1);
      if (getID.length < 1) {
        const n = 1;
        visitorId = String(n).padStart(4, "0");
      } else {
        const n = parseInt(getID[0].visitorId);
        visitorId = String(n + 1).padStart(4, "0");
      }
      console.log(visitorId);
      const findClinic = await Clinic.findOne({ clinicName: clinic });
      if (!findClinic) {
        throw { name: "NOT_FOUND_CLINIC" };
      }
      const result = await Visitor.create({
        visitorId: visitorId,
        visitorName: visitorName,
        visitorBirthDate: visitorBirthDate,
        visitorAge: visitorAge,
        visitorContact: visitorContact,
        clinic: findClinic,
        visitorWeight: visitorWeight,
        visitorHeight: visitorHeight,
        visitorBlood: visitorBlood,
        visitorAdres: visitorAdres,
        visitorAdres2: visitorAdres2,
        visitorAnamnesis: visitorAnamnesis,
        visitorTreatment: visitorTreatment,
      });
      res.status(201).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }

  static async listVisitors(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await Visitor.find();
      res.status(200).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }
}

export default VisitorController;
