import request from "supertest";

import app from "../../src/app";

jest.mock("../../src/models/short-url.model");
jest.mock("../../src/models/stats.model");

beforeEach(() => {
	jest.resetAllMocks();
});

describe("POST /shorten", () => {
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
