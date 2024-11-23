// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingModule } from './Modules/Listing/Listing.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '/app/real-estate.db',

      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ListingModule,
  ],
})
export class AppModule {}
