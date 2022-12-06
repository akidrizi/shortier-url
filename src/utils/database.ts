import mysql2 from "mysql2";
import { Sequelize } from "sequelize-typescript";

import { ShortUrl } from "../models/shortUrl";
import { Stats } from "../models/stats";
import { config } from "./config";

export const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.pass, {
	host: config.mysql.host,
	port: config.mysql.port,
	dialect: "mysql",
	dialectModule: mysql2,
	models: [ShortUrl, Stats],
});
