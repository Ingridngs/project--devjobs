const Router = require('express').Router;
const apiRouter = Router()

const Job = require('../models/Job')
const Company=require('../models/Companies')

apiRouter.get('/jobs', function(req, res) {
 const db = req.app.locals.db
 db
   .select()
   .table('job')
   .then(function(data) {
     res.json(data)
   })
})

apiRouter.get('/companies', function(req, res) {
 const db = req.app.locals.db
 db
   .select()
   .table('company')
   .then(function(data) {
     res.json(data)
   })
})



module.exports = apiRouter