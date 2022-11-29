import shortid from "shortid";
import { config, isProduction } from "../utils/config";
import { Request } from "express";

/**
 * Generates unique hash.
 *
 * @using shortid
 */
export function generateUniqueCode(): string {
	return shortid.generate();
}

/**
 * Returns the full short URL with the host.
 *
 * ! When in production it will use environment variable APP_BASE_URL.
 *
 * @param req
 * @param code
 */
export function getShortenedUrl(req: Request, code: string): string {
	const host = req.get("host");
	if (isProduction()) return `https://${config.app.baseUrl}/${code}`;

	return `://${host}/${code}`;
}
