const express = require('express')

const app = express()

app.listen('3000')

// app.route('/').get( (req, res) => res.send('Hello world'))
// app.route('/about').get( (req, res) => res.send('Hello about'))


// app.use(express.json())
// app.route('/').post( (req,res) => res.send(req.body))


//#####middleware
// app.use(express.json())

// let author = "eurison barbosa"

// app.route('/').get( (req, res) => res.send(author))

// app.route('/').put( (req, res) => {
//   author = req.body.author
//   res.send(author)
// })


app.route('/:identificador').delete( (req,res) => {
  res.send(req.params.identificador)
})