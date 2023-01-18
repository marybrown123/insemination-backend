-- DropForeignKey
ALTER TABLE "cow" DROP CONSTRAINT "cow_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "insemination" DROP CONSTRAINT "insemination_cow_earing_number_fkey";

-- DropForeignKey
ALTER TABLE "insemination" DROP CONSTRAINT "insemination_semen_number_fkey";

-- AddForeignKey
ALTER TABLE "cow" ADD CONSTRAINT "cow_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insemination" ADD CONSTRAINT "insemination_cow_earing_number_fkey" FOREIGN KEY ("cow_earing_number") REFERENCES "cow"("earing_number") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insemination" ADD CONSTRAINT "insemination_semen_number_fkey" FOREIGN KEY ("semen_number") REFERENCES "semen"("number") ON DELETE CASCADE ON UPDATE CASCADE;
