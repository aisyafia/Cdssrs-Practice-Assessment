const { Router } = require("express");

const authMiddleware = require("../auth/middleware");

const User = require("../models").user;
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.dataValues.id;
    const storyId = parseInt(req.params.id);
    const toDelete = await Story.findByPk(storyId, { include: [Space] });

    console.log("SPACE USERID", toDelete.space.userId);
    if (toDelete.space.userId !== userId) {
      res.status(400).send("Bad request");
    }
    if (!toDelete) {
      res.status(404).send("Story is not found");
    } else {
      const deleted = await toDelete.destroy();
      res.send(deleted);
    }
  } catch (error) {
    console.log("there is an error:", error);
  }
});

module.exports = router;
