import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/users.dto";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string): Promise<Partial<User> | UnauthorizedException | null> {
        const user: Partial<User> | null = await this.authService.validateUser(email, password);
        if (!user) {
          throw new UnauthorizedException();
        }

        return user;
      }
}