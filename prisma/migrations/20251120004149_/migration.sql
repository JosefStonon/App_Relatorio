/*
  Warnings:

  - The primary key for the `Machine` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."Machine" DROP CONSTRAINT "Machine_companyId_fkey";

-- AlterTable
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_pkey";

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
