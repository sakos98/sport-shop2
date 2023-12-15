"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_utils_1 = require("./auth.utils");
const prisma_service_1 = require("../shared/service/prisma.service");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registerUser(firstName, lastName, email, password) {
        const hashedPassword = await (0, auth_utils_1.hashPassword)(password);
        return this.prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: {
                    create: {
                        hashedPassword,
                    },
                },
            },
        });
    }
    async loginUser(email, password) {
        const user = await this.prisma.user.findUnique({ where: { email }, include: { password: true } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await (0, auth_utils_1.comparePasswords)(password, user.password.hashedPassword);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = (0, auth_utils_1.generateToken)(user.id);
        return { token };
    }
    async getUserSessions(userId) {
        return this.prisma.session.findMany({ where: { userId } });
    }
    async logout(userId) {
        await this.prisma.session.deleteMany({ where: { userId } });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map