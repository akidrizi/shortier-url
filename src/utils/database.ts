import { Sequelize } from "sequelize-typescript";
import mysql2 from "mysql2";
import { MySQL } from "./config";

import { Permalink } from "../models/permalink";
import { Stats } from "../models/stats";

export const sequelize = new Sequelize(MySQL.database, MySQL.user, MySQL.pass, {
	host: MySQL.host,
	port: 3306,
	dialect: "mysql",
	dialectModule: mysql2,
	models: [Permalink, Stats],
});
