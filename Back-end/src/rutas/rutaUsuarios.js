//Enrutar desde express
import { Router } from "express"
import ControladorUsuarios from "../controladores/controladorUsuarios.js";

const enrutadorUsuarios = Router();
//Puerta de metodo POST
enrutadorUsuarios.post("/", ControladorUsuarios.crearUsuario)
//Puerta de metodo GET para leer un usuario
enrutadorUsuarios.get("/:id", ControladorUsuarios.leerUsuario)
//Puerta de metodo GET para leer usuarios
enrutadorUsuarios.get("/", ControladorUsuarios.leerUsuarios)
//Puerta de metodo PUT
enrutadorUsuarios.put("/:id", ControladorUsuarios.actualizarUsuario)
//Puerta de metodo DELETE
enrutadorUsuarios.delete("/:id", ControladorUsuarios.eliminarUsuario)

export default enrutadorUsuarios