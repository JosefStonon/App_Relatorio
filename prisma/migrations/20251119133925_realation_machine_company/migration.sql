/*
  Warnings:

  - A unique constraint covering the columns `[machineId]` on the table `machines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "machines_machineId_key" ON "machines"("machineId");

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "machines_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
