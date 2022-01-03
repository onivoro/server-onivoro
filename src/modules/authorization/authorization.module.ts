import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from '../entities/entities.module';
import { AuthorizationLocalController } from './authorization-local.controller';
import { AuthorizationLocalService } from './authorization-local.service';

const providers = [AuthorizationLocalService];
const controllers = [AuthorizationLocalController];

@Module({})
export class AuthorizationModule {
    static forFun(): DynamicModule {
        return {
            module: AuthorizationModule,
            controllers,
            providers,
            imports: [EntitiesModule.forFun(), TypeOrmModule]
        };
    }
}
