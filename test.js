const server = require("./server.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Transaction Endpoints", () => {
  it("GET /transactions should show all transactions", async () => {
    const res = await requestWithSupertest.get("/api/v1/transactions");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("transactions");
  });

  it("GET /transaction/:id should show a single transaction", async () => {
    const res = await requestWithSupertest.get(
      "/api/v1/transactions/a39a0508-0130-4160-8535-a679c9c68023"
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("transaction");
  });

  it("GET /transactions/filter should show a filter transaction", async () => {
    const res = await requestWithSupertest.get(
      "/api/v1/transactions?start=2020-02-02&end=2021-02-02"
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("transactions");
  });

  it("GET /transactions/:id should not show a single transaction on wrong ID", async () => {
    const res = await requestWithSupertest.get(
      "/api/v1/transactions/a39a0508-0130-4160-8535-a67"
    );
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("message");
  });
});
