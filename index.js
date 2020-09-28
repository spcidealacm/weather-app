const { app } = require("./src/loaders");
const { router } = require("./src/routes/v1");
const { getPort } = require("./src/config");

app.use(async (ctx, next) => {
    await next();
});

app.use(router.routes());

getPort().then(port => {

    app.listen(port, () => {
        console.log("Server port: ", port);
    });

});