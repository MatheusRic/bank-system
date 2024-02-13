import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Transfer } from "./transfer.entity";

import { Exclude } from "class-transformer";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 150 })
  @Exclude()
  password: string;

  @Column({ length: 150, unique: true })
  pix: string;

  @Column({ length: 150, unique: true })
  cpf: string;

  @Column({ default: 1000 })
  value: number;

  @OneToMany(() => Transfer, (transfer) => transfer.sender)
  sentTransfers: Transfer[];

  @OneToMany(() => Transfer, (transfer) => transfer.recipient)
  receivedTransfers: Transfer[];
}

export default User;
