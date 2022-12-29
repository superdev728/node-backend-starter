const db = require("../models");
const Contract = db.contract;

exports.getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll({});
    if (contracts) res.status(200).send(contracts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getContractById = async (req, res) => {
  try {
    const contracts = await Contract.findOne({ where: { id: req.query.id } });
    if (contracts) res.status(200).send(contracts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getContractsById = async (req, res) => {
  try {
    const contracts = await Contract.findAll({
      where: { groupid: req.query.id },
    });
    if (contracts) res.status(200).send(contracts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createContract = async (req, res) => {
  try {
    console.log("createContract Datas", req.body);
    // const newContract = await Contract.create({
    //   name: req.body.name,
    //   symbol: req.body.symbol,
    //   description: req.body.description,
    //   learnMoreUrl: req.body.learnMoreUrl,
    //   startDate: req.body.startDate,
    //   endDate: req.body.endDate,
    //   swapFeePercentage: req.body.swapFeePercentage,
    //   networkId: req.body.networkId,
    //   active: req.body.active,
    //   maxPrice: req.body.maxPrice,
    //   minPrice: req.body.minPrice,
    //   mostRecentTxHash: req.body.mostRecentTxHash,
    //   twitterAccountId: req.body.twitterAccountId,
    //   twitterAccountLogo: req.body.twitterAccountLogo,
    //   twitterAccountProfile: req.body.twitterAccountProfile,
    //   twitterAccountFollowers: req.body.twitterAccountFollowers,
    //   twitterAccountJoinedDate: req.body.twitterAccountJoinedDate,
    //   blockedCountryOptions: req.body.blockedCountryOptions,
    //   lbpType: req.body.lbpType,
    //   fundTokenStartWeight: req.body.fundTokenStartWeight,
    //   fundTokenEndWeight: req.body.fundTokenEndWeight,
    //   fundTokenInitialDeposit: req.body.fundTokenInitialDeposit,
    //   fundTokenAddress: req.body.fundTokenAddress,
    //   fundTokenName: req.body.fundTokenName,
    //   fundTokenSymbol: req.body.fundTokenSymbol,
    //   fundTokenDecimal: req.body.fundTokenDecimal,
    //   fundTokenLogoUrl: req.body.fundTokenLogoUrl,
    //   launchTokenStartWeight: req.body.launchTokenStartWeight,
    //   launchTokenEndWeight: req.body.launchTokenEndWeight,
    //   launchTokenInitialDeposit: req.body.launchTokenInitialDeposit,
    //   launchTokenAddress: req.body.launchTokenAddress,
    //   launchTokenName: req.body.launchTokenName,
    //   launchTokenSymbol: req.body.launchTokenSymbol,
    //   launchTokenDecimal: req.body.launchTokenDecimal,
    //   launchTokenLogoUrl: req.body.launchTokenLogoUrl,
    //   groupid: req.body.groupid,
    // });
    const newContract = await Contract.create(req.body);
    if (newContract) res.status(200).send(newContract);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateCurrentBalance = async (req, res) => {
  try {
    const contracts = await Contract.update(
      {
        fundTokenCurrentBalance: req.body.fundTokenCurrentBalance,
        launchTokenCurrentBalance: req.body.launchTokenCurrentBalance,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    if (contracts) res.status(200).send(contracts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
