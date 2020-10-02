const { app } = require("./src/loaders");
const { router } = require("./src/routes/v1");
const { getPort } = require("./src/config");

const http = require("http");
const https = require("https");
const fs = require("fs");
// const { default: enforceHttps } = require("koa-sslify");

const options = {
    key: fs.readFileSync("./src/config/aitopcoder-com.key"), //ssl文件路径
    cert: fs.readFileSync("./src/config/aitopcoder-com.crt"), //ssl文件路径
};

app.use(async (ctx, next) => {
    await next();
});

app.use(router.routes());

getPort().then((port) => {
    http.createServer(app.callback()).listen(port);
    console.log("http server port: ", port);
    getPort().then((port) => {
        https.createServer(options, app.callback()).listen(port);
        console.log("https server port: ", port);
    });
});
