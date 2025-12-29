import type { Config } from "jest";

const config: Config = {
  bail: true, // para teste quando erra
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
