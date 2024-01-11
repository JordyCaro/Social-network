// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/red-social-db', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }),
    JwtModule.register({
      secret: 'your-secret-key', // Reemplaza con tu clave secreta real
      signOptions: { expiresIn: '60s' }, // Ajusta según sea necesario
    }),
    PassportModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
