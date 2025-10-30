/*
  Warnings:

  - You are about to drop the column `criado_em` on the `Pessoa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "criado_em";

-- CreateIndex
CREATE INDEX "Pessoa_name_idx" ON "Pessoa"("name");
