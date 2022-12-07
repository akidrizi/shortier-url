import { NextFunction, Request, Response } from "express";

import ShortUrl from "../models/short-url.model";
import Stats from "../models/stats.model";

import { getShortenedUrl } from "../services/shortener.service";

export async function getStats(req: Request, res: Response, next: NextFunction): Promise<Response> {
	try {
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
	} catch (error) {
		next(error);
		return res.status(500);
	}
}
