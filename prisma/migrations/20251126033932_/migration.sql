-- DropForeignKey
ALTER TABLE "public"."Avaliation" DROP CONSTRAINT "Avaliation_machineId_fkey";

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
