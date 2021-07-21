import {IsString} from 'class-validator';
import { User } from '../model/user.entity';

export class CreateUserDto{
    @IsString()
    readonly username:string;

    @IsString()
    readonly password:string;
    
    toEntity():User{
        const user = new User();
        user.username = this.username;
        user.password = this.password;
        return user;
    }
}