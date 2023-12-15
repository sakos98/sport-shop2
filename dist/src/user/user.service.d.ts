import { PrismaService } from 'src/shared/service/prisma.service';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAllUsers(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    getLoggedInUser(userId: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
