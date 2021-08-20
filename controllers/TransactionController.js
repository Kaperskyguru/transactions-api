const Transaction = require("../models/Transaction");

class TransactionController {
  static async index(req, res) {
    try {
      const transactions = await Transaction.all(
        req.query.size,
        req.query.skip
      );
      res.json(transactions);
    } catch (error) {
      console.log(error); //For Dev
      res.json({
        message: "An error occurred",
        success: false,
      });
    }
  }

  static async show(req, res) {
    console.log(req.params.id);
    try {
      const transaction = await Transaction.find(req.params.id);
      res.json(transaction);
    } catch (error) {
      console.log(error); //For Dev
      res.json({
        message: "An error occurred",
        success: false,
      });
    }
  }

  static async filter(req, res) {
    try {
      const transactions = await Transaction.filterByDate(
        req.query.start,
        req.query.end
      );
      res.json(transactions);
    } catch (error) {
      console.log(error); //For Dev
      res.json({
        message: "An error occurred",
        success: false,
      });
    }
  }
}

module.exports = TransactionController;
