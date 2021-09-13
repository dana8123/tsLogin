import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }
  @Post()
  async createUser(@Body() user: User): Promise<string> {
    await this.userService.createUser(user);
    return Object.assign({
      data: { ...user },
      statusCode: 201,
      statusMsg: 'save successfully',
    });
  }
}
