export const MySQL = {
	database: process.env.MYSQL_DB || "shortier",
	host: process.env.MYSQL_HOST || "localhost",
	user: process.env.MYSQL_USER || "user",
	pass: process.env.MYSQL_PASS || "pass",
};
