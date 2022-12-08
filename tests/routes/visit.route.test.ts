import request from "supertest";

import app from "../../src/app";

jest.mock("../../src/models/short-url.model");
jest.mock("../../src/models/stats.model");

beforeEach(() => {
	jest.resetAllMocks();
});

describe("GET /:code", () => {
	// it("should return 302", async () => {
	// 	const githubUrl = "https://www.github.com/";
	//
	// 	const resShorten = await request(app).post("/shorten").send({
	// 		url: githubUrl,
	// 	});
	//
	// 	const res = await request(app).get(`/${resShorten.body.code}`);
	// 	expect(res.statusCode).toBe(302);
	// });

	it("should return 404", async () => {
		const res = await request(app).get("/111");
		expect(res.statusCode).toBe(404);
	});
});
