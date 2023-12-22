const express = require("express");

const router = express.Router();

const { createTask, getTask, getSingleTask, updateTask, deleteTask } = require("../controllers/taskControllers");
  
router.post("/", createTask);
router.get("/", getTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;