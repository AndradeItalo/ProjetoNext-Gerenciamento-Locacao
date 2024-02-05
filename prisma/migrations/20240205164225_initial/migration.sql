-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "immobileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Immobile" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "numberHouse" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "numberRooms" DOUBLE PRECISION NOT NULL,
    "numberBathroom" DOUBLE PRECISION NOT NULL,
    "serviceArea" BOOLEAN NOT NULL DEFAULT false,
    "balcony" BOOLEAN NOT NULL DEFAULT false,
    "rent" DOUBLE PRECISION NOT NULL,
    "financialPending" BOOLEAN NOT NULL DEFAULT false,
    "payday" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Immobile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendency" (
    "id" TEXT NOT NULL,
    "typeNotification" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "pendency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ImmobileTopendency" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_cpf_key" ON "Tenant"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_email_key" ON "Tenant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_immobileId_key" ON "Tenant"("immobileId");

-- CreateIndex
CREATE UNIQUE INDEX "_ImmobileTopendency_AB_unique" ON "_ImmobileTopendency"("A", "B");

-- CreateIndex
CREATE INDEX "_ImmobileTopendency_B_index" ON "_ImmobileTopendency"("B");

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImmobileTopendency" ADD CONSTRAINT "_ImmobileTopendency_A_fkey" FOREIGN KEY ("A") REFERENCES "Immobile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImmobileTopendency" ADD CONSTRAINT "_ImmobileTopendency_B_fkey" FOREIGN KEY ("B") REFERENCES "pendency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
