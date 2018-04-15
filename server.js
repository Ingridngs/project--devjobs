const express = require('express')
const fs = require('fs')
const ejs = require('ejs')

const pageRouter= require('./src/routers/pageRouter')
const apiRouter= require('./src/routers/apiRouter')

const app= express()

app.engine('ejs',ejs.renderFile)

app.set('view engine', 'ejs')

app.set('views', `${__dirname}/src/views`)

app.use('/',pageRouter)


app.use(function(req,res){
	res.render('404.ejs')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`App running in PORT: ${PORT}`)
})