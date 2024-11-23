import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listing } from './Entities/Listing.entity';
import { CreateListingDto } from './Dtos/Create.dto';
import { UpdateListingDto } from './Dtos/Update.dto';

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(Listing)
    private readonly listingRepository: Repository<Listing>,
  ) {}

  async create(createListingDto: CreateListingDto): Promise<Listing> {
    const listing = this.listingRepository.create(createListingDto);
    return this.listingRepository.save(listing);
  }

  findAll(): Promise<Listing[]> {
    return this.listingRepository.find();
  }

  async findOne(id: number): Promise<Listing> {
    const listing = await this.listingRepository.findOne({ where: { id } });
    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
    return listing;
  }

  async update(id: number, updateListingDto: UpdateListingDto): Promise<Listing> {
    const listing = await this.findOne(id);
    Object.assign(listing, updateListingDto);
    return this.listingRepository.save(listing);
  }

  async remove(id: number): Promise<void> {
    const result = await this.listingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
  }
}
