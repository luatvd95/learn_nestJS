import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>) {}

    async findOne(user: Partial<User>) : Promise<User> {
        return await this.usersRepository.findOne(user);
    }
}
