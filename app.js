const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/:id', (req, res) => {
    const {id} = req.params
    res.render('film', {id})
})

app.post('/rate', (req, res) => {
    // Send information to the DB
    console.log(req.body.rating)
    res.end()
})

app.listen(3000, () => {
    console.log("Movie App is listening on port 3000")
})