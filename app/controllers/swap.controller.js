const db = require("../models");
const Swap = db.swap;

exports.getAllSwaps = async (req, res) => {
  try {
    const swaps = await Swap.findAll({});
    if (swaps) res.status(200).send(swaps);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getSwapsById = async (req, res) => {
  try {
    const swaps = await Swap.findAll({ where: {contractId: req.query.id}});
    if (swaps) res.status(200).send(swaps);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createSwap = async (req, res) => {
  try {
    console.log("createSwap Datas", req.body)
    const newSwap = await Swap.create(req.body)
    if (newSwap) res.status(200).send(newSwap);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
