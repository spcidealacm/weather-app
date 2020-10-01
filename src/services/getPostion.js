const got = require("got");

async function GetPostionInfo(address) {
    try {
        const response = await got(address);
        const result = JSON.parse(response.body);
        // let obj = new Object();

        return result;
    } catch (error) {
        console.log(error.response.body);
    }
}

module.exports.GetPostionInfo = GetPostionInfo;
