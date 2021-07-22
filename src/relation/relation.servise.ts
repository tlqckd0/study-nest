import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/model/user.entity";
import { Repository } from "typeorm";
import { CreateRelationDto } from "./dto/create-relation.dto";
import { Relation } from "./model/relation.entity";

@Injectable()
export class RelationService {
    constructor(@InjectRepository(Relation)
    private relationRepository: Repository<Relation>) { }

    getAll(): Promise<Relation[]> {
        return this.relationRepository
            .createQueryBuilder("relation")
            .leftJoinAndSelect('relation.user', 'user')
            .getMany();
    }

    findOneByUserId(user_id: number): Promise<Relation[]> {
        return this.relationRepository
            .createQueryBuilder("relation")
            .leftJoinAndSelect('relation.user', 'user')
            .where('relation.user_id = :user_id', { user_id })
            .getMany();
    }

    findOne(id: number): Promise<Relation> {
        return this.relationRepository
            .createQueryBuilder("relation")
            .leftJoinAndSelect('relation.user', 'user')
            .where('relation.id = :id', { id })
            .getOne();
    }

    async create(dto: CreateRelationDto): Promise<void> {
        const relation = dto.toEntity();
        //연결되는 유저 찾아서 넣어준다.
        this.relationRepository.save(relation);
    }


    async update(id: number): Promise<void> {

    }

    async delete(id: number): Promise<void> {
        await this.relationRepository.delete(id);
    }
    // async deleteByUserId(user_id:number):Promise<void>{
    //     await this.relationRepository.delete({user_id});
    // }


}