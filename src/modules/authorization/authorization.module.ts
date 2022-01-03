import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from '../entities/entities.module';
import { AuthorizationLocalController } from './authorization-local.controller';
import { AuthorizationLocalService } from './authorization-local.service';

const providers = [AuthorizationLocalService];
const controllers = [AuthorizationLocalController];

@Module({})
export class AuthorizationModule {
    static forRoot({ secret }: { secret: string }): DynamicModule {
        return {
            module: AuthorizationModule,
            controllers,
            providers,
            imports: [EntitiesModule.forFun(), TypeOrmModule, JwtModule.register({ secret })]
        };
    }
}
