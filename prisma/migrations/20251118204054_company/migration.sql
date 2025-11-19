/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Machine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Company";

-- DropTable
DROP TABLE "public"."Machine";

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machines" (
    "machineId" UUID NOT NULL,
    "avaliation" TEXT NOT NULL,
    "nameMachine" TEXT NOT NULL,
    "tagEquipment" TEXT NOT NULL,
    "haritage" INTEGER NOT NULL,
    "utility" TEXT NOT NULL,
    "brenchModel" TEXT NOT NULL,
    "serie" TEXT,
    "capacity" TEXT,

    CONSTRAINT "machines_pkey" PRIMARY KEY ("machineId")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_tradeName_key" ON "companies"("tradeName");

-- CreateIndex
CREATE UNIQUE INDEX "companies_cnpj_key" ON "companies"("cnpj");

-- CreateIndex
CREATE INDEX "companies_name_idx" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "machines_avaliation_key" ON "machines"("avaliation");

-- CreateIndex
CREATE UNIQUE INDEX "machines_tagEquipment_key" ON "machines"("tagEquipment");

-- CreateIndex
CREATE UNIQUE INDEX "machines_haritage_key" ON "machines"("haritage");

-- CreateIndex
CREATE INDEX "machines_nameMachine_idx" ON "machines"("nameMachine");
