import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [TypeOrmModule.forRoot(), OrdersModule, IdeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
