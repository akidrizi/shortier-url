import request from "supertest";

import app from "../../src/app";

describe("GET /:code", () => {
	it("should return 301", async () => {
		const githubUrl = "https://www.github.com/";

		const resShorten = await request(app).post("/shorten").send({
			url: githubUrl,
		});

		const res = await request(app).get(`/${resShorten.body.code}`);
		expect(res.statusCode).toBe(301);
	});
});

describe("GET /:code", () => {
	it("should return 404", async () => {
		const res = await request(app).get("/111");
		expect(res.statusCode).toBe(404);
	});
});
