import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingController } from './Listing.controller';
import { ListingService } from './Listing.service';
import { Listing } from './Entities/Listing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Listing])],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}
