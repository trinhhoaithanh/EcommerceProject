import { PrismaClient } from '@prisma/client';
import { responseArray } from 'util/response-template';
import {  HttpException, Injectable } from '@nestjs/common';
@Injectable()
export class CategoriesService {
  
  prisma = new PrismaClient();
  
  // get all categories
  async getAllCategories(){
    try {
      const categories = await this.prisma.categories.findMany(); 
      return responseArray(200, 'Get all categories successfully!', categories.length, categories); 
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
}
