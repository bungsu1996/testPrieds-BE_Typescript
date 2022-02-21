import { Schema, Model, model } from "mongoose";
import ITicket from "../interface/ITicket";

const ticketSchema = new Schema(
  {
    numberTicket: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Ticket: Model<ITicket> = model<ITicket>("ticket", ticketSchema);
export default Ticket;
