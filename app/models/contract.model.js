module.exports = (sequelize, Sequelize) => {
  const Contract = sequelize.define("contracts", {
    name: {
      type: Sequelize.STRING
    },
    symbol: {
      type: Sequelize.STRING
    },
    owner: {
      type: Sequelize.STRING
    },
    lbpContractAddress: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    learnMoreUrl: {
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.STRING
    },
    endDate: {
      type: Sequelize.STRING
    },
    swapFeePercentage: {
      type: Sequelize.NUMBER
    },
    networkId: {
      type: Sequelize.NUMBER
    },
    active: {
      type: Sequelize.NUMBER
    },
    maxPrice: {
      type: Sequelize.NUMBER
    },
    minPrice: {
      type: Sequelize.NUMBER
    },
    mostRecentTxHash: {
      type: Sequelize.STRING
    },
    twitterAccountId: {
      type: Sequelize.STRING
    },
    twitterAccountLogo: {
      type: Sequelize.STRING
    },
    twitterAccountProfile: {
      type: Sequelize.STRING
    },
    twitterAccountFollowers: {
      type: Sequelize.NUMBER
    },
    twitterAccountJoinedDate: {
      type: Sequelize.STRING
    },
    blockedCountryOptions: {
      type: Sequelize.STRING
    },
    lbpType: {
      type: Sequelize.NUMBER
    },
    fundTokenStartWeight: {
      type: Sequelize.NUMBER
    },
    fundTokenEndWeight: {
      type: Sequelize.NUMBER
    },
    fundTokenInitialDeposit: {
      type: Sequelize.STRING
    },
    fundTokenCurrentBalance: {
      type: Sequelize.STRING
    },
    accuredBalance: {
      type: Sequelize.STRING
    },
    fundTokenAddress: {
      type: Sequelize.STRING
    },
    fundTokenName: {
      type: Sequelize.STRING
    },
    fundTokenSymbol: {
      type: Sequelize.STRING
    },
    fundTokenDecimal: {
      type: Sequelize.NUMBER
    },
    fundTokenLogoUrl: {
      type: Sequelize.STRING
    },
    launchTokenStartWeight: {
      type: Sequelize.NUMBER
    },
    launchTokenEndWeight: {
      type: Sequelize.NUMBER
    },
    launchTokenInitialDeposit: {
      type: Sequelize.STRING
    },
    launchTokenCurrentBalance: {
      type: Sequelize.STRING
    },
    releaseBalance: {
      type: Sequelize.STRING
    },
    launchTokenAddress: {
      type: Sequelize.STRING
    },
    launchTokenName: {
      type: Sequelize.STRING
    },
    launchTokenSymbol: {
      type: Sequelize.STRING
    },
    launchTokenDecimal: {
      type: Sequelize.NUMBER
    },
    launchTokenLogoUrl: {
      type: Sequelize.STRING
    },
    groupid: {
      type: Sequelize.NUMBER
    },
  });
  return Contract;
};
