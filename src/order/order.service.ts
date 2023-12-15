import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/service/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany()
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    })
  }

  async createOrder(orderData: { productId: string; userId: string; address: string }) {
    const createdOrder = await this.prismaService.order.create({
      data: orderData,
    });
    return createdOrder;
  }

  async updateOrder(orderId: string, updatedOrderData: { productId?: string; client?: string; address?: string }) {
    const updatedOrder = await this.prismaService.order.update({
      where: { id: orderId },
      data: updatedOrderData,
    });
    return updatedOrder;
  }



}
