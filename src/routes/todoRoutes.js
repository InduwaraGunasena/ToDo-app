const express = require("express");
const taskController = require("../controllers/todoController");
const router = express.Router();

router.post("/tasks", taskController.createTask);  // for Create a new task with a title and description.
router.get("/tasks/:id", taskController.getTaskById); // for Retrieve details of a specific task by ID.
router.put("/tasks/:id", taskController.updateTask); // for Update a task's title or description. 
router.delete("/tasks/:id", taskController.deleteTask);  // for Delete a task by ID.
router.get("/tasks", taskController.getAllTasks); // for List all tasks with pagination.

module.exports = router;
