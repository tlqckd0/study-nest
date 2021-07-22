import {IsInt, IsString} from 'class-validator';
import { User } from 'src/user/model/user.entity';

export class ShowRelationDto{
    @IsInt()
    id:number;

    @IsString()
    title:string;

    @IsString()
    description:string;

    user:User;
    
}