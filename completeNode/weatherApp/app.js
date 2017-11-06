const yargs = require("yargs");

const geocode = require("./geocode/geocode");

require("dotenv").config();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

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
