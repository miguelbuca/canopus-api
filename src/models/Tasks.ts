import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Notes } from "./Notes";
import { Categories } from "./Categories";

@Index("tasks_pkey", ["id"], { unique: true })
@Entity("tasks", { schema: "public" })
export class Tasks {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", {
    name: "situation",
    length: 150,
    default: () => "'pendente'",
  })
  situation: string;

  @Column("integer", { name: "priority" })
  priority: number;

  @Column("timestamp without time zone", { name: "deadline" })
  deadline: Date;

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

  @OneToMany(() => Notes, (notes) => notes.task)
  notes: Notes[];

  @ManyToOne(() => Categories, (categories) => categories.tasks)
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: Categories;
}
