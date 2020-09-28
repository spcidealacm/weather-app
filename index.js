const { app } = require("./src/loaders");
const { router } = require("./src/routes/v1");
const { getPort } = require("./src/config");

app.use(async (ctx, next) => {
    await next();
});

app.use(router.routes());

getPort().then(finialPort => {
    app.listen(finialPort, () => {
        console.log("Server port: ", finialPort);
    });
});

