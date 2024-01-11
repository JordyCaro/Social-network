// src/user/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModel } from './user.model';
import { UpdateUserDto } from './user.dto/user.dto';

@Injectable()
export class UserService {
  private users: UserModel[] = [];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Corregir el método findById para buscar un usuario por ID
  findById(id: string) {
    const user = this.users.find((u) => u.id === id);
    return user || null;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const deletedUser = this.users.splice(userIndex, 1)[0];
    return deletedUser;
  }

  findByCredentials(username: string, password: string): UserModel | null {
    const user = this.users.find((u) => u.username === username && u.password === password);
    return user || null;
  }
}
