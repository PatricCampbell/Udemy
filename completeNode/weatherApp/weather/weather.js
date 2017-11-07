const request = require("request");
require("dotenv").config();
const DARK_SKY_KEY = process.env.DARK_SKY_KEY;

const getWeather = (lat, lng, callback) => {
  const url = request(
    {
      url: `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temp: body.currently.temperature,
          apparentTemp: body.currently.apparentTemperature
        });
      } else {
        callback("Unable to fetch weather");
      }
    }
  );
};

module.exports.getWeather = getWeather;
