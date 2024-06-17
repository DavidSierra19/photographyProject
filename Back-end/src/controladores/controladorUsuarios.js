import bcrypt from "bcryptjs"
import modeloUsuarios from "../modelos/modeloUsuarios.js";

const ControladorUsuarios = {
    crearUsuario: async function (solicitud, respuesta) {
        try{
            if(solicitud.body.nombre === "") throw new Error("Falta nombre");
            if(solicitud.body.apellido === "") throw new Error("Falta apelllido");
            if(solicitud.body.correo === "") throw new Error("Falta correo");
            if(solicitud.body.telefono === "") throw new Error("Falta telefono");
            if(solicitud.body.ciudad === "") throw new Error("Falta ciudad");
            if(solicitud.body.contrasena === "") throw new Error("Falta contraseña");
            if(solicitud.body.fechaNacimiento === "") throw new Error("Falta fecha de nacimiento");
            if(solicitud.body.genero === "") throw new Error("Falta genero");
            if(solicitud.body.foto === "") throw new Error("Falta foto");
            if(solicitud.body.contrasena !== solicitud.body.confirmarContrasena) throw new Error("Las contraseñas no son iguales");
            const {nombre,apellido,correo,telefono,ciudad,contrasena,fechaNacimiento,genero,foto} = solicitud.body;
            const contrasenaProtegida = await bcrypt.hash(contrasena, 10);
            const nuevoUsuario = new modeloUsuarios({
                nombre,
                apellido,
                correo,
                telefono,
                ciudad,
                contrasena: contrasenaProtegida,
                fechaNacimiento,
                genero,
                foto
            });         
            const usuarioCreado = await nuevoUsuario.save();
            if(usuarioCreado.id){
                respuesta.json({
                    resultado:"Excelente",
                    mensaje:"Se creo el usuario",
                    datos: usuarioCreado.correo    
                })
            }
        } catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con POST al crear usuario",
                datos: error
            })
        }
    },
    leerUsuario: async function (solicitud, respuesta){
        try{
            const usuarioEncontrado = await modeloUsuarios.findById(solicitud.params.id)
            respuesta.json({
                resultado:"Excelente",
                mensaje:"Se pudo leer el usuario",
                datos: usuarioEncontrado    
            })
        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con GET al obtener un usuario",
                datos: error
            })
        }
    },
    leerUsuarios: async function (solicitud, respuesta){
        try{
            const usuariosEncontrados = await modeloUsuarios.find();    respuesta.json({
                resultado:"Excelente",
                mensaje:"Se pudo leer todos los usuarios",
                datos: usuariosEncontrados    
            })
        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con GET al obtener todos los usuarios",
                datos: error
            });
        }
        
    },
    actualizarUsuario: async function (solicitud, respuesta){
        try{
           const usuarioActualziado = await modeloUsuarios.findByIdAndUpdate(solicitud.params.id, solicitud.body)
           if(solicitud.params.id){
           respuesta.json({
            resultado:"Excelente",
            mensaje:"Se pudo actualizar el usuario",
            datos: usuarioActualziado.correo    
        })
        }

        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con PUT al actualizar un usuario",
                datos: error,
            })
        }
    },
    eliminarUsuario: async function (solicitud, respuesta){
        try{
            const usuarioEliminado = await modeloUsuarios.findByIdAndDelete(solicitud.params.id)
            respuesta.json({
                resultado:"Excelente",
                mensaje:"Se pudo Eliminar el usuario",
                datos: usuarioEliminado   
            })
        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con DELETE al eliminar un usuario",
                datos: error})
        }
        
    }
}

export default ControladorUsuarios
