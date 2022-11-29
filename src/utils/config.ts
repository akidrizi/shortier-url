export function isProduction(): boolean {
	return process.env.NODE_ENV === "production";
}

export const MySQLConfig = {
	database: process.env.MYSQL_DB || "shortier",
	host: process.env.MYSQL_HOST || "localhost",
	user: process.env.MYSQL_USER || "user",
	pass: process.env.MYSQL_PASS || "pass",
};

export const AppConfig = {
	baseUrl: process.env.APP_BASE_URL || "shortier.app",
	port: process.env.APP_PORT || 3000,
};
