import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('ideas')

export class IdeaEntity {
   @PrimaryGeneratedColumn("increment")
   id: number

   @Column("text")
   description: string

   @Column("tinyint", {default: 1})
   status: number
   
   @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" })
   created_at: Date;
   
   @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()" })
   updated_at: Date;

}