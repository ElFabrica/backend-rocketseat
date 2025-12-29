import { sum } from "./sum";

describe("sum", () => {
  let sumResult: number;

  beforeAll(() => {
    sumResult = 10;
    console.log("EXECULTADO ANTES DOS TESTES", sumResult);
  });

  beforeAll(() => {
    sumResult = 0;
    console.log("EXECULTADO DEPOIS DOS TESTES", sumResult);
  });

  it("should do sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7);

    expect(result).toBe(10);
  });
  test("sum of 2 + 2 musb be 4", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });
});
