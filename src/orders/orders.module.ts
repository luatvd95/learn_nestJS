import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { orderEntity } from './order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
    imports: [TypeOrmModule.forFeature([orderEntity])],
    controllers: [OrdersController],
    providers: [OrdersService]
  })
export class OrdersModule {
}
