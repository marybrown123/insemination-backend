/*
  Warnings:

  - Added the required column `updated_at` to the `adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `bull` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `cow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inseminated_at` to the `insemination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `insemination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `semen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adress" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "bull" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "client" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "cow" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "insemination" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "inseminated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "semen" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
