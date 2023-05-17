import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CreateUsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersControllers {
  constructor(private readonly userService: UsersService) {}
  // @Get()
  // async getUsersList() {}

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUsersDto,
    @Res() res: any,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(body));
  }

  // @Delete(':/id')
  // async deleteUser() {
  //
  // }
  //
  // @Patch(':/id')
  // async updateUser() {}
}
