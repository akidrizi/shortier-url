import request from "supertest";

import app from "../../src/app";
import { sequelize } from "../../src/utils/database";

describe("POST /shorten", () => {
	beforeAll(() => sequelize.sync({ force: false }));
	afterAll(() => sequelize.sync({ force: false }));

	it("should return 201 with Body", async () => {
		const githubUrl = "https://www.github.com/";

		const res = await request(app).post("/shorten").send({
			url: githubUrl,
		});

		expect(res.statusCode).toBe(201);
		expect(typeof res.body.shortUrl).toBe("string");
		expect(typeof res.body.code).toBe("string");
	});

	it("should return 400 for missing field", async () => {
		const githubUrl = "https://www.github.com/";

		const res = await request(app).post("/shorten").send({
			urlFAIL: githubUrl,
		});

		expect(res.statusCode).toBe(400);
	});

	it("should return 400 for invalid URL", async () => {
		const githubUrl = "app://www.github.com/";

		const res = await request(app).post("/shorten").send({
			url: githubUrl,
		});

		expect(res.statusCode).toBe(400);
	});
});
