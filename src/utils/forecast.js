const request = require("request");
const config = require("../../config");

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${config.apiKeys.weatherStackAPIKey}&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location!", undefined);
        } else {
            forecast_string = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out in ${body.location.name}, ${body.location.region}."`;

            callback(undefined, forecast_string);
        }
    });
};

module.exports = forecast;
