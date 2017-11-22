var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))


// 기본라우팅 - HOME
app.get('/', function (req, res){
  title = 'ONDA - HOME'
  res.render('index')
})

// 서비스
app.get('/service/hotel-pms', function (req, res){
  title = 'ONDA - 서비스'
  res.render('service-hotel')
})




app.listen(3000, function () {
  console.log('App listening on port 3000!')
})