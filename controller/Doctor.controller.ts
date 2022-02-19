import { NextFunction, Request, Response } from "express";
import Doctor from "../models/Doctor.models";

class DoctorController {
  static async newDoctor(req: Request, res: Response, next: NextFunction) {
    const { doctorName } = req.body;
    try {
      const result = await Doctor.create({ doctorName: doctorName });
      res.status(201).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }
}

export default DoctorController;
