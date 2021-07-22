import { Relation } from 'src/relation/model/relation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ShowUserDto } from '../dto/show-user.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(type=>Relation, relation=> relation.user)
  relations : Relation[];

  toDto(): ShowUserDto {
    const dto = new ShowUserDto();
    dto.id = this.id;
    dto.username = this.username;

    return dto;
  }
}