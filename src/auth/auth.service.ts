import { Injectable } from '@nestjs/common';
import { hashPassword, comparePasswords, generateToken } from './auth.utils'; // Zakładając, że masz plik z funkcjami do szyfrowania hasła i generowania tokenów
import { PrismaService } from 'src/shared/service/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async registerUser(firstName: string, lastName: string, email: string, password: string): Promise<any> {
    const hashedPassword = await hashPassword(password);
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

  async loginUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email }, include: { password: true } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await comparePasswords(password, user.password.hashedPassword);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Tu możesz wygenerować token sesji i zwrócić go użytkownikowi
    const token = generateToken(user.id);
    return { token };
  }

  async getUserSessions(userId: string): Promise<any> {
    return this.prisma.session.findMany({ where: { userId } });
  }

  async logout(userId: string): Promise<void> {
    // Tutaj dodaj logikę wylogowania użytkownika, na przykład usuwanie sesji, czyszczenie tokenów, czyszczenie cookies itp.
    // Możesz również użyć różnych mechanizmów do wylogowania użytkownika, w zależności od implementacji

    // Przykładowa operacja wylogowania - wycofanie tokenu sesji dla danego użytkownika
    // Tutaj przykładowe użycie Prisma do znalezienia i usunięcia sesji użytkownika
    await this.prisma.session.deleteMany({ where: { userId } });
    
    // Możesz dodać inne operacje wylogowania, np. czyszczenie tokenów z czarnej listy, usuwanie zalogowania w innych usługach itp.
  }
  
}