module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "zktsunami",
  // HOST: "localhost",
  // USER: "healcxzy_itdb",
  // PASSWORD: "yIWYzjetJxTy",
  // DB: "healcxzy_itdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
