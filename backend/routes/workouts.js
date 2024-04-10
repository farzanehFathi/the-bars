const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// Post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  res.json({ mssg: "Post a new workout" });
});

// Delete a workout
router.post("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

module.exports = router;
