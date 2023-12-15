import { OrderService } from './order.service';
import { ProductsService } from 'src/products/products.service';
export declare class OrderController {
    private orderService;
    private productService;
    constructor(orderService: OrderService, productService: ProductsService);
    getAll(): Promise<{
        id: string;
        productId: string;
        userId: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        productId: string;
        userId: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    createOrder(orderData: {
        productId: string;
        userId: string;
        address: string;
    }): Promise<{
        id: string;
        productId: string;
        userId: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateOrder(orderId: string, updatedOrderData: {
        productId?: string;
        client?: string;
        address?: string;
    }): Promise<{
        id: string;
        productId: string;
        userId: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
