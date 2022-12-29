const controller = require("../controllers/crypto.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/crypto/getdatasbysymbol", controller.getDatasBySymbol);
  app.get("/api/crypto/getcryptoprices", controller.getCryptoPrices);
  app.get("/api/crypto/getchartdatas", controller.getChartdatas);
};
