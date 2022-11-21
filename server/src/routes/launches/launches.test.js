"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe("Test GET /launches", () => {
    test("It should respond with 200 success", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/launches")
            .expect("Content-Type", /json/)
            .expect(200);
        // expect(response.statusCode).toBe(200);
    });
});
describe("Test POST /launch", () => {
    const completeLaunchData = {
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f",
        launchDate: "January 4, 2028",
    };
    const launchDataWithoutDate = {
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f",
    };
    test("should response with 201 created", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/launches")
            .send(completeLaunchData)
            .expect("Content-Type", /json/)
            .expect(201);
        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);
        expect(response.body).toMatchObject(launchDataWithoutDate);
    });
    test("should catch missing required properties", () => { });
    test("should catch invalid dates", () => { });
});
