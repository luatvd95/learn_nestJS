import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { orderEntity } from './order.entity';

@Injectable()
export class OrdersService {
    constructor(@InjectRepository(orderEntity) private ordersRepository: Repository<orderEntity>){}

    async findAll(): Promise<orderEntity[]> {
        return await this.ordersRepository.find();
      }
}
