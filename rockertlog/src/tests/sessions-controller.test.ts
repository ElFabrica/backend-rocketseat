import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("SessionController", () => {
  let user_id: string;

  afterAll(async () => {
    if (user_id) {
      await prisma.user.delete({ where: { id: user_id } });
    }
  });

  it("should authenticate a and get acess token", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "Test auth",
      email: "auth_test_user@gmail.com",
      password: "Fala1234@",
    });

    user_id = userResponse.body.id;

    const sessionResponse = await request(app).post("/sessions").send({
      email: "auth_test_user@gmail.com",
      password: "Fala1234@",
    });

    expect(sessionResponse.status).toBe(200);
    expect(sessionResponse.body.token).toEqual(expect.any(String));
  });
});
