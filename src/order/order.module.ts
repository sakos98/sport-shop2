import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PrismaService } from 'src/shared/service/prisma.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, ProductsService]
})
export class OrderModule {}
