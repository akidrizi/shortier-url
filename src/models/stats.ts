import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { ShortUrl } from "./shortUrl";

@Table({ tableName: "stats", createdAt: false, updatedAt: false })
export class Stats extends Model {
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	id!: number;

	@Column({ type: DataType.STRING(36), allowNull: false })
	@ForeignKey(() => ShortUrl)
	shortUrlCode!: string;

	@Column({ type: DataType.INTEGER, allowNull: false })
	hits!: number;

	@BelongsTo(() => ShortUrl)
	shortUrl!: ShortUrl;
}
