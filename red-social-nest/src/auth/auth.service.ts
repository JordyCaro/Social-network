// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Implementa la lógica para buscar y validar un usuario por ID
  // Retorna el usuario si es válido, o null si no se encuentra
  async validateUserById(id: string): Promise<any> {
    try {
      const user = await this.userService.findById(id);
      return user || null;
    } catch (error) {
      console.error(`Error al buscar usuario por ID: ${error.message}`);
      return null;
    }
  }

  // Otras funciones de autenticación según sea necesario
  // Esta función es opcional, dependiendo de cómo implementes la obtención del usuario durante el login
  async validateUser(username: string, password: string): Promise<any> {
    try {
      const user = await this.userService.findByCredentials(username, password);
      return user || null;
    } catch (error) {
      console.error(`Error al validar credenciales del usuario: ${error.message}`);
      return null;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
