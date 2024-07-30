import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { TypeormFilter } from 'src/filter/typeorm.filter';
import { AuthService } from './auth.service';
import { SigninUserDto } from './dto/signin-user.dto';

@Controller('auth')
@UseFilters(new TypeormFilter)
export class AuthController {
    constructor (private authService:AuthService){}
    @Post('/login')
    async login(@Body() dto:SigninUserDto){
        const {username,password}=dto
        const token=await this.authService.login(username,password)
    }
}
