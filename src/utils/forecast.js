const request = require("request");

const forecast = function(data,cb){
    request(`http://api.weatherstack.com/current?access_key=18808a24c68ba9e9947d32df59d97df2&query=${data.latitude},${data.longitude}`, function (error, response, body) {
    console.error('error:', error);

    var result = JSON.parse(body);
    cb(result.current.weather_descriptions[0])
});
}
module.exports = forecast;
