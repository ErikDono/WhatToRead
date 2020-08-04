const router = require("express").Router();
const controller = require("../../controller/main_controller");

// Matches with "/api/posts"
router
  .route("/")
  .get(controller.getAllBooks)
  .post(controller.create);

router
.route("/:title")
.put(controller.savePost)
  

module.exports = router;
