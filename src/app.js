const express = require('express')
const path = require('path')
const cors = require('cors')
require("dotenv").config()

const routes = require('./routes/index')
require('./db/config')

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/uploads', express.static(path.join(__dirname, './uploads')))

app.listen(port, () => {
    console.log(`server runing on port ${port}`)
})