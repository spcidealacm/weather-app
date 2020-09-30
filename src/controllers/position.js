const cityInfo = require("../config/city.list.json");

function CityInfo(city, country = undefined) {
    let result = new Array();

    if (country) {
        for (let i = 0; i < cityInfo.length; i++) {
            if (
                cityInfo[i].name.toUpperCase() === city.toUpperCase() &&
                cityInfo[i].country.toUpperCase() === country.toUpperCase()
            ) {
                result.push(cityInfo[i]);
            }
        }
    } else {
        for (let i = 0; i < cityInfo.length; i++) {
            if (cityInfo[i].name.toUpperCase() === city.toUpperCase()) {
                result.push(cityInfo[i]);
            }
        }
    }

    return result;
}

module.exports.CityInfo = CityInfo;
