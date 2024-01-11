// src/post/post.module.ts

import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService], // Si necesitas exportar PostService para su uso en otros módulos
})
export class PostModule {}
