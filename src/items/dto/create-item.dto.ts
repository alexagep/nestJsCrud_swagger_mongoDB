import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({ required: true })
  readonly qty: number;
}
