/*
  Warnings:

  - A unique constraint covering the columns `[companyId]` on the table `Machine` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Machine_companyId_key" ON "Machine"("companyId");
