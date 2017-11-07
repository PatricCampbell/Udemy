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
    console.log(JSON.stringify(results, undefined, 2));
  }
});

// weather.getWeather("40.504845", "-79.856194", (error, results) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(
//       `The temperature is ${results.temp}, but it feels like ${results.apparentTemp}`
//     );
//   }
// });
//make getWeather like geocode function and use lat, lng, and callback, callback will take error and results
// get temperature and actual temperature
