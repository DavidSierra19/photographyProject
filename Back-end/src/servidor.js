import express from "express";
import morgan from "morgan"
import cors from "cors";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js"
import enrutadorInicioSeccion from "./rutas/rutaInicioSeccion.js";
import enrutadorConcurso from "./rutas/rutaConcurso.js";

const servidor = express();

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);
servidor.use("/inicio-seccion", enrutadorInicioSeccion);
servidor.use("/concurso", enrutadorConcurso);


servidor.get("/", function (solicitud, respuesta){
    respuesta.status(404).send("No encontrado")
})

export default servidor;
