const express = require("express");

const router = express.Router();

const memeController = require("../controllers/memeController");

router
  .route("/")
  .get(memeController.getAllMemes)
  .post(memeController.postAMeme);

router.route("/page/:page").get(memeController.getTheseMemes);

router.route("/check").post(memeController.checkDuplicate);

router
  .route("/:id")
  .get(memeController.getAMeme)
  .patch(memeController.editAMeme)
  .delete(memeController.deleteAMeme);

module.exports = router;
