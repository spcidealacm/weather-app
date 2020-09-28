function temperature(city) {
    switch (city) {
        case "sydney":
            return 18;

        default:
            return -274;
    }
}

module.exports = temperature;