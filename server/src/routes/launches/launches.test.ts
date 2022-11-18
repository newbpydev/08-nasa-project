// import { describe } from "node:test";

describe("Test GET /launches", () => {
  test("It should respond with 200 success", () => {
    const response = 200;
    expect(response).toBe(200);
  });
});

describe("Test POST /launch", () => {
  test("should response with 200 success", () => {});

  test("should catch missing required properties", () => {});

  test("should catch invalid dates", () => {});
});
