import { createServer } from "http";

import { app } from "./app";
import { sequelize } from "./utils/database";
import { AppConfig, isProduction } from "./utils/config";

const port = AppConfig.port;

(async () => {
	await sequelize.sync({ force: !isProduction() });

	createServer(app).listen(port, () => console.log(`Server listen on port ${port}`));
})();
