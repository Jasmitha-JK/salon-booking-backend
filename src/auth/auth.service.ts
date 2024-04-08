import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/user.model';

@Injectable()
export class AuthService {
    private readonly jwtSecret = 'taylor_swift'; 

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async register(user: User): Promise<string | object> {
    const existingUser = await this.userService.findOne({ username: user.username });
    if (existingUser) {
      return { message: 'Username already exists' };
    }

    const hashedPassword = await bcrypt.hash(user.password, 10); // Adjust salt rounds as needed
    const newUser = await this.userService.create({ username: user.username, password: hashedPassword });
    return { message: 'User registration successful' }; // Consider returning less sensitive data
  }

  async login(username: string, password: string): Promise<{ token?: string; message?: string }> {
    const user = await this.userService.findOne({ username });
    if (!user) {
      return { message: 'Invalid credentials' };
    }

    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      return { message: 'Invalid credentials' };
    }

    const payload = { username: user.username, userId: user._id }; // Customize payload
    const token = this.jwtService.sign(payload, { secret: this.jwtSecret });
    return { token };
  }

  async logout(): Promise<void> {
      }
      
    
}

