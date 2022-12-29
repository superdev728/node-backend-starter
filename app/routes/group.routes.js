const controller = require("../controllers/group.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/group/getallgroups", controller.getAllGroups);
  app.get("/api/group/getgroupsbyid", controller.getGroupsById);
  app.post("/api/group/creategroup", controller.createGroup);
};
