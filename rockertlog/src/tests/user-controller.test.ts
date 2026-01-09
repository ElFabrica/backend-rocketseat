import request from "supertest";
import { prisma } from "@/database/prisma";

import { app } from "@/app";

describe("users-controller", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({ where: { id: user_id } });
  });

  it("should crete a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test user",
      email: "testuser@gmail.com",
      password: "Fala1234@",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test user");
    user_id = response.body.id;
  });

  it("should throw an error if user with same name email already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "Test user",
      email: "testuser@gmail.com",
      password: "Fala1234@",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("user with same email already exists");
  });
  it("should trow a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "invalid-email",
      password: "123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("validation error");
  });
});
