import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/users/users.dto';
import { Auth } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) : Promise<Partial<Auth>> {
        return await this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/me')
    async info(@Request() req): Promise<Partial<User>> {
        return req.user;
    }

}
