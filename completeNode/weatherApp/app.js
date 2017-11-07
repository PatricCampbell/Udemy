const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for.",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    weather.getWeather(results.lat, results.lng, (error, weatherResults) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `The temperature is ${weatherResults.temp}, but it feels like ${weatherResults.apparentTemp}`
        );
      }
    });
  }
});
