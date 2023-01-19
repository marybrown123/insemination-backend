/*
  Warnings:

  - You are about to drop the column `inseminated_at` on the `insemination` table. All the data in the column will be lost.
  - Added the required column `date` to the `insemination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "insemination" DROP COLUMN "inseminated_at",
ADD COLUMN     "date" TEXT NOT NULL;
