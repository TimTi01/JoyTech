const {Channels} = require('../models/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ChannelsController {
    async getAll(req, res, next) {
        let {limit, page, title} = req.query
        page = page || 1
        limit = limit || 9
        title = title || ''
        let offset = page * limit - limit 

        const channels = await Channels.findAndCountAll({ limit, offset, where:{title: { [Op.startsWith]: title.toLowerCase() }}})

        return res.json(channels)
    }

    async create(req, res, next) {
        const {title, link} = req.body
        const channels = await Channels.create({title, link})
        return res.json(channels)
    }
}

module.exports = new ChannelsController()