import { Controller, Post } from '@nestjs/common';
import { AuthorizationLocalService } from './authorization-local.service';

@Controller({})
export class AuthorizationLocalController {
    constructor(private readonly authService: AuthorizationLocalService) { }

    @Post()
    async signin() {
        return await this.authService.signin();
    }

    @Post()
    async signup() {
        return await this.authService.signup();
    }
}
