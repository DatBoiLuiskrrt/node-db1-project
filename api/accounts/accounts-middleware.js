exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR
  console.log("checkAccountPayload");
  next();
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR
  console.log("checkAccountNameUnique");
  next();
};

exports.checkAccountId = (req, res, next) => {
  // DO YOUR
  console.log("checkAccountId");
  next();
};
