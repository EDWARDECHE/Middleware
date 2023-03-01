const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schema = new Schema({

    nombreMedicamento:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required:true
    },
    cantidadStock:{
        type: Number,
        required: true
    },
    receta:{
        type:Boolean,
        required:false
    }

})

const Laboratorio = mongoose.model("Laboratorio", schema);
module.exports = { Laboratorio }

