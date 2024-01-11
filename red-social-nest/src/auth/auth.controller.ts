// src/auth/auth.controller.ts

import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy'; // Asegúrate de que esté importado correctamente
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtStrategy) // Aquí se utiliza directamente JwtStrategy como guardia
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
