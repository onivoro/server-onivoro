import { DynamicModule, Module } from '@nestjs/common';
import { AuthorizationLocalController } from './authorization-local.controller';
import { AuthorizationLocalService } from './authorization-local.service';

const providers = [AuthorizationLocalService];

@Module({})
export class AuthorizationModule {
    forFun(): DynamicModule {
        return {
            module: AuthorizationModule,
            controllers: [AuthorizationLocalController],
            providers
        };
    }
}
