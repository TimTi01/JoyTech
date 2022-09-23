const {Message} = require('../models/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class MessageController {
    async getAll(req, res, next) {
        const message = await Message.findAll()
        return res.json(message)
    }

    async create(req, res, next) {
        const {text, time, channelId} = req.body
        const message = await Message.create({text, time, channelId})
        return res.json(message)
    }
}

module.exports = new MessageController()