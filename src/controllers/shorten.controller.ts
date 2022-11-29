import { Request, Response } from "express";
import { badRequestResponse } from "../utils/http-error-response";
import { ShortUrl } from "../models/shortUrl";
import { Stats } from "../models/stats";
import { generateUniqueCode, getShortenedUrl } from "../services/shortener.service";
import { isUrlHttp } from "../services/url-validator.service";

export async function postShortenUrl(req: Request, res: Response): Promise<Response> {
	const url = req?.body?.url;
	if (!url) {
		return res.status(400).send(badRequestResponse("Missing field 'url' from JSON request."));
	}

	if (!isUrlHttp(url)) {
		return res.status(400).send(badRequestResponse("Invalid URL."));
	}

	const shortUrl = await ShortUrl.findOne({ include: [Stats], where: { original: url } });
	if (shortUrl) {
		return res.json({
			shortenedUrl: getShortenedUrl(req, shortUrl.code),
		});
	}

	const code = generateUniqueCode();
	await ShortUrl.create({
		code: code,
		original: url,
	});
	// Navigation property does not work properly, performing manually.
	await Stats.create({
		shortUrlCode: code,
		hits: 0,
	});

	const response = {
		shortenedUrl: getShortenedUrl(req, code),
	};

	return res.json(response);
}
