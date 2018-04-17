const connectToDatabase = require('./src/databases/dbConnect.js')
const knexFile = require('./knexfile')

const appConnectionToDatabase = connectToDatabase(knexFile.development)

app.locals.db = appConectionWithDatabase


app.listen(3000,() => {
	console.log('App running..')
})
