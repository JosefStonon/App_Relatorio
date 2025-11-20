-- CreateTable
CREATE TABLE "Company" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" UUID NOT NULL,
    "avaliation" TEXT NOT NULL,
    "nameMachine" TEXT NOT NULL,
    "tagEquipment" TEXT NOT NULL,
    "haritage" INTEGER NOT NULL,
    "utility" TEXT,
    "brenchModel" TEXT NOT NULL,
    "serie" TEXT,
    "capacity" TEXT,
    "companyId" UUID NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("companyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Company_tradeName_key" ON "Company"("tradeName");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");

-- CreateIndex
CREATE INDEX "Company_name_idx" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_id_key" ON "Machine"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_avaliation_key" ON "Machine"("avaliation");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_tagEquipment_key" ON "Machine"("tagEquipment");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_haritage_key" ON "Machine"("haritage");

-- CreateIndex
CREATE INDEX "Machine_nameMachine_idx" ON "Machine"("nameMachine");

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
