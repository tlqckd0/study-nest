import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { CreateRelationDto } from "./dto/create-relation.dto";
import { ShowRelationDto } from "./dto/show-relation.dto";
import { RelationService } from "./relation.servise";


@Controller('relation')
export class RelationController {
    constructor(private readonly relationService: RelationService) { }

    @Get()
    getAll(): Promise<ShowRelationDto[]> {
        return this.relationService.getAll().then(rels => rels.map(rel => {
            return rel.toDto();
        }));

    }

    @Get('/user/:user_id')
    getByUserId(): Promise<ShowRelationDto[]> {
        return this.relationService.getAll().then(rels => rels.map(rel => {
            return rel.toDto();
        }));
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number): Promise<ShowRelationDto> {
        return this.relationService.findOne(id).then(rel => rel.toDto());
    }

    @Post()
    async createRelation(@Body() dto: CreateRelationDto): Promise<String> {
        await this.relationService.create(dto);
        return Object.assign({
            data:{...CreateRelationDto},
            statusCode:201,
            statusMsg:'Post Successfully',
        })
    }

    @Put(':id')
    updateRelation(): Promise<String> {
        return Object.assign({

        })
    }


    @Delete(':id')
    deleteRelation(@Param('id', ParseIntPipe) id: number): Promise<String> {
        this.relationService.delete(id);
        return Object.assign({

        })
    }

    // @Delete('user/:user_id')
    // deleteUserRelation(@Param('user_id', ParseIntPipe) user_id:number):Promise<String>{
    //     this.relationService.deleteByUserId(user_id);
    //     return Object.assign({

    //     })
    // }
}