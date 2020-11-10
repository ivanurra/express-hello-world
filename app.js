// MANDATORY STEPS
const express = require("express")
const PORT = 3000
const app = express()

//SERVER ON AND LISTENING
app.listen(PORT, ()=>{
    console.log(`Server ON, listening in port ${PORT}`)
})

//CREATE HOMEPAGE
app.get('/', (request, response)=>{
    // response.send('<h1>Welcome to the HOMEPAGE</h1>')
    response.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about',(request, response)=>{
    // response.send('<h1>ABOUT ME</h1>')
    response.sendFile(`${__dirname}/views/about.html`)
})

//STATIC FOLDER
app.use(express.static('public'))

//ADD IMAGE
app.get('/cat', (request, response)=>{
    // response.send('<img src="/images/cool-cat.jpg"></img>')
    response.sendFile(`${__dirname}/views/cat.html`)
})

//ADD ERROR PAGE
app.get('*', (request,response)=>{
    response.send('<h1>Error 404</h1>')
})