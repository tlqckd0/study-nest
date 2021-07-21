import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ShowUserDto } from '../dto/show-user.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  toDto():ShowUserDto{
      const dto = new ShowUserDto();
      dto.id = this.id;
      dto.username = this.username;

      return dto;
  }
}