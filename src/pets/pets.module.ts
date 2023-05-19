import { forwardRef, Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '../core/orm/prisma.service';

@Module({
  imports: [forwardRef(() => UsersModule), PrismaService],
  providers: [PetsService, UsersModule, PrismaService],
  controllers: [PetsController],
  exports: [PetsService],
})
export class PetsModule {}
