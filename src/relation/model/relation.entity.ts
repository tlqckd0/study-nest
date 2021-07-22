import { User } from 'src/user/model/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ShowRelationDto } from '../dto/show-relation.dto';

@Entity()
export class Relation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    user_id:number;

    @ManyToOne(type => User, user => user.relations)
    @JoinColumn({name:'user_id'})
    user: User;

    toDto():ShowRelationDto{
        const relation = new ShowRelationDto();
        relation.id = this.id;
        relation.title = this.title;
        relation.description = this.description;
        relation.user = this.user;
        return relation;
    }
}