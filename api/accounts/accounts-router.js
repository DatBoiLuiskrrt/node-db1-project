const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next({ status: 422, message: "Asi nomas quedo ? que onda" });
  }
});

router.get("/:id", md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getById(req.params.id);
    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json("Post account");
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json("Update account by ID");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", md.checkAccountId, (req, res, next) => {
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
