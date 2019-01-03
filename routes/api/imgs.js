const router = require("express").Router();
const imgsController = require("../../controllers/imgsController");

// Matches with "/api/imgs"
router.route("/")
//   .get(imgsController.findAll)
//   .post(imgsController.create);

// Matches with "/api/imgs/:id"
router
  .route("/:id")
  .get(imgsController.getImg)
//   .put(imgsController.update)
//   .delete(imgsController.remove);

module.exports = router;