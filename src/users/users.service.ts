import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { responseObject } from 'util/response-template';

@Injectable()
export class UsersService {
  prisma = new PrismaClient();

  //get user by user id
  async getUserByUserId(user_id: number): Promise<any> {
    try {
      let checkProduct = await this.prisma.users.findUnique({
        where:{
           
              user_id:  Number(user_id)
      
        }
      })

      if (checkProduct) {
        return responseObject(200, 'Get user by id successfully!', checkProduct); 
      }
      else {
        throw new NotFoundException(responseObject(404, "Request is invalid", "User is not found!")); 
      }
    }
    catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }


  async getVoucherByUserId(user_id:number):Promise<any>{
    try {
      let checkVoucher = await this.prisma.vouchers.findMany({
        where:{
           
              user_id:  Number(user_id)
      
        }
      })

      if (checkVoucher) {
        return responseObject(200, 'Get vouchers by id successfully!', checkVoucher); 
      }
      else {
        throw new NotFoundException(responseObject(404, "Request is invalid", "Voucher is not found!")); 
      }
    }
    catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
}
