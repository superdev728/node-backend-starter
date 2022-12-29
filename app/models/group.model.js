module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define("groups", {
    name: {
      type: Sequelize.STRING
    },
    website_url: {
      type: Sequelize.STRING
    },
    twitter_url: {
      type: Sequelize.STRING
    },
    logo_url: {
      type: Sequelize.STRING
    },
    groupFlag: {
      type: Sequelize.NUMBER
    },
  });
  return Group;
};
