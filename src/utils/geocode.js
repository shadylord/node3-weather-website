const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2xpbXNoYWR5MTIiLCJhIjoiY2p3dnAwa3lsMDgxNjQzcjF2ejZwejdzaiJ9.M6neNDM4IIREo065f8ZbnQ&limit=1`;

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
