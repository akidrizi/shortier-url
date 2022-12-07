import express from "express";

import { getStats } from "../controllers/stats.controller";

const statsRouter = express.Router();

/**
 * GET /:code/stats display the analytics of a shortened URL.
 */
statsRouter.get("/:code/stats", getStats);

export default statsRouter;
