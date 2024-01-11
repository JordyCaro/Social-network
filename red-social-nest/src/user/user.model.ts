// src/user/user.model.ts

export interface UserModel {
  id: string;
  fullName: string;
  age: number;
  email: string;
  password: string;
  posts?: string[]; // Agrega esta línea si hay una relación con los posts
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  username: string; // Agrega esta línea para incluir la propiedad 'username'
}
