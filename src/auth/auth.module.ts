import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule} from '@nestjs/jwt';  
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule,JwtModule.register({
    secret: 'my-secret-key', //replace with your own secret key 
    signOptions: { expiresIn: '1h' },//token expiration time  
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}  