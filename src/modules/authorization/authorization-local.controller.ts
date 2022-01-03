import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthorizationLocalService } from './authorization-local.service';

const prefix = 'auth';

@ApiTags(prefix)
@Controller(prefix)
export class AuthorizationLocalController {
    constructor(private readonly authService: AuthorizationLocalService) { }

    @Post(AuthorizationLocalController.prototype.signin.name)
    async signin(@Body() body: AuthDto) {
        return await this.authService.signin(body);
    }

    @Post(AuthorizationLocalController.prototype.signup.name)
    async signup(@Body() body: AuthDto) {
        return await this.authService.signup(body);
    }

    @Post(AuthorizationLocalController.prototype.signout.name)
    async signout() {
        return await this.authService.signout();
    }
}
