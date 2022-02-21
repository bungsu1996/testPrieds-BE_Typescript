import { Schema, Model, model } from "mongoose";
import IClinic from "../interface/IClinic";

const clinicSchema = new Schema(
  {
    clinicName: { type: String, unique: true, required: true },
    doctor: { type: Schema.Types.ObjectId, ref: "doctor" },
  },
  {
    versionKey: false,
  }
);

const Clinic: Model<IClinic> = model<IClinic>("clinic", clinicSchema);
export default Clinic;
