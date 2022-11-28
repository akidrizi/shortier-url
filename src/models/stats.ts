import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Permalink } from "./permalink";

@Table({ tableName: "stats", createdAt: true, updatedAt: true })
export class Stats extends Model {
	@Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
	id!: string;

	@Column({ type: DataType.UUID, allowNull: false })
	@ForeignKey(() => Permalink)
	permalinkId!: string;

	@Column({ type: DataType.NUMBER, allowNull: true, defaultValue: 0 })
	hits!: string;

	@Column({ type: DataType.STRING, allowNull: false })
	shorten!: string;

	@BelongsTo(() => Permalink)
	permalink!: Permalink;
}
