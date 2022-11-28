import dotenv from "dotenv";
import path from "path";

export function isProduction(): boolean {
	return process.env.NODE_ENV === "production";
}

// Load custom .env file for development.
if (!isProduction()) {
	dotenv.config({ path: path.join(__dirname, "../../.env") });
}

export const MySQLConfig = {
	database: process.env.MYSQL_DB as string,
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER as string,
	pass: process.env.MYSQL_PASS,
};

export const AppConfig = {
	baseUrl: process.env.APP_BASE_URL,
	port: process.env.APP_PORT || 5000,
};
