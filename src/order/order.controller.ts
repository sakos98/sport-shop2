import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { ProductsService } from 'src/products/products.service';

@Controller('order')
export class OrderController {
    constructor (
        private orderService: OrderService,
        private productService: ProductsService
        ) {}
    
    @Get('/')
  async getAll() {
    return this.orderService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = await this.orderService.getById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.orderService.getById(id)))
      throw new NotFoundException('Product not found');
    await this.orderService.deleteById(id);
    return { success: true };
  }

  @Post()
  async createOrder(
    @Body() orderData: { productId: string; userId: string; address: string },
  ) {
    const product = await this.productService.getById(orderData.productId);

    if (!product) {
      throw new Error('Product not found');
    }

    const createdOrder = await this.orderService.createOrder({
      productId: product.id, // Wybierz tylko pole `id` z zwróconego produktu
      userId: orderData.userId,
      address: orderData.address,
    });
    return createdOrder;
  }

  @Put(':id')
  async updateOrder(
    @Param('id') orderId: string,
    @Body() updatedOrderData: { productId?: string; client?: string; address?: string },
  ) {
    const updatedOrder = await this.orderService.updateOrder(orderId, updatedOrderData);
    return updatedOrder;
  }
}
