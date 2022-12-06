import { app } from "./app";
import { config, isProduction } from "./utils/config";
import { sequelize } from "./utils/database";
import { createServer } from "http";

const port = config.app.port;

(async () => {
	await sequelize.sync({ force: !isProduction() });

	createServer(app).listen(port, () => console.log(`Server listen on http://127.0.0.1:${port}`));
})();
