const express = require('express')
const bodyParser = require('body-parser')

const weatherRequest = require('./requests/weather.request')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded(true))

app.listen(3000, () => {
  console.log('Start from server ....')
})

app.get('/', async (req, res) => {
  res.render('index', { weather: null, error: null })
})

app.post('/',async (req, res) => {

   const { weather, error } = await weatherRequest.getWeather(req.body.city)

  res.render('index', {weather, error})
})