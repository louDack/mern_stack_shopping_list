const express = require('express')
const mongoose = require('mongoose')
const items = require('./routes/api/items')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const db = 'mongodb://localhost/mern_shopping'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err))

app.use('/api/items', items)

app.get('/', (req, res) => {
    res.send("Fuck your body! HAHA!")
})

const port = 5000;
app.listen(port, () => console.log(`Server started on PORT ${port}`))