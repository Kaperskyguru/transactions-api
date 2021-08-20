const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const TransactionController = require("./controllers/TransactionController");

app.get("/api/v1/transactions", TransactionController.index);
app.get("/api/v1/transactions/filter", TransactionController.filter);
app.get("/api/v1/transactions/:id", TransactionController.show);

app.listen(process.env.PORT || 8083);
