import express from "express";
import morgan from "morgan";
import strongErrorHandler from "strong-error-handler";

import { isProduction } from "./utils/config";
// Routes
import { shortenRouter } from "./routes/shorten.route";
import { visitUrlRouter } from "./routes/visit.route";
import { statsRouter } from "./routes/stats.route";

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
