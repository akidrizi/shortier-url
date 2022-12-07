import express from "express";
import morgan from "morgan";
import strongErrorHandler from "strong-error-handler";

import shortenRouter from "./routes/shorten.route";
import statsRouter from "./routes/stats.route";
import visitRouter from "./routes/visit.route";

import { isProduction } from "./utils/config";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
// Routes
app.use("/", shortenRouter);
app.use("/", statsRouter);
app.use("/", visitRouter);

app.use(
	strongErrorHandler({
		debug: !isProduction(),
		log: isProduction(),
	})
);

export default app;
