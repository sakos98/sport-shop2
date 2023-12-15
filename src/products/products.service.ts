import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(private prismaService: PrismaService) { }

    public getAll(): Promise<Product[]> {
        return this.prismaService.product.findMany()
    }

    public getById(id: Product['id']): Promise<Product | null> {
        return this.prismaService.product.findUnique({
            where: { id },
        });
    }

    public deleteById(id: Product['id']): Promise<Product> {
        return this.prismaService.product.delete({
            where: { id },
        });
    }

    public async create(productData: CreateProductDTO): Promise<Product> {
      try {
        const parsedPrice = parseFloat(productData.price.toString());
  
        if (isNaN(parsedPrice)) {
          throw new Error('Invalid number provided');
        }
  
        return await this.prismaService.product.create({
          data: {
            name: productData.name,
            price: parsedPrice,
            description: productData.description,
            photo: productData.photo,
          },
        });
      } catch (error) {
        if (error.code === 'P2002') {
          throw new ConflictException('Name is already taken');
        }
        throw error;
      }
    }
    
  public async updateById(id: Product['id'], productData: Partial<Product>): Promise<Product> {
    try {
      const { price } = productData;
      const parsedPrice = parseFloat(price.toString());

      if (isNaN(parsedPrice)) {
        throw new Error('Invalid number provided');
      }

      return await this.prismaService.product.update({
        where: { id },
        data: {
          name: productData.name,
          price: parsedPrice,
          description: productData.description,
          photo: productData.photo
        } as Prisma.ProductUpdateInput,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Name is already taken');
      }
      throw error;
    }
  }
}
