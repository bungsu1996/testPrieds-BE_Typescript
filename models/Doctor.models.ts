import { Schema, Model, model } from "mongoose";
import IDoctor from "../interface/IDoctor";

const doctorSchema = new Schema(
  {
    doctorName: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Doctor: Model<IDoctor> = model<IDoctor>("doctor", doctorSchema);
export default Doctor;
