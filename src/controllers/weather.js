const { CityInfo } = require("./cityInfo");
const { getWeatherHttp, getPosWeatherHttp } = require("../config");
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

async function WeatherPos(ctx, next) {
    let { lat, lon } = ctx.params;
    let obj = new Object();
    obj.lat = lat;
    obj.lon = lon;
    let address = getPosWeatherHttp(obj);
    ctx.body = await GetWeather(address);
}

module.exports.Weather = Weather;
module.exports.WeatherPos = WeatherPos;
