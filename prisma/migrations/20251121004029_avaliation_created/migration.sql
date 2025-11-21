/*
  Warnings:

  - You are about to drop the column `avaliation` on the `Machine` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Machine" DROP COLUMN "avaliation";

-- CreateTable
CREATE TABLE "Avaliation" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "categoryRisk" TEXT NOT NULL,
    "levelRisk" TEXT NOT NULL,
    "riskDirect" TEXT NOT NULL,
    "faceMachine" TEXT NOT NULL,
    "onOff" TEXT NOT NULL,
    "machineId" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Avaliation_id_key" ON "Avaliation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliation_machineId_key" ON "Avaliation"("machineId");

-- CreateIndex
CREATE INDEX "Avaliation_date_idx" ON "Avaliation"("date");

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
