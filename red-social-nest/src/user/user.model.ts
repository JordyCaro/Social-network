// src/user/user.model.ts

export interface UserModel {
    id: string;
    fullName: string;
    age: number;
    email: string;
    password: string;
    posts: string[]; // IDs de los posts relacionados
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
  