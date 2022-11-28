import { Sequelize } from "sequelize-typescript";
import mysql2 from "mysql2";

import { MySQLConfig } from "./config";
import { Link } from "../models/link";
import { Visit } from "../models/visit";

export const sequelize = new Sequelize(MySQLConfig.database, MySQLConfig.user, MySQLConfig.pass, {
	host: MySQLConfig.host,
	port: 3306,
	dialect: "mysql",
	dialectModule: mysql2,
	models: [Link, Visit],
});
