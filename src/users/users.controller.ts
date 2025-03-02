import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '../utilities/api.response';
import { MailerService } from '../utilities/mailer.util';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);

    await this.mailerService.sendMail({
      from: `"${newUser.name}" <${newUser.email}>`,
      to: 'joattah3@gmail.com',
      subject: newUser.subject
        ? `${newUser.name} (${newUser.email}) - ${newUser.subject}`
        : `${newUser.name} (${newUser.email})`,
      text: newUser.message,
      html: `<p>${newUser.message}</p>`,
    });

    return new ApiResponse({
      error: false,
      statusCode: 201,
      message: 'User created successfully',
      data: newUser,
    });
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return new ApiResponse({
      error: false,
      statusCode: 200,
      message: 'Users retrieved successfully',
      data: users,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return new ApiResponse({
      error: user ? false : true,
      statusCode: user ? 200 : 404,
      message: user ? 'User retrieved successfully' : 'User not found',
      data: user ? user : undefined,
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    return new ApiResponse({
      error: updatedUser ? false : true,
      statusCode: updatedUser ? 200 : 404,
      message: updatedUser ? 'User updated successfully' : 'User not found',
      data: updatedUser ? updatedUser : undefined,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.usersService.delete(id);
    return new ApiResponse({
      error: user ? false : true,
      statusCode: user ? 200 : 404,
      message: user ? 'User deleted successfully' : 'User not found',
    });
  }
}
