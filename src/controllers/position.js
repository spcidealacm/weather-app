const { getPositionHttp } = require("../config");
const { GetPostionInfo } = require("../services");

async function Position(ctx, next) {
    let { lat, lon } = ctx.params;
    let obj = new Object();
    obj.lat = lat;
    obj.lon = lon;

    let address = getPositionHttp(obj);
    ctx.body = await GetPostionInfo(address);
}

module.exports.Position = Position;
