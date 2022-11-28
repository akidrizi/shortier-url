import { Router } from "express";
import { Link } from "../models/link";

export const shortenRouter = () =>
	Router().post("/shorten", (req, res, next) =>
		Link.create(req.body)
			.then((link) => res.json(link))
			.catch(next)
	);
