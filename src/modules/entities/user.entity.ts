import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: string;

    @ApiProperty()
    @Column({type: 'jsonb'})
    data!: string;
}