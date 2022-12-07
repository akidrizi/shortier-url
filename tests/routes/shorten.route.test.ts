import request from "supertest";

import app from "../../src/app";

describe("POST /shorten", () => {
	it("should return 201 with Body", async () => {
		const googleUrl = "https://www.github.com/";

		const res = await request(app).post("127.0.0.1:3000/shorten").send({
			url: googleUrl,
		});

		expect(res.statusCode).toBe(201);
		expect(res.body.shortUrl).toBe(googleUrl);
		expect(res.body.shortUrl).toBeInstanceOf(String);
	});
});

describe("POST /shorten", () => {
	it("should return 400", async () => {
		const googleUrl = "https://www.google.com/";

		const res = await request(app).post("/shorten").send({
			urlFAIL: googleUrl,
		});

		expect(res.statusCode).toBe(400);
	});
});
