import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('users')

export class UsersEntity {
   @PrimaryGeneratedColumn("increment")
   id: number

   @Column()
   name: string

   @Column({unique: true})
   email: string

   @Column()
   password: string
   
   @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" })
   created_at: Date;
   
   @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()" })
   updated_at: Date;
}
