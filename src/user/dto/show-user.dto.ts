import {IsInt, IsString} from 'class-validator';

export class ShowUserDto{
    @IsInt()
    id:Number;

    @IsString()
    username:string;
}