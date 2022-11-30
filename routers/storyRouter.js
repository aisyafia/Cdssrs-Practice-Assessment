const { Router } = require("express");

const authMiddleware = require("../auth/middleware");

const User = require("../models").user;
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.dataValues.id;
    const { id } = req.params;
    const stories = await Story.findAll({
      where: { spaceId: userId },
    });
    // console.log("stories that match", storyId);

    const storiesNewArray = stories.map((s) => {
      return s.dataValues.id;
    });
    console.log("stories to DELETE", storiesNewArray);

    // const toDelete = await Story.findOne({
    //   where: { id: storyId.dataValues.id },
    // });
    // console.log("STORY to delete", toDelete);

    // console.log("SPACE USERID", toDelete.space.userId);
    // if (toDelete.space.userId !== userId) {
    //   res.status(400).send("Bad request");
    // }
    // if (!toDelete) {
    //   res.status(404).send("Story is not found");
    // } else {
    //   await toDelete.destroy();
    //   res.status(200).send([Space]);
    // }
  } catch (error) {
    console.log("there is an error:", error);
  }
});

module.exports = router;
