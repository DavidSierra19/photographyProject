import mongoose from "mongoose"

mongoose.connect(process.env.KEYBD).then (function (dato){
    console.log(", Excelente Conectado a la base de datos")
}).catch(function(error){
    console.log("mal, ocurrio un error y no se conecto a la base de datos")
})
