import { postShortenUrl } from "../controllers/shorten.controller";
import express from "express";

export const shortenRouter = express.Router();

/**
 * POST /shorten
 * JSON { "url": "http://example.com" }
 *
 * Returns the just/previously generated URL.
 * JSON { "shortenedUrl": "//host.machine/gAGNU6FFZ" }
 */
shortenRouter.post("/shorten", postShortenUrl);
