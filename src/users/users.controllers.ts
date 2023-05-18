import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersControllers {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getUsersList(@Req() req: any, @Res() res: any) {
    return res.status(HttpStatus.OK).json(await this.userService.getUserList());
  }

  @ApiParam({ name: 'userId', required: true })
  @Get('/:userId')
  async getUserInfo(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: string,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.getUserById(userId));
  }

  // @ApiCreatedResponse({
  //   description: 'The record has been successfully created.',
  //   type:User,
  // })
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

  @Delete(':/userId')
  async deleteUser(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: string,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.deleteUser(userId));
  }

  @Patch(':/userId')
  async updateUser(
    @Req() req: any,
    @Res() res: any,
    @Body() body: CreateUsersDto,
    @Param('userId') userId: string,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.updateUser(userId, body));
  }
}
