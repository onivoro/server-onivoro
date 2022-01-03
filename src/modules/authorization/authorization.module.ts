import { DynamicModule, Module } from '@nestjs/common';
import { AuthorizationLocalController } from './authorization-local.controller';

@Module({})
export class AuthorizationModule {
    forFun(): DynamicModule {
        return {
            module: AuthorizationModule,
            controllers: [AuthorizationLocalController],
        };
    }
}
