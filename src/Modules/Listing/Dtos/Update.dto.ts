import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateListingDto {
  @ApiProperty({
    description: 'The updated title of the listing',
    example: 'Modern 3-bedroom apartment',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'The updated description of the listing',
    example: 'Newly renovated, located near central park.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The updated price of the listing',
    example: 130000,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({
    description: 'The updated location of the listing',
    example: 'Uptown, NY',
    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;
}
