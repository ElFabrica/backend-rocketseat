import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Lucas Almeida",
        email: "lucas.almeida@gmail.com",
      },
      {
        name: "Mariana Santos",
        email: "mariana.santos@hotmail.com",
      },
      {
        name: "Pedro Oliveira",
        email: "pedro.oliveira@yahoo.com",
      },
      {
        name: "Ana Beatriz Costa",
        email: "ana.costa@gmail.com",
      },
      {
        name: "Rafael Pereira",
        email: "rafael.pereira@outlook.com",
      },
      {
        name: "Juliana Rocha",
        email: "juliana.rocha@gmail.com",
      },
      {
        name: "Bruno Martins",
        email: "bruno.martins@hotmail.com",
      },
      {
        name: "Camila Ferreira",
        email: "camila.ferreira@yahoo.com",
      },
      {
        name: "Thiago Nogueira",
        email: "thiago.nogueira@outlook.com",
      },
      {
        name: "Larissa Azevedo",
        email: "larissa.azevedo@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded");
  prisma.$disconnect;
});
