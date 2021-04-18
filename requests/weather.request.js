const rp = require('request-promise')

async function getWeather(city) {
  if (!city) {
    throw new Error('City is not defined')
  }

  const KEY = '1eece6fd44e5e89f0d351611992fc3b8'
  const uri = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}'

  const options = {
    uri,
    qs: {
      q: city,
      appid: KEY,
      units: 'metric'
    },
    json: true
  }

  try {
    const data = await rp(options)
    return {
      weather: {
        name: data.name,
        temp: data.main.temp.toFixed(0)
      },
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  }

}

module.exports = {
  getWeather
}