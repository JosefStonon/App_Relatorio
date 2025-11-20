/*
  Warnings:

  - You are about to alter the column `cnpj` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `haritage` on the `Machine` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "cnpj" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Machine" ALTER COLUMN "haritage" SET DATA TYPE INTEGER;
