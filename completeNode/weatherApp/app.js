const request = require("request");
require("dotenv").config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

request(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=750%20ocean%20avenue%20brooklyn",
    json: true
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
);
