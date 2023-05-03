const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/getallusers", controller.getAllUsers);
  // app.get("/api/contract/getcontractbyid", controller.getContractById);
  // app.get("/api/contract/getcontractsbyid", controller.getContractsById);
  // app.post("/api/contract/createcontract", controller.createContract);
  // app.post("/api/contract/updatecurrentbalance", controller.updateCurrentBalance);
};
