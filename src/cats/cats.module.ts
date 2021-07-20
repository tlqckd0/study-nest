import { Module } from '@nestjs/common';
import { CatsController } from './cats.controllers';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {
}