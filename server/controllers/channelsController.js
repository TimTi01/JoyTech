const {Channels, Message} = require('../models/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ChannelsController {
    async getAll(req, res, next) {
        let {limit, page, title} = req.query
        limit = limit || 9
        title = title || ''

        const channels = await Channels.findAndCountAll({ 
            limit, 
            where:{
                title: { [Op.startsWith]: title.toLowerCase() }
            },
            include: [
                {
                    model: Message
                },
            ]
        })

        return res.json(channels)
    }

    async create(req, res, next) {
        const {title, link} = req.body
        const channels = await Channels.create({title, link})
        return res.json(channels)
    }
}

module.exports = new ChannelsController()