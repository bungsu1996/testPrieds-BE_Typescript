import { NextFunction, Request, Response } from "express";
import Clinic from "../models/Clinic.models";

class ClinicController {
  static async newClinic(req: Request, res: Response, next: NextFunction) {
    const { clinicName } = req.body;
    try {
      const result = await Clinic.create({
        clinicName: clinicName,
      });
      res.status(201).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }
}

export default ClinicController;
