//Enrutar desde express
import { Router } from "express"
import ControladorConcurso from "../controladores/controladorConcurso.js"

const enrutadorConcurso = Router();
//Puerta de metodo POST
enrutadorConcurso.post("/", ControladorConcurso.crearParticipante)
//Puerta de metodo GET para leer solo un usuario o concursante
enrutadorConcurso.get("/:id", ControladorConcurso.leerParticipante)
//Puerta de metodo GET para leer todos los usuarios o concursantes
enrutadorConcurso.get("/", ControladorConcurso.leerParticipantes)
//Puerta de metodo PUT
enrutadorConcurso.put("/:id", ControladorConcurso.actualizarParticipante)
//Puerta de metodo DELETE
enrutadorConcurso.delete("/:id", ControladorConcurso.eliminarParticipante)

export default enrutadorConcurso