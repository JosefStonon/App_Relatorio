-- CreateTable
CREATE TABLE "Pessoa" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);
