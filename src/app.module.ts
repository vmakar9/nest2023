import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [UsersModule, PetsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
