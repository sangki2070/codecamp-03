import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") //PK
  _id!: string;

  @PrimaryGeneratedColumn("increment") //PK
  number!: number;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "integer" })
  price!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}
