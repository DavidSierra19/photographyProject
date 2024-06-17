import bcryptjs from "bcryptjs"
import { generarToken, verificarToken } from "../helper/funciones.js";
import modeloUsuarios from "../modelos/modeloUsuarios.js";

const ControladorInicioSeccion = {
    
    ingresoUsuario: async function(solicitud, respuesta){
        try{
            const {usuario, password} = solicitud.body;
            const usuarioEncontrado = await modeloUsuarios.findOne({
                correo: usuario,
            });
            const contrasenaValida = await bcryptjs.compare(
                password, 
                usuarioEncontrado.contrasena)
                console.log(contrasenaValida)   
            if(contrasenaValida){
               const token = await generarToken({
                    id: usuarioEncontrado._id,
                    nombre: usuarioEncontrado.nombre
                });

                respuesta.json({
                    resultado: "Excelente",
                    mensaje: "Seccion Iniciada",
                    datos: token,
                })
            }else{
                respuesta.json({
                    resultado: "Algo salio mal",
                    mensaje: "Acceso denegado",
                    datos: null,
                })
            }
            
        } catch(error){
            respuesta.json({
                resultado: "Algo esta mal",
                mensaje: "Ocurrio un error al iniciar seccion",
                datos: error
            })
        }
    },
    validarToken: async (solicitud, respuesta) => {
        try{
            const token = solicitud.params.token;
            const decodificado = await verificarToken(token);  
            if(decodificado.id){
                respuesta.json({
                    resultado: "Excelente",
                    mensaje: "Token Valido",
                    datos: decodificado,
                })
            }else{
                respuesta.json({
                    resultado: "Algo salio mal",
                    mensaje: "Token no valido",
                    datos: null,
                })
            }
            
        } catch(error){
            respuesta.json({
                resultado: "Algo esta mal",
                mensaje: "Ocurrio un error al validar token",
                datos: error
            })
        }
    }
}

export default ControladorInicioSeccion