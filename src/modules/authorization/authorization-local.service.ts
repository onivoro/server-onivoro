import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../entities/user.repository';
import { AuthDto } from './auth.dto';

@Injectable({})
export class AuthorizationLocalService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly jwtSvc: JwtService,
    ) { }

    async signin({ username: email, password: password }: AuthDto) {
        const [user] = await this.userRepo.get({ email });
        if (!user) throw new UnauthorizedException('no user found with email: ' + email);
        if (password !== user.password) throw new UnauthorizedException('no user found with email: ' + email);
        return this.signUser(user.id, user.email, 'user');
    }

    async signup({ username: email, password }: AuthDto) {
        const user = await this.userRepo.post([{ email, password }]);
        return user;
    }

    async signout() {
        return {}
    }

    private signUser(sub: string, email: string, claim: string) {
        return this.jwtSvc.sign({
            sub,
            email,
            claim
        });
    }
}
