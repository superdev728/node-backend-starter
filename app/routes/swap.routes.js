const controller = require("../controllers/swap.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/swap/getallswaps", controller.getAllSwaps);
  app.get("/api/swap/getswapsbyid", controller.getSwapsById);
  app.post("/api/swap/createswap", controller.createSwap);
};
