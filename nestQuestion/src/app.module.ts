import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './guard/auth/auth/auth.controller';
import { AuthService } from './guard/auth/auth/auth.service';
import { UserService } from './user/user/user.service';
import { UserController } from './user/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
