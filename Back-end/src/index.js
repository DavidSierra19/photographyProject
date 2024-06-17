import "dotenv/config"
import "./conexionBD.js";
//Importo el servidor de express
import servidor from "./servidor.js";
//ENCIENDO EL SERVIDOR Y LO PONGO A EJCUTAR 
servidor.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});