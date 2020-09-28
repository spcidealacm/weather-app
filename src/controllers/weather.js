const position = require("./position");
const temperature = require("./temperature");

function weather(ctx, next) {
    let { city } = ctx.params;
    if ("local" === city) {
        city = position();
    }
    let obj = new Object();
    obj.city = city;
    obj.temperature = temperature(city);
    ctx.body = obj;
}

module.exports.weather = weather;