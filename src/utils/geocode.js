const request = require("request");

const geocode = function (city,cb) {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2hhbHUxMjIzIiwiYSI6ImNrenI1d3lsZTBzYWUydmxnaW9idnN0YWoifQ.j5K25Mmmbg_jeuG7-Lm0xA`, function (error, response, body) {
        console.error('error:', error);

        var result = JSON.parse(body);

        var data = {
            latitude: result.features[0].center[1],
            longitude: result.features[0].center[0]
        }
        cb(data);
    });
}
module.exports = geocode;
