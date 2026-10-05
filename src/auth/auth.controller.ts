import { Controller, Body, Post, HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {

    @Post('login')
    login(@Body() loginDto: LoginDto)
     {
        // login logic here
     }
}