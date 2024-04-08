import {
  Controller,
  Post,
  Delete,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/users')
  async register(@Body() user: any) {
    try {
      const newUser = await this.authService.register(user);
      return newUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  @Post('/login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    try {
      const { token } = await this.authService.login(username, password);
      return token;
    } catch (error) {
      throw new HttpException(error, HttpStatus.UNAUTHORIZED);
    }
  }

  @Delete('/logout')
async logout() {
  await this.authService.logout(); // Implement logout logic if needed
  return { message: 'Logged out successfully' };
}

}
