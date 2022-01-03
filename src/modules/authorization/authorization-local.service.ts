import { Injectable } from '@nestjs/common';
import { UserRepository } from '../entities/user.repository';
import { AuthDto } from './auth.dto';

@Injectable({})
export class AuthorizationLocalService {
    constructor(private readonly userRepo: UserRepository) {}
    async signin(credentials: AuthDto) {
        const user = await this.userRepo.get({})
    }

    signup() {
        throw new Error('Method not implemented.');
    }
}
