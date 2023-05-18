import { Module } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { UsersControllers } from './users.controllers';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaService],
  controllers: [UsersControllers],
  providers: [PrismaService, UsersService],
})
export class UsersModule {}
