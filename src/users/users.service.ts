import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/users.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Users')
@Injectable()
export class UsersService {
  private users: any = [];

  async createUser(userData: CreateUsersDto) {
    this.users.push(userData);
    return this.users;
  }

  async deleteUser(id: string) {
    const user = this.users.find((item) => item.id === id);
    //slice на вибір
    return this.users;
  }
}
