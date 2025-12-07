-- CreateTable
CREATE TABLE "Company" (
    "id" UUID NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" UUID NOT NULL,
    "nameMachine" TEXT NOT NULL,
    "tagEquipment" TEXT NOT NULL,
    "haritage" TEXT NOT NULL,
    "utility" TEXT,
    "brenchModel" TEXT NOT NULL,
    "serie" TEXT,
    "capacity" TEXT,
    "companyId" UUID NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Company_nameCompany_key" ON "Company"("nameCompany");

-- CreateIndex
CREATE UNIQUE INDEX "Company_tradeName_key" ON "Company"("tradeName");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");

-- CreateIndex
CREATE INDEX "Company_nameCompany_idx" ON "Company"("nameCompany");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_tagEquipment_key" ON "Machine"("tagEquipment");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_haritage_key" ON "Machine"("haritage");

-- CreateIndex
CREATE INDEX "Machine_nameMachine_idx" ON "Machine"("nameMachine");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliation_id_key" ON "Avaliation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliation_machineId_key" ON "Avaliation"("machineId");

-- CreateIndex
CREATE INDEX "Avaliation_date_idx" ON "Avaliation"("date");

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
