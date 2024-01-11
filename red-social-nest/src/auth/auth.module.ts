// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module'; // Asegúrate de que PostModule esté importado aquí
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-default-secret-key', // Actualizado para usar variables de entorno
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    PostModule, // Asegúrate de que UserModule y PostModule estén importados aquí
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
