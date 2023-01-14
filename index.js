const express = require('express')
const axios = require('axios')

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


// app.route('/:identificador').delete( (req,res) => {
//   res.send(req.params.identificador)
// })

//middleware
// app.use(express.json())

// app.route('/').post((req, res) => {
//   const {nome, cidade} = req.body
//   res.send(`Meu nome é ${nome}, e minha cidade é ${cidade}`)
// } )


//########## consumindo API do github ############

app.route('/').get((req, res) => {

  axios.get('https://api.github.com/users/eurison')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})