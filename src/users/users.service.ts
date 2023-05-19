import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/users.dto';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from '../core/orm/prisma.service';
import { User } from '@prisma/client';
import { PetsService } from '../pets/pets.service';

@ApiTags('Users')
@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly petService: PetsService,
  ) {}

  async createUser(userData: CreateUsersDto): Promise<User> {
    return this.prismaService.user.create({
      data: {
        name: userData.name,
        city: userData.city,
        email: userData.email,
        status: userData.status,
        age: userData.age,
        avatar: userData.avatar,
      },
    });
  }

  async getUserList(): Promise<User[]> {
    return this.prismaService.user.findMany({
      orderBy: {
        name: 'asc',
      },
      take: 5,
    });
  }

  async getUserById(userId: string) {
    return this.prismaService.user.findFirst({
      where: { id: Number(userId) },
      select: {
        id: true,
        name: true,
        city: true,
        age: true,
      },
      // include: {
      //   pets: true,
      // },
    });
  }

  async deleteUser(userId: string) {
    return this.prismaService.user.delete({
      where: { id: Number(userId) },
    });
  }

  async updateUser(userId: string, body: CreateUsersDto) {
    return this.prismaService.user.update({
      where: { id: Number(userId) },
      data: body,
    });
  }
}
