const db = require("../models");
const User = db.user;

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    if (users) res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// exports.getContractById = async (req, res) => {
//   try {
//     const contracts = await Contract.findOne({ where: { id: req.query.id } });
//     if (contracts) res.status(200).send(contracts);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.getContractsById = async (req, res) => {
//   try {
//     const contracts = await Contract.findAll({
//       where: { groupid: req.query.id },
//     });
//     if (contracts) res.status(200).send(contracts);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.createContract = async (req, res) => {
//   try {
//     console.log("createContract Datas", req.body);
//     const newContract = await Contract.create(req.body);
//     if (newContract) res.status(200).send(newContract);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.updateCurrentBalance = async (req, res) => {
//   try {
//     const contracts = await Contract.update(
//       {
//         fundTokenCurrentBalance: req.body.fundTokenCurrentBalance,
//         launchTokenCurrentBalance: req.body.launchTokenCurrentBalance,
//       },
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     );
//     if (contracts) res.status(200).send(contracts);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };
