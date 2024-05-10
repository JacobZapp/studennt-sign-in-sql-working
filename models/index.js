// importing sql, using the correct Json file and then importing the data from student.js
const { Sequelize, DataTypes} = require('sequelize')
const configJson = require('../config.json')
const creatStudentModel = require('./student.js')

// look for env variable and read its value
// env variables are set for whole computer or server
// NODE_ENV will be set at Azure to "production"
const env = process.env.NODE_ENV || "development"

// reading in ENV setting we identify in Azure || the config object based on whether its development or production
const config = configJson[env]

// lower case
const sequelize = new Sequelize(config)

const database = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

// creating student model
const studentModel = creatStudentModel(sequelize, DataTypes)
const studentModelName = studentModel.name // 'Student'

// adding new property i think?
database[studentModelName] = studentModel

module.exports = database




