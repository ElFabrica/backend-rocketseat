import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tables").del();

  // Inserts seed entries
  await knex("tables").insert([{ table_number: 1 }]);
  await knex("tables").insert([{ table_number: 2 }]);
  await knex("tables").insert([{ table_number: 3 }]);
  await knex("tables").insert([{ table_number: 4 }]);
  await knex("tables").insert([{ table_number: 5 }]);
}
