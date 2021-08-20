const Transaction = require("../models/Transaction");

class TransactionController {
  static async index(req, res) {
    try {
      const transactions = await Transaction.all(
        req.query.size,
        req.query.skip
      );

      if (transactions.length) {
        return res.status(200).json({
          success: true,
          message: "Transactions retrieved successfully",
          transactions,
        });
      }

      return res.status(200).json({
        success: false,
        message: "Transactions not found",
      });
    } catch (error) {
      console.log(error); //For Dev
      return res.status(500).json({
        message: "An error occurred",
        success: false,
      });
    }
  }

  static async show(req, res) {
    try {
      const transaction = await Transaction.find(req.params.id);
      if (transaction) {
        return res.status(200).json({
          success: true,
          message: "Transaction retrieved successfully",
          transaction,
        });
      }

      return res.status(200).json({
        success: false,
        message: "Transaction not found",
      });
    } catch (error) {
      console.log(error); //For Dev
      return res.status(500).json({
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
      if (transactions.length) {
        return res.status(200).json({
          success: true,
          message: "Transactions retrieved successfully",
          transactions,
        });
      }

      return res.status(200).json({
        success: false,
        message: "Transactions not found",
      });
    } catch (error) {
      console.log(error); //For Dev
      return res.status(500).json({
        message: "An error occurred",
        success: false,
      });
    }
  }
}

module.exports = TransactionController;
