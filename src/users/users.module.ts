import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { UsersControllers } from './users.controllers';
import { UsersService } from './users.service';
import { PetsModule } from '../pets/pets.module';
import { PetsService } from '../pets/pets.service';

@Module({
  imports: [PrismaService, forwardRef(() => PetsService), PetsModule],
  controllers: [UsersControllers],
  providers: [PrismaService, UsersService, PetsService],
})
export class UsersModule {}
