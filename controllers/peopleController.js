const {People} = require('../models/models')
const ApiError = require('../error/ApiError')
class peopleController{
    async create(req, res){
        const {pib,date_of_birth,phone_number,email,job_date,away_date,reason_away} = req.body
        const people = await  People.create({pib,date_of_birth,phone_number,email,job_date,away_date,reason_away})
        return res.json(people)
    }

    async getAll(req, res){
        const people = await  People.findAll()
        return res.json(people)

    }


}

module.exports = new peopleController()