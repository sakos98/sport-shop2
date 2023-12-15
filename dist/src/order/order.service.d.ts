import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/service/prisma.service';
export declare class OrderService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order | null>;
    deleteById(id: Order['id']): Promise<Order>;
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
