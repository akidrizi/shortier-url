import express from "express";
import strongErrorHandler from "strong-error-handler";
import { json } from "body-parser";

import { isProduction } from "./utils/config";
import { shortenRouter } from "./routes/shorten";

export const app = express();

app.use(json());

app.use(shortenRouter());

app.use(
	strongErrorHandler({
		debug: !isProduction(),
	})
);
