import { NextFunction, Request, Response } from "express";
import Clinic from "../models/Clinic.models";
import Doctor from "../models/Doctor.models";

class DoctorController {
  static async newDoctor(req: Request, res: Response, next: NextFunction) {
    const { doctorName, clinicName } = req.body;
    try {
      const findClinic = await Clinic.findOne({ clinicName: clinicName });
      if (!findClinic) {
        throw { name: "NOT_FOUND_CLINIC" };
      }
      const result = await Doctor.create({
        doctorName: doctorName,
        clinic: findClinic,
      });
      await Clinic.findByIdAndUpdate(findClinic, {
        doctor: result._id,
      });
      res.status(201).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }

  static async listDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await Doctor.find().populate("clinic");
      res.status(200).json(result);
    } catch (error) {
      console.log((error as Error).message);
      next(error);
    }
  }
}

export default DoctorController;
