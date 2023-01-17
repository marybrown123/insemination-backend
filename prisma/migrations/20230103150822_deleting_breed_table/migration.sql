/*
  Warnings:

  - You are about to drop the `breed` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bull" DROP CONSTRAINT "bull_breed_name_fkey";

-- DropTable
DROP TABLE "breed";
