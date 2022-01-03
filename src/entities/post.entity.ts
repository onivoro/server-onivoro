import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IArticle, IAuthor, IElemental, INavigable, OpenGraphObjectType } from '@onivoro/isomorphic-seo';

@Entity()
export class Post implements IArticle{
    authors?: IAuthor[];
    idField: string;
    image?: string;
    type: OpenGraphObjectType;
    url?: string;
    label: string;
    icon: string;
    children?: INavigable[];
    keywords: string[];
    published?: boolean;
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: string;
    
    @ApiProperty()
    @Column()
    title!: string;

    @ApiProperty()
    @Column()
    description!: string;

    @ApiProperty()
    @Column()
    slug!: string;

    @ApiProperty()
    @Column({type: 'jsonb'})
    elements!: IElemental[];
}