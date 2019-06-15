const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.darksky.net/forecast/c2f7f23b0168fee4a600f8b6ecaabc69/${latitude},${longtitude}?units=si&lang=id`;

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (body.error) {
      callback("The given location is invalid.", undefined);
    } else {
      const data = {
        precipProbability: body.currently.precipProbability,
        temperature: body.currently.temperature,
        summary: body.currently.summary,
        windspeed: body.currently.windSpeed
      };

      callback(
        undefined,
        `${data.summary}. Cuaca saat ini adalah ${
          data.temperature
        } derajat Celsius. Kemungkinan turunnya hujan adalah ${
          data.precipProbability
        }%. Wind speed adalah ${data.windspeed}.`
      );
    }
  });
};

module.exports = forecast;
