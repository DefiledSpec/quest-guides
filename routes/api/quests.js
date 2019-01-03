const router = require("express").Router();
const questController = require("../../controllers/questController");

// Matches with "/api/quests"
router.route("/")
  .get(questController.findAll)
  .post(questController.create)

// Matches with "/api/quests/:id"
router
  .route("/:id")
  .get(questController.findById)
  .put(questController.update)
  .delete(questController.remove)

module.exports = router;
