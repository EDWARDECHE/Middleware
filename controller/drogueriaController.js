const { validationResult } = require("express-validator")
const { Laboratorio } = require("../models/Laboratorio")


const guardarMedicamento = async (req, res) =>{
    try {
            const err = validationResult(req)

            if(err.isEmpty()){
                const medicamento = new Laboratorio(req.body)
            await medicamento.save()
            res.status(201).json({medicamento})
            }else{
                res.status(501).json(err)
            }
    } catch (error) {
        res.status(501).json(error)
    }
}

const verMedicamentos = async(req, res) =>{
    const medicamentos = await Laboratorio.find()
    res.status(200).json({medicamentos})

    
}

const borrarMedicamento = async(req, res) =>{
    try {
        await Laboratorio.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"El medicamento se borro correctamente"})
    } catch (error) {
        res.status(501).json(error)
    }
}

const editarMedicamento = async(req, res) =>{
    try {
        const err = validationResult(req)

        if(err.isEmpty()){
            await Laboratorio.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg:"El medicamento se edito correctamente"})
        }else{
            res.status(501).json(err)
        }
    } catch (error) {
        res.status(501).json(error)
    }}


module.exports = { guardarMedicamento, verMedicamentos, editarMedicamento, borrarMedicamento }
