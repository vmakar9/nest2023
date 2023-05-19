import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { PetDto } from './dto/pet.dto';
import { UsersService } from '../users/users.service';
import { Pets } from '@prisma/client';

@Injectable()
export class PetsService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  async createAnimal(data: PetDto, userId: string) {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new HttpException('no user', HttpStatus.NOT_FOUND);
    }
    return this.prismaService.pets.create({
      data: {
        name: data.name,
        type: data.type,
        ownerId: user.id,
        status: data.status,
        // image: data.image,
        // logo: data.logo,
      },
    });
  }

  async createAnimalSecond(data: any, userId: string): Promise<Pets> {
    return this.prismaService.pets.create({
      data: {
        name: data.name,
        type: data.type,
        ownerId: data.ownerId,
        status: data.status,
        // image: data.image,
        // logo: data.logo,
      },
    });
  }
  async checkUser(userId: string) {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      return null;
    }
    return user;
  }

  async updateAnimal(data: any): Promise<Pets> {
    return this.prismaService.pets.create({
      data: {
        name: data.name,
        type: data.type,
        ownerId: data.ownerId,
        status: data.status,
        // image: data.image,
        // logo: data.logo,
      },
    });
  }
}
