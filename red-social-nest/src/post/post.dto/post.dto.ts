// src/post/post.dto.ts

export class CreatePostDto {
    readonly title: string;
    readonly content: string;
  }
  
  export class UpdatePostDto {
    readonly title?: string;
    readonly content?: string;
  }
  