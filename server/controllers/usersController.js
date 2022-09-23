const {User, Friends} = require('../models/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class UsersController {
    async getAll(req, res, next) {
        let {limit, page, email} = req.query
        page = page || 1
        limit = limit || 9
        email = email || ''
        let offset = page * limit - limit 

        const users = await User.findAndCountAll({ 
            limit, 
            offset, 
            where:{ 
                email: { [Op.startsWith]: email.toLowerCase() }
            },
            include: [
                {
                    model: Friends
                },
            ]
        })

        return res.json(users)
    }
}

module.exports = new UsersController()