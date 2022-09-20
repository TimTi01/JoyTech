require('dotenv').config()
const express = require('express')
const sequelize = require('./db') // import db settings
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const PORT = process.env.PORT||5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate() //use the .authenticate() function to test if the connection is OK
        await sequelize.sync() // .sync() checks the state of the db against the db schema
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()