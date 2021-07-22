import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService : AuthService){
        super();
    }

    async validate(username:string, password:string):Promise<any>{
        const user = await this.authService.validateUser(username, password);
        console.log('local strategy 위치 :',user);
        if(!user){
            throw new UnauthorizedException();
        }
        user.validate = true;
        return user;
    }
}