const got = require("got");

async function GetWeather(address, city = undefined) {
    try {
        const response = await got(address);
        const result = JSON.parse(response.body);
        let obj = new Object();
        if (city) {
            obj.city = city;
        }
        obj.lat = result.lat;
        obj.lon = result.lon;
        obj.timezone = result.timezone;
        obj.current = ConverWeatherInfo(result.current);

        return obj;
    } catch (error) {
        console.log(error.response.body);
    }
}

function GetTime(dt) {
    // let time_zone = (0 - new Date().getTimezoneOffset()) * 60;

    let date = new Date(dt * 1000);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let result = `[${year}-${month}-${day} ${hours}:${minutes}:${seconds}]`;

    return result;
}

function GetTemp(temp) {
    return Number((temp - 273).toFixed(2));
}

function ConverWeatherInfo(current) {
    let stringInfo = JSON.stringify(current);
    let weather = JSON.parse(stringInfo);
    // weather.dt = GetTime(weather.dt);
    // weather.sunrise = GetTime(weather.sunrise);
    // weather.sunset = GetTime(weather.sunset);
    
    return weather;
}

module.exports.GetWeather = GetWeather;
