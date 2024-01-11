// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Si necesitas exportar UserService para su uso en otros módulos
})
export class UserModule {}
