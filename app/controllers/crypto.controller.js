const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "ZYMY8UCReL7CvTd7ssS9xXrn5hgEf1z6GRjbOm9xHbf05Az9F4fyL7MiSH9YgCqc",
  APISECRET: "Bvr8oxS6zOLjXJyA4apB4f9LUl1735zoW2PampqxuVnOQ4rSbaNu1QiU4MQz5tUW",
});

exports.getDatasBySymbol = async (req, res) => {
  binance.trades("BNBUSDT", (error, trades, symbol) => {
    console.log(symbol + " trade history", trades, error);
  });
};

exports.getCryptoPrices = async (req, res) => {
  let ticker = await binance.prices();
  console.info(`Price of ETH: ${ticker.ETHUSDT}`);
  res.status(200).send(ticker);
};

exports.getChartdatas = async (req, res) => {
  binance.websockets.chart("BTCUSDT", "1m", (symbol, interval, chart) => {
    let tick = binance.last(chart);
    const last = chart[tick].close;
    console.info(symbol + " last price: " + last);
    res.status(200).send(last);
  });
};
