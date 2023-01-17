-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "second_name" TEXT NOT NULL,
    "adress_id" INTEGER NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adress" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "street_number" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cow" (
    "earing_number" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,

    CONSTRAINT "cow_pkey" PRIMARY KEY ("earing_number")
);

-- CreateTable
CREATE TABLE "bull" (
    "name" TEXT NOT NULL,
    "earingNumber" TEXT NOT NULL,
    "breed_name" TEXT NOT NULL,

    CONSTRAINT "bull_pkey" PRIMARY KEY ("earingNumber")
);

-- CreateTable
CREATE TABLE "breed" (
    "name" TEXT NOT NULL,

    CONSTRAINT "breed_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "semen" (
    "number" TEXT NOT NULL,
    "bull_earing_number" TEXT NOT NULL,

    CONSTRAINT "semen_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "insemination" (
    "id" SERIAL NOT NULL,
    "cow_earing_number" TEXT NOT NULL,
    "semen_number" TEXT NOT NULL,

    CONSTRAINT "insemination_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_adress_id_key" ON "client"("adress_id");

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cow" ADD CONSTRAINT "cow_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bull" ADD CONSTRAINT "bull_breed_name_fkey" FOREIGN KEY ("breed_name") REFERENCES "breed"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "semen" ADD CONSTRAINT "semen_bull_earing_number_fkey" FOREIGN KEY ("bull_earing_number") REFERENCES "bull"("earingNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insemination" ADD CONSTRAINT "insemination_cow_earing_number_fkey" FOREIGN KEY ("cow_earing_number") REFERENCES "cow"("earing_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insemination" ADD CONSTRAINT "insemination_semen_number_fkey" FOREIGN KEY ("semen_number") REFERENCES "semen"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
