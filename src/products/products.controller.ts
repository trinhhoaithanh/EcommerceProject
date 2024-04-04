import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/products/')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // get all products
  @Get('')
  getAllProduct(){
    return this.productsService.getAllProduct();
  }

  // get products by category id
  @Get('get-products-by-category/:category_id')
  async getProductsByCategoryId(

    @Param('category_id') category_id: number,

  ): Promise<any> {

    return this.productsService.getProductsByCategoryId(Number(category_id));

  }

// get products by product id
  @Get('get-product-by-product-id/:product_id')
  async getProductsByProductId(

    @Param('product_id') product_id: number,

  ): Promise<any> {

    return this.productsService.getProductsByProductId(Number(product_id));

  }
  
  
}
