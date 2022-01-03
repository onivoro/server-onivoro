import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from '../entities/entities.module';
import { AuthorizationLocalController } from './authorization-local.controller';
import { AuthorizationLocalService } from './authorization-local.service';
import { JwtStrategy } from './jwt.strategy';

const providers = [AuthorizationLocalService, JwtStrategy];
const controllers = [AuthorizationLocalController];

@Module({})
export class AuthorizationModule {
    static forRoot(authConfig: { secret: string }): DynamicModule {
        const { secret } = authConfig;

        return {
            module: AuthorizationModule,
            controllers,
            providers: [...providers,
            { provide: 'authConfig', useValue: authConfig }
            ],
            imports: [EntitiesModule.forFun(), TypeOrmModule, JwtModule.register({ secret })]
        };
    }
}
