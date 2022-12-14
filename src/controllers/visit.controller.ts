import { NextFunction, Request, Response } from "express";

import ShortUrl from "../models/short-url.model";
import Stats from "../models/stats.model";

export async function getOriginalUrl(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
	try {
		const code = req?.params?.code as string;

		const shortUrl = await ShortUrl.findOne({ where: { code: code } });
		if (!shortUrl) {
			return res.status(404).send("Not Found");
		}

		await Stats.increment("hits", { where: { shortUrlCode: shortUrl.code } });

		return res.redirect(shortUrl.original);
	} catch (error) {
		next(error);
		return res.status(500);
	}
}
