const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Transaction {
  static async all(size = 20, skip = 20) {
    const intSize = parseInt(size); //Converting to Integer. Axios is sending Strings
    const intSkip = parseInt(skip);
    return await prisma.transaction.findMany({
      skip: intSkip,
      take: intSize,
      orderBy: {
        transactionDate: "desc",
      },
    });
  }

  static async find(id) {
    return await prisma.transaction.findFirst({
      where: {
        id,
      },
    });
  }

  static async filterByDate(start, end, size = 20, skip = 20) {
    const intSize = parseInt(size);
    const intSkip = parseInt(skip);
    return await prisma.transaction.findMany({
      skip: intSkip,
      take: intSize,
      where: {
        transactionDate: {
          gte: new Date(start),
          lt: new Date(end),
        },
      },
      orderBy: {
        transactionDate: "desc",
      },
    });
  }
}

module.exports = Transaction;
