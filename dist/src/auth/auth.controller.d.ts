import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: any): Promise<any>;
    loginUser(body: {
        email: string;
        password: string;
    }): Promise<any>;
    getUserSessions(body: {
        userId: string;
    }): Promise<any>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
