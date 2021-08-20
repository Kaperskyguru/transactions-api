-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "id" SET DEFAULT gen_random_uuid()::TEXT;
