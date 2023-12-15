export declare function hashPassword(password: string): Promise<string>;
export declare function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean>;
export declare function generateToken(userId: string): string;
