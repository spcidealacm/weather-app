const { router } = require("../../loaders");
const { Weather, Position } = require("../../controllers");

router.get("/weather/:city", Weather);
router.get("/weather/:city/:country", Weather);
router.get("/position/:lat/:lon", Position);

module.exports.router = router;
