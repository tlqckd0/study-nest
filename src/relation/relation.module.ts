import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Relation } from './model/relation.entity';
import { RelationController } from './relation.controller';
import { RelationService } from './relation.servise';

@Module({
  imports:[TypeOrmModule.forFeature([Relation]),UserModule],
  controllers:[RelationController],
  providers:[RelationService],
})
export class RelationModel {
}