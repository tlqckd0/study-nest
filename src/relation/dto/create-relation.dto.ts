import {IsString} from 'class-validator';
import { Relation } from '../model/relation.entity';

export class CreateRelationDto{
    @IsString()
    readonly title:string;

    @IsString()
    readonly description:string;

    @IsString()
    readonly user_id:number;
    
    toEntity():Relation{
        const relation = new Relation();
        relation.title = this.title;
        relation.description = this.description;     
        relation.user_id = this.user_id;   
        return relation;
    }
}