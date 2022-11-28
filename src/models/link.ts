import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Visit } from "./visit";

@Table({ tableName: "permalinks", createdAt: true, updatedAt: false })
export class Link extends Model {
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	id!: number;

	@Column({ type: DataType.STRING, unique: true })
	code!: string;

	@Column({ type: DataType.STRING, allowNull: false })
	original!: string;

	@Column({ type: DataType.STRING, allowNull: false })
	shorten!: string;

	@HasMany(() => Visit)
	visits!: Visit[];
}
