import { HttpException, Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaClient } from '@prisma/client';
import { responseArray } from 'util/response-template';

@Injectable()
export class StoresService {
  prisma = new PrismaClient();

  async getAllStore(){
    try {
      const stores = await this.prisma.stores.findMany(); 
      return responseArray(200, 'Get all strores successfully!', stores.length, stores); 
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
}
