import request from "supertest";

import app from "../../src/app";

jest.mock("../../src/models/short-url.model");
jest.mock("../../src/models/stats.model");

beforeEach(() => {
	jest.resetAllMocks();
});

describe("GET /:code/stats", () => {
	// it("should return 200 with Body", async () => {
	// 	const githubUrl = "https://www.github.com/";
	//
	// 	const resShorten = await request(app).post("/shorten").send({
	// 		url: githubUrl,
	// 	});
	// 	expect(resShorten.statusCode).toBe(201);
	//
	// 	const res = await request(app).get(`/${resShorten.body.code}/stats`);
	//
	// 	expect(res.statusCode).toBe(200);
	// 	expect(res.body.code).toBe(resShorten.body.code);
	// 	expect(typeof res.body.shortUrl).toBe("string");
	// 	expect(res.body.originalUrl).toBe(githubUrl);
	// 	expect(typeof res.body.hits).toBe("string");
	// });

	it("should return 404", async () => {
		const res = await request(app).get(`/111/stats`);
		expect(res.statusCode).toBe(404);
	});
});
