// src/post/post.model.ts

export interface PostModel {
    id: string;
    title: string;
    content: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
  }
  