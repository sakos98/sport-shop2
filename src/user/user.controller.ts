import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint do przeglądania wszystkich zarejestrowanych użytkowników
  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  // Endpoint do przeglądania zalogowanego użytkownika
  @Get('me')
  async getLoggedInUser(@Req() request: any) {
    // Przy założeniu, że informacje o zalogowanym użytkowniku są przechowywane w request.user
    return await this.userService.getLoggedInUser(request.user.id);
  }
}
