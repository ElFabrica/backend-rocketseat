import request from "supertest";

import { app } from "@/app";

describe("users-controller", () => {
  it("should crete a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test user",
      email: "testuser@gmail.com",
      passowrd: "Fala1234@",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toBe("Test User");
  });
});
