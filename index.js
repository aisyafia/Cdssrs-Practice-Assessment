//packages
const express = require("express");
const corsMiddleWare = require("cors");

//routers
const authRouter = require("./routers/auth");
const storyRouter = require("./routers/storyRouter");

//constants
const { PORT } = require("./config/constants");
const Space = require("./models").space;
const Story = require("./models").story;

// Create an express app
const app = express();

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json() to be able to read request bodies of JSON requests a.k.a. body-parser
app.use(express.json());

//routes
app.use("/auth", authRouter);
app.use("/story", storyRouter);

//start listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get("/", async (req, res) => {
  const allSpaces = await Space.findAll();
  res.send(allSpaces);
});

app.get("/spaces/:id", async (req, res) => {
  const specificSpace = await Space.findByPk(req.params.id, {
    include: [Story],
  });
  res.send(specificSpace);
});
