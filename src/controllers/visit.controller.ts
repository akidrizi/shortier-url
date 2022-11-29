import { Request, Response } from "express";
import { ShortUrl } from "../models/shortUrl";
import { Stats } from "../models/stats";

export async function getOriginalUrl(req: Request, res: Response): Promise<Response | void> {
	const code = req?.params?.code as string;

	const shortUrl = await ShortUrl.findOne({ where: { code: code } });
	if (!shortUrl) {
		return res.status(404).send("Not Found");
	}

	await Stats.increment("hits", { where: { shortUrlCode: shortUrl.code } });

	return res.redirect(shortUrl.original);
}
