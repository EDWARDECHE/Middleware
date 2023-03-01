const express = require("express")
const router = express.Router()
const Controller = require("../controller/drogueriaController")
const { validadorId } = require("../middleware/validadorld")
const {check} = require('express-validator')


router.get("/ver", Controller.verMedicamentos)


router.post("/crear",[
    check("nombreMedicamento").not().isEmpty().withMessage("El medicamento es requerido"),
    check("precio").not().isEmpty().withMessage("El precio es requerido"),
    check("cantidadStock").not().isEmpty().withMessage("La cantidad es requerido"),
    check("receta").not().isEmpty().withMessage("La receta es requerida")
], Controller.guardarMedicamento)


router.put("/editar/:id",[
    check("nombreMedicamento").not().isEmpty().withMessage("El medicamento es requerido"),
    check("precio").not().isEmpty().withMessage("Elprecio es requerido"),
    check("cantidadStock").not().isEmpty().withMessage("La cantidad es requerido"),
    check("receta").not().isEmpty().withMessage("La receta es requerida")
],validadorId, Controller.editarMedicamento)


router.delete("/borrar/:id",validadorId, Controller.borrarMedicamento)


module.exports = router
