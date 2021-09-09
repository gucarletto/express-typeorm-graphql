import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity('transactions')
export class Transaction extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @Column()
    value: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}
