import { Schema, Model, model } from "mongoose";
import IVisitor from "../interface/IVisitor";

const visitorSchema = new Schema(
  {
    visitorId: { type: String },
    visitorName: { type: String, required: true },
    visitorBirthDate: { type: String },
    visitorAge: { type: String },
    visitorContact: { type: String },
    clinic: { type: Schema.Types.ObjectId, ref: "clinic" },
    visitorWeight: { type: String },
    visitorHeight: { type: String },
    visitorBlood: { type: String },
    visitorAdres: { type: String },
    visitorAdres2: { type: String },
    visitorAnamnesis: { type: String },
    visitorTreatment: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Visitor: Model<IVisitor> = model<IVisitor>("visitor", visitorSchema);
export default Visitor;
