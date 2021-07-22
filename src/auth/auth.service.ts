import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByName(username);
        console.log('서비스단 :', user);
        if (user && user.password === password) {
            const { password, ...result } = user;//비밀번호 빼고 전송
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        console.log('jwt변환위한 것..',payload)
        return {
            access_token: this.jwtService.sign(payload)
        }

    }
}
