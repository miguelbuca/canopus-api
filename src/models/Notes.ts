import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Tasks } from "./Tasks";

@Index("notes_pkey", ["id"], { unique: true })
@Entity("notes", { schema: "public" })
export class Notes {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

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

  @ManyToOne(() => Tasks, (tasks) => tasks.notes)
  @JoinColumn([{ name: "task_id", referencedColumnName: "id" }])
  task: Tasks;
}
