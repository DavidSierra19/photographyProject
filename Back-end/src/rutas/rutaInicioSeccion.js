import { Router } from "express";
import ControladorInicioSeccion from "../controladores/controladorInicioSeccion.js";

const enrutadorInicioSeccion = Router();

enrutadorInicioSeccion.post("/", ControladorInicioSeccion.ingresoUsuario)
enrutadorInicioSeccion.get("/:token",ControladorInicioSeccion.validarToken)

export default enrutadorInicioSeccion