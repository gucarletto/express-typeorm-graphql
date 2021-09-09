import { IsEmail } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, BeforeInsert } from "typeorm";
import bcrypt from 'bcrypt';

const salt = 12;
@Entity('users')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    @IsEmail()
    email: string;

    @Column()
    name: string;

    @Column({ select: false })
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @BeforeInsert()
    hashPassword() {
      bcrypt.hash(this.password, salt).then((hash: string) =>{
        this.password = hash;
      });
    }
}
