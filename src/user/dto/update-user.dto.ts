import {IsNumber, IsString} from 'class-validator';
import { PrimaryColumn } from 'typeorm';
import { User } from '../model/user.entity';

export class UpdateUserDto{
    @IsString()
    username:string;

    @IsString()
    password:string;
    
    toEntity():User{
        const user = new User();
        user.username = this.username;
        user.password = this.password;
        return user;
    }
}