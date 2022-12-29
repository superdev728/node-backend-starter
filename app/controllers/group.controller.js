const db = require("../models");
const Group = db.group;

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.findAll({});
    if (groups) res.status(200).send(groups);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getGroupsById = async (req, res) => {
  try {
    console.log("req.query.id", req.query.id)
    const groups = await Group.findAll({ where: {groupFlag: req.query.id}});
    if (groups) res.status(200).send(groups);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createGroup = async (req, res) => {
  try {
    const newGroup = await Group.create({
      name: req.body.name,
      website_url: req.body.website_url,
      twitter_url: req.body.twitter_url,
      logo_url: req.body.logo_url,
      groupFlag: req.body.groupFlag,
    });
    if (newGroup) res.status(200).send(newGroup);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
