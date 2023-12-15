import { PrismaService } from 'src/shared/service/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dtos/create-product.dto';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product | null>;
    deleteById(id: Product['id']): Promise<Product>;
    create(productData: CreateProductDTO): Promise<Product>;
    updateById(id: Product['id'], productData: Partial<Product>): Promise<Product>;
}
