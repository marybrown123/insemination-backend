-- DropForeignKey
ALTER TABLE "semen" DROP CONSTRAINT "semen_bull_id_fkey";

-- AddForeignKey
ALTER TABLE "semen" ADD CONSTRAINT "semen_bull_id_fkey" FOREIGN KEY ("bull_id") REFERENCES "bull"("id") ON DELETE CASCADE ON UPDATE CASCADE;
