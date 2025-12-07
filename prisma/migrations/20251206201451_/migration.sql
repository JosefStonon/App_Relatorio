-- DropForeignKey
ALTER TABLE "public"."Machine" DROP CONSTRAINT "Machine_companyId_fkey";

-- AlterTable
ALTER TABLE "Machine" ALTER COLUMN "companyId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
