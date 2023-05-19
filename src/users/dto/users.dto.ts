import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: true, example: 'user@mail.com' })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  avatar: string;
}
