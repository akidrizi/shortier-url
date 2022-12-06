import express from "express";

import { getOriginalUrl } from "../controllers/visit.controller";

export const visitUrlRouter = express.Router();

/**
 * GET /:code visit the original URL.
 *
 * ! Modern browsers will prevent any non-HTTPS server redirection when using hostname.
 */
visitUrlRouter.get("/:code", getOriginalUrl);
