import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dtos/create-product.dto';


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get('/')
  async getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = await this.productsService.getById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.productsService.getById(id)))
      throw new NotFoundException('Product not found');
    await this.productsService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() bookData: Partial<CreateProductDTO>) {
    return this.productsService.create(bookData as CreateProductDTO);
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    const updatedProduct = await this.productsService.updateById(id, productData);
    return updatedProduct;
  }
}
