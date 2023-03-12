const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/add", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.create({ username });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/del/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.deleteOne({ _id: id });
    res.status(200).json({ _id: id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
