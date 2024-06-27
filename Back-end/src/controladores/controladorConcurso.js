import modeloConcurso from '../modelos/modeloConcurso.js'

const ControladorConcurso = {
    crearParticipante: async function (solicitud, respuesta) {
        try{
            const crearParticipante = solicitud.body;
            const nuevoParticipante = new modeloConcurso(crearParticipante);         
            const participanteCreado = await nuevoParticipante.save();
            if(participanteCreado.id){
                respuesta.json({
                    resultado:"Excelente",
                    mensaje:"Se creo el participante correctamente",
                    datos: participanteCreado.id    
                })
            }
        } catch(error){
            respuesta.json({
                resultado: "Algo estita mal", 
                mensaje:"Ocurrio un error con POST al crear participante",
                datos: error
            })
        }
    },
    leerParticipante: async function (solicitud, respuesta){
        try{
            const participanteEncontrado = await modeloConcurso.findById(solicitud.params.id);
            respuesta.json({
                resultado:"Excelente",
                mensaje:"Se pudo leer el participante",
                datos: participanteEncontrado
            })
        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con GET al obtener un participante",
                datos: error
            })
        }
    },
    leerParticipantes: async function (solicitud, respuesta){
        try{
            const participantesEncontrados = await modeloConcurso.find();    respuesta.json({
                resultado:"Excelente",
                mensaje:"Se pudo leer todos los participantes",
                datos: participantesEncontrados    
            })
        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con GET al obtener todos los participantes",
                datos: error
            });
        }
        
    },
    actualizarParticipante: async function (solicitud, respuesta){
        try{
           const participanteActualziado = await modeloConcurso.findByIdAndUpdate(solicitud.params.id, solicitud.body)
           if(solicitud.params.id){
           respuesta.json({
            resultado:"Excelente",
            mensaje:"Se pudo actualizar el participante correctamente",
            datos: participanteActualziado.id    
        })
        }

        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con PUT al actualizar un participante",
                datos: error,
            })
        }
    },
    eliminarParticipante: async function (solicitud, respuesta){
        try{
            const participanteEliminado = await modeloConcurso.findByIdAndDelete(solicitud.params.id)
            respuesta.json({
                resultado:"Excelente",
                mensaje:"Se pudo Eliminar el participante correctamente",
                datos: participanteEliminado  
            })
        }catch(error){
            respuesta.json({
                resultado: "Algo esta mal", 
                mensaje:"Ocurrio un error con DELETE al eliminar un participante",
                datos: error})
        }
        
    }
}

export default ControladorConcurso