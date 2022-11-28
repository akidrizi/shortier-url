import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Link } from "./link";

@Table({ tableName: "visits", createdAt: true, updatedAt: false })
export class Visit extends Model {
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	id!: number;

	@Column({ type: DataType.STRING, allowNull: false })
	client!: string;

	@Column({ type: DataType.INTEGER, allowNull: false })
	@ForeignKey(() => Link)
	permalinkId!: number;

	@BelongsTo(() => Link)
	link!: Link;
}
