import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserInfoLogin } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { Auth } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<Partial<User> | null> {      
        const user = await this.usersService.findOne({email: email});
        if (user &&  parseInt(user.password) === parseInt(password)) {
          const { password, ...result } = user;

          return result;
        }

      return null;
    }

    async login(user: User): Promise<Partial<Auth>> {
      try {
        const payload = { email: user.email, id: user.id };
        const accessToken = await this.jwtService.sign(payload);
        const userInfo: UserInfoLogin = await this.jwtService.verify(accessToken);

        return { accessToken: accessToken, expire: userInfo.exp}
      } catch (error) {
        console.log(error);
      }
    }
}
