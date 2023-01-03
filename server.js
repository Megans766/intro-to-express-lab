// import modules
import express from "express"

//create express app
const app = express()

//configure the app (app.set)
app.set('view engine', 'ejs')

//mount middleware (app.use)

//mount routes
app.get('/', function(req, res) {
    res.render('home')
})

//tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('listening on port 3000')
})