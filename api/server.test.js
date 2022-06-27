// Write your tests here

const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

test("sanity", () => {
  expect(true).toBe(true);
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

describe("Jokes endpoint", () => {
  describe("GET Request for /api/jokes", () => {
    beforeEach(async () => {
      await db("users").truncate();
      await request(server).post("/api/auth/register").send(userFive);
    });
    it("responds with an error status code on missing token", async () => {
      const response = await request(server).get("/api/jokes");
      expect(response.status + "").toMatch(/4|5/);
    });
    it('"token required" message given on missing token', async () => {
      const response = await request(server).get("/api/jokes");
      expect(response.text + "").toMatch(/token required/);
    });
  });
});
