import express from "express";
import morgan from "morgan";
import strongErrorHandler from "strong-error-handler";

import { shortenRouter } from "./routes/shorten.route";
import { statsRouter } from "./routes/stats.route";
import { visitUrlRouter } from "./routes/visit.route";

import { isProduction } from "./utils/config";

export const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use("/", shortenRouter);
app.use("/", statsRouter);
app.use("/", visitUrlRouter);

app.use(
	strongErrorHandler({
		debug: !isProduction(),
		log: isProduction(),
	})
);
