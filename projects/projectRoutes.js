const express = require("express");
const projectDB = require("../data/helpers/projectModel");
const router = express.Router();

// Projects routes
//get projects
router.get("/", (req, res) => {
  projectDB
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ error: "ERROR" }));
});

// get project actions
router.get("/:id", (req, res) => {
  projectDB
    .getProjectActions(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ error: "ERROR" }));
});

// add project
router.post("/", (req, res) => {
  const { id, name, description, completed } = req.body;
  const newPost = { id, name, description, completed };
  projectDB
    .insert(newPost)
    .then(project => {
      res.json(project);
    })
    .catch(err => res.status(500).json({ error: "ERROR" }));
});

//delete project
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const foundproject = projectDB.getProjectActions(id);
  if (foundproject) {
    projectDB
      .remove(id)
      .then(projects => {
        res.json(projects);
      })
      .catch(err => res.status(500).json({ error: "ERROR" }));
  }
});

//edit project
router.put("/:id", (req, res) => {
  projectDB
    .update(req.params.id, req.body)
    .then(projects =>
      res
        .json(projects)
        .catch(err => res.status(500).json({ error: "ERROROROR" }))
    );
});

module.exports = router;
