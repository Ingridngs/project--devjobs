const fs = require('fs')

const express = require ('express')

const app = express()

app.get('/',function(request,respond){
	fs.readFile(`${__dirname}/src/views/home.html`,'utf-8', function(error,content){
	respond.send(content)	
})
	
})




const PORT= process.env.PORT || 3000
app.listen(3000,function(){
	console.log(`App Running in PORT: ${PORT}`)
})

