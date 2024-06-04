const request = require("supertest");
const app = require("../index.js");

describe("GET /messages", () => {
    it("should return all messages", async () => {
        const res = await request(app).get("/messages");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("POST /messages", () => {
    it("should post a new message to existing messages", async () => {
        const req = await request(app).post("/messages").send({
            name : "Ian",
            message : "Whit?",
        });
        expect(req.statusCode).toBe(200); 
        expect(req.body.name).toBe("Ian");
        expect(req.body.message).toBe("Whit?");
        const res = await request(app).get("/messages");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(3);
    })
});