// src/user/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModel } from './user.model';
import { UpdateUserDto } from './user.dto/user.dto';
import { PostModel } from '../post/post.model'; // Importa el modelo de Post

@Injectable()
export class UserService {
  private users: UserModel[] = [];

  // Encuentra todos los usuarios
  findAll(): UserModel[] {
    return this.users;
  }

  // Encuentra un usuario por su ID
  findById(id: string): UserModel {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Encuentra un usuario por su nombre de usuario
  findByUsername(username: string): UserModel {
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Encuentra un usuario por sus credenciales (nombre de usuario y contraseña)
  findByCredentials(username: string, password: string): UserModel | null {
    const user = this.users.find((u) => u.username === username && u.password === password);
    return user || null;
  }

  // Actualiza un usuario por su ID
  update(id: string, updateUserDto: UpdateUserDto): UserModel {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  // Elimina un usuario por su ID
  remove(id: string): UserModel {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    const deletedUser = this.users.splice(userIndex, 1)[0];
    return deletedUser;
  }

  // Añade un nuevo post al usuario
  addPostToUser(userId: string, postId: string): UserModel {
    const user = this.findById(userId);
    user.posts = [...(user.posts || []), postId];
    return user;
  }

  // Elimina un post del usuario
  removePostFromUser(userId: string, postId: string): UserModel {
    const user = this.findById(userId);
    user.posts = user.posts.filter((postId) => postId !== postId);
    return user;
  }
}
