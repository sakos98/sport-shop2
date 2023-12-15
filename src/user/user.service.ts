// user.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/service/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers() {
    return await this.prismaService.user.findMany();
  }

  async getLoggedInUser(userId: string) {
    return await this.prismaService.user.findUnique({
      where: { id: userId },
    });
  }
}
