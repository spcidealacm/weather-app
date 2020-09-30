const got = require("got");

async function GetWeather(address) {
    try {
        const response = await got(address);
        const result = JSON.parse(response.body);
        return ConverWeatherInfo(result.current);
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
    return (temp - 273).toFixed(2);
}

function ConverWeatherInfo(current) {
    let stringInfo = JSON.stringify(current);
    let weather = JSON.parse(stringInfo);
    weather.dt = GetTime(weather.dt);
    weather.sunrise = GetTime(weather.sunrise);
    weather.sunset = GetTime(weather.sunset);
    weather.temp = GetTemp(weather.temp);
    weather.feels_like = GetTemp(weather.feels_like);
    weather.dew_point = GetTemp(weather.dew_point);
    return weather;
}

module.exports.GetWeather = GetWeather;
