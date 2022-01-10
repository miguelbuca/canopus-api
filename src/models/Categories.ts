import { Column, Entity, Index, OneToMany } from "typeorm";
import { Tasks } from "./Tasks";

@Index("categories_pkey", ["id"], { unique: true })
@Entity("categories", { schema: "public" })
export class Categories {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name", length: 250 })
  name: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp with time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;

  @OneToMany(() => Tasks, (tasks) => tasks.category)
  tasks: Tasks[];
}
