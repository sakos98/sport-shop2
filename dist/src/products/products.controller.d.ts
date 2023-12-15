import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dtos/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        photo: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        photo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(bookData: Partial<CreateProductDTO>): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        photo: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProduct(id: string, productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
}
