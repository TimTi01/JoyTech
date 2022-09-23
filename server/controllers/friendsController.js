const {Friends} = require('../models/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class FriendsController {
    async getAll(req, res, next) {
        const friends = await Friends.findAll()
        return res.json(friends)
    }

    async create(req, res, next) {
        const {name, avatar_link, userId} = req.body
        const friend = await Friends.create({name, avatar_link, userId})
        return res.json(friend)
    }
}

module.exports = new FriendsController()