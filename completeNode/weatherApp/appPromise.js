const yargs = require("yargs");
const axios = require("axios");
require("dotenv").config();
const DARK_SKY_KEY = process.env.DARK_SKY_KEY;

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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios
  .get(geocodeURL)
  .then(res => {
    if (res.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address");
    }

    const lat = res.data.results[0].geometry.location.lat;
    const lng = res.data.results[0].geometry.location.lng;
    const darkSkiesURL = `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${lng}`;

    return axios.get(darkSkiesURL);
  })
  .then(res => {
    const temp = res.data.currently.temperature;
    const apparentTemp = res.data.currently.apparentTemperature;

    console.log(
      `The temperature is ${temp}, but it feels like ${apparentTemp}`
    );
  })
  .catch(err => {
    if (err.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers");
    } else {
      console.log(err.message);
    }
  });
