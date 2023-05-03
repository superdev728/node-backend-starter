module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    acc_number: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    membership: {
      type: Sequelize.STRING
    },
    period: {
      type: Sequelize.STRING
    },
  });
  return User;
};
