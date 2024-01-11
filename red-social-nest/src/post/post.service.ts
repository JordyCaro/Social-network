// src/post/post.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PostModel } from './post.model';
import { CreatePostDto, UpdatePostDto } from './post.dto/post.dto';

@Injectable()
export class PostService {
  private posts: PostModel[] = [];

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  create(createPostDto: CreatePostDto) {
    const newPost: PostModel = {
      id: Date.now().toString(),
      ...createPostDto,
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    const postIndex = this.posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }

    const updatedPost = { ...this.posts[postIndex], ...updatePostDto, updatedAt: new Date() };
    this.posts[postIndex] = updatedPost;
    return updatedPost;
  }

  remove(id: string) {
    const postIndex = this.posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }
    const deletedPost = this.posts.splice(postIndex, 1)[0];
    return deletedPost;
  }
}
