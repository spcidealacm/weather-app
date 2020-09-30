const { CityInfo } = require("./position");
// const temperature = require("./temperature");
const { getWeatherHttp } = require("../config");
const { GetWeather } = require("../services");

async function Weather(ctx, next) {
    let { city, country } = ctx.params;
    let cityInfo = CityInfo(city, country);
    let obj = new Object();

    if (0 === cityInfo.length) {
        obj.error = "cannot find city";
        ctx.body = obj;
    } else {
        let address = getWeatherHttp(cityInfo[0]);
        let city = cityInfo[0].name;
        ctx.body = await GetWeather(address, city);
    }
}

module.exports.Weather = Weather;
