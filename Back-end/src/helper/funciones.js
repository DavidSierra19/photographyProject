import jwt from "jsonwebtoken";

export function generarToken(payload){
    return new Promise(function(resolver, rechazar){
        jwt.sign(payload, "llave secreta", {expiresIn: "1h"},function(error, token){
            if(error){
                rechazar(error)
            }else{
                resolver(token)
            }
        })
    })
}

export function verificarToken(token){
    return new Promise(function(resolver, rechazar){
        jwt.verify(token, "llave secreta",(error, decodificado) =>{
            if(error){
                rechazar(error)
            }else{
                resolver(decodificado)
            }
        })
    })
}
