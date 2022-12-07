import express from "express";

import { getOriginalUrl } from "../controllers/visit.controller";

const visitRouter = express.Router();

/**
 * GET /:code visit the original URL.
 *
 * ! Modern browsers will prevent any non-HTTPS server redirection when using hostname.
 */
visitRouter.get("/:code", getOriginalUrl);

export default visitRouter;
