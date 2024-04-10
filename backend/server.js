const express = require("express");
const env = require("dotenv").config().parsed;
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
let port = 4000;

mongoose
  .connect(env.dbURI)
  .then(
    app.listen(port, () => {
      console.log(`connected to db & listening on port ${port}!`);
    })
  )
  .catch((err) => console.log(err));
