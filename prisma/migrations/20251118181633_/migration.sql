/*
  Warnings:

  - You are about to drop the `Pessoa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Pessoa";

-- CreateTable
CREATE TABLE "Company" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "address" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "machineId" UUID NOT NULL,
    "avaliation" TEXT NOT NULL,
    "nameMachine" TEXT NOT NULL,
    "tagEquipment" TEXT NOT NULL,
    "haritage" INTEGER NOT NULL,
    "utility" TEXT NOT NULL,
    "brenchModel" TEXT NOT NULL,
    "serie" TEXT,
    "capacity" TEXT,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("machineId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_tradeName_key" ON "Company"("tradeName");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");

-- CreateIndex
CREATE INDEX "Company_name_idx" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_avaliation_key" ON "Machine"("avaliation");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_tagEquipment_key" ON "Machine"("tagEquipment");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_haritage_key" ON "Machine"("haritage");

-- CreateIndex
CREATE INDEX "Machine_nameMachine_idx" ON "Machine"("nameMachine");
