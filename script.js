const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./user");

const username = "haydogdu1990";
const password = "geUMQr8s2D88z_3";
const cluster = "ClusterTR";
const dbname = "userTR";

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

app.listen(3000, () => {
  console.log("Server running at 3000");
});

run();

async function run() {
  const user = await User.create({ name: "j", age: 23 });
  //   const user = new User({ name: "K", age: 26 });
  //   await user.save();
  console.log(user);
}
