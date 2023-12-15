import { Controller, Post, Body, Req, UseGuards, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
async register(@Body() body: any) {
  const { firstName, lastName, email, password } = body;

  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestException('Missing required fields');
  }

  return this.authService.registerUser(firstName, lastName, email, password);
}

  @Post('/login')
  async loginUser(@Body() body: { email: string; password: string }): Promise<any> {
    return this.authService.loginUser(body.email, body.password);
  }

  @Post('/sessions')
  async getUserSessions(@Body() body: { userId: string }): Promise<any> {
    return this.authService.getUserSessions(body.userId);
  }
  
  @Post('/logout')
  @UseGuards(JwtAuthGuard) 
  async logout(@Req() req) {
    await this.authService.logout(req.user); 

    return { message: 'Logged out successfully' };
  }
}