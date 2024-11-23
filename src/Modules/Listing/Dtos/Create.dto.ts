import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListingDto {
  @ApiProperty({
    description: 'The title of the listing',
    example: 'Spacious 2-bedroom apartment',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'A detailed description of the listing',
    example: 'Located in the city center with modern amenities.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The price of the listing in USD',
    example: 120000,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'The location of the listing',
    example: 'Downtown, NY',
  })
  @IsNotEmpty()
  @IsString()
  location: string;
}
