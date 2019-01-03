const router = require("express").Router();
const questRoutes = require("./quests");
const imgRoutes = require("./imgs");

router.use("/quests", questRoutes);
router.use('/img', imgRoutes)

module.exports = router;
