const express = require('express')
const { Model } = require('objection');

const connectToDatabase = require('./src/databases/dbConnect.js')
const knexFile = require('./knexfile')

const ejs = require('ejs')
const appConnectionToDatabase = connectToDatabase(knexFile.development)

const pageRouter = require('./src/routes/pageRouter')
const apiRouter = require('./src/routes/apiRouter')

const app = express()

Model.knex(appConnectionToDatabase)

app.locals.db = appConnectionToDatabase

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/api', apiRouter)
app.use(function(req, res) {
 res.render('404.ejs')
})

const PORT = process.env.PORT || 3000;

app.listen(3000,() => {
	console.log('App running..')
})
