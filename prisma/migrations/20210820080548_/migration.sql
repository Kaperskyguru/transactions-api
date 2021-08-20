-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "reference" TEXT,
    "currency" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
