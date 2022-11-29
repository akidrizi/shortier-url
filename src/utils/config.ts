interface AppConfig {
	baseUrl: string;
	port: number;
}

interface MySQLConfig {
	database: string;
	host: string;
	port: number;
	user: string;
	pass: string;
}

export interface Config {
	app: AppConfig;
	mysql: MySQLConfig;
}

const appConfig: AppConfig = {
	baseUrl: process.env.APP_BASE_URL || "shortier.app",
	port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
};

const dbConf: MySQLConfig = {
	database: process.env.MYSQL_DB || "shortier",
	host: process.env.MYSQL_HOST || "localhost",
	port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
	user: process.env.MYSQL_USER || "user",
	pass: process.env.MYSQL_PASS || "pass",
};

export function isProduction(): boolean {
	return process.env.NODE_ENV === "production";
}

export const config: Config = {
	app: appConfig,
	mysql: dbConf,
};
