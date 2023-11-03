import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers';
import { AuthService } from 'src/services';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwt_config } from 'src/config/jwt';
import { JwtStrategy } from 'src/config/jwt-strategy';

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: jwt_config.secret,
            signOptions: {
              expiresIn: jwt_config.expired,
            },
          }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}