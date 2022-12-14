import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";

import Stats from "./stats.model";

@Table({ tableName: "short_urls", createdAt: false, updatedAt: false })
export default class ShortUrl extends Model {
	@Column({ type: DataType.STRING(36), primaryKey: true, allowNull: false })
	code!: string;

	@Column({ type: DataType.TEXT, allowNull: false })
	original!: string;

	@HasOne(() => Stats)
	stats!: Stats;
}
