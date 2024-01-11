// src/user/user.dto.ts

export class CreateUserDto {
    readonly fullName: string;
    readonly age: number;
    readonly email: string;
    readonly password: string;
  }
  
  export class UpdateUserDto {
    readonly fullName?: string;
    readonly age?: number;
    readonly email?: string;
    readonly password?: string;
  }
  