/*
  Warnings:

  - The primary key for the `bull` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `earingNumber` on the `bull` table. All the data in the column will be lost.
  - You are about to drop the column `bull_earing_number` on the `semen` table. All the data in the column will be lost.
  - Added the required column `bull_id` to the `semen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "semen" DROP CONSTRAINT "semen_bull_earing_number_fkey";

-- AlterTable
ALTER TABLE "bull" DROP CONSTRAINT "bull_pkey",
DROP COLUMN "earingNumber",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "bull_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "semen" DROP COLUMN "bull_earing_number",
ADD COLUMN     "bull_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "semen" ADD CONSTRAINT "semen_bull_id_fkey" FOREIGN KEY ("bull_id") REFERENCES "bull"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
