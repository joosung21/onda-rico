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
app.get('/service', function (req, res){
  title = 'ONDA - 서비스'
  res.render('service')
})
app.get('/service/hotel', function (req, res){
  title = 'ONDA - 호텔, 게스트하우스 예약관리 프로그램'
  res.render('service-hotel')
})
app.get('/service/pension', function (req, res){
  title = 'ONDA - 펜션 예약관리 프로그램'
  res.render('service-pension')
})
app.get('/service/b2b', function (req, res){
  title = 'ONDA - 숙박중개 사업자를 위한 B2B 플랫폼'
  res.render('service-b2b')
})

// 메거진
app.get('/magazine/', function (req, res){
  title = 'ONDA - 메거진 온'
  res.render('magazine')
})
app.get('/magazine/post', function (req, res){
  title = '메거진 온 - 포스트 제목'
  res.render('magazine-post')
})

// 멤버/채용
app.get('/member', function (req, res){
  title = 'ONDA - 멤버/채용'
  res.render('member')
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})