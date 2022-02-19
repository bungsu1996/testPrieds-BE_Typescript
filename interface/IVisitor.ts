import IClinic from "./IClinic";

interface IVisitor {
  visitorId: string;
  visitorName: string;
  visitorBirthDate: string;
  visitorAge: string;
  visitorContact: string;
  clinic: IClinic;
  visitorWeight: string;
  visitorHeight: string;
  visitorBlood: string;
  visitorAdres: string;
  visitorAdres2: string;
  visitorAnamnesis: string;
  visitorTreatment: string;
}

export default IVisitor;