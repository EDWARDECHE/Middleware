const { Laboratorio } = require('../models/Laboratorio')

const validadorId = async (req, res, next) =>{
    try {
        const item = await Laboratorio.findById(req.params.id)
        if(item !== null){
            next()
        }
    } catch (error) {
        res.status(500).json({msg:"El id ingresado posee formato incorrecto"})
    }
}

module.exports = { validadorId }

