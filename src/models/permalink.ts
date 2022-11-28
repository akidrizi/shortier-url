import { Table, Model, Column, DataType, HasOne } from "sequelize-typescript";
import { Stats } from "./stats";

@Table({ tableName: "permalinks", createdAt: true, updatedAt: false })
export class Permalink extends Model {
	@Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
	id!: string;

	@Column({ type: DataType.STRING, allowNull: false })
	original!: string;

	@Column({ type: DataType.STRING, allowNull: false })
	shorten!: string;

	@HasOne(() => Stats)
	stats: Stats | undefined;
}
