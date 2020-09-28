const config = require("./config.json");
const net = require("net");

let port = process.env.PORT || config.port;
port = port >= 3000 ? port : 3000;

function sleep(time = 100) {

    return sleep_base(random(time));

    function random(size) {
        return Math.floor(Math.random() * size);
    }

    function sleep_base(time) {
        return new Promise((resolve, rejects) => {
            setTimeout(resolve, time);
        });
    }
}

function portIsUsed(testPort) {

    const server = net.createServer().listen(testPort);

    return new Promise((resolve, rejects) => {

        server.on("listening", () => {
            server.close();
            resolve(false);
        });

        server.on("error", (err) => {
            if (err.code === "EADDRINUSE") {
                resolve(true);
            } else {
                rejects(err);
            }
        });

    });
}

async function getPort() {

    await sleep();

    try {

        while (true) {
            if (await portIsUsed(port)) {
                port += 1;
                await sleep();
            } else {
                return port;
            }
        }

    } catch (err) {

        console.error(err);

    }
}

module.exports.getPort = getPort;