import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "CSS" },
    { name: "Javascript" },
    { name: "Ruby" },
    { name: "Electron" },
    { name: "React" },
    { name: "Node" },
    { name: "Vue" },
    { name: "Angular" },
    { name: "React native" },
    { name: "Buble io" },
    { name: "Prisma" },
    { name: "orpc" },
    { name: "flutter" },
  ]);
}
