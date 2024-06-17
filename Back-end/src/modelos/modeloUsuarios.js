import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        correo: {type: String, required: true},
        telefono: {type: Number, required: true},
        ciudad: {type: String, required: true},
        contrasena: {type: String, required: true},
        fechaNacimiento: {type: Date, required: true},
        genero: {type: String, required: true},
        confirmarContrasena: {type: String},
        foto: {type: String, required: true}
    }
)
export default model("Usuario", esquemaUsuario);