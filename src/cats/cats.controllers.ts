import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto';
import{Cat} from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController{
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }
    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) :string{
        console.log(id);
        return `This action returns a #${id} cats`;
    }
}