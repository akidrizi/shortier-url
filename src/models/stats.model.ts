import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import ShortUrl from "./short-url.model";

@Table({ tableName: "stats", createdAt: false, updatedAt: false })
export default class Stats extends Model {
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
