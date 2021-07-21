import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }


  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(id:number, updateUserDto: UpdateUserDto): Promise<void>{
    const user = updateUserDto.toEntity();
    await this.userRepository.update(id,user);
  }

  async delete(id:number):Promise<void>{
    await this.userRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.userRepository.save(createUserDto.toEntity());
    //여기서 DB에 저장하자.
  }
}
