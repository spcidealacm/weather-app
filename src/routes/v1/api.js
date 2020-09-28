const { router } = require("../../loaders");
const { weather } = require("../../controllers");

router.get("/position/:city", weather);

module.exports.router = router;