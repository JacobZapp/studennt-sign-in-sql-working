const express= require('express')
const database = require('../models') // importing models dir, name makes it easier
const Student = database.Student // student model here

const router = express.Router()

// get information, make it JSON and then make it usable to us here
router.get('/students', function (req, res, next) {
    Student.findAll().then(students => {
        return res.json(students)
    })
})

module.exports = router
