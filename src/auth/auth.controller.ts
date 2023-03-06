import { Controller, Post, Body, Get } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() login: LoginAuthDto) {
    const { user, token } = await this.authService.login(login);

    return {
      token,
      user,
    };
  }

  @Get('populate')
  async populate() {
    return this.authService.populate();
  }
}
