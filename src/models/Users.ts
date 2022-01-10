import { Column, Entity, Index } from "typeorm";

@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "fullname", length: 150 })
  fullname: string;

  @Column("character varying", { name: "profile", length: 500 })
  profile: string;

  @Column("character varying", { name: "email", length: 100 })
  email: string;

  @Column("character varying", { name: "password", length: 100 })
  password: string;

  @Column("character varying", { name: "access", length: 150 })
  access: string;

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
}
