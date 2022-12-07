import request from "supertest";

import app from "../../src/app";
import { sequelize } from "../../src/utils/database";

describe("GET /:code/stats", () => {
	beforeAll(() => sequelize.sync({ force: true }));

	it("should return 200 with Body", async () => {
		const githubUrl = "https://www.github.com/";

		const resShorten = await request(app).post("/shorten").send({
			url: githubUrl,
		});

		const res = await request(app).get(`/${resShorten.body.code}/stats`);
		expect(res.statusCode).toBe(200);
		expect(res.body.code).toBe(resShorten.body.code);
		// expect(res.body.shortUrl).toBe(resShorten.body.shortUrl);
		expect(res.body.originalUrl).toBe(githubUrl);
		expect(res.body.hits).toBeInstanceOf(Number);
	});

	it("should return 404", async () => {
		const res = await request(app).get(`/111/stats`);
		expect(res.statusCode).toBe(404);
	});
});
