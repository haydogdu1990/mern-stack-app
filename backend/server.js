const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const User = require("./models/user.model");

const username = process.env.DB_USER_NAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_DBNAME;

//setting up env
app.use(express.json());
app.use(express());

//db connection
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.9j25trb.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", () => {
  console.log("Error connecting to db");
});
db.once("open", function () {
  console.log("Success");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// async function run() {
//   const user = await User.create({ name: "kk444kk", age: 456 });
//   //   const user = new User({ name: "K", age: 26 });
//   //   await user.save();
//   console.log(user);
// }
