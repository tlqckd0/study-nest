import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ShowUserDto } from './dto/show-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  allUser():Promise<ShowUserDto[]>{
    return this.userService.findAll().then(
      userList=> userList.map(entity=>entity.toDto()));
  }
  @Get(':id')
  oneUser(@Param('id' ,ParseIntPipe) id:number):Promise<ShowUserDto>{
    return this.userService.findOne(id).then(user=>user.toDto());
  }
  @Put(':id')
  async update(@Param('id' ,ParseIntPipe) id:number,  @Body() updateUserDto: UpdateUserDto) : Promise<string>{
    await this.userService.update(id,updateUserDto);
    return Object.assign({
      data:{...updateUserDto},
      statusCode:201,
      statusMsg:`updated successfully`
    })
  }
  @Delete(':id')
  async delete(@Param('id' ,ParseIntPipe) id:number):Promise<string>{
    await this.userService.delete(id);
    return Object.assign({      
      statusCode:201,
      statusMsg: `delete successfully`,
    })
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto):Promise<string> {
    await this.userService.create(createUserDto);
    return Object.assign({
      data:{...createUserDto},
      statusCode:201,
      statusMsg: `saved successfully`,
    })
  }
}
