import { Request, Response } from "express";
import { ShortUrl } from "../models/shortUrl";
import { Stats } from "../models/stats";
import { getShortenedUrl } from "../services/shortener.service";

export async function getStats(req: Request, res: Response): Promise<Response> {
	const code = req?.params?.code as string;

	const shortUrl = await ShortUrl.findOne({ include: [Stats], where: { code: code } });
	if (!shortUrl) {
		return res.status(404).send("Not Found");
	}

	const response = {
		code: shortUrl.code,
		shortUrl: getShortenedUrl(req, shortUrl.code),
		originalUrl: shortUrl.original,
		hits: shortUrl.stats.hits,
	};

	return res.json(response);
}
