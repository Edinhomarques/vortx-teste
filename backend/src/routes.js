const express = require('express')
const PlanController = require('./controller/PlanController')
const routes = express.Router(); 

routes.post('/calculatePlan', PlanController.calculatePlan )


module.exports = routes;