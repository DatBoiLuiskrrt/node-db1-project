const router = require("express").Router();

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("Get accounts");
  } catch (err) {
    next({ status: 422, message: "Asi nomas quedo ? que onda" });
  }
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("Get accound by id");
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("Post account");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("Update account by ID");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("Delete accound by id");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
  // DO YOUR MAGIC
});

module.exports = router;
