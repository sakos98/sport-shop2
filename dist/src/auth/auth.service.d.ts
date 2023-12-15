import { PrismaService } from 'src/shared/service/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    registerUser(firstName: string, lastName: string, email: string, password: string): Promise<any>;
    loginUser(email: string, password: string): Promise<any>;
    getUserSessions(userId: string): Promise<any>;
    logout(userId: string): Promise<void>;
}
