module.exports = (sequelize, Sequelize) => {
  const Swap = sequelize.define("swaps", {
    type: {
      type: Sequelize.STRING
    },
    Input: {
      type: Sequelize.NUMBER
    },
    Output: {
      type: Sequelize.NUMBER
    },
    price: {
      type: Sequelize.NUMBER
    },
    wallet: {
      type: Sequelize.STRING
    },
    contractId: {
      type: Sequelize.STRING
    },
  });
  return Swap;
};
