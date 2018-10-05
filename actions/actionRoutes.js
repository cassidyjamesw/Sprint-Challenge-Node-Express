const express = require("express");
const actionDB = require("../data/helpers/actionModel");
const router = express.Router();

// Actions routes
//get Actions
router.get("/", (req, res) => {
  actionDB
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json({ error: "ERROR" }));
});

//add Action
router.post("/", (req, res) => {
  const { id, project_id, description, notes, completed } = req.body;
  const newAction = { id, project_id, description, notes, completed };
  actionDB
    .insert(newAction)
    .then(action => {
      res.json(action);
    })
    .catch(err => res.status(500).json({ error: "ERROR" }));
});

//delete action
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const foundaction = actionDB.get(id);
  if (foundaction) {
    actionDB
      .remove(id)
      .then(actions => {
        res.json(actions);
      })
      .catch(err => res.status(500).json({ error: "ERROR" }));
  }
});

//edit action
router.put("/:id", (req, res) => {
  actionDB
    .update(req.params.id, req.body)
    .then(actions =>
      res
        .json(actions)
        .catch(err => res.status(500).json({ error: "ERROROROR" }))
    );
});

module.exports = router;
