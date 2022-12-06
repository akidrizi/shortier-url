import { getStats } from "../controllers/stats.controller";
import express from "express";

export const statsRouter = express.Router();

/**
 * GET /:code/stats display the analytics of a shortened URL.
 */
statsRouter.get("/:code/stats", getStats);
