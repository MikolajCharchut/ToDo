const express = require('express');
const router = express.Router();
const { Notes } = require('../models');

router.get("/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const notes = await Notes.findAll({ where: { TaskId: taskId } });
  res.json(notes);
});

router.post("/", async (req, res) => {
  const note = req.body;
  await Notes.create(note);
  res.json(note);
});

router.delete("/:noteId", async(req, res) => {
  const noteId = req.params.noteId;
  await Notes.destroy({
    where: {
      id: noteId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
