const express = require('express')
const vash = require('vash')
const app = express()

app.set('view engine', 'vash')
app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
  res.render('00-index.vash')
})

app.get('/:path', function(req, res) {
  res.render(`${req.params.path}.vash`)
})

app.listen(3000, function () {
  console.log('Listening on port 3000.')
  console.log('Open http://localhost:3000/ to start! :-)')
  console.log('Use http://localhost:3001/ if running project with sync or start:sync command.')
})