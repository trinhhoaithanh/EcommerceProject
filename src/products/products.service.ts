import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { responseArray, responseObject } from 'util/response-template';

@Injectable()
export class ProductsService {
  prisma = new PrismaClient();

  // get all products
  async getAllProduct() {
    try {
      const products = await this.prisma.products.findMany();
      return responseArray(
        200,
        'Get all products successfully!',
        products.length,
        products,
      );
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }

  //get product by product id
  async getProductsByProductId(product_id: number): Promise<any> {
      try {
        let checkProduct = await this.prisma.products.findUnique({
          where:{
            
                product_id:  Number(product_id)
        
          }
        })

        if (checkProduct) {
          return responseObject(200, 'Get products by id successfully!', checkProduct); 
        }
        else {
          throw new NotFoundException(responseObject(404, "Request is invalid", "Product is not found!")); 
        }
      }
      catch (err) {
        throw new HttpException(err.response, err.status);
      }
  }

  //get product by category id
  async getProductsByCategoryId(category_id: number): Promise<any> {
    try {
      let checkCategory = await this.prisma.products.findMany({
        where:{
           categories:{
            category_id:  Number(category_id)
           }
              
      
        }
      })

      if (checkCategory) {
        return responseObject(200, 'Get products successfully!', checkCategory); 
      }
      else {
        throw new NotFoundException(responseObject(404, "Request is invalid", "Category is not found!")); 
      }
    }
    catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
  }
