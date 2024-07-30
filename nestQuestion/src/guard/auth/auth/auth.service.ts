import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { UserService } from 'src/user/user/user.service';
@Injectable()
export class AuthService {
    constructor(private userService:UserService,private jwt:JwtService){}
    login(name,password){
        
    }
}
