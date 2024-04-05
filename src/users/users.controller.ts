import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // get user by user id
  @Get('get-user-by-user-id/:user_id')
  async getUserByUserId(@Param('user_id') user_id: number): Promise<any> {
    return this.usersService.getUserByUserId(Number(user_id));
  }

  // Get voucher by user_id
  @Get(':user_id/vouchers')
  async getVoucherByUserId(@Param('user_id') user_id:number): Promise <any>{
    return this.usersService.getVoucherByUserId(Number(user_id));
  }
}
