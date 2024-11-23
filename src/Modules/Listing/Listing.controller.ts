import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ListingService } from './Listing.service';
import { CreateListingDto } from './Dtos/Create.dto';
import { UpdateListingDto } from './Dtos/Update.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('api/listing') 
@Controller('api/listing') 
export class ListingController {
  constructor(private readonly _listingService: ListingService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new listing' }) 
  @ApiResponse({ status: 201, description: 'The listing has been created.' }) 
  @ApiResponse({ status: 400, description: 'Invalid data.' }) 
  create(@Body() createListingDto: CreateListingDto) {
    return this._listingService.create(createListingDto);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Get all listings' })
  @ApiResponse({ status: 200, description: 'List of all listings.' })
  findAll() {
    return this._listingService.findAll();
  }

  @Get('getById/:id')
  @ApiOperation({ summary: 'Get a listing by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the listing' }) 
  @ApiResponse({ status: 200, description: 'The listing has been retrieved.' })
  @ApiResponse({ status: 404, description: 'Listing not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this._listingService.findOne(id);
  }

  @Put('update/:id')
  @ApiOperation({ summary: 'Update a listing by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the listing' })
  @ApiResponse({ status: 200, description: 'The listing has been updated.' })
  @ApiResponse({ status: 404, description: 'Listing not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateListingDto: UpdateListingDto,
  ) {
    return this._listingService.update(id, updateListingDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a listing by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the listing' })
  @ApiResponse({ status: 200, description: 'The listing has been deleted.' })
  @ApiResponse({ status: 404, description: 'Listing not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this._listingService.remove(id);
  }
}
