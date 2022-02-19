import { Schema, Model, model } from "mongoose";
import IClinic from "../interface/IClinic";

const clinicSchema = new Schema(
  {
    clinicName: { type: String, unique: true, required: true },
  },
  {
    versionKey: false,
  }
);

const Clinic: Model<IClinic> = model<IClinic>("clinic", clinicSchema);
export default Clinic;
