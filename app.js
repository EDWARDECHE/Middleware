const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const { connect } = require("./db/db")

const app = express()

const drogueriaRouter = require("./router/drogueria")

app.use(logger("dev"))
app.use(cors())
app.use(express.json())


app.use("/drogueria", drogueriaRouter)

connect();
module.exports = app
    