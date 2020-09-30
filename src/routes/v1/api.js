const { router } = require("../../loaders");
const { Weather } = require("../../controllers");

router.get("/position/:city", Weather);
router.get("/position/:city/:country", Weather);

module.exports.router = router;
