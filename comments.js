//Create web server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

//Create a new comment
app.post("/comments", (req, res) => {
  const { body } = req;
  if (typeof body === "object" && body.text) {
    res.status(201).send({
      id: 1,
      text: body.text
    });
  } else {
    res.status(400).send();
  }
});

//Get a comment by id
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  if (id === "1") {
    res.status(200).send({
      id: 1,
      text: "This is a comment"
    });
  } else {
    res.status(404).send();
  }
});

//Update a comment by id
app.put("/comments/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (id === "1" && typeof body === "object" && body.text) {
    res.status(200).send({
      id: 1,
      text: body.text
    });
  } else {
    res.status(400).send();
  }
});

//Delete a comment by id
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  if (id === "1") {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = app;