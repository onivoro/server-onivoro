import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IAuthConfig } from "src/configs/auth.config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @Inject('authConfig') private readonly authConfig: IAuthConfig
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: authConfig.ignoreExpiration,
            secretOrKey: authConfig.secret
        });
    }

    async validate(payload: any) {
        return payload;
    }
}