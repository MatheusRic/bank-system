import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./user.entity";

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: string;

  @Column()
  senderName: string;

  @Column()
  recipientId: string;

  @Column()
  recipientName: string;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.sentTransfers)
  sender: User;

  @ManyToOne(() => User, (user) => user.receivedTransfers)
  recipient: User;
}
