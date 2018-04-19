const Router = require('express').Router;
const apiRouter = Router()

const Job = require('../models/Job')
const Company=require('../models/Companies')

function allJobs(req, res) {
  Job
     .query()
     .then(function(data) {
      res.json(data)
   })
}

function getSingleJob(req,res){
  const id= parseInt(req.params.id)
  Job
    .query()
    .findById(id)
    .then(function(job){
      res.json(job).status(200)
    })
}

function createsJob(req,res){
  Job
    .query()
    .insert(req.body)
    .then(function(newJob){
      res.json(newJob).status(200)
    })
}

function editsJob(req,res){
  const jobId = parseInt(req.params.id)
  const newData = req.body
  Job
    .query()
    .updateAndFetchById(jobId,newData)
    .then(function(newId){
      res.json(newId).status(200)
    })
}

function deleteJob(req,res){
  const jobId = parseInt(req.params.id)
  Job
    .query()
    .deleteById(jobId)
    .then(function(rowsDeleted){
      res.json({
        jobsDeleted: rowsDeleted
      }).status(200)
    })
}

apiRouter
  .get('/jobs',allJobs)
  .get('/jobs/:id',getSingleJob)
  .post('/jobs',createsJob)
  .put('/jobs/:id', editsJob)
  .delete('/jobs/:id',deleteJob)

function allCompanies(req, res) {
 Company
   .query()
   .then(function(data) {
     res.json(data)
   })
}

function getSingleCompany(req,res){
  const id = parseInt(req.params.id)
  Company
    .query()
    .findById(id)
    .then(function(company){
      res.json(company).status(200)
    })
}

function createsCompany(req,res){
  Company
    .query()
    .insert(req.body)
    .then(function(newCompany){
      res.json(newCompany).status(200)
    })
} 

function editCompany(req,res){
  const companyId = parseInt(req.params.id)
  const newData = req.body
  Company
    .query()
    .updateAndFetchById(companyId,newData)
    .then(function(editsCompany){
      res.json(editsCompany).status(200)
    })
}

apiRouter
  .get('/companies',allCompanies)
  .get('/companies/:id',getSingleCompany)
  .post('/companies',createsCompany)
  .put('/companies/:id', editCompany)


module.exports = apiRouter