import { Schema, model } from "mongoose";

const esquemaParticipante = new Schema(
    {
        titulo: {type: String, required: true},
        descripcion: {type: String, required: true},
        correo: {type: String, required: true},
        foto: {type: String, required: true},
       // foto: {data: Buffer, contentType: String},        
    },
    {versionKey: false, timestamps: true}
);
export default model("Participante", esquemaParticipante);